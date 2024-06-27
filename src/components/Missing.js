import React from 'react'
import {Link} from 'react-router-dom'

const Missing = () => {
  return (
    <div className='missing'>
      <h1>Whoops!</h1>
    <p>We can't seem to find the page you're looking for.</p>
    <Link to="/">Go to Homepage</Link>
    </div>
  )
}

export default Missing