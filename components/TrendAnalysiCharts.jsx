'use client';

import React, { useState, useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

export default function TrendAnalysisChart({ platforms }) {
  const connectedPlatforms = platforms.filter((p) => p.data?.isConnected);
  const [selectedPlatform, setSelectedPlatform] = useState(connectedPlatforms[0]?.name || '');
  const [timeRange, setTimeRange] = useState('Weekly');
  const [isOpen, setIsOpen] = useState(false);

  const platformData = useMemo(() => {
    return connectedPlatforms.find((p) => p.name === selectedPlatform)?.data?.metrics || [];
  }, [connectedPlatforms, selectedPlatform]);

  const metricKeys = useMemo(() => {
    if (platformData.length === 0) return [];
    return Object.keys(platformData[0]).filter((key) => key !== 'date');
  }, [platformData]);

  const [selectedMetric, setSelectedMetric] = useState(metricKeys[0] || '');

  const getLabel = (key) => {
    if (key === 'watchTime') return 'Watch time';
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  const filteredData = useMemo(() => {
    const sliceCount = timeRange === 'Weekly' ? 7 : 30;
    return platformData.slice(-sliceCount).map((entry) => ({
      date: new Date(entry.date).toLocaleDateString(),
      value: entry[selectedMetric] ?? 0,
    }));
  }, [platformData, selectedMetric, timeRange]);

  return (
    <div className="bg-white p-6 rounded shadow border border-gray-200 w-full">
      {/* Top Controls */}
      <div className="flex justify-between items-center mb-4">
        {/* Platform Dropdown */}
         <div className="relative inline-block w-64 text-gray-700">
            <select
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                onFocus={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}
                className="w-full h-12 pl-3 pr-10 text-base bg-white border border-gray-300 rounded-md appearance-none
                            focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-200
                            shadow-sm transition ease-in-out duration-200 cursor-pointer"
                >
                {connectedPlatforms.map((p) => (
                    <option key={p.name} value={p.name}>
                    {p.name}
                    </option>
                ))}
                </select>
            {/* Custom arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-700">
                <svg
                    className={`w-4 h-4 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? '' : '-rotate-180'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 111.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                    clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>

        {/* Time Range Buttons */}
        <div className="flex space-x-2">
          <div className="bg-gray-100 p-1 rounded">
          {['Weekly', 'Monthly'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded ${
                timeRange === range ? 'bg-white text-black cursor-pointer' : 'cursor-pointer'
              }`}
            >
              {range}
            </button>
          ))}
          </div>
        </div>
      </div>

      {/* Metric Buttons */}
      <div className="flex mb-4">
        <div className="bg-gray-100 p-1 rounded">
        {metricKeys.map((key) => (
          <button
            key={key}
            onClick={() => setSelectedMetric(key)}
            className={`px-4 py-2 rounded ${
              selectedMetric === key ? 'bg-white text-black cursor-pointer' : 'cursor-pointer'
            }`}
          >
            {getLabel(key)}
          </button>
        ))}
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
