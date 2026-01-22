# JS Events Exercise

A hands-on JavaScript exercise focused on DOM manipulation and event handling. This project demonstrates various browser events and how to interact with HTML elements using vanilla JavaScript.

## Technologies

- HTML5
- CSS (Bootstrap 4.3.1)
- Vanilla JavaScript (ES6)

## Features

### Core Features (1-5)

| # | Feature | Description |
|---|---------|-------------|
| 1 | Footer Click | Logs "click" to console when clicking on the footer |
| 1-bis | Click Counter | Displays "click number X" with an incrementing counter |
| 2 | Hamburger Menu | Toggles the navbar menu visibility using `classList.toggle()` |
| 3 | Edit Card 1 | Turns the first card's text red (irreversible) |
| 4 | Edit Card 2 | Toggles the second card's text between green and default |
| 5 | Nuclear Mode | Double-click on navbar disables/enables Bootstrap CSS |

### Bonus Features (6-9)

| # | Feature | Description |
|---|---------|-------------|
| 6 | Hover Reduction | Hovering over "View" button shrinks the card (image 20%, text hidden) |
| 7 | Rotate Right | `==>` button moves the last card to the first position |
| 8 | Rotate Left | `<==` button moves the first card to the last position |
| 9 | Keyboard Shortcuts | Press keys while focusing on the logo to resize the page |

### Keyboard Shortcuts (Feature 9)

| Key | Action |
|-----|--------|
| `a` | Condense page to 4 columns on the left |
| `y` | Condense page to 4 columns in the middle |
| `p` | Condense page to 4 columns on the right |
| `b` | Return to normal layout |

## How to Use

1. Open `exo_events.html` in a web browser
2. Open the browser console (F12) to see debug logs
3. Test each feature:
   - Click on the footer
   - Click the hamburger menu (top right)
   - Click "Edit" buttons on the first two cards
   - Double-click on the navbar
   - Hover over "View" buttons
   - Click `<==` and `==>` buttons
   - Click on "JS & Events" logo and press `a`, `y`, `p`, or `b`

## Project Structure

```
JS_events/
├── exo_events.html    # Main HTML file
├── script.js          # JavaScript with all event handlers
├── plan.md            # Development plan and notes (French)
└── README.md          # This file
```

## Key Concepts Learned

- `addEventListener()` for handling events
- `querySelector()` and `getElementsByClassName()` for DOM selection
- `classList.toggle()` for CSS class manipulation
- `style` property for inline styling
- `event.preventDefault()` to block default behavior
- `insertBefore()` for DOM node manipulation
- `keypress` event for keyboard interactions
- Using `let` in loops to avoid closure issues with `var`

## Notes

- Bootstrap JS is not included intentionally - all interactions are coded in vanilla JavaScript
- Feature 6 may behave unexpectedly after rotating cards (features 7-8) due to how event listeners are bound

## License

This project is for educational purposes.
