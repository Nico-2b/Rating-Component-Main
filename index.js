const { setEngine } = require("crypto");
const express = require("express");
const app = express();
const path = require("path")
const favico = require("serve-favicon")

app.get("/", (req, res, next) => {
    res.render("index")
  
})
app.get("/form/:id", (req, res, next) => {
    const id = req.params.id;
    if(id == 0) {
        res.send('<p style="color: red;">A note is requested</p>');

    } else {
        res.render("pattern", {
          id
        })
    }
  
})
app.use(favico(path.join(__dirname , "/images/favicon_io/favicon.ico")))
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




app.listen(1111);