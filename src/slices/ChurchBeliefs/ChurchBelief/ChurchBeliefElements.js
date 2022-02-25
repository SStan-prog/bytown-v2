import styled from "styled-components"
import { media } from "../../../../styles"

export const Card = styled.div`
  background-color: transparent;
  width: 30rem;
  height: 35rem;

  perspective: 1000px;

  margin: 0 auto;

  ${media.laptop`
  width: 25rem;
  height: 30rem;
  `}
`

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  transform: ${props => (props.flip ? "rotateY(180deg)" : "rotateY(0deg)")};

  transform-origin: calc(50% + 2.5rem) calc(50% + 2.5rem);
`

export const CardFront = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;

  background-color: var(--color-red);

  padding: 2.5rem 1rem;

  /* display: flex;
  flex-direction: column;
  align-items: center; */
`

export const Heading = styled.h3`
  color: var(--color-white);
  font-size: var(--font-size-headingS);
  font-family: var(--font-heading);

  ${media.laptop`
  bottom: 7rem;
  `}
`

export const IconContainer = styled.div`
  position: absolute;

  bottom: 10rem;
  left: 50%;
  transform: translateX(calc(-50% - 2.5rem));

  background: var(--color-white);

  height: 10rem;
  width: 10rem;
  border-radius: 50%;

  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  ${media.laptop`
  bottom: 7rem;
  `}
`
export const Icon = styled.img`
  width: 100%;
  height: auto;

  max-width: 8rem;
  max-height: 8rem;
`

export const CardBtn = styled.div`
  position: absolute;

  bottom: -2rem;
  left: 50%;
  transform: translateX(calc(-50% - 2.5rem));

  cursor: pointer;
`
export const CardBtnLine = styled.div`
  background: var(--color-white);

  width: 1rem;
  height: 4rem;

  border-radius: 2rem;

  margin: 0;

  & :after {
    content: "";
    display: inline-block;
    background: var(--color-white);
    width: 1rem;
    height: 4rem;
    border-radius: 2rem;

    transform: rotate(90deg);
    transform-origin: 50% 50%;
  }
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
export const CardBody = styled.div`
  color: var(--color-white);
  font-size: calc(var(--font-size-bodyS) - 0.1rem);
  font-family: var(--font-body);

  transform: translateY(-2.5rem);
  margin: 2rem 0.7rem !important;

  ${media.laptop`
  font-size: var(--font-size-bodyXS);
  `}
`

export const CardBackBtn = styled.div`
  cursor: pointer;

  position: absolute;
  bottom: -2rem;

  transform: rotate(45deg);
`
