express = require("express")

app = express()

app.use("/" , (req, res) => {
    res.send("Hello World from server")
})


app.listen(7777 , () => {
    console.log("server is listening on port 7777...")
})