import React from "react";
import Divider from "@mui/material/Divider";
import Hero from "../../components/subadmin/Hero";
import LogoCollection from "../../components/subadmin/LogoCollection";
import Highlights from "../../components/subadmin/Highlights";
import Pricing from "../../components/subadmin/Pricing";
import Features from "../../components/subadmin/Features";
import Testimonials from "../../components/subadmin/Testimonials";
import FAQ from "../../components/subadmin/FAQ";

const Feed = () => {
  return (
    <div>
      <Hero />
      <LogoCollection />
      <Features />
      <Divider />
      <Testimonials />
      <Divider />
     <Highlights/>
      <Divider />
       <Divider />
      <FAQ />
    </div>
  );
};

export default Feed;
