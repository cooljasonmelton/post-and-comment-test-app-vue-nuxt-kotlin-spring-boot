// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

// export default withNuxt([
//   {
//     files: ["/pages/**/*.vue"],
//     rules: {
//       "vue/multi-word-component-names": "off",
//     },
//   },
// ]);

export default withNuxt().override("/pages/**/*.vue", {
  rules: {
    "vue/multi-word-component-names": "off",
  },
});
