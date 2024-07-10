const express = require('express')
const router = express.Router()

router.post('/displaycatg',(req,res)=>{
    try {
        res.send([global.complaint_catg, global.catg])
        
    } catch (error) {
        console.log(error.message);
        res.send("Server Error")
    }
})

module.exports = router;