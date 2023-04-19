import React from 'react'
import { Link } from 'react-router-dom'
import imgNotFound from '../assets/images/not-found.png'
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={imgNotFound} alt='Page Not Found' />
        <h3>Oops! Page Not Found</h3>
        <p>Sorry, The Page you are looking for doesn't exist or an other error occurred.</p>
        <Link to='/'>Back to Dash Board</Link>
      </div>

    </Wrapper>
  )
}

export default Error
