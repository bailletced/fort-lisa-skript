# Configuration

Each and every mobs are being declared through **YAML** configuration files. You can find them [here](https://github.com/bailletced/fort-lisa/tree/master/config/mobs). Here is an exemple about how configuration is being done:

{% code title="zombie.yml" %}
```yaml
STAT:
  HEALTH: 10
  HEALTH_MULTIPLIER: 5
  ATTACK: 1
  ATTACK_MULTIPLIER: 1
  DEFENCE: 0
EQUIPMENT:
  HELMET: leather helmet
  2:
    HELMET: iron helmet
```
{% endcode %}

## Stat

You can refer to the Stat section to know which stats can take effect to mobs. Multipliser are being computed based on the level of the mob.

{% hint style="info" %}
The zombie is level 2. It has 10 + (5\*2) = 20 HEALTH.
{% endhint %}

## **Equipment**

You can notice that there are multiple entries for that section. By default, a mob will wear directly-declared equipments. It will then wear closest equipments to its level. If no equipments are declared for its level, we look for lower levels until finding some equipments.

{% hint style="info" %}
A zombie level 2 is summoned. It wears by default a leather helmet. Configuration is parsed. Level 2 associated an iron helmet. So it wears leather helmet.\
\
A zombie level 3 is summoned. It wears by default a leather helmet. Configuration is parsed. Level 3 associates nothing. We look to level 2. There is an iron helmet. Zombie wear iron helmet.
{% endhint %}

{% hint style="warning" %}
1. <mark style="color:red;">Equipments are purely decorative!</mark>
2. <mark style="color:red;">Mobs should wear an helmet to be protected from the sun</mark>
{% endhint %}

