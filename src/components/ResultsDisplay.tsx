import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ChevronUp, FileText, Lightbulb } from 'lucide-react';

interface ResultsDisplayProps {
  query: string;
  algorithm: string;
}

type RankingTab = 'bm25' | 'dense' | 'fusion' | 'adaptive';

export function ResultsDisplay({ query, algorithm }: ResultsDisplayProps) {
  const [activeTab, setActiveTab] = useState<RankingTab>('adaptive');
  const [expandedResults, setExpandedResults] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedResults);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedResults(newExpanded);
  };

  // Mock results data
  const results = [
    {
      title: "Iron Man (2008 Film)",
      snippet: "Tony Stark, played by Robert Downey Jr., is a billionaire industrialist and genius inventor who builds a powered suit of armor. The film was directed by Jon Favreau...",
      fullText: "Tony Stark, played by Robert Downey Jr., is a billionaire industrialist and genius inventor who builds a powered suit of armor. The film was directed by Jon Favreau and marked the beginning of the Marvel Cinematic Universe. Robert Downey Jr.'s portrayal of Tony Stark became iconic and defined the character for a generation of fans.",
      scores: {
        bm25: 0.89,
        dense: 0.95,
        fusion: 0.92,
        adaptive: 0.96
      }
    },
    {
      title: "Robert Downey Jr. - Biography",
      snippet: "Robert Downey Jr. is an American actor known for his role as Tony Stark / Iron Man in the Marvel Cinematic Universe films. He first appeared as the character in 2008...",
      fullText: "Robert Downey Jr. is an American actor known for his role as Tony Stark / Iron Man in the Marvel Cinematic Universe films. He first appeared as the character in 2008 and reprised the role in multiple sequels and crossover films, becoming one of the highest-paid actors in the world.",
      scores: {
        bm25: 0.85,
        dense: 0.91,
        fusion: 0.88,
        adaptive: 0.94
      }
    },
    {
      title: "Marvel Cinematic Universe Cast",
      snippet: "The MCU features an ensemble cast including Robert Downey Jr. as Tony Stark, Chris Evans as Steve Rogers, and Scarlett Johansson as Natasha Romanoff...",
      fullText: "The Marvel Cinematic Universe features an ensemble cast of actors portraying iconic comic book characters. Robert Downey Jr. plays Tony Stark/Iron Man, Chris Evans plays Steve Rogers/Captain America, and Scarlett Johansson plays Natasha Romanoff/Black Widow. The franchise has become one of the most successful in cinema history.",
      scores: {
        bm25: 0.78,
        dense: 0.86,
        fusion: 0.82,
        adaptive: 0.87
      }
    },
    {
      title: "Tony Stark Character Analysis",
      snippet: "Tony Stark is a fictional character in the Marvel Comics universe. In film adaptations, the character has been portrayed exclusively by Robert Downey Jr. since 2008...",
      fullText: "Tony Stark is a fictional character in the Marvel Comics universe, created by Stan Lee, Larry Lieber, Don Heck, and Jack Kirby. In film adaptations, the character has been portrayed exclusively by Robert Downey Jr. since 2008. The character's arc spans multiple films, showing his evolution from a self-centered industrialist to a selfless hero.",
      scores: {
        bm25: 0.82,
        dense: 0.88,
        fusion: 0.85,
        adaptive: 0.90
      }
    },
    {
      title: "Avengers Cast Members",
      snippet: "The Avengers films bring together Marvel's greatest heroes. Key cast members include Robert Downey Jr. (Iron Man), Chris Hemsworth (Thor), and Mark Ruffalo (Hulk)...",
      fullText: "The Avengers films bring together Marvel's greatest heroes in epic team-up movies. Key cast members include Robert Downey Jr. as Tony Stark/Iron Man, Chris Hemsworth as Thor, Mark Ruffalo as Bruce Banner/Hulk, Chris Evans as Steve Rogers/Captain America, Scarlett Johansson as Natasha Romanoff/Black Widow, and Jeremy Renner as Clint Barton/Hawkeye.",
      scores: {
        bm25: 0.75,
        dense: 0.83,
        fusion: 0.79,
        adaptive: 0.85
      }
    }
  ];

  // Sort results based on active tab
  const sortedResults = [...results].sort((a, b) => {
    return b.scores[activeTab] - a.scores[activeTab];
  });

  const tabs = [
    { id: 'bm25', name: 'BM25 Ranking' },
    { id: 'dense', name: 'Dense Ranking' },
    { id: 'fusion', name: 'Fused Ranking' },
    { id: 'adaptive', name: 'Adaptive Ranking' },
  ];

  const highlightQuery = (text: string) => {
    const words = query.toLowerCase().split(' ').filter(w => w.length > 2);
    let highlightedText = text;
    
    words.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<mark class="bg-[#500000] text-white px-1 rounded">$1</mark>');
    });
    
    return highlightedText;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Tabs */}
      <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-2">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as RankingTab)}
              className={`px-4 py-3 rounded-xl transition-all ${
                activeTab === tab.id
                  ? 'bg-[#500000] text-white shadow-lg'
                  : 'bg-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-neutral-400">
          Found <span className="text-white">{results.length}</span> results for "{query}"
        </p>
        <p className="text-neutral-400">
          Sorted by: <span className="text-[#500000]">{tabs.find(t => t.id === activeTab)?.name}</span>
        </p>
      </div>

      {/* Results List */}
      <div className="space-y-4">
        {sortedResults.map((result, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-all"
          >
            {/* Result Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-neutral-800 rounded-lg">
                <FileText className="w-6 h-6 text-[#500000]" />
              </div>
              <div className="flex-1">
                <h3 className="text-white mb-2">{result.title}</h3>
                <p 
                  className="text-neutral-400 mb-3"
                  dangerouslySetInnerHTML={{ __html: highlightQuery(result.snippet) }}
                />

                {/* Scores */}
                <div className="flex flex-wrap gap-3 mb-3">
                  <ScoreBadge label="BM25" score={result.scores.bm25} active={activeTab === 'bm25'} />
                  <ScoreBadge label="Dense" score={result.scores.dense} active={activeTab === 'dense'} />
                  <ScoreBadge label="Fusion" score={result.scores.fusion} active={activeTab === 'fusion'} />
                  <ScoreBadge label="LTR" score={result.scores.adaptive} active={activeTab === 'adaptive'} />
                </div>

                {/* Expand/Collapse Button */}
                <button
                  onClick={() => toggleExpanded(index)}
                  className="flex items-center gap-2 text-[#500000] hover:text-[#700000] transition-colors"
                >
                  {expandedResults.has(index) ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      Show less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      Show full passage
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Expanded Content */}
            {expandedResults.has(index) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-4 pt-4 border-t border-neutral-800"
              >
                <p 
                  className="text-neutral-300 mb-4"
                  dangerouslySetInnerHTML={{ __html: highlightQuery(result.fullText) }}
                />
                
                {/* Ranking Explanation */}
                <div className="bg-neutral-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-[#500000]" />
                    <span className="text-white">Why this ranking?</span>
                  </div>
                  <p className="text-neutral-400">
                    This result scores {(result.scores[activeTab] * 100).toFixed(0)}% based on {
                      activeTab === 'bm25' ? 'term frequency and document length normalization' :
                      activeTab === 'dense' ? 'semantic similarity using neural embeddings' :
                      activeTab === 'fusion' ? 'combined rankings from multiple algorithms' :
                      'adaptive algorithm selection based on query characteristics'
                    }.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

interface ScoreBadgeProps {
  label: string;
  score: number;
  active: boolean;
}

function ScoreBadge({ label, score, active }: ScoreBadgeProps) {
  return (
    <div className={`px-3 py-1 rounded-lg border ${
      active 
        ? 'bg-[#500000] border-[#500000] text-white' 
        : 'bg-neutral-800 border-neutral-700 text-neutral-400'
    }`}>
      <span className="mr-2">{label}:</span>
      <span>{(score * 100).toFixed(0)}%</span>
    </div>
  );
}
