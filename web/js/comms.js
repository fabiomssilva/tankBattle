
const webSocket = new WebSocket('ws://localhost:8080', "boardProtocol");
webSocket.binaryType = "arraybuffer";

let webSocketReady = 0;

webSocket.onopen = (event) => {
    webSocketReady = 1;
    console.log("Websocket open.");
};

webSocket.onmessage = (event) => {
    try {
        var enc = new TextDecoder("utf-8");
        obj = JSON.parse(enc.decode(event.data));

        console.log(obj)


        if (obj.from === "board") {
            console.log("Own echo");
        }

        if (obj.from === "teamA") {
            console.log("team A input")
            console.log(obj)
            teamANextMove = obj;
        }

        if (obj.from === "teamB") {
            console.log("team B input");
            teamBNextMove = obj;
        }

    }
    catch (err) {
        console.error(err);
        console.log("Input ignored");
    }

}

webSocket.onerror = (error) => {
    console.log(error);
    console.log("WebSocket error");
    alert("Websocket error. Refresh page to restart");
}

webSocket.onclose = () => {
    console.log("WebSocket closed");
    alert("Websocket closed. Refresh page to restart");
}
