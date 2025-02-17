
import React, { useState } from "react";
// Importing necessary Material-UI icons
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import Logo from "../../public/book.png"

function Navbar() {
  // State to track menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Main navigation bar
    <nav className="navbar bg-secondary text-primary font-primary border-y-2 border-primary">
      <ul className="container flex justify-between items-center py-2">
        <li className="text-4xl tracking-widest flex items-center font-black">
        <Link to="/">TBR</Link>
        </li>
        <li className="hidden md:block">
          <ul className="flex items-center gap-8 font-semibold">
            <li>
              <Link className="hover:text-fadedbrown" to="/">home</Link>
            </li>
            <li>
              <Link className="hover:text-fadedbrown" to="/search">search</Link>
            </li>
            <li>
              <Link className="hover:text-fadedbrown" to="/bestsellers">
                bestsellers
              </Link>
            </li>
            
          </ul>
        </li>
         {/* Icons including menu toggle */}
        <li className="flex items-center gap-2">
          <Link className="hover:text-fadedbrown" to="/">
            <img className="w-6" src={Logo} />
          </Link>
          <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </li>
      </ul>
      {/* Hidden menu (dropdown) */}
      {isMenuOpen && (
        <ul className="flex flex-col items-center gap-8 pb-4 font-semibold">
          <li>
              <Link className="hover:text-fadedbrown" to="/" onClick={toggleMenu}>home</Link>
            </li>
            <li>
              <Link className="hover:text-fadedbrown" to="/search" onClick={toggleMenu}>search</Link>
            </li>
          <li>
            <Link className="hover:text-fadedbrown" to="/bestsellers" onClick={toggleMenu}>
              bestsellers
            </Link>
          </li>

        </ul>
      )}
    </nav>
  );
}

export default Navbar;
