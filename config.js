/*  Notes:
    true to move forwards (away from camera)
    false to move backwards (towards camera)
*/

module.exports = {
	0: { // Warrior
		1: true, // Combo Attack
		2: false, // Evasive Roll
		41: false, // Aerial Scythe
 	},
	1: { // Lancer
		1: true, // Combo Attack
		26: false, // Backstep
	},
	2: { // Slayer
		1: true, // Combo Attack
		4: false, // Evasive Roll
	},
	3: { // Berserker
		1: true, // Combo Attack
		24: true, // Evasive Smash
		29: true, // Evasive Roll
	},
	4: { // Sorcerer
		7: false, // Backstep
		18: false, // Glacial Retreat
		26: true, // Jaunt
	},
	5: { // Archer
        6: false, // Backstep
		16: false, // Breakaway Bolt
	},
	6: { // Priest
		26: false, // Fiery Escape
		38: false, // Backstep
	},
	7: { // Mystic
		17: true, // Jaunt
		44: true, // Party Jaunt
	},
	8: { // Reaper
		1: true, // Spiral Barrage
		40: true, // Shadow Step
	},
	9: { // Gunner
		11: true, // Rocket Jump
		40: true, // Rolling Reload
	},
	10: { // Brawler
		1: true, // Punch
		40: true, // Quick Dash
		22: true, // Flying Kick
	},
	11: { // Ninja
		1: true, // Combo Attack
		2: true, // Shadow Jump
	},
	12: { // Valkyrie
		1: true, // Slash
		14: true, // Evasion
	}
}