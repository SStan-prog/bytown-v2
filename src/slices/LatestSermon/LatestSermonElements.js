import styled from "styled-components"
import { media } from "../../../styles"
import { Link } from "gatsby"

export const Section = styled.section``
export const Container = styled.article`
  padding: 10rem;
  display: grid;
  grid-template-columns: 50% 45%;
  column-gap: 5%;

  align-items: center;

  max-width: 160rem;
  margin: 0 auto;

  ${media.tabland`
  padding: 10rem 5rem;
  `}

  ${media.tabport`
 grid-template-columns: 1fr;
 row-gap: 5rem;

 padding: 10rem;
  `}

  ${media.phone`
 padding: 5rem;
  `}

  ${media.phonesmall`
 padding: 5rem 1rem;
  `}
`

export const Image = styled.img`
  width: 100%;
  height: auto;
`

export const Text = styled.div``
export const Title = styled.h2`
  font-family: var(--font-heading);
  font-size: var(--font-size-bodyL);
  margin-bottom: 1rem;
`
export const SeriesDate = styled.p`
  font-family: var(--font-body);
  font-size: var(--font-size-bodyM);
  margin-bottom: 1rem;
  color: #7c7c7c;
`

export const Preacher = styled.p`
  font-family: var(--font-body);
  font-size: var(--font-size-bodyM);
  margin-bottom: 3rem;
`
export const Description = styled.p`
  font-family: var(--font-body);
  font-size: var(--font-size-bodyM);

  line-height: var(--line-height-body);
  margin-bottom: 2rem;
`

export const Btns = styled.div`
  display: flex;
  width: 100%;
  max-width: 35rem;

  justify-content: space-between;

  ${media.phonesmall`
flex-direction: column;
height: 10rem;
max-width: 17.5rem;
  `}
`

export const BtnRed = styled.a`
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

export const BtnRedAlt = styled(Link)`
  display: inline-block;
  line-height: 1.6;
  font-size: var(--font-size-btn);
  font-family: var(--font-heading);
  font-weight: 400;

  text-decoration: none;

  padding: 0.3rem 1.8rem;
  border-radius: 5rem;
  border: solid 0.2rem var(--color-red);
  color: var(--color-red);

  transition: all 0.3s ease;

  max-height: min-content;
  white-space: nowrap;
  min-width: 12.5rem;
  text-align: center;

  & :hover {
    transform: scale(1.05);
  }
`
