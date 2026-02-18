import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          📚 BookHub
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link to="/" className="nav-link">
            HOME
          </Link>
          <Link to="/about" className="nav-link">
            ABOUT
          </Link>
          <Link to="/contact" className="nav-link">
            CONTACT
          </Link>
        </div>

        <Link
          to="/create"
          className="hidden md:inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Create A Book
        </Link>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4">
          <Link onClick={() => setOpen(false)} to="/">
            HOME
          </Link>
          <Link onClick={() => setOpen(false)} to="/about">
            ABOUT
          </Link>
          <Link onClick={() => setOpen(false)} to="/contact">
            CONTACT
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/create"
            className="bg-blue-600 text-white text-center py-2 rounded-lg"
          >
            Create A Book
          </Link>
        </div>
      )}
    </nav>
  );
}
