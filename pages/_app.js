import "tailwindcss/tailwind.css";
import 'antd/dist/antd.css';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Education App</title>
      </Head>
      <Component {...pageProps}/>
    </>
  )
}

export default MyApp
