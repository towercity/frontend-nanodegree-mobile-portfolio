## Website Performance Optimization portfolio project

An exercise in in web optimization based on the [Critical Rendering Path course](https://www.udacity.com/course/ud884) Udacity course, with the goal of reaching the highest PageSpeed possible for a mobile web portfolio, and of fixing speed-impacting bugs from the javascript of a interactive page.

### Getting started

Clone the repository to your machine. To view the website with optimization, open build/index.html. To view without optimization, open src/index.html.

To view the interactive pizzeria site, click on the Cam's pizzeria clink at the bottom of the page.

### Optimizations

#### Portfolio optimizations

1. CSS files are inlined on the pages which use them
2. Web fonts are removed
3. Non-essential Javascript is moved to the bottom of the `<body>` and set to `async` if linked
4. Images are compressed and shrunk to the smallest useable pixel size
5. All local Javascript, CSS, and HTML has been minified to reduce file size

#### Pizza optimizations

1. To `changePizzaSizes()` added `randomPizzas` variable, which calls for style information only once
2. Changed `changePizzaSizes()` in main.js to return width as a percent rather than a pixel value
3. Removed (now useless) `determineDx()` from main.js
4. Added `scrollLocation` variable to `updatePositions()` to prevent a the function's main `for` loop from looping style and layout calls

#### Gulp optimizations

The project's gulpfile's default task runs minification on all CSS, JS, and HTML in the project's src directory, as well as autoprefixing on the CSS and debugging on the JS, then moves these files to the build directory. In addition, the default task continues to watch the src directory for updates to push to the build directory.
