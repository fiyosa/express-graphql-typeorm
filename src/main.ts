import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginUsageReportingDisabled } from '@apollo/server/plugin/disabled'

import express, { Application } from 'express'
import db from './config/db'
import env from './config/env'
import setup from './config/setup'
import { resolvers, typeDefs } from './graphql'

// setup server
const PORT: string | number = env.PORT || 4000
const app: Application = express()

// setup express
setup.express(app)

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    //
    ApolloServerPluginUsageReportingDisabled(),
  ],
})

;(async () => {
  await server.start()

  app.use(
    '/graphql',
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.authorization ?? '' }),
    })
  )

  // error handling
  setup.handler(app)

  // run server
  db.initialize()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`)
      })
    })
    .catch((err) => {
      console.error('Error during Data Source initialization', err)
    })
})()
