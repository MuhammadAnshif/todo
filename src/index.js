import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './Nav'

import App from './App';
import Footer from './footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <App />
    <Footer />
  </React.StrictMode>
);


