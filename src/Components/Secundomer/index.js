import React, { useEffect, useState } from 'react'

const setZero = n => n < 10 ? "0" + n : n;

export default function Secundomer() {
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    const [millisecond, setMillisecond] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            if (second >= 60) {
                setSecond(0);
                setMinute(minute + 1);
            }

            if (millisecond >= 99) {
                setMillisecond(0);
                setSecond(second + 1);
            }
            else setMillisecond(millisecond + 1);
        }, 10);
    }, [millisecond])

    return (
        <div>
            <h1>
                {setZero(minute)} : {setZero(second)} : {setZero(millisecond)}
            </h1>
        </div>
    )
}
