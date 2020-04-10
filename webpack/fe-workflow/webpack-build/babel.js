module.exports = function({ version }) {
  // console.log(version, 'babel.js')
  return {
    'presets': [
      [
        '@babel/preset-env',
        {
          targets: {
            chrome: 59,
            edge: 13,
            firefox: 50,
            safari: 8
          }
        }
      ],
      [
        // .ts  .tsx
        '@babel/preset-typescript',  
        {
          allExtensions: true
        }
      ]
    ],
    plugins: [
      '@babel/plugin-transform-typescript'
    ]
  }
}