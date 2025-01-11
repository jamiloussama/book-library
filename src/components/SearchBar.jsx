import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

/**
 * SearchBar Component
 * Provides an input field for users to enter search queries.
 * Triggers a search when the Enter key is pressed.
 *
 * Props:
 * - setQuery: Function to update the search query state
 * - setPage: Function to reset the page number to 1
 */
function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");
  /**
   * Handles the search query when Enter key is pressed.
   */
  const handleSearch = (e) => {
    if (!input.trim()) {
      alert("Please enter a search query.");
      return; // Prevent empty searches
    } 
    onSearch(input);
  };

  return (
    <div className="input relative inline-block w-full">
      <input
        className="w-full border-y-2 border-primary bg-bgcolor text-primary font-semibold placeholder-fadedbrown placeholder-semibold py-3 px-2 pr-10"
        type="text"
        placeholder="type what would you like to search ..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <SearchIcon
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary cursor-pointer hover:text-fadedbrown"
        onClick={handleSearch} // Trigger search on icon click
      />
    </div>
  );
}
export default SearchBar;
