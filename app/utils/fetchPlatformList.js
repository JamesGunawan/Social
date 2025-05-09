export async function fetchPlatformList() {
    try {
      const res = await fetch('/api/dashboard-data', {method: "GET"});
      if (!res.ok) throw new Error('Failed to fetch platforms');
  
      const data = await res.json();

      console.log(data);  
  
      // Filter out disconnected platforms (null values)
      const connectedPlatforms = Object.entries(data)
        .filter(([_, platformData]) => platformData !== null)
        .map(([platformName, platformData]) => ({
          name: platformName,
          data: platformData
        }));
  
      return connectedPlatforms; // Array of { name, data }
    } catch (err) {
      console.error('Error fetching platform list:', err);
      return [];
    }
  }
  