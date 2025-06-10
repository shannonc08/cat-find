let score = 0;

// Lines 4 through 7 set the cat to a random position when website opened
let random_top = Math.floor(Math.random() * 461) + 60;
document.getElementById("cat").style.top = random_top + "px";
let random_left = Math.floor(Math.random() * 1361);
document.getElementById("cat").style.left = random_left + "px";

// Lines 10 through 14 declares some variables that will be useful later & array of cat photos to iterate through
let catfound = false;
let images_of_cats = ["https://en.scratch-wiki.info/w/images/thumb/ScratchCat-Small.png/200px-ScratchCat-Small.png",
    "cats/cryingcat.png", "cats/bugcat.png", "cats/samscat.png", "cats/garfield.png", "cats/hellokitty.png",
    "cats/nugget.png", "cats/yellowcat.png", "cats/shrimpcat.png"]
let counter = 0;

/* Lines 18 through 41 detects when the invisible cat is clicked, shows it for a second,
   adds one to your score, then moves it to a new random position */
document.querySelector('#cat').addEventListener('click', function() {
    score = score + 1;
    document.querySelector('#score').innerHTML = "You have found " + score + " cats";
    document.getElementById("cat").style.opacity = "1";
    catfound = true;
    if (counter == 8) {
        counter = 0;
    } else {
        counter = counter + 1;
    }
    /* The setTimeout function makes sure that the user is able to see where the cat is for a second before
       it moves to a new location and becomes invisible again */
    setTimeout(function() {
        document.getElementById("cat").style.opacity = "0";
        random_top_before = Math.floor(Math.random() * 461);
        random_top = random_top_before + 60;
        document.getElementById("cat").style.top = random_top + "px";
        random_left = Math.floor(Math.random() * 1361);
        document.getElementById("cat").style.left = random_left + "px";
        catfound = false;
        document.getElementById("cat").src = images_of_cats[counter];
    }, 1000);
    document.querySelector('#distance').innerHTML = "You found the cat!! Try again to improve your score :)";
})

/* Lines 44 through 59 calculates the distance from where the user clicks to the center of the invisible cat */
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
    /* Earlier in the code, I declared that when the cat was clicked, the variable catFound would be changed to true a second.
       Lines 56 through 58 mean that the game will tell the user the distance only if they did not find the cat */
    if (catfound === false) {
        document.querySelector('#distance').innerHTML = "You are " + distance_rounded + " pixels away from the cat";
    }
})
