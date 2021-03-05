import Head from 'next/head'
import Layout from "../src/containers/LayoutContainer"
import HomePage from "../src/pages/Home"

export default function Home() {
  return (
    <div>
      <Layout>
        <HomePage/>
      </Layout>
    </div>
  )
}
