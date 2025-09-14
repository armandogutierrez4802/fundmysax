export default function ProgressBar() {
  return (
    <div className="mb-6 x-auto max-w-7xl p-6 lg:px-8">
      <h4 className="sr-only">Status</h4>
      <p className="text-sm font-medium text-gray-900">
        $200 raised of $1,000 goal
      </p>
      <div aria-hidden="true" className="mt-6">
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div
            style={{ width: '20%' }}
            className="h-2 rounded-full bg-blue-600"
          />
        </div>
        <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid"></div>
      </div>
    </div>
  );
}
