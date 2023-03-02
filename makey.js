/*=========================================================================

  Name:        makey.js

  Author:      David Borland, The Renaissance Computing Institute (RENCI)

  Copyright:   The Renaissance Computing Institute (RENCI)

  Description: Example p5 sketch for use with MaKey MaKey.

=========================================================================*/

// Object position and size
var pos,
    size;

// Position and size deltas
var posDelta,
    sizeDelta = 1.1;

// Line width
var lineWidth;

// Initialize
function setup() {      
  // Make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);
  
  // Center position
  pos = { 
    x: windowWidth / 2, 
    y: windowHeight / 2 
  };
  
  var w = Math.min(windowWidth, windowHeight);
  
  // Initialize size
  size = w / 20;
  
  // Set position delta
  posDelta = w / 100;
  
  // Set line width
  lineWidth = w / 200;
}

// Called every frame
function draw() {  
  // Clear background
  background("white");
  
  // Draw object
  fill("red");
  stroke("black");
  strokeWeight(lineWidth);
  ellipse(pos.x, pos.y, size, size);
}

// Key press event
function keyPressed() {  
  if (keyCode === 37) {
    // Left arrow
    
    // Move left
    pos.x = clampX(pos.x - posDelta);
  }
  else if (keyCode === 38) {
    // Up arrow
    
    // Move up
    pos.y = clampY(pos.y - posDelta);
  }
  else if (keyCode === 39) {
    // Right arrow
    
    // Move right
    pos.x = clampX(pos.x + posDelta);
  }
  else if (keyCode === 40) {
    // Down arrow
    
    // Move down
    pos.y = clampY(pos.y + posDelta);
  }
  else if (keyCode === 32) {
    // Space bar
    
    // Increase size
    size = clampSize(size * sizeDelta);
    
    // Make sure everything is still visible
    pos.x = clampX(pos.x);
    pos.y = clampY(pos.y);
  }  
}

// Mouse click event
function mouseClicked() {
  // Mouse click
  
  // Decrease size
  size = clampSize(size / sizeDelta);
}
  
// Clamp a number within a range
function clamp(n, min, max) {
  return n < min ? min : n > max ? max : n;
}
  
// Clamp the object x position
function clampX(x) {
  return clamp(x, size / 2 + lineWidth / 2, windowWidth - size / 2 - lineWidth / 2);
}

// Clamp the object y position
function clampY(y) {
  return clamp(y, size / 2 + lineWidth / 2, windowHeight - size / 2 - lineWidth / 2);   
}
  
// Clamp the object size
function clampSize(s) {
  var w = Math.min(windowWidth, windowHeight);
  
  return clamp(s, w / 100, w / 4);   
}