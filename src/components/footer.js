import React from 'react';
// Import hooks from React Router
import { useLocation, useHistory } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  // We retrieve the current `location` object data from React Router
  const location = useLocation();
  // We get React Router's history object so we can access and adjust browser history
  const history = useHistory();
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            // Go back to the previous page in our browser's history
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}
        <h4>&copy; {new Date().getFullYear()} - Tech Friends</h4>
        <a href="https://github.com/dmitrybalduev" target="_blank">
          <FaGithub size="2em" color="#343a40"/>
        </a>
        <a href="https://linkedin.com/" target="_blank">
          <FaLinkedin size="2em" color="#343a40"/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;