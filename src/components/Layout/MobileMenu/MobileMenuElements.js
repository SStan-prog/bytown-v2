import styled from "styled-components"
import { media } from "../../../../styles"
import { Link } from "gatsby"

export const Nav = styled.nav`
  position: absolute;
  z-index: 500;
  height: 100vh;
  width: 100vw;
  background-color: var(--color-white);

  transform: ${props => (props.open ? "translateX(0)" : "translateX(100%)")};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  list-style: none;

  margin: 7.5rem 0;
  height: 100%;
  max-height: 40rem;
  justify-content: space-around;
`
export const Item = styled.li``
export const ItemLink = styled(Link)`
  color: var(--color-black);
  text-decoration: none;
  font-family: var(--font-heading);
  font-size: var(--font-size-bodyL);

  text-align: center;
`
export const Cta = styled(Link)`
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

  background-color: var(--color-red);
  color: var(--color-white);
`
