import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { getBook } from "../../services/service";

export default function Details() {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    getBook(id).then((res) => setBook(res.data));
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <IoArrowBack size={20} />
          <span className="font-medium">Return to Home</span>
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="mb-6">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
                {book.category}
              </p>
              <h1 className="text-4xl font-bold text-gray-800 mb-3">
                {book.title}
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                by <span className="font-semibold">{book.author}</span>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed">{book.desc}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              Free Shipping
            </h3>
            <p className="text-gray-600">
              On orders over $50. Standard delivery in 3-5 business days.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              Easy Returns
            </h3>
            <p className="text-gray-600">
              30-day return policy. No questions asked if not satisfied.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              Secure Payment
            </h3>
            <p className="text-gray-600">
              100% secure transactions with encrypted payment processing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
