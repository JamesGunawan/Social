import { Activity } from "lucide-react";

export default function PlatformCard({
  platform,
  icon,
  followers,
  engagement,
  trend = "up",
  followersNet,
}) {
  const activityColor = trend === "up" ? "text-green-600" : "text-red-500";

  return (
    <div className="bg-white p-6 rounded shadow border border-[#e5e7eb] w-full max-w-md">
      {/* Top: Logo + Platform Name + Activity Icon */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          {icon}
          <h2 className="text-xl font-semibold text-gray-800">{platform}</h2>
        </div>
        <Activity className={`w-5 h-5 ${activityColor}`} />
      </div>

      {/* Bottom: Followers + Engagement */}
      <div className="mt-6 grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-sm text-gray-500">Followers</p>
          <p className="text-2xl font-bold text-gray-800">{followers}</p>
          <p className={`text-sm font-medium ${activityColor}`}>{followersNet}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Engagement</p>
          <p className="text-2xl font-bold text-blue-600">{engagement}</p>
        </div>
      </div>
    </div>
  );
}
