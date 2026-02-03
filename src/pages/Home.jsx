import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBooks } from "../redux/booksSlice";

const Home = () => {
  const books = useSelector(selectBooks);
  // Slice to get the first 3 books
  const popularBooks = books.slice(0, 3);
  const categories = [
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Self-Help",
    "Psychology",
    "Tech",
    "Philosophy",
    "Mythology",
  ];

  return (
    <div className="space-y-12">
      {/* 1. Welcome Section */}
      <div className="bg-memphis-pink p-10 border-4 border-black shadow-hard text-center transform rotate-1 hover:rotate-0 transition-transform">
        <h1 className="text-4xl md:text-5xl font-black uppercase text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
          Welcome to the Library
        </h1>
        <p className="text-xl font-bold mt-4 bg-white inline-block px-4 py-1 border-2 border-black">
          Read. Learn. Grow.
        </p>
      </div>

      {/* 2. Categories Section */}
      <section>
        <h2 className="text-3xl font-black mb-6 border-b-4 border-black inline-block">
          Explore Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/books/${cat}`}
              className="bg-memphis-yellow p-6 border-4 border-black shadow-hard hover:shadow-hard-hover text-center font-bold text-xl hover:-translate-y-1 transition-all"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Popular Books Section (FIXED LAYOUT) */}
      <section>
        <h2 className="text-3xl font-black mb-6 border-b-4 border-black inline-block">
          Popular Reads
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {popularBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white border-4 border-black shadow-hard flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              {/* --- IMAGE FIX START --- */}
              {/* Container for the image to enforce size and border */}
              <div className="w-full h-64 border-b-4 border-black overflow-hidden bg-gray-100 relative">
                <img
                  src={book.url}
                  alt={book.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Optional: Overlay tag for visual flair */}
                <span className="absolute top-2 right-2 bg-memphis-yellow text-xs font-black px-2 py-1 border-2 border-black">
                  POPULAR
                </span>
              </div>
              {/* --- IMAGE FIX END --- */}

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-2xl font-black mb-2 leading-tight">
                  {book.title}
                </h3>
                <p className="text-gray-600 font-bold mb-4">{book.author}</p>

                <Link
                  to={`/book/${book.id}`}
                  className="mt-auto block w-full bg-memphis-blue text-center py-3 border-2 border-black font-black uppercase hover:bg-memphis-purple hover:text-white transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
