const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3008;
const app = express();

app.use(cors(
    {
        origin: '*'
    }
))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, "build")));

const accounts = [{
    "id": 1,
    "name": "Account 1",
    "createdOn": "5-8-2021",
    "owner": "User 1",
    "action": "View"
},
{
    "id": 2,
    "name": "Account 2",
    "createdOn": "5-8-2021",
    "owner": "User 2",
    "action": "View"
},
{
    "id": 3,
    "name": "Account 3",
    "createdOn": "5-8-2021",
    "owner": "User 3",
    "action": "View"
}]

app.get("/accounts", (req, res) => {
    res.send(accounts)
});

app.get("/accounts/:id", (req, res) => {
    const id = req.params.id;
    const account = accounts.find(acc => acc.id == id)

    if (account) {
        res.send(account)
    } else (
        res.status(404).send("Account not found")
    )
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});