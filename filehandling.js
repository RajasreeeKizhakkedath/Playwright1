/**
 * 
 * 
 * 
 import fs from "fs"
const fs = require('fs');
 */

const fs = require('fs');
fs.readFile('read.txt','utf8',(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(data)
})
//write  to file 
fs.writeFile('output.txt', 'Playwright Test Passed', (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('File written successfully');
});