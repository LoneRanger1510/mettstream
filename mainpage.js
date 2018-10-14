document.querySelector("header").querySelector("a").textContent += "0.0.3";
var containerM = document.getElementById("mettstream-container");
while (containerM.firstChild) {
    containerM.removeChild(containerM.firstChild);
}

var blockArray = [];

function createBlock(text) {
    var newBlock = document.createElement("div");
    var newText = document.createTextNode("PPPP");
    newBlock.appendChild(newText);
    newBlock.setAttribute("class", "js-new-added");
    newText.nodeValue = text;
    containerM.appendChild(newBlock);
}

// function createBlockMain(textContent, type){
//   if(type == twitter){
//     createBlockTwitter(textContent);
//   }
//
// }

function createBlockButton() {

    blockDiv = document.createElement("div");
    console.log("reach?");
    blockText = document.createElement("span");
    blockTextNode = document.createTextNode("");
    blockTextNode.nodeValue = "Das ist ein Test "+Number(Math.round(Math.random()*100));
    blockDiv.setAttribute("class", "js-new-added");
    blockText.appendChild(blockTextNode);
    blockDiv.appendChild(blockText);
    
    if(containerM.hasChildNodes){
        containerM.insertBefore(blockDiv, containerM.firstChild);
        //console.log("test");
    }
    else{
        containerM.appendChild(blockDiv);
    }
    
    
    //blockArray.push(blockDiv);
    //console.log(blockArray);

}


function createBlockText() {

}