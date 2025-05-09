import { MongoClient } from 'mongodb';
import { getServerSession } from 'next-auth';

export async function GET(req) {
  const session = await getServerSession(req);

  if (!session || !session.user?.email) {
    return new Response('Unauthorized', { status: 401 });
  }

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    return new Response('Missing MongoDB URI', { status: 500 });
  }

  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db('oauth-connections');
  const supportedPlatforms = ['Youtube', 'Twitter', 'Instagram', "Facebook", "Linkedin"];

  const results = {};

  for (const platform of supportedPlatforms) {
    try {
      const collection = db.collection(platform.toLowerCase());
      const data = await collection.findOne({ 'user.email': session.user.email });

      if (!data) {
        console.log(`No data found for ${platform}`);
      }

      results[platform] = data || null;
    } catch (err) {
      console.error(`Error querying ${platform}:`, err);
      results[platform] = null;
    }
  }

  await client.close();

  return new Response(JSON.stringify(results), { status: 200 });
}
