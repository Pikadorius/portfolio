import React from 'react';
import s from './Nav.module.css'

const Nav = () => {
    return (
            <div className={s.navbar}>
                <div className={s.linkItem}><a href={'#'}>Main</a></div>
                <div className={s.linkItem}><a href={'#'}>Skills</a></div>
                <div className={s.linkItem}><a href={'#'}>Projects</a></div>
                <div className={s.linkItem}><a href={'#'}>Contacts</a></div>
            </div>
    );
};

export default Nav;