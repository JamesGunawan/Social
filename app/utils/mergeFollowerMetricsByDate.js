export default function mergeFollowerMetricsByDate(platforms) {
  const dateMap = new Map();

  platforms.forEach(({ name, data }) => {
    data.metrics.forEach((metric) => {
      const date = new Date(metric.date);
      const formattedDate = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

      if (!dateMap.has(formattedDate)) {
        dateMap.set(formattedDate, { name: formattedDate });
      }

      const count = name === 'Youtube' ? metric.subs : metric.followers;
      if (typeof count === 'number') {
        dateMap.get(formattedDate)[name] = count;
      }
    });
  });

  return Array.from(dateMap.values()).sort((a, b) => {
    const [aMonth, aDay] = a.name.split('-').map(Number);
    const [bMonth, bDay] = b.name.split('-').map(Number);
    return new Date(2025, aMonth - 1, aDay) - new Date(2025, bMonth - 1, bDay);
  });
}
