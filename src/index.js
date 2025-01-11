import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/home';
import GlobalStyles from './styles'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <Home/>
  </React.StrictMode>
);
