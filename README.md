# lotide
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software. It is admittedly very buggy.**

This project was created and published by me as part of my learnings at Lighthouse Labs. I plan to comeback in a few months to refactor this library for practice.

## Usage

**Install it:**

`npm install @kershia1/lotide`

**Require it:**

`function
 _ = require('@kershia1/lotide');`

**Call it:**

`function
 results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function (assertArraysEqual)' : Return a boolean assertion for array equality 
* 'function (assertEqual)':  Return a boolean assertion for array value equality
* function (assertObjectsEqual)' :  Return a boolean assertion for object equality
* 'function (countLetters )' : Count occurances of letters in a given array.
* 'function (countOnly)' : Count only the specified items in a given array of items.
* 'function (eqArrays)' : Test if arrays are absolutely equal. 
* 'function (eqObjects)' : Test if objects are absolutely equal. 
* 'function (head)' : Find the and return the head of an array. 
* 'function (findKey)' : Find the key in a given object, and return first match found.
* 'function (findKeyByValue)' : Find the key with value in a given object, and  test if it matches.
* 'function (flatten)' : Take a nested array and return all sub levels to one level.
* 'functions (index)' : List of all functions in library.
* 'function (letterPositions)' : Find the indexed position of letters in a string.
* 'function (map)' : Find and test if words absolutely match in a string.
* 'function (middle)' : Find and return the middle of an array, when odd the middle most element, when even 2 middle most elements.
* 'function (takeUntil)' : Take and return given elements of a string until cue to stop.
* 'function (tail)': Find and return everythign except the first element of the array. 
* 'function (without)' : Find an return subset of given array.
* `function (assertArraysEqualTest)' : Test if given arrays are equal.
* 'function (assertEqualTest)': Test if given arrays are equal.
* 'function (eqArraysTest)' : Test if given arrays are equal.
* 'function (headTest)' : Test if the correct head value is returned.
* 'function (middleTest)' : Test if the correct middle value is returned.
