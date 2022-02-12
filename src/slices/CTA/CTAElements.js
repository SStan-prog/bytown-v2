import styled from "styled-components"
import { media } from "../../../styles"

export const CTASection = styled.section``

export const CTAContainer = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: 70% 30%;

  column-gap: 5rem;

  background-color: var(--color-red);
  padding: 5rem 10rem;

  ${media.tabport`
    grid-template-columns: 1fr;
    row-gap: 2.5rem;
    justify-items:center;
  `}

  ${media.phone`
  padding: 5rem;
  `}

  ${media.phonesmall`
  padding: 5rem 2rem;
  row-gap: 2.5rem;
  `}
`

export const CTAText = styled.div`
  & p {
    font-family: var(--font-heading);
    font-size: var(--font-size-verse);
    color: var(--color-white);

    ${media.tabport`
   text-align:center;
  `}
  }
`

export const CTAButtons = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  & a {
    margin: 1rem 0;
  }
`
