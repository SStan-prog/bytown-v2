import * as React from "react"
import { graphql } from "gatsby"
import { SliceZone } from "@prismicio/react"

import Layout from "../components/Layout"

import { components } from "../slices"

const BlogPostTemplate = ({ data }) => {
  if (!data) return null

  const doc = data.prismicBlogPost.data

  return (
    <Layout>
      <SliceZone slices={doc.body} components={components} />
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($id: String) {
    prismicBlogPost(id: { eq: $id }) {
      data {
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ...BlogPostDataBodyHeader
          ...BlogPostDataBodyCallToAction
          ...BlogPostDataBodyBibleVerse
          ...BlogPostDataBodyBlogContent
          ...BlogPostDataBodySeo
        }
      }
    }
  }
`

export default BlogPostTemplate
