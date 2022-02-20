import styled from "styled-components"
import { media } from "../../../styles"
import { PrismicLink } from "@prismicio/react"

export const Btn = styled(PrismicLink)`
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

  & :hover {
    transform: scale(1.05);
  }
`

export const BtnRed = styled(Btn)`
  background-color: var(--color-red);
  color: var(--color-white);
`
export const BtnGreen = styled(Btn)`
  background-color: var(--color-green);
  color: var(--color-white);
`
export const BtnWhite = styled(Btn)`
  background-color: var(--color-white);
  color: var(--color-black);
`
