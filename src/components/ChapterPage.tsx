import { useParams, Link } from 'react-router-dom';
import { toc } from '../data/toc';

export function ChapterPage() {
  const { moduleSlug, chapterSlug } = useParams<{
    moduleSlug: string;
    chapterSlug: string;
  }>();

  const module = toc.find((m) => m.slug === moduleSlug);
  const chapter = module?.chapters.find((c) => c.slug === chapterSlug);

  if (!module || !chapter) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-white mb-4">Chapter Not Found</h1>
        <Link to="/" className="text-blue-400 hover:text-blue-300">
          Go back home
        </Link>
      </div>
    );
  }

  const currentChapterIndex = module.chapters.findIndex((c) => c.slug === chapterSlug);
  const previousChapter = currentChapterIndex > 0 ? module.chapters[currentChapterIndex - 1] : null;
  const nextChapter =
    currentChapterIndex < module.chapters.length - 1
      ? module.chapters[currentChapterIndex + 1]
      : null;

  const nextModule =
    !nextChapter && module.id < toc.length - 1 ? toc[module.id + 1] : null;
  const previousModule = !previousChapter && module.id > 0 ? toc[module.id - 1] : null;

  return (
    <div className="prose prose-invert prose-slate max-w-none">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
          <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-semibold">
            Module {module.id}
          </span>
          <span>/</span>
          <span>{module.title}</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">
          {chapter.title}
        </h1>
        <p className="text-slate-400 text-lg">
          Chapter {chapter.id}
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-700 rounded-lg p-8 text-center">
        <div className="text-6xl mb-4">📚</div>
        <h2 className="text-2xl font-semibold text-white mb-2">
          Coming Soon
        </h2>
        <p className="text-slate-400">
          This chapter is currently being written. Check back soon!
        </p>
      </div>

      <div className="flex justify-between items-center mt-12 pt-8 border-t border-slate-800">
        <div>
          {(previousChapter || previousModule) && (
            <Link
              to={
                previousChapter
                  ? `/module/${module.slug}/${previousChapter.slug}`
                  : previousModule
                  ? `/module/${previousModule.slug}/${
                      previousModule.chapters[previousModule.chapters.length - 1].slug
                    }`
                  : '/'
              }
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-slate-400">Previous</div>
                <div className="font-medium">
                  {previousChapter?.title ||
                    (previousModule &&
                      previousModule.chapters[previousModule.chapters.length - 1].title)}
                </div>
              </div>
            </Link>
          )}
        </div>

        <div>
          {(nextChapter || nextModule) && (
            <Link
              to={
                nextChapter
                  ? `/module/${module.slug}/${nextChapter.slug}`
                  : nextModule
                  ? `/module/${nextModule.slug}/${nextModule.chapters[0].slug}`
                  : '/'
              }
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <div className="text-right">
                <div className="text-xs text-blue-200">Next</div>
                <div className="font-medium">
                  {nextChapter?.title || (nextModule && nextModule.chapters[0].title)}
                </div>
              </div>
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
