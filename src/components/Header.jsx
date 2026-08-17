import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold" style={{ color: '#2454C6' }}>
              Brisbane Carpet Works
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#2454C6] ${
                  location.pathname === link.path ? 'text-[#2454C6]' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:0469950276" className="flex items-center text-sm font-medium text-gray-700 hover:text-[#2454C6] transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              0469 950 276
            </a>
            <Link
              to="/booking"
              className="px-6 py-3 text-white font-semibold rounded-lg transition-all hover:shadow-lg"
              style={{ backgroundColor: '#28C76F' }}
            >
              GET A FREE QUOTE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#2454C6] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-blue-50 text-[#2454C6]'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="tel:0469950276"
                className="flex items-center justify-center px-4 py-3 border-2 rounded-lg font-semibold transition-colors"
                style={{ borderColor: '#2454C6', color: '#2454C6' }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call: 0469 950 276
              </a>
              <Link
                to="/booking"
                className="block text-center px-4 py-3 text-white font-semibold rounded-lg"
                style={{ backgroundColor: '#28C76F' }}
              >
                GET A FREE QUOTE
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
