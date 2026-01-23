import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toc } from '../data/toc';

export function Sidebar() {
  const location = useLocation();
  const [expandedModules, setExpandedModules] = useState<Set<number>>(new Set([0]));

  const toggleModule = (moduleId: number) => {
    setExpandedModules(prev => {
      const next = new Set(prev);
      if (next.has(moduleId)) {
        next.delete(moduleId);
      } else {
        next.add(moduleId);
      }
      return next;
    });
  };

  const isChapterActive = (moduleSlug: string, chapterSlug: string) => {
    return location.pathname === `/module/${moduleSlug}/${chapterSlug}`;
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-80 bg-slate-900 border-r border-slate-700 overflow-y-auto">
      <div className="p-6 border-b border-slate-700">
        <Link to="/" className="block">
          <h1 className="text-2xl font-bold text-white mb-1">
            How Software Works
          </h1>
          <p className="text-slate-400 text-sm">
            From binary to production
          </p>
        </Link>
      </div>

      <nav className="p-4">
        {toc.map((module) => {
          const isExpanded = expandedModules.has(module.id);

          return (
            <div key={module.id} className="mb-2">
              <button
                onClick={() => toggleModule(module.id)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left hover:bg-slate-800 transition-colors group"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-slate-800 text-slate-300 text-sm font-semibold group-hover:bg-slate-700 transition-colors">
                    {module.id}
                  </span>
                  <span className="text-slate-200 font-medium text-sm">
                    {module.title}
                  </span>
                </div>
                <svg
                  className={`w-5 h-5 text-slate-400 transition-transform ${
                    isExpanded ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {isExpanded && (
                <div className="mt-1 ml-8 space-y-1">
                  {module.chapters.map((chapter) => {
                    const isActive = isChapterActive(module.slug, chapter.slug);

                    return (
                      <Link
                        key={chapter.id}
                        to={`/module/${module.slug}/${chapter.slug}`}
                        className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                          isActive
                            ? 'bg-blue-600 text-white font-medium'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                        }`}
                      >
                        <span className="text-xs opacity-70 mr-2">
                          {chapter.id}
                        </span>
                        {chapter.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
