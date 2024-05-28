import bodyParser from 'body-parser'
import express from 'express'
const fs = require("fs");
import path from "path";
import dotenv from "dotenv";

if (fs.existsSync(path.resolve(__dirname, "../.env"))) {
  dotenv.config();
}

const app = express()



app.get('/', (req, res) => res.send({ status: 'Ok' }))


app.listen(process.env.PORT, () => { console.log(`Running on port ${process.env.PORT}`)})

export default app