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
          message: "Hello, World!",
          imageUrl: null,
        },
      })
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
      <div className="space-y-2">
        <Textarea />
        <div className="flex justify-end">
          <Button onClick={onSubmit}>{"投稿"}</Button>
        </div>
      </div>
    </div>
  )
}
