---
title: "How to style a markdown blog post using Tailwind CSS"
date: "2022-01-07"
excerpt: "If you have used Tailwind CSS before you may have noticed that the framework do a CSS reset in order to keep the styling consistent throughout the page. This is awesome but if you are building a website where you need to display content from an external source such as a markdown file it can be a daunting task to style the different elements."
image: "typewriter.jpg"
---

If you have used Tailwind CSS before you may have noticed that the framework do a CSS reset in order to keep the styling consistent throughout the page. This is awesome but if you are building a website where you need to display content from an external source such as a markdown file it can be a daunting task to style the different elements.

## 1. Install the @tailwindcss/typography plugin

```
npm install -D @tailwindcss/typography
```

## 2. Add the plugin to your tailwind.config.js file

```js
module.exports = {
  plugins: [require("@tailwindcss/typography")],
};
```

## 3. Add the prose class to your element

```html
<article class="prose">
  <h1>Hello world</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus
    eget ipsum faucibus interdum. Sed non maximus nibh, sed congue metus. Sed
    laoreet sit amet quam quis vehicula.
  </p>
</article>
```

## Conclusion

That's it! You now have a nicely formatted markdown blog post with consistent styling. There are many different uses for the `@tailwindcss/typography` plugin and if you would like to know more about it you can find the full documentation <a href="https://tailwindcss.com/docs/typography-plugin" target="__blank">here</a>.
