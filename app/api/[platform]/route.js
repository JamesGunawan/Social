import { MongoClient } from 'mongodb';
import { getServerSession } from 'next-auth';

export async function GET(req, { params }) {
  const session = await getServerSession(req);
  

  const { platform } = await params;

  if (!session || !session.user?.email) {
    return new Response('Unauthorized', { status: 401 });
  }

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    return new Response('Missing MongoDB URI', { status: 500 });
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('oauth-connections');
    const collection = db.collection(platform.toLowerCase());

    const data = await collection.findOne({ "user.email": session.user.email });

    if (!data) {
      return new Response(JSON.stringify({ isConnected: false }), { status: 200 });
    }

    console.log(data)
    return new Response(JSON.stringify({ isConnected: true, ...data }), { status: 200 });
  } catch (err) {
    return new Response('Error fetching data: ' + err.message, { status: 500 });
  } finally {
    await client.close();
  }
}

export async function DELETE(req, { params }) {
  const session = await getServerSession(req);
  const { platform } = await params;

  if (!session || !session.user?.email) {
    return new Response('Unauthorized', { status: 401 });
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    return new Response('Missing MongoDB URI', { status: 500 });
  }

  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('oauth-connections');
    const collection = db.collection(platform.toLowerCase());

    const result = await collection.deleteMany({ "user.email": session.user.email });

    return new Response(JSON.stringify({
      isConnected: false,
      deletedCount: result.deletedCount
    }), { status: 200 });
  } catch (err) {
    return new Response('Error disconnecting: ' + err.message, { status: 500 });
  } finally {
    await client.close();
  }
}
