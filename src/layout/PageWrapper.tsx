import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default PageWrapper;
