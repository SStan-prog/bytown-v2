import styled from "styled-components"
import { media } from "../../../../styles"

export const Card = styled.article`
  display: grid;
  grid-template-columns: 35% 60%;
  column-gap: 5%;
  width: 100%;

  align-items: center;

  ${media.tabland`
  grid-template-columns: 25% 70%;
  column-gap: 5%;

  align-items: start;
  `}

  ${media.phone`
  grid-template-columns: 1fr;
  
  `}
`
export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 25rem;

  object-fit: cover;

  ${media.phone`
  grid-template-columns: 1fr;
  margin-bottom: 2rem;
  `}
`
export const Text = styled.div``
export const Heading = styled.h3`
  font-size: var(--font-size-headingS);
  font-family: var(--font-heading);

  color: var(--color-black);

  ${media.tabland`
  font-size: var(--font-size-bodyL);
  `}
`
export const Excerpt = styled.p`
  font-size: var(--font-size-bodyM);
  font-family: var(--font-body);

  line-height: var(--line-height-body);
  text-decoration: none;
  color: var(--color-black);

  ${media.tabland`
  font-size: var(--font-size-bodyM);
  `}
`
