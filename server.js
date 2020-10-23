const express = require("express");
const app = express();
const PORT = process.env.PORT || 4500; 
app.use(express.urlencoded({ extended:true}));
app.use(express.json());
app.use(express.static("public"));


const htmlRoutes=require("./routes/htmlRoutes");

app.use(htmlRoutes);

const APIroutes = require("./routes/APIroutes");

app.use(APIroutes);



app.listen(PORT,function(){
    console.log("app is listening on PORT"+PORT)
});