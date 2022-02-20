import React from "react"
import { graphql } from "gatsby"

import {
  Section,
  Container,
  Heading,
  Body,
  Form,
  FormInputContainer,
  FormInput,
  FormLabel,
  FormTextarea,
  FormBtn,
} from "./ContactFormElements"

const ContactForm = ({ slice }) => {
  return (
    <Section>
      <Container>
        <Heading>{slice.primary.heading.text}</Heading>
        <Body
          dangerouslySetInnerHTML={{ __html: `${slice.primary.body1.html}` }}
        />
        <Form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <FormInputContainer>
            <FormLabel>Name</FormLabel>
            <FormInput type="text" required />
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel>Email Address</FormLabel>
            <FormInput type="text" required />
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel>Questions or Message</FormLabel>
            <FormTextarea required />
          </FormInputContainer>
          <FormBtn type="submit">Send</FormBtn>
        </Form>
      </Container>
    </Section>
  )
}

export default ContactForm

export const query = graphql`
  fragment PageDataBodyContactForm on PrismicPageDataBodyContactForm {
    id
    primary {
      form_id {
        text
      }
      body1 {
        html
      }
      heading {
        text
      }
    }
  }
`
