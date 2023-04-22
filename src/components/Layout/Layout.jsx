// import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import Head from "next/head";

const Layout = ({ title, description, children }) => {
  console.log(children);
  //capturo una propiedad de children en donde figura el nombre de la page
  const section = children.type.name;
 
  return (
    <div>
      <Head>
        <title>
          {title}/{section}
        </title>
        <meta name="description" content={description} />
      </Head>
      <Navbar />
      <main>{children}</main>
      {/* <footer> footer </footer> */}
    </div>
  );
};

Layout.defaultProps = {
  title: "Sole Rubio Fotógrafa",
  description: "Fashion, advertising, editorial, fotografía",
};

export default Layout;
