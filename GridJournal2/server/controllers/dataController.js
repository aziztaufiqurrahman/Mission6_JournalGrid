const data = require("../schema/data")
const mongosee = require('mongoose')

module.export = {
    viewAll: async(req, res, next) => {
        let data = await data.find({})
        res.stastus(200).send(data)
        return next()
    },
    postData: async(req, res, next) => {
        try{let data = {
            title : req.body.title,
            content : req.body.content,
            dateTime : req.body.dateTime
        }
        let a = await data.create(data)
        if(a) {
            res.status(200).send(data)
            return next()
        }} 
        catch(err){console,log(err)}
        res.status(400).send({message : 'fail'})
        return next()
    },
    deleteData: async(req, res, next) => {
        try{let data = {
            title : req.body.title
        }
        let a = await data.create(data)
        if(a) {
            res.status(200).send(data)
            return next()
        }} 
        catch(err){console,log(err)}
        res.status(400).send({message : 'fail'})
        return next()
    },
    updateData: async(req, res, next) => {
        try{
            let data = {
            title : req.body.title,
            content : req.body.content,
            dateTime : req.body.dateTime
            }
        let title = req.body.name
        let a = await data.updateOne({name : name}, {$set:data})
        if(a) {
            res.status(200).send(success)
            return next()
        }} 
        catch(err){console,log(err)}
        res.status(400).send({message : 'fail'})
        return next()
    }
}