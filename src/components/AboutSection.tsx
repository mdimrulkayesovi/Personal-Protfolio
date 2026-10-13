import React from 'react';
import { ProfileData } from '../types/portfolio';
import { Code2, HeartHandshake, Database, Shield, BookOpen, Compass, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  profile: ProfileData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
            Background & Mission
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight text-balance">
            Where Computer Science meets community resilience.
          </h2>
          <p className="mt-3 text-stone-600 leading-relaxed">
            Currently studying Computer Science and Technology at Shandong University of Technology (SDUT) in Zibo, Shandong, China. Born and raised in Bangladesh, I bridge rigorous international computer science training with 9 years (2017–2026) of grassroots Management Information Systems (MIS) service, emergency response, and community technology leadership.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/80">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">
              Computer Science at SDUT
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Mastering core computer science at Shandong University of Technology: algorithmic complexity, data structures (C++, Python), operating systems, and full-stack software development (TypeScript, React).
            </p>
            <div className="mt-4 pt-4 border-t border-stone-200 text-xs text-stone-500 space-y-1">
              <div>· Data Structures & Algorithmic Analysis</div>
              <div>· Relational Database Architecture (SQL)</div>
              <div>· Modern Web & Distributed Systems</div>
            </div>
          </div>

          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/80">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center mb-4">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">
              Management Information Systems (MIS)
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Applying IT infrastructure and structured databases to solve administrative bottlenecks: managing mass vaccination registrations, citizen records, and volunteer logistics with precision.
            </p>
            <div className="mt-4 pt-4 border-t border-stone-200 text-xs text-stone-500 space-y-1">
              <div>· High-throughput citizen data validation</div>
              <div>· City Corporation & BRAC collaborative drives</div>
              <div>· Structured spreadsheet & relational modeling</div>
            </div>
          </div>

          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/80">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">
              Humanitarian Leadership
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Active with Red Crescent Youth from 2017 to 2026 (9 years). Progressed from school volunteer to Team Leader and Unit MIS volunteer, leading public health drives, emergency First Aid, and climate action.
            </p>
            <div className="mt-4 pt-4 border-t border-stone-200 text-xs text-stone-500 space-y-1">
              <div>· 9 consecutive years service (2017–2026)</div>
              <div>· Certified First Aider (Basic Life Support)</div>
              <div>· Y-Adapt Climate Project Implementation</div>
            </div>
          </div>

        </div>

        {/* Narrative Split */}
        <div className="bg-stone-100/70 rounded-2xl p-8 sm:p-10 border border-stone-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              <h3 className="text-xl font-bold text-stone-900">
                A global outlook with deep grassroots commitment
              </h3>
              <p>
                Living and studying in Zibo, Shandong, China as an international student from Bangladesh gives me a distinctive cross-cultural perspective. I experience cutting-edge technological development in China while staying deeply anchored in real-world community challenges back home.
              </p>
              <p>
                From coordinating municipal vaccination data with Gazipur City Corporation and leading dengue cleanliness campaigns with BRAC to mastering advanced algorithms at SDUT, my focus remains constant: building dependable software that solves tangible human problems.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-3">
              <div className="text-xs font-semibold uppercase text-stone-500 tracking-wider">
                Quick Facts & Personal Info
              </div>
              
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">Full Name</span>
                  <span className="font-semibold text-stone-900">Md Imrul Kayes Ovi</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">University</span>
                  <span className="font-semibold text-stone-900 text-right">Shandong University of Technology (China)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">Degree</span>
                  <span className="font-semibold text-stone-900">B.Sc. in Computer Science & Technology</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">Location</span>
                  <span className="font-semibold text-stone-900 text-right">{profile.location}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">Languages</span>
                  <span className="font-semibold text-stone-900 text-right">Bengali (Native) · English (C2) · Chinese · Hindi · Urdu</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-500">Availability</span>
                  <span className="font-semibold text-emerald-700">Open for Global Internships & Projects</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
