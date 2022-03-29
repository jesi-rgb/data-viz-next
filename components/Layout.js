import Footer from "./Footer";
import { HeaderTW } from "./HeaderTW";
import Meta from "../components/meta";
// import React from "react";

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      {/* <div className="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto"> */}
      <div className="mx-1 xl:mx-auto xl:max-w-4xl">
        <HeaderTW />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
