import React from 'react';
import s from './Work.module.css'

const Work = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.title}>
                    <span>Search for work</span>
                </div>
                <div>
                    <button>Hire me</button>
                </div>
            </div>
        </div>
    );
};

export default Work;