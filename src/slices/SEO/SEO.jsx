import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

const SEO = ({ slice }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
    >
      <meta charSet="utf-8" />
      <title>{slice.primary.page_title.text}</title>
      <meta name="description" content={slice.primary.meta_description.text} />
    </Helmet>
  )
}

export default SEO

export const query = graphql`
  fragment HomepageDataBodySeo on PrismicHomepageDataBodySeo {
    primary {
      page_title {
        text
      }
      meta_description {
        text
      }
    }
  }
  fragment PageDataBodySeo on PrismicPageDataBodySeo {
    primary {
      page_title {
        text
      }
      meta_description {
        text
      }
    }
  }
  fragment BlogPostDataBodySeo on PrismicBlogPostDataBodySeo {
    primary {
      page_title {
        text
      }
      meta_description {
        text
      }
    }
  }

  fragment SermonSeriesDataBodySeo on PrismicSermonSeriesDataBodySeo {
    primary {
      page_title {
        text
      }
      meta_description {
        text
      }
    }
  }
`
