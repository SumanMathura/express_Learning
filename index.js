const express = require("express");

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello ji');
});

app.listen(port, () => {
    console.log(`server running  on ${port}`);
})
