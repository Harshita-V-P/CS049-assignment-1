document.addEventListener("DOMContentLoaded", function() {
    const bioDataForm = document.getElementById("biodataForm");
    const resumeForm = document.getElementById("resumeForm");

    if (bioDataForm) {
        bioDataForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const formData = new FormData(bioDataForm);
            displayData("displayBioData", formData);
            bioDataForm.reset();
        });
    }

    if (resumeForm) {
        resumeForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const formData = new FormData(resumeForm);
            displayData("displayResume", formData);
            resumeForm.reset();
        });
    }
});

function displayData(displayId, formData) {
    const displaySection = document.getElementById(displayId);
    displaySection.innerHTML = ""; // Clear previous data

    formData.forEach((value, key) => {
        const p = document.createElement("p");
        p.textContent = `${key}: ${value}`;
        displaySection.appendChild(p);
    });
}
