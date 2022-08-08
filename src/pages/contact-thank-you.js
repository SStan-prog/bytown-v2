import React from "react"
import Layout from "../components/Layout"
import ThankYou from "../components/ThankYou"
import PageHead from "../components/PageHead"

const Index = () => {
  return (
    <>
      <PageHead title={"Thank You | Bytown Community Church"} />
      <Layout>
        <ThankYou
          heading={
            "Thank you for contacting us, we'll reach out to you as soon as possible!"
          }
        />
      </Layout>
    </>
  )
}

export default Index
