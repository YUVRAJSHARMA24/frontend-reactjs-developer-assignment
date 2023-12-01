import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Sharpe Labs</div>

        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/transaction" className="text-white hover:text-gray-300">
              Transaction
            </Link>
          </li>
          <li>
            <Link to="/data" className="text-white hover:text-gray-300">
              Data
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
