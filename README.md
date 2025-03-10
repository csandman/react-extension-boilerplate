# React Extension Boilerplate

> Forked from https://github.com/WebExp0528/React-Extension-Boilerplate

Works for Chrome, Opera, Edge & Firefox.

![preview](preview/Sep-21-2020%2015-15-55.gif)

## Features

- **_Supports Manifest Version 3_**
- **_Write in your favorite framework - React! :)_**

  Now you can create part of your extensions in React framework - as you wish ;)

- **_Write once and deploy to Chrome, Opera, Edge & Firefox_**

  Based on `webextension-polyfill`. It also includes a tiny polyfill to bring uniformity to the APIs exposed by different browsers.

- **_Live-reload_**

  Your changes to CSS, HTML & JS files will be relayed instantly without having
  to manually reload the extension. This ends up saving a lot of time and
  improving the developer experience. Based on `web-ext-reloader-mv3`

- **_Newest js technology stack_**

  You can use `Typescript` or `Babel`

- **_Profiling JS Packages_**

![Profile](preview/profile-chrome.png)

- **_Comfortable styles import_**

  With react you can load styles directly and you can use scss for styling.

- **_Easily configurable and extendable_**

  Project use webpack so you can easily customize your project depends on your needs.
  In config.json you can define source path for each browser
  (if needed - default it's the same source), destination and develop directory.

- **_Clean code_**

  Clean code is the best way for long term support for project. Boilerplate has
  fully configured eslint with airbnb style guide.

- **_Test your components!_**

  Project use some library which support your testing process.
  As test runner we use karma, as testing framework mocha.
  As support to assertion we use chai.

## Run & Installation

### Run & Build

1. Clone the repository `git clone https://github.com/csandman/react-extension-boilerplate.git`
2. Run `npm install`
3. Run `npm run build:{target browser}` or `yarn build:{target browser}`. EX: `yarn build:chrome`

Note: You can [download](https://github.com/csandman/react-extension-boilerplate/releases/latest) build file

### Load the extension in Chrome & Opera

1.  Open Chrome/Opera browser and navigate to chrome://extensions
2.  Select "Developer Mode" and then click "Load unpacked extension..."
3.  From the file browser, choose to `react-extension-boilerplate/dev/chrome`
    or `react-extension-boilerplate/dev/opera`

### Load the extension in Firefox

1. Open Firefox browser and navigate to about:debugging
2. Click "Load Temporary Add-on" and from the file browser, choose `react-extension-boilerplate/dev/firefox`

### Load the extension in Edge

https://learn.microsoft.com/en-us/microsoft-edge/extensions-chromium/getting-started/extension-sideloading

## Developing

The following tasks can be used when you want to start developing the extension
and want to enable live reload -
`npm run dev:{target browser}` or `yarn dev:{target browser}`

## Profiling

Run `npm run profile:{target browser}` or `yarn profile:{target browser}`

## Packaging

Run `npm run build:{target browser}` or `yarn build:{target browser}` to create a zipped,
production-ready extension for each browser.
You can then upload that to the app store.

## Available Target Browsers

`chrome` `firefox` `opera` `edge`

---

This project is licensed under the MIT license.

If you have any questions or comments, please create a new issue.
I'd be happy to hear your thoughts.
