import React from 'react'
import Link from 'next/link'

import About from './svg/About'
import Archive from './svg/Archive'
import Blog from './svg/Blog'
import Instagram from './svg/Instagram'
import Logo from './svg/Logo'
import Twitter from './svg/Twitter'

class Header extends React.Component {
  render () {
    return (
      <header>
        <div className='logo-wrapper'>
          <Logo className='header' />
        </div>
        <div className='social'>
          <a href='https://instagram.com/drawnfieldnotes' className='social-link'><Instagram className='header' /></a>
          <a href='https://twitter.com/drawnfieldnotes' className='social-link'><Twitter className='header' /></a>
        </div>
        <style jsx>{`
          header {
            height: 3rem;
            display: flex;
            justify-content: space-between;
            padding: .2rem .3rem;
            background-color: #E7903C;
          }
          .social {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            height: 3rem;
          }
          .logo-wrapper {
            height: 3rem;
          }
          .social-link {
            height: 1.5rem
          }
          @media only screen and (max-width: 667px) {
            header {
              height: 2rem;
            }
            .social {
              height: 2rem;
            }
            .social-link {
            height: 1rem
          }
          }
        `}</style>
      </header>
    )
  }
}

export default Header
