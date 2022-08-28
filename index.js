const myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.getElementById("emoji-container");
const emojiInput = document.getElementById("emoji-input");
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");

function render() {
    emojiContainer.innerHTML = "";
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span');
        emoji.textContent = myEmojis[i];
        emojiContainer.append(emoji);
    }
}

render();

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value);
        emojiInput.value = "";
        render();
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value);
        emojiInput.value = "";
        render();
    }
})

popBtn.addEventListener("click", function() {
    myEmojis.pop();
    render();
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift();
    render();
})


const arr = [
 "🎃 🎄 🎆 🎇 🧨 ✨ 🎈 🎉 🎍 🎎", 
 "🎣 🤿 🎿 🎮  🎯 🪀 🪁 🎮 🕹️ 🎰",
 "😃 😄 😁 😆 😅 🤣 😂 🙂 🙃 😊",
 "😍 🤩 😘 😗 😚 😙 😋 😛 😜 🤪",
 "🤫 🤔 🤐 🤨 🥵 🥳 🤓 😣 😡 😠",
 "🎋 🎍 🎎 😉 😊 😇 🥰 😝 🤗 🤭",
 "⚽ ⚾ 🥎 🏀 🏐 🏈 🎾 🏓 ⛳ ⛸️",
 "🎏 🎲 🎑 🧧 🎀 🎁 🧸 🎟️ 😀 🎊",
 "🎲 🧩 🧸 ♟️ 🃏 🎭 🖼️ 🎨 🧵 💰"];

  
const sampleEmojis = document.getElementById("sample-emojis");
let list = "";
for (let i = 0; i < arr.length; i++)
{
    list += `
    <ul>${arr[i]}</ul>`;
}
sampleEmojis.innerHTML = list;


