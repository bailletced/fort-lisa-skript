# Mobs AI

AI of mobs are being handled through a finite-state machine. We have some predefined AI patterns:

* A => The mob go to the fountain after spawning. While moving, it checks for players in a radius of 20 blocs. If a player is found, the mob will go to him. While going to him, if the player is too far away, the mob will go to its original location target after a delay. When the mob has reached the fountain, it will then go to the door.
