// import React from "react";
import { Footer } from "../Footer/Footer";

import Head from "next/head";
import Header from "../Header/Header";

const Layout = ({ title, description, children }) => {
  console.log(children);
  //capturo una propiedad de children en donde figura el nombre de la page
  const section = children.type.name;
 
  return (
    <div>
      <Head>
        <title>
          {title}
        </title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Sole Rubio Fotógrafa",
  description: "Fashion, advertising, editorial, fotografía",
};

export default Layout;
