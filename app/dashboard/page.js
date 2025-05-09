'use client';

import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import PlatformCard from '@/components/PlatformCard';
import EngagementChart from '@/components/EngagementChart';
import { useEffect } from 'react';
import { getPlatformList } from '../context/PlatformList';
import calculateEngagement from '../utils/calculateEngagement';
import { platformIconConfigs } from '../utils/platformIconConfigs';
import calculateFollowersNet from '../utils/calculateFollowersNet';

// useEffect(() => {
//   async function fetchPlatformData() {
//     try {
//       const res = await fetch(`/api/${name.toLowerCase()}`, {
//         method: "GET",
//       });
//       if (!res.ok) return;

//       const data = await res.json();
//       console.log(data)

//     } catch (err) {
//       console.error('Failed to fetch platform data:', err);
//     }
//   }
//   fetchPlatformData();
// }, [name]);


function Dashboard() {
  const { platforms } = getPlatformList();

  return (
    <div className="relative">
      <div className="flex items-center p-4">
        <h1 className="text-left text-xl text-bold font-bold">Real-time analytics</h1>
      </div>
      <div className="overflow-x-auto max-w-screen-xl2">
        <div className="flex gap-6 text-center p-5 flex-nowrap">
          {platforms.map(({ name, data }) => {
            // Find the metric for today
            const todayMetrics = data.metrics.find(metric => {
              // Only compare the date part, ignoring the time
              const metricDate = new Date(metric.date);
              const today = new Date();
              return metricDate.getDate() === today.getDate() &&
                    metricDate.getMonth() === today.getMonth() &&
                    metricDate.getFullYear() === today.getFullYear();
            });

            console.log(todayMetrics)

            if (!todayMetrics) {
              return null; // No data for today, skip this platform
            }

            const config = platformIconConfigs[name] || {};
            const Icon = config.icon;
            const colorClass = config.color || "text-gray-500";
            const followersNet = calculateFollowersNet(name, data);

            return (
              <div key={name}>
                <PlatformCard
                  platform={name}
                  icon={Icon ? <Icon className={`h-5 w-5 ${colorClass}`} /> : null}
                  audienceType={name === "Youtube" ? "Subscribers" : "Followers"}
                  followers={todayMetrics.subs}  // Use today's metrics
                  engagement={calculateEngagement(name, data)}  // You may want to modify how engagement is calculated for today
                  trend="up"
                  followersNet={followersNet}  // You can also adjust this to reflect today’s data
                />
              </div>
            );
          })}
          <PlatformCard
            platform="Facebook"
            icon={<Facebook className="h-5 w-5 text-blue-600" />}
            audienceType={"Followers"}
            followers="17.7K"
            engagement="3.2%"
            trend="up"
            followersNet="+2.4%"
          />
          <PlatformCard
            platform="Instagram"
            icon={<Instagram className="h-5 w-5 text-pink-600" />}
            audienceType={"Followers"}
            followers="20.3K"
            engagement="4.5%"
            trend="up"
            followersNet="+1.8%"
          />
          <PlatformCard
            platform="Twitter"
            icon={<Twitter className="h-5 w-5 text-blue-400" />}
            audienceType={"Followers"}
            followers="12.7K"
            engagement="2.9%"
            trend="down"
            followersNet="-0.5%"
          />
          <PlatformCard
            platform="LinkedIn"
            icon={<Linkedin className="h-5 w-5 text-blue-700" />}
            audienceType={"Followers"}
            followers="9.1K"
            engagement="5.2%"
            trend="up"
            followersNet="+3.1%"
          />
          
        </div>
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

        
        <div className="bg-white p-6 rounded shadow border-[#e5e7eb] border-1"> 
          <p className="text-2xl font-bold mt-2">Followers</p>
          <EngagementChart/>
        </div>
      </div>
    </div> 
  );
}

export default Dashboard;