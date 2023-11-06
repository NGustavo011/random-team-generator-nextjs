"use client"
import { PointsBody } from "@/components/points-body"
import { Switch } from "@/components/switch"
import { V1Body } from "@/components/v1-body/index"
import { V2Body } from "@/components/v2-body"
import { V2OldBody } from "@/components/v2-old-body"
import { useState } from "react"

export default function Home() {
  const [version, setVersion] = useState("v1")
  return (
    <body>
      <div id="div-root">
        <div id="title">
            <h1>Gerador de times</h1>
            <Switch version={version} setVersion={setVersion} />
        </div>
        {
          version=="v1"&&<V1Body />
        }
        {
          version=="v2"&&<V2Body />
        }
        {
          version=="v2-old"&&<V2OldBody />
        }
        {
          version=="pontos"&&<PointsBody />
        }
        <div id="result">
        </div>
      </div>
    </body>
  )
}
