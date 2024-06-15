import supabase from "./supabase";

export default async function fetchProducts(){
  const {data, error } = await supabase.from('products').select("*");

  console.log(data);

  if(error) {
    console.log("Error from apiProducts/fetchProducts");
    throw new Error(error.message);
  }

  return data;
}