import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/root.tsx'; // Assuming App is the default export from root.tsx

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
