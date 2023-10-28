let result = document.getElementById('result');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                result.innerText = '';
                break;

            case '←':
                result.innerText = result.innerText.slice(0, -1);
                break;

            case '=':
                result.innerText = eval(result.innerText);
                /*eval = The Eval function evaluates the string expression 
                and returns its value. (calculates value of the string, converts string
                    into number!)
                 For example, Eval("1 + 1") returns 2. */
                break;

            default: result.innerText += e.target.innerText;
        }
        console.log(e.target.innerText);

    })

})












