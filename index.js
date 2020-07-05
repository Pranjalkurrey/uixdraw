const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));
// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
//app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
