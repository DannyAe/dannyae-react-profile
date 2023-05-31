// Importing necessary libraries and components for this file
// React is needed to define and create the React component
// Link from 'react-router-dom' is used for navigation links within the application
import React from "react";
import { Link } from "react-router-dom"

// Defining the NavBar function component that renders a navigation bar in the application
function NavBar() {

  // JSX for the NavBar component
  // It includes a navigation element with a list of links to different parts of the site
  return (
    // Begin of navigation section
    <nav className="navbar">

      <ul className="flex-row">
   
        <li className="mx-2">

          <Link to="/about">About Me</Link>
        </li>

        <li className="mx-2">
 
          <Link to="/portfolio">Portfolio</Link>
        </li>

        <li className="mx-2">

          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav> // End of navigation section
  );
}

// Exporting the NavBar component as the default export of this module
export default NavBar;
