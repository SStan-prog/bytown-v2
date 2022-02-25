import styled from "styled-components"
import { media } from "../../../styles"

export const ContentBlockSection = styled.section``
export const ContentBlockContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.imagePlacement ? "row-reverse" : "row")};
  align-items: center;

  width: 100%;
  height: 100%;

  max-width: var(--max-width);
  margin: 0 auto;

  ${media.tabport`
  flex-direction: column-reverse;
  `}
`

export const ContentBlockImageContainer = styled.div`
  width: 100%;

  max-width: 120rem;

  align-self: stretch;

  ${media.phone`
  max-height: 35rem;
  align-self: center;
  `}

  & img {
    height: 100%;
    width: 100%;

    margin-bottom: -0.3rem;
    max-height: 70rem;

    object-fit: cover;

    ${media.tabport`
    height: auto;
    max-height: 35rem;
  `}
  }
`

export const ContentBlockTextContainer = styled.div`
  padding: 0 10rem;
  line-height: var(--line-height-body);
  margin: 0 auto;

  /*  TEXT ALIGNMENT */

  ${props => {
    if (props.textAlignment === "left") {
      return `
       text-align: left;
    `
    } else if (props.textAlignment === "center") {
      return `
      text-align: center;
    `
    } else {
      return `
      text-align: right;
    `
    }
  }}

  /*  IMAGE WIDTH  */

  ${props => {
    if (props.imageWidth === "short") {
      return `
        max-width: 120rem;
    `
    } else if (props.imageWidth === "half-size") {
      return `
      max-width: 50%;
    `
    } else {
      return `
      max-width: 60rem;
    `
    }
  }}

${media.laptop`
  padding: 2.5rem 5rem;
  `};

  ${media.tabland`

    /*  IMAGE WIDTH  */
  ${props => {
    if (props.imageWidth === "short") {
      return `
        
        max-width: 60rem;
    `
    } else if (props.imageWidth === "half-size") {
      return `
      max-width: 60rem;
    `
    } else {
      return `
      max-width: 40rem;
    `
    }
  }}
  `}

  ${media.tabport`
  max-width: 60rem; 
  padding: 5rem;

  text-align: center;
  `};

  ${media.phone`
 grid-column: 1;
 padding: 5rem 2.5rem; 
  `};
`
export const ContentBlockTextHeading = styled.h2`
  font-size: var(--font-size-headingM);
  font-family: var(--font-heading);
  font-weight: 700;
`
export const ContentBlockTextBody = styled.div`
  font-size: var(--font-size-bodyM);
  font-family: var(--font-body);
  line-height: var(--line-height-body);

  margin-bottom: 2rem;

  & a {
    color: var(--color-red);
    text-decoration: none;
  }
`
