import React from 'react'
import Link from 'next/link'

class Header extends React.Component {
  render () {
    return (
      <header>
        <div className='title'>Generic Webcomic</div>
        <nav>
          <ul>
            <li><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/archive'><a>Archive</a></Link></li>
            <li><Link href='/blog'><a>Blog</a></Link></li>
            <li><Link href='/about'><a>About</a></Link></li>
          </ul>
        </nav>
        <style jsx>{`
          header {
            text-align: center;
          }
          .title {
            font-size: 3rem;
          }
          nav {
            
          }
          ul {
            display: flex;
            padding-left: 0;
          }
          li {
            list-style: none;
            padding: 1rem;
          }
        `}</style>
      </header>
    )
  }
}

export default Header
