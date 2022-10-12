import React from 'react'

const BlogPage = () => {
  return (
    <>
      <main>
        <h1>Green Blog</h1>
        <h3>Sign up for our mailing list and never miss a new post!</h3>
      </main>
    </>
  )
}

export default BlogPage

export const Head = () => (
  <>
    <title>Green Doctors Programme - Green Blog</title>
    <link
      rel='stylesheet'
      href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css'
      integrity='sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor'
      crossorigin='anonymous'
    />
  </>
)
