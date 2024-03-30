# Tinder Web Effect

![Tinder Web Effect](./preview.gif)

## Overview

This repository contains the source code for implementing the Tinder web effect using HTML, CSS, and JavaScript. The Tinder web effect mimics the swiping interaction seen in the popular Tinder dating app, allowing users to swipe left or right on items/cards.

## Demo

You can view a live demo of the Tinder web effect [here](https://your-demo-url.com).

## Features

-  Swipe left/right functionality.
-  Customizable card design.
-  Smooth animations.
-  Responsive design for various screen sizes.

## Usage

To use the Tinder web effect in your project:

1. Clone this repository:

```bash
git clone https://github.com/your-username/tinder-web-effect.git
```

2. Include the necessary files in your HTML:

```html
<link rel="stylesheet" href="path/to/tinder-web-effect.css" />
<script src="path/to/tinder-web-effect.js"></script>
```

3. Create the HTML structure for your cards:

```html
<div class="tinder-wrapper">
   <div class="tinder-card">
      <!-- Your card content here -->
   </div>
   <!-- Add more cards here -->
</div>
```

4. Initialize the Tinder web effect:

```javascript
const tinder = new TinderWebEffect(".tinder-wrapper", {
   /* Options */
});
```

## Options

-  `threshold`: The minimum distance (in pixels) a user must swipe to trigger a swipe action. Default is `100`.
-  `onSwipeLeft(cardIndex)`: Callback function triggered when a card is swiped left.
-  `onSwipeRight(cardIndex)`: Callback function triggered when a card is swiped right.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
