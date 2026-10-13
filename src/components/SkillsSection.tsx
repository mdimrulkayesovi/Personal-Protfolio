import React, { useState } from 'react';
import { digitalCompetencies, technicalSkillsList } from '../data/portfolioData';
import { CheckCircle2, Award, Cpu, Database, Wrench, ShieldCheck, Info } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'competencies' | 'technical'>('competencies');

  return (
    <section id="academics" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Tab Selector */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
              Verified Skills & Framework
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              Digital Competence & Technical Matrix
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-xl">
              Benchmarked against the European Digital Competence Framework 2.1 (DigComp) alongside modern Computer Science engineering tools.
            </p>
          </div>

          {/* Interactive Switcher */}
          <div className="inline-flex p-1 bg-stone-100 rounded-xl self-start md:self-auto border border-stone-200">
            <button
              onClick={() => setActiveTab('competencies')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'competencies'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              EU DigComp 2.1 Test Scores
            </button>
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'technical'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Technical & Software Stack
            </button>
          </div>
        </div>

        {/* Tab 1: EU Digital Competence Framework 2.1 */}
        {activeTab === 'competencies' && (
          <div className="space-y-6">
            <div className="bg-stone-50 p-4 sm:p-5 rounded-2xl border border-stone-200 flex items-start gap-3">
              <Info className="w-5 h-5 text-stone-600 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                <span className="font-semibold text-stone-900">Official Self-Assessment Test: </span>
                Results benchmarked according to <span className="underline font-medium">The Digital Competence Framework 2.1</span>. Evaluates proficiency levels from Level 1 (Foundation) up to Level 6 (Advanced Mastery).
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {digitalCompetencies.map((comp) => {
                const percentage = (comp.levelNum / comp.maxLevel) * 100;
                const isTopLevel = comp.levelNum === 6;

                return (
                  <div
                    key={comp.area}
                    className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <h3 className="text-base font-bold text-stone-900">
                          {comp.area}
                        </h3>
                        <div className="text-right shrink-0">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${
                            isTopLevel ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-stone-100 text-stone-800'
                          }`}>
                            {comp.proficiency}
                          </span>
                        </div>
                      </div>

                      {/* Score Level */}
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-2xl font-bold text-stone-900 font-mono-tabular">
                          {comp.scoreLevel}
                        </span>
                        <span className="text-xs text-stone-500">
                          ({percentage.toFixed(0)}% Proficiency)
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden mb-4">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isTopLevel ? 'bg-emerald-600' : 'bg-stone-800'
                          }`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>

                      <p className="text-xs text-stone-600 leading-relaxed">
                        {comp.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                      <span>Standard: EU DigComp 2.1</span>
                      <span className="font-mono">VERIFIED ASSESSMENT</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Technical & Software Stack */}
        {activeTab === 'technical' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalSkillsList.map((group) => (
              <div
                key={group.category}
                className="bg-stone-50 p-6 rounded-2xl border border-stone-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-xs bg-stone-800" />
                    <span>{group.category}</span>
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-3 py-1.5 bg-white border border-stone-200 rounded-lg text-xs font-medium text-stone-800 shadow-2xs hover:border-stone-400 transition-colors"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200/60 text-xs text-stone-500">
                  Applied in coursework, BDRCS MIS systems, and municipal initiatives.
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
