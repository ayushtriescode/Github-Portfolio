import { useState } from "react";
import useFetchRepos from "./hooks/useFetchRepos";
import ProjectCard from "./components/ProjectCard";
import SkeletonCard from "./components/SkeletonCard";

export default function App() {
  const GITHUB_USERNAME = "ayushtriescode";

  const { repos, loading, error } = useFetchRepos(GITHUB_USERNAME);
  const [activeFilter, setActiveFilter] = useState("All");

  const liveLanguages = [
    "All",
    ...new Set(repos.map((repo) => repo.language).filter(Boolean)),
  ];

  const filteredProjects =
    activeFilter === "All"
      ? repos
      : repos.filter((project) => project.language === activeFilter);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-emerald-500/30 selection:text-emerald-300">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 opacity-70" />

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-12 border-b border-zinc-900 pb-10 text-center sm:text-left">
          <h1 className="font-mono text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl">
            Dev<span className="text-emerald-400">.</span>Portfolio
          </h1>
          <p className="mt-3 max-w-xl text-base text-zinc-400">
            An automated showcase of core engineering projects, repositories,
            and technical experiments fetched in real-time.
          </p>
        </header>

        {loading && (
          <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <SkeletonCard count="{6}" />
          </section>
        )}

        {!loading && !error && (
          <div className="mb-8 flex flex-wrap items-center gap-2.5 border-b border-zinc-900 pb-6">
            <span className="font-mono text-xs font-semibold tracking-wider text-zinc-500 uppercase mr-2">
              Filter by:
            </span>
            {liveLanguages.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`rounded-lg px-4 py-1.5 font-mono text-xs font-medium tracking-wide transition-all duration-200 border ${
                  activeFilter === category
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-sm shadow-emerald-500/5"
                    : "bg-zinc-900/40 text-zinc-400 border-zinc-800/60 hover:text-zinc-200 hover:border-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {loading && (
          <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="animate-pulse rounded-xl border border-zinc-900 bg-zinc-900/20 p-6 h-48 flex flex-col justify-between"
              >
                <div>
                  <div className="h-5 w-1/2 rounded bg-zinc-800" />
                  <div className="mt-4 h-4 w-full rounded bg-zinc-800" />
                  <div className="mt-2 h-4 w-3/4 rounded bg-zinc-800" />
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="h-5 w-16 rounded bg-zinc-800" />
                  <div className="h-4 w-24 rounded bg-zinc-800" />
                </div>
              </div>
            ))}
          </section>
        )}

        {error && (
          <div className="rounded-xl border border-red-900/30 bg-red-950/10 py-12 text-center backdrop-blur-sm">
            <span className="text-2xl">⚠️</span>
            <h3 className="mt-4 font-mono text-sm font-semibold text-red-400">
              Failed to sync profile
            </h3>
            <p className="mt-1 text-xs text-zinc-500">{error}</p>
          </div>
        )}

        {!loading && !error && filteredProjects.length === 0 && (
          <div className="rounded-xl border border-dashed border-zinc-800 bg-zinc-900/10 py-16 text-center backdrop-blur-sm">
            <span className="text-2xl">🔍</span>
            <h3 className="mt-4 font-mono text-sm font-semibold text-zinc-300">
              No repositories found
            </h3>
            <p className="mt-1 text-xs text-zinc-500">
              Try selecting a different technology filter above.
            </p>
          </div>
        )}

        {!loading && !error && filteredProjects.length > 0 && (
          <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
