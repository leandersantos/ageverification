function calculateAge(year, month, day) {
    var birthday = +new Date(year, month, day);
    return ~~((Date.now() - birthday) / (31557600000));
}


document.getElementById('verify').addEventListener('click', function() {
    var day = parseInt(document.getElementById('on_day').value),
        month = parseInt(document.getElementById('on_month').value),
        year = parseInt(document.getElementById('on_year').value);

    var age = calculateAge(year, month - 1, day);

    if (age < 18) {
        document.getElementById('on_link').innerHTML = 'Sorry! You are not allowed to enter!';
    } else {
        document.getElementById('on_link').innerHTML = 'link to main page'; {
            { id }
        }
        close();
    }
});