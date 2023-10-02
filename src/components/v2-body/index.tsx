'use client';
import { useState } from 'react';
import './style.css'
import jsonPlayers from '@/assets/v2-players.json'

export function V2Body() {
    const [showPlayers, setShowPlayers] = useState(false)

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
            if(playerData=="" || playerData.trim()=="Lista") continue;
            const regex = /\d+\ *\-/
            let name = playerData.replace(regex, "").trim().toUpperCase()
            if(!name) continue;
            try {
                name = name.split("(")[0].trim()
                const playerInDatabase = jsonPlayers.players.filter((player)=>player.name === name)
                playersObjectArray.push({
                    name,
                    level: playerInDatabase[0].level
                })
            } catch{
                alert(`Jogador ${name} não encontrado na base de dados\nPor favor insira um jogador válido.`)
                return;
            }
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
            <div id="show-players">
                <button id="show-players-button" onClick={()=>setShowPlayers(!showPlayers)}>
                    Mostrar jogadores cadastrados
                </button>
            {
                showPlayers
                &&
                (
                    <table>
                        <tr>
                            <th>NOME</th>
                            <th>NÍVEL</th>
                        </tr>
                        {
                            jsonPlayers.players.sort((a, b)=> {
                                if (a.level > b.level) {
                                    return -1;
                                }
                                if (a.level < b.level) {
                                    return 1;
                                }
                                return 0;
                            }).map((player)=>{
                                return(
                                    <tr>
                                        <td>{player.name}</td>
                                        <td>{player.level}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                )
            }
            </div>
            <form id="input-form" onSubmit={generateTeams}>
                <div id="team-quantity">
                    <span>
                        Quantidade de times:
                    </span>
                    <input id="team-quantity-input" name="teamQuantityInput" type="number" />
                </div>
                <div id="players">
                    <span>
                        Jogadores (%nome):
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