import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  Cpu, 
  Search 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [skillSearch, setSkillSearch] = useState<string>('');

  const iconMap: Record<string, React.ElementType> = {
    Code2,
    Layout,
    Server,
    Database,
    Wrench,
    Cpu,
  };

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    if (activeTab !== 'All' && cat.title !== activeTab) {
      return null;
    }
    const filteredSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(skillSearch.toLowerCase().trim())
    );
    if (filteredSkills.length === 0 && skillSearch) return null;
    return {
      ...cat,
      skills: filteredSkills,
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-indigo-700/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl">
            A comprehensive matrix of frontend, backend, database, architecture, and developer tools.
          </p>
        </div>

        {/* Tab Switcher & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('All')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === 'All'
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                  : 'bg-slate-900/70 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              All Categories
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveTab(cat.title)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === cat.title
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                    : 'bg-slate-900/70 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Filter skill (e.g. React, Docker)..."
              value={skillSearch}
              onChange={(e) => setSkillSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500/60 transition-all"
            />
          </div>

        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            if (!category) return null;
            const IconComponent = iconMap[category.iconName] || Code2;

            return (
              <div
                key={category.title}
                className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-brand-500/40 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-brand-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400">
                      {category.skills.length} competencies
                    </p>
                  </div>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                        skill.highlight
                          ? 'bg-brand-950/80 text-brand-200 border border-brand-500/40 hover:border-brand-400 shadow-sm'
                          : 'bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:border-slate-500 hover:text-white'
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                      )}
                      <span>{skill.name}</span>
                      {skill.level && (
                        <span className="text-[10px] font-mono text-slate-400 ml-0.5">
                          • {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
