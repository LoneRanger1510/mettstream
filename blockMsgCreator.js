var message = {
    blockDiv: document.createElement("div")
        .setAttribute("class", "new-added"),
    blockText: document.createElement("span"),
    blockTextNode: document.createTextNode("")
        .nodeValue = "Das ist ein Test " + Number(Math.round(Math.random() * 100)),
    removeNewAddedColor: function (e) {
        if (e.target && e.target.className != "") {
            console.log("e " + e.target);
            e.target.setAttribute("viewed", "");
            e.target.removeAttribute("class");
        }
    },
    text: {
        header: "hallo, bin header",
        content: "heio, bin der condennd"
    },
};