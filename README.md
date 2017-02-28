# eslint-plugin-jquery-selectors

An eslint plugin to catch poor performing jQuery selectors.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-jquery-selectors`:

```
$ npm install eslint-plugin-jquery-selectors --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-jquery-selectors` globally.

## Usage

Add `jquery-selectors` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "jquery-selectors"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "jquery-selectors/id-or-class": 2,
        "jquery-selectors/js-prefix": 2
    }
}
```

## Supported Rules

* id-or-class: jQuery selectors should start with a class or an ID.

```javascript
//good
$('#my-id')
$('.my-class')

//bad
$('[id="my-id"]')
$('input[data-thing="true"]')
$('div')
```

* js-prefix: jQuery selectors should start with a class or an ID.

```javascript
//good
$('#js-my-id')
$('.v-js-my-class')

//bad
$('#my-id')
$('.my-class')
$('.js-my-class #my-id')
```
