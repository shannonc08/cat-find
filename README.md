# cat-find
Hello! My website is a simple but cute game. Similar to some other endless games online (like slowroads.io), it aims to cure boredom and be something that anyone could do anytime for any amount of time.
Below is a picture of the homepage:

<img width="1469" alt="image" src="https://github.com/user-attachments/assets/3edd04b5-a12e-43d5-9e3b-3603a7533dde" />
https://www.youtube.com/watch?v=6hApt7CgxlU <-- this video goes over my code briefly!

Once you enter the game from the homepage, you will see a mostly blank page. There is an invisible cat hiding on the page, and you must find it. Click around the website to see how far away you are from it. Every time you find the cat, it disappears again to a new random position. You can play this game endlessly until you feel like doing something else :)

file structure below
- html files
  - index.html: provides backbone for homepage
  - game.html: provides backbone for game page
  - mobile.html: similar to game.html- provides backbone for phone version of game page
- css files: each ____.css file makes the correspoding ____.html file look nicer (adjusting fonts, background color, etc.)
- javascript files
  - index.js: provides code for changing components on homepage (pun)
  - game.js: provides logic to detect when cat is clicked, display how far away user is from cat, moves cat, updates score, etc.
  - mobile.js: exact same code as game.js, only with different pixel numbers (for phone users)
- other
  - cats folder has all the pictures of the cats I used in my array & game

Thank you to Mayari for providing me with the idea of having text appear as if being typed!

My game was inspired by https://findtheinvisiblecow.com/

The only AI I used was the CS50 Duck Debugger, which I used throughout the javascript to figure out syntax for setTimeout, and also to debug most functions (such as when distance was being calculated wrong).
