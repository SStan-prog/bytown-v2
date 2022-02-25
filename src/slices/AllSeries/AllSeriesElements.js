import styled from "styled-components"
import { media } from "../../../styles"
import { Link } from "gatsby"

export const Section = styled.section``
export const Container = styled.div`
  margin: 5rem auto 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h2`
  font-family: var(--font-heading);
  font-size: var(--font-size-headingM);
  margin-bottom: 5rem;
`
export const SeriesArchive = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;

  max-width: 140rem;
  width: 100%;

  padding: 0 10rem;

  ${media.tabland`
  gap: 5rem;
  padding: 0 5rem;
  `}

  ${media.tabport`
  grid-template-columns: 1fr;
  max-width: 60rem;
  `}

  ${media.phone`
  padding: 0 2.5rem;
  `}
`
export const SeriesLink = styled(Link)``
export const SeriesImageWrapper = styled.div`
  max-width: 100%;
  height: auto;
`
export const SeriesImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 30rem;

  ${media.tabport`
  width: 100%;
  height: auto;
  `}
`
