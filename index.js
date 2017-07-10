//vers 1.2

let gkm = require('gkm');

module.exports = function NoDirectionalSkills(dispatch) {
	let job, hooked, keyW, keyA, keyS, keyD;

	let skillsList = {
		1: [ // Lancer
			26 // Backstep
		],
		5: [ // Archer
			6, // Backstep
			16 // Breakaway Bolt
		],
		6: [ // Priest
			26, // Fiery Escape
			38 // Backstep
		],
		4: [ // Sorcerer
			7, // Backstep
			18, // Glacial Retreat
			26 // Jaunt
		],
		7: [ // Mystic
			17 // Jaunt
		]
	};

	dispatch.hook('S_LOGIN', 2, (event) => {
		job = (event.model - 10101) % 100

		if(!hooked && (hooked = true))
			gkm.events.on('key.*', function(data) {
				if (data == 'W') keyW = this.event == 'key.pressed';
				else if (data == 'A') keyA = this.event == 'key.pressed';
				else if (data == 'S') keyS = this.event == 'key.pressed';
				else if (data == 'D') keyD = this.event == 'key.pressed';
			});
	})

	dispatch.hook('C_START_SKILL', 2, (event) => {
		if(skillsList[job] && skillsList[job].includes(Math.floor((event.skill - 0x4000000) / 10000)) && event.movementkey)
		{
			let w = event.w;

			if(keyA) w -= keyW ? 0x6000 : keyS ? 0x2000 : 0x4000
			else if(keyD) w += keyW ? 0x6000 : keyS ? 0x2000 : 0x4000
			else if(keyW) w += 0x8000;

			event.w = (w & 0xffff) << 16 >> 16;
			event.movementkey = 0;
			return true;
		} 
	})
}
