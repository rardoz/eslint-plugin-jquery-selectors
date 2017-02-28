/**
 * @fileoverview An eslint plugin to catch poor performing jQuery selectors.
 * @author Robert Greene
 */
"use strict";

module.exports.rules = {
  "id-or-class": context => ({
    CallExpression: (node) => {
      if(node.callee.name === '$') {
        if(node.arguments && node.arguments[0] && node.arguments[0].value) {
          let val = node.arguments[0].value
          const all = val.split(',')
          all.forEach((element) => {
            if(!(/^.*(#|\.)/).test(element)) {
              context.report(node, 'jQuery selectors should start with a class or an ID')
            }
          })
        }
      }
    }
  }),
  "js-prefix": context => ({
    CallExpression: (node) => {
      if(node.callee.name === '$') {
        if(node.arguments && node.arguments[0] && node.arguments[0].value) {
          let val = node.arguments[0].value
          const all = val.replace([','], '').split(' ')
          all.forEach((element) => {
            if((/(\.|#)/).test(element) && !(/(\.|#)(js-)/).test(element)) {
              context.report(node, 'DOM manipulated by JS should use selectors with the js- prefix')
            }
          })
        }
      }
    }
  })
}
