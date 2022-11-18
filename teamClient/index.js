const WebSocketClient = require('websocket').client;

if (process.argv.length<3) {
    console.log(`Usage: node index.js teamName`)
    process.exit(1);
}
team = process.argv[2];


const client = new WebSocketClient();
client.binaryType = "arraybuffer";
client.on('connectFailed', function (error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function (connection) {
    console.log('WebSocket Client Connected');
    connection.on('error', function (error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function () {
        console.log('Connection Closed');
    });
    connection.on('message', function (message) {
        console.log('Message received');
        const obj = JSON.parse(message.binaryData.toString());
        console.log(obj);

        if (obj.from === "board") {

            commands = [
                "moveUp",
                "moveDown",
                "moveLeft",
                "moveRight",
                "fireUp",
                "fireDown",
                "fireLeft",
                "fireRight"
            ];

            console.log(Math.random(commands.length));
            tank1 = commands[randomIntFromInterval(0,commands.length-1)];
            tank2 = commands[randomIntFromInterval(0,commands.length-1)];
            tank3 = commands[randomIntFromInterval(0,commands.length-1)];


            connection.send(JSON.stringify({
                from: team,
                move: [tank1, tank2, tank3]
            }));
            console.log("Message sent")
        }
    });

});

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
client.connect('ws://localhost:8080/', 'board');