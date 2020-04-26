module.exports = {
  mode: "production",
  entry: {
    script: "./src/parenting-who/script/main.ts",
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/docs/parenting-who",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
};
