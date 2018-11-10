import React from 'react'
import { Normalize, SystemFont } from '@jonasknutsen/styled-jsx-globals'

import Header from './Header'
import Footer from './Footer'
import GaWrapper from '../lib/analytics'

const Layout = (props) => (
  <div className='wrapper'>
    <Normalize />
    <SystemFont />
    <Header />
    <main>
      {props.children}
    </main>
    <Footer />
    <style jsx global>{`
      body {
        font-size: 16px;
        line-height: 1.375em;
        height: 100%;
        padding: 0;
        margin: 0;
        background-color: #fff;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
      }
      #__next {
        height: 100%;
      }
      .wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }
      main {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        flex: 1;
      }
      h1, h2, h3, h4, h5 {
        font-variant: small-caps;
        letter-spacing: -2px;
      }
      h1 {
        font-size: 3em;
        line-height: 1.05em;
      }
      h2 {
        font-size: 2.25em;
        line-height: 1.25em;
      }
      h3 {
        font-size: 1.75em;
        line-height: 1.25em;
      }
      h4 {
        font-size: 1.125em;
        line-height: 1.22em;
      }
    `}</style>
  </div>
)

export default GaWrapper(Layout)
