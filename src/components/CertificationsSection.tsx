import React from 'react';
import { certificationsData, languageSkills } from '../data/portfolioData';
import { Award, Globe, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
            Credentials & Multilingual Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Certifications & Global Language Matrix
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            Professional leadership development from BYLC, clinical first aid training from BDRCS, and verified CEFR language proficiencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Certifications (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-stone-700" />
              <span>Certified Training & Leadership Programs</span>
            </h3>

            <div className="space-y-4">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-stone-50 p-6 rounded-2xl border border-stone-200/90 hover:border-stone-400 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4 mb-1">
                    <span className="text-xs font-semibold text-stone-500">
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-mono text-stone-500">
                      {cert.issueDate}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-stone-900 mb-2">
                    {cert.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
                    <span className="font-medium text-stone-700">{cert.category}</span>
                    <span className="text-[11px] font-mono text-stone-400">VERIFIED CREDENTIAL</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Language Skills CEFR Table (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-stone-700" />
              <span>Language Skills (CEFR Standard)</span>
            </h3>

            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-6">
              
              {/* Native Language Highlight */}
              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-base font-bold text-stone-900">Bengali (বাংলা)</span>
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    Mother Tongue / Native
                  </span>
                </div>
                <p className="text-xs text-stone-500">
                  Full native operational command across academic, technical, and community domains.
                </p>
              </div>

              {/* CEFR Breakdown for other languages */}
              <div className="space-y-4">
                <div className="text-xs font-semibold uppercase text-stone-500 tracking-wider">
                  International & Regional Languages
                </div>

                {languageSkills.filter(l => !l.isNative).map((lang) => (
                  <div key={lang.language} className="bg-white p-4 rounded-xl border border-stone-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-bold text-stone-900">{lang.language}</span>
                      <span className="text-xs font-mono font-semibold text-stone-800">
                        {lang.language === 'English' ? 'C2 Proficient' : 'C1 Spoken User'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-stone-50 p-2 rounded-lg">
                        <span className="text-stone-400 block text-[10px]">Listening</span>
                        <span className="font-semibold text-stone-800">{lang.listening}</span>
                      </div>
                      <div className="bg-stone-50 p-2 rounded-lg">
                        <span className="text-stone-400 block text-[10px]">Reading</span>
                        <span className="font-semibold text-stone-800">{lang.reading}</span>
                      </div>
                      <div className="bg-stone-50 p-2 rounded-lg">
                        <span className="text-stone-400 block text-[10px]">Spoken Interaction</span>
                        <span className="font-semibold text-stone-800">{lang.spokenInteraction}</span>
                      </div>
                      <div className="bg-stone-50 p-2 rounded-lg">
                        <span className="text-stone-400 block text-[10px]">Writing</span>
                        <span className="font-semibold text-stone-800">{lang.writing}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-[11px] text-stone-400 leading-tight">
                CEFR: Common European Framework of Reference for Languages (C2: Mastery, C1: Effective Operational Proficiency, A1: Basic).
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
