import React from 'react';
import s from './Footer.module.css'
import insta from '../../assets/icons/contacts/instagramm.png'
import linked from '../../assets/icons/contacts/linked2.png'
import git from '../../assets/icons/contacts/git.png'
import vk from '../../assets/icons/contacts/vk.png'

const Footer = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.title}><span>Karpuk Egor</span></div>
                <div className={s.social}>
                    <div className={s.item}>
                        <a rel="noreferrer" target='_blank' href={'https://www.instagram.com/karpukegor/'}><img
                            src={insta} alt={"Insta"}/></a>
                    </div>
                    <div className={s.item}>
                        <a rel="noreferrer" target='_blank'
                           href={'https://www.linkedin.com/in/%D0%B5%D0%B3%D0%BE%D1%80-%D0%BA%D0%B0%D1%80%D0%BF%D1%83%D0%BA-0a7a66259/'}><img
                            src={linked} alt={"LinkedIn"}/></a>
                    </div>
                    <div className={s.item}>
                        <a rel="noreferrer" target='_blank' href={'https://github.com/Pikadorius'}><img src={git}
                                                                                                        alt={"Github"}/></a>
                    </div>
                    <div className={s.item}>
                        <a rel="noreferrer" target='_blank' href={'https://vk.com/e_karpuk'}><img src={vk} alt={"VK"}/></a>
                    </div>
                </div>
                <div className={s.copyRights}> © 2022 All rights reserved</div>
            </div>
        </div>
    );
};

export default Footer;