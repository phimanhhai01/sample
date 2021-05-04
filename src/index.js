import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './nav';
import Sections1 from './input'
import './grid.css';
import Others from './other';

ReactDOM.render(
  <Nav />,
  document.getElementById('root-nav')
);
ReactDOM.render(
  <Sections1 />,
  document.getElementById("news-of-the-day")
);
ReactDOM.render(
  <Others />,
  document.getElementById("others-acc")
);
// ReactDOM.render(
//   <findingBox />,
//   document.getElementById('root-header')
// );
// ReactDOM.render(
//  <Sections1 />,
//  document.getElementById('section-display-image')
// );

