console.log("hello world")

// rozgrzewka: 4 pola tekstowe w htmlu
// dopiac do tego js, przycisk przelicz (min max srednia i sume)

const calcButton = document.querySelector("#calc");
const i1 = document.querySelector("#i1");
const i2 = document.querySelector("#i2");
const i3 = document.querySelector("#i3");
const i4 = document.querySelector("#i4");
const scores = document.querySelector("#scores");

// sprobowac queryselector
calcButton.addEventListener("click", function onClick() {
    let array = [i1.value, i2.value, i3.value, i4.value];
    // consoloe log array elements
    let arrayPrint = 0;
    for (let i = 0; i < array.length; i++) {
        arrayPrint = array[i];
        console.log(arrayPrint);
    }
    let sum = Math. i1.value + i2.value + i3.value + i4.value;
    const average = sum/4;
    const min = Math.min(array);
    const max = Math.max(array);
    scores.textContent = `${sum} ${average} ${min} ${max}`;
});