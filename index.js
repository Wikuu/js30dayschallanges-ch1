const keyVals = [];

// Get all the key divs
const keys = document.getElementsByClassName("key");

// Create key object with values and append to array
for (let i = 0; i < keys.length; i++){
    let myObj = {};
    myObj[keys[i].firstElementChild.innerHTML.toLowerCase()] = keys[i].getAttribute("data-key");
    keyVals.push(myObj);
}

// On key press, play audio
document.addEventListener("keypress", e => {
    keyVals.map(keyVal => {
        if(Object.keys(keyVal)[0] === e.key){
            const dataKey = keyVal[e.key];
            document.querySelector(`audio[data-key="${dataKey}"]`).play();
        }
    })
});

// On click, play audio
for(let i = 0; i < keys.length; i++){
    keys[i].addEventListener("click", e =>{
        if(e.target.tagName !== "DIV") {
            const audioKey = e.target.parentElement.getAttribute("data-key");
            const audioEl = document.querySelector(`audio[data-key="${audioKey}"]`);
            audioEl.play();
        }
        else {
            const audioKey = e.target.getAttribute("data-key");
            const audioEl = document.querySelector(`audio[data-key="${audioKey}"]`);
            audioEl.play();
        }
    });
}