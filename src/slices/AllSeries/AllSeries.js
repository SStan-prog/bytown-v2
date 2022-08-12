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
  SeriesImageFilter,
  SeriesHeading,
} from "./AllSeriesElements"

const AllSeries = ({ slice }) => {
  {
    console.log(slice)
  }
  return (
    <Section>
      <Container>
        <Heading>{slice.primary.heading.text}</Heading>
        <SeriesArchive>
          {slice.items.map(item => (
            <SeriesLink to={item.series_archive.url}>
              <SeriesImageWrapper>
                <SeriesHeading>
                  {
                    item.series_archive.document.data.body[0].primary.heading
                      .text
                  }
                </SeriesHeading>
                <SeriesImage
                  src={
                    item.series_archive.document.data.body[0].primary.image.url
                  }
                  alt={
                    item.series_archive.document.data.body[0].primary.image.alt
                  }
                />
                <SeriesImageFilter />
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
                    heading {
                      text
                    }
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
