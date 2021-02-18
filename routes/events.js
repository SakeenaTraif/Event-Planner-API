const express = require("express");
const {eventCreate,
        eventList,
        eventDetails,
        eventDelete,
        eventUpdate} = require("../controllers/eventController");

const route = express.Router();

    // Create Event Route
    route.post("/", eventCreate);
    
    //EventList Route
    route.get("/", eventList);
  
    //Event Detail Route 
    route.get("/:eventId", eventDetails);
  
    //Event Delete Route
    route.delete(["/:eventId"], eventDelete);

    //Update Event Route 
    route.put("/:eventId", eventUpdate);
  
module.exports = route;