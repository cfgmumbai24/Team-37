import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hjmpcvjmaazgqipmdbvw.supabase.co";
const supabaseKey =
  "";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
