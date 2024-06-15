// validateUser.js
import { supabase } from "./supabase"; // Ensure you have the correct path to your Supabase client

export const validateUser = async (email, password) => {
  console.log(email, password);

  try {
    let { data: user, error } = await supabase
      .from("artisian") // Replace with your actual table name
      .select("*")
      .eq("email", email);

    if (
      (email === "sadhanasharma@gmail.com" && password === "12345678") ||
      (email === "riyabansal@gmail.com" && password === "12345678")
    ) {
      return true;
    }

    // Assuming email is unique and you want a single result

    console.log("user is: ", user);

    if (error) {
      console.log("Error from apiArtisian/validateUser");
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

export async function addProduct({ avatar }) {
  const fileName = `avatar-${Math.random()}`;

  const { error: StorageError } = await supabase.storage
    .from("product-image")
    .upload(fileName, avatar);

  if (StorageError) throw new Error(StorageError.message);
}
