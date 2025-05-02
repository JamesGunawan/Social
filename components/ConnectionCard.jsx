'use client';

import Link from "next/link";

function ConnectionCard({
  name,
  description,
  icon,
  platform,
  isConnected,
  onToggle,
  permissionInfo
}) {
  return (
    <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] min-w-[280px] max-w-full border border-[#e0e0e0] rounded-xl overflow-hidden bg-white shadow-sm">
      {/* White top layer */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="shrink-0">{icon}</div>
            <h3 className="text-lg font-semibold">{name}</h3>
          </div>
          <p className={`text-sm font-medium ${isConnected ? 'text-green-600' : 'text-gray-500'} border rounded-full border-[#e0e0e0] px-3 py-1`}>
            {isConnected ? 'Connected' : 'Not connected'}
          </p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom darker layer */}
      <div className="bg-[#f4f4f5] px-6 py-4 flex justify-between items-center">
      <button
        onClick={() => {
          window.location.href = `/dashboard/connect/${platform.toLowerCase()}`;
        }}
        className="bg-white px-4 py-2 rounded-lg border border-[#e0e0e0] hover:bg-gray-200/50 transition-colors duration-300 text-sm cursor-pointer">
        {isConnected ? "Manage" : "Connect"}
      </button>

        {permissionInfo && (
          <Link
            href={permissionInfo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-600 hover:underline"
          >
            View permissions &gt;
          </Link>
        )}
      </div>
    </div>
  );
}

export default ConnectionCard;
