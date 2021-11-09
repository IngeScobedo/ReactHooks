import React from 'react'
import { useEffect } from 'react';

export const Message = () => {

    useEffect(() => {
        let onMouseMove = (e)=>{
            console.log(':D');
        }
        window.addEventListener('mousemove', onMouseMove)
        return () => {
            window.removeEventListener('mousemove', onMouseMove)
        };
    }, []);

    return (
        <div>
            <h1>Awezome!</h1>
        </div>
    )
}
