import React from 'react';
import s from './Nav.module.css'
import common from '../../common/commonStyles/Common.module.css'


const Nav = () => {

    return (
        <div className={s.navbar}>
            <div><a className={common.superLink} href={'#main'}>Main</a></div>
            <div><a className={common.superLink} href={'#skills'}>Skills</a></div>
            <div><a className={common.superLink} href={'#projects'}>Projects</a></div>
            <div><a className={common.superLink} href={'#contacts'}>Contacts</a></div>
        </div>
    );
};

export default Nav;