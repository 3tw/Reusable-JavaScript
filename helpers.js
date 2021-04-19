/* Create a function with parameters that can be passed as a callback */

// Functions has one required parameter and unspecified number of optional
// - callbackFunction | value: (predefined) function
// + parameters | value: strings
// * parameters values are arguments for the callbackFunction

export const createCallbackFunction = (callbackFunction, ...paramaters) => {
  const execute = () => callbackFunction(...paramaters)
  return execute
}

/* Trigger a callback function(s) on window break */

// Functions has three required parameters
// - breakpoint | value: number
// - triggerOn | value: string ('desktop'/'mobile')
// - action | value: array (!) containing one or more functions
// * to pass functions with paramters use createCallbackFunction beforehand

export function triggerOnWindowBreak(breakpoint, triggerOn, actions) {
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

/* Append uploaded file name(s) */

export function appendUploadName(inputId, nameHolder) {
  document.getElementById(inputId).addEventListener('change', function() {
    let loadedFiles = [
      ...document.getElementById(inputId).files
    ]
    if (loadedFiles) {
      document.getElementById(nameHolder).classList.add('active')

      loadedFiles.forEach((file) => {
        let fileNameEl = document.createElement('span')
        let fileNameText = document.createTextNode(file.name)
        fileNameEl.appendChild(fileNameText)
        document.getElementById(nameHolder).appendChild(fileNameEl)
      })
    }
  })
}
