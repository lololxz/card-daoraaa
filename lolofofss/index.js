const express = require("express"),
  app = express(),
  ejs = require('ejs'),
  client = new (require("discord.js")).Client()
const Badge = require("./Badge");

client.on("ready", async () => {
  console.log('[BOT] Iniciado')
  await client.user.setStatus("idle");
});

app.set("view engine", "ejs");
app.use(express.static("public"))


app.use(function(req, res, next) {
  res.removeHeader("x-powered-by")
  next();
});

app.post("*", async (req, res) => {
  return res.send('nao')
});


app.get("/", async (req, res, next) => {
  const sat = await client.users.fetch("1027721997679087717")


  const server = await client.guilds.fetch("1059212765220319273")


  return res.render("index", {
    sat,
    server,
  });
});

app.get("/webhooksender", async (req, res, next) => {
  return res.render("webhook", {
  });
});

app.get("/kaue", async (req, res, next) => {
  return res.render("kaue", {
  });
});


app.use(function(req, res) {
  res.status(404).redirect('https://youtu.be/SnZBwzj8Zyw');
});

client.login(process.env.TOKEN);

app.listen(process.env.PORT, () => {
  console.log('[EXPRESS] Iniciado')
});

setTimeout(() => process.exit(), 600000)


var music = document.getElementById("music");
var playPauseBtn = document.getElementById("playPauseBtn");
var muteBtn = document.getElementById("muteBtn");


function togglePlayPause() {
    if (music.paused) {
        music.play();
        playPauseBtn.textContent = "Pause";
    } else {
        music.pause();
        playPauseBtn.textContent = "Play";
    }
}


function toggleMute() {
    if (music.muted) {
        music.muted = false;
        muteBtn.textContent = "Mute";
    } else {
        music.muted = true;
        muteBtn.textContent = "Unmute";
    }
}
