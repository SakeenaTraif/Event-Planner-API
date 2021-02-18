const {Event} = require("../db/models");

exports.eventCreate =  async(req, res) => {
    try {
      const newEvent = await Event.create(req.body);
      res.status(201).json(newEvent);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    };

exports.eventList = async(req, res) => {
    try {
      const _events = await Event.findAll({
      attributes:["id", "name", "image"]});
      res.json(_events);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.eventDetails = async(req, res) => {
    try {
      const foundEvent = await Event.findByPk(req.params.eventId);
      if (foundEvent){
        res.json(foundEvent);}
        else{
            res.status(404)
            res.json({message: "No Event!"});}
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.eventDelete = async(req, res) => {
    try {
      const foundEvent = await Event.findByPk(req.params.eventId);
        if (foundEvent){
           await foundEvent.destroy();
               res.status(204).end();}
               else{
            res.status(404).json({message: "No Event!"});
        }
     } catch (error) {
          res.status(500).json({ message: error.message });
        }
        };

        exports.eventUpdate = async(req, res) => {
            const { eventId } = req.params;
            try {
                const foundEvent = await Event.findByPk(eventId);
                if (foundEvent) {
                  await foundEvent.update(req.body);
                  res.status(204).end();
                } else {
                 res.status(404).json({ message: "Doesn't match an Event there!" });
        }
            } catch (error) {
              res.status(500).json({ message: error.message });
            }
          };

        //   exports.fullyBooked = async(req, res) =>{
        //     const { numOfSeats, } = req.params;
        //     try {
        //         const _events = await Event.filter((event){
        //         attributes:["id", "name", "image"]});
        //         res.json(_events);
        //       } catch (error) {
        //         res.status(500).json({ message: error.message });
        //       }
        //     };