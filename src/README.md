# MosaicRetriever UI

A modern, interactive web interface for the MosaicRetriever information retrieval system.

## 🎨 Design Features

### Color Theme
- **Primary Maroon**: `#500000` (Texas A&M maroon)
- **Dark Background**: Gradient from neutral-950 to maroon
- **Accent Colors**: Glassmorphism with backdrop blur effects
- **Modern UI**: Rounded cards, smooth transitions, animated elements

### Pages

#### 1. Landing Page (`/components/LandingPage.tsx`)
- Hero section with animated background
- Project title and tagline
- 4 CTA buttons leading to different sections
- Feature cards highlighting each algorithm
- Navigation menu

#### 2. Search Interface (`/components/SearchInterface.tsx`)
- Query input with real-time search
- Algorithm selection (BM25, Dense, Fusion, Adaptive)
- Loading animations
- Results display with tabs

#### 3. Results Display (`/components/ResultsDisplay.tsx`)
- Tabbed interface for different ranking methods
- Query term highlighting
- Expandable result cards
- Score badges for each algorithm
- Ranking explanations

#### 4. Model Comparison (`/components/ModelComparison.tsx`)
- Bar chart comparing nDCG, Recall@10, Hits@1, MRR
- Radar chart for multi-dimensional analysis
- Model summary cards with strengths/weaknesses
- Key findings section

#### 5. Architecture Page (`/components/ArchitecturePage.tsx`)
- Phase-by-phase breakdown (Phase 0-3)
- Visual flow diagram
- Component lists for each phase
- Technical stack overview
- Query processing pipeline

#### 6. Dataset Page (`/components/DatasetPage.tsx`)
- FEVER dataset statistics
- Example claim-evidence pairs
- Visual representation of dataset splits
- Relevance to IR explanation

## 🛠️ Technical Stack

### Libraries Used
- **React** - Component framework
- **Motion (Framer Motion)** - Smooth animations
- **Lucide React** - Icon library
- **Recharts** - Charts and data visualization
- **Tailwind CSS** - Styling

### Components Structure
```
/App.tsx                        # Main app with routing
/components/
  ├── LandingPage.tsx          # Home page
  ├── SearchInterface.tsx      # Search functionality
  ├── ResultsDisplay.tsx       # Search results
  ├── ModelComparison.tsx      # Metrics & charts
  ├── ArchitecturePage.tsx     # System design
  └── DatasetPage.tsx          # FEVER dataset info
```

## 🎯 Key Features

### Animations
- Page transitions with Motion
- Staggered content loading
- Hover effects on cards
- Animated background blobs
- Loading spinners
- Progress bars

### Interactive Elements
- Algorithm selection buttons
- Expandable result cards
- Tab navigation
- Tooltips and info bubbles
- Responsive design

### Data Visualization
- Bar charts for metric comparison
- Radar charts for multi-dimensional analysis
- Progress bars for dataset splits
- Score badges with color coding

## 🎨 Design Patterns

### Glassmorphism
- Backdrop blur effects
- Semi-transparent backgrounds
- Subtle borders

### Cards
- Rounded corners (rounded-2xl)
- Border transitions on hover
- Shadow effects on interaction

### Typography
- Uses default globals.css typography
- Consistent heading hierarchy
- Readable text sizes

## 📱 Responsive Design

All components are responsive with:
- Mobile-first approach
- Grid layouts that adapt (1 → 2 → 4 columns)
- Flexible navigation
- Touch-friendly buttons

## 🚀 Mock Data

The interface includes realistic mock data for:
- Search results (Iron Man example)
- Performance metrics
- Dataset statistics
- Algorithm scores

## 🎓 Educational Elements

- Algorithm explanations
- Ranking tooltips
- "Why this ranking?" sections
- Technical stack information
- Dataset relevance details

---

**Note**: This is a frontend demo interface. To connect to a real MosaicRetriever backend, you would need to replace the mock data and implement API calls to your retrieval system.
