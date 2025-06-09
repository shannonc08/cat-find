let line = "CATch them if you can!";
        for (i = 0; i < line.length; i++) {
            setTimeout((function(i) {
                return function() {
                    document.querySelector("#slogan").innerHTML += line[i];
                };
            })(i), 40 * i);
        }

        setInterval(function() {
            let slogan = document.querySelector("#slogan");
            if (slogan.style.visibility === "hidden") {
                slogan.style.visibility = "visible";
            } else {
                slogan.style.visibility = "hidden";
            }
        }, 1000);
