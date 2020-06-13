const box_example = document.getElementById("box_example")
const clipboard_field = document.getElementById("clipboard")
const extract_btn = document.getElementById("extract-btn")
addToClipboard()

$("#form-border").submit(function(e){
    return false;
});

$("#form-extract").submit(function(e){
    return false;
});

function Enviar() {
    const box_example = document.getElementById("box_example")
    let box_height = document.getElementById("box_height").value;
    let box_width = document.getElementById("box_width").value;
    let border_radius = document.getElementById("border_radius").value != "" ?
        document.getElementById("border_radius").value : "";
    box_height != "" ? box_example.style.height = box_height : box_height = "";
    box_width != "" ? box_example.style.width = box_width : box_width = "" ;
    box_example.style.borderRadius = border_radius;
    addToClipboard()
}

extract_btn.addEventListener('click', () => {
    clipboard_field.select();
    clipboard_field.setSelectionRange(0, 99999);
    document.execCommand("copy")
});

function addNewStyle(style, styles){
    return style + ": " + styles[style] + '; \n';
}

function addToClipboard() {
    let styles = window.getComputedStyle(box_example, null)
    let clipboardFile = ".box_example { \n"
    for (style in styles) {
        if (style == "borderRadius" || style == "width" || style == "height")
            clipboardFile += "    " + addNewStyle(style,styles)
    }
    clipboardFile += '}'
    clipboard_field.value = clipboardFile.replace("borderRadius", "border-radius")
}