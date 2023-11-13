title = "ONE BTN FRUIT NINJA";


description = `
`;

const G = {
	WIDTH: 150,
	HEIGHT: 75,
	FRUITSPAWN: 175
}

const BAR = {
	WIDTH: G.WIDTH,
	HEIGHT: 8,
}

const spawnPT = G.HEIGHT - 6

characters = [
`
rlllll
 rrrrr
rlllll
 lllll
 lllll
 l   l
`,
`
  l  
 rlr 
rrrrr
rrrrr
rrrrr
 rrr
`,
`
     l
    l
   l
  l
 l
l
`,
];

// JSDoc comments for typing
/**
 * @typedef {{
* pos: Vector,
* isSwinging: boolean
* combo: number,
* }} Ninja
*/

/**
 * @type { Ninja }
 */
let player;

/**
 * @typedef {{
* pos: Vector,
* duration: number
* }} Sword
*/

let sword


/**
 * @typedef {{
 * pos: Vector,
 * speed: number
 * }} Fruit
 */

/**
 * @type {Fruit []}
 */
let fruits

/**
 * @typedef {{
* pos: Vector,
* width: number,
* height: number
* }} Indicator
*/
let indicatorBar
let hotZone
let safeZone

/**
 * @typedef {{
* pos: Vector,
* speed: number
* width: number,
* height: number
* }} Scroller
*/
let scroller

options = {
	viewSize: {x: G.WIDTH, y: G.HEIGHT},
	theme: "pixel"
};

function update() {
	if (!ticks) {
		player = {
      pos: vec(5, spawnPT),
			isSwinging: true,
			combo: 0
		}

		sword = {
			pos: vec(12, spawnPT),
			duration: 0
		}

		fruits = times(3, () => {
			// Random number generator function
			// rnd( min, max )
			const posX = rnd(G.WIDTH, G.WIDTH * 2)
			const posY = spawnPT
			// An object of type Star with appropriate properties
			return {
				// Creates a Vector
					pos: vec(posX, posY),
					// variable movespeed
					speed: rnd(.2, 1)
			};
		});

		indicatorBar = {
			pos: vec(G.WIDTH / 2, G.HEIGHT / 4),
			width: G.WIDTH,
			height: 8
		}

		hotZone = {
			pos: vec(G.WIDTH / 2, G.HEIGHT / 4),
			width: G.WIDTH / 8,
			height: 8
		}

		safeZone = {
			pos: vec(G.WIDTH / 2, G.HEIGHT / 4),
			width: G.WIDTH / 2,
			height: 8
		}

		scroller = {
			pos: vec(1, G.HEIGHT / 4),
			speed: 2,
      width: 2,
      height: 8
		}
		
	}
	// ninja graphics
	color("black")
	char("a", player.pos);


	char("c", sword.pos)

	// fruit update 
	fruits.forEach((f) => {
		f.pos.x -= f.speed
		char("b", f.pos)

		if (f.pos.x > sword.pos.x -3 && f.pos.x < sword.pos.x + 3 && player.isSwinging) {
			f.pos.x = G.FRUITSPAWN
		}
	})
	
	//ground visual
	color("yellow")
	box(0, G.HEIGHT, G.WIDTH * 2, 5)

	// full bar
	color("red")
	box(indicatorBar.pos.x, indicatorBar.pos.y, indicatorBar.width, indicatorBar.height)
	
	// bar safe zone
	color("green")
	box(safeZone.pos.x, safeZone.pos.y, safeZone.width, safeZone.height)

	// bar hot zone
	color("blue")
	box(hotZone.pos.x, hotZone.pos.y, hotZone.width, hotZone.height)

	// scroller movement and visual
	color("black")
	box(scroller.pos.x, scroller.pos.y, scroller.width, scroller.height)
  
	scroller.pos.x += scroller.speed 
	if (scroller.pos.x >= G.WIDTH) {
		scroller.speed *= -1
	}

	if (scroller.pos.x <= 0) {
		scroller.speed *= -1
	}
	
}
