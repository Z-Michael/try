document.querySelectorAll('button').forEach(function (button) {
    button.onclick = function () {
        document.querySelector('#para').style.color = button.dataset.color;
    }
});
