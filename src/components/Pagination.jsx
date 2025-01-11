import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      scrollToTop(); // Scroll to the top of the page after navigating
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      scrollToTop(); // Scroll to the top of the page after navigating
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-center mt-6">
      <button
        className={`px-4 py-2 mx-1 border-2 rounded-lg ${
          currentPage === 1
            ? "text-gray-400 border-gray-300 cursor-not-allowed"
            : "text-primary border-primary hover:bg-secondary"
        }`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <span className="mx-3 text-primary font-semibold">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className={`px-4 py-2 mx-1 border-2 rounded-lg ${
          currentPage === totalPages
            ? "text-gray-400 border-gray-300 cursor-not-allowed"
            : "text-primary border-primary hover:bg-secondary"
        }`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
