import React, {useEffect, useState} from 'react';
import s from './Infoblock.module.css'
import common from '../../common/commonStyles/Common.module.css'
import myself from '../../assets/pics/aboutme.jpg';
import AnimatedText from 'react-animated-text-content';
import Fade from '@mui/material/Fade';
import DownloadIcon from '@mui/icons-material/Download';
import CV from '../../assets/CV/KEA_CV.pdf'

const Infoblock = () => {
    const init = ['Front-End Developer', 'Egor Karpuk', 'Experienced specialist', 'Ready to work']
    const [text, setText] = useState(init[0])

    useEffect(() => {
        const random = (min: number, max: number) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let timer = setInterval(() => {
            setText(init[random(0, 3)])
        }, 3000)
        return () => clearInterval(timer)
    }, [])

    return (

        <aside className={s.wrapper}>

            <Fade appear={true} in={true} timeout={6000}>
                <div className={s.infoBlock}>
                    <div className={s.border1}></div>
                    <div className={s.border2}></div>
                    <img className={s.avatar} src={myself} alt="me"/>
                    <h3>Hi there!</h3>
                    <h3>I am</h3>
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
                    <h1 className={s.hireLink} style={{zIndex: '1'}}>
                        <a className={`${common.superLink}`} href={'#contacts'}>
                            HIRE ME
                        </a>
                    </h1>
                    <h1 className={s.cv}>
                        <a href={CV} download className={s.loadLink}>
                            Download CV <DownloadIcon/>
                        </a>
                    </h1>
                </div>
            </Fade>
        </aside>
    )
        ;
};

export default Infoblock;