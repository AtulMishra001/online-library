import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError(); // Hook to get error details (like the URL)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-memphis-yellow">
      {/* Big Geometric Box */}
      <div className="bg-white p-10 border-4 border-black shadow-hard max-w-lg">
        <h1 className="text-8xl font-black mb-4 text-memphis-pink drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
          404
        </h1>

        <h2 className="text-3xl font-bold mb-4 uppercase">Page Not Found</h2>

        <p className="text-xl mb-6 font-medium">
          Oops! The page you are looking for at:
          <br />
          {/* Displaying the invalid route/error message */}
          <span className="bg-black text-white px-2 py-1 mt-2 inline-block font-mono">
            {error?.statusText || error?.message || window.location.pathname}
          </span>
          <br />
          does not exist.
        </p>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="inline-block bg-memphis-blue text-black font-bold text-xl px-8 py-3 border-2 border-black shadow-hard hover:shadow-hard-hover hover:translate-y-1 hover:translate-x-1 transition-all"
        >
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
