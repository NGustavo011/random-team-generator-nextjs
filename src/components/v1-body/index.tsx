'use client';
import React from 'react';
import { WinCount } from '../win-count';
import './style.css'
import ReactDOM from 'react-dom';

export function V1Body() {

    function generateTeams(event: any) {
        event.preventDefault()
        const teamQuantity = Number(event.target.teamQuantityInput.value)
        const players = String(event.target.playersInput.value)
        if(teamQuantity<=1){
            alert(`Quantidade de times inválido.\nPor favor preencha com valores acima de 1.`)
            return;
        }
        const playersArray = players.split(/\r?\n/);
        const playersObjectArray = []
        for(const playerData of playersArray){
            if(playerData=="" || playerData.trim()=="Lista" || !(playerData[0] >= '0' && playerData[0] <= '9')) continue;
            const regex = /\d+\ *\-/
            const player = playerData.replace(regex, "").trim()
            if(!player) continue;
            if(!playerData.includes("/")){
                alert(`Formato de jogador inválido: ${playerData}.\nPor favor preencha no formato (%nome/%nível) como: Gustavo/1.`)
                return;
            }
            const name = player.split("/")[0].trim()
            if(!name) continue;
            const level = player.split("/")[1].trim()
            playersObjectArray.push({
                name,
                level
            })
        }
        shuffleArray(playersObjectArray)
        const playersObjectArraySorted = playersObjectArray.sort((a, b)=> {
            if (a.level > b.level) {
                return -1;
            }
            if (a.level < b.level) {
                return 1;
            }
            return 0;
        })
        const teams: string[][] = []
        for(let i=0; i<teamQuantity; i++){
            teams.push([])
        }
        let contador = 0;
        let order = "cresc"
        for(const player of playersObjectArraySorted){ 
            if(order==="cresc"){
                teams[contador++].push(player.name.toUpperCase())
            } else {   
                teams[--contador].push(player.name.toUpperCase())
            }
            if(contador==teamQuantity){
                order="desc"
            } else if(contador==0) {
                order="cresc"
            }
        }
        outputResult(teams)
    }
    
    function outputResult(teams: string[][]){
        teams = teams.sort((a, b)=> {
            if (a.length > b.length) {
                return -1;
            }
            if (a.length < b.length) {
                return 1;
            }
            return 0;
        })
        const resultDiv = document.querySelector("#result") as HTMLElement
        removeAllChildNodes(resultDiv)
        const teamTitle = document.createElement("h2")
        resultDiv.append(teamTitle)
        teamTitle.append("Times")
        let contador = 0;
        for(const team of teams) {
            const teamDiv = document.createElement("div")
            resultDiv.append(teamDiv)
            const titleDiv = document.createElement("h4")
            teamDiv.append(titleDiv)
            titleDiv.append(`Time ${++contador}`)
            for(const player of team) {
                const playerSpan = document.createElement("span")
                teamDiv.append(playerSpan)
                playerSpan.append(player)
            }
            const winsDivName = `team-win-div-${contador}`
            const winsDiv = document.createElement("div")
            winsDiv.setAttribute("id", winsDivName)
            teamDiv.append(winsDiv)
            ReactDOM.render(React.createElement(WinCount), document.getElementById(winsDivName))
        }
    }
    
    /* Randomize array in-place using Durstenfeld shuffle algorithm */
    function shuffleArray(array: any[]) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    
    function removeAllChildNodes(parent: HTMLElement) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    return (
        <div id="input-data">
            <form id="input-form" onSubmit={generateTeams}>
                <div id="team-quantity">
                    <span>
                        Quantidade de times:
                    </span>
                    <input id="team-quantity-input" name="teamQuantityInput" type="number" />
                </div>
                <div id="players">
                    <span>
                        Jogadores (%nome/%nível):
                    </span>
                    <textarea id="players-input" name="playersInput"></textarea>
                </div>
                <div id="submit">
                    <input id="submit-form" type="submit" value="Gerar" />
                </div>
            </form>
        </div>
    );
}