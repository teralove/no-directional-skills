**!!! NOT COMPATIBLE WITH SKILL-PREDICTION !!!**


# No Directional Skills

Removes directional input on some skills, makes them work like the old way.
- Archer: Backstep, Breakaway
- Priest: Backstep, Fiery
- Sorcerer: Backstep, Glacial
- Lancer: Backstep


## How to install

1. Move the two folders "gkm" and "EventEmitter2" into "tera-proxy/node_modules". 
This is where you will find folders like tera-data, etc...

2. Move the folder "no-directional-skills" into "tera-proxy/bin/node_modules".
This is normally where you put scripts


## Avoid Mod Conflicts

- When you run Skill-prediction and No-directional-skills together, your skills will not work! 
- Cooldowns will activate but your characters will not actually perform their skills!
- gkm and EventEmitters2 folders can be left in the "tera-proxy/node_modules" folder, 
but you'll need to swap out either skill-prediction or no-directional-skills to get either one to work properly.


## Dependencies:

- GKM, An event based, Global Keyboard and Mouse listener. (https://github.com/tomzx/gkm) 
- EventEmitter2, an implementation of the EventEmitter module found in Node.js.(https://github.com/asyncly/EventEmitter2)


Click here to see preview: (http://i.imgur.com/nIWqQDZ.mp4)
