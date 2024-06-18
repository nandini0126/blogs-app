import ReactDOM from 'react-dom/client';
import Home from './views/Home/Home'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BlogView from './views/BlogView/BlogView';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/blog/:id",
    element: <BlogView />
  }
])

root.render(<RouterProvider router={router} />);

