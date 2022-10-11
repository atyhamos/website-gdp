import React from 'react'
import Navbar from '../components/Navbar'

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>Welcome to Green Doctors Programme!</h1>
        <h3>
          At Green Doctors Programme, we are passionate about creating a more
          sustainable world by recycling aluminium and polymer found in
          pharmaceutical blister foil packaging.
        </h3>
      </main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Green Doctors Programme</title>
