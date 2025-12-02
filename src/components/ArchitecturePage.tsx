import { motion } from 'motion/react';
import { ArrowLeft, Database, Search, Brain, Shuffle, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ArchitecturePageProps {
  onNavigate: (page: string) => void;
}

export function ArchitecturePage({ onNavigate }: ArchitecturePageProps) {
  const phases = [
    {
      number: 0,
      title: 'Data & Infrastructure',
      icon: <Database className="w-8 h-8" />,
      color: '#6366f1',
      description: 'Foundation setup with FEVER dataset and indexing infrastructure',
      components: [
        'FEVER dataset ingestion',
        'Document preprocessing & cleaning',
        'Index creation (Elasticsearch/Anserini)',
        'Embedding generation infrastructure',
        'Evaluation framework setup',
      ],
    },
    {
      number: 1,
      title: 'Baseline Methods',
      icon: <Search className="w-8 h-8" />,
      color: '#8b5cf6',
      description: 'Implementation of BM25 and Dense Retrieval baselines',
      components: [
        'BM25 implementation (Anserini/Pyserini)',
        'Dense retrieval model selection',
        'Bi-encoder architecture (BERT-based)',
        'Vector index creation (FAISS/Annoy)',
        'Individual model evaluation',
      ],
    },
    {
      number: 2,
      title: 'Fusion (RRF)',
      icon: <Shuffle className="w-8 h-8" />,
      color: '#ec4899',
      description: 'Reciprocal Rank Fusion for combining multiple ranking signals',
      components: [
        'RRF algorithm implementation',
        'Score normalization strategies',
        'Ranking combination logic',
        'Hyperparameter tuning (k parameter)',
        'Fusion effectiveness analysis',
      ],
    },
    {
      number: 3,
      title: 'Learning-to-Rank',
      icon: <Zap className="w-8 h-8" />,
      color: '#500000',
      description: 'Adaptive algorithm selection using Learning-to-Rank',
      components: [
        'Query feature extraction',
        'Training data generation',
        'LTR model training (LambdaMART/RankNet)',
        'Algorithm selector implementation',
        'Adaptive routing logic',
      ],
    },
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
          <h1 className="text-white">System Architecture</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 mb-12"
        >
          <h2 className="text-white mb-4">Architecture Overview</h2>
          <p className="text-neutral-300 mb-6">
            MosaicRetriever is built in four progressive phases, each adding sophisticated retrieval 
            capabilities. The system combines traditional IR methods with modern neural approaches, 
            culminating in an adaptive framework that intelligently selects the best algorithm for each query.
          </p>
          
          {/* Flow Diagram */}
          <div className="bg-neutral-800 rounded-xl p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <FlowStep label="Query Input" />
              <ArrowRight className="w-6 h-6 text-neutral-600" />
              <FlowStep label="Feature Extraction" />
              <ArrowRight className="w-6 h-6 text-neutral-600" />
              <FlowStep label="Algorithm Selection" />
              <ArrowRight className="w-6 h-6 text-neutral-600" />
              <FlowStep label="Retrieval" />
              <ArrowRight className="w-6 h-6 text-neutral-600" />
              <FlowStep label="Fusion/Ranking" />
              <ArrowRight className="w-6 h-6 text-neutral-600" />
              <FlowStep label="Results" />
            </div>
          </div>
        </motion.div>

        {/* Phase Cards */}
        <div className="space-y-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < phases.length - 1 && (
                <div className="absolute left-12 top-full h-8 w-0.5 bg-gradient-to-b from-neutral-700 to-transparent" />
              )}

              <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-all">
                <div className="flex items-start gap-6">
                  {/* Phase Icon */}
                  <div 
                    className="p-4 rounded-xl flex-shrink-0"
                    style={{ backgroundColor: phase.color + '20', color: phase.color }}
                  >
                    {phase.icon}
                  </div>

                  {/* Phase Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span 
                        className="px-3 py-1 rounded-lg text-white"
                        style={{ backgroundColor: phase.color }}
                      >
                        Phase {phase.number}
                      </span>
                      <h3 className="text-white">{phase.title}</h3>
                    </div>

                    <p className="text-neutral-300 mb-6">{phase.description}</p>

                    {/* Components List */}
                    <div className="space-y-2">
                      <div className="text-neutral-400 mb-3">Key Components:</div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {phase.components.map((component, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            className="flex items-start gap-2 text-neutral-300"
                          >
                            <CheckCircle2 
                              className="w-4 h-4 mt-0.5 flex-shrink-0"
                              style={{ color: phase.color }}
                            />
                            <span>{component}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8"
        >
          <h2 className="text-white mb-6">Technical Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-[#500000] mb-3">Data & Indexing</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>• FEVER Dataset</li>
                <li>• Elasticsearch / Anserini</li>
                <li>• Pyserini</li>
                <li>• FAISS for vector search</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#500000] mb-3">Models & ML</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>• BERT-based encoders</li>
                <li>• Sentence Transformers</li>
                <li>• LambdaMART / RankNet</li>
                <li>• PyTorch / TensorFlow</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#500000] mb-3">Evaluation</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>• nDCG, Recall@k</li>
                <li>• Mean Reciprocal Rank</li>
                <li>• Hits@1</li>
                <li>• TREC Eval toolkit</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Data Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8"
        >
          <h2 className="text-white mb-6">Query Processing Pipeline</h2>
          <div className="space-y-4">
            <PipelineStep
              step={1}
              title="Query Analysis"
              description="Extract features: query length, term statistics, query type classification"
              color="#6366f1"
            />
            <PipelineStep
              step={2}
              title="Parallel Retrieval"
              description="Execute BM25 and Dense Retrieval simultaneously on indexed corpus"
              color="#8b5cf6"
            />
            <PipelineStep
              step={3}
              title="Score Fusion"
              description="Apply RRF to combine rankings from multiple retrievers"
              color="#ec4899"
            />
            <PipelineStep
              step={4}
              title="Adaptive Selection"
              description="LTR model selects optimal algorithm based on query features"
              color="#500000"
            />
            <PipelineStep
              step={5}
              title="Final Ranking"
              description="Return top-k documents with relevance scores and explanations"
              color="#10b981"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FlowStep({ label }: { label: string }) {
  return (
    <div className="px-4 py-2 bg-neutral-700 rounded-lg text-neutral-200 whitespace-nowrap">
      {label}
    </div>
  );
}

interface PipelineStepProps {
  step: number;
  title: string;
  description: string;
  color: string;
}

function PipelineStep({ step, title, description, color }: PipelineStepProps) {
  return (
    <div className="flex items-start gap-4">
      <div 
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white"
        style={{ backgroundColor: color }}
      >
        {step}
      </div>
      <div className="flex-1">
        <h3 className="text-white mb-1">{title}</h3>
        <p className="text-neutral-400">{description}</p>
      </div>
    </div>
  );
}
