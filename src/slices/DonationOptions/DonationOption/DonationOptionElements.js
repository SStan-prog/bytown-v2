import styled from "styled-components"
import { media } from "../../../../styles"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 35rem;

  text-align: center;

  ${media.tabport`
max-width: 45rem;
`}
`
export const Icon = styled.img`
  margin-bottom: 4rem;
`
export const Heading = styled.p`
  font-family: var(--font-heading);
  font-size: var(--font-size-bodyL);
  font-weight: 700;
  margin-bottom: 1rem;
`
export const Body = styled.div`
  font-family: var(--font-body);
  font-size: var(--font-size-bodyM);

  & a {
    color: var(--color-red);
    text-decoration: none;
  }
`
