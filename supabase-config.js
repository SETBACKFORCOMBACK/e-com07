// Supabase Configuration
const SUPABASE_URL = 'https://fsgrfmzruhlinjashubh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzZ3JmbXpydWhsaW5qYXNodWJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3MTQxNzcsImV4cCI6MjA3ODI5MDE3N30.wZwJWyqalTow25R8qB_knblaWQ4wEbSEKIGN6142aWU';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

