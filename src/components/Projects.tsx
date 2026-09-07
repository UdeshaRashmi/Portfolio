import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { MaterialIcon } from './MaterialIcon';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'Frontend', 'Microservices', 'AI / Research'];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((proj) => {
      const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch = 
        proj.title.toLowerCase().includes(query) ||
        proj.description.toLowerCase().includes(query) ||
        proj.technologies.some(t => t.toLowerCase().includes(query)) ||
        (proj.subtitle && proj.subtitle.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100/80 dark:bg-pink-950/70 border border-pink-300 dark:border-pink-500/30 text-pink-700 dark:text-pink-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <MaterialIcon name="folder_code" className="text-[17px] text-roseBrand-500" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Selected <span className="gradient-text">Projects & Systems</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
            Explore my production-grade web platforms, microservices architecture, and 4th-year AI research project.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-roseBrand-500 to-brand-600 text-white shadow-md shadow-roseBrand-500/20 font-semibold'
                    : 'bg-white dark:bg-[#151024]/80 text-slate-600 dark:text-slate-300 hover:text-pink-600 dark:hover:text-white hover:bg-pink-50 dark:hover:bg-purple-900/40 border border-pink-200 dark:border-purple-900/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <MaterialIcon name="search" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-roseBrand-400" />
            <input
              type="text"
              placeholder="Filter tech (e.g. React, NestJS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-2xl bg-white dark:bg-[#151024]/90 border border-pink-200 dark:border-purple-900/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all shadow-xs"
            />
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-2xl bg-white dark:bg-[#17121d]/60 border border-roseBrand-200 dark:border-roseBrand-500/20">
            <p className="text-slate-600 dark:text-slate-400 text-sm">No projects matched your search term "{searchQuery}".</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-2xl bg-gradient-to-r from-roseBrand-500 to-brand-600 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => {
              const isResearch = project.category === 'AI / Research';
              return (
                <div
                  key={project.id}
                  className={`group relative rounded-2xl bg-white dark:bg-[#17121d]/80 border ${
                    isResearch 
                      ? 'border-pink-300 dark:border-pink-600/50 shadow-xl shadow-pink-500/10' 
                      : 'border-pink-200/80 dark:border-purple-900/50 hover:border-pink-400 dark:hover:border-purple-500/60'
                  } p-6 sm:p-7 flex flex-col justify-between backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 overflow-hidden shadow-sm hover:shadow-lg`}
                >
                  {/* Subtle top indicator */}
                  {isResearch && (
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600" />
                  )}

                  {/* Card Content Top */}
                  <div>
                    
                    {/* Badge Row */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-pink-100 dark:bg-pink-950/80 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-800/60">
                        {project.category}
                      </span>
                      {project.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-300 transition-colors mb-1 line-clamp-2">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3 line-clamp-1">
                        {project.subtitle}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    {project.highlights && (
                      <div className="mb-4 space-y-1.5">
                        {project.highlights.map((hl, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    )}

                  </div>

                  {/* Card Bottom: Tech Pills & Actions */}
                  <div className="mt-4 pt-4 border-t border-pink-100 dark:border-purple-900/40">
                    
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-lg text-[11px] font-medium bg-pink-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-pink-200 dark:border-purple-800"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded-lg text-[11px] font-mono text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-950/60">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-white bg-pink-50 dark:bg-slate-800/80 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 border border-pink-200 dark:border-purple-800/80 group-hover:border-transparent transition-all duration-200 shadow-sm"
                    >
                      <MaterialIcon name="info" className="text-[18px] text-roseBrand-500 group-hover:text-white" />
                      <span>View Full Details & Stack</span>
                      <MaterialIcon name="north_east" className="text-[18px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </section>
  );
};
