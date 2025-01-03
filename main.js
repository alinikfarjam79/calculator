let display = document.querySelector('.display > div > p');
let numbers = document.querySelectorAll('.buttons2 > div > div');
let signs = document.querySelectorAll('.buttons3 > div > div');
let cleans = document.querySelectorAll('.buttons1 > div > div')

let data1 = 0;
let data2 = 0;
let result = 0;
let perSign;
let state = 0;

numbers.forEach(function (numb) {
    data1 = '';
    data2 = '';

    numb.addEventListener('click', () => {
        if (state === 0) {
            data1 += numb.innerText;
            display.innerText = data1;
            console.log(state, 'numb');
        } else {
            data2 += numb.innerText;
            display.innerText = data2;
            console.log(state, 'numb2');
        }

    });
})
signs.forEach(function (sign) {
    sign.addEventListener('click', () => {

        if (state === 0) {
            result += +(data1);
            data1 = '';
            display.innerText = '';
            state = 1;
            perSign = sign;
            console.log(state, 'sign1');


        } else {
            // result += +data2;
            // data2 = 0;
            state = 0;
            display.innerText = 0;
            console.log(perSign);
            console.log(data2);
            if ((perSign.innerText == '+')) {
                console.log('+');
                result += +(data2);
                data2 = ''
                // perSign = ''

            } else if ((perSign.innerText == '-')) {
                result -= +(data2);
                data2 = ''
                // perSign = ''

            } else if ((perSign.innerText == 'x')) {
                result = result * +(data2);
                data2 = ''
                // perSign = ''

            } else if ((perSign.innerText == '%')) {
                result = result % +(data2);
                data2 = ''
                // perSign = ''

            } else if ((perSign.innerText == '/')) {
                result /= +(data2);
                data2 = ''
                // perSign = ''

            }
            if (sign.innerText == '=') {
                // perSign = '';
                data2 = '';

                display.innerText = result;

            }
        }

    });
});

cleans.forEach((clean) => {
    clean.addEventListener('click', () => {
        if (clean.innerText == 'C') {
            data1 = '';
            data2 = '';
            result = 0;
            display.innerText = null;
            state = 0;
            perSign = ''
        }
    });
})