import "reflect-metadata";
import { Server } from 'http'
import * as http from 'http'
import "reflect-metadata";
import { createConnection } from "typeorm";
import { app } from './app'

const server: Server = http.createServer(app)

const port: number = 1234
const tries: number = 3
const waitTime: number = 4000

server.listen(port)
server.on('listening', async () => {
  console.log(`server connected, listening on port ${port}`)

  tryCreateConnection(tries, waitTime)
  console.log(`connected to the database`)
})
const tryCreateConnection: (tries: number, waitTime: number) => void = async (tries, waitTime) => {
  if (tries <= 0) {
    console.log(`Unable to connect to database, aborting.`)
    process.exit(-1)
  }

  try {
    await createConnection()
  } catch (error) {
    console.log(`Failed to connect to the database, trying again. ${error}`)
    setTimeout(() => tryCreateConnection(tries - 1, waitTime), waitTime)
  }
}