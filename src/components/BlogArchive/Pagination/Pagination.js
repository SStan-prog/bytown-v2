import React from "react"

import { Nav, List, Item, Link } from "./PaginationElements"

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <Nav>
      <List className="pagination">
        {pageNumbers.map(number => (
          <Item key={number} className="page-item">
            <Link
              onClick={() => paginate(number)}
              href="!#"
              className="page-link"
            >
              {number}
            </Link>
          </Item>
        ))}
      </List>
    </Nav>
  )
}

export default Pagination
