# 🌺 Code a Pookalam (p5.js Starter Template)

<div align="center">
  <img src="poster.jpeg" alt="Code a Pookalam Poster" max-width="400px" width="30%">
</div>


Welcome to **Code a Pookalam**! by **Tinkerhub CE Karunagappally**. Create your own animated 2D Onam Pookalam using **p5.js** and deploy it live on the web using Vercel—no terminal commands or installation required!

---

## 🎨 Step 1: Design Your Pookalam

1. Open the online [p5.js Web Editor](https://editor.p5js.org/).
2. Write, test, and preview your animated Pookalam live in the editor.
3. Once you're happy with your design, **copy all your code** from the editor.

---

## 💡 Quick Code Structure & p5.js Helpers

Here is the starter code you can use in the [p5.js Web Editor](https://editor.p5js.org/):

```javascript
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 1);
  smooth();
}

function draw() {
  background(230, 30, 8); // Dark background
  time += 0.015;

  // Move origin to center of screen
  translate(width / 2, height / 2);

  // Add your floral layers here!
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
