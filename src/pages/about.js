import React from 'react'
import Navbar from '../components/Navbar'

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>About Us</h1>
        <h3>
          At Green Doctors Programme, we are passionate about creating a more
          sustainable world for everyone.
        </h3>
      </main>
    </>
  )
}

export default AboutPage

export const Head = () => <title>Green Doctors Programme - About</title>
