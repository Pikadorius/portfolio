import React from 'react';
import s from './Contacts.module.css'
import common from '../../../common/commonStyles/Common.module.css'
import Borders from '../../../common/Borders/Borders';

type ContactsType = {
    id: string
}

const Contacts = (props: ContactsType) => {
    return (
        <section className={common.sectionWrapper}>
            <div className={common.sectionContainer}>
                <Borders/>
                <div id={props.id} className={common.sectionName}><span>Contact me!</span></div>
                <div>You can leave your questions and suggestions here:</div>
                <form action="#" className={s.form}>
                    <div className={s.item}>
                        <label htmlFor="phone">Your phone:</label>
                        <input id="phone" type="tel"/>
                    </div>
                    <div className={s.item}>
                        <label htmlFor="email">Your email:</label>
                        <input id="email" type="email"/>
                    </div>
                    <div className={s.item}>
                        <label htmlFor="phone">Your questions:</label>
                        <textarea id="phone"/>
                    </div>
                </form>
                <div className={s.sendBtn}>
                    <button className={s.btn}>Send</button>
                </div>
            </div>
        </section>
    );
};

export default Contacts;