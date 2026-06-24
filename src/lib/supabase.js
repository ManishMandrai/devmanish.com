import { createClient } from '@supabase/supabase-js'

// Your Supabase credentials (same as admin panel)
const supabaseUrl = 'https://zyapcjhjdxtsjzwydacz.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5YXBjamhqZHh0c2p6d3lkYWN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyMDgzNzcsImV4cCI6MjA4ODc4NDM3N30.dTi_G6vfYChslUxGcsIYLp8DnKGUuSZI4bSNm3V-478'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)