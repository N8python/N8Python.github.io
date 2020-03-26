# Phaser Review
Recently, I used the library [phaser](https://phaser.io) to create a platformer. I have a generally positive opinion of the library after using for a bit more than a week, however there is some room for improvement. I'll be using the DAFT acronym to rate Phaser:
- **D**ocumentation - The quality of the documentation available for the library.
- **A**bstraction - The amount of abstraction from Vanilla JS the library provides.
- **F**unction - How well the abstractions function.
- **T**houghtfullness - How elegant and intuitive the abstractions are.
## **Documentation** - 7.3/10
The phaser docs themselves are only mildly informative. They provide the barebones needed to understand the library, and that's it. This would cause phaser to recieve a 5/10 for documentation, but the availability of external websites and discussion forums on phaser (like [this one](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/index.html)) makes up for the lack of detail of the actual docs. Phaser's populatiry and easy learning curve means that there is a lot of material that helps beginners and this ultimately rases the documentation rating to 7.3.

## **Abstraction** - 9/10
Phaser does a great job abstracting away the canvas and webgl APIs. The sprite system is easy to use, and the game system is powerful and abstracts away the nitty gritty of things like ajax and sprite sheet splicing. The only reason this is a 9/10 is that I found the graphics system (ie. drawing a rectangle) to be very cumbersome and as complex (if not more) than the Canvas API. However, all in all, Phaser has a powerful API that abstracts the difficulty involved in things like collisions and sprite sheets.

## **Function** - 9.5/10
Phaser's API performs nearly flawlessly, with virtually no limitations. It seems to scale pretty well, with things like `Phaser.Scene` allowing for larger and more complex games. It's all flowers and roses, and it never has a point where it devolves into a mish-mash of complexity like jQuery. The only reason I'm giving this a 9.5 / 10 is because of one case where parameters were ordered incorrectly that lead to an hour or so of unpleasant debugging.

## **Thoughtfullness** - 9/10
In general, the API of Phaser was intuitively designed and it was easy to understand and use. It didn't have any flaws, but there were a few minor inconveniences that took some extra variables to get around. However, it was nothing compared to the inconvience I've experienced with some other libraries.

## **Final Score** - 8.7/10
Phaser is an all-around amazing game development library. It's API serves as a role model for other libraries to follow, and with some better documentation, phaser would be a near-perfect example of how a library should be built.

See you next time,

N8