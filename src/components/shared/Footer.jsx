import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-blue-400 mb-4">
            <Link to={"/"}>📚 BookHub</Link>
          </h3>
          <p className="text-gray-400">
            Your ultimate destination for discovering and managing your favorite
            books online.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to={"/"} className="hover:text-blue-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="hover:text-blue-400 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link to={"/"} className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-2 text-gray-400">
            <li>📧 Email: devomarmahmoud@gmail.com</li>
            <li>📱 Phone: +1 (555) 123-4567</li>
            <li>📍 Address: 123 Book Street, Library City, BC 12345</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} BookHub. All rights reserved.</p>
      </div>
    </footer>
  );
}
