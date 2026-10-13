import React, { useState } from 'react';
import { Menu, X, FileText, Mail, Sparkles, UserCheck } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenCustomizer: () => void;
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenCustomizer,
  onContactClick
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:text-stone-700 transition-colors"
          >
            Md Imrul Kayes Ovi
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
            <a href="#about" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
              About
            </a>
            <a href="#academics" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
              Academics & Skills
            </a>
            <a href="#projects" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
              Projects & MIS
            </a>
            <a href="#experience" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
              Leadership & Service
            </a>
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 text-stone-600 hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              <FileText className="w-4 h-4 text-stone-500" />
              <span>Europass CV</span>
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenCustomizer}
              title="Customize Profile Info"
              className="px-3 py-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-200 rounded-lg hover:bg-stone-50 hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              Edit Profile
            </button>
            <button
              onClick={onContactClick}
              className="px-4 py-2 text-xs font-medium text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-200 rounded-md"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-600 hover:text-stone-900 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-white px-4 pt-3 pb-5 space-y-3">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-stone-700 hover:text-stone-900"
          >
            About
          </a>
          <a
            href="#academics"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-stone-700 hover:text-stone-900"
          >
            Academics & Skills
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-stone-700 hover:text-stone-900"
          >
            Projects & MIS
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-stone-700 hover:text-stone-900"
          >
            Leadership & Service
          </a>
          <div className="pt-2 border-t border-stone-100 flex items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-1/2 py-2 text-xs font-medium text-stone-800 bg-stone-100 rounded-lg text-center"
            >
              Europass CV
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-1/2 py-2 text-xs font-medium text-white bg-stone-900 rounded-lg text-center"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
