import styled from "styled-components"
import { media } from "../../../../styles"

export const Container = styled.div`
  margin: 2.5rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.phonesmall`
  margin: 5rem 5rem;
  `}
`

export const IconContainer = styled.div`
  margin-bottom: 2rem;

  background-color: var(--color-white);

  padding: 4rem;
  border-radius: 50%;
`

export const Icon = styled.img``
export const Link = styled.a`
  text-decoration: none;
`
export const Name = styled.p`
  padding: 0.7rem 1.5rem;
  border-radius: 2rem;
  background-color: var(--color-white);
  color: var(--color-black);
  font-size: var(--font-size-bodyM);
  font-family: var(--font-heading);

  font-weight: 700;
`
