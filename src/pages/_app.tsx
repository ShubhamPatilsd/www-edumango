import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return(
      <>
      <Head>
        <title>Edumango—Empowering Students Through Education</title>
        <link rel="shortcut icon" href="/mango.png" />
      </Head>
      <Component {...pageProps} />
      </>
  )
}

export default MyApp;
