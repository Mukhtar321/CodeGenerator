document.addEventListener("DOMContentLoaded", function() {
    const generateBtn = document.getElementById("generateBtn");
    const generatedCode = document.getElementById("generatedCode");
    let generatedCodes = []; // Array to store generated codes

    generateBtn.addEventListener("click", generateCode);

    function generateCode() {
        let randomNumber;
        let paddedNumber;
        
        // Generate a new code until it is unique
        do {
            randomNumber = Math.floor(Math.random() * 10000);
            paddedNumber = randomNumber.toString().padStart(4, '0');
        } while (generatedCodes.includes(paddedNumber));

        // Add the new code to the list of generated codes
        generatedCodes.push(paddedNumber);

        // Update the UI with the newly generated code
        generatedCode.textContent = paddedNumber;
    }
});
