var MODES = {
	"car":                  0.871,
	"inner city bus":       0.661,
	"long distance bus":    0.176,
	"commuter rail":        0.375,
	"subway trains":        0.375,
	"long distance trains": 0.419,
	"delivery vans/trucks": 2.866, 
	"big rigs":             4.233, 
	"plane":                0.408
};


function getFormData() {
	var result = {
		"mode": "",
		"mileage": 0
	};

	// Extract mode from form
	var modeElem = document.getElementById("Transportation");
	result["mode"] = modeElem.options[modeElem.selectedIndex].value;
	
	// Extract mileage from form
	var mileageElem = document.getElementsByName("Mileage")[0];
	result["mileage"] = parseInt(mileageElem.value);
	
	return result;
}

function handleButtonClick(event) {
	var answer = 0;
	var formData = getFormData();
	var mileage = formData["mileage"];
	var mode = formData["mode"];

	// Compute Carbon offsets
	console.log(formData); 
	answer = (mileage * MODES[mode]);
	answer = Math.ceil(answer);
	answer /= 1000;
	console.log(answer);

	// Display results
	var resultElem = document.getElementById("result");
	resultElem.style.display = "block";
	document.getElementById("offsetTotal").innerHTML = String(answer);

}

// Attach handleButtonClick to button
document.getElementById("formButton").addEventListener("click", handleButtonClick);