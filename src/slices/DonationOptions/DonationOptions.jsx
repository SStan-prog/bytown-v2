import React from "react"
import { graphql } from "gatsby"
import {
  Section,
  Container,
  Heading,
  OptionsContainer,
} from "./DonationOptionsElements"

import DonationOption from "./DonationOption"

const DonationOptions = ({ slice }) => {
  console.log(slice)
  return (
    <Section>
      <Container>
        <Heading>{slice.primary.heading.text}</Heading>
        <OptionsContainer>
          {slice.items.map(item => (
            <DonationOption
              heading={item.heading.text}
              body={item.description.html}
              icon={item.icon.url}
              alt={item.icon.alt}
            />
          ))}
        </OptionsContainer>
      </Container>
    </Section>
  )
}

export default DonationOptions

export const query = graphql`
  fragment PageDataBodyDonationOptions on PrismicPageDataBodyDonationOptions {
    id
    primary {
      heading {
        text
      }
    }
    items {
      description {
        html
      }
      heading {
        text
      }
      icon {
        alt
        url
      }
    }
  }
`
