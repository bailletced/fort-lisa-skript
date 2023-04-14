# Conventions

Here are some rules we are following:

1. Avoid in any case to directly manipulate global variables, nor NBTs. Manipulate them through store and nbt helpers respectively.
2. Global variables used accross the project are written in UPPER case.
3. Plural is not used when dealing with global variables Eg: `STAT::ALL::*` which refers all stats.
4. When writing a new store, please, unit test it.
5. Try to deal with configurable variables as much as possible. It is much more easier to be edited.
6. When dealing with listeners, or loops whose are called very regularly, be very cautious. It is memory and CPU intensive.
7. Concepts shoudl follow the pattern `TYPE` `CATEGORY` `ID`. Eg: `SKILL` `HELMET` `DRAGON_BREATH` or `WEAPON` `STAFF` `LIMB_OF_WISDOM`.
8. KISS (Keep It Simple, Stupid)
