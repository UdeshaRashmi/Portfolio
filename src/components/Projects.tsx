import React, { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  ArrowUpRight, 
  Search, 
  Info
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

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
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-950/70 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-brand-400" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Crafted <span className="gradient-text">Projects & Systems</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl">
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
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search tech (e.g. React, NestJS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/50 transition-all"
            />
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl bg-slate-900/40 border border-slate-800">
            <p className="text-slate-400 text-sm">No projects matched your search term "{searchQuery}".</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-xl bg-brand-600 text-white text-xs font-semibold"
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
                  className={`group relative rounded-3xl bg-slate-900/70 border ${
                    isResearch 
                      ? 'border-brand-500/40 shadow-xl shadow-brand-950/40' 
                      : 'border-slate-800 hover:border-brand-500/40'
                  } p-6 sm:p-7 flex flex-col justify-between backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 overflow-hidden`}
                >
                  {/* Subtle top indicator */}
                  {isResearch && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-cyan-400 to-indigo-500" />
                  )}

                  {/* Card Content Top */}
                  <div>
                    
                    {/* Badge Row */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-950/80 text-brand-300 border border-brand-800/60">
                        {project.category}
                      </span>
                      {project.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-800/80 text-cyan-300 border border-slate-700">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-brand-300 transition-colors mb-1 line-clamp-2">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs font-mono text-slate-400 mb-3 line-clamp-1">
                        {project.subtitle}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    {project.highlights && (
                      <div className="mb-4 space-y-1.5">
                        {project.highlights.map((hl, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    )}

                  </div>

                  {/* Card Bottom: Tech Pills & Actions */}
                  <div className="mt-4 pt-4 border-t border-slate-800/80">
                    
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-mono text-slate-400 bg-slate-800/50">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white bg-slate-800/70 hover:bg-brand-600 border border-slate-700/80 hover:border-brand-500 transition-all duration-200 shadow-sm"
                    >
                      <Info className="w-4 h-4 text-brand-400 group-hover:text-white" />
                      <span>View Full Details & Stack</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
