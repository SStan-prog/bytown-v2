import styled from "styled-components"
import { media } from "../../../styles"

export const Section = styled.section`
  width: 100%;
`
export const Container = styled.div`
  width: 100%;
  max-width: 80rem;

  margin: 0 auto;

  padding: 5rem 0;

  ${media.tabport`
  max-width: 90%;
  padding: 5rem 5%;
  `}

  ${media.phone`
  max-width: 92%;
  padding: 5rem 2.5%;
  `}

  & h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-heading);
    line-height: var(--line-height-body);
  }

  & h2 {
    font-size: var(--font-size-headingM);
  }

  & h3 {
    font-size: var(--font-size-headingS);
  }

  & h4 {
    font-size: var(--font-size-bodyL);
  }

  & p {
    margin: 1.6rem 0;
  }

  & p,
  ul,
  ol {
    font-size: var(--font-size-bodyM);
    font-family: var(--font-body);
    line-height: var(--line-height-body);

    width: 100%;

    & .center-align {
      width: 100%;
      text-align: center;

      margin: 0 auto;
      display: inline-block;
    }
  }

  & a {
    color: var(--color-red);
    text-decoration: none;
    font-weight: 700;
  }

  & ul,
  ol {
    margin-left: 2rem;
  }

  & li {
    margin: 1rem 0;
  }

  & img {
    height: auto;
    width: 100%;

    margin: 2rem 0;
  }
`
