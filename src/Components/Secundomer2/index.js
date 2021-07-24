import moment from 'moment';
import React, { useEffect, useState } from 'react'

const setZero = n => n < 10 ? "0" + n : n;
const setZero3 = n => n < 10 ? "00" + n : n < 100 ? "0" + n : n;

export default function Secundomer2() {
    const [startedTime, setStartedTime] = useState(new Date())
    const [currentTime, setCurrentTime] = useState(new Date())

    let a = moment(startedTime)
    let b = moment(currentTime)

    useEffect(() => {
        setTimeout(() => {
            setCurrentTime(new Date())
        }, 1);
    }, [currentTime])

    return (
        <div>
            <h1>
                {setZero(b.diff(a, "minute") % 60)} : {setZero(b.diff(a, "second") % 60)}: {setZero3(b.diff(a, "millisecond") % 1000)}
            </h1>
        </div>
    )
}
