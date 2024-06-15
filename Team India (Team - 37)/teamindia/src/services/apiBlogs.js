import supabase from "./supabase";

export async function getBlogs() {
  let { data: blogs, error } = await supabase.from("blogs").select("*");

  if (error) {
    console.log("Error from apiBlogs/getBlogs");
    throw new Error("Error while finding the blogs : ", error);
  }

  return blogs;
}
