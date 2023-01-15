import React from 'react';
import s from './Contacts.module.css'

type ContactsType = {
    id: string
}

const Contacts = (props: ContactsType) => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.title}><span id={props.id}>My contacts</span></div>
                <div>Or you can leave yours here:</div>
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
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Contacts;