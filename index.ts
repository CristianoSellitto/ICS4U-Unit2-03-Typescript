/**
*
* This program uses a basic class to make an array of strings
*
* By:      Cristiano Sellitto
* Version: 1.0
* Since:   2024-03-07
*/

import { BasicClass } from './BasicClass'
import { createPrompt } from 'bun-promptx'

const basicStack = new BasicClass()

for (let counter = 0; counter < 3; counter++) {
// String value
  const string = createPrompt('Enter a string: ')

  const stringValue = string.value
  basicStack.push(stringValue)
}

const removedValue = basicStack.pop()
console.log(`Removed ${removedValue}`)

// Show the stack's value
console.log(basicStack.showStack)

// Show the program as done
console.log('\nDone.')
