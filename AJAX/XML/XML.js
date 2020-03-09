var btn = document.querySelector("#btn");
function xmlhttp() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "http://www.geoplugin.net/xml.gp?ip=109.122.89.100");
    xmlhttp.send();
    var shk = document.createElement("div")
    var body = document.querySelector("body");
    body.appendChild(shk);


    xmlhttp.onload = function () {

        xmlDoc = xmlhttp.responseXML;
        console.log(xmlDoc);

        var a = xmlDoc.querySelector("geoplugin_credit");
        shk.appendChild(a);
    }
}
btn.addEventListener("click", xmlhttp)
