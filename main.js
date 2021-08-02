
                    //  color 
document.querySelectorAll('button').forEach(function (button) {
    button.onclick = function () {
        const smooth = document.querySelector('#para');
        smooth.style.color = button.dataset.color;
        // smooth.style.backgroundColor = button.dataset.background;
         
    }
});
var sel = document.querySelector('select');
sel.onchange = function () {
    document.querySelector('#para').style.color = this.value;

}


            // counter page js

let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        }
        else if (styles.contains('increase')) {
            count++;
        }
        else {
        count = 0;
        }
        if (count>0) {
            value.style.color="white"
        }
        if (count<0) {
            value.style.color="blue"
        }
        if (count==0) {
            value.style.color="black"
        }
    
        value.textContent = count;
  
    })

})

