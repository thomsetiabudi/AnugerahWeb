const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const sveltePreprocess = require('svelte-preprocess')
const production = !process.env.ROLLUP_WATCH

module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    sourceMap: !production,
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  })
}
