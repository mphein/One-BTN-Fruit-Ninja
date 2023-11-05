title = "";

description = `
`;

const G = {
	WIDTH: 100,
	HEIGHT: 150,
}

characters = [
`
  ll
  ll
ccllcc 
ccllcc 
ccllcc 
cc  cc 
`
];

// JSDoc comments for typing
/**
 * 
 * @typedef {{
* pos: Vector,
* speed: number,
* combo: number,
* }} Ninja
*/

/**
 * @type { Ninja }
 */
let player;

options = {
	viewSize: {x: G.WIDTH, y: G.HEIGHT},
};

function update() {
	if (!ticks) {
		player = {
            pos: vec(G.WIDTH * 0.5, G.HEIGHT * 0.5),
			speed: 0,
			combo: 0
		}
	}

	
}
