import React from "react"
import { graphql } from "gatsby"

import {
  Section,
  Container,
  TextContainer,
  Heading,
  Body,
  Form,
  FormInputContainer,
  Label,
  Input,
  Button,
} from "./NewsletterElements"

const Newsletter = ({ slice }) => {
  console.log(slice)
  return (
    <Section>
      <Container>
        <TextContainer>
          <Heading>{slice.primary.heading.text}</Heading>
          <Body>{slice.primary.body_text.text}</Body>
          <Form
            name="newsletter"
            method="POST"
            data-netlify="true"
            action="/newsletter-thank-you"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <FormInputContainer>
              <Input
                type="email"
                name="email"
                placeholder="@email.com"
                autocomplete="off"
              />
              <Label>Email Address</Label>
            </FormInputContainer>
            <Button type="submit">Submit</Button>
          </Form>
        </TextContainer>
      </Container>
    </Section>
  )
}

export default Newsletter

export const query = graphql`
  fragment HomepageDataBodyNewsletterSignup on PrismicHomepageDataBodyNewsletterSignup {
    primary {
      heading {
        text
      }
      body_text {
        text
      }
    }
  }
`
