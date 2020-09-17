/* Check if color theme is set in local storage on page load and set color-theme attribute to body */

function initColorTheme(defaultTheme) {
  let currentTheme = localStorage.getItem("color-theme") !== null ? localStorage.getItem("color-theme") : defaultTheme;
  document.body.setAttribute("color-theme", currentTheme);
}

/* Save selected color theme to local storage */

function saveColorTheme(theme) {
  localStorage.setItem("color-theme", theme);
}


/* Change color theme attribute on body element */

function setColorTheme(colorThemes, newTheme) {
  if (document.body.hasAttribute("color-theme")) {
    document.body.setAttribute("color-theme", "");

    for (let i = 0; i < colorThemes.length; i++) {
      const theme = colorThemes[i];

      if (theme.markedItem.includes(newTheme)) {
        document.body.setAttribute("color-theme", newTheme);
        break;
      }
    }
  }
}

/* Index appropriate elements according to active color theme */

function indexColorThemeElements(colorThemes, addedClass) {
  let currentTheme =
    localStorage.getItem("color-theme") !== null ? localStorage.getItem("color-theme") : "theme is not set";

  for (let i = 0; i < colorThemes.length; i++) {
    const theme = colorThemes[i];

    if (theme.markedItem.includes(currentTheme)) {
      document.querySelectorAll(theme.markedItem).forEach((item) => item.classList.add(addedClass));
      break;
    }
  }
}

/* Color theme data  */

// List all color themes and relevant items to be indexed
const colorThemes = [
  { pageIndex: "theme-green", markedItem: ".color-dot.theme-green" },
  { pageIndex: "theme-orange", markedItem: ".color-dot.theme-orange" },
  { pageIndex: "theme-bordeaux", markedItem: ".color-dot.theme-bordeaux" },
  { pageIndex: "theme-blue", markedItem: ".color-dot.theme-blue" },
  { pageIndex: "theme-tiber", markedItem: ".color-dot.theme-tiber" }
];

// Find active color theme and index items accordingly

initColorTheme(defaultTheme = "theme-green");
indexColorThemeElements(colorThemes, "active-theme");

