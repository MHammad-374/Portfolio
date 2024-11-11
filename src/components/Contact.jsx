import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  const contact = [
    {
      id: 1,
      name: "Email",
      icon: <EmailIcon />,
      desc: "mhammadif374@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=mhammadif374@gmail.com&su=Hello"
    },
    {
      id: 2,
      name: "What's App",
      icon: <WhatsAppIcon />,
      desc: "+92 325 8182105",
      link: "https://wa.me/+923258182105?text=Hello"
    },
  ]


  return (
    <section id="Contact">
      <div className="heading">
        <p className="content">Get In Touch</p>
        <h1 className="head-ing">Contact Me</h1>
      </div>
      <div className='contact'>
        {
          contact.map(c => {
            return (
              <a href={c.link} key={c.id} className="contactCard">
                {c.icon}
                <h2 className="iconName">{c.name}</h2>
                <p className="gray">{c.desc}</p>
              </a>
            )
          })
        }
      </div>
    </section>
  )
}

export default Contact

