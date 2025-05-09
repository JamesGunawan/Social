export default function calculateEngagement(platform, metrics) {
  if (!metrics?.metrics) return "0%";

  // Find the metrics for today
  const todayMetrics = metrics.metrics.find(metric => {
    // Only compare the date part, ignoring the time
    const metricDate = new Date(metric.date);
    const today = new Date();
    return metricDate.getDate() === today.getDate() &&
           metricDate.getMonth() === today.getMonth() &&
           metricDate.getFullYear() === today.getFullYear();
  });

  if (!todayMetrics) return "0%"; // No data for today

  const data = todayMetrics;

  switch (platform) {
    case 'Youtube': {
      const interactions = data.views + (data.watchTime / 60); // watch time in minutes
      const base = data.views || 1;
      const percentage = (interactions / base) * 100;
      return `${percentage.toFixed(1)}%`;
    }

    case 'Instagram': {
    const likes = data.likes || 0;
    const impressions = data.impressions || 1; // avoid divide by 0
    const percentage = (likes / impressions) * 100;
    return `${percentage.toFixed(1)}%`;
    }

    case 'Twitter': {
    const likes = data.likes || 0;
    const retweets = data.retweets || 0;
    const impressions = data.impressions || 1; // avoid divide by 0
    const percentage = ((likes + retweets) / impressions) * 100;
    return `${percentage.toFixed(1)}%`;
    }

    case 'Facebook':
    case 'Linkedin': {
      const interactions = (data.likes || 0) + (data.shares || 0);
      const base = data.followers || 1;
      const percentage = (interactions / base) * 100;
      return `${percentage.toFixed(1)}%`;
    }

    default:
      return "0%";
  }
}
