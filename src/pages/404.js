import React from "react"
import Layout from "../components/Layout"
import ThankYou from "../components/ThankYou"
import PageHead from "../components/PageHead"

const Index = () => {
  return (
    <>
      <PageHead title={"404 Page Not Found | Bytown Community Church"} />
      <Layout>
        <ThankYou
          heading={"We're sorry, we couldn't find what you were looking for."}
        />
      </Layout>
    </>
  )
}

export default Index
