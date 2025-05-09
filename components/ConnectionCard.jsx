'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

function ConnectionCard({ name, description, icon, permissionInfo }) {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Default loading state

  useEffect(() => {
    async function fetchPlatformData() {
      try {
        const res = await fetch(`/api/${name.toLowerCase()}`, {
          method: "GET",
        });
        if (!res.ok) return;

        const data = await res.json();
        if (data?.isConnected === true) {
          setIsConnected(true);
        }
      } catch (err) {
        console.error('Failed to fetch platform data:', err);
      } finally {
        setIsLoading(false); // Done loading
      }
    }

    fetchPlatformData();
  }, [name]);

  if (isLoading) {
    return (
      <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] min-w-[280px] max-w-full border border-[#e0e0e0] rounded-xl overflow-hidden bg-white shadow-sm animate-pulse">
        <div className="px-6 pt-6 pb-4">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-gray-300 rounded" />
              <div className="h-5 w-32 bg-gray-300 rounded" />
            </div>
            <div className="h-6 w-24 bg-gray-300 rounded-full" />
          </div>
          <div className="h-4 w-full bg-gray-300 rounded mb-2" />
          <div className="h-4 w-3/4 bg-gray-300 rounded" />
        </div>
        <div className="bg-[#f4f4f5] px-6 py-4 flex justify-between items-center">
          <div className="h-8 w-24 bg-gray-300 rounded" />
          <div className="h-4 w-32 bg-gray-300 rounded" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] min-w-[280px] max-w-full border border-[#e0e0e0] rounded-xl overflow-hidden bg-white shadow-sm flex flex-col h-[200px]">
      <div className="px-6 pt-6 pb-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="shrink-0">{icon}</div>
            <h3 className="text-lg font-semibold">{name}</h3>
          </div>
          <p
            className={`text-sm font-medium ${
              isConnected ? 'text-green-600' : 'text-gray-500'
            } border rounded-full border-[#e0e0e0] px-3 py-1`}
          >
            {isConnected ? 'Connected' : 'Not connected'}
          </p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      <div className="bg-[#f4f4f5] px-6 py-4 flex justify-between items-center mt-auto">
        <button
          onClick={() => {
            window.location.href = `/dashboard/connect/${name.toLowerCase()}?isConnected=${isConnected}`;
          }}
          className="bg-white px-4 py-2 rounded-lg border border-[#e0e0e0] hover:bg-gray-200/50 transition-colors duration-300 text-sm cursor-pointer"
        >
          {isConnected ? 'Deauthorize' : 'Connect'}
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
