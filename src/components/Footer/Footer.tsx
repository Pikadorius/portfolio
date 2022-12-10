import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.title}>Karpuk Egor</div>
                <div className={s.social}>
                    <div className={s.item}><img alt={"Insta"}/></div>
                    <div className={s.item}><img alt={"LinkedIn"}/></div>
                    <div className={s.item}><img alt={"Github"}/></div>
                    <div className={s.item}><img alt={"VK"}/></div>
                </div>
                <div className={s.copyRights}> © 2022 All rights reserved </div>
            </div>
        </div>
    );
};

export default Footer;