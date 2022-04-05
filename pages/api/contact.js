import { MongoClient } from 'mongodb';

function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }
    const newMessage = {
      email,
      name,
      message
    };

    let client;

    try {
      client = new MongoClient(process.env.MONGO_URL);
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    async function main() {
      // Use connect method to connect to the server
      await client.connect();

      const db = client.db();

      const collection = db.collection('messages');

      // the following code examples can be pasted here...
      const result = await collection.insertOne(newMessage);
      newMessage.id = result.insertedId;

      return 'done.';
    }

    main()
      .then(() => {
        res.status(201).json({ message: newMessage });
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      })
      .finally(() => client.close());
  }
}

export default handler;
