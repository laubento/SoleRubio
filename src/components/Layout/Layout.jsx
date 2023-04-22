import React from "react";
import Navbar from "../Home/Navbar/Navbar";

const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>

      {/* <footer> footer </footer> */}
      
    </div>
  );
};

export default Layout;
