const express = require('express');

const router =express.Router()


router.get('/todos',(request,response)=>{
    response.json({message:"all todos"})
});

router.get('/todos',(request,response)=>{

});

router.get('/todo/:id',(request,response)=>{

});

router.put('/todo/:id',(request,response)=>{

});

router.delete('/todo/:id',(request,response)=>{

});

module.exports = router;