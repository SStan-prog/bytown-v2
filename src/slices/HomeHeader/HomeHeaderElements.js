import styled from "styled-components"
import { media } from "../../../styles"

export const HeaderElement = styled.header``
export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;

  ${media.tabland`
  grid-template-columns: 1fr;

  `}
`

export const HeaderTextContainer = styled.div`
  color: var(--color-black);
  padding: 5rem 2.5rem 5rem 7.5rem;

  line-height: var(--line-height-body);

  ${media.laptop`
  padding: 5rem 2.5rem;
  `}

  ${media.tabland`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props.bg});
  background-size: cover;
  background-position: center center;

  color: var(--color-white);
  text-align: center;

  display: flex; 
  flex-direction: column;
  align-items:center;

  padding-top: 10rem;

  `}
`
export const HeaderLogo = styled.div`
  max-width: 18rem;
  width: 100%;
  height: auto;

  margin-bottom: 5rem;

  ${media.tabland`
  display: none;
  `}
`
export const HeaderHeading = styled.h1`
  font-family: var(--font-heading);
  font-size: var(--font-size-headingL);
  font-weight: 700;
  max-width: 60rem;
`
export const HeaderBody = styled.p`
  font-family: var(--font-body);
  font-size: var(--font-size-bodyM);
  font-weight: 400;

  margin-bottom: 2rem;

  max-width: 60rem;
`

export const HeaderButtons = styled.div`
  display: flex;
  width: 100%;
  max-width: 45rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  margin: 0 -1rem;
  max-width: 50rem;

  & a {
    margin: 1rem;
  }

  ${media.tabland`
flex-direction: column;
margin: 1.5rem;
  `}
`

export const HeaderImageContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),
    url(${props => props.bg});
  background-size: cover;
  background-position: center center;

  ${media.tabland`
  display: none;
  `}
`
