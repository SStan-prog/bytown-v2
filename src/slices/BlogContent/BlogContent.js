import React from "react"
import { graphql } from "gatsby"

import { Section, Container } from "./BlogContentElement"

const BlogContent = ({ slice }) => {
  return (
    <Section>
      <Container
        dangerouslySetInnerHTML={{
          __html: `${slice.primary.main_text.html}`,
        }}
      />
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
