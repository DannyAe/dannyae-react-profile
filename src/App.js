// The first line imports the necessary dependencies from 'react' and 'react-router-dom'.
// Component is imported from React and HashRouter, Route is imported from 'react-router-dom'.
import React, {Component} from 'react';
import { HashRouter, Route } from 'react-router-dom';

// This line is importing the main CSS file for the application.
import './App.css';

// The next set of lines are importing various components from their respective files.
// These components will be used to display different parts of the website.

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

// Here, a new component named App is being defined. This is the main component that will be rendered to the DOM.
// It extends from Component, which is a basic building block in React.
class App extends Component {
  // The render method returns what gets rendered to the browser.
  // In this case, it's returning the JSX to create the app's structure.
  render() {
    return (
      // This is the start of the HashRouter component.
      // It uses the HTML5 history API (pushState, replaceState, and the popstate event) to keep the UI in sync with the URL.
      // The 'basename' prop is the base URL for all locations.
      <HashRouter basename="/">
        <div className="app">
         
          <Header />
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
          </main>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

// This line exports the App component so that it can be imported and used in other files.
export default App;
