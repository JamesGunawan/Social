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

    const data = {
      user: {
        name: session.user.name,
        email: session.user.email,
      },
      isConnected: true,
      metrics: {
        date: new Date(),
        views: Math.floor(Math.random() * 10000),
        subs: Math.floor(Math.random() * 1000),
        watchTime: Math.floor(Math.random() * 100000),
      }
    };
    
    console.log(`Upserting data for ${name}:`, data);
    
    await collection.updateOne( // Instead of deleting or preventing it manually we use update from mongodb's query to prevent duplicates
      { "user.email": session.user.email }, // Match existing doc
      { $set: data },                        // Update with this data
      { upsert: true }                      // Insert if no match
    );
    
    console.log(`Record upserted successfully for ${name}!`);

    return new Response('Database seeded successfully!');
  } catch (err) {
    console.error('Error seeding database:', err);
    return new Response('Error seeding database: ' + err.message, { status: 500 });
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
}
