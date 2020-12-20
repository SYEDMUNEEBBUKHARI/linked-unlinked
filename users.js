//run node users.js
const express=require('express');
let $Port=9000;
const unlinked =require('./unlinked.js');
const allUsers = [
    {
        id: 100,
        name: "Qasim Salam"
    },
        {
        id: 101,
        name: "Neelam Anwar"
    },
        {
        id: 102,
        name: "Saad Javaid"
    },
        {
        id: 103,
        name: "Talha Masood"
    },
        {
        id: 104,
        name: "Ali Bilal"
    },
        {
        id: 105,
        name: "Zain"
    },
    {
        id: 106,
        name: "Talal Ali"
    },
        {
        id: 107,
        name: "Bilal Zain"
    },
        {
        id: 108,
        name: "Mueez Ali"
    },
];

const linked = [
    {
        id: 106,
        name: "Talal Ali"
    },
    {
        id: 108,
        name: "Mueez Ali"
    },
]
const app=express();
const data=unlinked.unlinked(allUsers,linked);
console.log("unlinked employees are",data);
app.listen($Port,()=>{
    console.log(`server running on ${$Port}`);
})

