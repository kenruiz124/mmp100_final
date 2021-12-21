let snowflakes = []

let santa;
let tree1;
let tree2;
let xmastree;
let elf1;
let elf2;
let present;

var bg;

h1.hide()

function setup() {
  createCanvas(1600,790);
  bg = loadImage('https://i.imgur.com/C0dqPZP.png')
  tree1 = loadImage('https://i.imgur.com/YdOcqMP.png');
  tree2 = loadImage('https://i.imgur.com/YdOcqMP.png');
  xmastree = loadImage('https://i.imgur.com/CpzUd1X.png');
  elf1 = loadImage('https://i.imgur.com/4ILzzBl.png');
  elf2 = loadImage('https://i.imgur.com/2tyPz9N.png');
  present = loadImage('https://i.imgur.com/IkPDdry.png');
  //link is for the next page
  link = createA('foundSanta.html');
  santa = loadImage('https://i.imgur.com/jLDAz0D.png');
}

function draw() {
  background(bg)
  //Santa sends you to the next page when clicked
  santa=createImg('https://i.imgur.com/jLDAz0D.png').parent(link);
  santa.position(1490, 870);
  santa.size(santa.width/3, santa.height/3);
  image(tree1, -90, 200)
  image(tree2, 1150, 200)
  image(xmastree, 550, 0, 500, 600)
  image(elf1, 20, 560)
  image(elf2, 1200, 560)
  image(present, 525, 515)

  let t = frameCount / 30; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 1.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
