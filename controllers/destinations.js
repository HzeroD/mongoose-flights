import { Destination } from "../models/destination.js"

function newDestination(req,res){
    res.render('destinations/new.ejs',{
        title: "Add Departure"
    })
}

function create(req,res){
    Destination.create(req.body, function(err, destination) {
        res.redirect('/destinations/new')
      })
}



export{
    newDestination as new,
    create
}