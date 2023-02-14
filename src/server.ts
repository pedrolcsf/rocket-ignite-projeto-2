import { env } from './env'
import { app } from './app'

app
  .listen({
    port: env.PORT,
  })
  .then(() => console.log(`server strarted on port ${env.PORT}`))
