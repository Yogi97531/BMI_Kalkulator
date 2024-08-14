document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Masukkan nilai berat dan tinggi badan yang valid!');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    let category = '';

    if (bmi < 18.5) {
        category = 'Kekurangan berat badan';
    } else if (bmi < 24.9) {
        category = 'Normal (ideal)';
    } else if (bmi < 29.9) {
        category = 'Kelebihan berat badan';
    } else {
        category = 'Obesitas';
    }

    document.getElementById('bmiValue').innerText = `BMI Anda: ${bmi}`;
    document.getElementById('bmiCategory').innerText = `Kategori: ${category}`;
    document.getElementById('result').style.display = 'block';
});
