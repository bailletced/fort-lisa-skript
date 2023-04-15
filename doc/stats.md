# Skills

All core stats are declared in `config/stats.yml`, under `ALL` key. For each of them, an icon and a color is declared. This helps to describe the stats and to display it accordinglt in the lore of an item.

Stats can be associated to the following TYPES: WEAPON, GIFT, SKILL, EQUIPMENT.\
Stats are declared respectively in the config/ folder for each of them. For weapons, is is store in `config/weapons/<category>.yml`, etc...

When generating an item, all its stats (declared in a yml file) will be store in its nbt.

## Dealing with granularity

### Effect\_\<core-stat>

Sometimes, we have to be granular when declaring stats of an item.\
For instance, let's say I have a skill which deal some ATTACK damage when hurting an ennemy, and then apply a burn effect. In that case, we would have two ATTACK stats to declare :

* 1 to specify the damage when hitting an ennemy
* 1 to specify the damage dealt when burning the ennemy

In `.yml` files, this can be done by declaring `EFFECT_ATTACK`. Indeed, a core stat prefixed by a `EFFECT` prefix will be detected and accordingly computed with the core stat of a player. Let's illustrate it with an example :

```yml
**Let's consider the player has 10 ATTACK**
**Here is a skill declaration:**

  ATTACK: 15
  ATTACK_MULTIPLIER: 0.8
  EFFECT_ATTACK: 3
  EFFECT_ATTACK_MULTIPLIER: 0.5
```

When coding the skill, if we use `player_stat_compute` on ATTACK stat, following computation will be performed:\
**\<baseSkillAttack> + \<playerAttack>\*\<skillAttackMultiplier>**\
\= 15 + 10\*0.8\
\= 23\*\*

If we use `player_stat_compute` on EFFECT\_ATTACK stat, following computation will be performed:\
**\<baseSkillEffectAttack> + \<playerAttack>\*\<skillEffectAttackMultiplier>**\
\= 3 + 10\*0.5\
\= 8

### \<core-stat>-\<suffix>

**Moreover, same can be applied if a core stat is suffixed with a `-`**

```yml
**Let's consider the player has 10 ATTACK**
**Here is a skill declaration:**

  ATTACK: 15
  ATTACK_MULTIPLIER: 0.8
  ATTACK-2: 10
  ATTACK-2_MULTIPLIER: 0.5
```

If we use `player_stat_compute` on ATTACK-2 stat, following computation will be performed:\
**\<baseSkillAttack-2> + \<playerAttack>\*\<skillAttack-2Multiplier>**\
\= 10 + 10\*0.5\
\= 15
