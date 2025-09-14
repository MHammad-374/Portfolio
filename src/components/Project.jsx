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
      name: "Todo App 2",
      github: "https://github.com/MHammad-374/Todo_App",
      prev: "https://itask-todos-manager.netlify.app/"
    },
    {
      id: 3,
      image: Img,
      name: "Todo App 3",
      github: "https://github.com/MHammad-374/Todo_App",
      prev: "https://itask-todos-manager.netlify.app/"
    }
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
