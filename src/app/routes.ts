import {
	route,
	index,
} from '@react-router/dev/routes'; // Still using route and index helpers if they are just for route definition structure

// Manually define the routes based on the file system structure
const staticRoutes = [
  index('./page.jsx'), // Root page
  route('about', './about/page.jsx'),
  route('account/logout', './account/logout/page.jsx'),
  route('account/signin', './account/signin/page.jsx'),
  route('admin', './admin/page.jsx'),
  route('admin/categories', './admin/categories/page.jsx'),
  route('admin/categories/add', './admin/categories/add/page.jsx'),
  route('admin/categories/edit/:id', './admin/categories/edit/[id]/page.jsx'),
  route('admin/products', './admin/products/page.jsx'),
  route('admin/products/add', './admin/products/add/page.jsx'),
  route('admin/reviews', './admin/reviews/page.jsx'),
  route('admin/reviews/add', './admin/reviews/add/page.jsx'),
  route('cart', './cart/page.jsx'),
  route('contact', './contact/page.jsx'),
  route('faq', './faq/page.jsx'),
  route('products', './products/page.jsx'),
  route('products/:id', './products/[id]/page.jsx'),
  route('reviews', './reviews/page.jsx'),
  route('*', './__create/not-found.tsx') // Catch-all for not found
];

export default staticRoutes;
