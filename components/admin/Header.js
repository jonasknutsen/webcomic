import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <header>
        <div className='title'>Generic Webcomic</div>
        <div className='user'>Kalle Kanon</div>
        <style jsx>{`
          header {
            background-color: #595959;
            color: #fff;
            font-weight: 700;
            padding: .3rem;
            display: flex;
            justify-content: space-between;
          }
        `}</style>
      </header>
    )
  }
}

export default Header
