function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) {
        throw "File not found: '" + x + "'";
    }
    return Sk.builtinFiles["files"][x];
}

function runCode(section) {
    let editorContent = document.getElementById(`editor${section}`).value;
    let outputElement = document.getElementById(`output${section}`);

    outputElement.innerText = ""; // Clear previous output

    Sk.configure({ 
        output: function (text) {
            outputElement.innerText += text;
        }, 
        read: builtinRead
    });

    Sk.importMainWithBody("<stdin>", false, editorContent).catch((error) => {
        outputElement.innerText = `Error: ${error.toString()}`;
    });
}
