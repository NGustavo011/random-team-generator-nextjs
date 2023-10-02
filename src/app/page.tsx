import { V1Body } from "@/components/v1-body/index"
import { V2Body } from "@/components/v2-body"

export default function Home() {
  return (
    <body>
      <div id="div-root">
        <div id="title">
            <h1>Gerador de times</h1>
        </div>
        <V2Body />
        <div id="result">
        </div>
      </div>
    </body>
  )
}
