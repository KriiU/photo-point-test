export default function SkeletonCard() {
  return (
    <div className="animate-pulse flex flex-col rounded-3xl border border-violet-100 bg-purple-50 p-4 h-[400px]">
      <div className="bg-purple-100 rounded-lg aspect-[4/3] mb-4" />
      <div className="h-4 bg-purple-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-purple-200 rounded w-1/2 mb-2" />
      <div className="h-6 bg-purple-300 rounded w-1/3 mt-auto" />
    </div>
  )
}
