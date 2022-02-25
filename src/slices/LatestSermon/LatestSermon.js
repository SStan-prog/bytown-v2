import React from "react"
import { graphql } from "gatsby"

import {
  Section,
  Container,
  Image,
  Text,
  Title,
  SeriesDate,
  Preacher,
  Description,
  Btns,
  BtnRed,
  BtnRedAlt,
} from "./LatestSermonElements"

const LatestSermon = ({ slice, data }) => {
  const latest =
    slice.primary.latest_sermon_series.document.data.body[1].items.slice(-1)[0]
  const latestTitle = latest.sermon_title.text
  const latestDate = latest.sermon_date
  const latestPreacher = latest.sermon_preacher.text
  const latestLink = latest.sermon_link.url
  const latestDescription = latest.sermon_description.text

  const latestSeriesLink = slice.primary.latest_sermon_series.document.url
  const latestSeriesTitle =
    slice.primary.latest_sermon_series.document.data.body[0].primary.heading
      .text
  const latestSeriesImage =
    slice.primary.latest_sermon_series.document.data.body[0].primary.image.url
  const latestSeriesImageAlt =
    slice.primary.latest_sermon_series.document.data.body[0].primary.image.alt

  console.log(data)

  return (
    <Section>
      <Container>
        <Image src={latestSeriesImage} alt={latestSeriesImageAlt} />
        <Text>
          <Title>{latestTitle}</Title>
          <SeriesDate>
            {latestSeriesTitle} - {latestDate}
          </SeriesDate>
          <Preacher>By {latestPreacher}</Preacher>
          <Description> {latestDescription}</Description>
          <Btns>
            <BtnRed href={latestLink} target="_blank">
              Watch
            </BtnRed>
            <BtnRedAlt to={latestSeriesLink}>See Full Series</BtnRedAlt>
          </Btns>
        </Text>
      </Container>
    </Section>
  )
}

export default LatestSermon

export const query = graphql`
  fragment PageDataBodyLatestSermon on PrismicPageDataBodyLatestSermon {
    primary {
      latest_sermon_series {
        document {
          ... on PrismicSermonSeries {
            id
            url
            data {
              body {
                ... on PrismicSermonSeriesDataBodySermonArchive {
                  id
                  items {
                    sermon_date
                    sermon_description {
                      text
                    }
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
                }
                ... on PrismicSermonSeriesDataBodyHeader {
                  id
                  primary {
                    image {
                      url
                      alt
                    }
                    heading {
                      text
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
