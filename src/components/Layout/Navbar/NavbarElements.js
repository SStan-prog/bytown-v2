import styled from "styled-components"
import { media } from "../../../../styles"
import { PrismicLink } from "@prismicio/react"

export const NavContainer = styled.nav`
  position: absolute;
  right: 5rem;
  top: 5rem;
  width: calc(60% - 10rem);

  ${media.tabland`
  width: calc(100% - 2.5rem);

left: 2.5rem;
  top: 2.5rem;

  display: flex;
  justify-content: space-between;
  `}
`

export const NavLogoContainer = styled.div`
  max-width: 15rem;
  width: 100%;
  height: auto;

  display: none;

  ${media.tabland`
  display:block
  `}
`

export const NavList = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  list-style: none;

  ${media.tabland`
  display:none;
  `}
`
export const NavItem = styled.li``
export const NavLink = styled(PrismicLink)`
  color: var(--color-white);
  text-decoration: none;
  font-family: var(--font-heading);
  font-size: var(--font-size-bodyL);
`

export const NavMobileBtn = styled.div`
  height: 100%;
  width: 3rem;

  margin-right: 2.5rem;

  display: none;

  position: relative;
  z-index: 999;

  ${media.tabland`
  display:block;
  `}
`
export const NavMobileLine = styled.div`
  background: ${props =>
    props.open ? "var(--color-black)" : "var(--color-white)"};
  height: 0.3rem;
  margin: 0.5rem 0;
  width: 100%;
`
