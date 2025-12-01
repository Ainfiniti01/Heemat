import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app/root.tsx'; // Import the main App component
import staticRoutes from './app/routes.ts'; // Import your defined routes

// Ensure the root element exists
const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element #root not found in the DOM.');
}

// Create a browser router instance
const router = createBrowserRouter(staticRoutes);

// Render the application
ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
