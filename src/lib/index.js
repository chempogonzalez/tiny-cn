const classNamesReducer = (accumulatedValues, currentValue) => {
  if (!currentValue) return accumulatedValues

  // Arrays
  if (Array.isArray(currentValue)) {
    accumulatedValues.push(cn(...currentValue))
    return accumulatedValues
  }
  // Simple string values provided
  if (typeof currentValue === 'string') {
    accumulatedValues.push(currentValue)
    return accumulatedValues
  }
  // When object with key: value(boolean/condition) is provided
  if (typeof currentValue === 'object') {
    Object.entries(currentValue).forEach(([key, value]) => {
      if (value) accumulatedValues.push(key)
    })
  }
  return accumulatedValues
}

/**
 * Concatenate clases for DOM elements based on strings
 * provided or object with { key: condition value }
 * @param  {Array<unknown>} params Each param could be either string or object
 * @returns Concatenated clases for dom element
 *
 * @example
 *  cn('class1', 'class2')                      => 'class1 class2'
 *
 *  const isValid = false
 *  cn('class1', { class2: isValid === true })  => 'class1'
 *
 *
 *  cn('class1', ['class2', { class3: isValid === true }]) => 'class1 class2'
 */
export function cn (...params) {
  return params.reduce(classNamesReducer, []).join(' ')
}
