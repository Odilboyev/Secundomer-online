import React, { useState, useEffect } from 'react'
import './style.css';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { BiPauseCircle } from 'react-icons/bi';

export default function Pomodoro() {
    const workTime = 25;
    const restTime = 5;
    const rington = document.getElementById('aud');

    const [minute, setMinute] = useState(workTime)
    const [second, setSecond] = useState(0)
    const [isWorking, setisWorking] = useState(true)
    const [status, setStatus] = useState(false)

    useEffect(() => {
        status && setTimeout(() => {
            if (second > 0) setSecond(second - 1)
            else {
                if (minute != 0) setSecond(59);
                if (minute > 0) setMinute(minute - 1)

                else {
                    if (isWorking) {
                        alert('Dam olish vaqti !')
                        // rington.play()
                        setMinute(restTime)
                    }
                    else {
                        alert('Davay ishga !')
                        // rington.play()
                        setMinute(workTime);
                    }
                    setisWorking(!isWorking);
                }
            }
        }, 1000);
    }, [second, isWorking, status])

    const setZero = n => (n < 10 ? '0' : '') + n;

    const setZero2 = n => (n < 10 && '0' || '') + n;

    const setZero3 = n => {
        if (n < 10) {
            return '0' + n;
        } else {
            return '' + n;
        }
    }

    const setBtn = () => {

        if (status) {
            return (<p><BiPauseCircle /> Pause</p>)
        } else {
            return (<p><AiOutlinePlayCircle /> Start</p>)
        }

    }
    const myCallback = () => console.log('tugadi')


    return (
        <div className="timer-card center text-white">
            <h3>Pomodoro Timer</h3>
            <div className="pomodoro-wrapper center">
                <h1>{setZero(minute)}:{setZero(second)}</h1>
            </div>
            <button className='pomo-btn mt-5' onClick={() => setStatus(!status)}>
                {setBtn()} </button>
            <audio src="rington.mp3" id="aud"> </audio>
        </div>
    )
}
