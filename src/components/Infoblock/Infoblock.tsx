import React, {useEffect, useState} from 'react';
import s from './Infoblock.module.css'
import myself from '../../assets/pics/aboutme.jpg';
import AnimatedText from 'react-animated-text-content';

const Infoblock = () => {
    const init = ['Front-End Developer', 'Egor Karpuk', 'All You need!', 'Ready to hard work']
    const [text, setText] = useState(init[0])

    useEffect(() => {
        const random = (min: number, max: number) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let timer = setInterval(() => {
            setText(init[random(0, 2)])
        }, 3000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className={s.wrapper}>
            <div className={s.infoBlock}>
                <div className={s.border1}></div>
                <div className={s.border2}></div>
                <img className={s.avatar} src={myself} alt="me"/>
                <h3>Hi there!</h3>
                <h3>I am</h3>
                {/*<h2 className={s.shining}>{text}</h2>*/}

                <AnimatedText
                    type="words" // animate words or chars
                    animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1.1,
                        ease: 'ease-in-out',
                    }}
                    animationType='lights'
                    interval={0.06}
                    duration={0.8}
                    tag="h2"
                    className={s.shining}
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%"
                >
                    {text}
                </AnimatedText>
                <h3>Hire me</h3>
            </div>
        </div>
    )
        ;
};

export default Infoblock;