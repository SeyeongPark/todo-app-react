import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// change ReactDOM to createRoot because there was an error "ReactDOM.render is no longer supported in React 18"