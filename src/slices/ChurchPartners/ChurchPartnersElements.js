import styled from "styled-components"
import { media } from "../../../styles"

export const Section = styled.section`
  padding: 15rem 0;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h2`
  font-size: var(--font-size-headingM);
  font-family: var(--font-heading);
  font-weight: 700;

  text-align: center;

  margin-bottom: 2.5rem;
`
export const PartnersContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  max-width: 160rem;

  margin: 0 -2.5rem;

  & > div {
    margin: 2.5rem;
  }

  ${media.laptop`
  max-width: 140rem;
  `}
`
