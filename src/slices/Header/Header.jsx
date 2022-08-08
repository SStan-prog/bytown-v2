import React from "react"
import { Link } from "gatsby"
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
} from "./HeaderElements"

const index = ({ slice }) => {
  {
    console.log(slice)
  }

  if (!slice.items[0]) {
    return (
      <HeaderElement>
        <HeaderContainer>
          <HeaderTextContainer bg={slice.primary.image.url}>
            <Link to={"/"}>
              <HeaderLogo>
                <StaticImage src="../../images/LogoHome.png" />
              </HeaderLogo>
            </Link>
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
          </HeaderTextContainer>
          <HeaderImageContainer bg={slice.primary.image.url} />
        </HeaderContainer>
      </HeaderElement>
    )
  }

  return (
    <HeaderElement>
      <HeaderContainer>
        <HeaderTextContainer bg={slice.primary.image.url}>
          <Link to={"/"}>
            <HeaderLogo>
              <StaticImage src="../../images/LogoHome.png" />
            </HeaderLogo>
          </Link>
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
          </HeaderButtons>
        </HeaderTextContainer>
        <HeaderImageContainer bg={slice.primary.image.url} />
      </HeaderContainer>
    </HeaderElement>
  )
}

export default index

export const query = graphql`
  fragment PageDataBodyHeader on PrismicPageDataBodyHeader {
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
  fragment SermonSeriesDataBodyHeader on PrismicSermonSeriesDataBodyHeader {
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
  fragment BlogPostDataBodyHeader on PrismicBlogPostDataBodyHeader {
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
