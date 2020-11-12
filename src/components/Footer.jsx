import React from 'react';
import githubIcon from '../assets/github.svg';

function Footer() {
  return (
    <footer>
      <p>
        <span>&copy; jllopiz-examples {new Date().getFullYear()}</span>
        <span>
          <a href="https://github.com/jllopiz90" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="github" />
          </a>
        </span>
      </p>
    </footer>
  );
}

export default Footer;