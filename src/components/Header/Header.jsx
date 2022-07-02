import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {

    let classNameMenuLink = ({ isActive }) =>
        isActive ? (s.menu_link + ' ' + s.active) : s.menu_link;

    return (
        <header>
            <div className={s.logo}>
                <NavLink to="/" className={s.logo_link}>
                    FLAMINGOS
                </NavLink>
            </div>
            <div className={s.menu_wrap}>
                <ul className={s.list_menu}>
                    <li><NavLink to='/test' className={classNameMenuLink}>Testing emails</NavLink></li>
                    <li><NavLink to='/blog' className={classNameMenuLink}>Blog</NavLink></li>
                    <li><NavLink to='/about' className={classNameMenuLink}>About us</NavLink></li>
                    <li><NavLink to='/auth' className={classNameMenuLink}>Sing up</NavLink></li>
                </ul>
            </div>
        </header >
    );
}

export default Header;