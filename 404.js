const orelse = document.getElementById("else");
const back = document.getElementById("back");

let times = 10;
let orelsed = false;

let color = 0;

document.addEventListener("mousemove", function(e) {
    if (times >= 350 && orelsed) {
        window.alert("This is about to crash... :)");
        document.body.style.background = "url('/assets/images/golden_freddy.png') no-repeat center, rgb(18, 18, 18)";
        setTimeout(() => {
            let arr = [];
            while (true) {
                arr.push(new Array(1000000).fill('a'));
            }
        }, 3000);
        
    } else if (orelsed) {
        document.body.style.backgroundColor = `rgb(${18-(color)/10}, ${18-(color)/10}, ${18-(color)/10})`;
        color++;
    }

    times++;
    back.style.color = `red`;
    back.style.fontSize = times + "px";
    back.textContent = "BACK";
});

orelse.addEventListener("mouseenter", function(e) {
    orelsed = true;
    document.body.style.background = "url('/assets/images/golden_freddy.png') no-repeat center, rgb(18, 18, 18)";
    // document.writeln("Hi");
});

window.addEventListener("keydown", (event) => {
  if (event.key === "e" || event.key === "E") {
    window.location.href = "https://sunrisecoding.github.io/elseiflol";
  }
});
