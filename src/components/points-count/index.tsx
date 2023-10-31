import { Dispatch, SetStateAction, useState } from "react"
import './style.css'

type PointsCountProps = {
    teamPointsCount: number
    setTeamPointsCount: Dispatch<SetStateAction<number>>
}

export const PointsCount = ({teamPointsCount, setTeamPointsCount}: PointsCountProps) => {
    const increment = ()=>{
        setTeamPointsCount(teamPointsCount+1)
    }

    const decrement = ()=>{
        if(teamPointsCount>0){
            setTeamPointsCount(teamPointsCount-1)
        }
    }

    return (
        <>
            <button className="decrement-button" onClick={decrement}>-</button>
            <p>{teamPointsCount}</p>
            <button className="increment-button" onClick={increment}>+</button>
        </>
    )
}