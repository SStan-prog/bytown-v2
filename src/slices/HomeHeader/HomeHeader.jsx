import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { ButtonGreen, ButtonRed } from "../../components/Buttons"

import {
  HeaderElement,
  HeaderContainer,
  HeaderTextContainer,
  HeaderImageContainer,
  HeaderLogo,
  HeaderHeading,
  HeaderBody,
  HeaderButtons,
} from "./HomeHeaderElements"

const index = ({ slice }) => {
  console.log(slice)

  return (
    <HeaderElement>
      <HeaderContainer>
        <HeaderTextContainer bg={slice.primary.image.url}>
          <HeaderLogo>
            <StaticImage src="../../images/LogoHome.png" />
          </HeaderLogo>
          <HeaderHeading
            dangerouslySetInnerHTML={{
              __html: `${slice.primary.heading.text}`,
            }}
          />
          <HeaderBody
            dangerouslySetInnerHTML={{
              __html: `${slice.primary.body_text.text}`,
            }}
          />
          <HeaderButtons>
            <ButtonRed
              link={slice.items[0].button_link.url}
              btnText={slice.items[0].button_label}
            />
            <ButtonGreen
              link={slice.items[1].button_link.url}
              btnText={slice.items[1].button_label}
            />
          </HeaderButtons>
        </HeaderTextContainer>
        <HeaderImageContainer bg={slice.primary.image.url} />
      </HeaderContainer>
    </HeaderElement>
  )
}

export default index

export const query = graphql`
  fragment HomepageDataBodyHomeHeader on PrismicHomepageDataBodyHomeHeader {
    primary {
      body_text {
        text
      }
      image {
        url
      }
      heading {
        text
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
