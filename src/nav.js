import './style.css';
import React from 'react';
import './grid.css';


function Nav() {
  const options = ['Blog', 'Posts', 'Favorite', 'Sign In', 'Sign Up'];
  return React.createElement(
          "ul",
          {className: "options"},
          options.map(option =>
            React.createElement("li", null, <a href="#">{option}</a>))
        )
};


export default Nav;
