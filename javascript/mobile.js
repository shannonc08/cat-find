let score = 0;

let random_top = Math.floor(Math.random() * 1361) + 80;
document.getElementById("cat").style.top = random_top + "px";
let random_left = Math.floor(Math.random() * 841);
document.getElementById("cat").style.left = random_left + "px";

let catfound = false;
let images_of_cats = ["https://en.scratch-wiki.info/w/images/thumb/ScratchCat-Small.png/200px-ScratchCat-Small.png",
    "cats/cryingcat.png", "cats/bugcat.png", "cats/garfield.png", "cats/hellokitty.png",
    "cats/nugget.png", "cats/yellowcat.png"
]
let counter = 0;

document.querySelector('#cat').addEventListener('click', function() {
    score = score + 1;
    document.querySelector('#score').innerHTML = "You have found " + score + " cats";
    document.getElementById("cat").style.opacity = "1";
    catfound = true;
    if (counter == 6) {
        counter = 0;
    } else {
        counter = counter + 1;
    }
    setTimeout(function() {
        document.getElementById("cat").style.opacity = "0";
        random_top_before = Math.floor(Math.random() * 1361);
        random_top = random_top_before + 80;
        document.getElementById("cat").style.top = random_top + "px";
        random_left = Math.floor(Math.random() * 841);
        document.getElementById("cat").style.left = random_left + "px";
        catfound = false;
        document.getElementById("cat").src = images_of_cats[counter];
    }, 1000);
    document.querySelector('#distance').innerHTML = "You found the cat!! Try again to improve your score :)";
})

document.addEventListener("click", function(event) {
    x_coordinate = event.clientX;
    y_coordinate = event.clientY;
    // document.querySelector('#test').innerHTML = "x-coordinate: " + x_coordinate + ", y-coordinate: " + y_coordinate;
    middle_left_coordinate = random_left + 50;
    middle_top_coordinate = random_top + 50;
    distance_x = Math.abs(middle_left_coordinate - x_coordinate);
    distance_y = Math.abs(middle_top_coordinate - y_coordinate);
    raw_distance = Math.sqrt(distance_y * distance_y + distance_x * distance_x)
    distance_rounded = Math.round(raw_distance)
    if (catfound === false) {
        document.querySelector('#distance').innerHTML = "You are " + distance_rounded + " pixels away from the cat";
    }
})
