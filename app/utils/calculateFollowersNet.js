export default function calculateFollowersNet(platform, metrics) {
  if (!metrics?.metrics || metrics.metrics.length < 2) return "0%";

  // Find today's and previous day's metrics
  const sortedMetrics = metrics.metrics.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date in descending order
  const todayMetrics = sortedMetrics[0];
  const previousDayMetrics = sortedMetrics[1];

  // Ensure we have data for both today and the previous day
  if (!todayMetrics || !previousDayMetrics) return "0%";

  // Get the followers count for today and the previous day
  const todayFollowers = todayMetrics.subs || 0;
  const previousFollowers = previousDayMetrics.subs || 0;

  // Calculate the percentage change
  const difference = todayFollowers - previousFollowers;
  const percentageChange = (difference / previousFollowers) * 100;

  // Return the result as a string with a "+" or "-" sign and formatted percentage
  const formattedPercentage = `${percentageChange >= 0 ? "+" : ""}${percentageChange.toFixed(1)}%`;

  return formattedPercentage;
}
