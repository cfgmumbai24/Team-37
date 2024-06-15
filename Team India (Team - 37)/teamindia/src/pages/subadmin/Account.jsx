import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  signup,
  updateUserData,
  updateUserPassword,
} from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const defaultTheme = createTheme();

export default function Account({ token }) {
  const navigate = useNavigate();

  const email = token?.user?.user_metadata?.email;

  const handleDataSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");

    try {
      const userData = await updateUserData({ firstName, lastName });

      console.log("Updated user data successful:", userData);

      toast.success("User data updated successfully!");
      navigate("/");
    } catch (error) {
      toast.error("User data update failed!");
      console.error("Update error:", error.message);
    }
  };

  const handlePasswordSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const userData = await updateUserPassword({ password });

      console.log("Password update successful:", userData);

      toast.success("Password updated successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Password update failed!");
      console.error("Update error:", error.message);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        // maxWidth="xs"
        sx={{
          marginTop: "50px",
          marginBottom: "100px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          gap: "80px",
        }}
      >
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Update user data
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleDataSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label={email}
                  disabled
                  name="email"
                  autoComplete="email"
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update User
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Update user password
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handlePasswordSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="password"
                  name="password"
                  fullWidth
                  id="password"
                  label="New Password"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="confirmPassword"
                  label="Confirm new password"
                  name="confirmPassword"
                  autoComplete="confirmPassword"
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update Password
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
