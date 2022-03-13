const express= require ("express");


const app= express();
app.use(express.json());



const addtwonumber= (n1,n2) => {

    if (Number.isNaN(n1) || Number.isNaN(n2)){
        throw "error";
    }
return n1+n2;
}
app.get("/addtwonumber", (req,res) => {

    try{
    const n1= parseInt(req.query.n1);
    const n2= parseInt(req.query.n2);
    const result=addtwonumber(n1,n2);

    res.json({statuscode:200, data:result});
}catch(e){
    res.json({statuscode:200, data:"something went wrong"});
}
})


app.post("/addtwonumber", (req,res) => {

    try{
    const n1= req.body.n1;
    const n2= req.body.n2;
    const result=addtwonumber(n1,n2);

    res.json({statuscode:200, data:result});
}catch(e){
    res.json({statuscode:200, data:"something went wrong"});
}
})


const port= 3030;

app.listen(port, () => {

    console.log("Hello I'm listening to port " +port);

} )


