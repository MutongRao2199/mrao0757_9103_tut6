# Project Documentation

## Part 1: Imaging Technique Inspiration

The artwork chosen by our group in the major project is **Anwar Jalal Shemza's 'Apple Tree.'** Based on this choice, I conducted this week's research.

I'm inspired by two other paintings from Anwar Jalal Shemza and Generative Art by Manolo Gamboa Naon.

- **Anwar Jalal Shemza:**
  - ![Shemza Artwork 1](https://i.dawn.com/primary/2016/01/56a5f542e73c9.jpg)
  - ![Shemza Artwork 2](https://i.dawn.com/primary/2016/01/56a5f4eebecd7.jpg)

- **Manolo Gamboa Naon:**
  - ![Generative Art by Manolo Gamboa Naon](https://images.squarespace-cdn.com/content/v1/5c77350965a707ed1710a1bc/1592324984483-YGAI488E2HV60HX424FZ/Generative+Art+by+Manolo+Gamboa+Naon.jpeg?format=1500w)

**I got some inspiration from these two paintings by Shemza.** Shemza's artworks have a strong personal style, and simple lines and circles combine to create a picture with strong contrast. Based on this inspiration, I wanted the apple to achieve a color change in Shemza's usual artistic style, gradually changing from raw grass green to red or orange, which represents the ripening of the apple.

**Secondly, I wanted to achieve the effect of the ripe apple falling off the trunk.** The falling apples have streaks and lines of random width, color, and thickness. The idea references the work of Manolo Gamboa Naon and aims to give the piece a sense of dynamics and more color.

## Part 2: Coding Technique Exploration

**I conducted further research to achieve the effect I described in part 1.**

I found that the apple color change can be implemented using lerpColor() in p5.js, which calculates multiple colors between two colors. Through the lerpColor() function, we can achieve a smooth change from grass green to red to reflect the ripening of the apple.

Here is the code:

- [p5.js lerpColor Reference](https://p5js.org/reference/#/p5/lerpColor)

**The effect of falling apples can be created using JavaScript to create a neutral physics simulation.** It involves adding complex functions like gravity, speed, and friction to the apple. After researching, I found a tutorial for adding gravity to the balls.

Here is the tutorial and the complete code on GitHub:

- [Canvas Boilerplate on GitHub](https://github.com/christopher4lis/canvas-boilerplate)
- [Gravity Effects Tutorial Video](https://www.youtube.com/watch?v=3b7FyIxWW94)

**When it falls, the trailing of an apple can be implemented with the knowledge learned in this lesson**, such as drawing the historical position of the apple in successive frames.
