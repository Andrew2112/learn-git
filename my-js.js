let btn = document.querySelector('.send');
let out_1 = document.querySelector('.out-1');
btn.addEventListener('click', () => {
    out_1.innerHTML = document.querySelector('.name').value;
    document.querySelector('.name').value = '';
})