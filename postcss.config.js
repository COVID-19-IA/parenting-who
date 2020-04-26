module.exports = (context) => ({
  map: process.env.NODE_ENV === "development",
  plugins: {
    "postcss-import": { root: context.file.dirname },
    "postcss-custom-properties": { preserve: false },
    cssnano: true,
    autoprefixer: { grid: "autoplace" },
  },
});
