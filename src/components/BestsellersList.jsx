import React, { useState } from "react";
import books from "../assets/bestsellers.json";

/**
 * BestsellersList Component
 * Displays a list of bestsellers with a filter for years.
 */
function BestsellersList() {
  const [selectedYear, setSelectedYear] = useState("All");

  // Filter books based on the selected year
  const filteredBooks =
    selectedYear === "All"
      ? books
      : books.filter((book) => book.year === parseInt(selectedYear));

  const years = ["All", ...new Set(books.map((book) => book.year))];

  return (
    <div className="container font-primary text-primary min-h-screen py-10">
      <h2 className="text-4xl text-primary font-black py-4">Bestsellers List</h2>
      <div className="line border-t-2 border-primary w-full"></div>
      <div className="pt-2 pb-10">
        
        <div id="yearFilter" className="space-x-4">
  {years.map((year) => (
    <button
      key={year}
      className={`border-2 border-primary py-2 px-3 my-2 text-lg font-semibold ${
        selectedYear === year
          ? "bg-primary text-white" // Selected button
          : "border-primary text-primary hover:bg-primary hover:text-white"
      }`}
      onClick={() => setSelectedYear(year)}
    >
      {year}
    </button>
  ))}
</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBooks.map((book, index) => (
          <div
            key={index}
            className="border-2 border-primary pb-4 rounded-lg shadow hover:shadow-lg"
          >
            <img className="rounded-t-lg w-full overflow-hidden" src={book.coverImage} alt={book.title} />
            <div className="bookInfo p-2 pl-3">
            <h3 className="text-xl font-bold">{book.title}</h3>
            
            <p className="text-sm text-gray-600">
              <strong>Author:</strong> {book.author}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Year:</strong> {book.year}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Genre:</strong> {book.genre}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Publisher:</strong> {book.publisher}
            </p>
            </div>
          </div>
        ))}
      </div>
      {filteredBooks.length === 0 && (
        <p className="text-red-500 text-center mt-4">No books found.</p>
      )}
    </div>
  );
}

export default BestsellersList;
