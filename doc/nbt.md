### NBT
In Minecraft, every block, entities and players have a structure to describe them. This structure is called NBT. Thought Skript, we can manipulate NBTs thanks to the addond `Skbee`.

Manipulating NBTs allows us to store data directly in the native Minecraft elements we are manipulating.

All these transformations are centralized in 3 different files:
1. item_nbt
2. block_nbt
3. entity_nbt

There are few things to keep in mind when manipulating NBTs:

1. A Minecraft limitation disallow us to directly manipulate item's NBTs. To edit them, we have to:
   - Get the current NBT of the item
   - extend the NBT to add some attributes
   - generate a new item from the modified NBT

2. There are 3 categories of NBTs we manipulate:
   - stat through <item|entity|block>\_nbt_<get|set|isset|add>_stat. **stat refers to number variables**
   - tag <item|entity|block>\_nbt_<get|set|isset>_tag **tag refers to string variables**
   - list <item|entity|block>\_nbt_<get|set|isset>_list  **list refers to list of string variables**