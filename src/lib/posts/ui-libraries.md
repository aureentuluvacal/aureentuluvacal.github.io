---
title: Building a UI Library
date: 2020-05-16
description: I built a UI library when I started at Iris. It's one of the best things I've ever made.
tags: [Code]
---

I inherited a decently large codebase with _a lot_ of legacy code (Rails 4.2.7, Handlebars, and a lot of jQuery). React components were built in an effort to modernize the front end, but it was about 5% of the front end. I knew converting it all would be one of our years long projects, and I wanted to make that process as painless as possible. In my head, I saw what the front end would become: consistent, modular, easy to update, 100% in React. However, I had no foundation to start with, which prompted me to build a UI library.

## Where I started

I've used [MaterialUI](https://material-ui.com/) and [SemanticUI](https://semantic-ui.com/) before so I already had a baseline for what a UI library was. That is, a collection of self-contained components that follow a specific design pattern. The design can either be super specific like MaterialUI (since it's based off of Google's material design) or be a little more customizable like Semantic.

When I started on the library, we had just rebranded and the entire design of the app was wildly different. Different fonts, different colors, different usage of space, different shapes on the page, all of it. The upside to that situation was I could start from scratch using the new global variables I had set up for the new brand.

The first component I wrote was a basic button styled with an SCSS module.

> Note: Our codebase uses Javascript, SASS modules, and the **classnames** package for conditional styling. You can sub in **styled-components** or Typescript.

#### Button.jsx

```jsx
// This is what it looked like a year ago.
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ onClick, text }) => {
 return (
  <button onClick={onClick} className={styles}>
   <span>{text}</span>
  </button>
 );
};

Button.propTypes = {
 onClick: PropTypes.func,
 text: PropTypes.string.isRequired
};

Button.defaultProps = {
 onClick: () => {}
};

export default Button;
```

#### Button.module.scss

```scss
// We have a Webpack alias pointing to our global variables.
@import '~styles/_variables';

.Button {
 background-color: $mauve;
 color: white;
 border: 1px solid $mauve;
 border-radius: $border-radius-button;
 display: inline-block;
 vertical-align: middle;
 height: 36px;
 padding: 0 16px;
 cursor: pointer;
 line-height: 36px;
 box-shadow:
  0 1px 1px 0 rgba(black, 0.05),
  inset 0 1px 0 0 rgba(white, 0.1);

 &:hover {
  background-color: rgba($mauve, 0.9);
  border-color: rgba($mauve, 0.9);
 }
}
```

The styles themselves don't matter, but rather how the component is built. It needed to be simple enough to be reusable across the entire site, but complex enough to grant us the ability to customize its visuals and functionality.

I feel like we've found the right system for balancing the two, including leveraging `classnames` to use specific styles in the presence of certain props.

For example:

#### Button.jsx

```jsx
// We would destructure props before this.
const hasClassName = !!className;
const cx = classNames.bind(styles);
const classes = cx('Button', {
 'Button--danger': danger,
 'Button--icon': !!icon,
 'Button--loading': loading,
 'Button--logo': logo,
 'Button--small': small,
 OutlinedButton: category === 'outlined',
 IconButton: category === 'icon',
 [className]: hasClassName
});
```

And prepare styles, like "Button--danger" , in the SCSS file as follows:

#### Button.module.scss

```scss
.Button {
 // Styles from before...
 // "danger" shamelessly stolen from Bootstrap.
 &--danger {
  background-color: $cinnabar-red;
  border-color: $cinnabar-red;

  &:hover {
   background-color: $milano-red;
   border-color: $milano-red;
  }
 }
}
```

So if I did `<Button text="Don't click me." danger />` it would render a red variant of our button because the `danger` prop is present.

## Adding structure

I first encountered this iteration of a UI Library from one of my awesome coworkers at Lessonly. He saw the value of adding this level of structure to our UI. He also introduced a mandatory file structure for each new component. Within the context of the Button example, that structure looks like this:

```text
└── ui
    ├── Button
    │   ├── Button.jsx
    │   ├── Button.module.scss
    │   ├── Button.test.js
    │   ├── index.js
    │   └── README.md
    └── index.js
```

where the _ui_ directory houses all the UI components in our library and each directory within it is named after a different component. There should be five files in each component directory:

1. The actual component.
2. A file for styles.
3. A unit test.
4. An index.js file for easy exporting.
5. A README.md to describe the different variations of the component and how it will be used.

The _index.js_ file in the root of _ui_ directory serves to export each component from one place. Like so:

#### ui/index.js

```js
export { Button } from './Button';
// etc.
```

so we can import it in other components just using `import { Button } from '~ui';`

## What I learned building my own

Building out the library was the easy part because we could justify adding new components based on need. The more challenging bit was making sure we refactored regularly as the number of ways to customize the component grew.

Currently, our Button component sits at twelve props. This seems like a lot, but each prop reflects a solution to a problem we needed to address in the app. While the specific props may be unique to our situation, I think all props inherently should serve the user experience in a concrete fashion.

The `danger` example above is an example of a visual variant, where the Button that's rendered with the "Button--danger" class looks different from the default Button, and also represents a change to the user's experience. We would only use this prop if users were about to delete something and we wanted to caution them. This is a concrete reason.

Adding a prop like `thickBorder`, would be (1) weird and (2) serve no purpose other than to look a little different. I try to avoid those situations.

I also realize, in retrospect, how grateful I am that I built the UI library right after the rebrand. The library has grown into 23 components. It's made writing React more fun because it forces me break down the UI into smaller building blocks and gives us the ability to propogate style changes with one adjustment in the component's SCSS file.

I'm excited to see where it goes in the next year.
