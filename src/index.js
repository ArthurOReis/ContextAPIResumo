import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './routes/Home';
import Contact from './routes/Contact';

import { ThemeProvider } from './context/ThemeContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {path: '/', element: <Home/>},
      {path: '/contact', element: <Contact/>}
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);