// This is just a simple shared plaintext pad, with no execution capabilities.

// When you know what language you'd like to use for your interview,
// simply choose it from the dropdown in the top bar.

// You can also change the default language your pads are created with
// in your account settings: https://coderpad.io/settings

// Enjoy your interview!

/*
Traffic Lights

Write a simulation of traffic lights. There are 2 traffic lights. One light controls north-south traffic. The second controls east-west traffic.

One light is red while the other light goes through the following cycle:

Green for 8 seconds.
Yellow for 3 seconds.
Red for 2 seconds (Thus, both lights will be red for these 2 seconds).

After this, the second light goes through this same cycle while the first light remains red.

Desired output: Print out the state of both lights at each second.

The system must be unit-testable. For time, use simulated time (not real time -- don't need setInterval or setTimeout) -- a simple integer that increments is sufficient for simulating the seconds.
*/



  class TrafficLight {
    constructor() {
      this.color = '';
      this.active = true;
    }
    
    setColor(time) {
      if (time <= 7) {
        this.color = 'green';
      } else if (time >= 7 && time <= 10) {
        this.color = 'yellow';
      } else {
        this.color = 'red';
      }
    }
    
    getColor() {
      if (this.active === false) {
        return 'red';
      }
      return this.color;
    }
    
    toggleActive() {
      this.active = !this.active;
    }
  }

const northSouth = new TrafficLight;
const eastWest = new TrafficLight;
northSouth.toggleActive();

let count = 0;

for (let i = 0; i <= 12; i++) {
  northSouth.setColor(i);
  console.log('northSouth', northSouth.getColor(), i);
  eastWest.setColor(i);
  console.log('eastWest', eastWest.getColor(), i);
  
  if (i === 12 && count < 10) {
    northSouth.toggleActive();
    eastWest.toggleActive();
    i = 0;
    console.log(count)
    count ++;
  }
}

const testLight = new TrafficLight;

testLight.toggleActive();
console.log('testLight:', testLight.getColor(), '--it should be red when active is false');

testLight.toggleActive();
testLight.setColor(0);
console.log('testLight:', testLight.getColor(), '--it should be green at 0 seconds of cycle');

testLight.setColor(8);
console.log('testLight:', testLight.getColor(), '--it should be yellow at 8 seconds of cycle');

testLight.setColor(11);
console.log('testLight:', testLight.getColor(), '--it should be red at 11 seconds of cycle');

// Solution implements a TrafficLight class that runs in 12 second cycles.
// Currently the lights are set to run for 10 cycles so that the answer can be read, but it could easily be modified to be a continous loop.
// Possible improvements could include a trafficIntersection class to coordinate timing of lights.

