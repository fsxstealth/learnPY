function runCode(section) {
    let code;
    if (section === 1) {
        code = document.getElementById("editor1").value;
    } else if (section === 2) {
        code = document.getElementById("editor2").value;
    } else if (section === 3) {
        code = document.getElementById("editor3").value;
    } else if (section === 4) {
        code = document.getElementById("editor4").value;
    }

    try {
        // Use eval to execute the code (for simplicity in this example)
        let output = eval(code);
        document.getElementById(`output${section}`).innerText = output !== undefined ? output : "No output";
    } catch (error) {
        document.getElementById(`output${section}`).innerText = "Error: " + error.message;
    }
}
