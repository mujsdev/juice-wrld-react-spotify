import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
  },
});

export const signInWithSpotify = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "spotify",
  });

  if (error) {
    console.error(error);
  }
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
  }

  window.location.reload();
};
