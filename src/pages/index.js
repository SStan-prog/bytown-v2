import React from "react"
import { graphql } from "gatsby"
import { SliceZone } from "@prismicio/react"

import { components } from "../slices"

import Layout from "../components/Layout"

export default function Home({ data }) {
  const doc = data.prismicHomepage.data

  return (
    <>
      <Layout>
        <SliceZone slices={doc.body} components={components} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    prismicHomepage {
      data {
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ...HomepageDataBodyHomeHeader
          ...HomepageDataBodyBibleVerse
          ...HomepageDataBodyCallToAction
          ...HomepageDataBodyContentBlock
        }
      }
    }
  }
`
