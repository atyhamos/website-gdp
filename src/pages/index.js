import React from 'react'

const IndexPage = () => {
  return (
    <>
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

export const Head = () => (
  <>
    <title>Green Doctors Programme</title>
    <link
      rel='stylesheet'
      href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css'
      integrity='sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor'
      crossorigin='anonymous'
    />
  </>
)
