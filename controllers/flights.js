import {Flight} from "../models/flight.js"
import {Destination} from "../models/destination.js"


function index(req,res){
    Flight.find({},function(err,flights){
        res.render('flights/index',{
            flights,
            title: "Flights"
        })
    
    })
}

function newFlight(req,res){
    res.render('flights/new',{
        title: 'Add Flight',
        departure: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    })

}

function create(req,res){
    const flight = new Flight(req.body)
    flight.save(function(err){
        if(err){
          return  res.redirect('flights/new')
        } 
        res.redirect('/flights')
    })
}

function show(req,res){
Flight.findById(req.params.id)
  .populate('destinations')
  .exec(function(err, flight) {
   Destination.find({_id: {$nin: flight.destinations}}, function(err, destinations) {
       
      console.log(flight)
      console.log(destinations)
      console.log(flight.destinations)
      res.render('flights/show', {
        flight,
        title: 'Flight Details',
        destinations
      })
    })
  })
}

function createTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      flight.tickets.push(req.body)
      flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`)
      })
    })
  }

function addToDestination(req,res) {
    Flight.findById(req.params.id, function(err, flight) {
        // Push the objectId of the performer into the flight found
        flight.destinations.push(req.body._id)
        // Save the flight (instance of flight requires a save)
        flight.save(function(err) {
          // Redirect back to the flight's show view
          res.redirect(`/flights/${flight._id}`)
        })
      })

}

export {
    index,
    newFlight as new,
    create,
    show,
    createTicket,
    addToDestination
}