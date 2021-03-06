var autonomy = require('ardrone-autonomy');
var mission  = autonomy.createMission();

mission.takeoff()
       .altitude(1)  // Climb to altitude = 1 meter
       .forward(1)
       /*.cw(90)
       .forward(1)
       .cw(90)
       .forward(1)
       .cw(90)
       .forward(1)
       .cw(90)*/
       .land();

mission.run(function (err, result) {
    if (err) {
        console.trace("Oops, something bad happened: %s", err.message);
        mission.client().stop();
        mission.client().land();
    } else {
        console.log("Mission success!");
        process.exit(0);
    }
});
