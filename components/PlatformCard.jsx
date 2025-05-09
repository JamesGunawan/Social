'use client';

import { useEffect, useState } from 'react';
import { Activity } from "lucide-react";

export default function PlatformCard({
  platform,
  icon,
  audienceType,
  followers,
  engagement,
  followersNet,
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetch or data processing logic
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulate loading for 0.5 second

    return () => clearTimeout(timer);
  }, []);

  // Show skeleton loader while loading
  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded shadow border border-[#e5e7eb] min-w-[300px] flex-grow animate-pulse">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-gray-300 rounded" />
            <div className="h-5 w-32 bg-gray-300 rounded" />
          </div>
          <div className="h-6 w-6 bg-gray-300 rounded-full" />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="h-4 w-1/2 bg-gray-300 rounded mx-auto" />
            <div className="h-8 w-24 bg-gray-300 rounded mx-auto mt-2" />
            <div className="h-4 w-3/4 bg-gray-300 rounded mx-auto mt-2" />
          </div>
          <div>
            <div className="h-4 w-1/2 bg-gray-300 rounded mx-auto" />
            <div className="h-8 w-24 bg-gray-300 rounded mx-auto mt-2" />
          </div>
        </div>
      </div>
    );
  }

  // If not loading, render actual card
  const isPositive = followersNet.includes('+');
  const activityColor = isPositive ? "text-green-600" : "text-red-500";

  return (
    <div className="bg-white p-6 rounded shadow border border-[#e5e7eb] min-w-[300px] flex-grow">
      {/* Top: Logo + Platform Name + Activity Icon */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          {icon}
          <h2 className="text-xl font-semibold text-gray-800">{platform}</h2>
        </div>
        <div className="bg-blue-500/10 p-2 rounded-full">
          <Activity className={`w-5 h-5 ${activityColor}`} />
        </div>
      </div>

      {/* Bottom: Followers + Engagement */}
      <div className="mt-6 grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-sm text-gray-500">{audienceType}</p>
          <p className="text-2xl font-bold text-gray-800">{followers}</p>
          <p className={`text-sm font-medium ${activityColor}`}>{followersNet}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Engagement</p>
          <p className="text-2xl font-bold text-blue-600">{engagement}</p>
        </div>
      </div>
    </div>
  );
}
