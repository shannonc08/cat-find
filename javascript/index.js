// Lines 2 through 9 make the pun on the website appear as if being typed
let line = "CATch them if you can!";
for (i = 0; i < line.length; i++) {
    setTimeout((function(i) {
        return function() {
            document.querySelector("#slogan").innerHTML += line[i];
        };
    })(i), 40 * i);
}

// Lines 12 through 19 make the pun blink on and off
setInterval(function() {
    let slogan = document.querySelector("#slogan");
    if (slogan.style.visibility === "hidden") {
        slogan.style.visibility = "visible";
    } else {
        slogan.style.visibility = "hidden";
    }
}, 1000);
