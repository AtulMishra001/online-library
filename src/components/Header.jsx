import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBooks } from "../redux/booksSlice";

const Header = () => {
  // 1. Get books from Redux to calculate count
  const books = useSelector(selectBooks);
  const totalBooks = books.length;

  return (
    <nav className="bg-white border-b-4 border-black p-4 mb-8 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <Link
          to="/"
          className="group flex items-center gap-2 text-3xl font-black uppercase tracking-tighter bg-memphis-yellow px-3 py-1 border-2 border-black shadow-hard hover:shadow-hard-hover hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          <span>Library.</span>
        </Link>

        {/*Dynamic Book Count Badge*/}
        <div className="bg-memphis-pink text-white font-black px-4 py-2 border-2 border-black shadow-hard transform -rotate-2">
          <span className="text-sm uppercase mr-2 text-black">In Stock:</span>
          <span className="text-xl">{totalBooks} Books</span>
        </div>

        {/* Navigation Links*/}
        <div className="flex gap-6 font-bold text-lg items-center">
          <Link
            to="/"
            className="hover:text-memphis-pink underline decoration-4 decoration-black underline-offset-4 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/books/all"
            className="hover:text-memphis-blue underline decoration-4 decoration-black underline-offset-4 transition-colors"
          >
            Browse
          </Link>
          <Link
            to="/add-book"
            className="bg-black text-white px-4 py-1 hover:bg-white hover:text-black border-2 border-black transition-colors"
          >
            Add +
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
