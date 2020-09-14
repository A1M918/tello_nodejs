process.env.PORT = 8889
process.env.HOST = '192.168.10.1'

const readline = require('readline');
readline.emitKeypressEvents(process.stdin);

process.stdin.setRawMode(true);

process.stdin.on('keypress', function (chunk) {
  if(chunk.toString() === '\`') process.exit(0);
  console.log(`====> ${chunk}`);
});
const Tello = require('./tello/Tello');

console.log('Hello World');

const tello = new Tello();

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