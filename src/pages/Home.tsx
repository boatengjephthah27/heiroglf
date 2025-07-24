import Hero from "../views/Hero";
import AccomplishAnything from "../views/AccomplishAnything";
import WhatYouCanDo from "../views/WhatYouCanDo";
import { motion as m } from "framer-motion";

const Home = () => {
  return (
    <m.div
    // initial={{ y: "95%", opacity: 0 }}
    // animate={{ y: "0%", opacity: 1 }}
    // exit={{ y: "95%", opacity: 0 }}
    // transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Hero />
      <AccomplishAnything />
      <WhatYouCanDo />
    </m.div>
  );
};

export default Home;
