# Dev.Portfolio System 🚀

A modern, high-fidelity portfolio dashboard designed to automatically showcase public engineering projects, repositories, and technical experiments by syncing directly with the live GitHub REST API. Built using a modular, performance-oriented frontend stack with a premium cyber-minimalist aesthetic.

## 🛠️ Tech Stack & Architecture

- **Core Engine:** React 19 + Vite (for lightning-fast HMR and optimized build bundles)
- **Styling Layer:** Tailwind CSS v4 (utilizing semantic layout wrappers, glassmorphism treatments, and custom micro-interactions)
- **Data Fetching:** Asynchronous Native Fetch API wrapped inside a decoupled Custom React Hook
- **State Architecture:** Unidirectional data flow leveraging derived/computed state for instantaneous client-side project filtering

---

## ⚡ Key Engineering Features

- **Automated API Synchronization:** Fetches public repositories on mount, filtered automatically to exclude external forks (`!repo.fork`) so only original source code is highlighted.
- **Derived Filtering Pipeline:** Bypasses traditional `useEffect` state-synchronization bugs by dynamically computing technology category lists and active tag filter groupings on the fly during the natural render pipeline.
- **Enterprise-Grade Loading Skeletons:** Features custom `animate-pulse` placeholder cards matching the exact layout layout of the content to prevent layout shifts and provide a premium user experience while data is fetching.
- **Robust Network Error Boundaries:** Gracefully captures and displays contextual error indicators (e.g., handling API rate limits or network failures) without breaking the core UI layout.
- **Responsive Fluid Grid:** Mobile-first layout configuration utilizing standard CSS grid properties that flawlessly collapse from 3-column desktop monitors down to standard mobile devices.

---

## 📂 File Architecture

src/
├── components/
│   ├── FilterBar.jsx      # Dynamic navigation tags calculated from live data
│   ├── ProjectCard.jsx    # Premium glassmorphic card with micro-hover interactions
│   └── SkeletonCard.jsx   # Animating pulse screens to eliminate layout shifting
├── hooks/
│   └── useFetchRepos.js   # Decoupled custom data hook managing async lifecycle states
├── App.jsx                # Main layout coordinator & UI state anchor
├── index.css              # Custom global canvas setups
└── main.jsx               # Application entry point