### Store
With Skript, the highest level of abstraction is functions. It means it can rapidly become a nighmare to deal with variables if it is done the wrong way.

To maintaining large project, store have been introduced. It is not an addon nor a Skript concept. Tt is just a convention being used in Fort-Lisa.

In some namespaces, you can find a `store` folder.
It simply aims to provide helpers to manipulate variables associated to the namespace. For instance, let's say I have dealing with players, and more specifically with their stats.

To set a stat to a player, I will call `player_store_stat_set(...)`
Store helpers always start with namespace, followed by store, itself followed by the object we are dealing with (here, stat).  
Under the hood, `player_store_stat_set(...)` will store some data in a global variable linked to the player.
