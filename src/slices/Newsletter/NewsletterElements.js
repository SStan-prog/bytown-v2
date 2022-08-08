import styled from "styled-components"
import { media } from "../../../styles"

export const Section = styled.section``
export const Container = styled.div`
  background-color: var(--color-red);

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 5rem;
`

export const TextContainer = styled.div`
  color: var(--color-white);
  text-align: center;
  max-width: 70rem;
`
export const Heading = styled.h2`
  font-family: var(--font-heading);
  font-size: var(--font-size-headingM);
  margin-bottom: 1rem;
`
export const Body = styled.p`
  font-family: var(--font-body);
  font-size: var(--font-size-bodyM);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormInputContainer = styled.div`
  margin: 5rem 0 0 0;
  width: 100%;
  max-width: 25rem;

  display: flex;
  flex-direction: column;

  margin-right: 2rem;

  position: relative;
`

export const Input = styled.input`
  font-size: var(--font-size-bodyM);
  font-family: var(--font-body);
  color: var(--color-white);

  background: transparent;

  border: none;
  border-bottom: solid 0.2rem var(--color-white);

  padding: 1rem;
  margin-top: 0.5rem;
  outline: none;

  transition: all 0.2s ease;

  ::placeholder {
    opacity: 0;
  }
`

export const Label = styled.label`
  font-size: var(--font-size-bodyS);
  font-family: var(--font-body);

  align-self: flex-start;

  position: absolute;
  pointer-events: none;

  transform: translate(1rem, 1.8rem);

  transition: 0.2s ease all;

  ${Input}:focus ~ & {
    transform: translate(1rem, -2.2rem);
    font-weight: 700;
  }

  ${Input}:not(:placeholder-shown)~ & {
    transform: translate(1rem, -2.2rem);
    font-weight: 700;
  }
`
export const Button = styled.button`
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

  background-color: var(--color-white);
  color: var(--color-black);
  border: none;

  min-width: 15rem;
  margin-top: 2rem;

  cursor: pointer;

  & :hover {
    transform: scale(1.05);
  }
`
