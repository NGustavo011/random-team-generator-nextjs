export default function Home() {
  return (
    <body>
      <div id="div-root">
        <div id="title">
            <h1>Gerador de times</h1>
        </div>
        <div id="input-data">
            <form id="input-form">
                <div id="team-quantity">
                    <span>
                        Quantidade de times:
                    </span>
                    <input id="team-quantity-input" type="number" />
                </div>
                <div id="players">
                    <span>
                        Jogadores (%nome/%nível):
                    </span>
                    <textarea id="players-input"></textarea>
                </div>
                <div id="submit">
                    <input id="submit-form" type="submit" value="Submit" />
                </div>
            </form>
        </div>
        <div id="result">
        </div>
      </div>
    </body>
  )
}
