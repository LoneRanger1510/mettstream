var containerM = document.getElementById("mettstream-container");
containerM.addEventListener("mouseover", removeNewAddedColor);

while (containerM.firstChild) {
    containerM.removeChild(containerM.firstChild);
}

var addButton = document.getElementById("new-entry-button").addEventListener("click", createBlockButton);

function createBlockButton() {
    // Div + Text erstellen
    var blockDiv = document.createElement("div");
    var blockText = document.createElement("span");
    var blockTextNode = document.createTextNode("");
    blockTextNode.nodeValue = "Das ist ein Test " + Number(Math.round(Math.random() * 100));
    // new-added für hellere Farbe hinzufügen
    blockDiv.setAttribute("class", "new-added");
    blockText.appendChild(blockTextNode);
    blockDiv.appendChild(blockText);
    // falls schon ein Element vorhanden ist, vor dem ersten Element einsetzen, ansonsten danach
    if (containerM.firstElementChild) {
        //containerM.firstElementChild.setAttribute("class", "");
        containerM.insertBefore(blockDiv, containerM.firstChild);
    } else {
        containerM.appendChild(blockDiv);
    }
}
// Funktion um den hellen Hintergrund zu entfernen
function removeNewAddedColor(e) {
    if (e.target && e.target.className != "") {
        console.log("e " + e.target);
        e.target.setAttribute("viewed", "");
        e.target.removeAttribute("class");
    }

}

