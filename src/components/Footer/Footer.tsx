import React from 'react';
import s from './Footer.module.css'
import common from '../../common/commonStyles/Common.module.css'
import insta from '../../assets/icons/contacts/instagramm.png'
import linked from '../../assets/icons/contacts/linked2.png'
import git from '../../assets/icons/contacts/git.png'
import telegramm from '../../assets/icons/contacts/telegramm.png'
import Borders from '../../common/Borders/Borders';

const Footer = () => {
    return (
        <footer className={common.sectionWrapper}>
            <div className={common.sectionContainer}>
                <Borders/>
                <div className={common.sectionName}><span>Karpuk Egor</span></div>
                <div className={s.social}>
                    <div className={s.item}>
                        <a rel="noreferrer" target='_blank' href={'https://www.instagram.com/karpukegor/'}><img
                            src={insta} alt={"Insta"}/></a>
                    </div>
                    <div className={s.item}>
                        <a rel="noreferrer" target='_blank'
                           href={'https://www.linkedin.com/in/karpuk-egor/'}><img
                            src={linked} alt={"LinkedIn"}/></a>
                    </div>
                    <div className={s.item}>
                        <a rel="noreferrer" target='_blank' href={'https://github.com/Pikadorius'}><img src={git}
                                                                                                        alt={"Github"}/></a>
                    </div>
                    <div className={s.item}>
                        <a rel="noreferrer" target='_blank' href={'https://t.me/Pikadorius'}><img src={telegramm} alt={"telegramm"}/></a>
                    </div>
                </div>
                <div className={s.copyRights}> © 2023 All rights reserved</div>
            </div>
        </footer>
    );
};

export default Footer;