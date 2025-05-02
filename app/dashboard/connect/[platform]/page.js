'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function ConnectPlatformPage({ params }) {
  const router = useRouter();
  const { platform } = params;

  useEffect(() => {
    async function connect() {
      await fetch(`/api/seeder?platform=${platform}`);
      setTimeout(() => {
        router.push('/dashboard/connect'); 
      }, 4000); // simulated "connection" loading screen to give feedback to the users
    }

    connect();
  }, [platform, router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-xl font-semibold">Connecting to {platform.charAt(0).toUpperCase() + platform.slice(1)}...</h1>
        <p className="text-sm text-gray-500 mt-2">Please wait while we connect...</p>
        <p className="text-sm text-gray-500 mt-2">(it doesn't connect yet, i still need to make a connection to the database, this is just a loading screen for now)</p>
      </div>
    </div>
  );
}

export default ConnectPlatformPage;
