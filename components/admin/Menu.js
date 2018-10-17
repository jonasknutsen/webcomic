import React from 'react'

class AdminMenu extends React.Component {
  render () {
    return (
      <aside>
        <button>Dashboard</button>
        <button>Comic</button>
        <ul>
          <li>New</li>
          <li>List</li>
        </ul>
        <button>Blogpost</button>
        <ul>
          <li>New</li>
          <li>List</li>
        </ul>
        <button>Page</button>
        <ul>
          <li>New</li>
          <li>List</li>
        </ul>
        <button>Comments</button>
        <ul>
          <li>List</li>
        </ul>
        <button>Settings</button>
        <ul>
          <li>Page info</li>
        </ul>
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
            background-color: #595959;
            border: none;
            color: #fff;
            font-weight: 700;
            padding: .3rem;
          }
          ul {
            padding: 0 0 0 1rem;
            margin: 0;
            background-color: #696969;
          }
          li {
            list-style: none;
            display: block;
            margin: .2rem; 
          }
        `}</style>
      </aside>
    )
  }
}

export default AdminMenu
