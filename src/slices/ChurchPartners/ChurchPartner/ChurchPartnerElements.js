import styled from "styled-components"
import { media } from "../../../../styles"

export const Card = styled.div`
  background-color: transparent;
  width: 33rem;
  height: 39rem;

  perspective: 1000px;
`

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  transform: ${props => (props.flip ? "rotateY(180deg)" : "rotateY(0deg)")};
`

export const CardFront = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;

  padding: 2.5rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Description = styled.div`
  color: var(--color-black);
  font-size: var(--font-size-bodyS);
  font-family: var(--font-heading);

  margin: 2.5rem 1rem !important;
`

export const LogoContainer = styled.div`
  height: 10rem;
  width: 20rem;

  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const Logo = styled.img`
  width: 100%;
  height: auto;
`

export const CardBtn = styled.div`
  position: absolute;

  bottom: 4rem;

  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  background-color: var(--color-red);
  color: var(--color-white);

  font-size: var(--font-size-bodyS);
  font-family: var(--font-heading);

  cursor: pointer;

  white-space: nowrap;

  ${media.phone`
  bottom: 8rem;
  `}
`

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  background-color: var(--color-red);

  transform: rotateY(180deg);

  padding: 2.5rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FullDescription = styled.div`
  color: var(--color-white);
  font-size: var(--font-size-bodyXS);
  font-family: var(--font-body);

  transform: translateY(-2.5rem);
  margin: 2rem 0.7rem !important;

  & a {
    color: var(--color-white);
    font-weight: 700;
    text-decoration: none;
  }
`

export const CardBackBtn = styled.div`
  cursor: pointer;

  position: absolute;
  bottom: 1.5rem;

  padding: 0.5rem 1.5rem;
  background-color: var(--color-white);
  color: var(--color-black);

  font-size: var(--font-size-bodyS);
  font-family: var(--font-heading);

  border-radius: 2rem;
  white-space: nowrap;
`
