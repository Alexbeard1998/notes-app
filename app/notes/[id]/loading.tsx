export default function NoteLoading() {
  return (
    <div className="max-w-2xl mx-auto p-4 animate-pulse">
      <div className="h-4 bg-gray-700 rounded w-1/4 mb-4"></div>
      <div className="flex justify-between items-start mb-4">
        <div className="h-8 bg-gray-700 rounded w-3/4"></div>
        <div className="flex gap-2">
          <div className="h-10 w-32 bg-gray-700 rounded"></div>
          <div className="h-10 w-24 bg-gray-700 rounded"></div>
        </div>
      </div>
      <div className="h-4 bg-gray-700 rounded w-1/3 mb-6"></div>
      <div className="h-40 bg-gray-700 rounded"></div>
    </div>
  );
}
