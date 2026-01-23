import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ChapterPage } from './components/ChapterPage';

function HomePage() {
  return (
    <div className="prose prose-invert prose-slate max-w-none">
      <h1 className="text-5xl font-bold text-white mb-6">
        How Software Works
      </h1>
      <p className="text-xl text-slate-300 mb-8">
        A comprehensive course taking you from binary to production-ready applications.
      </p>

      <div className="bg-slate-900 border border-slate-700 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">
          What You'll Learn
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>How computers execute code at the machine level</li>
          <li>Operating systems, processes, and memory management</li>
          <li>How compilers and interpreters transform code</li>
          <li>Network protocols and web communication</li>
          <li>Database internals and query optimization</li>
          <li>Web frameworks, build tools, and modern development</li>
          <li>Security, authentication, and best practices</li>
          <li>DevOps, containers, and cloud infrastructure</li>
        </ul>
      </div>

      <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-300 mb-2">
          Start Learning
        </h3>
        <p className="text-slate-300">
          Select a module from the sidebar to begin your journey into understanding
          how software really works under the hood.
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/module/:moduleSlug/:chapterSlug" element={<ChapterPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
