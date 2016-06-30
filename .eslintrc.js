module.exports = {
  root: true,
  extends: 'airbnb/base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 0,
    'no-undef': 0,
    'no-var': 0,
    'vars-on-top': 0,
    'no-unused-vars': 0,
    'no-trailing-spaces': 0,
    'semi': 0,
    'comma-dangle': 0,
    'space-before-function-paren': 0,
    'object-shorthand': 0,
    'prefer-template': 0,
    'no-else-return': 0,
    'arrow-body-style': 0,
    'no-unused-expressions': 0,
    'no-sequences': 0,
    'func-names': 0
  }
}
