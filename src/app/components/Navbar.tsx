'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

// TypeScript Interface for Nav Links
interface NavLink {
  label: string;
  href: string;
}

// Navigation Data
const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact Us', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Toggle mobile menu
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    // Throttle scroll event
    let timeout: NodeJS.Timeout;
    const throttledScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  // Trap focus in mobile menu
  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      const focusableElements = mobileMenuRef.current.querySelectorAll(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const trapFocus = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      document.addEventListener('keydown', trapFocus);
      firstElement.focus();

      return () => document.removeEventListener('keydown', trapFocus);
    }
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md text-[#1e3c72]'
          : 'bg-transparent text-white'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight"
              aria-label="Mshel Blocks & Machineries Home"
            >
              Mshel Blocks & Machineries
            </Link>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-medium hover:text-[#e89e1c] focus:outline-none "
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e89e1c] focus:ring-offset-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`md:hidden fixed inset-0 bg-[#1e3c72]/95 backdrop-blur-md transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } z-40`}
      >
        <div className="pt-20 px-6 space-y-4">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block text-lg font-medium text-white hover:text-[#e89e1c] focus:outline-none focus:ring-2 focus:ring-[#e89e1c] focus:ring-offset-2"
                  onClick={toggleMobileMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;