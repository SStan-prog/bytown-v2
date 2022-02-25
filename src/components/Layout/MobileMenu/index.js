import React from "react"

import { Nav, List, Item, ItemLink, Cta } from "./MobileMenuElements"

const index = ({ open, toggle }) => {
  return (
    <Nav open={open}>
      <List>
        <Item onClick={toggle}>
          <ItemLink to="/">Home</ItemLink>
        </Item>
        <Item onClick={toggle}>
          <ItemLink to="/who-we-are">Who We Are</ItemLink>
        </Item>
        <Item onClick={toggle}>
          <ItemLink to="/sermons">Sermons</ItemLink>
        </Item>
        <Item onClick={toggle}>
          <ItemLink to="/blog">Blog</ItemLink>
        </Item>
        <Item onClick={toggle}>
          <ItemLink to="/giving">Giving</ItemLink>
        </Item>
        <Item onClick={toggle}>
          <Cta to="/join-us">Cta</Cta>
        </Item>
      </List>
    </Nav>
  )
}

export default index
