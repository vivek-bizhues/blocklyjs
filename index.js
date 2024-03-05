document.addEventListener("DOMContentLoaded", function() {
    var workspace = Blockly.inject('blocklyDiv', {
        toolbox: document.getElementById('toolbox')
    });

    // Define your custom blocks here if needed

    // Blockly JavaScript code generation
    document.getElementById('generate-code').addEventListener('click', function() {
        var code = Blockly.JavaScript.workspaceToCode(workspace);
        console.log(code);
        eval(code)
    });
});
