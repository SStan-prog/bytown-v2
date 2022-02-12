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
  return (
    <ContentBlockSection>
      <ContentBlockContainer imagePlacement={slice.primary.image_placement}>
        <ContentBlockImageContainer
          imagePlacement={slice.primary.image_placement}
        >
          <img src={slice.primary.image.url} alt={slice.primary.alt} />
        </ContentBlockImageContainer>
        <ContentBlockTextContainer
          imagePlacement={slice.primary.image_placement}
        >
          <ContentBlockTextHeading
            dangerouslySetInnerHTML={{
              __html: `${slice.primary.title.text}`,
            }}
          />
          <ContentBlockTextBody
            dangerouslySetInnerHTML={{
              __html: `${slice.primary.description.text}`,
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
  fragment HomepageDataBodyContentBlock on PrismicHomepageDataBodyContentBlock {
    primary {
      image_placement
      title {
        text
      }
      subtitle {
        text
      }
      description {
        text
      }
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
