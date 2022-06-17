import React, { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open)
    }

    return (
        <Navbar color='light' light expand='md'>
            <NavbarBrand tag={Link} to='/'>Minhas Séries</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={open} navbar>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink tag={Link} to='/generos'>Generos</NavLink>
                        <NavLink tag={Link} to='/'>Home</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )

}

export default Header