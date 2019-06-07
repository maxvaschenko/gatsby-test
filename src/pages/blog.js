import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import inDevImage from '../images/in-dev.gif'
import { BlogWrapper } from '../styles/styled'

const Blog = () => {
  const [stories, changeStories] = useState([])

  useEffect(async() => {
    const data = await fetch('https://medium.com/@smart_dev/latest?format=json', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 2284be290076026ed961de161ca60c0e020a2b7d7b3edb5684f331adcffca39d1',
      },
    })
    changeStories(data)
  }, [])
  console.log(stories)
  return (
    <>
      <Layout>
        <BlogWrapper>
          <SEO title="Blog" />
          <h1>Hello. Blog now is in development. Keep for updates</h1>
          <div className="image-wrapper">
            <img src={inDevImage} alt="" />
          </div>
          <Link to="/">Go back home</Link>
        </BlogWrapper>
      </Layout>
    </>
  )
}

export default Blog
