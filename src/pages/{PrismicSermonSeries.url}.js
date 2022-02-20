import * as React from "react"
import { graphql } from "gatsby"
import { SliceZone } from "@prismicio/react"

import Layout from "../components/Layout"

import { components } from "../slices"

const SermonSeriesTemplate = ({ data }) => {
  if (!data) return null

  const doc = data.prismicSermonSeries.data

  return (
    <Layout>
      <SliceZone slices={doc.body} components={components} />
    </Layout>
  )
}

export const query = graphql`
  query SermonSeriesQuery($id: String) {
    prismicSermonSeries(id: { eq: $id }) {
      data {
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ...SermonSeriesDataBodyHeader
          ...SermonSeriesDataBodyCallToAction
          ...SermonSeriesDataBodySermonArchive
        }
      }
    }
  }
`

export default SermonSeriesTemplate
