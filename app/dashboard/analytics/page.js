'use client';

import { getPlatformList } from "@/app/context/PlatformList";
import mergeFollowerMetricsByDate from "@/app/utils/mergeFollowerMetricsByDate";
import { getTotalFollowerStats } from "@/app/utils/totalFollowers";
import AnalyticsOverview from "@/components/AnalyticsOverview";
import mergePlatformMetricsByDate from "@/app/utils/mergePlatformMetricsByDate";
import { getTotalEngagementStats } from "@/app/utils/totalEngagement";
import { UsersRound, ChartColumn } from "lucide-react";
import TrendAnalysisChart from "@/components/TrendAnalysiCharts";
import Link from "next/link";

export default function ConnectPage() {
  const { platforms } = getPlatformList();

  const connectedPlatforms = platforms.filter(p => p.data.isConnected);
  const mergedFollowerData = mergeFollowerMetricsByDate(connectedPlatforms);
  const mergedEngagementData = mergePlatformMetricsByDate(connectedPlatforms);
  const platformNames = connectedPlatforms.map(p => p.name);

  platforms.forEach(({ name, data }) => {
    console.log('Connected to:', name);
    console.log('Data:', data);
  }); 

  
  const { totalToday: totalEngagement, displayChange: engagementChange } =
  getTotalEngagementStats(mergedEngagementData, platformNames);

  const { totalToday, displayChange } = getTotalFollowerStats(mergedFollowerData, platformNames);

  return (
    <div className="p-4 space-y-4">
      <div>
        <h1 className="text-xl font-bold">Performance Monitoring</h1>
        <h2 className="text-muted-foreground">
          Comprehensive insights into your social media performance
        </h2>
      </div>

      {platforms.length === 0 ? (
        <div className=" flex justify-center w-full bg-white p-6 rounded shadow border-[#e5e7eb] border-1 text-xl font-semibold">
              <Link href="/dashboard/connect"><span className="underline text-gray-700 hover:text-gray-900">Connect</span></Link><p>‎ to a platform to get started</p>
            </div>
      ) : (
        <div className="flex gap-6 justify-center p-4">
          <AnalyticsOverview
            title="Total Followers"
            value={totalToday.toLocaleString()}
            change={displayChange}
            icon={<UsersRound className="w-5 h-5 text-blue-500" />}
            bgcolor="bg-blue-50"
          />

          <AnalyticsOverview
            title="Total Engagement"
            value={totalEngagement.toLocaleString()}
            change={engagementChange}
            icon={<ChartColumn className="w-5 h-5 text-green-700" />}
            bgcolor="bg-green-50"
          />
        </div>
      )}

      {platforms.length === 0 ? null : (
      <TrendAnalysisChart
        platforms={platforms.filter(p => p.data.isConnected)}
      />
      )}
      
    </div>
  );
}
