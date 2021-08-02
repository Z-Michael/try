
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

let counter = 0;

const value = document.querySelector("#value");
const btn = document.querySelectorAll(".btn");

btn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classlist;
        if (styles.includes("decrease")) {
            console.log(styles.includes("btn"));

            counter--;
        }
        else if (styles.contains("increase")) {
            counter++;
        }
        else {
        counter = 0;
            }
    
        value.textContent = counter;
  
    })

})

