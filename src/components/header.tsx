"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div>
              <h1 className="font-serif font-bold text-xl text-gray-900">
                Zohra Beauty
              </h1>
              <p className="text-xs text-gray-600">Family Salon</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Phone Number & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors">
              <Phone className="w-4 h-4" />
              <div className="flex flex-col text-sm">
                <a
                  href="tel:8981940467"
                  className="font-medium hover:underline"
                >
                  8981940467
                </a>
                <a
                  href="tel:9163434422"
                  className="font-medium hover:underline"
                >
                  9163434422
                </a>
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="tel:8981940467"
                className="flex items-center space-x-2 px-4 py-2 text-primary-600 hover:bg-gray-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>8981940467</span>
              </a>
              <a
                href="tel:9163434422"
                className="flex items-center space-x-2 px-4 py-2 text-primary-600 hover:bg-gray-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>9163434422</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
