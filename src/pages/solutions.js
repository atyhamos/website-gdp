import React from 'react'
import Navbar from '../components/Navbar'

const SolutionsPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>Our Solutions</h1>
        <h3>
          Green Doctors Programme offers solutions that empower hospitals,
          clinics and other medical service providers the ability to go green by
          recycling medical packaging waste. We create a circular economy for
          polymer and aluminium found in blister packaging, reducing waste of
          resources.
        </h3>
      </main>
    </>
  )
}

export default SolutionsPage

export const Head = () => <title>Green Doctors Programme - Our Solutions</title>
