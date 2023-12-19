document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener('click', processInput)
    const char = {
        '_seven': '7',
        '_six': '6',
        '_eight': '8',
        '_nine': '9',
        '_zero': '0',
        '_one': '1',
        '_two': '2',
        '_three': '3',
        '_four': '4',
        '_five': '5',
        '_divide': '/',
        '_multiply': '*',
        '_minus': '-',
        '_plus': '+',
        '_result': '=',
        '_clear': 'clear',
        '_backspace': 'backspace',
    }

    const tablet = document.querySelector(".tablet div");

    let eq = '';
    let lastAction = '';

    function showTablet() {
        tablet.innerHTML = eq;
    }

    function processInput(event) {
        if (event.target.closest('.key_digit')) {
            (eq === '0') ? eq = '' : eq;
            let digitKey = event.target.closest('.key_digit').classList;
            let digitKeyChar = digitKey[digitKey.length - 1];

            let resChar = char[digitKeyChar];
            eq += resChar;
            lastAction = resChar;
        } else if (event.target.closest('.operation')) {
            let digitKey = event.target.closest('.operation').classList;
            let digitKeyChar = digitKey[digitKey.length - 1];

            let resChar = char[digitKeyChar];
            eq += resChar;
            lastAction = resChar;
        } else if (event.target.closest('._clear')) {
            eq = '0';
        } else if (event.target.closest('._backspace')) {
            eq = eq
        }
        showTablet();
    }
});
