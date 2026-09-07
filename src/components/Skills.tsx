import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { MaterialIcon } from './MaterialIcon';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [skillSearch, setSkillSearch] = useState<string>('');

  const iconMap: Record<string, string> = {
    Code2: 'code',
    Layout: 'dashboard_customize',
    Server: 'dns',
    Database: 'database',
    Wrench: 'construction',
    Cpu: 'memory',
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
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-cyanBrand-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyanBrand-50/90 dark:bg-slate-900/80 border border-cyanBrand-200 dark:border-cyanBrand-500/30 text-cyanBrand-700 dark:text-cyanBrand-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <MaterialIcon name="memory" className="text-[17px] text-cyanBrand-500" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
            A comprehensive matrix of frontend, backend, database, architecture, and developer tools.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('All')}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === 'All'
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20 font-semibold'
                  : 'bg-white dark:bg-[#151024]/80 text-slate-600 dark:text-slate-300 hover:text-cyanBrand-600 dark:hover:text-white hover:bg-cyanBrand-50 dark:hover:bg-slate-800 border border-cyanBrand-200 dark:border-slate-700/70'
              }`}
            >
              All Categories
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveTab(cat.title)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === cat.title
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20 font-semibold'
                    : 'bg-white dark:bg-[#151024]/80 text-slate-600 dark:text-slate-300 hover:text-cyanBrand-600 dark:hover:text-white hover:bg-cyanBrand-50 dark:hover:bg-slate-800 border border-cyanBrand-200 dark:border-slate-700/70'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <MaterialIcon name="search" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-cyanBrand-500" />
            <input
              type="text"
              placeholder="Search skills..."
              value={skillSearch}
              onChange={(e) => setSkillSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-cyanBrand-200 dark:border-slate-700/70 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-cyanBrand-500 focus:ring-2 focus:ring-cyanBrand-500/10 transition-all shadow-xs"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            if (!category) return null;

            const iconName = iconMap[category.iconName] || 'code';

            return (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-white dark:bg-[#17121d]/80 border border-cyanBrand-200/80 dark:border-slate-700/70 hover:border-cyanBrand-400 dark:hover:border-cyanBrand-500/50 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-cyanBrand-100 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-2xl bg-cyanBrand-50 dark:bg-slate-800 border border-cyanBrand-200 dark:border-slate-700 flex items-center justify-center text-cyanBrand-600 dark:text-cyanBrand-300 shadow-sm">
                    <MaterialIcon name={iconName} className="text-[24px]" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {category.skills.length} competencies
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-semibold bg-cyanBrand-50/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-cyanBrand-200/80 dark:border-slate-700/70 hover:border-cyanBrand-400 hover:text-cyanBrand-700 dark:hover:text-cyanBrand-300 transition-all shadow-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyanBrand-500" />
                      <span>{skill.name}</span>
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
