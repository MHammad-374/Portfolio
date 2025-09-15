import React from 'react'
import Img1 from "../assets/todo.png"
import Img2 from "../assets/QG.png"
import Img3 from "../assets/DC.png"
import Img4 from "../assets/Graph.png"
import Img5 from "../assets/Stop Watch.png"
import Img6 from "../assets/CSS.png"
import Img7 from "../assets/todo.png"
import Img8 from "../assets/Hacking.png"
import Img9 from "../assets/calculator.jpeg"
import Img10 from "../assets/Tic Tac Toe.png"
import Img11 from "../assets/Add to Cart.png"
import Img12 from "../assets/Text Utills.png"
import Img13 from "../assets/xora1.jpeg"
import Img14 from "../assets/Chatbot.png"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function Project() {
  const projects = [
    {
      id: 1,
      image: Img1,
      name: "Todo App",
      github: "https://github.com/MHammad-374/Todo_App",
      prev: "https://itask-todos-manager.netlify.app/"
    },
    {
      id: 2,
      image: Img2,
      name: "Quiz Game",
      github: "https://github.com/MHammad-374/Quiz_App",
      prev: "https://myquizapp-123.netlify.app/"
    },
    {
      id: 3,
      image: Img3,
      name: "Digital Clock",
      github: "https://github.com/MHammad-374/Digital-Clock",
      prev: "https://my-digital-clock-123.netlify.app/"
    },
    {
      id: 4,
      image: Img4,
      name: "Graph Plotter",
      github: "https://github.com/MHammad-374/Graph-Plotter",
      prev: "https://graph-plotter.netlify.app/"
    },
    {
      id: 5,
      image: Img5,
      name: "Stop Watch",
      github: "https://github.com/MHammad-374/Stop_Watch",
      prev: "https://stop-watch-123.netlify.app/"
    },
    {
      id: 6,
      image: Img6,
      name: "CSS Transition",
      github: "https://github.com/MHammad-374/Transitions",
      prev: "https://transition-io.netlify.app/"
    },
    {
      id: 7,
      image: Img7,
      name: "Landing Page",
      github: "https://github.com/MHammad-374/Landing_Page",
      prev: "https://landing-hi.netlify.app/"
    },
    {
      id: 8,
      image: Img8,
      name: "Hacking Terminal",
      github: "https://github.com/MHammad-374/Hacking_Terminal",
      prev: "https://hackingterminal.netlify.app/"
    },
    {
      id: 9,
      image: Img9,
      name: "Calculator",
      github: "https://github.com/MHammad-374/Calculator_App",
      prev: "https://calculator-app-abc.netlify.app/"
    },
    {
      id: 10,
      image: Img10,
      name: "Tic Tac Toe",
      github: "https://github.com/MHammad-374/TicTacToe",
      prev: "https://tictactoe-123.netlify.app/"
    },
    {
      id: 11,
      image: Img11,
      name: "Add To Cart",
      github: "https://github.com/MHammad-374/AddToCart",
      prev: "https://addtocart-func.netlify.app/"
    },
    {
      id: 12,
      image: Img12,
      name: "Text Utills",
      github: "https://github.com/MHammad-374/Text-Utills",
      prev: "https://text-editor-abc.netlify.app/"
    },
    {
      id: 13,
      image: Img13,
      name: "XORA Landing Page",
      github: "https://github.com/MHammad-374/Xora_Landing_Page",
      prev: "https://x-o-r-a-landing-page.netlify.app/"
    },
    {
      id: 14,
      image: Img14,
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
