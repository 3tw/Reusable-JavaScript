/* Determine active page and mark an item with "active-page" class */
// Function expects element with active page class,
// and array of objects with page-specific classes and appropriate items 
// that have to be marked with an "active-page" class

function indexActivePageItems(activePage, pages, addedClass) {
  // Use normal for loop to break it once the page is found
  if (activePage) {
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];

      if (activePage.classList.contains(page.pageIndex)) {
        document.querySelectorAll(page.markedItem).forEach((item) => item.classList.add(addedClass));
        break;
      }
    }
  } else {
    return false;
  }
}

/* Toggle active state by adding and removing class "active" */
// Function expects class name as a string

function toggleActiveState(targetClass) {
  let el = document.querySelectorAll(targetClass);

  el.forEach(function(item) {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      return "active class removed";
    } else {
      item.classList.add("active");
      return "active class added";
    }
  });
}

/* Add active state by adding class "active" */
// Function expects class name as a string

function addActiveState(targetClass) {
  let el = document.querySelectorAll(targetClass);

  el.forEach(function(item) {
    // if (item.classList.contains("active")) {
    item.classList.add("active");
    return "active class added";
    // }
  });
}

/* Remove active state by removing class "active" */
// Function expects class name as a string

function removeActiveState(targetClass) {
  let el = document.querySelectorAll(targetClass);

  el.forEach(function(item) {
    // if (item.classList.contains("active")) {
    item.classList.remove("active");
    return "active class removed";
    // }
  });
}

/* Create a function with params that can be easily passed as a callback */
// Function expects a callback function its paramaters
// (!) not tested on multiple params (!)

const createFunctionWithClosure = (callbackFunction, ...paramaters) => {
  const execute = () => callbackFunction(...paramaters)
  return execute
}

/* Trigger a callback function(s) on window break */
// Params determine the breakpoint (e.g. 576),
// the callback functions created via removeActiveState() function (can be a single function or array)
// and whether the action is triggered when screen is bigger ("desktop") or smaller ("mobile") than breakpoint

function triggerOnWindowBreak (breakpoint, triggerOn, actions) {
  // Set screen above or below breakpoint for event to take place
  let screen

  if (triggerOn === 'desktop') {
    screen = window.matchMedia(`(min-width: ${breakpoint}px)`)
  } else {
    screen = window.matchMedia(`(max-width: ${breakpoint}px)`)
  }

  // Attach listener
  screen.addListener(function (screen) {
    if (screen.matches) {
      actions.forEach(function (action) {
        action()
      })
    }
  })

  // Call functions
  if (screen.matches) {
    actions.forEach(function (action) {
      action()
    })
  }
}