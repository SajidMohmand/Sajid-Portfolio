export default async function handler(req, res) {
  console.log(`Incoming ${req.method} request to ${req.url}`);
  
  if (req.method !== 'POST') {
    console.log('Method not allowed');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Request body:', req.body);
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    console.log("Processing contact form:", { name, email, message });
    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("API error:", error);
    return res.status(500).json({ error: error.message });
  }
}