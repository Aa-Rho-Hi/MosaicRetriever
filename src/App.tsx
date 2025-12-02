import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { SearchInterface } from './components/SearchInterface';
import { ModelComparison } from './components/ModelComparison';
import { ArchitecturePage } from './components/ArchitecturePage';
import { DatasetPage } from './components/DatasetPage';

type Page = 'landing' | 'search' | 'comparison' | 'architecture' | 'dataset';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'search':
        return <SearchInterface onNavigate={setCurrentPage} />;
      case 'comparison':
        return <ModelComparison onNavigate={setCurrentPage} />;
      case 'architecture':
        return <ArchitecturePage onNavigate={setCurrentPage} />;
      case 'dataset':
        return <DatasetPage onNavigate={setCurrentPage} />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-[#500000]">
      {renderPage()}
    </div>
  );
}
