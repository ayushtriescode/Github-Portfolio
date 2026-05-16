export default function ProjectCard({ project }) {
  const { name, description, language, stargazers_count, html_url } = project;

  const languageColors = {
    JavaScript: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
    React: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
    Python: 'bg-green-500/10 text-green-500 border-green-500/20',
    Default: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20'
  };

  const badgeStyle = languageColors[language] || languageColors.Default;

  return (
    <div className="group relative flex flex-col justify-between rounded-xl border border-zinc-900 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-zinc-700/60 hover:bg-zinc-900/80 hover:shadow-2xl hover:shadow-emerald-500/3">
      
      <div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-mono text-lg font-bold tracking-tight text-zinc-100 group-hover:text-emerald-400 transition-colors duration-300">
            {name}
          </h3>
          <div className="flex items-center gap-1 font-mono text-xs text-zinc-500 bg-zinc-950/40 px-2 py-0.5 rounded-md border border-zinc-900">
            <span>⭐</span>
            <span>{stargazers_count}</span>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-zinc-400 line-clamp-3 group-hover:text-zinc-300 transition-colors duration-300">
          {description || "No description provided. Click below to explore the codebase directly on GitHub."}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className={`rounded-md border px-2.5 py-0.5 text-[11px] font-mono tracking-wide ${badgeStyle}`}>
          {language || 'Docs'}
        </span>
        
        <a 
          href={html_url} 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-mono text-xs font-medium text-zinc-400 hover:text-emerald-400 transition-colors duration-300"
        >
          <span>Source Code</span>
          <svg 
            className="h-3 w-3 transform transition-transform duration-300 ease-out group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}