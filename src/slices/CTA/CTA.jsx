import React from "react"
import { graphql } from "gatsby"

import { ButtonGreen, ButtonWhite } from "../../components/Buttons"
import { CTASection, CTAContainer, CTAText, CTAButtons } from "./CTAElements"

const CTA = ({ slice }) => {
  if (!slice.items[1]) {
    return (
      <CTASection>
        <CTAContainer>
          <CTAText
            dangerouslySetInnerHTML={{
              __html: `${slice.primary.paragraph.html}`,
            }}
          ></CTAText>
          <CTAButtons>
            <ButtonGreen
              link={slice.items[0].button_link.url}
              btnText={slice.items[0].button_label}
            />
          </CTAButtons>
        </CTAContainer>
      </CTASection>
    )
  }

  return (
    <CTASection>
      <CTAContainer>
        <CTAText
          dangerouslySetInnerHTML={{
            __html: `${slice.primary.paragraph.html}`,
          }}
        ></CTAText>
        <CTAButtons>
          <ButtonGreen
            link={slice.items[0].button_link.url}
            btnText={slice.items[0].button_label}
          />
          <ButtonWhite
            link={slice.items[1].button_link.url}
            btnText={slice.items[1].button_label}
          />
        </CTAButtons>
      </CTAContainer>
    </CTASection>
  )
}

export default CTA

export const query = graphql`
  fragment PageDataBodyCallToAction on PrismicPageDataBodyCallToAction {
    primary {
      paragraph {
        html
      }
    }
    items {
      button_link {
        url
      }
      button_label
    }
  }
  fragment HomepageDataBodyCallToAction on PrismicHomepageDataBodyCallToAction {
    primary {
      paragraph {
        html
      }
    }
    items {
      button_link {
        url
      }
      button_label
    }
  }
  fragment SermonSeriesDataBodyCallToAction on PrismicSermonSeriesDataBodyCallToAction {
    primary {
      paragraph {
        html
      }
    }
    items {
      button_link {
        url
      }
      button_label
    }
  }
  fragment BlogPostDataBodyCallToAction on PrismicBlogPostDataBodyCallToAction {
    primary {
      paragraph {
        html
      }
    }
    items {
      button_link {
        url
      }
      button_label
    }
  }
`
