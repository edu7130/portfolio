import React, { useState } from 'react'
import { Container, LogoContainer, Menu, MenuItem, MobileIcon, Wrapper } from './Navbar.elements'
import { FaBars, FaBattleNet } from "react-icons/fa";
import { IconContext } from 'react-icons';

import { NavLink } from 'react-router-dom'



export const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value={{ style: { fontSize: '2em' } }}>
                    <LogoContainer>
                        <FaBattleNet />
                        <p>Eduardo</p>
                        <p>Weidenbacher</p>
                    </LogoContainer>
                    <MobileIcon onClick={() => setShowMenu(!showMenu)}>
                        <FaBars />
                    </MobileIcon>

                    <Menu open={showMenu}>
                        <MenuItem>
                            <NavLink onClick={() => setShowMenu(false)} to='/'>Home</NavLink>
                        </MenuItem>

                        <MenuItem>
                            <NavLink onClick={() => setShowMenu(false)} to='/about'>About me</NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink onClick={() => setShowMenu(false)} to='/projects'>Projects</NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink onClick={() => setShowMenu(false)} to='/contact'>Contact</NavLink>
                        </MenuItem>

                    </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>
    )
}
