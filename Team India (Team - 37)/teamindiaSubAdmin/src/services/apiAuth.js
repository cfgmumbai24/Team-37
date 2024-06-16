import supabase from "./supabase";

// creating new the user
export async function signup({ firstName, lastName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        firstName: firstName,
        lastName: lastName,
        avatar: "",
      },
    },
  });

  if (error) {
    console.log("Error from apiAuth/signup");
    throw new Error(error.message);
  }

  return data;
}

// login the user
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    console.log("Error from apiAuth/login");
    throw new Error(error.message);
  }
  if(data) {
    console.log(data)
    const id = data.user.id;
    const {data, error} = await supabase.from('users').select('*').eq('id', id).single();
    if(data.role !== 0)  {
      console.log('You are not a sub-admin')
      await supabase.auth.signOut();
      throw new Error("You are not a sub-admin");
    }
  }

  return data;
}

export async function addSubAdmin({email, password}){
  const{data, error} = await supabase.from('subAdmin').insert([{
    email:email,password:password
  }]).select();

  if (error) {
    console.log("Error from apiAuth/addSubAdmin");
    throw new Error(error.message);
  }

  return data;
}

export async function fetchSubAdmin(){
  const {data,error} = await supabase.from('subAdmin').select("*")

  if (error) {
    console.log("Error from apiAuth/addSubAdmin");
    throw new Error(error.message);
  }

  return data;
}

export async function addSubUser({email, password}){
  const{data, error} = await supabase.from('subUser').insert([{
    email:email,password:password
  }]).select();

  if (error) {
    console.log("Error from apiAuth/addSubUser");
    throw new Error(error.message);
  }

  return data;
}

export async function fetchSubUser(){
  const {data,error} = await supabase.from('subUser').select("*")

  if (error) {
    console.log("Error from apiAuth/addSubUser");
    throw new Error(error.message);
  }

  return data;
}


// Logout the user
export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log("Error from apiAuth/logout");
    throw new Error(error.message);
  }
}



// Update user data (first name, last name)
export async function updateUserData({ firstName, lastName }) {
  const { data, error } = await supabase.auth.updateUser({
    data: { firstName, lastName },
  });

  if (error) {
    console.log("Error from apiAuth/updateUserData");
    throw new Error(error.message);
  }

  return data;
}

// Update user password
export async function updateUserPassword({ password }) {
  const { data, error } = await supabase.auth.updateUser({
    password,
  });

  if (error) {
    console.log("Error from apiAuth/updateUserPassword");
    throw new Error(error.message);
  }

 return data;
}