const dgram = require('dgram');
const wait = require('waait');
const commandDelays = require('../tello/commandDelays');

const { PORT, HOST } = process.env;

const drone = dgram.createSocket('udp4');
drone.bind(PORT);

drone.on('message', message => {
  console.log(`--> ${message}`);
});

drone.on('error', (err) => {
  drone.send('land');
})

function handleErrors(err) {
  if(err){
    console.log('Error ===>', err);
  }
}

async function waitForCommand(command){
  console.log(`with delay ${commandDelays[command.split(' ')[0]]}`)
  await wait(commandDelays[command.split(' ')[0]])
}

module.exports.send = async function (command) {
  console.log(`Sending command: ${command}`)
  drone.send(command, 0, command.length, PORT, HOST, handleErrors);
  await waitForCommand(command);
}