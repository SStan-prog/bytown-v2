import styled from "styled-components"
import { media } from "../../../styles"

export const BibleVerseSection = styled.section`
  width: 100%;
  background-color: var(--color-red);
`
export const BibleVerseContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 7.5rem 5rem;

  color: var(--color-white);

  text-align: center;
  font-size: var(--font-size-verse);
  font-family: var(--font-heading);

  ${media.phonesmall`
  padding: 5rem 2.5rem;
  `}
`
export const BibleVerseText = styled.p`
  max-width: 65rem;
  margin-bottom: 2rem;
`
export const BibleVerseLocation = styled.p``
