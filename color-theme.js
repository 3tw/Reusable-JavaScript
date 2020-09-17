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

      if (theme.indicator.includes(newTheme)) {
        document.body.setAttribute("color-theme", newTheme);
        break;
      }
    }
  }
}

/* Index appropriate elements according to active color theme */

function indexColorThemeInidicators(colorThemes, addedClass) {
  let currentTheme =
    localStorage.getItem("color-theme") !== null ? localStorage.getItem("color-theme") : "theme is not set";

  for (let i = 0; i < colorThemes.length; i++) {
    const theme = colorThemes[i];

    if (theme.indicator.includes(currentTheme)) {
      document.querySelectorAll(theme.indicator).forEach((item) => item.classList.add(addedClass));
      break;
    }
  }
}

/* Color theme data  */

// List all color themes and relevant items to be indexed
const colorThemes = [
  { theme: "theme-green", indicator: ".color-dot.theme-green" },
  { theme: "theme-orange", indicator: ".color-dot.theme-orange" },
  { theme: "theme-bordeaux", indicator: ".color-dot.theme-bordeaux" },
  { theme: "theme-blue", indicator: ".color-dot.theme-blue" },
  { theme: "theme-tiber", indicator: ".color-dot.theme-tiber" }
];

// Find active color theme and index items accordingly

initColorTheme(defaultTheme = "theme-green");
indexColorThemeInidicators(colorThemes, "active-theme");

