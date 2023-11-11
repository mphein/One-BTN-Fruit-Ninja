title = "ONE BTN FRUIT NINJA";


description = `
`;

const G = {
	WIDTH: 150,
	HEIGHT: 75,
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
`
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
			isSwinging: false,
			combo: 0
		}

		fruits = times(1, () => {
			// Random number generator function
			// rnd( min, max )
			const posX = G.WIDTH
			const posY = spawnPT
			// An object of type Star with appropriate properties
			return {
				// Creates a Vector
					pos: vec(posX, posY),
					// More RNG
					speed: 1
			};
		});

		indicatorBar = {
			pos: vec(G.WIDTH / 2, G.HEIGHT / 4),
			width: G.WIDTH,
			height: 8
		}
		console.log(indicatorBar.pos)
	}

	color("black")
	char("a", player.pos);
	fruits.forEach((f) => {
		f.pos.x -= f.speed
		char("b", f.pos)
		f.pos.wrap(0, G.WIDTH, spawnPT, 0)
	})
	color("yellow")
	box(0, G.HEIGHT, G.WIDTH * 2, 5)

	console.log(indicatorBar.pos.x)
	color("red")
	box(indicatorBar.pos.x, indicatorBar.pos.y, indicatorBar.width, indicatorBar.height)
	


	
}
