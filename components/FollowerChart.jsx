'use client';

import { useState, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const getPlatformColor = (platform) => {
  const colors = {
    YouTube: "#FF0000",
    Twitter: "#1DA1F2",
    Instagram: "#E1306C",
    Facebook: "#3b5998",
    Linkedin: "#0077b5",
    TikTok: "#010101",
  };
  return colors[platform] || "#8884d8";
};

const filterOptions = ['Weekly', 'Monthly'];

function FollowerChart({ data, title, subtitle, platforms }) {
  const [filter, setFilter] = useState("Monthly");

  const chartData = useMemo(() => {
    const now = new Date();
    const currentYear = now.getFullYear();

    const cutoff = new Date(now);
    cutoff.setDate(now.getDate() - (filter === "Weekly" ? 7 : 30));

    return data.filter((d) => {
      const [month, day] = d.name.split('-').map(Number);
      const entryDate = new Date(currentYear, month - 1, day);
      return entryDate >= cutoff;
    });
  }, [data, filter]);

  return (
    <div className="bg-white p-6 rounded shadow border border-[#e5e7eb] w-full h-[400px] flex flex-col gap-4 text-center">
      <p className="text-2xl font-bold">{title}</p>

      <div className="flex items-center justify-center">
        <div className="flex gap-2">
          {filterOptions.map(option => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-3 py-1 rounded-md text-sm border cursor-pointer transition-colors duration-200 ${
                filter === option
                  ? "bg-black text-white hover:bg-gray-700"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {platforms.map((platform) => (
            <Line
              key={platform}
              type="monotone"
              dataKey={platform}
              stroke={getPlatformColor(platform)}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>

      <p className="text-sm text-gray-500 -mt-3">{subtitle}</p>
    </div>
  );
}

export default FollowerChart;
