import { motion } from 'motion/react';
import { Search, GitBranch, Database, BarChart3, Sparkles, Brain, Zap, Target } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-[#500000] rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#500000] rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Sparkles className="w-8 h-8 text-[#500000]" />
          <span className="text-white">MosaicRetriever</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-6"
        >
          <button
            onClick={() => onNavigate('search')}
            className="text-neutral-300 hover:text-white transition-colors"
          >
            Search
          </button>
          <button
            onClick={() => onNavigate('architecture')}
            className="text-neutral-300 hover:text-white transition-colors"
          >
            Architecture
          </button>
          <button
            onClick={() => onNavigate('dataset')}
            className="text-neutral-300 hover:text-white transition-colors"
          >
            Dataset
          </button>
          <button
            onClick={() => onNavigate('comparison')}
            className="text-neutral-300 hover:text-white transition-colors"
          >
            Metrics
          </button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-[#500000] to-[#800000] p-4 rounded-2xl shadow-2xl">
              <Sparkles className="w-16 h-16 text-white" />
            </div>
          </motion.div>

          <h1 className="text-white mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block text-6xl md:text-7xl lg:text-8xl mb-4 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent"
            >
              MosaicRetriever
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="block text-2xl md:text-3xl text-[#500000]"
            >
              One system. Many retrieval minds.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-neutral-400 max-w-2xl mx-auto mb-12"
          >
            A multi-algorithm information retrieval system combining BM25, Dense Retrieval,
            RRF fusion, and Learning-to-Rank for adaptive, intelligent document ranking.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            <button
              onClick={() => onNavigate('search')}
              className="group relative px-8 py-4 bg-[#500000] text-white rounded-xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-[#500000]/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Search className="w-5 h-5" />
                Try a Query
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#500000] to-[#700000]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>

            <button
              onClick={() => onNavigate('architecture')}
              className="px-8 py-4 bg-neutral-800 text-white rounded-xl border border-neutral-700 hover:border-[#500000] transition-all hover:shadow-lg"
            >
              <span className="flex items-center gap-2">
                <GitBranch className="w-5 h-5" />
                View Architecture
              </span>
            </button>

            <button
              onClick={() => onNavigate('dataset')}
              className="px-8 py-4 bg-neutral-800 text-white rounded-xl border border-neutral-700 hover:border-[#500000] transition-all hover:shadow-lg"
            >
              <span className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Dataset Info
              </span>
            </button>

            <button
              onClick={() => onNavigate('comparison')}
              className="px-8 py-4 bg-neutral-800 text-white rounded-xl border border-neutral-700 hover:border-[#500000] transition-all hover:shadow-lg"
            >
              <span className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Model Comparison
              </span>
            </button>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            <FeatureCard
              icon={<Search className="w-8 h-8" />}
              title="BM25"
              description="Classic probabilistic retrieval with proven effectiveness"
              delay={0}
            />
            <FeatureCard
              icon={<Brain className="w-8 h-8" />}
              title="Dense Retrieval"
              description="Neural embeddings for semantic understanding"
              delay={0.1}
            />
            <FeatureCard
              icon={<Target className="w-8 h-8" />}
              title="RRF Fusion"
              description="Reciprocal Rank Fusion for optimal combination"
              delay={0.2}
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Adaptive LTR"
              description="Learning-to-Rank for intelligent model selection"
              delay={0.3}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1 + delay }}
      whileHover={{ y: -5 }}
      className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 hover:border-[#500000] transition-all"
    >
      <div className="text-[#500000] mb-4">{icon}</div>
      <div className="text-white mb-2">{title}</div>
      <p className="text-neutral-400">{description}</p>
    </motion.div>
  );
}
