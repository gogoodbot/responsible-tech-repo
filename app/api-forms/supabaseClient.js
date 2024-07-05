import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qksicltifoeeixtvudnc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrc2ljbHRpZm9lZWl4dHZ1ZG5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2NDQwMjMsImV4cCI6MjAxNTIyMDAyM30.N-v5v5i68e1zyqmECrDpYOmyJbfoHzrgFkUCbBdQs8U';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
