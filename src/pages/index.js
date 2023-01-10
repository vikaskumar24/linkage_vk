import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

import Image1 from "../images/design-notes.svg";
import Image2 from "../images/space.svg";
import InfoSectionLight from "../components/infoSectionLight";
import Services from "../components/services";
import Footer from "../components/footer";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection
        image={Image1}
        id="about"
        // subtitle="Mauris tempor interdum"
        title="About Us"
        text="LinkageCloud was established in 2013 and it has become India’s fastest growing structured cabling manufacturer actively driven under the ‘Make In India’ initiate of the Government of India. Our state of the art manufacturing facility based out of Ludhiana serves an established customer base by offering structured fully integrated cabling, wireless, LAN and Fibre-Optics solutions. Linkagecloud has been the preferred OEM for large multi national organisations, government projects and various industry verticals."
        btnText="Start today"
      />
      <InfoSectionLight
        image={Image2}
        id="discover"
        // subtitle="Morbi iaculis enim"
        title="Trending"
        text="The 6 cloud computing trends shaping the market in 2022. All the trends below will have an impact beyond the current year and the info you find in this article is vital to staying competitive in the ever-evolving world of cloud computing."
        btnText="Explore"
      />
      <Services />
      <InfoSectionLight
        image={Image1}
        id="#"
        subtitle="Upcoming world is totally different"
        title="Technology you must have"
        text="A server is a computer program or device that provides a service to another computer program and its user, also known as the client. In a data center, the physical computer that a server program runs on is also frequently referred to as a server. That machine might be a dedicated server or it might be used for other purposes.

In the client/server programming model, a server program awaits and fulfills requests from client programs, which might be running in the same, or other computers. A given application in a computer might function as a client with requests for services from other programs and as a server of requests from other programs.."
        btnText="Read more"
      />
      <Footer />
    </>
  );
};
