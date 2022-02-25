import React from "react"
import { graphql } from "gatsby"

import {
  Section,
  Container,
  Heading,
  SeriesArchive,
  SeriesLink,
  SeriesImage,
  SeriesImageWrapper,
} from "./AllSeriesElements"

const AllSeries = ({ slice }) => {
  console.log(slice.items[1].series_archive.document)
  return (
    <Section>
      <Container>
        <Heading>{slice.primary.heading.text}</Heading>
        <SeriesArchive>
          {slice.items.map(item => (
            <SeriesLink to={item.series_archive.url}>
              <SeriesImageWrapper>
                <SeriesImage
                  src={
                    item.series_archive.document.data.body[0].primary.image.url
                  }
                  alt={
                    item.series_archive.document.data.body[0].primary.image.alt
                  }
                />
              </SeriesImageWrapper>
            </SeriesLink>
          ))}
        </SeriesArchive>
      </Container>
    </Section>
  )
}

export default AllSeries

export const query = graphql`
  fragment PageDataBodyAllSeries on PrismicPageDataBodyAllSeries {
    primary {
      heading {
        text
      }
    }
    items {
      series_archive {
        id
        url
        document {
          ... on PrismicSermonSeries {
            id
            data {
              body {
                ... on PrismicSermonSeriesDataBodyHeader {
                  id
                  primary {
                    image {
                      url
                      alt
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
