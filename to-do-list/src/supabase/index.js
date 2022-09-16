import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://otopajlvjtmsemkmcnar.supabase.co';
const supabaseAnonToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90b3Bhamx2anRtc2Vta21jbmFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI4NDc5ODAsImV4cCI6MTk3ODQyMzk4MH0.GI1q57psdxW0evccRI_MiFVTYdLzFcemH5Y9Stk57OY';

export default createClient(supabaseUrl, supabaseAnonToken);
