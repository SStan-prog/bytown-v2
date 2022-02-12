import * as React from "react"
import { graphql } from "gatsby"
import { SliceZone } from "@prismicio/react"

import Layout from "../components/Layout"

import { components } from "../slices"

const PageTemplate = ({ data }) => {
  if (!data) return null

  console.log(data)

  const doc = data.prismicPage.data

  return (
    <Layout>
      <SliceZone slices={doc.body} components={components} />
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($id: String) {
    prismicPage(id: { eq: $id }) {
      data {
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ...PageDataBodyBibleVerse
        }
      }
    }
  }
`

export default PageTemplate
