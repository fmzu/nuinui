import type { MetaFunction } from "@remix-run/node"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { client } from "~/lib/client"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Route() {
  const [message, setMessage] = useState("")

  const [url, setUrl] = useState("")

  const mutation = useMutation({
    async mutationFn() {
      const resp = await client.api.posts.$post({
        json: {
          message: message,
          imageUrl: url,
        },
      })

      const json = await resp.json()

      return json
    },
  })

  const onSubmit = () => {
    const result = mutation.mutate()
    alert("投稿しました")
    window.location.reload()
    if (result === null) {
      return
    }
  }

  return (
    <main className="p-8 container space-y-4">
      <h1 className="font-bold">{"投稿"}</h1>
      <form
        className="space-y-2"
        onSubmit={(event) => {
          event.preventDefault()
          onSubmit()
        }}
      >
        <Input
          type={"text"}
          placeholder="メッセージ"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value)
          }}
        />
        <Input
          type={"url"}
          placeholder="画像URL"
          value={url ?? ""}
          onChange={(event) => {
            setUrl(event.target.value)
          }}
        />
        <Button type={"submit"} className="w-full">
          {"登録する"}
        </Button>
      </form>
    </main>
  )
}
