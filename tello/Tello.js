const drone = require('../libs/socket');
const { battery, command, takeoff, land } = require('./commands');

class Tello {
  constructor(){
    drone.send(command);
  }

  async getBattery(){
    await drone.send(battery)
  }

  async arm(){
    await drone.send(takeoff)
  }

  async disarm(){
    await drone.send(land)
  }
}

module.exports = Tello;