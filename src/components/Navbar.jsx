import React, { useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

function Navbar({ scrollToSection }) {
    const navigation = [
        {
            id: 1,
            icon: <HomeOutlinedIcon />,
            section: "Home"
        },
        {
            id: 2,
            icon: <PermIdentityOutlinedIcon />,
            section: "About"
        },
        {
            id: 3,
            icon: <CasesOutlinedIcon />,
            section: "Experience"
        },
        {
            id: 4,
            icon: <DnsOutlinedIcon />,
            section: "Projects"
        },
        {
            id: 5,
            icon: <ArticleOutlinedIcon />,
            section: "Contact"
        },

    ]

    const handleClick = (id, index) => {
        scrollToSection(id)
    }

    return (
        <nav>
            {
                navigation.map((link, index) => {
                    return (
                        <button key={link.id} className={`navLinks`} onClick={() => handleClick(link.section, index)}>
                            {link.icon}
                        </button>
                    )
                })
            }
        </nav>
    )
}

export default Navbar
