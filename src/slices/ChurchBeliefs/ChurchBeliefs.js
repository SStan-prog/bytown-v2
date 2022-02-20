import React from "react"
import { graphql } from "gatsby"

import {
  Section,
  Container,
  Heading,
  BeliefsContainer,
} from "./ChurchBeliefsElements"

import ChurchBelief from "./ChurchBelief"

const ChurchBeliefs = ({ slice }) => {
  return (
    <Section>
      <Container>
        <Heading>{slice.primary.heading.text}</Heading>
        <BeliefsContainer>
          {slice.items.map(item => (
            <ChurchBelief
              heading={item.card_heading.text}
              body={item.card_body.html}
              icon={item.card_icon.url}
              alt={item.card_icon.alt}
            />
          ))}
        </BeliefsContainer>
      </Container>
    </Section>
  )
}

export default ChurchBeliefs

export const query = graphql`
  fragment PageDataBodyChurchBeliefs on PrismicPageDataBodyChurchBeliefs {
    id
    primary {
      heading {
        text
      }
    }
    items {
      card_body {
        html
      }
      card_heading {
        text
      }
      card_icon {
        alt
        url
      }
    }
  }
`
