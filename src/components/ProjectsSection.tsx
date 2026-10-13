import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { ArrowUpRight, Layers, CheckCircle2, X, Github, ExternalLink, Sparkles, Terminal } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Web & Software', 'MIS & Data Systems', 'Community Tech'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 md:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
              Featured Work & Systems
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              Selected Technical & Field Projects
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-xl">
              From Computer Science academic toolkits to production Management Information Systems deployed for mass community operations.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers) */}
          <div className="inline-flex p-1 bg-stone-200/80 rounded-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between hover:border-stone-400 hover:shadow-xs transition-all cursor-pointer group"
            >
              <div>
                {/* Unboxed Metadata Header (No pills) */}
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
                  <span className="font-medium text-stone-700">{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.period}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.role}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-stone-700 transition-colors leading-snug mb-2 flex items-start justify-between gap-2">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 transition-colors shrink-0 mt-1" />
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {project.shortDesc}
                </p>

                {/* Impact Highlights */}
                {project.impactMetrics && project.impactMetrics.length > 0 && (
                  <div className="mb-4 p-3 bg-stone-50 rounded-xl border border-stone-100 text-xs text-stone-700 space-y-1">
                    <div className="font-semibold text-stone-900 flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Key Outcome</span>
                    </div>
                    <div>{project.impactMetrics[0]}</div>
                  </div>
                )}
              </div>

              {/* Technologies unboxed list */}
              <div className="pt-4 border-t border-stone-100 mt-2">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-500">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span className="text-stone-700 font-mono-tabular">{tech}</span>
                      {i < Math.min(project.technologies.length, 4) - 1 && (
                        <span aria-hidden="true" className="text-stone-300">/</span>
                      )}
                    </React.Fragment>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-stone-400 text-[11px]">+{project.technologies.length - 4} more</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-stone-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 text-stone-400 hover:text-stone-900 rounded-lg transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Unboxed Metadata */}
            <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
              <span className="font-medium text-stone-800">{selectedProject.category}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedProject.period}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedProject.role}</span>
            </div>

            <h3 className="text-2xl font-bold text-stone-900 mb-4">
              {selectedProject.title}
            </h3>

            {/* Full Narrative */}
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6">
              {selectedProject.fullDesc}
            </p>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                Key Features & Capabilities
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                {selectedProject.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-stone-400 font-mono mt-0.5">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact Metrics */}
            {selectedProject.impactMetrics && selectedProject.impactMetrics.length > 0 && (
              <div className="mb-6 bg-stone-50 p-4 rounded-xl border border-stone-200">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  Verified Impact & Metrics
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-800">
                  {selectedProject.impactMetrics.map((metric, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technical Architecture Notes */}
            {selectedProject.architectureNotes && (
              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  System Architecture & Stack
                </h4>
                <p className="text-xs text-stone-600 bg-stone-100 p-3 rounded-lg font-mono">
                  {selectedProject.architectureNotes}
                </p>
              </div>
            )}

            {/* Technology Stack List */}
            <div className="mb-8">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium text-stone-700 bg-stone-100 rounded-md font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
              >
                Close View
              </button>
              
              <a
                href={`mailto:mdimrulkayesovi@gmail.com?subject=Inquiry regarding ${encodeURIComponent(selectedProject.title)}`}
                className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors"
              >
                Discuss This Project
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
