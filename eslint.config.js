export default[
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module'
        },
        rules: {
            semi: ['error', 'alwayas'],
            quotes: ['error', 'single']
        }
    }
]