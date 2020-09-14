process.env.PORT = 8889
process.env.HOST = '192.168.10.1'

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
const Tello = require('./tello/Tello');

console.log('Hello World');

const tello = new Tello()

async function main(){
  let action = true;
  while(action !== 'no'){
    await tello.getBattery();
    await tello.arm()
    await tello.disarm()
    break;
  }
}

main()