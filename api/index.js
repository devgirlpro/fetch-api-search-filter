// const express = require('express');
// const cors = require('cors');
// const app = express();
// const Users = require('./users');

import express from "express";
const app = express();
import { Users } from "./users.js";
import cors from "cors";


app.use(cors());

app.get('/', (req, res) => {
    res.send(Users)
})

app.listen(5000, () => {
    console.log("server is running on port 5000")
})