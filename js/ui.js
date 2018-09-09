function populate(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML = '';
    var optionArray = ["|",
        "ALTERATION REMODEL|Alteration Remodel",
        "NEW COMMERCIAL|New Commercial",
        "DEMOLITION|Demolition",
        "COM TENANT IN-FILL|Commercial Tenant In-fill",
        "RES ACCESSORY|Residential Accessory",
        "ADDITION RESIDENTIAL|Residential Addition",
        "ALTERATION REMODEL RES|Residential Remodel/Alteration",
        "NEW RESIDENTIAL|New Residential",
        "POOL RESIDENTIAL|residential Pool"
    ];

    if (s1.value == "Jan18") {
        optionArray = optionArray;
    } else if (s1.value == "feb18") {
        optionArray = optionArray;
    } else if (s1.value == "mar18") {
        optionArray = optionArray;
    };

    for (i in optionArray) {
        var pair = optionArray[i].split("|");
        var NewOption = document.createElement("option");
        NewOption.value = pair[0];
        NewOption.innerHTML = pair[1];
        s2.options.add(NewOption);
    };
}