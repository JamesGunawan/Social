'use client';

import { useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import { use } from 'react'; 

function ConnectionCardHandler({ params }) {
  const { name } = use(params); // Unwrapping the data using react because it told me to use it else it's gonna cause errors in future versions
  const router = useRouter();
  const [dots, setDots] = useState('');
  const [isConnectedQuery, setIsConnectedQuery] = useState(false);
  
  useEffect(() => {
    const dotPatterns = [".", "..", "...", "..", ".", ""]; // Loading dots for better UX
    let i = 0;

    const interval = setInterval(() => {
      setDots(dotPatterns[i % dotPatterns.length]);
      i++;
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !name) return; // Prevents hydration error during SSR
  
    // Gets the query and check if they are connected, if not connected route to POST if connected route to DELETE
    const query = new URLSearchParams(window.location.search).get('isConnected');
    const isConnected = query === 'true';
    setIsConnectedQuery(isConnected);
  
    const connect = async () => {
      try {
        if (!isConnected) {
          await fetch(`/api/seeder/${name}`, { method: 'POST' });
        } else {
          await fetch(`/api/${name.toLowerCase()}`, { method: 'DELETE' });
        }
  
        const randomDelay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
        setTimeout(() => {
          router.push('/dashboard/connect');
        }, randomDelay);
      } catch (err) {
        console.error('Connection error:', err);
      }
    };
  
    connect();
  }, [name, router]);  

  if (!name) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-xl font-semibold">
          {isConnectedQuery
            ? `Deauthorizing ${name.charAt(0).toUpperCase() + name.slice(1)}${dots}`
            : `Connecting to ${name.charAt(0).toUpperCase() + name.slice(1)}${dots}`}
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          {`Please wait while we ${isConnectedQuery ? 'deauthorize' : 'connect'}`}
        </p>
      </div>
    </div>
  );
}

export default ConnectionCardHandler;
