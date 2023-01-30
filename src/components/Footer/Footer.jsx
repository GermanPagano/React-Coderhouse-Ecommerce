import React from 'react'
import './StylesFooter.css'

function Footer() {
  return (
    <div className='Footer-container text-center' >

        <div className='text-center p-5 fs-5'>
          
          <span className='p-1'>🔮Contact me </span>
          <a
          href={'https://www.linkedin.com/in/gerhpagano/'}
          target={'_blank'}
          rel='noreferrer'
          >
            LinkedIn
          </a>
          <p className='fs-6 pt-5'>@GameStore All rights reserved, ponele</p>
        </div>

    </div>
  )
}

export default Footer
