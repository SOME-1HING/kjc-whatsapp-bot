import { client } from "..";

client.on("message", (msg) => {
  if (msg.body == "!stats") {
    msg.reply("pong");
  }
});
