const Game = new Phaser.Game(1106, 700, Phaser.AUTO, 'GameCanvas', { preload, create, update })

let car_won = 0;
let chicken_won = 0;
let chicken_speed = 2;

function preload() {

   Game.load.spritesheet("chicken", "ch_fn.png", 328 / 7, 191 / 4);
   Game.load.spritesheet("car", "car.png", 1100 / 2, 268 / 1);
   Game.load.image("back", 'road.png');
}


function create() {

   var audio = new Audio('aad.mp3');
   audio.play();


   Game.add.image(0, 0, "back");

   text_result1 = Game.add.text(700, 0, chicken_won, { font: "38px Arial", fill: "#46E50E" })
   text_result2 = Game.add.text(400, 0, car_won, { font: "38px Arial", fill: "#E53F0E" })

   chicken = Game.add.sprite(Game.width / 2, Game.height, "chicken");
   chicken.scale.setTo(0.75)
   Game.physics.arcade.enable(chicken);
   chicken.body.collideWorldBounds = true;

   car1 = Game.add.sprite(-100, 610, "car");
   car1.scale.setTo(0.15)
   Game.physics.arcade.enable(car1);
   car2 = Game.add.sprite(-100, 547, "car");
   car2.scale.setTo(0.15)
   Game.physics.arcade.enable(car2);
   car3 = Game.add.sprite(-100, 487, "car");
   car3.scale.setTo(0.15)
   Game.physics.arcade.enable(car3);
   car4 = Game.add.sprite(-1000, 430, "car");
   car4.scale.setTo(0.15)
   Game.physics.arcade.enable(car4);
   car5 = Game.add.sprite(-100, 375, "car");
   car5.scale.setTo(0.15)
   Game.physics.arcade.enable(car5);
   car6 = Game.add.sprite(-100, 310, "car");
   car6.scale.setTo(0.15)
   Game.physics.arcade.enable(car6);
   car7 = Game.add.sprite(-100, 255, "car");
   car7.scale.setTo(0.15)
   Game.physics.arcade.enable(car7);
   car8 = Game.add.sprite(-100, 195, "car");
   car8.scale.setTo(0.15)
   Game.physics.arcade.enable(car8);
   car9 = Game.add.sprite(-100, 135, "car");
   car9.scale.setTo(0.15)
   Game.physics.arcade.enable(car9);
   car10 = Game.add.sprite(-100, 78, "car");
   car10.scale.setTo(0.15)
   Game.physics.arcade.enable(car10);

   chicken.animations.add("Left", [5, 4, 3, 2,], 10, false)
   chicken.animations.add("Right", [22, 23, 24, 25,], 10, false)
   chicken.animations.add("Up", [16, 17, 18, 19, 20,], 10, false)
   chicken.animations.add("Down", [9, 10, 11, 12, 13], 10, false)
   car1.animations.add("lt", [0], 1, false)
   car1.animations.add("rt", [1], 1, false)
   car2.animations.add("lt", [0], 1, false)
   car2.animations.add("rt", [1], 1, false)
   car3.animations.add("lt", [0], 1, false)
   car3.animations.add("rt", [1], 1, false)
   car4.animations.add("lt", [0], 1, false)
   car4.animations.add("rt", [1], 1, false)
   car5.animations.add("lt", [0], 1, false)
   car5.animations.add("rt", [1], 1, false)
   car6.animations.add("lt", [0], 1, false)
   car6.animations.add("rt", [1], 1, false)
   car7.animations.add("lt", [0], 1, false)
   car7.animations.add("rt", [1], 1, false)
   car8.animations.add("lt", [0], 1, false)
   car8.animations.add("rt", [1], 1, false)
   car9.animations.add("lt", [0], 1, false)
   car9.animations.add("rt", [1], 1, false)
   car10.animations.add("lt", [0], 1, false)
   car10.animations.add("rt", [1], 1, false)

   keyW = Game.input.keyboard.addKey(Phaser.Keyboard.W)
   keyA = Game.input.keyboard.addKey(Phaser.Keyboard.A)
   keyS = Game.input.keyboard.addKey(Phaser.Keyboard.S)
   keyD = Game.input.keyboard.addKey(Phaser.Keyboard.D)
   keyM = Game.input.keyboard.addKey(Phaser.Keyboard.M)

}

function update() {
   end();
   chicken_movement();
   car_movement();
   won();

   Game.physics.arcade.collide(chicken, car1, collision)
   Game.physics.arcade.collide(chicken, car2, collision)
   Game.physics.arcade.collide(chicken, car3, collision)
   Game.physics.arcade.collide(chicken, car4, collision)
   Game.physics.arcade.collide(chicken, car5, collision)
   Game.physics.arcade.collide(chicken, car6, collision)
   Game.physics.arcade.collide(chicken, car7, collision)
   Game.physics.arcade.collide(chicken, car8, collision)
   Game.physics.arcade.collide(chicken, car9, collision)
   Game.physics.arcade.collide(chicken, car10, collision)

   text_result2.setText(car_won)

}

function collision() {

   chicken.x = Game.width / 2
   chicken.y = Game.height
   car_won += 1

}

function won() {

   if (chicken.y < 50) {
      chicken.x = Game.width / 2
      chicken.y = Game.height
      chicken_won++
      text_result1.setText(chicken_won)

      if (chicken_won == 3) {
         text_result1.setText(chicken_won)
         chicken.x = Game.width / 2
         chicken.y = Game.height
      }

   }
}
function end() {

   if (chicken_won == 3) {
      alert("You won!" +
         " Press F5 to restart")
      update().end;

   }

}

