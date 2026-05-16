export default function SkeletonCard({ count = 6 }) {
  // Create an array with 'count' number of elements to map over
  const skeletonSkeletonItems = [...Array(count)];

  return (
    <>
      {skeletonSkeletonItems.map((_, index) => (
        <div 
          key={index} 
          className="animate-pulse rounded-xl border border-zinc-900 bg-zinc-900/20 p-6 h-48 flex flex-col justify-between"
        >
          {/* Top Info Skeleton */}
          <div>
            <div className="h-5 w-1/2 rounded bg-zinc-800" />
            <div className="mt-4 h-4 w-full rounded bg-zinc-800" />
            <div className="mt-2 h-4 w-3/4 rounded bg-zinc-800" />
          </div>
          
          {/* Bottom Controls Skeleton */}
          <div className="flex justify-between items-center mt-4">
            <div className="h-5 w-16 rounded bg-zinc-800" />
            <div className="h-4 w-24 rounded bg-zinc-800" />
          </div>
        </div>
      ))}
    </>
  );
}