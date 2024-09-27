function convert() {
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let Temperature = parseFloat(document.getElementById("temperature").value);

    let ConvertValue;
    let ResultValue;

    switch (fromUnit) {
        case "C":
            if (toUnit === "F") {
                ConvertValue = (Temperature * 9 / 5) + 32;
                ResultValue = "F";
            } else {
                ConvertValue = Temperature;
                ResultValue = "C";
            }
            break;

            case "F":
            if (toUnit === "C") {
                ConvertValue = (Temperature - 32) * 5/9;
                ResultValue = "C";
            } else {
                ConvertValue = Temperature;
                ResultValue = "F";
            }
            break;
 }

 document.getElementById("result").value = ConvertValue.toFixed(2) + " "+ ResultValue;
}