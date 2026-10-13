import React from 'react';
import { ArrowUp, FileText, Mail, Heart } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface FooterProps {
  profile: ProfileData;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-stone-200 py-12 text-xs text-stone-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Identity & Copyright */}
          <div>
            <div className="font-bold text-stone-900 text-sm">
              {profile.fullName}
            </div>
            <div className="text-stone-500 mt-1">
              {profile.academicDegree} · Joydebpur, Gazipur, Bangladesh
            </div>
            <div className="text-[11px] text-stone-400 mt-1">
              Curriculum vitae synchronized with official Europass credentials.
            </div>
          </div>

          {/* Quick links & Back to Top */}
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenResume}
              className="hover:text-stone-900 transition-colors inline-flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Europass CV</span>
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-stone-900 transition-colors inline-flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{profile.email}</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 text-stone-400 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
