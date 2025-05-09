import { MongoClient } from 'mongodb';
import { getServerSession } from 'next-auth';

export async function POST(req, { params }) {
  const session = await getServerSession();
  const { name } = await params;

  if (!session) {
    return new Response('Unauthorized', { status: 401 });
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    return new Response('MONGODB_URI environment variable is not set', { status: 500 });
  }

  console.log('Connecting to MongoDB...');

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB successfully');

    const db = client.db('oauth-connections');
    const collection = db.collection(name);

    // Create 30 days of simulated data
    const metrics = [];

    for (let i = 0; i < 30; i++) {
      // Simulate a previous date by subtracting i days from today
      const date = new Date();
      date.setDate(date.getDate() - i);

      let dailyMetrics = { date }; // Store the date for each iteration

      // Platform-specific metrics
      switch (name) {
        case 'youtube':
          // YouTube-specific metrics
          dailyMetrics = {
            ...dailyMetrics,
            views: Math.floor(Math.random() * 10000),
            subs: Math.floor(Math.random() * 1000),
            watchTime: Math.floor(Math.random() * 100000),
          };
          break;

        case 'instagram':
          // Instagram-specific metrics
          dailyMetrics = {
            ...dailyMetrics,
            likes: Math.floor(Math.random() * 5000),
            followers: Math.floor(Math.random() * 1000),
            impressions: Math.floor(Math.random() * 10000),
          };
          break;

        case 'facebook':
          // Facebook-specific metrics
          dailyMetrics = {
            ...dailyMetrics,
            likes: Math.floor(Math.random() * 5000),
            followers: Math.floor(Math.random() * 1000),
            shares: Math.floor(Math.random() * 500),
          };
          break;

        case 'twitter':
          // Twitter-specific metrics
          dailyMetrics = {
            ...dailyMetrics,
            likes: Math.floor(Math.random() * 2000),
            followers: Math.floor(Math.random() * 800),
            retweets: Math.floor(Math.random() * 500),
            impressions: Math.floor(Math.random() * 10000),
          };
          break;

        case 'linkedin':
          // LinkedIn-specific metrics
          dailyMetrics = {
            ...dailyMetrics,
            likes: Math.floor(Math.random() * 1000),
            followers: Math.floor(Math.random() * 500),
            shares: Math.floor(Math.random() * 300),
          };
          break;

        default:
          // For other platforms or no platform-specific data, just add generic metrics
          dailyMetrics = {
            ...dailyMetrics,
            views: Math.floor(Math.random() * 10000),
            subs: Math.floor(Math.random() * 1000),
            watchTime: Math.floor(Math.random() * 100000),
          };
          break;
      }

      metrics.push(dailyMetrics);
    }

    // Log all generated metrics for checking
    console.log(`Generated 30 days of metrics for ${name}:`, metrics);

    // Upsert the data with the user's name and isConnected status
    await collection.updateOne(
      { "user.email": session.user.email },  // Match existing user
      { 
        $set: {
          "user.name": session.user.name, // Ensure user name is updated
          "isConnected": true,             // Ensure connection status is true
        },
        $push: { metrics: { $each: metrics } }  // Add multiple metrics entries at once
      },
      { upsert: true }                       // Insert document if not found
    );
    
    console.log(`30 records upserted successfully for ${name}!`);

    return new Response('Database seeded successfully!');
  } catch (err) {
    console.error('Error seeding database:', err);
    return new Response('Error seeding database: ' + err.message, { status: 500 });
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
}
