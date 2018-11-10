import React from 'react'

class Footer extends React.Component {
  render () {
    return (
      <footer>
        <ul>
          <li><a href='https://instagram.com/drawnfieldnotes'>Drawn Field Notes on Instagram</a></li>
          <li><a href='https://twitter.com/drawnfieldnotes'>Drawn Field Notes on Twitter</a></li>
          <li><a href='https://patreon.com/drawnfieldnotes'>Drawn Field Notes on Patreon</a></li>
        </ul>
        <style jsx>{`
          footer {
            text-align: center;
            background-color: #E7903C;
            padding: .2rem .3rem;
          }
          ul {
            list-style: none;
            display: flex;
            justify-content: space-around;
            margin: 0;
            padding: 0
          }
        `}</style>
      </footer>
    )
  }
}

export default Footer
