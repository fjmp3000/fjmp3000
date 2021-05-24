const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path")
const exphbs = require("express-handlebars")

app.use(express.static('views'));
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set("port", 3000 || process.env.PORT)
app.set("views", path.join(__dirname, "views"))

app.use((req, res, next) => {

    next()
})

app.engine(".hbs", exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    extname: ".hbs",
}));
app.set("view engine", ".hbs")

app.listen(app.get("port"), () => {
    console.log("La web se ha iniciado en el puerto:", app.get("port"))
})

//RUTAS

app.use(require("./routes/routes"))