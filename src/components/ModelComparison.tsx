import { motion } from 'motion/react';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

interface ModelComparisonProps {
  onNavigate: (page: string) => void;
}

export function ModelComparison({ onNavigate }: ModelComparisonProps) {
  const barData = [
    {
      metric: 'nDCG@10',
      BM25: 0.74,
      Dense: 0.82,
      Fusion: 0.86,
      LTR: 0.91,
    },
    {
      metric: 'Recall@10',
      BM25: 0.68,
      Dense: 0.79,
      Fusion: 0.83,
      LTR: 0.88,
    },
    {
      metric: 'Hits@1',
      BM25: 0.52,
      Dense: 0.67,
      Fusion: 0.72,
      LTR: 0.79,
    },
    {
      metric: 'MRR',
      BM25: 0.63,
      Dense: 0.74,
      Fusion: 0.78,
      LTR: 0.84,
    },
  ];

  const radarData = [
    {
      metric: 'Precision',
      BM25: 72,
      Dense: 81,
      Fusion: 85,
      LTR: 90,
    },
    {
      metric: 'Recall',
      BM25: 68,
      Dense: 79,
      Fusion: 83,
      LTR: 88,
    },
    {
      metric: 'Speed',
      BM25: 95,
      Dense: 65,
      Fusion: 70,
      LTR: 75,
    },
    {
      metric: 'Coverage',
      BM25: 85,
      Dense: 78,
      Fusion: 88,
      LTR: 92,
    },
    {
      metric: 'Robustness',
      BM25: 70,
      Dense: 75,
      Fusion: 82,
      LTR: 89,
    },
  ];

  const stats = [
    {
      model: 'BM25',
      color: '#6366f1',
      description: 'Classic probabilistic retrieval',
      strengths: ['Fast inference', 'Good for exact matches', 'No training required'],
      weaknesses: ['Limited semantic understanding', 'Vocabulary mismatch issues'],
    },
    {
      model: 'Dense Retrieval',
      color: '#8b5cf6',
      description: 'Neural semantic search',
      strengths: ['Strong semantic understanding', 'Handles paraphrases well', 'Cross-lingual potential'],
      weaknesses: ['Slower than BM25', 'Requires GPU for training', 'May miss exact matches'],
    },
    {
      model: 'Fusion (RRF)',
      color: '#ec4899',
      description: 'Reciprocal Rank Fusion',
      strengths: ['Combines multiple signals', 'More robust than single models', 'Better coverage'],
      weaknesses: ['Slightly slower', 'Requires multiple models', 'Parameter tuning needed'],
    },
    {
      model: 'Adaptive LTR',
      color: '#500000',
      description: 'Learning-to-Rank selector',
      strengths: ['Optimal algorithm selection', 'Adapts to query type', 'Best overall performance'],
      weaknesses: ['Most complex', 'Requires training data', 'Higher computational cost'],
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
          <h1 className="text-white">Model Comparison & Metrics</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.model}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: stat.color }}
                />
                <h3 className="text-white">{stat.model}</h3>
              </div>
              <p className="text-neutral-400 mb-4">{stat.description}</p>
              
              <div className="space-y-2">
                <div className="text-neutral-300">Strengths:</div>
                <ul className="space-y-1">
                  {stat.strengths.map((strength, i) => (
                    <li key={i} className="text-neutral-400 flex items-start gap-2">
                      <TrendingUp className="w-3 h-3 mt-1 text-green-500 flex-shrink-0" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-white mb-6">Performance Metrics Comparison</h2>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
                <XAxis dataKey="metric" stroke="#a3a3a3" />
                <YAxis stroke="#a3a3a3" domain={[0, 1]} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#262626', 
                    border: '1px solid #404040',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  formatter={(value: number) => (value * 100).toFixed(1) + '%'}
                />
                <Legend />
                <Bar dataKey="BM25" fill="#6366f1" radius={[8, 8, 0, 0]} />
                <Bar dataKey="Dense" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                <Bar dataKey="Fusion" fill="#ec4899" radius={[8, 8, 0, 0]} />
                <Bar dataKey="LTR" fill="#500000" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8"
        >
          <h2 className="text-white mb-6">Multi-dimensional Analysis</h2>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#404040" />
                <PolarAngleAxis dataKey="metric" stroke="#a3a3a3" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#a3a3a3" />
                <Radar name="BM25" dataKey="BM25" stroke="#6366f1" fill="#6366f1" fillOpacity={0.2} />
                <Radar name="Dense" dataKey="Dense" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.2} />
                <Radar name="Fusion" dataKey="Fusion" stroke="#ec4899" fill="#ec4899" fillOpacity={0.2} />
                <Radar name="LTR" dataKey="LTR" stroke="#500000" fill="#500000" fillOpacity={0.3} />
                <Legend />
                <Tooltip
                  contentStyle={{ 
                    backgroundColor: '#262626', 
                    border: '1px solid #404040',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Key Findings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8"
        >
          <h2 className="text-white mb-6">Key Findings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-[#500000] mb-3">Performance Hierarchy</h3>
              <p className="text-neutral-300 mb-4">
                Adaptive LTR consistently outperforms all baseline methods across all metrics, 
                achieving 91% nDCG@10 compared to 74% for BM25, demonstrating the effectiveness 
                of intelligent algorithm selection.
              </p>
            </div>
            <div>
              <h3 className="text-[#500000] mb-3">Fusion Benefits</h3>
              <p className="text-neutral-300 mb-4">
                Reciprocal Rank Fusion provides a 5-10% improvement over individual methods, 
                showing that combining diverse ranking signals leads to more robust retrieval 
                without the complexity of learning-to-rank.
              </p>
            </div>
            <div>
              <h3 className="text-[#500000] mb-3">Speed vs Accuracy Trade-off</h3>
              <p className="text-neutral-300 mb-4">
                While BM25 offers the fastest inference, the accuracy gains from dense retrieval 
                and fusion methods justify the additional computational cost for most applications.
              </p>
            </div>
            <div>
              <h3 className="text-[#500000] mb-3">Semantic Understanding</h3>
              <p className="text-neutral-300 mb-4">
                Dense retrieval shows particular strength in handling paraphrases and semantic 
                queries, achieving 17% better Hits@1 than BM25 on questions requiring conceptual understanding.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
