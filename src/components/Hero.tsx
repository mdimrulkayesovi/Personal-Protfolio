import React from 'react';
import { ProfileData } from '../types/portfolio';
import { GraduationCap, MapPin, Mail, ArrowUpRight, Award, ShieldCheck, Download, Edit3, HeartHandshake } from 'lucide-react';
import avatarImage from '../assets/images/regenerated_image_1791900405836.jpg';

interface HeroProps {
  profile: ProfileData;
  onOpenResume: () => void;
  onOpenCustomizer: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onOpenResume,
  onOpenCustomizer,
  onContactClick
}) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-stone-200 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Balanced Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-4 flex-wrap">
              <span>{profile.statusKicker}</span>
              <span aria-hidden="true">·</span>
              <span>Zibo, Shandong, China</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.1] mb-6 max-w-2xl text-balance">
              Building resilient software & data systems for global impact.
            </h1>

            {/* Lead Prose */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-4 max-w-2xl">
              {profile.bio}
            </p>
            <p className="text-sm text-stone-500 leading-relaxed mb-8 max-w-2xl">
              {profile.secondaryBio}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors shadow-sm whitespace-nowrap inline-flex items-center gap-2"
              >
                <span>Explore Projects & MIS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 text-sm font-semibold text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 hover:text-stone-900 transition-colors whitespace-nowrap inline-flex items-center gap-2 shadow-xs"
              >
                <Download className="w-4 h-4 text-stone-500" />
                <span>View Europass CV</span>
              </button>

              <button
                onClick={onContactClick}
                className="px-4 py-2.5 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors whitespace-nowrap inline-flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4 text-stone-400" />
                <span>Email Directly</span>
              </button>
            </div>
          </div>

          {/* Right Column: Profile Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs relative">
              
              {/* Card Header with Photo Avatar & Quick Edit */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  {/* Photo Avatar */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shrink-0 shadow-inner">
                    <img
                      src={avatarImage}
                      alt="Md Imrul Kayes Ovi"
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-stone-800/5 pointer-events-none" />
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                      {profile.fullName}
                    </h2>
                    <p className="text-xs sm:text-sm font-medium text-stone-600 mt-0.5">
                      {profile.academicDegree}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 mt-2">
                      <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span>{profile.location}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenCustomizer}
                  title="Customize profile information"
                  className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-50 rounded-lg transition-colors"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
              </div>

              {/* Status and Focus */}
              <div className="pt-4 border-t border-stone-100 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500">University & Campus</span>
                  <span className="font-semibold text-stone-800 text-right">Shandong University of Technology (China)</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500">Academic Standing</span>
                  <span className="font-semibold text-stone-800">Undergraduate (CS Bachelor)</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500">Global Student Context</span>
                  <span className="font-semibold text-stone-800">International in China · From Bangladesh</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500">Humanitarian Service</span>
                  <span className="font-semibold text-stone-800">Red Crescent Youth (2017 – 2026)</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500">Leadership & MIS</span>
                  <span className="font-semibold text-stone-800">Gazipur Unit MIS & ICT Support</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500">EU Digital Competence</span>
                  <span className="font-semibold text-emerald-700">Level 6/6 (Advanced Mastery)</span>
                </div>
              </div>

              {/* Quick Contact & Action row */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors flex items-center gap-1.5 truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span className="truncate">{profile.email}</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="text-xs font-semibold text-stone-900 hover:underline shrink-0"
                >
                  Full CV Profile →
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Full-Width Metric Strip Below Split */}
        <div className="mt-16 pt-8 border-t border-stone-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            
            <div className="p-4 bg-white/60 rounded-xl border border-stone-200/80">
              <div className="text-2xl sm:text-3xl font-bold text-stone-900 font-mono-tabular">
                9 Years
              </div>
              <div className="text-xs font-medium text-stone-500 mt-1">
                Youth Service & Leadership (2017 – 2026)
              </div>
            </div>

            <div className="p-4 bg-white/60 rounded-xl border border-stone-200/80">
              <div className="text-2xl sm:text-3xl font-bold text-stone-900 font-mono-tabular">
                Level 6 / 6
              </div>
              <div className="text-xs font-medium text-stone-500 mt-1">
                EU DigComp Problem Solving & Data Literacy
              </div>
            </div>

            <div className="p-4 bg-white/60 rounded-xl border border-stone-200/80">
              <div className="text-2xl sm:text-3xl font-bold text-stone-900 font-mono-tabular">
                C2 Mastery
              </div>
              <div className="text-xs font-medium text-stone-500 mt-1">
                English Understanding & Spoken Production
              </div>
            </div>

            <div className="p-4 bg-white/60 rounded-xl border border-stone-200/80">
              <div className="text-2xl sm:text-3xl font-bold text-stone-900 font-mono-tabular">
                4 Verified
              </div>
              <div className="text-xs font-medium text-stone-500 mt-1">
                BYLC & BDRCS Certified Credentials
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
