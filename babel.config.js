module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@models': './src/models',
        '@api': './src/api',
        '@config': './src/config',
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
