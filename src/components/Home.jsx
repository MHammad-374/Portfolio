import React from 'react'
import Img from '../assets/me.jpg'
import CV from '../assets/file/Resume.pdf'
import TalkButton from './TalkButton'

function Home() {
  return (
    <section id='Home'>
      <div className="intro">
        <p className='content'>Hello, I'm</p>
        <h1 className='name'>Muhammad Hammad</h1>
        <p className='content'>Full Stack Developer | MERN Stack Developer</p>
      </div>
      <div className="but-tons">
        <a href={CV} download >
          <button className="btn" id="cv-btn">Download CV</button>
        </a>
        <TalkButton />
      </div>
      <div className='img'>
        <img className='picture' src={Img} alt="" />
      </div>
    </section>
  )
}

export default Home
