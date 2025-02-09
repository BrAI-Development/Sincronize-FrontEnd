import { Header } from '../organisms/Header';

interface TImeTrackerLayoutProps {
  children: React.ReactNode;
}

export function TimeTrackerLayout({ children }: TImeTrackerLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
}