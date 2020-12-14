import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { useFlexSearch } from 'react-use-flexsearch'
import * as queryString from 'query-string'

const SearchedPosts = ({ results }) =>
  results.length > 0 ? (
    results.map(node => {
      const date = node.date
      const title = node.title || node.slug
      const description = node.description
      const excerpt = node.excerpt
      const slug = node.slug

      return (
        <SearchedPostStyles key={slug}>
          <h3>
            <Link style={{ boxShadow: `none` }} to={`/blog${slug}`}>
              {title}
            </Link>
          </h3>
          <small>{date}</small>
          <p
            dangerouslySetInnerHTML={{
              __html: description || excerpt
            }}
          />
        </SearchedPostStyles>
      )
    })
  ) : (
    <p style={{ textAlign: 'center' }}>
      Sorry, couldn't find any posts matching this search.
    </p>
  )

const AllPosts = ({ posts }) => (
  <div style={{ margin: '20px 0 40px' }}>
    {posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <PostStyles key={node.fields.slug}>
          <h3>
            <Link style={{ boxShadow: `none` }} to={`/blog${node.fields.slug}`}>
              {title}
            </Link>
          </h3>
          <small>{node.frontmatter.date}</small>
          <p
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt
            }}
          />
        </PostStyles>
      )
    })}
  </div>
)

const SearchPosts = ({ posts, localSearchBlog, location, navigate }) => {
  const { search } = queryString.parse(location.search)
  const [query, setQuery] = useState(search || '')

  const results = useFlexSearch(
    query,
    localSearchBlog.index,
    JSON.parse(localSearchBlog.store)
  )

  return (
    <>
      <SearchBar>
        <svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
        <input
          id="search"
          type="search"
          placeholder="Search all posts"
          value={query}
          onChange={e => {
            navigate(e.target.value ? `/?search=${e.target.value}` : '/')
            setQuery(e.target.value)
          }}
        />
      </SearchBar>
      {query ? <SearchedPosts results={results} /> : <AllPosts posts={posts} />}
    </>
  )
}

export default SearchPosts

const SearchBar = styled.div`
  display: flex;
  border: 1px solid #dfe1e5;
  border-radius: 10px;
  margin: 1rem auto;
  width: 100%;
  height: 3rem;
  background: #fdfdfd;

  svg {
    margin: auto 1rem;
    height: 20px;
    width: 20px;
    color: #9aa0a6;
    fill: #9aa0a6;
  }

  input {
    display: flex;
    flex: 100%;
    height: 100%;
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    padding-right: 0.5rem;
    color: rgb(55, 53, 47);
    word-wrap: break-word;
    outline: none;
  }
`
const PostStyles = styled.div`
  margin: 2rem 0;
  padding-bottom: 1rem;
  ${'' /* border-bottom: 1px dashed var(--primaryColor); */}

  &:last-child {
    border-bottom: none;
  }
`
const SearchedPostStyles = styled.div`
  margin: 2rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px dashed var(--primaryColor);

  &:last-child {
    border-bottom: none;
  }
`
