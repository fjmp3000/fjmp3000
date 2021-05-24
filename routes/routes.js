const express = require("express")
const router = express.Router()
const path = require("path")
const pool = require("../views/database")

router.get("/", (req, res) => {
    res.render("inici/index")
})


router.get("/reciclatge", (req, res) => {
    res.render("reciclatge/index")
})

router.get("/la-suissa", (req, res) => {
    res.render("la-suissa/index")
})


router.get("/historia", (req, res) => {
    res.render("historia/index")
})

router.get("/contacte", (req, res) => {
    res.render("contacte/index")
})


router.post("/contacte", async (req, res) => {
    const { username, apellido, email, pregunta } = req.body;
    const newQuest = {
        username,
        apellido,
        email,
        pregunta
    };
    await pool.query("INSERT INTO contacte set ?", [newQuest])
        .then(() => {
            console.log("Los Datos se han guardado a la DB")
            res.render("contacte/index")
        })
        .catch(err => {
            console.log(err)
            res.render("contacte/index")
        })
})

module.exports = router
