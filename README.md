# 2022 - GULP FOR HTML + SCSS + JS (ES6+)

<br />

## Steps to copy to your local environment:

<br />

### 1. Download archive or clone these files with:
```
git clone https://github.com/andreistez/gulp-html.git
```

### 2. Install dependencies:
```
npm i
```

### 3. Start development:
```
npm start
```

### 4. Production build:
```
npm run build
```

### 5. You are awesome! Good luck! ;-)

<hr />
<br />

## Where to place source files?

<br />

Nice question! Inside your `src` directory.

<hr />
<br />

## Where are processed files located?

<br />

Inside your `public` directory. It will appear after starting development or after running production build.

<hr />
<br />

## Features:

<br />

### 1. HTML

<br />

#### 1.1. <a href="https://www.npmjs.com/package/gulp-file-include">Gulp-file-include</a> allows you to divide your HTML layout into small parts, pass your data to them and etc (please see <a href="https://www.npmjs.com/package/gulp-file-include">docs</a>).

<br />

#### 1.2. If `img` tag has `src` with the image that has its `WEBP` version - image will be replaced with this `WEBP`.

<hr />
<br />

### 2. Styles

<br />

#### 2.1. `SCSS` support.

<br />

#### 2.2. If `background-url` points to an image that has its `WEBP` version - it will be replaced.

<br />

#### 2.3. If there are different `CSS`-properties that could be replaced with their short version - they will be replaced automatically.

<br />

#### 2.4. All `@media` queries with the same rules will be grouped together.

<br />

#### 2.5. Gulp4 default sourcemaps added.

<hr />
<br />

### 3. JavaScript

<br />

#### 3.1. ES6+ with `import` / `export` support.

<br />

#### 3.2. Gulp4 default sourcemaps added.

<hr />
<br />

### 4. Images

<br />

#### 4.1. Minification of `PNG`, `JPG`, `JPEG`, `GIF`, `SVG`.

<br />


#### 4.2. Also creates `WEBP` version of the image.

<hr />
<br />

### 5. Errors
Pop-up system notifications are added - now you will not waste your time searching for error.

<hr />