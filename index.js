const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello, World!');
});

// app.get('/sei', (req,res)) => {
//     res.send('SEI 412');
// });


const PORT =process.env.PORT || 8000;
app.listen(PORT, ( => {
    console.log(Server is listening on ${PORT}`);
}));