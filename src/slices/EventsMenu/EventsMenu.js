import React from "react"
import { graphql } from "gatsby"

import { Section, Container } from "./EventsMenuElements"

import Event from "./Event"

const EventsMenu = ({ slice }) => {
  return (
    <Section>
      <Container>
        {slice.items.map(item => (
          <Event
            icon={item.event_icon.url}
            alt={item.event_icon.alt}
            link={item.event_link.text}
            name={item.event_name.text}
          />
        ))}
      </Container>
    </Section>
  )
}

export default EventsMenu

export const query = graphql`
  fragment PageDataBodyEventMenu on PrismicPageDataBodyEventMenu {
    id
    items {
      event_icon {
        alt
        url
      }
      event_name {
        text
      }
      event_link {
        text
      }
    }
  }
`
