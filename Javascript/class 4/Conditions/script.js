function calculateGrade() {
    const score = parseFloat(document.getElementById("scoreInput").value);
    let grade;

    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "Fail da";
    }
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Your Grade is: ${grade}` ;
}