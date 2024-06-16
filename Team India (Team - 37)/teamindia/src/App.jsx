import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AppAppBar from "./components/subadmin/AppAppBar";
import theme from "../src/theme";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/subadmin/Feed";
import Signin from "./pages/subadmin/Signin";
import Signup from "./pages/subadmin/Signup";
import Blog from "./pages/subadmin/Blog";
import { Toaster } from "react-hot-toast";
import About from "./pages/subadmin/About";
import Contact from "./pages/subadmin/Contact";
import Footer from "./components/subadmin/Footer";
import PageNotFound from "./pages/subadmin/PageNotFound";
import Account from "./pages/subadmin/Account";
import Request from "./pages/subadmin/Request";
import Inventory from "./pages/subadmin/Inventory";
import Form from "./pages/artisian/form";
import Guide from "./pages/artisian/guide";
import Login from "./pages/artisian/Login";
import Products from "./pages/buyers/Products";
import Cart from "./pages/buyers/Cart";
import EntryPage from "./pages/EntryPage";

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100dvw",
        position: "fixed",
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label="Platform"
        sx={{
          backgroundColor: "background.default",
          "& .Mui-selected": {
            pointerEvents: "none",
          },
        }}
      ></ToggleButtonGroup>
    </Box>
  );
}
function App() {
  const [mode, setMode] = useState("light");
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const LPtheme = createTheme(theme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const [token, setToken] = useState(false);

  if (token) {
    console.log("Token is in App:", token);
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <BrowserRouter>
        <AppAppBar
          mode={mode}
          toggleColorMode={toggleColorMode}
          token={token}
        />
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/jpmmss" element={<Feed />} />
          <Route path="/jpmmss/blogs" element={<Blog />} />
          <Route path="/jpmmss/request" element={<Request />} />
          <Route path="/jpmmss/inventory" element={<Inventory />} />
          <Route path="/jpmmss/about" element={<About />} />
          <Route path="/jpmmss/contact" element={<Contact />} />
          <Route path="/jpmmss/account" element={<Account token={token} />} />
          <Route
            path="/jpmmss/sign-in"
            element={<Signin setToken={setToken} />}
          />

          {/* <Route path="/subadmin/sign-up" element={<Signup />} /> */}

          {/* Buyer */}
          <Route path="/customer/product" element={<Products />} />
          <Route path='/customer/checkout-items' element={<Cart />} />

          {/* User */}
          <Route path="/user/form" element={<Signup />} />

          <Route path="/user" element={<Form />} />
          <Route path="/user/guide" element={<Guide />} />
          <Route path="/user/login" element={<Login setToken={setToken} />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      <Toaster
        position="bottom-right"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />

      <ToggleCustomTheme
        showCustomTheme={showCustomTheme}
        toggleCustomTheme={toggleCustomTheme}
      />
    </ThemeProvider>
  );
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.shape({
    valueOf: PropTypes.func.isRequired,
  }).isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

export default App;
