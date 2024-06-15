import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { addSubAdmin, fetchSubAdmin } from "../../services/apiAuth";
import { useState } from "react";
import './index.css';


const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};



const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Contact is required"),
  address1: yup.string().required("Address1 is required"),
  address2: yup.string().required("Address2 is required"),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const subAdmins = await fetchSubAdmin();
      console.log("SubAdmins:", subAdmins);
    } catch (error) {
      console.error("Error fetching subAdmins:", error.message);
      // Handle error, e.g., show error message to user
    }

    try {
      await addSubAdmin({ email, password,role });
      console.log("User added successfully");
      // Reset form fields after successful submission if needed
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error adding user:", error.message);
      // Handle error, e.g., show error message to user
    }
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a new user profile" />

      <div className="creator">
        <form onSubmit={handleSubmit}>
          <input name="email" value={email} onChange={handleInputChange} placeholder="Email" className="input-field" />
          <br />
          <br />
          <input name="password" value={password} onChange={handleInputChange} placeholder="Set Password" className="input-field" />
          <br />
          <br />
          <label htmlFor="role" className="label">Choose a role:</label>
          <select name="role" id="role" className="select-field">
            <option value="User">User</option>
            <option value="SubAdmin">SubAdmin</option>
          </select>
          <br />
          <br />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>

    </Box>
  );
};

export default Form;
