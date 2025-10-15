import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 text-center text-sm font-medium">
        🎉 Early Offer — Any Weekend Course ₹999 + GST (Limited Seats!)
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              🔱 TRISHUVAAN
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${isActive('/') ? 'text-cyan-600 font-semibold' : 'text-gray-700 hover:text-cyan-600'}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${isActive('/about') ? 'text-cyan-600 font-semibold' : 'text-gray-700 hover:text-cyan-600'}`}
            >
              About
            </Link>

            <div className="relative">
              <button
                onMouseEnter={() => setIsCoursesOpen(true)}
                onMouseLeave={() => setIsCoursesOpen(false)}
                className="flex items-center space-x-1 text-gray-700 hover:text-cyan-600 transition-colors"
              >
                <span>Courses</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isCoursesOpen && (
                <div
                  onMouseEnter={() => setIsCoursesOpen(true)}
                  onMouseLeave={() => setIsCoursesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                >
                  <Link
                    to="/courses/weekend"
                    className="block px-4 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
                  >
                    Weekend Live Courses
                  </Link>
                  <Link
                    to="/courses/bootcamp"
                    className="block px-4 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
                  >
                    Weekday Advanced Bootcamp
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/internships"
              className={`transition-colors ${isActive('/internships') ? 'text-cyan-600 font-semibold' : 'text-gray-700 hover:text-cyan-600'}`}
            >
              Internships
            </Link>
            <Link
              to="/live-projects"
              className={`transition-colors ${isActive('/live-projects') ? 'text-cyan-600 font-semibold' : 'text-gray-700 hover:text-cyan-600'}`}
            >
              Live Projects
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${isActive('/contact') ? 'text-cyan-600 font-semibold' : 'text-gray-700 hover:text-cyan-600'}`}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </Link>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link to="/" className="block text-gray-700 hover:text-cyan-600">Home</Link>
            <Link to="/about" className="block text-gray-700 hover:text-cyan-600">About</Link>
            <Link to="/courses/weekend" className="block text-gray-700 hover:text-cyan-600 pl-4">Weekend Courses</Link>
            <Link to="/courses/bootcamp" className="block text-gray-700 hover:text-cyan-600 pl-4">Weekday Bootcamp</Link>
            <Link to="/internships" className="block text-gray-700 hover:text-cyan-600">Internships</Link>
            <Link to="/live-projects" className="block text-gray-700 hover:text-cyan-600">Live Projects</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-cyan-600">Contact</Link>
            <Link
              to="/contact"
              className="block w-full px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-medium text-center"
            >
              Enroll Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
