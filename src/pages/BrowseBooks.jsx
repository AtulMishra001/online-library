import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBooks } from "../redux/booksSlice";

const BrowseBooks = () => {
  const { category } = useParams(); // Get category from URL
  const books = useSelector(selectBooks);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter Logic: Category + Search
  const filteredBooks = books.filter((book) => {
    const matchesCategory = category === "all" || book.category === category;
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
        <h2 className="text-3xl font-black uppercase bg-memphis-purple text-white px-4 py-1 border-4 border-black shadow-hard">
          {category === "all" ? "All Books" : `${category} Books`}
        </h2>
        <input
          type="text"
          placeholder="Search by title or author..."
          className="flex-1 p-3 border-4 border-black shadow-hard bg-white focus:outline-none font-bold text-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white p-6 border-4 border-black shadow-hard relative group"
            >
              <div className="w-full h-64 border-b-4 border-black overflow-hidden bg-gray-100 relative">
                <img
                  src={book.url}
                  alt={book.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative 'Tag' */}
              <span className="absolute -top-4 -right-4 bg-memphis-yellow px-3 py-1 border-2 border-black font-bold text-sm transform rotate-12">
                {book.category}
              </span>

              <h3 className="text-2xl font-black mb-1">{book.title}</h3>
              <p className="text-lg font-medium text-gray-700 mb-4">
                {book.author}
              </p>

              <Link
                to={`/book/${book.id}`}
                className="inline-block w-full text-center bg-black text-white font-bold py-2 border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-all"
              >
                View Details &rarr;
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-2xl font-bold text-gray-500">
            No books found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
