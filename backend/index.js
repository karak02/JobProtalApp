import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/home',(req,res)=>{
    return res.status(200).json({
        message:"i am back"
    })   
});
const port = 5000;


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
}) 
