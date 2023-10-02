import { V1Body } from "@/components/v1-body/index"

export default function Home() {
  return (
    <body>
      <div id="div-root">
        <div id="title">
            <h1>Gerador de times</h1>
        </div>
        <V1Body />
        <div id="result">
        </div>
      </div>
    </body>
  )
}
