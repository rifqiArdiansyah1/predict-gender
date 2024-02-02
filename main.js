const base_api = "https://api.genderize.io";

function showResult(name, gender, probability) {
    const predictionElement = document.getElementById('prediction');
    const probabilityPrecentage = probability * 100;
    let genderDecode;
    
    if (gender == "male") {
        genderDecode = "Laki-Laki";
    } else {
        genderDecode = "Perempuan";
    }

    const predictionText = `Halo ${name}, Jenis Kelamin Kamu Kemungkinan Adalah ${genderDecode} Sebesar ${probabilityPrecentage}%`;
    predictionElement.textContent = predictionText;
}

async function predict(event) {
    if(event.key == "Enter") {
        const firstName = event.target.value;
        const queryUrl = `${base_api}/?name=${firstName}&country_id=ID`;

        const response = await fetch(queryUrl)
        const result = await response.json();

        showResult(result.name, result.gender, result.probability)
    }
}