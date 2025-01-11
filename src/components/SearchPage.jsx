import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import SearchBar from "./SearchBar";
import BookDetails from "./BookDetails";
import Pagination from "./Pagination";

/*
 * SearchPage Component
 * Handles user search input, fetches book data from the Open Library API,
 * and displays paginated search results.
 */

function SearchPage() {
  const [query, setQuery] = useState(""); // Search query
  const [books, setBooks] = useState([]); // List of books fetched
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error message
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [totalPages, setTotalPages] = useState(10); // Total pages (limit initially to 10 to optimize performance)
  const [selectedBook, setSelectedBook] = useState(null); // Book for detailed view


  //Fetches books from the Open Library API


  const fetchBooks = async () => {
    // Return early if query is empty
    if (!query.trim()) {
        setError("Please enter a search query.");
        setBooks([]);
        return;
      }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}&page=${currentPage}&limit=10`
      );
      if (!response.ok) throw new Error("Failed to fetch books.");

      const data = await response.json();

      //Erro message if no result is found
      if (data.docs.length === 0) {
        setError("No books found for your search.");
        setBooks([]);
        return;
      }

      // Update state with fetched data
      setBooks(data.docs);
      setTotalPages(Math.min(data.numFound / 10, 10)); // Limit results to 10 pages initially
    } catch (err) {
      setError("Failed to fetch books. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

 
   //Triggers book fetching whenever the query or page changes.
 
  useEffect(() => {
    fetchBooks();
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on page change
  }, [query, currentPage]);

  // Handle search submission
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setCurrentPage(1);
 
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
 
  };
  return (
    <div className="container min-h-screen">
      {/* Header Section */}
      <div className="header font-primary py-10">
        <h2 className="text-4xl text-primary font-black py-4">Search</h2>
        <SearchBar onSearch={handleSearch} />
      </div>
      {/* Loading Indicator */}
      {loading && (
        <div className="text-xl font-primary text-primary font-semibold text-center py-10">
          Loading...
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="text-xl font-primary text-primary text-red-500 font-semibold text-center py-4">
          {error}
        </div>
      )}

      {/* Display Books */}
      {!loading && !error && (
      <div className="flex flex-wrap justify-around">
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            authors={book.author_name}
            publisher={book.publisher?.[0]}
            coverId={book.cover_i}
            bookDetails={book}
            onClick={() => setSelectedBook(book)}
          />
        ))}
      </div>
      )}
      {/* Pagination Controls */}
      {!loading && books.length > 0 && (
      <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      {/* Detailed Book Popup */}
      {selectedBook && (
        <BookDetails
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </div>
  );
}
export default SearchPage;
