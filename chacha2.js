//Lauren Hopkins
//Version

var autonomy = require('ardrone-autonomy');
var mission  = autonomy.createMission();


mission.takeoff()
       .zero()
       .altitude(1)
       .left(1)
       .right(1)
       .backward(1)
       .up(1)
       .down(1)
       .go({x:-0.5,y:0,z:-0.5})
       .go({x:0.5,y:0,z:0.5})
       .go({x:0.5,y:0,z:0.5})
       .go({x:-0.5,y:0,z:-0.5})
       .forward(1)
      . backward(1)
      .forward(1)
      . backward(1)
      .cw(360)
      .left(1)
      .backward(1)
      .up(1)
      .down(1)
        .go({x:-0.5,y:0,z:-0.5})
       .go({x:0.5,y:0,z:0.5})
       .go({x:0.5,y:0,z:0.5})
       .go({x:-0.5,y:0,z:-0.5})
       . backward(1)
      .forward(1)
      . backward(1)
      //..lights (flash) not sure how to do this//
      .right(1)
     .left(1)
    .backward(1)
    .up(1)
    .down(1)
    .up(1)
   .down(1)
   .go({x:-0.5,y:0,z:-0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:-0.5,y:0,z:-0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:-0.5,y:0,z:-0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:-0.5,y:0,z:-0.5})
   .left(1)
   .right(1)
// ideas for criss cross needed cant think of on//
   .forward(1)
  . backward(1)
  .forward(1)
  . backward(1)
  .cw(360)
  .left(1)
  .backward(1)
  .up(1)
 .down(1)
 .up(1)
 .down(1)

.up(1)
 .down(1)
.up(1)
 .down(1)
 .go({x:-0.5,y:0,z:-0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:-0.5,y:0,z:-0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:-0.5,y:0,z:-0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:-0.5,y:0,z:-0.5})
// hands on knees not sure mad multicolour flashing maybe?//
  .down(3)
  .up(3)  // for this could try and get it to hover over the symbol then go back up to original height.//
   .forward(1)
  . backward(1)
  .forward(1)
  . backward(1)
  .cw (360)
 .left(1)
.backward(1)
.up(1)
 .down(1)
.up(1)
 .down(1)
.up(1)
 .down(1)
.up(1)
 .down(1)
.up(1)
 .down(1)
  .go({x:-0.5,y:0,z:-0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:-0.5,y:0,z:-0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:-0.5,y:0,z:-0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:-0.5,y:0,z:-0.5})
 .go({x:-0.5,y:0,z:-0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:-0.5,y:0,z:-0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:-0.5,y:0,z:-0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:-0.5,y:0,z:-0.5})
 .go({x:-0.5,y:0,z:-0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:-0.5,y:0,z:-0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:-0.5,y:0,z:-0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:-0.5,y:0,z:-0.5})
.hover()  // not sure about that//     

// ideas of how to show clap//
.down(3)
  .up(3)  // for this could try and get it to hover over the symbol then go back up to original height.//
.up(1)
.down(1)

.right(1)
.left(1)
.forward(1)
.backward(1)
.forward(1)
.backward(1)
.forward(1)
.backward(1)

.cw(360)
.left(1)
.backward(1)
.up(1)
.down(1)
.up(1)
.down(1)
.cw(360)
. cw(360)
.left(1)
.right(1)
.cw(360)
.cw(360)

.forward(1)
.backward(1)
.forward(1)
.backward(1)
.forward(1)
.backward(1)
.forward(1)
.backward(1)
.cw(360)
.left(1)
.backward(1)
.up(1)
.down(1)
.up(1)
.down(1)
.up(1)
.down(1)
.up(1)
.down(1)
.go({x:-0.5,y:0,z:-0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:-0.5,y:0,z:-0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:-0.5,y:0,z:-0.5})
   .go({x:0.5,y:0,z:0.5})
   .go({x:-0.5,y:0,z:-0.5})
// ideas for Charlie brown part???//
.cw(360)
.right(1)
.left(1)
.backward(1)
.forward(1)
.backward(1)
.forward(1)
.backward(1)
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
