import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-xl text-gray-700">Oops! Page not found.</p>
        <p className="mt-2 text-gray-600">
          We can't find the page you're looking for.
        </p>
        <Link
          to="/"
          className="inline-block px-4 py-2 mt-6 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound