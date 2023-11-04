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
/* */
/* */
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
console.log(__dirname)