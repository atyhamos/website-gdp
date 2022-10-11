import { Link } from 'gatsby'
import React, {useEffect} from 'react'
import ReactGA from 'react-ga';

const TRACKING_ID = 'UA-245233807-1';
ReactGA.initialize(TRACKING_ID);

const Navbar = () => {
  // Refactor and use proper React Router instead (https://github.com/remix-run/react-router)
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
