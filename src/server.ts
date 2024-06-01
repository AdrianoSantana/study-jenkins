import express from 'express'
import fs from "fs"
import path from "path"
import dotenv from "dotenv"

if (fs.existsSync(path.resolve(__dirname, "../.env"))) {
  dotenv.config()
}

const app = express()



app.get('/', (req, res) => res.send({ status: 'Ok' }))


app.listen(process.env.PORT, () => { console.log(`Running --- port --- ${process.env.PORT}`)})

export default app
