title = "ONE BTN FRUIT NINJA";

description = `
`;

const G = {
	WIDTH: 300,
	HEIGHT: 150,
}

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

options = {
	viewSize: {x: G.WIDTH, y: G.HEIGHT},
};

function update() {
	if (!ticks) {
		player = {
      pos: vec(G.WIDTH * .1, G.HEIGHT * 0.75),
			isSwinging: false,
			combo: 0
		}

		fruits = times(5, () => {
			// Random number generator function
			// rnd( min, max )
			const posX = rnd(0, G.WIDTH);
			const posY = rnd(0, G.HEIGHT);
			// An object of type Star with appropriate properties
			return {
				// Creates a Vector
					pos: vec(posX, posY),
					// More RNG
					speed: 0
			};
	});

	}


	color("black")
	char("a", player.pos);
	fruits.forEach((f) => {
		f.pos.y += f.speed
		f.pos.x += f.speed
		char("b", f.pos)
	})

	box(0, G.HEIGHT * 0.75, G.WIDTH, G.HEIGHT * .25)
	


	
}
