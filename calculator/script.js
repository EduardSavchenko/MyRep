const calc = document.querySelector('.calc');
const result = document.querySelector('#result');

calc.addEventListener('click', function(event) {
if(!event.target.classList.contains('calc__btn')) return; 
// проверка таргет события на наличие calc__btn

    const value = event.target.innerText; 
    //получение содержимого кнопки
    switch  (value) {
        case 'C':
            result.innerText = '';
            break;

        case '=':
            result.innerText = eval(result.innerText).toFixed(2);
            break;

            default:
            result.innerText += value;
    }
    

});