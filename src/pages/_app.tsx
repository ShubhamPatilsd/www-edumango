import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return(
      <>
      <Head>
        <title>Edumango</title>
        <meta charSet="UTF-8"/>
        <meta property="og:image" content="/mango.png" />
        <meta name="description" content="Empowering Students Through Education. EduMango is a teaching platform for kids from grades 5-8. We are currently providing eight-week camps over the summer for a variety of subjects and extracurriculars as well."/>
        <meta name="keywords" content="Free, Education, Learning, Edumango"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="shortcut icon" href="/mango.png" />
      </Head>
      <Component {...pageProps} />
      </>
  )
}

export default MyApp;
