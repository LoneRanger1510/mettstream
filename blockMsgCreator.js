function Message(type, content){
    let blockDiv = document.createElement("div");
    let blockText = document.createElement("span");
    let blockTextNode = document.createTextNode("");
    blockTextNode.nodeValue = content;
    // new-added für hellere Farbe hinzufügen
    blockDiv.setAttribute("class", "new-added");
    blockDiv.setAttribute("type", type);
    blockText.appendChild(blockTextNode);
    blockDiv.appendChild(blockText);

    return blockDiv;
}