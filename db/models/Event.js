

module.exports =(sequelize,DataTypes) => {
    const Event=  sequelize.define("Event",{
        organizer: { type: DataTypes.STRING , unique: true, validate: {len: [2,20]}},
        name: { type: DataTypes.STRING, notContains: "event" },
        email: { type: DataTypes.STRING ,allowNull: false ,validate: {isEmail: true}},
        numOfSeats: { type: DataTypes.INTEGER, validate: {min: 0}},
        bookedSeats: { type: DataTypes.INTEGER,
            validate: {
                customValidator(value ) {
                  if (value  > this.numOfSeats) {
                    throw new Error("Bookseats Exceed numOfSeats");
                  }
                }}},
        startDate:{ type: DataTypes.DATE, validate:{isAfter: "2021-01-05"},
                validate: {
                    bothCoordsOrNone() {
                        if ((this.startDate === null) && (this.endDate !== null)) {
                          throw new Error("startDate can't be null,unless endDate is null");
                        }
                      }
                }},
        endDate: { type: DataTypes.DATE, allowNull: true,
            validate: {
                bothCoordsOrNone() {
                    if ((this.endDate === null) && (this.startDate !== null)) {
                      throw new Error("endDate can't be null,unless startDate is null");
                    }
                  }
            }},
            
        image: { type: DataTypes.STRING, allowNull: false, validate: {isUrl: true}},
    });

    return Event;
};