import { useState } from "react"
import './style.css'

export const WinCount = () => {
    const [teamWinCount, setTeamWinCount] = useState(0)

    const increment = ()=>{
        setTeamWinCount(teamWinCount+1)
    }

    const decrement = ()=>{
        if(teamWinCount>0){
            setTeamWinCount(teamWinCount-1)
        }
    }

    return (
        <>
            <button className="decrement-button" onClick={decrement}>-</button>
            <p>{teamWinCount}</p>
            <button className="increment-button" onClick={increment}>+</button>
        </>
    )
}