'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: "Jan", Facebook: 4.2, Twitter: 3.8, Instagram: 5.1, LinkedIn: 2.3 },
  { name: "Feb", Facebook: 4.5, Twitter: 3.5, Instagram: 5.3, LinkedIn: 2.5 },
  { name: "Mar", Facebook: 4.3, Twitter: 3.2, Instagram: 5.0, LinkedIn: 2.8 },
  { name: "Apr", Facebook: 4.0, Twitter: 3.9, Instagram: 4.8, LinkedIn: 3.0 },
  { name: "May", Facebook: 4.1, Twitter: 4.2, Instagram: 4.5, LinkedIn: 3.2 },
  { name: "Jun", Facebook: 4.4, Twitter: 4.0, Instagram: 4.7, LinkedIn: 3.5 },
  { name: "Jul", Facebook: 4.6, Twitter: 3.8, Instagram: 5.2, LinkedIn: 3.3 },
];

function EngagementChart() {
  return (
    <div className="w-full h-[350px] bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Engagement Rate Over Time</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis unit="%" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Facebook" stroke="#3b5998" strokeWidth={2} />
          <Line type="monotone" dataKey="Twitter" stroke="#1DA1F2" strokeWidth={2} />
          <Line type="monotone" dataKey="Instagram" stroke="#E1306C" strokeWidth={2} />
          <Line type="monotone" dataKey="LinkedIn" stroke="#0077b5" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default EngagementChart;