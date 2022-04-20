const INLINE_ELEMENTS = require('eslint-plugin-vue/lib/utils/inline-non-void-elements.json');

module.exports = {
  extends: '@antfu',
  rules: {
    semi: [
      'error', 'always',
    ],
    '@typescript-eslint/semi': [
      'error', 'always',
    ],
    'vue/html-self-closing': 0,
    'quote-props': ['error', 'as-needed'],
    curly: ['error', 'all'],
    'arrow-parens': ['error', 'always'],
    'brace-style': 'off',
    'vue/singleline-html-element-content-newline': ['error', {
      ignoreWhenNoAttributes: true,
      ignoreWhenEmpty: true,
      ignores: ['pre', 'textarea', ...INLINE_ELEMENTS],
    }],
    '@typescript-eslint/brace-style': 'off',
  },
};
