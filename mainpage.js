var myHeading = document.querySelector("header").querySelector("a");
myHeading.textContent += "0.0.2";
var containerM = document.getElementById("mettstream-container");

function createBlock(text) {
    var newBlock = document.createElement("div");
    var newText = document.createTextNode("PPPP");
    newBlock.appendChild(newText);
    newBlock.setAttribute("class","js-new-added");
    newText.nodeValue = text;
    containerM.appendChild(newBlock);
}

function createBlock() {

        blockDiv = document.createElement("div");
        blockText = document.createElement("span");
        blockTextNode=document.createTextNode("");
        blockTextNode.nodeValue="Das ist ein Test";
        blockDiv.setAttribute("class", "js-new-added");
        blockText.appendChild(blockTextNode);



    blockDiv.appendChild(blockText);
    containerM.appendChild(blockDiv);
}


function createBlockText(){

}