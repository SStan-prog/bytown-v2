import React from "react"
import Layout from "../components/Layout"
import ThankYou from "../components/ThankYou"
import PageHead from "../components/PageHead"

const Index = () => {
  return (
    <>
      <PageHead title={"Newsletter Signup Success | Bytown Community Church"} />
      <Layout>
        <ThankYou heading={"Thank you for signing up to our newsletter!"} />
      </Layout>
    </>
  )
}

export default Index
