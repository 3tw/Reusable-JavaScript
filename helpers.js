/* Toggle active state by adding and removing class "active" */

// Functions have two required parameters
// - targetClass | value: class selector
// - stateClass | value: string (of class added), default = 'active'
// - list | value: true (default) / false
// * list value determines whether all elements (true) should be targeted or only the first one (false)

function toggleActiveState(targetClass, stateClass = 'active', list = true) {
  let el = list ? document.querySelectorAll(targetClass) : document.querySelector(targetClass)

  if (list === true) {
    el.forEach(function(item) {
      item.classList.toggle(stateClass)
      return 'active class changed'
    })
  } else {
    el.classList.toggle(stateClass)
    return 'active class toggled'
  }
}

function addActiveState(targetClass, stateClass = 'active', list = true) {
  let el = list ? document.querySelectorAll(targetClass) : document.querySelector(targetClass)

  if (list === true) {
    el.forEach(function(item) {
      item.classList.add(stateClass)
      return 'active class added'
    })
  } else {
    el.classList.add(stateClass)
    return 'active class added'
  }
}

function removeActiveState(targetClass, stateClass = 'active', list = true) {
  let el = list ? document.querySelectorAll(targetClass) : document.querySelector(targetClass)

  if (list === true) {
    el.forEach(function(item) {
      item.classList.remove(stateClass)
      return 'active class removed'
    })
  } else {
    el.classList.remove(stateClass)
    return 'active class removed'
  }
}

/* Create a function with parameters that can be passed as a callback */

// Functions has one required parameter and unspecified number of optional
// - callbackFunction | value: (predefined) function
// + parameters | value: strings
// * parameters values are arguments for the callbackFunction

const createCallbackFunction = (callbackFunction, ...paramaters) => {
  const execute = () => callbackFunction(...paramaters)
  return execute
}

/* Trigger a callback function(s) on window break */

// Functions has three required parameters
// - breakpoint | value: number
// - triggerOn | value: string ('desktop'/'mobile')
// - action | value: array (!) containing one or more functions
// * to pass functions with paramters use createCallbackFunction beforehand

function triggerOnWindowBreak(breakpoint, triggerOn, actions) {
  let screenBreak

  // Set screen above or below breakpoint for event to take place
  if (triggerOn === 'desktop') {
    screenBreak = window.matchMedia(`(min-width: ${breakpoint}px)`)
  } else {
    screenBreak = window.matchMedia(`(max-width: ${breakpoint}px)`)
  }

  // Attach listener
  screenBreak.addListener(function(screenBreak) {
    if (screenBreak.matches) {
      actions.forEach(function(action) {
        action()
      })
    }
  })

  // Call functions
  if (screenBreak.matches) {
    actions.forEach(function(action) {
      action()
    })
  }
}

export { toggleActiveState, addActiveState, removeActiveState, createCallbackFunction, triggerOnWindowBreak }
