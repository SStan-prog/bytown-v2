import styled from "styled-components"
import { media } from "../../../styles"

export const Section = styled.section``
export const Container = styled.div`
  max-width: 90rem;
  margin: 0 auto;

  padding: 10rem 0;

  ${media.tabland`
  max-width: 90%;
  margin: 0 5%;
  `}
`
export const Heading = styled.h2`
  font-size: var(--font-size-headingM);
  font-family: var(--font-heading);

  text-align: center;
  margin-bottom: 5rem;
`
export const Archive = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 7.5rem;

  justify-items: center;

  ${media.tabland`
  grid-template-columns: 1fr 1fr;
  justify-items: left;
  `}

  ${media.phone`
  grid-template-columns: 1fr;
  justify-items: center;
  `}
`
