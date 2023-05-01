// let keyboardEn = [
//     '`','1', '2', '3', '4', '5', '6', '7', '8', '9', '0','-', '=', 'Backspace',
//     'Tab','q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
//     'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';','"','Enter',
//     'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'arrowUp','Shift',
//     'Ctrl','Win','Alt','space','Alt','arrowLeft','arrowDown','arrowRight', 'Ctrl'
// ];

let keyboardEn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];

function initKey () {
    let output = '';
    for (let i = 0; i < keyboardEn.length; i++) {
        if (i == 12 || i == 24) {
            output += `<div class="clearfix></div>`;
        }
        output += `<div class="k-key" data="' + keyboardEn[i] + '">` + String.fromCharCode(keyboardEn[i]) + `</div>`;
    }
    document.querySelector('#keyboard').innerHTML = output;
}

initKey();


document.onkeypress = function(event) {
    console.log(event.code);
    console.log(event.keyCode);
    document.querySelectorAll('#keyboar .k-key').forEach(function(element) {
        element.classList.remove('active');
    });
    document.querySelector('#keyboar .k-key[data="`+ event.keyCode +`"]').classList.add('active');
}

document.querySelectorAll('#keyboar .k-key').forEach(function(element) {
    element.onclick(function() {
        document.querySelectorAll('#keyboar .k-key').forEach(function(element) {
            element.classList.remove('active');
        })
        let code = this.getAttribute('data');
        this.classList.add('active');
        console.log(code);
    })
});