---
title: 'Using JavaScript To Scramble A Rubik’s Cube'
slug: 'using-javascript-to-scramble-a-rubiks-cube'
publishedAt: '2020-03-29'
summary: 'I am making a web app that required me to make a rubiks cube scramble. I will show you how to implement this algorithm in JavaScript.'
image: 'https://benjamincarlson.io/images/tik-tok/emile-perron-xrVDYZRGdw4-unsplash.jpg'
---

## Introduction

The Rubiks cube is a popular puzzle in which the goal is to solve a 3x3 cube by matching the colors on each side. In order to solve the cube, you first need to scramble it. There are rules for how to do this but in general a scramble consists of 20 random moves performed in sequence. In this post, I will show you how to implement a scramble in JavaScript. The code for this tutorial can be found on my GitHub.

## What's A Scramble?

A scramble is a sequence of 20 moves that are performed on a solved cube. These 20 moves are picked randomly from the following set of moves:

![Scramble moves](https://benjamincarlson.io/images/tik-tok/emile-perron-xrVDYZRGdw4-unsplash.jpg)

Each of the above letters are rotations of the cube. They stand for:

- F — Front
- R — Right
- U — Upper
- B — Back
- D — Bottom (Down)

A single letter means you rotate that face of the cube clockwise. If there is a ' (single quote) after the letter, you move that face counterclockwise. Likewise, if there is a 2 after the letter, you move that face on the cube twice.

For example, F2 means you turn the front of the cube clockwise 2 times. B’ means you rotate the back of the cube counterclockwise one time.

Here is a great visual I found on ruwix.com to help you understand this better.

![Scramble moves](https://benjamincarlson.io/images/tik-tok/emile-perron-xrVDYZRGdw4-unsplash.jpg)

## Example Scrambles

Here are some example scrambles of the cube. This is what we will be writing JavaScript to do for us.

![Scramble moves](https://benjamincarlson.io/images/tik-tok/emile-perron-xrVDYZRGdw4-unsplash.jpg)

## JavaScript Scrambler

Now let’s start writing JavaScript code to scramble the cube for us.

First, I will declare a function named makeScramble().

```javascript:main.js
function makeScramble() {
  // function code here
}
```

Next, we need to declare 2 arrays. The first array will have all of the options I listed above in it. This array will be where we pick the moves from. The second array will be empty. This is where the scramble will go.

```javascript
var options = [
  'F',
  'R',
  'U',
  'B',
  'L',
  'D',
  'F2',
  'R2',
  'U2',
  'B2',
  'L2',
  'D2',
  "F'",
  "R'",
  "U'",
  "B'",
  "L'",
  "D'"
]
var scramble = []
```

Let’s step back and think about how we want to approach this next part. We need to randomly select one element in the first array and put it into the second array. We then need to repeat this 19 more times so we have a scramble with 20 elements.

Let’s tackle the first part. To randomly select an element in the firrst array, we need can generate a random number from 1 to 18 and then put whatever move at that index into the new scramble. Luckily for us, there is a JavaScript Math library that can help us do this.

```javascript
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
```

The above code is doing a few things. First, it is declaring a function called getRandomInt. This functions accepts a value max. In our case this value will be 18 because we want to generate a random number from 1 to 18. The inner line of the function is returning that random number for us.

## Push And Pop

Now that we have a way to randomly get an element in the first array, we need to put it into the second array. JavaScript, like other languages, has built in methods for doing common tasks. One of these methods is called push. This method works on arrays and allows us to push one item onto the array. In our case, we will be pushing one string move onto the array.

```javascript
scramble.push(options[getRandomInt(18)])
```

The above code gets a random int from 1 to 18 using the getRandomInt method, gets the corresponding cube rotation at that index in array options, and pushes it onto the new array, scramble.

If you run this code, only one move will be in the new array. To push 20 moves into the array, we can use a for loop.

```javascript
for (var i = 0; i < 20; i++) {
  scramble.push(options[getRandomInt(18)])
}
```

If you run this code, you will see that the array named scramble now has 20 random moves in it.

pop is similar to push except instead of adding an element to the array, it removes the last element. We do not use that here, but I brought it up because it is the opposite of push and is very useful.

## Conclusion

I hope you enjoyed and learned something from this post! To recap, we went over a Basic Rubik’s cube notation and terminology, talked about two JavaScript concepts: functions and arrays, and finally looked at array’s built in methods, push and pop, and implemented push with a for loop.
