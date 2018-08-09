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
  }
}
