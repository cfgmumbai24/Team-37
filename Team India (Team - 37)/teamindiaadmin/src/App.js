import React from "react";
import Admin from "./components/admin/home";
import FooterAdmin from "./components/admin/footer";
import Navbar from "./components/admin/navbar";
import Addadmin from "./components/admin/addadmin";
import Addopening from "./components/admin/addopening";
import Studetails from "./components/admin/studetails";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/admin"
            element={
              <>
                <Navbar />
                <Admin />
                <FooterAdmin />
              </>
            }
          />
          <Route
            path="/addadmin"
            element={
              <>
                <Navbar />
                <Addadmin />
                <FooterAdmin />
              </>
            }
          />
          <Route
            path="/addopening"
            element={
              <>
                <Navbar />
                <Addopening />
                <FooterAdmin />
              </>
            }
          />
          {/* <Route
            path="/highlight"
            element={
              <>
                <Navbar />
                <Highlights />
                <FooterAdmin />
              </>
            }
          /> */}
          <Route
            path="/studdetails"
            element={
              <>
                <Navbar />
                <Studetails />
                <FooterAdmin />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
