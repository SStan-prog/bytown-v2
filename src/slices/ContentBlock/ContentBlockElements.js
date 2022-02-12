import styled from "styled-components"
import { media } from "../../../styles"

export const ContentBlockSection = styled.section``
export const ContentBlockContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: ${props =>
    props.imagePlacement ? "40% 60%" : "60% 40%"};

  align-items: center;

  max-width: var(--max-width);
  margin: 0 auto;

  ${media.tabland`
  grid-template-columns: ${props =>
    props.imagePlacement ? "60% 40%" : "40% 60%"};
  `}

  ${media.phone`
  grid-template-columns: 1fr;
  `}
`

export const ContentBlockImageContainer = styled.div`
  width: 100%;
  height: 100%;

  grid-column: ${props => (props.imagePlacement ? "2" : "1")};
  grid-row: 1;

  ${media.phone`
  grid-row: 2;
  grid-column: 1;

  max-height: 35rem;
  `}

  & img {
    height: 100%;
    width: 100%;

    object-fit: cover;

    margin-bottom: -0.3rem;
  }
`

export const ContentBlockTextContainer = styled.div`
  grid-column: ${props => (props.imagePlacement ? "1" : "2")};
  grid-row: 1;

  padding: 0 5rem;
  line-height: var(--line-height-body);

  text-align: center;

  ${media.tabland`
  padding: 2.5rem; 
  line-height: var(--line-height-bodyS);
  `}

  ${media.phone`
 grid-column: 1;
 padding: 5rem 2.5rem; 
  `}
`
export const ContentBlockTextHeading = styled.h2`
  font-size: var(--font-size-headingM);
  font-family: var(--font-heading);
  font-weight: 700;
`
export const ContentBlockTextBody = styled.p`
  font-size: var(--font-size-bodyM);
  font-family: var(--font-body);
  line-height: var(--line-height-body);

  margin-bottom: 2rem;
`
