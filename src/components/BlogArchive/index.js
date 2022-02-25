import React, { useState } from "react"

import {
  Section,
  Container,
  Heading,
  BlogsContainer,
} from "./BlogArchiveElements"

import BlogCard from "./BlogCard"
import Pagination from "./Pagination/Pagination"

const Index = ({ posts }) => {
  // const [blogs, setBlogs] = useState([])
  // const [currentPage, setCurrentPage] = useState(1)
  // const [postsPerPage] = useState(2)

  // // Get current posts
  // const indexOfLastPost = currentPage * postsPerPage
  // const indexOfFirstPost = indexOfLastPost - postsPerPage

  // // Change page
  // const paginate = pageNumber => setCurrentPage(pageNumber)

  // const renderedPosts = posts.map(post => (
  //   <BlogCard
  //     link={post.url}
  //     heading={post.data.body[0].primary.heading.text}
  //     excerpt={post.data.body[0].primary.body_text.text}
  //     image={post.data.body[0].primary.image.url}
  //   ></BlogCard>
  // ))
  // setBlogs(renderedPosts)

  return (
    <Section>
      <Container>
        <Heading>Blog Archive</Heading>
        <BlogsContainer>
          {posts.map(post => (
            <BlogCard
              link={post.url}
              heading={post.data.body[0].primary.heading.text}
              excerpt={post.data.body[0].primary.body_text.text}
              image={post.data.body[0].primary.image.url}
            ></BlogCard>
          ))}
        </BlogsContainer>
        {/* <Pagination
          postsPerPage={postsPerPage}
          totalPosts={blogs.length}
          paginate={paginate}
        /> */}
      </Container>
    </Section>
  )
}

export default Index
