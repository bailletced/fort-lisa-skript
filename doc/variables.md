# Variables
We are here summarizing the main concepts and best practices when dealing with variables.

Skript tries to be as near as possible to plain english.  

## Assignations
Variables are created with brackets.   
Eg: `set {myVariable} to "toto"`  
Assignation are made with sentences. In the example above, you notice that we are not using mathematical assignations. It means `{myVariable} = "toto"` is not valid!

`set {myVariable} to "toto"` created a variable called `{myVariable}` globally. It will be available in all the project.
TO create a variable restricted to the scope it is being declared (eg, in a function), we have to add an underscore. See:  
`set {_myVariable} to "toto"`

## Typing
All variables are typed. You can refer to existing types in the [documentation](https://docs.skriptlang.org/).

## List
A list is declared this way:  
`set {_myList::*} to "toto" and "tata"`  
We can store any type of variables in a list. All elements store does not have the necessity to be of the same type.