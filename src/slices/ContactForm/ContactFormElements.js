import styled from "styled-components"
import { media } from "../../../styles"

export const Section = styled.section``
export const Container = styled.div`
  padding: 10rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 50rem;
`

export const Heading = styled.h2`
  font-size: var(--font-size-headingM);
  font-family: var(--font-heading);

  margin-bottom: 2rem;
`
export const Body = styled.div`
  font-size: var(--font-size-bodyM);
  font-family: var(--font-body);

  max-width: 60rem;
  text-align: center;

  line-height: var(--line-height-body);

  margin-bottom: 5rem;
  ${media.phone`
  max-width: none;
    width: 90%;
    margin: 0 5% 5rem;
  `}
`

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.phone`
  max-width: none;
    width: 90%;
    margin: 0 5% 5rem;
  `}
`
export const FormInputContainer = styled.div`
  margin: 1rem 0;
  width: 100%;

  display: flex;
  flex-direction: column;
`
export const FormInput = styled.input`
  font-size: var(--font-size-bodyM);
  font-family: var(--font-body);

  background: transparent;

  border: solid 0.2rem var(--color-black);

  padding: 1rem;
  margin-top: 0.5rem;
  outline: none;

  transition: all 0.2s ease;

  &:focus {
    border: solid 0.2rem var(--color-green);
  }
`
export const FormLabel = styled.label`
  font-size: var(--font-size-bodyS);
  font-family: var(--font-body);

  margin-left: 1rem;
`
export const FormTextarea = styled.textarea`
  font-size: var(--font-size-bodyM);
  font-family: var(--font-body);
  margin-top: 1rem;
  background: transparent;

  border: solid 0.2rem var(--color-black);

  height: 15rem;
  resize: none;
  padding: 1rem;
  outline: none;
  margin-bottom: 0.5rem;

  &:focus {
    border: solid 0.2rem var(--color-green);
  }
`
export const FormBtn = styled.button`
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

  background: var(--color-red);
  color: var(--color-white);
  border: none;

  min-width: 15rem;
  margin-top: 2rem;

  cursor: pointer;

  & :hover {
    transform: scale(1.05);
  }
`
