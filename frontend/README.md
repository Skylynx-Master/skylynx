[Back laHause project readme ](../README.md)

# Frontend style guides

## Contents

-   [Beginnings](#beginnings)
-   [File Structure](#file-structure)
-   [General](#general)
-   [Syntax](#syntax)
-   [Property Management](#property-management)
-   [Configure container](#configure-container)

### Beginnings
* Keep it simple and reuse as much as possible.
* A code that looks like a single person has written it
* Write for scalability
### File Structure

```
-lahause-react
.
├── package-lock.json
├── package.json
├── .babelrc
├── .gitignore
├── webpack.config.js
├── public
│   └──index.html
└── src
    ├── index.js
    ├── App.js
    ├── __test__
    │    └── components
    ├── assets
    │    ├── static
    │    ├── styles 
    │    │   ├── components
    │    │   └── pages
    │    ├── Global.scss 
    │    ├── Media.scss         
    │    └── Vars.scss    
    ├── components
    │   ├── Layout.js
    │   └── Navbar.js
    └── pages
        ├── Home.js
        └── NotFound.js

```
### General

* We use BEM as a code creation methodology
* Name of files in the plural (Example: _bottons.scss)
* Classes in singular and lowercase (Example: .galery__boton)
* Name images relative to your block. (Example: icon-search.png)

### Syntax

* 1 space after the selector and before {}
* 4 indentation spaces.
* 1 space after:
* CSS blocks separated by 2 lines
* Avoid nesting abuse. Limit 1 level
* Mixins for font sizes, styles, and numeric values.

### Property Management

Properties and selectors must be ordered as follows:
1. Box model properties (display, width, height, margin, etc)
2. Positioning (position, left, top, right, etc)
3. Typography (text-transform, text-decoration)
4. Decoration (background-image, color, etc.)
5. Variables
6. Mixins

```css
    .button {
        display: block;
        width: 220px;
        height: 40px;
        position: relative;
        text-transform: uppercase;
        background-color: #333333;
        font-weight: $semibold;
        @include font-size (13px);
    }


```
### Configure container

Please install first plugin Remote - Container in Visual Studio Code. 
