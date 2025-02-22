import React from 'react'
import Img from '../assets/me-1.jpg'
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import PeopleIcon from '@mui/icons-material/People';
import SourceIcon from '@mui/icons-material/Source';
import TalkButton from './TalkButton';

function About() {
  const cards = [
    {
      id: 1,
      topic: "Experience",
      icon: <DnsOutlinedIcon />,
      decs: "1+ Year"
    },
    {
      id: 2,
      topic: "Clients",
      icon: <PeopleIcon />,
      decs: "100+"
    },
    {
      id: 3,
      topic: "Projects",
      icon: <SourceIcon />,
      decs: "80+"
    },
  ]


  return (
    <section id='About'>
      <div className="heading">
        <p className="content">Get To Know</p>
        <h1 className="head-ing">About Me</h1>
      </div>
      <div className="container">
        <div className="left">
          <div className="photos">
            <img src={Img} alt="" className="photo" />
          </div>
        </div>
        <div className="description">
          <div className="cards">
            {
              cards.map(card => {
                return (
                  <div key={card.id} className="card">
                    {card.icon}
                    <h3 className="topic">{card.topic}</h3>
                    <p className="gray">{card.decs}</p>
                  </div>
                )
              })
            }
          </div>
          <div className="explaination">
            I'm Muhammad Hammad a web developer proficient in MERN Stack & Wordpress Technologies.
            Enthusiastic about developing forward-thinking
            solutions to tomorrow’s productivity problems. Demonstrates hardworking and
            adaptable approach to challenges with strong analytical and critical thinking skills.
            Passionate about making creating, dynamic and efficient web applications with
            responsive UI's and scalable server-side applications. Integrating front-end and backend technologies, working with JavaScript, RESTful APIs, and database management.
          </div>
          <TalkButton />
        </div>
      </div>
    </section>
  )
}

export default About
