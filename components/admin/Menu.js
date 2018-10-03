import React from 'react'

class AdminMenu extends React.Component {
  render () {
    return (
      <aside>
        <button>Dashboard</button>
        <button>Comic</button>
        <button>Blogpost</button>
        <button>Page</button>
        <button>Comments</button>
        <button>Settings</button>
        <style jsx>{`
          aside {
            background-color: #696969;
            color: #fff;
            width: 110px;
          }
          button {
            display: block;
            width: 100%;
            text-align: left;
            background-color: #696969;
            border: none;
            color: #fff;
            font-weight: 700;
            padding: .3rem;
          } 
        `}</style>
      </aside>
    )
  }
}

export default AdminMenu
