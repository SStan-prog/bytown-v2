import styled from "styled-components"
import { media } from "../../../styles"

export const Section = styled.div``
export const Container = styled.div`
  padding: 10rem 0;
  width: 100%;
  max-width: 110rem;

  margin: 0 auto;

  ${media.tabland`
  width: 90%;
  margin: 0 5%;
  `}
`
export const Heading = styled.h2`
  font-size: var(--font-size-headingM);
  font-family: var(--font-heading);
  text-align: center;

  margin-bottom: 5rem;
`
export const BlogsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  row-gap: 5rem;
`
