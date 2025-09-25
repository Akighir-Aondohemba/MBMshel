'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

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

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);

    let timeout: NodeJS.Timeout;
    const throttledScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

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
              className="text-xl font-bold tracking-tight hover:text-[#e89e1c] transition-colors"
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
                  className="text-sm font-medium hover:text-[#e89e1c] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Button (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e89e1c] focus:ring-offset-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
<div
  ref={mobileMenuRef}
  id="mobile-menu"
  className={`md:hidden fixed inset-0 bg-[#1e3c72]/95 backdrop-blur-md transform transition-transform duration-300 ${
    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
  } z-40`}
>
  {/* Close Button Inside Mobile Menu */}
  <div className="flex justify-end pt-6 px-6">
    <button
      onClick={toggleMobileMenu}
      aria-label="Close menu"
      className="p-2 rounded-md text-white hover:text-[#e89e1c] focus:outline-none focus:ring-2 focus:ring-[#e89e1c]"
    >
      <X className="h-7 w-7" />
    </button>
  </div>

  <div className="pt-10 px-6 space-y-6">
    <ul className="space-y-4">
      {navLinks.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="block text-lg font-medium text-white hover:text-[#e89e1c]"
            onClick={toggleMobileMenu} // closes menu when clicking link
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
