import React, { useEffect, Component, useState } from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"
import SocialMediaSlider from "../components/Elements/SocialMediaSlider";
import Footerv2 from "../components/Sections/Footerv2";
import WhatsappFAB from "../components/Buttons/whatsappFAB";

//icons
import { FcAbout, FcBusinessman, FcCamera, FcFullTrash } from "react-icons/fc";
export default function Landing() {

  const actions = [
    { label: "About", icon: <FcAbout />, onClick: console.log },
    { label: "Profile", icon: <FcBusinessman />, onClick: console.log },
    { label: "Picture", icon: <FcCamera />, onClick: console.log },
    { label: "Trash", icon: <FcFullTrash />, onClick: console.log },
  ];


  return (
    <>
      <TopNavbar />
     
      <Header />
      <Services />
      <Projects />
      <Blog />
      {/*  <Pricing /> */}
      <Contact />
      {/**<SocialMediaSlider /> */}
      {/**    <Footer /> */}
      <Footerv2 />
      <WhatsappFAB actions={actions} />
    </>
  );
}



