var containerM = document.getElementById("mettstream-container");
containerM.addEventListener("mouseover", removeNewAddedColor);

while (containerM.firstChild) {
    containerM.removeChild(containerM.firstChild);
}

var addButton = document.getElementById("new-entry-button").addEventListener("click", createBlockButton);
var addButton2 = document.getElementById("new-entry-button2").addEventListener("click", createBlockButton);

function createBlockButton(e) {
    var newMessage;
    console.log(e.target.parentNode.id);
    switch (e.target.parentNode.id){
        case ("new-entry-button"):
        newMessage = new Message("twitter", "Twitter-Nachricht erstellt!");
        break;
        case ("new-entry-button2"):
        newMessage = new Message("youtube", "Youtube-Nachricht erstellt!");
        break;
    }


    // Div + Text erstellen
    /*var blockDiv = document.createElement("div");
    var blockText = document.createElement("span");
    var blockTextNode = document.createTextNode("");
    blockTextNode.nodeValue = "Das ist ein Test " + Number(Math.round(Math.random() * 100));
    // new-added für hellere Farbe hinzufügen
    blockDiv.setAttribute("class", "new-added");
    blockText.appendChild(blockTextNode);
    blockDiv.appendChild(blockText);*/
    // falls schon ein Element vorhanden ist, vor dem ersten Element einsetzen, ansonsten danach
    if (containerM.firstElementChild) {
        //containerM.firstElementChild.setAttribute("class", "");
        containerM.insertBefore(newMessage, containerM.firstChild);
    } else {
        containerM.appendChild(newMessage);
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