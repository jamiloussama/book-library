import React from "react";

function BookDetails({ book, onClose }) {
  // Close the popup when the user clicks outside the content
  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("popup")) {
      onClose();
    }
  };

  // Fix: Handle different formats of the description field
  const getDescription = () => {
    if (typeof book.description === "string") {
      return book.description;
    }
    if (book.description?.value) {
      return book.description.value;
    }
    return "No description available.";
  };

  return (
    <div
      className="popup fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick} // Attach the click event to the overlay
    >
      {/* Popup Content */}
      <div className="bg-white rounded-lg p-8 w-2/3 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 bg-red-500 text-white text-lg font-bold px-3 py-1 rounded hover:bg-red-600"
          onClick={onClose} // Close when clicking the close button
        >
          ✕
        </button>

        {/* Book Title */}
        <h2 className="text-4xl font-bold mb-4 text-primary">{book.title}</h2>
        {/* Description */}
        {book.description && (
          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-2">Description</h3>
            <p>{getDescription()}</p>
          </div>
        )}

        {/* Author(s) */}
        <p className="mb-2">
          <span className="font-semibold">Author(s):</span>{" "}
          {book.author_name?.join(", ") || "Unknown"}
        </p>

        {/* Publisher */}
        <p className="mb-2">
          <span className="font-semibold">Publisher:</span>{" "}
          {book.publisher?.[0] || "Unknown"}
        </p>

        {/* Publication Date */}
        <p className="mb-2">
          <span className="font-semibold">Publication Date:</span>{" "}
          {book.first_publish_year || "N/A"}
        </p>

        {/* ISBN */}
        <p className="mb-2">
          <span className="font-semibold">ISBN:</span>{" "}
          {book.isbn?.[0] || "N/A"}
        </p>

        {/* Number of Pages */}
        <p className="mb-2">
          <span className="font-semibold">Number of Pages:</span>{" "}
          {book.number_of_pages_median || "N/A"}
        </p>

        {/* Subjects */}
        <p className="mb-4">
          <span className="font-semibold">Subjects:</span>{" "}
          {book.subject?.join(", ") || "N/A"}
        </p>

        {/* Book Cover */}
        <img
          className="mx-auto mb-6"
          src={
            book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
              : "https://via.placeholder.com/300x400?text=No+Cover"
          }
          alt="Detailed book cover"
        />

      </div>
    </div>
  );
}

export default BookDetails;
