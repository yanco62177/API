const express = require('express');
const apiRoutes = require('./routes')


const app = express();
const PORT = 3000;


app.use('/api',apiRoutes);

app.get('/',(request,response)=>{
    response.status(200).json({message:"Hello Waw"})
})

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
});