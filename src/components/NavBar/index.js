import React, { useState } from 'react'
import { Background, Container, LogoContainer, Menu, MenuItem, MobileIcon, Wrapper } from './Navbar.elements'
import { FaBars, FaTimes, FaBattleNet } from "react-icons/fa";
import { IconContext } from 'react-icons';

import { NavLink } from 'react-router-dom'



export const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const hideMenu = () => setShowMenu(false)
    const toggleMenu = () => setShowMenu(!showMenu);

    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value={{ style: { fontSize: '2em' } }}>
                    <LogoContainer>
                        <FaBattleNet />
                        <p>Eduardo</p>
                        <p>Weidenbacher</p>
                    </LogoContainer>
                    <MobileIcon onClick={toggleMenu}>
                        {showMenu ? <FaTimes /> : <FaBars />}
                    </MobileIcon>

                    <Menu open={showMenu}>
                        <MenuItem>
                            <NavLink onClick={hideMenu} to='/'>Home</NavLink>
                        </MenuItem>

                        <MenuItem>
                            <NavLink onClick={hideMenu} to='/about'>About me</NavLink>
                        </MenuItem>

                        <MenuItem>
                            <NavLink onClick={hideMenu} to='/projects'>Projects</NavLink>
                        </MenuItem>

                        <MenuItem>
                            <NavLink onClick={hideMenu} to='/contact'>Contact</NavLink>
                        </MenuItem>

                    </Menu>

                    <Background onClick={toggleMenu} active={showMenu}/>
                </IconContext.Provider>
            </Wrapper>
        </Container>
    )
}
