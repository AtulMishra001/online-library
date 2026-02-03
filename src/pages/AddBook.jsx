import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/booksSlice";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
    url: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.author) newErrors.author = "Author is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.rating || formData.rating < 1 || formData.rating > 5) {
      newErrors.rating = "Rating must be between 1 and 5";
    }
    if(!formData.url) newErrors.url = "Image URL is required."
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Create new book object
    const newBook = {
      id: Date.now(), // Simple unique ID
      ...formData,
      rating: Number(formData.rating),
      coverColor: "bg-memphis-blue", // Default color for new books
    };

    // 1. Dispatch to Redux
    dispatch(addBook(newBook));

    // 2. Redirect to Browse Page
    // We navigate to the category of the new book to see it immediately
    navigate(`/books/${formData.category}`);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-black mb-8 border-b-4 border-black inline-block">
        Add a New Book
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 border-4 border-black shadow-hard space-y-6"
      >
        {/* Title */}
        <div>
          <label className="block font-bold mb-2">Book Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full p-3 border-4 ${errors.title ? "border-red-500" : "border-black"} focus:outline-none focus:shadow-hard transition-all`}
          />
          {errors.title && (
            <p className="text-red-600 font-bold mt-1">{errors.title}</p>
          )}
        </div>

        {/* Author */}
        <div>
          <label className="block font-bold mb-2">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className={`w-full p-3 border-4 ${errors.author ? "border-red-500" : "border-black"} focus:outline-none focus:shadow-hard transition-all`}
          />
          {errors.author && (
            <p className="text-red-600 font-bold mt-1">{errors.author}</p>
          )}
        </div>
        {/*URL field*/}
        <div>
          <label className="block font-bold mb-2">Cover URL</label>
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
            className={`w-full p-3 border-4 ${errors.url ? "border-red-500" : "border-black"} focus:outline-none focus:shadow-hard transition-all`}
          />
          {errors.url && (
            <p className="text-red-600 font-bold mt-1">{errors.url}</p>
          )}
        </div>

        {/* Category & Rating Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-bold mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`w-full p-3 border-4 ${errors.category ? "border-red-500" : "border-black"} focus:outline-none focus:shadow-hard bg-white`}
            >
              <option value="">Select Category</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Tech">Tech</option>
              <option value="Self-Help">Self-Help</option>
            </select>
            {errors.category && (
              <p className="text-red-600 font-bold mt-1">{errors.category}</p>
            )}
          </div>

          <div>
            <label className="block font-bold mb-2">Rating (1-5)</label>
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              step="0.1"
              value={formData.rating}
              onChange={handleChange}
              className={`w-full p-3 border-4 ${errors.rating ? "border-red-500" : "border-black"} focus:outline-none focus:shadow-hard`}
            />
            {errors.rating && (
              <p className="text-red-600 font-bold mt-1">{errors.rating}</p>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block font-bold mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className={`w-full p-3 border-4 ${errors.description ? "border-red-500" : "border-black"} focus:outline-none focus:shadow-hard`}
          ></textarea>
          {errors.description && (
            <p className="text-red-600 font-bold mt-1">{errors.description}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-memphis-pink text-white font-black text-xl py-4 border-4 border-black shadow-hard hover:shadow-hard-hover hover:translate-y-1 hover:translate-x-1 transition-all uppercase"
        >
          Add Book to Library
        </button>
      </form>
    </div>
  );
};

export default AddBook;