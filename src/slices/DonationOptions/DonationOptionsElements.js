import styled from "styled-components"
import { media } from "../../../styles"

export const Section = styled.section``
export const Container = styled.div`
  padding: 10rem;
  margin: 0 auto;

  ${media.tabport`
  padding: 10rem 1rem;
`}
`

export const Heading = styled.h2`
  text-align: center;
  font-family: var(--font-heading);
  font-size: var(--font-size-headingM);

  margin-bottom: 7.5rem;
`

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  margin: 0 -2.5rem;

  & div {
    margin: 2.5rem 2.5rem;
  }
`
