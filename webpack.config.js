module.exports = {
  mode: 'production',
  entry: {
    script: './src/script/main.ts'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/docs'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  }
};
