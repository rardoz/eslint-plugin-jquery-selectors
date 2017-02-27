const selectorRule = {
  "var-length" : context => ({
    VariableDeclarator: (node) => {
      context.report(node, 'Variable names should be longer than 1 character')
    }
  })
}

export { selectorRule }
