import React from "react";
import BNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BiMenu } from "react-icons/bi";
import useSidebar from "../hooks/useSidebar";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const { setOpen } = useSidebar();
    return (
        <BNavbar variant="dark" className="p-3 myNav nav-bg">
            <BiMenu
                color="white"
                size={30}
                className="menu-icon me-2 hide"
                onClick={() => setOpen(true)}
            />
            <NavLink to='/'className={({ isActive }) => isActive ? 'text-decoration-none' : 'text-decoration-none'}>
                <BNavbar.Brand>Github Search</BNavbar.Brand>
            </NavLink>
        </BNavbar>
    );
};

export default Navbar;
