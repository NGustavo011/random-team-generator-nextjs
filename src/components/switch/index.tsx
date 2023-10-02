import { useEffect } from 'react'
import './style.css'

type SwitchParams = {
    version: string,
    setVersion: (version: string)=>void
}

export function Switch(switchParams: SwitchParams) {
    const { version, setVersion } = switchParams
    return (
        <>
            <div className="switch-versions">
				<button onClick={()=>setVersion("v1")} className={version=="v1"?"selected":"unselected"}>V1</button>
                <button onClick={()=>setVersion("v2")} className={version=="v2"?"selected":"unselected"}>V2</button>
			</div>
            <div className='version-description'>
                {
                    version=="v1"
                    ?
                    <text>(O v1 permite com que seja enviado os dados de jogadores utilizando o formato nome/nível)</text>
                    :
                    <text>(O v2 permite com que seja enviado apenas a lista com o nome dos jogadores, sem informar o nível, utilizando uma base de dados pré-definida para fazer o balanceamento)</text>
                }
            </div>
        </>
    )
}