import { authHandler, initAuthConfig } from "@hono/auth-js"
import { apiFactory } from "~/interface/api-factory"
import { authConfig } from "~/interface/auth-config"
import { likeRoutes } from "~/interface/routes/likes"
import { postRoutes } from "~/interface/routes/posts"
import { userRoutes } from "~/interface/routes/users"

export const api = apiFactory
  .createApp()
  .basePath("/api")
  .use("*", initAuthConfig(authConfig))
  .use("/auth/*", authHandler())
  .route("/posts", postRoutes)
  .route("/users", userRoutes)
  .route("/likes", likeRoutes)
