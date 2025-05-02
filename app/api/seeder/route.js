import { NextResponse } from 'next/server';
import clientPromise from '../../lib/mongodb';

export async function GET(req) {
  const url = new URL(req.url);
  const platform = url.searchParams.get('platform') || 'unknown';

  const dummyData = {
    youtube: {
      metrics: {
        views: Math.floor(Math.random() * 10000),
        subs: Math.floor(Math.random() * 1000),
        watchTime: Math.floor(Math.random() * 100000),
      },
    },
    twitter: {
      metrics: {
        followers: Math.floor(Math.random() * 5000),
        likes: Math.floor(Math.random() * 10000),
      },
    },
    // Add other platforms here
  };

  try {
    const client = await clientPromise;
    const db = client.db('your-db-name');
    const collection = db.collection('connections');

    await collection.insertOne({
      userId: 'dev-simulated',
      platform,
      connected: true,
      data: dummyData[platform] || {},
      accessToken: `sim-${platform}-token-${Date.now()}`,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
