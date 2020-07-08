Note: This is a Game of Thrones reference to The Hound killing some guys over some chickens. If you're not a Game of Thrones fan, this game is going to be super morbid.

Deployment: https://dyingforchickens.netlify.app/

Play as The Hound and collect as many chickens as you can! Dodge that fire though, or it'll cook you up like a nice juicy mutton chop.

https://user-images.githubusercontent.com/32667298/86048791-15c1db00-ba1f-11ea-8d28-78e5cd7f7ccc.png

https://user-images.githubusercontent.com/32667298/86048802-1a868f00-ba1f-11ea-8b55-c3ae3f00d799.png

Features:

- Game-ending alert on contact with fire
- 1 point gained per chicken caught
- Score displayed in top left corner
- Game gets faster over time
- Chickens bawk when caught

Features I began adding but didn't finish:

- start and restart button - the start button exists in the html, but is doing nothing in the program
- bgm after start button - the music is implemented in the JS, but does not work without the start button
- I wanted to refactor a lot more but I had to move Tuesday morning so I was extremely busy :(
- I would've refactored the Chicken and Enemy classes to be extensions of a larger general class, the gameloop to be less repetitive, and utilize the Text.js file instead of appending my own score in the top left corner