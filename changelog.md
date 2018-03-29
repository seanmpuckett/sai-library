## Changelog

### 1.0.19 

 - `reduce_op_fast` is now `sum_op` 
 - `reduce_op` is now a true reduce that expects functions to take two items and produce one; if there is only one item, the function is NOT called.


### 1.0.18

 - additional declarations of `unbound` for performance
 

### 1.0.17

 - new `l_op` logical operator; calculates boolean results on collections
  

### 1.0.16

 - removed tab characters in source file
 - fixed `expects_op` to use `hasOwnProperty` like it should have all along
 - minor functionality change in `overlay_op`, regularizing how a leftside static and rightside iterator work in comparison to `update_op`.
 - new `reduce_op_fast` is similar to `reduce_op` but does not take special action on an `undefined` start value. SAI is moving to this new approach as _pipers_ are integrated.
 - syntax changes for alteration to new _pipers_ system in SAI.


### 1.0.15

 - refactoring for construct reformatting
 - altered `clone_op` to copy undefined values as well (not sure why I had it ignoring undefined values before)
 

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

