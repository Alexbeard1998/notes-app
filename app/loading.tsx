export default function Loading() {
  return (
    <div className="max-w-2xl mx-auto p-4 animate-pulse">
      <div className="h-8 bg-gray-700 rounded w-1/3 mb-6"></div>
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-20 bg-gray-700 rounded"></div>
        ))}
      </div>
    </div>
  );
}