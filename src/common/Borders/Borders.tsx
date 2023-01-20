import React from 'react';
import s from './Borders.module.css'

const Borders = () => {
    return (
        <div className={s.container}>
            <div className={s.border1}></div>
            <div className={s.border2}></div>
        </div>
    );
};

export default Borders;