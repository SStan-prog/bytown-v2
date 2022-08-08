import React from "react"
import { Section, Container, Heading } from "./ThankYouElements"
import { ButtonWhite } from "../Buttons"

const index = ({ heading }) => {
  return (
    <Section>
      <Container>
        <Heading>{heading}</Heading>
        <ButtonWhite link={"/"} btnText={"Back to Home"} />
      </Container>
    </Section>
  )
}

export default index
