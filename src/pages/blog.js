import React from 'react'
import Navbar from '../components/Navbar'

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>Green Blog</h1>
        <h3>Sign up for our mailing list and never miss a new post!</h3>
      </main>
    </>
  )
}

export default BlogPage

export const Head = () => <title>Green Doctors Programme - Green Blog</title>
