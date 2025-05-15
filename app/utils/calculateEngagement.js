export default function calculateEngagement(platform, metrics, targetDate = new Date()) {
  if (!metrics?.metrics) return "0%";

  // Find the metrics for today
  const data = metrics.metrics.find(metric => {
    // Only compare the date part, ignoring the time
    const metricDate = new Date(metric.date);
    return metricDate.getDate() === targetDate.getDate() &&
           metricDate.getMonth() === targetDate.getMonth() &&
           metricDate.getFullYear() === targetDate.getFullYear();
  });

  if (!data) return "0%"; // No data for today

  switch (platform) {
    case 'Youtube': {
      const interactions = data.views + (data.watchTime / 60); // watch time in minutes
      const base = data.views || 1;
      const percentage = (interactions / base) * 100;
      return `${percentage.toFixed(1)}%`;
    }

    case 'Instagram': {
    const likes = data.likes || 0;
    const impressions = data.impressions || 1; 
    const percentage = (likes / impressions) * 100;
    return `${percentage.toFixed(1)}%`;
    }

    case 'Twitter': {
    const likes = data.likes || 0;
    const retweets = data.retweets || 0;
    const impressions = data.impressions || 1; 
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
