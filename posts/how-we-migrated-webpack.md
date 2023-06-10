---
title: How we migrated webpack from v3 to v4 in our ejected React application
date: "2020-10-22"
excerpt: "The day had come, it was finally time to upgrade webpack from v3 to v4 in our React project. All our build scripts, configuration files, and development server would have to be reworked, and we all thought that it would be a big hassle… turned out it was not!"
image: "code.jpg"
---

The day had come, it was finally time to upgrade webpack from v3 to v4 in our React project. All our build scripts, configuration files, and development server would have to be reworked, and we all thought that it would be a big hassle… turned out it was not!

## Our first approach, trial, and error method

The first approach that came to our mind was to simply upgrade our webpack version and see what would happen, and as expected everything broke… After updating dependency after dependency and fixing one error at a time we quickly realized that this was not an optimal solution and a task that would take forever to complete. (we haven't even started with the configuration files) We had to take a new approach…

## Ejecting a new React application and copying the updated files

The second approach that we took (which we ended up going with) was to simply generate a new React application which we then ejected. Once ejected, all the configuration files and build scripts that webpack required were now available and could simply be copied over to our main project.

## Updating the webpack plugins

After we had updated all the necessary files related to webpack, it was time to update our webpack plugins. Once again we just looked in the newly created React application and updated/added all the plugins that did not match the ones in our main project and fixed any errors that arose.

## The first successful build

After updating our plugins together with all the configuration files it was time to build our application. The tension was unbearable and to our surprise… it worked! We started our server and BOOM! There it was, but it did not look great… Elements where misaligned images had different sizes and it was a bit of a mess…

## Updating our own dependencies

Even though we had already updated the webpack plugins that were included when creating a new React application we now had some outdated plugins which we had installed ourselves, causing the application to behave in a weird way. We went over all the custom plugins which we had installed and updated these to work with our new webpack version, also fixing any errors that occurred.

## The feeling of success!

Our React application was now building and starting as expected and everything looked great in the browser! We now had an updated webpack version using the latest plugins and features as well as improved build time. And since we ejected a new React application we also got some bonus features such as TypeScript and Sass!

## Conclusion

Migrating webpack from v3 to v4 turned out to be much simpler than we anticipated and something that we will have in the back of our minds once it's time to upgrade webpack in the future. Upgrading webpack will not only allow us to use the latest features such as code splitting and the built-in optimization capabilities, but it also makes it possible to use the latest plugins allowing us to improve our product.
