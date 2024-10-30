import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { client } from "~/lib/client"

/**
 * 管理者が新しいユーザを追作成する
 * 管理者以外はアクセスできない
 * @returns
 */
export default function Route() {
  const [name, setName] = useState("")

  const [loginId, setLoginId] = useState("")

  const [password, setPassword] = useState("")

  const mutation = useMutation({
    async mutationFn() {
      const resp = await client.api.users.$post({
        json: {
          name: name,
          email: loginId,
          password: password,
        },
      })

      const json = await resp.json()

      return json
    },
  })

  const onSubmit = () => {
    const result = mutation.mutate()
    alert("アカウントを作成しました")
    window.location.reload()
    if (result === null) {
      return
    }
  }

  return (
    <main className={"mx-auto max-w-xs space-y-4 p-4 pt-40"}>
      <h1 className="font-bold">{"新規登録"}</h1>
      <form
        className="space-y-2"
        onSubmit={(event) => {
          event.preventDefault()
          onSubmit()
        }}
      >
        <Input
          type={"text"}
          placeholder="ユーザ名"
          value={name}
          onChange={(event) => {
            setName(event.target.value)
          }}
        />
        <Input
          type={"email"}
          placeholder="メールアドレス"
          value={loginId}
          onChange={(event) => {
            setLoginId(event.target.value)
          }}
        />
        <Input
          type={"password"}
          placeholder="パスワード"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        />
        <Button type={"submit"} className="w-full">
          {"登録する"}
        </Button>
      </form>
    </main>
  )
}
