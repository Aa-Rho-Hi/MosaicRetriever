import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ArrowLeft, Loader2, Info } from 'lucide-react';
import { ResultsDisplay } from './ResultsDisplay';

interface SearchInterfaceProps {
  onNavigate: (page: string) => void;
}

type Algorithm = 'bm25' | 'dense' | 'fusion' | 'adaptive';

export function SearchInterface({ onNavigate }: SearchInterfaceProps) {
  const [query, setQuery] = useState('');
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<Algorithm>('adaptive');
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    // Simulate search delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSearching(false);
    setHasSearched(true);
  };

  const algorithms = [
    { id: 'bm25', name: 'BM25', description: 'Probabilistic ranking function' },
    { id: 'dense', name: 'Dense Retrieval', description: 'Neural semantic search' },
    { id: 'fusion', name: 'Fusion (RRF)', description: 'Reciprocal Rank Fusion' },
    { id: 'adaptive', name: 'Adaptive Mode', description: 'Phase-3 LTR selector' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-neutral-900/50 backdrop-blur-sm border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => onNavigate('landing')}
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-white">Search Interface</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 shadow-2xl">
            <div className="flex gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="Ask something... e.g., Who played Tony Stark?"
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#500000] transition-colors"
                />
              </div>
              <button
                onClick={handleSearch}
                disabled={isSearching || !query.trim()}
                className="px-8 py-4 bg-[#500000] text-white rounded-xl hover:bg-[#600000] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSearching ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    Search
                  </>
                )}
              </button>
            </div>

            {/* Algorithm Selection */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-neutral-400">
                <span>Select Algorithm:</span>
                <div className="group relative">
                  <Info className="w-4 h-4 cursor-help" />
                  <div className="absolute left-0 top-6 w-64 bg-neutral-800 border border-neutral-700 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    <p className="text-neutral-300">
                      Choose which retrieval algorithm to use, or select Adaptive Mode to let the system choose the best approach.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {algorithms.map((algo) => (
                  <button
                    key={algo.id}
                    onClick={() => setSelectedAlgorithm(algo.id as Algorithm)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      selectedAlgorithm === algo.id
                        ? 'bg-[#500000] border-[#500000] text-white'
                        : 'bg-neutral-800 border-neutral-700 text-neutral-300 hover:border-neutral-600'
                    }`}
                  >
                    <div className="mb-1">{algo.name}</div>
                    <p className="text-neutral-400">{algo.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Loading Animation */}
        <AnimatePresence>
          {isSearching && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-neutral-700 border-t-[#500000] rounded-full mb-4"
              />
              <p className="text-neutral-400">Processing your query...</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results */}
        {hasSearched && !isSearching && (
          <ResultsDisplay query={query} algorithm={selectedAlgorithm} />
        )}
      </div>
    </div>
  );
}
