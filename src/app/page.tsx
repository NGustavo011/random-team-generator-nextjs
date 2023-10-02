"use client"
import { Switch } from "@/components/switch"
import { V1Body } from "@/components/v1-body/index"
import { V2Body } from "@/components/v2-body"
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
          version=="v1"
          ?
          <V1Body />
          :
          <V2Body />
        }
        <div id="result">
        </div>
      </div>
    </body>
  )
}
