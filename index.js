const express = require('express');
const app = express();

app.get('/' , (req, res) => {
    res.send('Thank you very much => I think my life for palestinegit ad');
})
app.listen(3000 , ()=> console.log('Successfully'));