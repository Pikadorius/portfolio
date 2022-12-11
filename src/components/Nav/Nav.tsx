import React from 'react';
import s from './Nav.module.css'


const Nav = () => {


    return (
            <div className={s.navbar}>
                <div className={s.linkItem}><a href={'#main'}>Main</a></div>
                <div className={s.linkItem}><a href={'#skills'}>Skills</a></div>
                <div className={s.linkItem}><a href={'#projects'}>Projects</a></div>
                <div className={s.linkItem}><a href={'#contacts'}>Contacts</a></div>
            </div>
    );
};

export default Nav;