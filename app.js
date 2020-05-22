//const fs = require('fs')

//asynchrouns request //non blocking

// fs.readFile('./simple.txt','utf8',function(err,data)
// {
//     if(err)
//     console.log(err)
//     else
//     console.log(data);
// })

// console.log("ending the prgrogram with e ")

// //sybchrouns request

// const data= fs.readFileSync('./simple.txt')
// console.log(data)

// console.log("prgoram ending with s")

// //for deleting the file we have function fs.unlink("file name")
// //for appending the content in the file we have append function.
// //synchrouns means blocking

// fs.appendFile('./simple.txt',"this is appending content",function(err,data)
// {
//     console.log("append sucessful")
// })




//About express 

const express =  require('express')
const app = express()


//one way using sendFile
app.get('/',(req,res)=>
{   res.sendFile("./index.html", {root: __dirname })
})

module.exports = app