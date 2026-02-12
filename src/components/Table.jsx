import { Link } from "react-router-dom";
function Table({ books, handleDelete, handleUpdate }) {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-blue-600 text-white">
          <th className="px-6 py-4 text-left font-semibold">ID</th>
          <th className="px-6 py-4 text-left font-semibold">Title</th>
          <th className="px-6 py-4 text-left font-semibold">Author</th>
          <th className="px-6 py-4 text-left font-semibold">Price</th>
          <th className="px-6 py-4 text-left font-semibold">Description</th>
          <th className="px-6 py-4 text-center font-semibold">Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr
            key={book.id}
            className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <td className="px-6 py-4 text-gray-800 font-medium">{book.id}</td>
            <td className="px-6 py-4 text-gray-800">{book.title}</td>
            <td className="px-6 py-4 text-gray-700">{book.author}</td>
            <td className="px-6 py-4 text-gray-700 font-semibold">
              {book.price}$
            </td>
            <td className="px-6 py-4 text-gray-600 max-w-xs truncate">
              {book.desc}
            </td>
            <td className="px-6 py-4 text-center">
              <div className="flex gap-3 justify-center">
                <Link
                  to={`/${book.id}`}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors font-medium text-sm"
                >
                  Show
                </Link>
                <button
                  onClick={() => handleUpdate(book.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors font-medium text-sm"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(book.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors font-medium text-sm"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
