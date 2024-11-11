import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';

function Experience() {
  const skills = [
    {
      id: 1,
      name: "Frontend Developer",
      subSkills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Tailwind CSS",
        "React JS"
      ]
    },
    {
      id: 2,
      name: "Backend Developer",
      subSkills: [
        "Node JS",
        "Express JS",
        "MongoDB"
      ]
    },
    {
      id: 3,
      name: "CMS Developer",
      subSkills: [
        "WordPress",
        "Shopify",
        "Wix",
        "Webflow"
      ]
    },
    {
      id: 4,
      name: "UI/UX Designer",
      subSkills: [
        "Figma"
      ]
    },
    {
      id: 5,
      name: "Graphic Designer",
      subSkills: [
        "Adobe XD",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Canva",
      ]
    }
  ]
  
  return (
    <section id='Experience'>
      <div className="heading">
        <p className="content">What Skills I Have</p>
        <h1 className="head-ing">My Skills</h1>
      </div>
      <div className="skills-container">
        {
          skills.map(skill => {
            return (
              <div key={skill.id} className="skill">
                <h1 className="skillName">{skill.name}</h1>
                <ul>
                  {
                    skill.subSkills.map(s => {
                      return (
                        <li key={s}><VerifiedIcon style={{color: '#4BB5F8'}}/>{s}</li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Experience
