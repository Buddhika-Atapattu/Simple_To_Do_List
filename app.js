const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");



const app = express();
const port = process.env.PORT || 3000;


app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

const items = ["Get up", "Ready", "Cock"];
const workItems = [];

app.get("/", (req, res) => {

    const day = date.getDay();
    res.render("list", {
        listTitle: day,
        newListItems: items,
    });

});

app.post("/", (req, res) => {
    const item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);

        res.redirect("/work");
    }
    else {
        items.push(item);

        res.redirect("/");
    }

});

app.get("/work", (req, res) => {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.post("/work", (req, res) => {

    const item = req.body.newItem;

    workItems.push(item);

    res.redirect("/work");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(port, () => {
    console.log("Server running!");
});