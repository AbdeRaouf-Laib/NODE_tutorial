/******************command*****************/
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/*******************rescorce********************/
/*1-) Website: coding addict                   */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/****************Necessary tools****************/
/*GLOBALS  - NO WINDOW!!!! */
/*  __dirname -path to current directory*/
/* __filename -file name*/
/* require    -function to use modules (CommonJS)*/
/* module     -info about current module (file)*/
/* process    -info about env where thr program is being excuted*/
/* console.log("__dirname",__dirname) console.log("__filename",__filename) console.log("require",require ) console.log("module",module ) console.log("process",process)*/
/* setI*/
/* */
/* */
/* */
/* */

const { log } = require("console")

/*******************Example**********************/
const amount = 12

if (amount < 12) {
    console.log("amounte inf then 12")
} else {
    console.log('amounte sup then 12')
}
console.log(`Hay!!`)
setInterval(() =>{
    console.log("hello world");
},1000)