const express =  require('express')
const app = express();
app.get( "/", (_, res) => res.send("hello  world"));
const port = 3001;
app.listen(port)