import React from "react"
import { graphql } from "gatsby"

import {
  Section,
  Container,
  Heading,
  PartnersContainer,
} from "./ChurchPartnersElements"

import ChurchPartner from "./ChurchPartner"

const ChurchPartners = ({ slice }) => {
  return (
    <Section>
      <Container>
        <Heading>{slice.primary.heading.text}</Heading>
        <PartnersContainer>
          {slice.items.map(item => (
            <ChurchPartner
              description={item.short_description.html}
              fullDescription={item.full_description.html}
              logo={item.partner_logo.url}
              alt={item.partner_logo.alt}
              link={item.partner_link.url}
            />
          ))}
        </PartnersContainer>
      </Container>
    </Section>
  )
}

export default ChurchPartners

export const query = graphql`
  fragment PageDataBodyChurchPartners on PrismicPageDataBodyChurchPartners {
    id
    primary {
      heading {
        text
      }
    }
    items {
      full_description {
        html
      }
      partner_link {
        url
      }
      partner_logo {
        alt
        url
      }
      short_description {
        html
      }
    }
  }
`
