import { createClient } from '@supabase/supabase-js'

const URL = 'https://ievmvdeyhehnuhqfbtxr.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlldm12ZGV5aGVobnVocWZidHhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMTI0MjksImV4cCI6MjA2ODg4ODQyOX0.HnRWMo573xacCu895hl3w5kbO7YaeEyHVDHolt3KAEQ'

export const supabase = createClient(URL, API_KEY)