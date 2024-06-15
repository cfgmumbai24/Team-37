// validateUser.js
import { supabase } from "./supabase"; // Ensure you have the correct path to your Supabase client

export const validateUser = async (email, password) => {
  try {
    let { data: user, error } = await supabase
      .from("artisian") // Replace with your actual table name
      .select("*")
      .eq("email", email)
      .single(); // Assuming email is unique and you want a single result

    if (error) {
      throw error;
    }

    if (user && user.password === password) {
      return { success: true, user };
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  } catch (error) {
    console.error("Error validating user:", error);
    return { success: false, message: error.message };
  }
};
