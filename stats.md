---
description: >-
  We we here list all stats used in the project and provide some explanations
  about how they are used and computed.
---

# Stats

### Player stats :

* HEALTH
* HEALTH\_MAX
* HEALTH\_REGEN
* ATTACK : Brut amount of attack damage
* DEFENCE : Brut amount of reduced damage
* DEFENCE\_REDUCTION : % amount of reduced damage
* DEFENCE\_REDUCTION\_FACING : % amount of reduced damage from the player's facing direction
* CHARITY : Ability to heal others
* COOLDOWN\_REDUCTION
* KNOCKBACK : Push force applied when hitting mobs
* SPEED

### Skills & Weapons stats :

* RADIUS : The AOE
* RANGE
* PROPULSION
* COOLDOWN
* EFFECT
* EFFECT\_FREQUENCY
* EFFECT\_DURATION
* PROJECTILE\_AMOUNT
* PROJECTILE\_SPEED

### Skills stats

* USAGE\_ADDITIONAL

### Weapons stats

* DURABILITY

### Stats computation&#x20;

* \_MULTIPLIER : This suffix indicated The coefficient applied when computing a stat.

### Sub-Stats

* A stat separated with **-** will be considered as a sub-stat.\
  Eg : ATTACK-2 will be considered as ATTACK. An example usage is for staff. Left click fires a projectile. Right clicks launch a skill, which has different attack