function chicken_movement() {

   if (keyW.isDown) {
      chicken.y -= chicken_speed
      chicken.animations.play("Up")
   }

   if (keyS.isDown) {
      chicken.y += chicken_speed
      chicken.animations.play("Down")
   }

   if (keyA.isDown) {
      chicken.x -= chicken_speed
      chicken.animations.play("Left")
   }

   if (keyD.isDown) {
      chicken.x += chicken_speed
      chicken.animations.play("Right")
   }

}

let pos1 = Game.rnd.integerInRange(0, 100)
let pos2 = Game.rnd.integerInRange(0, 100)
let pos3 = Game.rnd.integerInRange(0, 100)
let pos4 = Game.rnd.integerInRange(0, 100)
let pos5 = Game.rnd.integerInRange(0, 100)
let pos6 = Game.rnd.integerInRange(0, 100)
let pos7 = Game.rnd.integerInRange(0, 100)
let pos8 = Game.rnd.integerInRange(0, 100)
let pos9 = Game.rnd.integerInRange(0, 100)
let pos10 = Game.rnd.integerInRange(0, 100)


let car_speed1 = Game.rnd.integerInRange(2, 10)
let car_speed2 = Game.rnd.integerInRange(3, 10)
let car_speed3 = Game.rnd.integerInRange(4, 10)
let car_speed4 = Game.rnd.integerInRange(5, 10)
let car_speed5 = Game.rnd.integerInRange(6, 11)
let car_speed6 = Game.rnd.integerInRange(7, 11)
let car_speed7 = Game.rnd.integerInRange(8, 12)
let car_speed8 = Game.rnd.integerInRange(9, 12)
let car_speed9 = Game.rnd.integerInRange(9, 13)
let car_speed10 = Game.rnd.integerInRange(9, 14)

function car_movement() {

   let rd1 = Game.rnd.integerInRange(-1000, -200)
   let rd2 = Game.rnd.integerInRange(900, 1700)

   if (pos1 < 50) {
      car1.animations.play("lf")

      if (car1.x < Game.width + 100) {
         car1.x += car_speed1

      } else {
         car1.x = rd1
      }
   } else {
      car1.animations.play("rt")

      if (car1.x > -100) {
         car1.x -= car_speed1

      } else {
         car1.x = rd2
      }
   }

   if (pos2 < 50) {
      car2.animations.play("lf")

      if (car2.x < Game.width + 100) {
         car2.x += car_speed2

      } else {
         car2.x = rd1
      }
   } else {
      car2.animations.play("rt")

      if (car2.x > -100) {
         car2.x -= car_speed2

      } else {
         car2.x = rd2
      }
   }

   if (pos3 < 50) {
      car3.animations.play("lf")

      if (car3.x < Game.width + 100) {
         car3.x += car_speed3

      } else {
         car3.x = rd1
      }
   } else {
      car3.animations.play("rt")

      if (car3.x > -100) {
         car3.x -= car_speed3

      } else {
         car3.x = rd2
      }
   }

   if (pos4 < 50) {
      car4.animations.play("lf")

      if (car4.x < Game.width + 100) {
         car4.x += car_speed4

      } else {
         car4.x = rd1
      }
   } else {
      car4.animations.play("rt")

      if (car4.x > -100) {
         car4.x -= car_speed4

      } else {
         car4.x = rd2
      }
   }
   if (pos5 < 50) {
      car5.animations.play("lf")

      if (car5.x < Game.width + 100) {
         car5.x += car_speed5

      } else {
         car5.x = rd1
      }
   } else {
      car5.animations.play("rt")

      if (car5.x > -100) {
         car5.x -= car_speed5

      } else {
         car5.x = rd2
      }
   }
   if (pos6 < 50) {
      car6.animations.play("lf")

      if (car6.x < Game.width + 100) {
         car6.x += car_speed6

      } else {
         car6.x = rd1
      }
   } else {
      car6.animations.play("rt")

      if (car6.x > -100) {
         car6.x -= car_speed6

      } else {
         car6.x = rd2
      }
   }
   if (pos7 < 50) {
      car7.animations.play("lf")

      if (car7.x < Game.width + 100) {
         car7.x += car_speed7

      } else {
         car7.x = rd1
      }
   } else {
      car7.animations.play("rt")

      if (car7.x > -100) {
         car7.x -= car_speed7

      } else {
         car7.x = rd2
      }
   }
   if (pos8 < 50) {
      car8.animations.play("lf")

      if (car8.x < Game.width + 100) {
         car8.x += car_speed8

      } else {
         car8.x = rd1
      }
   } else {
      car8.animations.play("rt")

      if (car8.x > -100) {
         car8.x -= car_speed8

      } else {
         car8.x = rd2
      }
   }
   if (pos9 < 50) {
      car9.animations.play("lf")

      if (car9.x < Game.width + 100) {
         car9.x += car_speed9

      } else {
         car9.x = rd1
      }
   } else {
      car9.animations.play("rt")

      if (car9.x > -100) {
         car9.x -= car_speed9

      } else {
         car9.x = rd2
      }
   }
   if (pos10 < 50) {
      car10.animations.play("lf")

      if (car10.x < Game.width + 100) {
         car10.x += car_speed10

      } else {
         car10.x = rd1
      }
   } else {
      car10.animations.play("rt")

      if (car10.x > -100) {
         car10.x -= car_speed10

      } else {
         car10.x = rd2
      }
   }

}  