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
                <div>
                    <button onClick={()=>setVersion("v1")} className={version=="v1"?"selected":"unselected"}>V1</button>
                    <button onClick={()=>setVersion("v2")} className={version=="v2"?"selected":"unselected"}>V2</button>
                </div>
				<div>
                    <button onClick={()=>setVersion("v2-old")} className={version=="v2-old"?"selected":"unselected"}>V2-OLD</button>
                </div>
                <div>
                    <button onClick={()=>setVersion("pontos")} className={version=="pontos"?"selected":"unselected"} >Pontos</button>
                </div>
			</div>
            <div className='version-description'>
                {
                    version=="v1" || version=="v1-old" && <text>(O v1 permite com que seja enviado os dados de jogadores utilizando o formato nome/nível)</text>
                }
                {
                    version=="v2" || version=="v2-old" && <text>(O v2 permite com que seja enviado apenas a lista com o nome dos jogadores, sem informar o nível, utilizando uma base de dados pré-definida para fazer o balanceamento)</text>
                }
            </div>
        </>
    )
}