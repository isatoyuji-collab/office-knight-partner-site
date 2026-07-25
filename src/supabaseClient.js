import { createClient } from "@supabase/supabase-js";

// .env に VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY を設定してください
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;
