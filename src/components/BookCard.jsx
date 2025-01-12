import { Link } from "react-router-dom";

/**
 * BookCard Component
 * Displays key details of a book: title, authors, publisher, and cover image.
 * 
 * Props:
 * - title: Title of the book
 * - authors: Array of author names
 * - publisher: Publisher of the book
 * - coverId: Open Library cover ID for the book
 */
function BookCard({ title, authors, publisher, coverId, bookDetails , onClick }) {
  return (
    <div className="flex border-2 border-primary rounded-xl overflow-hidden my-3">
        {/* Book Cover */}
      <div className="bookcover border-r-2 border-primary w-52">
        <img className="w-full h-full overflow-hidden" src={
            coverId
              ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
              : "https://via.placeholder.com/150x200?text=No+Cover"
          } alt="book cover" />
      </div>

      {/* Book Description */}
      <div className="bookdescprition flex flex-col justify-between w-52 px-3 pt-4 pb-2 text-sm">
        <div className="topinfo">
          <h3 className="text-2xl text-primary font-bold pb-2">{title}</h3>
          
        </div>
        <div className="bottominfo">
          <ul>
            <li>
              <span className="text-primary font-medium">Author:</span>{" "}
              {authors ? authors.join(", ") : "Unknown"}
            </li>
            <li>
              <span className="text-primary font-medium">Publisher:</span>{" "}
              {publisher || "Unknown"}
            </li>
          </ul>
          <a className="border-2 border-primary text-primary text-center font-semibold block py-1 m-2 mx-auto w-full hover:bg-secondary hover:curser-pointer" onClick={onClick}>
            details
          </a>
        </div>
      </div>
    </div>
  );
}
export default BookCard;
