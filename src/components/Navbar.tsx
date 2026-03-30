import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'AI Preview', href: '#ai-preview' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Calculator', href: '#calculator' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className={`text-2xl font-serif font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Lumina<span className="text-amber-500">.</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                  isScrolled ? 'text-gray-600' : 'text-gray-200'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
            >
              Get Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-amber-600 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center mt-4 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md text-base font-medium"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
