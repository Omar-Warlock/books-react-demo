import { useRef, useState } from "react";
import { createBook } from "../../services/service";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    let valid = Object.values(book).every((value) => value !== "");

    if (valid) {
      createBook(book)
        .then(() => {
          toast.success("Book created successfully!", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        })
        .then(() => {
          setTimeout(() => navigate("/"), 2000);
        });
    } else {
      toast.error("Please fill in all fields!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
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

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Book
          </button>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </main>
  );
}
