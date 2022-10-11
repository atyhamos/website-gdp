import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <Link style={{ padding: '1em' }} to='/'>
        Home
      </Link>
      <Link style={{ padding: '1em' }} to='/about'>
        About Us
      </Link>
      <Link style={{ padding: '1em' }} to='/solutions'>
        Our Solutions
      </Link>
      <Link style={{ padding: '1em' }} to='/blog'>
        Green Blog
      </Link>
      <Link style={{ padding: '1em' }} to='/contact'>
        Contact Us
      </Link>
    </nav>
  )
}

export default Navbar
