import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoDevIcon from '@mui/icons-material/LogoDev';

function Links() {
    const accounts = [
        {
            id: 1,
            name: "LinkedIn",
            icon: <LinkedInIcon />,
            link: "https://www.linkedin.com/in/muhammad-hammad-955465293/"
        },
        {
            id: 2,
            name: "Github",
            icon: <GitHubIcon />,
            link: "https://github.com/MHammad-374"
        },
        {
            id: 3,
            name: "DEV",
            icon: <LogoDevIcon />,
            link: "https://dev.to/im_hammad"
        },
        {
            id: 4,
            name: "Fiverr",
            icon: <InstagramIcon />,
            link: "https://www.instagram.com/itx_hammad_373/"
        }
    ]

    return (
        <div className='links'>
            {
                accounts.map(account => {
                    return (
                        <a key={account.id} href={account.link}>{account.icon}</a>
                    )
                })
            }
            <div className="vertical-line"></div>
        </div>
    )
}

export default Links
