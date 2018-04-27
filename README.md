# no-directional-skills
Removes directional input on many skills. See config.js to customize skill list.

See preview: (http://i.imgur.com/nIWqQDZ.mp4)

## How to install

1. Unzip dependencies.zip and move the two folders "gkm" and "EventEmitter2" into "tera-proxy/node_modules". 
This is where you will find folders like tera-data, etc.

2. Move "index.js" and "config.js" into a folder called "no-directional-skills" in "tera-proxy/bin/node_modules".
This is where you normally put scripts.


## Dependencies:

- GKM, An event based, Global Keyboard and Mouse listener. (https://github.com/tomzx/gkm) 
- EventEmitter2, an implementation of the EventEmitter module found in Node.js.(https://github.com/asyncly/EventEmitter2)


## Changelog
<details>

    1.32
    - Fix: Skills casting in wrong direction when not moving
    1.31
    - Removed Berserker's Evasive Smash.
    1.30
    - Updated protocol versions
    - Incorporated Mister-Kay's branch
    - Added new alternative direction (forwards)
    1.20
    - Added Teleport Jaunt for Sorcerer and Mystic
    1.11
    - Compatible with Skill Prediction
    - Works for all skills levels

</details>

---


Special Thanks to [Pinkie Pie](https://github.com/pinkipi) and [Mister-Kay](https://github.com/Mister-Kay)
