module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'gerami',
      externals: {
        react: 'React'
      }
    }
  },
  webpack: {
    rules: {
      'sass-css': {
        modules: true,
        localIdentName:  '[hash:base64:5]'
      }
    }
  }
}
