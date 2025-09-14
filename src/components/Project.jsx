import React from 'react'
import Img from "../assets/todo.png"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function Project() {
  const projects = [
    {
      id: 1,
      image: Img,
      name: "Todo App 1",
      github: "https://github.com/MHammad-374/Todo_App",
      prev: "https://itask-todos-manager.netlify.app/"
    },
    {
      id: 2,
      image: Img,
      name: "Quiz Game",
      github: "https://github.com/MHammad-374/Quiz_App",
      prev: "https://myquizapp-123.netlify.app/"
    },
    {
      id: 3,
      image: Img,
      name: "Digital Clock",
      github: "https://github.com/MHammad-374/Digital-Clock",
      prev: "https://my-digital-clock-123.netlify.app/"
    },
    {
      id: 4,
      image: Img,
      name: "Graph Plotter",
      github: "https://github.com/MHammad-374/Graph-Plotter",
      prev: "https://graph-plotter.netlify.app/"
    },
    {
      id: 5,
      image: Img,
      name: "Stop Watch",
      github: "https://github.com/MHammad-374/Stop_Watch",
      prev: "https://stop-watch-123.netlify.app/"
    },
    {
      id: 6,
      image: Img,
      name: "CSS Transition",
      github: "https://github.com/MHammad-374/Transitions",
      prev: "https://transition-io.netlify.app/"
    },
    {
      id: 7,
      image: Img,
      name: "Landing Page",
      github: "https://github.com/MHammad-374/Landing_Page",
      prev: "https://landing-hi.netlify.app/"
    },
    {
      id: 8,
      image: Img,
      name: "Hacking Terminal",
      github: "https://github.com/MHammad-374/Hacking_Terminal",
      prev: "https://hackingterminal.netlify.app/"
    },
    {
      id: 9,
      image: Img,
      name: "Calculator",
      github: "https://github.com/MHammad-374/Calculator_App",
      prev: "https://calculator-app-abc.netlify.app/"
    },
    {
      id: 10,
      image: Img,
      name: "Tic Tac Toe",
      github: "https://github.com/MHammad-374/TicTacToe",
      prev: "https://tictactoe-123.netlify.app/"
    },
    {
      id: 11,
      image: Img,
      name: "Add To Cart",
      github: "https://github.com/MHammad-374/AddToCart",
      prev: "https://addtocart-func.netlify.app/"
    },
    {
      id: 12,
      image: Img,
      name: "Text Utills",
      github: "https://github.com/MHammad-374/Text-Utills",
      prev: "https://text-editor-abc.netlify.app/"
    },
    {
      id: 13,
      image: Img,
      name: "XORA Landing Page",
      github: "https://github.com/MHammad-374/Xora_Landing_Page",
      prev: "https://x-o-r-a-landing-page.netlify.app/"
    },
    {
      id: 14,
      image: Img,
      name: "AI Chatbot",
      github: "https://github.com/MHammad-374/Chatboot",
      prev: "https://ai-chatboot.netlify.app/"
    },
  ]

  const openNewTab = (url) => {
    window.open(url, '_blank');
  };


  return (
    <section id='Projects'>
      <div className="heading">
        <p className="content">My Recent Work</p>
        <h1 className="head-ing">My Portfolio</h1>
      </div>
      <div className="projects-list">
        {
          projects.reverse().map(project => {
            return (
              <div key={project.id} className="project">
                <img className='projectImg' src={project.image} alt="" />
                <h2 className="projectName">{project.name}</h2>
                <div className="projectLinksButtons">
                  {/* <a href={project.github}> */}
                  <button className="btn" onClick={() => openNewTab(project.github)}>Github Link <OpenInNewIcon /></button>
                  {/* </a> */}
                  {/* <a href={project.prev}> */}
                  <button className="btn preview" onClick={() => openNewTab(project.prev)}>Preview <OpenInNewIcon /></button>
                  {/* </a> */}
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Project
