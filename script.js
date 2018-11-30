var i, x = ""
var jcontent = {
    "Items": {
        "Weapon": [
            {"name":"Sentra", "type":"axe", "weight":10},
            {"name":"Maxima", "type":"sword", "weight":10},
            {"name":"Skyline", "type":"dagger", "weight":10}
        ],
        "Armor": [
            {"name":"Taurus", "type":"plate", "weight":100},
            {"name":"Escort", "type":"chain", "weight":100}
        ]
    }
}

for (i = 0; i < jcontent.Items.Weapon; i++) {
    x += myObj.cars[i] + "<br>";
}

var output = document.getElementById('output');
output.innerHTML = x;
