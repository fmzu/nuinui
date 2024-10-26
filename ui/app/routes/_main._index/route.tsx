import type { MetaFunction } from "@remix-run/node"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Textarea } from "~/components/ui/textarea"
import { client } from "~/lib/client"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Route() {
  const [message, setMessage] = useState("")

  const mutation = useMutation({
    async mutationFn() {
      const resp = await client.api.posts.$post({
        json: {
          message: message,
          imageUrl: null,
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
    <div className="p-4 space-y-2">
      <p>{"nuinui"}</p>
      <form
        className="space-y-2"
        onSubmit={(event) => {
          event.preventDefault()
          onSubmit()
        }}
      >
        <Textarea
          placeholder="メッセージ"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value)
          }}
        />
        <div className="flex justify-end">
          <Button>{"投稿"}</Button>
        </div>
      </form>
    </div>
  )
}
