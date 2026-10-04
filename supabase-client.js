const SC = window.STARTUP_CART_CONFIG;
let supabaseClient = null;

function getSupabase() {
  if (!supabaseClient) {
    if (!window.supabase) throw new Error("Supabase library was not loaded.");
    supabaseClient = window.supabase.createClient(SC.SUPABASE_URL, SC.SUPABASE_ANON_KEY);
  }
  return supabaseClient;
}