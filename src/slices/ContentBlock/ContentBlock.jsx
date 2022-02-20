import React from "react"
import { graphql } from "gatsby"

import {
  ContentBlockSection,
  ContentBlockContainer,
  ContentBlockImageContainer,
  ContentBlockTextContainer,
  ContentBlockTextHeading,
  ContentBlockTextBody,
} from "./ContentBlockElements"

import { ButtonRed } from "../../components/Buttons"

const ContentBlock = ({ slice }) => {
  let blockId = ""
  if (slice.primary.block_id === null) {
    blockId = "block"
  } else {
    blockId = slice.primary.block_id.text
  }

  return (
    <ContentBlockSection id={blockId}>
      <ContentBlockContainer imagePlacement={slice.primary.image_placement}>
        <ContentBlockImageContainer
          imagePlacement={slice.primary.image_placement}
          imageWidth={slice.primary.image_width}
        >
          <img src={slice.primary.image.url} alt={slice.primary.alt} />
        </ContentBlockImageContainer>
        <ContentBlockTextContainer
          imagePlacement={slice.primary.image_placement}
          imageWidth={slice.primary.image_width}
          textAlignment={slice.primary.text_alignment}
        >
          <ContentBlockTextHeading
            dangerouslySetInnerHTML={{
              __html: `${slice.primary.title.text}`,
            }}
          />
          <ContentBlockTextBody
            dangerouslySetInnerHTML={{
              __html: `${slice.primary.description.html}`,
            }}
          />
          <ButtonRed
            link={slice.primary.button_link.url}
            btnText={slice.primary.button_label}
          />
        </ContentBlockTextContainer>
      </ContentBlockContainer>
    </ContentBlockSection>
  )
}

export default ContentBlock

export const query = graphql`
  fragment PageDataBodyContentBlock on PrismicPageDataBodyContentBlock {
    primary {
      block_id {
        text
      }
      image_placement
      image_width
      title {
        text
      }
      subtitle {
        text
      }
      description {
        html
      }
      text_alignment
      button_link {
        url
      }
      button_label
      image {
        alt
        url
      }
    }
  }

  fragment HomepageDataBodyContentBlock on PrismicHomepageDataBodyContentBlock {
    primary {
      block_id {
        text
      }
      image_placement
      image_width
      title {
        text
      }
      subtitle {
        text
      }
      description {
        html
      }
      text_alignment
      button_link {
        url
      }
      button_label
      image {
        alt
        url
      }
    }
  }
`
