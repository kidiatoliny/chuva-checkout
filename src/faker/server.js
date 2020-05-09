/* eslint-disable no-undef */

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3333

const fs = require('fs')

let rawdata = fs.readFileSync('./src/faker/store.json')
let stores = JSON.parse(rawdata)

app.use(cors())
app.get('/api/v1/store', (req, res) => res.send(stores))

app.get('/api/v1/store/:id', (req, res) => {
	const { id } = req.params
	stores.filter((store) => {
		if (store.id == id) res.send(store)
	})
})

app.listen(port, () =>
	console.log(`Server  listening at http://localhost:${port}`),
)
