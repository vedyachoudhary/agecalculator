function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const birthDateObj = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    const dayDiff = today.getDate() - birthDateObj.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    // Calculate the exact difference
    let years = age;
    let months = monthDiff >= 0 ? monthDiff : 12 + monthDiff;
    let days = dayDiff >= 0 ? dayDiff : new Date(today.getFullYear(), today.getMonth(), 0).getDate() + dayDiff;

    if (dayDiff < 0) {
        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    // Display the exact gap
    const exactGapElement = document.getElementById('exactGap');
    exactGapElement.textContent = `Exact gap: ${years} years, ${months} months, and ${days} days.`;

    // Display the age in bold
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<strong>You are ${age} years old.</strong>`;
}
// JavaScript to disable right-click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});