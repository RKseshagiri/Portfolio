import "./home.css"
import React from 'react'

const Social = () => {
  return (
   <div className='home__social'>
    <a href='https://www.instagram.com/_._lovely_lad_._?igsh=b2RtajJ6ZGFhNGl1&utm_source=qr' className='home__social-icon' target='_blank'>
        <i className='uil uil-instagram'></i>
    </a>

    <a href='https://www.linkedin.com/in/seshagiri-ravindrabalan-395100171' className='home__social-icon' target='_blank'>
        <i className='uil uil-linkedin'></i>
    </a>

    <a href='https://github.com/RKseshagiri' className='home__social-icon' target='_blank'>
        <i className='uil uil-github-alt'></i>
    </a>
   </div>
  )
}

export default Social
