import styled from "styled-components"
import { media } from "../../../styles"

export const Section = styled.section``
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-green);
`
export const Heading = styled.h1`
  padding: 0 1rem;
  font-family: var(--font-heading);
  color: var(--color-white);
  font-size: var(--font-size-headingL);
  text-align: center;

  max-width: 70rem;

  margin-bottom: 5rem;
`
