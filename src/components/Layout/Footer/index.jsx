import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import {
  FooterElement,
  FooterContainer,
  FooterLogoContainer,
  FooterList,
  FooterListItem,
  FooterListHeading,
  FooterListExternalLink,
  FooterListInternalLink,
} from "./FooterElements"

const index = () => {
  return (
    <FooterElement>
      <FooterContainer>
        <FooterLogoContainer>
          <StaticImage
            src="../../../images/LogoFooter.png"
            alt="The Bytown Community Church logo."
          />
        </FooterLogoContainer>
        <FooterList>
          <FooterListItem>
            <FooterListHeading>Site Map</FooterListHeading>
          </FooterListItem>
          <FooterListItem>
            <FooterListInternalLink href="/">Home</FooterListInternalLink>
          </FooterListItem>
          <FooterListItem>
            <FooterListInternalLink href="/who-we-are">
              Who We Are
            </FooterListInternalLink>
          </FooterListItem>
          <FooterListItem>
            <FooterListInternalLink href="/join-us">
              Join Us
            </FooterListInternalLink>
          </FooterListItem>
          <FooterListItem>
            <FooterListInternalLink href="/teachings">
              Teachings
            </FooterListInternalLink>
          </FooterListItem>
          <FooterListItem>
            <FooterListInternalLink href="/giving">
              Giving
            </FooterListInternalLink>
          </FooterListItem>
        </FooterList>
        <FooterList>
          <FooterListItem>
            <FooterListHeading>Contact</FooterListHeading>
          </FooterListItem>
          <FooterListItem>
            <FooterListExternalLink href="mailto:info@bytowncommunitychurch.ca">
              info@bytowncommunitychurch.ca
            </FooterListExternalLink>
          </FooterListItem>
          <FooterListItem>
            <FooterListExternalLink href="tel:(613) 316 - 6474">
              (613) 316 - 6474
            </FooterListExternalLink>
          </FooterListItem>
          <FooterListItem>
            Mailing Address:
            <br /> PO Box 82013 Riverside South RPO
            <br /> Gloucester, ON K1V 2N9
          </FooterListItem>
        </FooterList>
        <FooterList>
          <FooterListItem>
            <FooterListHeading>Follow</FooterListHeading>
          </FooterListItem>
          <FooterListItem>
            <FooterListExternalLink href="https://www.facebook.com/danchookreid">
              Facebook
            </FooterListExternalLink>
          </FooterListItem>
          <FooterListItem>
            <FooterListExternalLink href="https://www.instagram.com/accounts/login/?next=/bytowncommunitychurch/">
              Instagram
            </FooterListExternalLink>
          </FooterListItem>
          <FooterListItem>
            <FooterListExternalLink href="https://www.youtube.com/user/danmarkreid/videos">
              Youtube
            </FooterListExternalLink>
          </FooterListItem>
        </FooterList>
      </FooterContainer>
    </FooterElement>
  )
}

export default index
