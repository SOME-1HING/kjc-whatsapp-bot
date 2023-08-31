const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const client = new Client();

client.on("qr", (qr) => {
  // Generate and scan this code with your phone
  console.log("QR RECEIVED", qr);
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", (msg) => {
  if (msg.body == "/ping") {
    msg.reply("pong");
  }
});

client.on("message", (msg) => {
  if (msg.body == "/chatid") {
    msg.reply(msg.from);
  }
});

subscribers = ["120363169091189721@g.us", "917896873865@c.us"];

client.on("message", (msg) => {
  if (msg.body == "/test") {
    subscribers.forEach((id) => {
      client.sendMessage(id, "Message From Bot");
    });
  }
});

client.initialize();

module.exports = client;
