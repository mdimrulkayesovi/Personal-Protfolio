import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Users, Calendar, MapPin, CheckCircle2, ChevronRight, Award } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
            Leadership & Grassroots Service
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Humanitarian Volunteering & ICT Operations
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            Over eight years of continuous leadership, community mobilization, and administrative IT support under Bangladesh Red Crescent Society (BDRCS).
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-stone-300 ml-4 md:ml-6 space-y-12">
          {experienceData.map((item, idx) => (
            <div key={item.id} className="relative pl-8 md:pl-10">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-stone-900 border-4 border-stone-50" />

              {/* Card Container */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
                
                {/* Header Unboxed Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <span className="font-semibold text-stone-800">{item.period}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-stone-700">{item.type}</span>
                  </div>

                  {idx === 0 && (
                    <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Current Active Service
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-stone-900">
                  {item.role}
                </h3>
                <h4 className="text-sm font-medium text-stone-600 mb-4">
                  {item.organization} — <span className="text-stone-500">{item.unit}</span>
                </h4>

                {/* Highlights List */}
                <div className="space-y-2.5 text-xs sm:text-sm text-stone-700 mb-6">
                  {item.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5">
                      <span className="text-stone-400 mt-1 shrink-0">•</span>
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags unboxed */}
                <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-stone-400 mr-1">Competencies:</span>
                  {item.skillsUsed.map((sk) => (
                    <span
                      key={sk}
                      className="px-2.5 py-1 text-xs font-medium text-stone-700 bg-stone-100 rounded-md"
                    >
                      {sk}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
