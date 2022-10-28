const express = require('express')
const User = require('../DB/Modals/User') // Importing the schema 

const userRouter = new express.Router()


//Since i don't prebuild database so i ll create dummy data from post methods 
userRouter.post('/newuser',async(req,res)=>{
    const user = new User(req.body) // data will be in json in body

    try {
        await user.save()
        res.status(201).send(user) // http status 201 for new creation
    } catch (e) {
        res.status(400).send(e) // To handle bad request like body is not like defined Schema 
    }
})

userRouter.get('/users',async(req,res)=>{ 
    const sort = {};
    const search = {};
    if (req.query.sortBy) { // SorBy end point :- {{task}}/users?sortBy=age:asc or {{task}}/users?sortBy=age:desc
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1]==='desc'?-1:1
        console.log(sort)
    }
    if(req.query.search){
       const parts = req.query.search.split(':') // the end point accept like this {{task}}/users?search=name:Ankit 
       
       const reg = new RegExp(parts[1],'i') // this will match any i for case insensitve 
       search[parts[0]]={$regex:reg}
     
    }
   //pagination 
    const perpage = req.query.perpage ? req.query.perpage:6  // lets say total items is 6 ,perpage = 3 , total page = 6/3 =2 so to go
    const skip = req.query.skip ? req.query.skip :0 // second page skip will be 3 from frontend we can manupulate the pagination 
                                                    // from backend this is effective way to get only required data hence takes less time

    const user = await User.find(search).sort(sort).limit(perpage).skip(skip); // End point :- {{task}}/users?perpage=6&skip=3
    if (!user) {
      res.status(404).send("No User Found");
    }
    res.status(200).send(user);
})

module.exports = userRouter

