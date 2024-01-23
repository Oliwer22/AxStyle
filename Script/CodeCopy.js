document.getElementById("code").addEventListener("click", function() {
    copyToClipboard('<link rel="stylesheet" href="https://axstyle.pxxl.space/MainStyle/Main.css">');
});

function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    const codeButton = document.getElementById('code');
    codeButton.innerText = 'Code copied to clipboard!';

    setTimeout(function() {
        codeButton.innerText = "Copy";
    }, 2000);
}
