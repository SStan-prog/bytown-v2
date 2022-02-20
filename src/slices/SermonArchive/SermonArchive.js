import React from "react"
import { graphql } from "gatsby"

import { Section, Container, Heading, Archive } from "./SermonArchiveElements"
import Sermon from "./Sermon"

const SermonArchive = ({ slice }) => {
  console.log(slice)
  return (
    <Section>
      <Container>
        <Heading>{slice.primary.heading.text}</Heading>
        <Archive>
          {slice.items.map(item => (
            <Sermon
              title={item.sermon_title.text}
              date={item.sermon_date}
              link={item.sermon_link.url}
              preacher={item.sermon_preacher.text}
            />
          ))}
        </Archive>
      </Container>
    </Section>
  )
}

export default SermonArchive

export const query = graphql`
  fragment SermonSeriesDataBodySermonArchive on PrismicSermonSeriesDataBodySermonArchive {
    id
    items {
      sermon_date
      sermon_link {
        url
      }
      sermon_preacher {
        text
      }
      sermon_title {
        text
      }
    }
    primary {
      heading {
        text
      }
    }
  }
`
