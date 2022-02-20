import styled from "styled-components"
import { media } from "../../../../styles"

export const Container = styled.div`
  ${media.phone`
  text-align:center;
  `}
`
export const Title = styled.h3`
  font-size: var(--font-size-bodyL);
  font-family: var(--font-heading);
  font-weight: 700;

  margin-bottom: 1rem;
`
export const Date = styled.p`
  font-size: var(--font-size-bodyS);
  font-family: var(--font-body);
  color: #7c7c7c;
  margin-bottom: 1rem;
`
export const Preacher = styled.p`
  font-size: var(--font-size-bodyM);
  font-family: var(--font-body);
  margin-bottom: 2rem;
`
export const Btn = styled.a`
  display: inline-block;
  line-height: 1.6;
  font-size: var(--font-size-btn);
  font-family: var(--font-heading);
  font-weight: 400;

  text-decoration: none;

  padding: 0.5rem 2rem;
  border-radius: 5rem;

  transition: all 0.3s ease;

  max-height: min-content;
  white-space: nowrap;
  min-width: 12.5rem;
  text-align: center;

  color: var(--color-white);
  background-color: var(--color-red);

  & :hover {
    transform: scale(1.05);
  }
`
