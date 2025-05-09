'use client';

import PlatformCard from '@/components/PlatformCard';
import EngagementChart from '@/components/EngagementChart';
import { getPlatformList } from '../context/PlatformList';
import calculateEngagement from '../utils/calculateEngagement';
import { platformIconConfigs } from '../utils/platformIconConfigs';
import calculateFollowersNet from '../utils/calculateFollowersNet';
import { useSession } from 'next-auth/react';

function Dashboard() {
  const { platforms } = getPlatformList();

  //   platforms.forEach(({ name, data }) => {
  //   console.log('Connected to:', name);
  //   console.log('Data:', data);
  // });

  return (
    <div className="relative">
      <div className="flex items-center p-4">
        <h1 className="text-left text-xl text-bold font-bold">Real-time analytics</h1>
      </div>
      <div className="overflow-x-auto max-w-screen-xl2">
        <div className="flex gap-6 text-center p-5 flex-nowrap">
          {platforms.length === 0 ? (
            <div className="w-full bg-white p-6 rounded shadow border-[#e5e7eb] border-1 text-xl font-semibold">
              <a href="/dashboard/connect"><span className="underline text-gray-700 hover:text-gray-900">Connect</span></a> to a platform to get started
            </div>
          ) : (
            platforms.map(({ name, data }) => {
              // Find the metric for today
              const todayMetrics = data.metrics.find(metric => {
                const metricDate = new Date(metric.date);
                const today = new Date();
                return (
                  metricDate.getDate() === today.getDate() &&
                  metricDate.getMonth() === today.getMonth() &&
                  metricDate.getFullYear() === today.getFullYear()
                );
              });

              if (!todayMetrics) {
                return null; // If no data today skip
              }

              const config = platformIconConfigs[name] || {};
              const Icon = config.icon;
              const colorClass = config.color || "text-gray-500";

              const followersNet = calculateFollowersNet(name, data);

              console.log(name, data);

              return (
                <div key={name}>
                  <PlatformCard
                    platform={name}
                    icon={Icon ? <Icon className={`h-5 w-5 ${colorClass}`} /> : null}
                    audienceType={name === "Youtube" ? "Subscribers" : "Followers"}
                    followers={name === "Youtube" ? todayMetrics.subs : todayMetrics.followers}
                    engagement={calculateEngagement(name, data)}
                    trend="up"
                    followersNet={followersNet}
                  />
                </div>
              );
            })
          )}
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
      </div>
    </div> 
  );
}

export default Dashboard;