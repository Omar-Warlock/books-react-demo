"use client";
import { useEffect, useState } from "react";
import Table from "../Table";
import { deleteBook, getAllBooks } from "../../services/service";
export default function Home() {
  const [books, setBooks] = useState([]);

  const handleDelete = (id) => {
    deleteBook(id);
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleUpdate = (id) => {
    alert(`Update book with ID: ${id}`);
  };
  useEffect(() => {
    getAllBooks().then((res) => setBooks(res.data));
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Books Catalog</h1>
        <p className="text-gray-600 mb-8">
          Browse and manage our collection of books
        </p>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Table
            books={books}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        </div>

        {books.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No books available</p>
          </div>
        )}
      </div>
    </div>
  );
}
