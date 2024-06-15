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
