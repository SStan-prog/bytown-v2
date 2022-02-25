import React from "react"

import { Nav, List, Item, ItemLink, Cta } from "./MobileMenuElements"

const index = ({ open }) => {
  return (
    <Nav open={open}>
      <List>
        <Item>
          <ItemLink to="/">Home</ItemLink>
        </Item>
        <Item>
          <ItemLink to="/who-we-are">Who We Are</ItemLink>
        </Item>
        <Item>
          <ItemLink to="/sermons">Sermons</ItemLink>
        </Item>
        <Item>
          <ItemLink to="/blog">Blog</ItemLink>
        </Item>
        <Item>
          <ItemLink to="/giving">Giving</ItemLink>
        </Item>
        <Item>
          <Cta to="/join-us">Cta</Cta>
        </Item>
      </List>
    </Nav>
  )
}

export default index
