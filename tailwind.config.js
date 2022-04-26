module.exports = {
  content: ["./src/*.{html,js,svelte,ts,json}", "./src/**/*.{html,js,svelte,ts,json}", "index.html"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderRadius: ['first', 'last'],
      borderWidth: ['last']
    },
  },
  plugins: [],
}
