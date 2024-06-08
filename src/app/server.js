const WebSocket = require("ws");

const wss = new WebSocket.Server({ port : 8081 });

let eventList = [];

wss.on('connection', (ws) => {
  console.log('クライアントが接続！');

  ws.on('message', (message) => {
    const data = JSON.parse(message);

    // 新しいイベントを追加した時
    if (data.type === 'newEventList') {
      console.log("イベント追加！");
      eventList.push(data.content);
      wss.clients.forEach((client) => {
        if(client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'updateEventList', eventList }));
        }
      });
      console.log(eventList);
    //ルーレットを回した時
    } else if (data.type === 'roulette') {
      const randomList = eventList[Math.floor(Math.random() * eventList.length )];
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'rouletteResult', content: randomList}))
        }
      });
    }
  });

  ws.on('close', () => {
    console.log('クライアントが抜けました');
  });
});
// test commit
console.log('WebSocketサーバーが起動しました。 ws://localhost:8081');