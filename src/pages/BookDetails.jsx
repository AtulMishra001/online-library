import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBooks } from "../redux/booksSlice";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook to go back
  const books = useSelector(selectBooks);

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="text-center text-2xl font-black mt-20">
        Book not found!
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <button
        onClick={() => navigate(-1)} // Go back to previous page
        className="mb-6 font-bold underline decoration-4 decoration-memphis-pink hover:text-memphis-pink text-xl"
      >
        &larr; Back to Browse
      </button>

      <div className="bg-white border-4 border-black shadow-hard p-8 md:p-12 flex flex-col md:flex-row gap-8">
        {/* Fake Book Cover */}
        <div
          className={`w-full md:w-1/3 h-64 md:h-auto border-4 border-black ${book.coverColor || "bg-memphis-blue"} flex items-center justify-center`}
        >
          <img src={book.url} alt="" />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-5xl font-black mb-2">{book.title}</h1>
          <h2 className="text-2xl font-bold text-gray-600 mb-4">
            by {book.author}
          </h2>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-memphis-yellow px-3 py-1 border-2 border-black font-bold">
              {book.category}
            </span>
            <span className="font-black text-xl text-memphis-pink">
              {"★".repeat(Math.floor(book.rating))} ({book.rating})
            </span>
          </div>

          <h3 className="text-xl font-bold border-b-2 border-black mb-2">
            Description
          </h3>
          <p className="text-lg leading-relaxed font-medium">
            {book.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
