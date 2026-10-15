# Portfolio Website

A responsive personal portfolio wich showcases my web development and 3D art projects. 
It is built with HTML, CSS, and JavaScript.

## Target Grade

Target grade is 5, thus I implemented:

1. Newsletter & feedback form
2. data-driven skills showcase
3. accessibility display panel

## Running the website

The website is static and does not require a build step or backend.

1. Keep the project files together in their existing folder structure. The HTML pages rely on the CSS, JavaScript, and image paths shown below.
2. Open the project folder in Visual Studio Code.
3. Start the site with the Live Server extension, beginning with `index.html`.
4. Open the local address provided by Live Server in your browser. Use the navigation menu to visit the other pages.

OR

1. Keep the project files together in their existing folder structure. The HTML pages rely on the CSS, JavaScript, and image paths shown below.
2. Open the folder in your File Explorer.
3. Click index.html and navigate the web freely.

The main files are:

```
index.html
gallery.html
about.html
contact.html
css/
  styles.css
js/
  index.js
  controlPanel.js
  formValidation.js
images/
    code/
        ...
    gallery/
        ...
    other/
        ...
    socialmedia/
        ...
    sort/
    ...
```

## Main features

- **Home page:** Introduces the portfolio owner and displays known skills as cards. Visitors can filter skills by category and sort them by name, proficiency, or years of experience. A counter shows how many skills are currently displayed.
- **Gallery page:** Presents web and 3D projects with descriptions, images, and video demonstrations when available.
- **About page:** Shows background, education, and work experience.
- **Contact page:** Provides a form with client-side input validation, error feedback, and a character counter. The form displays a success message when its validation conditions are met; it does not submit the information to a server.
- **Accessibility menu:** Offers small, medium, and large text-size choices, plus a high-contrast switch. The selected text size and contrast setting are saved in `localStorage` and restored when the site is opened again.
- **Responsive layout:** Adapts the page content for smaller screens, including a “read more” interaction on the home page.

## Accessibility settings

The burger menu contains the accessibility settings.
Text size is changed through the root font size, and the high-contrast switch changes CSS color variables on the root element. The switch also updates its `aria-checked` state. 

## Other

Reduced-motion preferences are supported in the stylesheet.