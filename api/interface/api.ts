import { authHandler, initAuthConfig } from "@hono/auth-js"
import { apiFactory } from "~/interface/api-factory"
import { authConfig } from "~/interface/auth-config"
import { likeRoutes } from "~/interface/routes/likes"
import { myUserRoutes } from "~/interface/routes/my-user"
import { postRoutes } from "~/interface/routes/posts"
import { userRoutes } from "~/interface/routes/users"

export const api = apiFactory
  .createApp()
  .basePath("/api")
  .use("*", initAuthConfig(authConfig))
  .use("/auth/*", authHandler())
  .route("/", likeRoutes)
  .route("/", postRoutes)
  .route("/", userRoutes)
  .route("/", myUserRoutes)
