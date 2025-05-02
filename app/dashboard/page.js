'use client';

import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import PlatformCard from '@/components/PlatformCard';
import EngagementChart from '@/components/EngagementChart';


function Dashboard() {
  return (
    <div className="relative">
      {/* Sample Metrics */}
      <div className="flex items-center p-4">
        <h1 className="text-left text-xl text-bold font-bold">Real-time analytics</h1>
      </div>
      <div className="grid grid-cols-4 gap-6 text-center p-5">
        <PlatformCard
          platform="Facebook"
          icon={<Facebook className="h-5 w-5 text-blue-600" />}
          followers="17.7K"
          engagement="3.2%"
          trend="up"
          followersNet="+2.4%"
        />
        <PlatformCard
          platform="Instagram"
          icon={<Instagram className="h-5 w-5 text-pink-600" />}
          followers="20.3K"
          engagement="4.5%"
          trend="up"
          followersNet="+1.8%"
        />
        <PlatformCard
          platform="Twitter"
          icon={<Twitter className="h-5 w-5 text-blue-400" />}
          followers="12.7K"
          engagement="2.9%"
          trend="down"
          followersNet="-0.5%"
        />
        <PlatformCard
          platform="LinkedIn"
          icon={<Linkedin className="h-5 w-5 text-blue-700" />}
          followers="9.1K"
          engagement="5.2%"
          trend="up"
          followersNet="+3.1%"
        />
      </div>
      <div className="grid grid-cols-2 gap-6 text-center p-5">
        <div className="bg-white p-6 rounded shadow border-[#e5e7eb] border-1"> 
          <p className="text-2xl font-bold mt-2">Engagement</p>
          <EngagementChart/>
        </div>

        <div className="bg-white p-6 rounded shadow border-[#e5e7eb] border-1"> 
          <p className="text-2xl font-bold mt-2">Followers</p>
          <EngagementChart/>
        </div>
      </div>
    </div> 
  );
}

export default Dashboard;