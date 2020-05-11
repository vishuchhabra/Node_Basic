const http = require('http') 
const express = require('express')
const port  =4000;
s= http.createServer((req,res)=>
{
    res.write("this is vishu chhara")
    res.write("fffff")
    res.end()
})
s.listen(port,()=>
{
    console.log("server connected")
})
