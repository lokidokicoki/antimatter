/**
 * Adapted from
 * https://www.npmjs.com/package/eslint-config-google
 */

'use strict';

module.exports = {
  rules: {
    // The rules below are listed in the order they appear on the eslint
    // rules page. All rules are listed to make it easier to keep in sync
    // as new ESLint rules are added.
    // http://eslint.org/docs/rules/

    // Possible Errors
    // http://eslint.org/docs/rules/#possible-errors
    // ---------------------------------------------
    'no-cond-assign': 0, // eslint:recommended
    'no-console': [1, {
      allow: ['warn', 'error']
    }], // eslint:recommended
    // 'no-constant-condition': 2, // eslint:recommended
    // 'no-control-regex': 2, // eslint:recommended
    // 'no-debugger': 2, // eslint:recommended
    // 'no-dupe-args': 2, // eslint:recommended
    // 'no-dupe-keys': 2, // eslint:recommended
    // 'no-duplicate-case': 2, // eslint:recommended
    // 'no-empty-character-class': 2, // eslint:recommended
    // 'no-empty': 2, // eslint:recommended
    // 'no-ex-assign': 2, // eslint:recommended
    // 'no-extra-boolean-cast': 2, // eslint:recommended
    // 'no-extra-parens': 0,
    // 'no-extra-semi': 2, // eslint:recommended
    // 'no-func-assign': 2, // eslint:recommended
    // 'no-inner-declarations': 2, // eslint:recommended
    // 'no-invalid-regexp': 2, // eslint:recommended
    'no-irregular-whitespace': 2, // eslint:recommended
    // 'no-obj-calls': 2, // eslint:recommended
    // 'no-prototype-builtins': 0,
    // 'no-regex-spaces': 2, // eslint:recommended
    // 'no-sparse-arrays': 2, // eslint:recommended
    // 'no-template-curly-in-string': 0,
    'no-unexpected-multiline': 2, // eslint:recommended
    // 'no-unreachable': 2, // eslint:recommended
    // 'no-unsafe-finally': 2, // eslint:recommended
    // 'no-unsafe-negation': 0,
    // 'use-isnan': 2 // eslint:recommended
    'valid-jsdoc': [2, {
      requireParamDescription: false,
      requireReturnDescription: false,
      requireReturn: false,
      prefer: {
        returns: 'return'
      }
    }],
    // 'valid-typeof': 2 // eslint:recommended

    // Best Practices
    // http://eslint.org/docs/rules/#best-practices
    // --------------------------------------------

    // 'accessor-pairs': 0,
    // 'array-callback-return': 0,
    // 'block-scoped-var': 0,
    // 'class-methods-use-this': 0,
    'complexity': [2, 20],
    'consistent-return': 0,
    'curly': 2,
    'default-case': 2,
    // 'dot-location': 0,
    'dot-notation': 2,
    'eqeqeq': ['error', 'always'],
    'guard-for-in': 2,
    'no-alert': 'error',
    'no-caller': 2,
    // 'no-case-declarations': 2, // eslint:recommended
    // 'no-div-regex': 0,
    'no-else-return': 'error',
    'no-empty-function': 2,
    // 'no-empty-pattern': 2, // eslint:recommended
    // 'no-eq-null': 0,
    // 'no-eval': 0,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    // 'no-extra-label': 0,
    // 'no-fallthrough': 2, // eslint:recommended
    // 'no-floating-decimal': 0,
    // 'no-global-assign': 0,
    // 'no-implicit-coercion': 0,
    // 'no-implicit-globals': 0,
    // 'no-implied-eval': 0,
    'no-invalid-this': 2,
    // 'no-iterator': 0,
    // 'no-labels': 0,
    // 'no-lone-blocks': 0,
    // 'no-loop-func': 0,
    // 'no-magic-numbers': 0,
    'no-multi-spaces': ['error', {exceptions: {VariableDeclarator: true, ImportDeclaration: true, Property: true}}],
    'no-multi-str': 2,
    // 'no-new-func': 0,
    'no-new-wrappers': 2,
    // 'no-new': 0,
    // 'no-octal-escape': 0,
    // 'no-octal': 2, // eslint:recommended
    // 'no-param-reassign': 0,
    // 'no-proto': 0,
    // 'no-redeclare': 2, // eslint:recommended
    // 'no-return-assign': 0,
    // 'no-script-url': 0,
    // 'no-self-assign': 2, // eslint:recommended
    'no-self-compare': 2,
    // 'no-sequences': 0,
    'no-throw-literal': 2, // eslint:recommended
    // 'no-unmodified-loop-condition': 0,
    // 'no-unused-expressions': 0,
    // 'no-unused-labels': 2, // eslint:recommended
    'no-useless-call': 2,
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    // 'no-void': 0,
    'no-warning-comments': 1,
    'no-with': 2,
    'radix': [2, 'as-needed'],
    // 'vars-on-top': 0,
    'wrap-iife': 2,
    'yoda': 2,

    // Strict Mode
    // http://eslint.org/docs/rules/#strict-mode
    // -----------------------------------------
    // 'script': 0,

    // Variables
    // http://eslint.org/docs/rules/#variables
    // ---------------------------------------
    // 'init-declarations': 0,
    // 'no-catch-shadow': 0,
    // 'no-delete-var': 2, // eslint:recommended
    // 'no-label-var': 0,
    // 'no-restricted-globals': 0,
    'no-shadow-restricted-names': 2,
    // 'no-shadow': 0,
    // 'no-undef-init': 0,
    // 'no-undef': 2, // eslint:recommended
    // 'no-undefined': 0,
    'no-unused-vars': [2, {
      args: 'none'
    }], // eslint:recommended
    // 'no-use-before-define': 0,

    // Node.js and CommonJS
    // http://eslint.org/docs/rules/#nodejs-and-commonjs
    // -------------------------------------------------
    // 'callback-return': 0,
    // 'global-require': 0,
    // 'handle-callback-err': 0,
    // 'no-mixed-requires': 0,
    // 'no-new-require': 0,
    // 'no-path-concat': 0,
    // 'no-process-env': 0,
    // 'no-process-exit': 0,
    // 'no-restricted-modules': 0,
    // 'no-restricted-properties': 0,
    // 'no-sync': 0,

    // Stylistic Issues
    // http://eslint.org/docs/rules/#stylistic-issues
    // ----------------------------------------------
    'array-bracket-spacing': [2, 'never'],
    // 'block-spacing': 0,
    'brace-style': 2,
    'camelcase': [2, {
      properties: 'never'
    }],
    'comma-dangle': [2, 'never'],
    'comma-spacing': 2,
    'comma-style': 2,
    'computed-property-spacing': 2,
    // 'consistent-this': 0,
    'eol-last': 2,
    'func-call-spacing': 2,
    // 'func-name-matching': 0,
    // 'func-names': 0,
    // 'func-style': 0,
    // 'id-blacklist': 0,
    // 'id-length': 0,
    // 'id-match': 0,
    'indent': ['error', 2, {SwitchCase: 1, ObjectExpression: 1, ArrayExpression: 1}],
    // 'jsx-quotes': 0,
    'key-spacing': ['error', {align: 'value'}],
    'keyword-spacing': ['error', {before: true, after: true}],
    // 'line-comment-position': 0,
    'linebreak-style': 2,
    // 'lines-around-comment': 0,
    // 'lines-around-directive': 0,
    // 'max-depth': 0,
    'max-len': 0,
    // 'max-lines': 0,
    // 'max-nested-callbacks': 0,
    // 'max-params': 0,
    // 'max-statements-per-line': 0,
    // 'max-statements': 0,
    // 'multiline-ternary': 0,
    'new-cap': 2,
    // 'new-parens': 0,
    // 'newline-after-var': 0,
    // 'newline-before-return': 0,
    // 'newline-per-chained-call': 0,
    'no-array-constructor': 2,
    // 'no-bitwise': 0,
    // 'no-continue': 0,
    // 'no-inline-comments': 0,
    // 'no-lonely-if': 0,
    // 'no-mixed-operators': 0,
    'no-mixed-spaces-and-tabs': 2, // eslint:recommended
    'no-multiple-empty-lines': [2, {
      max: 2
    }],
    // 'no-negated-condition': 0,
    // 'no-nested-ternary': 0,
    'no-new-object': 2,
    // 'no-plusplus': 0,
    // 'no-restricted-syntax': 0,
    // 'no-tabs': 0,
    // 'no-ternary': 0,
    'no-trailing-spaces': 2,
    // 'no-underscore-dangle': 0,
    // 'no-unneeded-ternary': 0,
    // 'no-whitespace-before-property': 0,
    // 'object-curly-newline': 0,
    'object-curly-spacing': 2,
    'object-property-newline': 2,
    // 'one-var-declaration-per-line': 0,
    'one-var': [2, {
      var: 'never',
      let: 'never',
      const: 'never'
    }],
    // 'operator-assignment': 0,
    // 'operator-linebreak': 0,
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'consistent'],
    'quotes': [2, 'backtick', {
      allowTemplateLiterals: true
    }],
    'require-jsdoc': [2, {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true
      }
    }],
    'semi-spacing': 2,
    'semi': ['error', 'always'],
    // 'sort-keys': 0,
    // 'sort-vars': 0,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never'],
    // 'space-in-parens': 0,
    // 'space-infix-ops': 0,
    'space-unary-ops': 'error',
    'spaced-comment': 0,
    // 'unicode-bom': 0,
    // 'wrap-regex': 0,

    // ECMAScript 6
    // http://eslint.org/docs/rules/#ecmascript-6
    // ------------------------------------------
    // 'arrow-body-style': 0,
    'arrow-parens': [2, 'as-needed'],
    // 'arrow-spacing': 0,
    'constructor-super': 2, // eslint:recommended
    'generator-star-spacing': [2, 'after'],
    // 'no-class-assign': 0,
    'no-confusing-arrow': 'error',
    // 'no-const-assign': 0, // eslint:recommended
    // 'no-dupe-class-members': 0, // eslint:recommended
    // 'no-duplicate-imports': 0,
    'no-new-symbol': 2, // eslint:recommended
    // 'no-restricted-imports': 0,
    'no-this-before-super': 2, // eslint:recommended
    // 'no-useless-computed-key': 0,
    // 'no-useless-constructor': 0,
    // 'no-useless-rename': 0,
    'no-var': 2,
    // 'object-shorthand': 0,
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: true
    }],
    'prefer-const': 'error',
    // 'prefer-numeric-literals': 0,
    // 'prefer-reflect': 0,
    'prefer-rest-params': 2,
    'prefer-spread': 'error',
    'prefer-template': 2,
    // 'require-yield': 2, // eslint:recommended
    'rest-spread-spacing': 2,
    // 'sort-imports': 0,
    // 'symbol-description': 0,
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': [2, 'after']
  }
};
