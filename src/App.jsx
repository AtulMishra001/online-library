import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import  store  from "./redux/store.js";
import Header from "./components/Header";

// Import Pages (Create empty placeholders for these if they don't exist yet)
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

// --- 1. Layout Component (Header + Outlet) ---
// This wrapper is ONLY for valid pages
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto p-4 grow">
        <Outlet />
      </main>
      {/* Optional: Simple Footer */}
      <footer className="text-center py-4 text-sm font-bold bg-memphis-blue border-t-2 border-black">
        © 2026 Online Library System
      </footer>
    </div>
  );
};

// --- 2. Router Configuration ---
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Valid routes get the Header
    errorElement: <NotFound />, // 404 Page gets NO Header (Requirement Met)
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books/:category", // Dynamic Route for Categories
        element: <BrowseBooks />,
      },
      {
        path: "/book/:id", // Dynamic Route for Details
        element: <BookDetails />,
      },
      {
        path: "/add-book",
        element: <AddBook />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>

      <RouterProvider router={router} />
    </Provider>

  );
}

export default App;
