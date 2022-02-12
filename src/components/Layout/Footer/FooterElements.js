import styled from "styled-components"
import { media } from "../../../../styles"
import { PrismicLink } from "@prismicio/react"

export const FooterElement = styled.footer`
  background-color: var(--color-grey-dark);
`
export const FooterContainer = styled.div`
  padding: 10rem;
  width: 100%;

  display: flex;
  justify-content: space-between;

  ${media.tabport`
  padding: 7.5rem 5rem;
  `}

  ${media.phone`
  display:grid;
  grid-template-columns: 1fr;
  row-gap: 5rem;
  `}

  ${media.phonesmall`
  padding: 5rem 2.5rem;
  `}
`

export const FooterLogoContainer = styled.div`
  width: 100%;
  max-width: 10rem;
  height: auto;

  ${media.tabland`
  display:none;
  `}
`

export const FooterList = styled.ul`
  list-style: none;
`
export const FooterListItem = styled.li`
  color: var(--color-white);
  font-family: var(--font-heading);
  font-size: var(--font-size-bodyM);

  margin: 0.5rem 0;
`
export const FooterListHeading = styled.span`
  font-size: var(--font-size-headingM);
`
export const FooterListInternalLink = styled(PrismicLink)`
  color: var(--color-white);
  text-decoration: none;

  font-size: var(--font-size-bodyM);
`
export const FooterListExternalLink = styled.a`
  color: var(--color-white);
  text-decoration: none;

  font-size: var(--font-size-bodyM);
`
