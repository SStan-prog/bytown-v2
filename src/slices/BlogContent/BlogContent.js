import React from "react"
import { graphql } from "gatsby"
import { PrismicRichText } from "@prismicio/react"

import { Section, Container } from "./BlogContentElement"

const BlogContent = ({ slice }) => {
  console.log(slice.primary.main_text.html)
  return (
    <Section>
      <Container
        dangerouslySetInnerHTML={{
          __html: `${slice.primary.main_text.html}`,
        }}
      />
      {/* <PrismicRichText field={slice.primary.main_text} /> */}
    </Section>
  )
}

export default BlogContent

export const query = graphql`
  fragment BlogPostDataBodyBlogContent on PrismicBlogPostDataBodyBlogContent {
    id
    primary {
      main_text {
        html
      }
    }
  }
`
