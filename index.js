let gkm = require('gkm');

module.exports = function NoDirectionalSkills(dispatch) {
    const Skills = require('./config.js')
    let job, hooked, keyW, keyA, keyS, keyD;
    
    dispatch.hook('S_LOGIN', 10, (event) => {
        job = event.templateId % 100 - 1;
        
        if(!hooked && (hooked = true)) {
            gkm.events.on('key.*', function(data) {
                if (data == 'W') keyW = this.event == 'key.pressed';
                else if (data == 'A') keyA = this.event == 'key.pressed';
                else if (data == 'S') keyS = this.event == 'key.pressed';
                else if (data == 'D') keyD = this.event == 'key.pressed';
            });
        }
    })

    dispatch.hook('C_START_SKILL', 5, {order: -9999}, (event) => {
        const skill = Math.floor((event.skill - 0x4000000) / 10000);
        
        if(Skills[job] && Skills[job][skill] != undefined && event.moving)
        {
            if(keyA) event.w -= keyW ? (Math.PI / 4 * 3) : keyS ? Math.PI / 4 : Math.PI / 2;
            else if(keyD) event.w += keyW ? (Math.PI * 3 / 4) : keyS ? Math.PI / 4 : Math.PI / 2;
            else if(keyW) event.w -= Math.PI;
            
            if (event.w > Math.PI) event.w -= Math.PI * 2
            if (event.w < -Math.PI) event.w += Math.PI * 2
            
            let moveForward = Skills[job][skill];
            if (moveForward) {
                event.w -= Math.PI;
                if (event.w < -Math.PI) event.w += Math.PI * 2
            }
            
            return true;
        }
    })
}
