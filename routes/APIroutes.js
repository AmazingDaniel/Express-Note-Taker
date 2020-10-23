var router = require("express").Router()
var db = require("../db/db.json")
var fs = require("fs")
const uuidv4 = require("uuid")


router.get("/api/notes",function(reg,res){
    res.json(db)
})

router.post("/api/notes",function(req,res){

   
   //req.body.id= uuidv4()
   console.log(req.body)
    db.push(req.body);
      fs.writeFile("./db/db.json",JSON.stringify(db),function(){
          res.json(db)
      })
})

router.delete("api/notes/:id", function(req,res){
        var id = req.params.id
        for (let i = 0; i < db.length; i++) {
             if (db[i].id===id){
                 db.splice(i,1)
             }
            
        }
        fs.writeFile("./db/db.json",JSON.stringify(db),function(){
            res.json(db)
        })
});



module.exports = router