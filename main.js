document.querySelectorAll('button').forEach(function (button) {
    button.onclick = function () {
        const smooth = document.querySelector('#para');
        smooth.style.color = button.dataset.color;
        smooth.style.backgroundColor = button.dataset.background;
         
    }
});
var sel = document.querySelector('select');
sel.onchange = function () {
    document.querySelector('#para').style.color = this.value;
}

