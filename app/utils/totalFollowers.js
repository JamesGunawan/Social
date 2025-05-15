export function getTotalFollowerStats(mergedData, platformNames) {
  const formatDisplayDate = (date) =>
    date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
    }).replace(/\//g, "-");

  const todayStr = formatDisplayDate(new Date());
  const yesterdayStr = formatDisplayDate(new Date(Date.now() - 86400000));

  const todayEntry = mergedData.find(entry => entry.name === todayStr);
  const yesterdayEntry = mergedData.find(entry => entry.name === yesterdayStr);

  const getTotal = (entry) => {
    if (!entry) return 0;
    return platformNames.reduce((sum, name) => {
      const val = entry[name];
      return typeof val === "number" ? sum + val : sum;
    }, 0);
  };

  const totalToday = getTotal(todayEntry);
  const totalYesterday = getTotal(yesterdayEntry);

  const changeAmount = totalToday - totalYesterday;
  const changePercent =
    totalYesterday > 0
      ? ((changeAmount / totalYesterday) * 100).toFixed(1)
      : "0";

  const displayChange = changeAmount >= 0 ? `+${changePercent}%` : `${changePercent}%`;

  return {
    totalToday,
    displayChange,
  };
}
