/*import 'bootstrap/dist/css/bootstrap.css'*/
import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  /*useEffect(() => {
    const bootstrap = require('bootstrap/dist/js/bootstrap')
    // ...
  }, [])
*/
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
