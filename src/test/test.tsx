// @ts-ignore
import WAVES from "vanta/dist/vanta.waves.min"
// @ts-ignore
import * as THREE from "three";
import {useEffect, useRef, useState} from 'react';

export default function HeroBanner() {

// Here comes Vanta React Hook code

    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                WAVES({
                    el: vantaRef.current,
                    THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0xd0f0f,
                    shininess: 35.00,
                    waveHeight: 10.50,
                    waveSpeed: 0.65,
                    zoom: 0.76
                })
            );
        }
        return () => {
            if (vantaEffect) { // @ts-ignore
                vantaEffect.destroy()
            }
        };
    }, [vantaEffect]);

    return (
        <div className="container" ref={vantaRef} style={{height: '130vh', width:'130%', position: 'fixed', backgroundColor: 'black', top:'-60px'}}>
        </div>
    )
}