import { useRef, useState } from "react";
import { createBook } from "../../services/service";
import { redirect, useNavigate } from "react-router-dom";

export default function Create() {
  const [book, setBook] = useState({
    title: "",
    price: "",
    author: "",
    desc: "",
  });
  const navigate = useNavigate();
  const formRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    let condition = true;
    for (let value of Object.values(book)) {
      if (value === "") {
        condition = false;
      }
    }
    if (condition) {
      createBook(book)
        .then(() => alert("book added"))
        .then(() => navigate("/"));
    } else {
      alert("Please fill all inputs");
    }
  }
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Create a New Book
        </h1>
        <p className="text-gray-600 mb-8">Add a new book to our collection</p>

        <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
          {/* Title Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Book Title
            </label>
            <input
              type="text"
              placeholder="Enter book title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              onChange={(e) => setBook({ ...book, title: e.target.value })}
            />
          </div>

          {/* Author Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Author Name
            </label>
            <input
              type="text"
              placeholder="Enter author name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              onChange={(e) => setBook({ ...book, author: e.target.value })}
            />
          </div>

          {/* Price Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Price ($)
            </label>
            <input
              type="number"
              placeholder="Enter book price"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              onChange={(e) => setBook({ ...book, price: e.target.value })}
            />
          </div>

          {/* Description Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              placeholder="Enter book description..."
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 resize-none"
              onChange={(e) => setBook({ ...book, desc: e.target.value })}
            ></textarea>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Book
          </button>
        </form>
      </div>
    </main>
  );
}
