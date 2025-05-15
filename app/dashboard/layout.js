"use client";

import { Activity, BarChart3, ChartPie, LogOut, Unplug } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { PlatformListProvider } from '../context/PlatformList';

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showTimedOutOverlay, setShowTimedOutOverlay] = useState(false);
  const [showProfileOverlay, setShowProfileOverlay] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // Added this for hydration safety cuz it displayed an error
  const { data: session, status } = useSession();

  const router = useRouter();

  const pathname = usePathname();

  // Route checker to change change class (highlights what page you're on)
  const isActive = (path) => pathname === path;

  const linkClass = (path) =>
    `flex items-center text-lg pl-2 py-2 transition-colors duration-300 ${
      isActive(path) ? 'bg-gray-200/50' : 'hover:bg-[#f4f4f5]'
    }`;

  useEffect(() => {
    if (status === 'unauthenticated') {
        setShowTimedOutOverlay(true);
    }
    }, [status]);

    // Hydration safety
    useEffect(() => {
      setHasMounted(true);
    }, []);

    if (!hasMounted) {
      return null; // Prevent rendering any client-side logic before the component is mounted
    }

  return (
    <PlatformListProvider>
      <div className="flex min-h-screen">
          {showTimedOutOverlay && (
          <div className="absolute inset-0 z-10 bg-white/10 backdrop-blur-sm shadow-md flex flex-col items-center justify-center text-black">
            <p className="mb-4 text-xl font-semibold">Session timed out, please log in again</p>
            <button
              onClick={() => router.push('/signin')}
              className="bg-orange-400 text-white px-4 py-2 rounded cursor-pointer"
            >
              Back to the login page
            </button>
          </div>
        )}
        {/* Sidebar */}
        <aside className={`bg-[#fafafa] text-black ${sidebarOpen ? "w-64" : "w-10"} transition-all duration-300 border-r-1 border-[#e0e0e0] flex flex-col justify-between h-screen`}>
          <div>
            <div className="top-0 z-10 flex h-14 items-center justify-between mb-5 border-b-1 border-[#e0e0e0]">
              <div className="flex items-center gap-2">
              <Image src="/TT.png" alt="Company Logo" className="w-auto h-10 ml-0.5" width="100" height="100"/>
              <span className="font-bold text-xl">Trend<span style={{ color: "#f57f17", textShadow: '1px 1px 0px black, -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black' }}>T</span>racker</span>
              </div>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-black mr-4 mt-1 cursor-pointer"
              >
                ☰
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              <Link href="/dashboard" className={linkClass("/dashboard")}>
                <BarChart3 className="mr-2 shrink-0"/>
                <span className="text-base">Dashboard</span>
              </Link>
              <Link href="/dashboard/analytics" className={linkClass("/dashboard/analytics")}>
                <Activity className="mr-2 shrink-0"/>
                <span className="text-base">Analytics</span>
              </Link>
              <Link href="/dashboard/connect" className={linkClass("/dashboard/connect")}>
                <Unplug className="mr-2 shrink-0"/>
                <span className="text-base">Connect</span>
              </Link>
            </nav>
          </div>
          {/* Profile Section with Slide-Down Sign Out */}
          <div className="flex flex-col transition-all duration-300 border-t border-[#e0e0e0]">
            {/* Slide-down Sign Out Button */}
              <div
              className={`overflow-hidden transition-all duration-300 px-4 text-sm ${
                showProfileOverlay ? 'max-h-11 py-3 border-t border-[#e0e0e0]' : 'max-h-0 py-0'
              }`}
            >
              <button
                onClick={() => signOut({ callbackUrl: '/signin' })}
                className="text-red-600 font-medium w-full text-left cursor-pointer whitespace-nowrap text-ellipsis"
              >
                {sidebarOpen? <span className="text-l">Sign out</span> : <LogOut className="-ml-1.5 text-sm"/>}
              </button>
            </div>
            {/* Profile Row */}
            <div
              onClick={() => setShowProfileOverlay(prev => !prev)}
              className="h-14 flex items-center px-4 cursor-pointer hover:bg-[#f4f4f5] transition-all duration-300"
            >
              {status === 'loading' ? (
                <div className="flex items-center gap-3 animate-pulse">
                  <div className="h-10 w-10 rounded-full bg-slate-300" />
                  {sidebarOpen && (
                    <div className="grid gap-1 text-xs">
                      <div className="h-4 w-24 rounded bg-slate-300" />
                      <div className="h-3 w-32 rounded bg-slate-200" />
                    </div>
                  )}
                </div>
              ) : session?.user ? (
                <div className="flex items-center flex-shrink-0">
                  <Image
                    src={session.user.image}
                    alt="User profile"
                    className="h-8 w-auto rounded-full -ml-3"
                    width={100}
                    height={100}
                  />
                  <div className="grid gap-0.5 text-xs ml-3 min-w-0">
                    <div className="font-medium whitespace-nowrap overflow-hidden text-ellipsis">{session.user.name}</div>
                    <div className="text-muted-foreground whitespace-nowrap overflow-hidden">{session.user.email}</div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex flex-col flex-1 h-screen bg-white overflow-hidden">
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-[#e0e0e0] bg-background px-4 sm:px-6">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)} className={sidebarOpen ? "transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none" : "transition-opacity duration-300 ease-in-out opacity-100 cursor-pointer"}>
            ☰
          </button>
          <h1 className="text-2xl font-bold text-[#3f3f46]">Social Media Dashboard</h1>
          <button className="bg-white text-black px-2 rounded-full text-sm font-bold border-[#e0e0e0] border-1">
            Free Plan
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-4 sm:px-6">
          {children}
        </div>
      </main>
      </div>  
    </PlatformListProvider>
  );
} 