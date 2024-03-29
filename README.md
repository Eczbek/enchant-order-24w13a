# enchant-order-24w13a
this is a patch for the enchantment ordering tool to support the new additions from the 24w13a snapshot

i have no idea how this works so i made some usage modificiations

the new enchantment weights were discovered by in-game testing

### USAGE
1) 
```
git clone https://github.com/Eczbek/enchant-order-24w13a
cd enchant-order-24w13a
npm i
node server.js
```
2) 
open http://localhost:8080

&nbsp;

&nbsp;

&nbsp;

the original README is provided below

&nbsp;

# Minecraft Enchantment Ordering Tool

This web-based tool allows you to find the optimal order for combining enchant books in Minecraft to minimize XP cost.

You can use it here: https://iamcal.github.io/enchant-order/

The tool works by trying every possible combining sequence and calculating the cost of each.
For items with many enchantments, this can mean trying a few million combinations.
The work happens in a background thread (a WebWorker) and the best solution is explained.


## Localization

You can add support for new languages by:

* Adding a new JSON file inside `languages/` (see existing files there for hints)
* Modifying `script.js` to add the language to the supported list
* Modifying `lang.html` in the same way
* Opening `lang.html` in the browser to verify if the required strings are all implemented

Please open a PR with the above changes to have your language merged (or updated).
