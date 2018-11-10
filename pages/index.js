import React from 'react'
import fetch from 'isomorphic-fetch'

import Layout from '../components/Layout'
import {readableDate} from '../lib/format'

class Index extends React.Component {
  render () {
    const { data } = this.props
    console.log(data)
    let printDate = readableDate(data.daily.intDate)
    return (
      <Layout>
        <section className='daily'>
          <header className='daily-date'>
          {printDate}
          </header>
          <div className='daily-drawing'>
            <img src={`https://drawnfieldnotes.ams3.cdn.digitaloceanspaces.com/daily/2048/${data.daily.slug}.png`} alt={`An illustration for ${data.daily.title}`} />
          </div>
          <h1>{data.daily.title}</h1>
        </section>
        <style jsx>{`
          .daily {
            max-width: 600px;
            margin: 1rem auto;
            background-color: #ededed;
            box-shadow: 0 4px 2px rgba(0,0,0,0.12);
            padding: 1rem;
            box-sizing: border-box;
            
          }
          .daily-drawing {
            border: 1px solid #000;
          }
          .daily-drawing img {
            width: 100%;
          }  
        `}</style>
      </Layout>
    )
  }
}

Index.getInitialProps = async function () {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const day = today.getDate()
  const expandedDay = day < 10 ? '0' + day : day.toString()
  const queryDate = year.toString() + month.toString() + expandedDay
  const res = await fetch('http://localhost:8000/v1/dailies/' + queryDate)
  const data = await res.json()
  return {
    data
  }
}

export default Index
