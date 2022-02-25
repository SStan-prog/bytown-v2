import React from "react"

import { graphql } from "gatsby"

import {
  BibleVerseSection,
  BibleVerseContainer,
  BibleVerseText,
  BibleVerseLocation,
} from "./BibleVerseElements"

export const BibleVerse = ({ slice }) => {
  return (
    <BibleVerseSection>
      <BibleVerseContainer>
        <BibleVerseText>{slice.primary.verse.text}</BibleVerseText>
        <BibleVerseLocation>
          {slice.primary.verse_location.text}
        </BibleVerseLocation>
      </BibleVerseContainer>
    </BibleVerseSection>
  )
}

export const query = graphql`
  fragment PageDataBodyBibleVerse on PrismicPageDataBodyBibleVerse {
    primary {
      verse {
        text
      }
      verse_location {
        text
      }
    }
  }
  fragment HomepageDataBodyBibleVerse on PrismicHomepageDataBodyBibleVerse {
    primary {
      verse {
        text
      }
      verse_location {
        text
      }
    }
  }
  fragment BlogPostDataBodyBibleVerse on PrismicBlogPostDataBodyBibleVerse {
    primary {
      verse {
        text
      }
      verse_location {
        text
      }
    }
  }
`
