export default function AnalyticsOverview({ title, value, bgcolor, change, icon }) {
  const isPositive = typeof change === "string" && change.trim().startsWith("+");

  return (
    <div className="bg-white p-5 rounded-lg shadow border border-gray-200 flex flex-col w-screen w-full">
      {/* Top Row: Icon on left, Change on right */}
      <div className="flex items-center justify-between">
        <div className={`rounded-full p-2 ${bgcolor}`}>{icon}</div>
        <div
          className={`text-xs font-semibold ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {change}
        </div>
      </div>

      {/* Bottom Section: Title and Value */}
      <div className="mt-5">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <h3 className="mt-1 text-3xl font-bold text-gray-900">{value}</h3>
      </div>
    </div>
  );
}
