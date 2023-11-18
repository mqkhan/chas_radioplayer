// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

const containerEl = document.getElementById("container");
const ulEl = document.getElementById("channels-list");

async function getChannel() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels/?format=json"
  );
  const data = await response.json();

  data.channels.forEach((channel) => {
    const liEl = document.createElement("li");
    liEl.setAttribute("class", "channel-item");
    ulEl.appendChild(liEl);

    const imageEl = document.createElement("img");
    imageEl.setAttribute("src", `${channel.image}`);
    liEl.appendChild(imageEl);
    imageEl.style.width = "100px";
    imageEl.style.height = "100px";

    const divEl = document.createElement("div");
    divEl.setAttribute("class", "classDiv");
    liEl.appendChild(divEl);

    const nameEl = document.createElement("h2");
    nameEl.innerHTML = `${channel.name}`;
    divEl.appendChild(nameEl);

    const audioEl = document.createElement("audio");
    audioEl.controls = true;

    const sourceEl = document.createElement("source");
    sourceEl.setAttribute("src", `${channel.liveaudio.url}`);
    sourceEl.setAttribute("type", "audio/mpeg");
    audioEl.appendChild(sourceEl);

    divEl.appendChild(audioEl);
  });
}

getChannel();

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
