import React from 'react'
import Navbar from '../components/Navbar'

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>Contact Us</h1>
        <h3>
          We look forward to hearing from you! Please fill out your details and
          we will be in touch shortly.
        </h3>
      </main>
    </>
  )
}

export default ContactPage

export const Head = () => <title>Green Doctors Programme - Contact Us</title>
