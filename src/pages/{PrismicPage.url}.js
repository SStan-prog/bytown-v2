import * as React from "react"
import { graphql } from "gatsby"
import { SliceZone } from "@prismicio/react"

import Layout from "../components/Layout"
import BlogArchive from "../components/BlogArchive"

import { components } from "../slices"

const PageTemplate = ({ data }) => {
  if (!data) return null

  const doc = data.prismicPage.data
  const uid = data.prismicPage.uid
  const posts = data.allPrismicBlogPost.nodes

  console.log(uid)

  if (uid === "blog") {
    return (
      <Layout>
        <SliceZone slices={doc.body} components={components} />
        <BlogArchive posts={posts} />
      </Layout>
    )
  } else
    return (
      <Layout>
        <SliceZone slices={doc.body} components={components} />
      </Layout>
    )
}

export const query = graphql`
  query PageQuery($id: String) {
    prismicPage(id: { eq: $id }) {
      uid
      data {
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ...PageDataBodyHeader
          ...PageDataBodyBibleVerse
          ...PageDataBodyContentBlock
          ...PageDataBodyCallToAction
          ...PageDataBodyDonationOptions
          ...PageDataBodyChurchBeliefs
          ...PageDataBodyChurchPartners
          ...PageDataBodyEventMenu
          ...PageDataBodyContactForm
          ...PageDataBodyLatestSermon
          ...PageDataBodyAllSeries
          ...PageDataBodySeo
        }
      }
    }
    allPrismicBlogPost {
      nodes {
        data {
          body {
            ... on PrismicBlogPostDataBodyHeader {
              id
              primary {
                heading {
                  text
                }
                body_text {
                  text
                }
                image {
                  url
                }
              }
            }
          }
        }
        url
      }
    }
  }
`

export default PageTemplate
