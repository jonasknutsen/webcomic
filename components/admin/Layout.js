import React from 'react'
import { Normalize, SystemFont } from '@jonasknutsen/styled-jsx-globals'

import AdminHeader from './Header'
import AdminFooter from './Footer'
import AdminMenu from './Menu'

const AdminLayout = (props) => (
  <div className='wrapper'>
    <Normalize />
    <SystemFont />
    <AdminHeader />
    <main>
      <AdminMenu />
      <section>
        {props.children}
      </section>
    </main>
    <AdminFooter />
    <style jsx global>{`
      body {
        font-size: 16px;
        height: 100%;
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
        margin: 0 auto;
        flex: 1;
        display: flex;
      }
    `}</style>
  </div>
)

export default AdminLayout
