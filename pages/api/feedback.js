// pages/api/feedback.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, message } = req.body;

    // Add logic to store data in Supabase or send an email
    try {
      const { data, error } = await supabase
        .from('feedback')
        .insert([{ email, message }]);

      if (error) throw error;

      // Optionally, add email sending logic here

      res.status(200).json({ message: 'Feedback submitted successfully', data });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    // Handle any non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
