const myEmojis = ["๐จโ๐ป", "โท", "๐ฒ"];
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
 "๐ ๐ ๐ ๐ ๐งจ โจ ๐ ๐ ๐ ๐", 
 "๐ฃ ๐คฟ ๐ฟ ๐ฎ  ๐ฏ ๐ช ๐ช ๐ฎ ๐น๏ธ ๐ฐ",
 "๐ ๐ ๐ ๐ ๐ ๐คฃ ๐ ๐ ๐ ๐",
 "๐ ๐คฉ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐คช",
 "๐คซ ๐ค ๐ค ๐คจ ๐ฅต ๐ฅณ ๐ค ๐ฃ ๐ก ๐ ",
 "๐ ๐ ๐ ๐ ๐ ๐ ๐ฅฐ ๐ ๐ค ๐คญ",
 "โฝ โพ ๐ฅ ๐ ๐ ๐ ๐พ ๐ โณ โธ๏ธ",
 "๐ ๐ฒ ๐ ๐งง ๐ ๐ ๐งธ ๐๏ธ ๐ ๐",
 "๐ฒ ๐งฉ ๐งธ โ๏ธ ๐ ๐ญ ๐ผ๏ธ ๐จ ๐งต ๐ฐ"];

  
const sampleEmojis = document.getElementById("sample-emojis");
let list = "";
for (let i = 0; i < arr.length; i++)
{
    list += `
    <ul>${arr[i]}</ul>`;
}
sampleEmojis.innerHTML = list;


