## Changelog

### 1.0.14

 - `assert_op` now returns the value we tested with
 - `assert_op` also now actually prints the error message (cool, eh)
 

### 1.0.13

 - several utility functions declared as `unbound`


### 1.0.12

 - eliminate redundant use of `@` for this attributes.
 

### 1.0.11

 - Using hasOwnProperty to test for contract fulfillment


### 1.0.10

 - Javascript based loader now strips out `#!` from "created" objects to avoid compile errors.
 

### 1.0.9

 - enhanced error checking in `slice_op`
 - cleaned up some undefined variables
 

### 1.0.8

 - fixed problem with `expects`
 - slice a.k.a. `limit` now operates on characters in strings as well as arrays, and generators.
 

### 1.0.7

 - sailib is now written in the language it supports. 
- change to `select` now returning `undefined` values when trying to select beyond the end of an iterator rather than bailing on the selection.
- src and lib directory structure


### 1.0.6

 - changes to `create` to fix issues with compiled projects
 

### 1.0.5

 - removed spurious coverage indicator
 - added new function `singleton` for creating singleton objects


### 1.0.4

 - new function `kviterator` for the use of the `every` keyword.
 
 
### 1.0.3

 - for `map`, `filter`, `audit`, and `reduce`,  when operating over an iterator, pass in the row count as the key.
 - added `drain` function to drain iterators
 

### 1.0.2

 - removed redundant code path in .iterate, full coverage tested
 

### 1.0.1

 - Moved prototype definition to library
 - Added runtime .create method for instantiation of SAI objects.


### 1.0.0

 - Initial release

