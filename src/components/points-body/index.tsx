'use client';
import React, { useState } from 'react';
import './style.css'
import { PointsCount } from '../points-count';

export const PointsBody = ()=> {
    const [team1PointsCount, setTeam1PointsCount] = useState(0)
    const [team2PointsCount, setTeam2PointsCount] = useState(0)

    const reset = ()=>{
        setTeam1PointsCount(0)
        setTeam2PointsCount(0)
    }

    return (
        <>
            <div id="points-div">
                <div id="points-team-1">
                    <span>Time 1</span>
                    <PointsCount teamPointsCount={team1PointsCount} setTeamPointsCount={setTeam1PointsCount} />
                </div>
                <div id="points-team-2">
                    <span>Time 2</span>
                    <PointsCount teamPointsCount={team2PointsCount} setTeamPointsCount={setTeam2PointsCount} />
                </div>
                <button id="reset-button" onClick={reset}>Reset</button>
            </div>
        </>
    );
}