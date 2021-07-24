import React, { useState, useEffect } from 'react'
import './style.css'

const LoadingWithHook = (props) => {
    const [step, setStep] = useState(0)
    const [backgroundColor, setbackgroundColor] = useState('red')

    useEffect(() => {
        console.log('1-useffect')

        setTimeout(() => {
            if (step < 100) setStep(step + 1);
        }, 100);

        if (step >= 30 && step <= 70) setbackgroundColor('yellow')
        else if (step >= 70) setbackgroundColor('green')

    }, [step])

    return (
        <div className="loading-panel">
            <div className="loading" style={{ width: `${step}%`, backgroundColor: backgroundColor }}>
                {step}
            </div>
        </div>
    )
}
export default LoadingWithHook;