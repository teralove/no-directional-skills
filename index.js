//vers 1.0

let gkm = require('gkm');
	
module.exports = function NoDirectionalSkills(dispatch) {

  let keyW, keyA, keyS, keyD;
  
  let skillsList = [
	ARCHER_BACKSTEP = 67168964, 
	ARCHER_BREAKAWAY = 67269864,
	LANCER_BACKSTEP = 67368964, 
	PRIEST_BACKSTEP = 67488964, 
	PRIEST_FIERY = 67369964, 
	SORC_BACKSTEP = 67178964,
	SORC_GLACIER = 67289764
  ];
  
  
  dispatch.hook('sLogin', (event) => {
	gkm.events.on('key.*', function(data) {
		if (data == 'W') { (this.event == 'key.pressed') ? keyW = true : keyW = false; }
		if (data == 'A') { (this.event == 'key.pressed') ? keyA = true : keyA = false; }
		if (data == 'S') { (this.event == 'key.pressed') ? keyS = true : keyS = false; }
		if (data == 'D') { (this.event == 'key.pressed') ? keyD = true : keyD = false; }
	});
  })
  
  
  dispatch.hook('C_START_SKILL', 2, (event) => {
	  
 	if(skillsList.includes(event.skill) && event.movementkey)
	{
		let w = event.w;
		
		/*
		KLUDGE: This is really fucking ugly...
		If anyone knows how to properly calculate the w data based on character heading and camera rotation , I'd be interested.
		*/
		if (keyW && keyA) {
			(w < 0) ? (w > -16384) ? w -= 24575 : w += 40973 : w -= 24575;
		}		
		else if (keyW && keyD) {
			(w < 0) ? w += 24575 : w -= 40973;
		}
 		else if (keyS && keyA) {
			w -= 8192;
		}		
		else if (keyS && keyD) {
			(w > 24575) ? w -= 57344 : w += 8192;
		}			
		else if (keyW) {
			(w < 0) ? w += 32767 : w -= 32767;
		}
		else if (keyA) {
			(w < 0) ? w += -16384 : w -= 16384;
		}						
		else if (keyD) {
			(w < 0) ? w += 16384 : w = -32767 + (w - 16384);
		}
		
		// wrap
		if (w < -32767) w += 65535;
		else if (w > 32767)	w = -32768 + w;
				
		// just in case, w calculation fucked up then revert it back to original value
		if (w < -32767 || w > 32767) w = event.w;
		
 		dispatch.toServer('C_START_SKILL', 2, {
			skill:event.skill,
			w: w,
			x1: event.x1,
			y1: event.y1,
			z1: event.z1,
			x2: event.x2,
			y2: event.y2,
			z2: event.z2,
			unk1: event.unk1,
			movementkey: 0,
			unk3: event.unk3,
			target: event.target
		}); 
		return false;

	} 
  })
  
}