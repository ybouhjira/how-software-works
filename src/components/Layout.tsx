import type { ReactNode } from 'react';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950">
      <Sidebar />
      <main className="ml-80 min-h-screen">
        <div className="max-w-5xl mx-auto px-8 py-12">
          {children}
        </div>
      </main>
    </div>
  );
}
