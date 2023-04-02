module.exports = {
    extends: ['next', 'prettier'],
    rules: {
        '@next/next/no-html-link-for-pages': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
    },
    plugins: ['simple-import-sort'],
}
