// Import necessary libraries and components for the file.
// React is needed to create the component
// Link from "react-router-dom" is used to create a link to the Portfolio page
// Portrait is a profile picture imported from the specified path
import React from 'react';
import { Link } from "react-router-dom";

// Home function component which displays the home page of the application
function Home() {
  // JSX for rendering the Home component
  return (
    // Begin of the section with classes "home" and "my-5" for styling
    <section className="home my-5">

      <div className="title">

        <h2>Greetings I'm Danny!</h2>

        <p>Welcome to my React Portfolio!</p>

        <Link to="portfolio">

          <button>Projects</button>
        </Link>
      </div>
     
    </section> // End of section
  );
}

// Export the Home component as the default export
export default Home;
