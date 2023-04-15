# NBTs

In Minecraft, every block, entities and players are described by a data structure. It is called **NBT**. NBTs are an extremely **simple** and **efficient** structured **binary format** used by the **Minecraft** game for a **variety of things**

Thought Skript, we can manipulate NBTs thanks to the addond [`Skbee`](https://github.com/ShaneBeee/SkBee).

Manipulating **NBTs** allows us to **store data directly in the native Minecraft things** we are manipulating.

All these transformations are centralized in 3 different files:

1. items/item\_nbt
2. blocks/block\_nbt
3. entities/entity\_nbt

Each file expose functions allowing to store **text**, **numbers** and **text lists** in NBTs. **Texts** are manupulated though tag functions, **Numbers** through stat functions, and list through **\_list** functions. They follow this syntax:

* **stat**: \<item|entity|block>\_nbt\_\<get|set|isset|add|delete>\_stat
* **tag**: \<item|entity|block>\_nbt\_\<get|set|isset|delete>\_tag&#x20;
* **list**: \<item|entity|block>\_nbt\_\<get|set|isset|delete>\_list

Let's illustrate it with examples:

#### Store text into NBT

```
set {_entity} to last_spawned_entity
entity_nbt_set_tag({_entity}, "TYPE", "MOB")
set {_type} to entity_nbt_get_tag({_entity}, "MOB"}
```

#### Get the value of a NBT tag

```
set {_entity} to attacker
set {_type} to entity_nbt_get_tag({_entity}, "TYPE")
```

#### Determine if a NBT tag exist

<pre><code>set {_entity} to attacker
<strong>if entity_nbt_isset_tag({_entity}, "TYPE") is true:
</strong>    ....
</code></pre>

{% hint style="warning" %}
As we can notice, we have made a tautology. This is normal when using Skript.
{% endhint %}

#### NBT Stat

```
set {_p} to player
set {_hasAttack} to entity_nbt_isset_stat({_p}, "ATTACK") // false
set {_attack} to entity_nbt_get_stat({_p}, "ATTACk") // 0
entity_nbt_add_stat({_p}, "ATTACK", 10) //ATTACK is now 10
```

{% hint style="warning" %}
If a stat hasn't been initialized, the return value is 0

If we call **\_add** on a non-initialized stat, it will be initialized with the provided value
{% endhint %}

**NBT List**

```
set {_p} to player
entity_nbt_set_list({_p}, "WILL", "BURNING_HEART")
set {_will::*} to entity_nbt_get_list({_p}, "WILL") // "BURNING_HEART"
entity_nbt_add_list({_p}, "WILL", "EARTH")
set {_will::*} to entity_nbt_get_list({_p}, "WILL") // "BURNING_HEART" and "WILL"
```

#### NBT on Items

<pre><code><strong>set {_item} to diamond sword
</strong>set {_item} to item_nbt_set_stat({_item}, "ATTACK", 10)
item_nbt_add_stat({_item}, "ATTACK", 10)
set {_attack} to item_nbt_get_stat({_item}, "ATTACK") // 10
</code></pre>

{% hint style="danger" %}
You might have noticed that manipulating NBTs on item is trickier. Due to a Minecraft limitation, we cannot directly manipulate NBTs of items. To do it, we have to:\
&#x20; \- Get the current NBT of the item\
&#x20; \- Add/Set/Delete some tags/list/stat of the NBT\
&#x20; \- Generate a new item from the modified NBT\
**item\_nbt** does it for us. We simply have yo reasign the item after calling the edition functions.
{% endhint %}

```
set {_item} to diamond sword
set {_item} to item_nbt_set_stat({_item}, "ATTACK", 10)
set {_item} to item_nbt_add_stat({_item}, "ATTACK", 10)
set {_attack} to item_nbt_get_stat({_item}, "ATTACK") // 20
```

#### Manipulate Minecraft native NBTs

As said earlier, NBT allows to sotre some data to things in Minecraft. Sometimes, it is usefull to manipulate native Minecraft NBTs.

```
set {_projectile} to last shot projectile
entity_nbt_set_tag_native({_projectile}, "{NoGravity:1b}") // projectile does not have gravity anymore.
```
