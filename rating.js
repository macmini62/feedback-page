const requestBody = document.querySelector('.requestBody');
const responseBody = document.querySelector('.responseBody');
const rates = document.querySelectorAll('.btn');
const rateSelected = document.getElementById('ratingSelected');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {
    requestBody.style.visibility = 'collapse';
    responseBody.style.visibility = 'visible';
});

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rateSelected.innerHTML = rate.innerHTML;
    });
});
