/* Toggle active state by adding and removing class "active" */

// Functions have two required parameters
// - targetClass | value: class selector
// - list | value: true (default) / false
// * list value determines whether all elements (true) should be targeted or only the first one (false)

function toggleActiveState (targetClass, list = true) {
  let el = list ? document.querySelectorAll(targetClass) : document.querySelector(targetClass)

  el.forEach(function (item) {
    if (item.classList.contains('active')) {
      item.classList.remove('active')
      return 'active class removed'
    } else {
      item.classList.add('active')
      return 'active class added'
    }
  })
}

function addActiveState (targetClass, list = true) {
  let el = list ? document.querySelectorAll(targetClass) : document.querySelector(targetClass)

  el.forEach(function (item) {
    item.classList.add('active')
    return 'active class added'
  })
}

function removeActiveState (targetClass, list = true) {
  let el = list ? document.querySelectorAll(targetClass) : document.querySelector(targetClass)

  el.forEach(function (item) {
    item.classList.remove('active')
    return 'active class removed'
  })
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
// - action | value: array of functions
// * to pass functions with paramters use createCallbackFunction beforehand

function triggerOnWindowBreak (breakpoint, triggerOn, actions) {
  let screenBreak

  // Set screen above or below breakpoint for event to take place
  if (triggerOn === 'desktop') {
    screenBreak = window.matchMedia(`(min-width: ${breakpoint}px)`)
  } else {
    screenBreak = window.matchMedia(`(max-width: ${breakpoint}px)`)
  }

  // Attach listener
  screenBreak.addListener(function (screenBreak) {
    if (screenBreak.matches) {
      actions.forEach(function (action) {
        action()
      })
    }
  })

  // Call functions
  if (screenBreak.matches) {
    actions.forEach(function (action) {
      action()
    })
  }
}
