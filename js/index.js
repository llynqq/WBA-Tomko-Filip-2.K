// console.log("HIT IT")
// function sumNumbs() {
//     let a = 6;
//     let b = 9;
//     let sum = a * b + a + b
//     console.log("Num = " + sum)
// }
// sumNumbs();

// let list = ["pes", "kocka", "lev"]

// list.forEach(zvire => {
//     console.log("Polozka z pole: " + zvire)
// });


// for (let x = 0; x < 4; x++) {
//     if (x > 1) {
//         console.log("ahoj")
//     }
//     else{
//         console.log("hello")
//     }    
// }

console.log("Ahoj")
function sumNumbs() {
    let a = 6;
    let b = 9;
    let sum = a * b + a + b
    console.log(`Num = ${sum}`)
}
sumNumbs();


const demo = document.getElementById("demo")
function h1Click() {
    demo.innerHTML = "DOM JS Text";
}

$(document).ready(function(){
    $("h1").click(function(){
      $("h1").hide();
    });
  });


  
document.getElementById('click').onclick = function() {
    console.log("button was clicked");
}