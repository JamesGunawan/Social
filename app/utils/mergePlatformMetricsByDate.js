import calculateEngagement from './calculateEngagement.js';

export default function mergePlatformMetricsByDate(platforms) {
  const dateMap = new Map();

  platforms.forEach(({ name, data }) => {
    if (!data.isConnected) return;

    data.metrics.forEach((metric) => {
      const day = new Date(metric.date);
      const dayString = `${String(day.getMonth() + 1).padStart(2, '0')}-${String(day.getDate()).padStart(2, '0')}`; // "MM-DD"

      if (!dateMap.has(dayString)) {
        dateMap.set(dayString, { name: dayString });
      }

      const engagementStr = calculateEngagement(name, data, day);
      const engagement = parseFloat(engagementStr.replace('%', '')) || 0;

      dateMap.get(dayString)[name] = engagement;
    });
  });

  // Sort dates in ascending order (based on MM-DD)
  return Array.from(dateMap.values()).sort((a, b) => {
    const [aMonth, aDay] = a.name.split('-').map(Number);
    const [bMonth, bDay] = b.name.split('-').map(Number);
    return new Date(2025, aMonth - 1, aDay) - new Date(2025, bMonth - 1, bDay);
  });
}
