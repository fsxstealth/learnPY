// Function to run the Python code (assuming you have a method to do this)
function runCode(section) {
    const editor = document.getElementById(`editor${section}`);
    const output = document.getElementById(`output${section}`);
    try {
        const code = editor.value;
        // Using eval is not safe in production code, consider a proper Python execution environment
        output.textContent = eval(code);
    } catch (error) {
        output.textContent = `Error: ${error.message}`;
    }
}

// Function to toggle the visibility of sections
function toggleSection(sectionId) {
    const sectionContent = document.getElementById(sectionId).querySelector('.section-content');
    if (sectionContent.style.display === "none") {
        sectionContent.style.display = "block"; // Show the section
    } else {
        sectionContent.style.display = "none"; // Hide the section
    }
}

// Event listeners for section titles to enable toggling
document.querySelectorAll('.section-title').forEach(title => {
    title.addEventListener('click', () => {
        const sectionId = title.parentElement.id; // Get the section ID
        toggleSection(sectionId); // Toggle the section
    });
});

// Initial setup: hide all section content except the first one
document.querySelectorAll('.section-content').forEach((content, index) => {
    if (index !== 0) content.style.display = "none"; // Hide all except the first section
});
