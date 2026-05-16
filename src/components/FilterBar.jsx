export default function FilterBar({ activeFilter, setActiveFilter }) {
  const categories = ['All', 'JavaScript', 'React', 'Python'];

  return (
    <div className="mb-8 flex flex-wrap items-center gap-2.5 border-b border-zinc-900 pb-6">
      <span className="font-mono text-xs font-semibold tracking-wider text-zinc-500 uppercase mr-2">
        Filter by:
      </span>
      
      {categories.map((category) => {
        const isActive = activeFilter === category;
        
        return (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`rounded-lg px-4 py-1.5 font-mono text-xs font-medium tracking-wide transition-all duration-200 border ${
              isActive
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-sm shadow-emerald-500/5'
                : 'bg-zinc-900/40 text-zinc-400 border-zinc-800/60 hover:text-zinc-200 hover:border-zinc-700'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}