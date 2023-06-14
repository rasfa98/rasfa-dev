---
title: Using React Children Prop With TypeScript
date: "2023-06-10"
excerpt: The React children prop makes it possible to reuse components across your application. You can think of the children prop as a slot where any type of content can be inserted into a specific container. The prop is often used when creating buttons or layout components. The concept is quite easy to grasp but if you are using TypeScript it can be a bit more difficult.
---

The React children prop makes it possible to reuse components across your application. You can think of the children prop as a slot where any type of content can be inserted into a specific container. The prop is often used when creating buttons or layout components. The concept is quite easy to grasp but if you are using TypeScript it can be a bit more difficult.

## Simple implementation that works in some cases

```ts
const Button = ({ children }: { children: string }) => {
  return <button>{children}</button>;
};
```

The button takes a string as children which allows us to add a simple text to the button. However if we want to add an icon as well this solution will not work.

## A more versatile solution

```ts
const Button = ({ children }: { children: string | JSX.Element }) => {
  return <button>{children}</button>;
};
```

The updated code will allow us to add the same type of text as before but we can also add a div element that contains some text and an icon. Let's say we want to add multiple elements that are not contained in a single div element, then we would have to change our solution once again.

## The React PropsWithChildren type

```ts
import { PropsWithChildren } from "react";

const Button = ({ children }: PropsWithChildren) => {
  return <button>{children}</button>;
};
```

In this example we will use the type **PropsWithChildren** provided by React. This type allows us to make the children the same type as if we would use a regular button meaning all of the previous use cases will work as expected. PropsWithChildren is a <a href="https://www.typescriptlang.org/docs/handbook/2/generics.html" target="_blank">generic type</a> that takes one optional type argument that makes it possible to combine the children with any type of our choice. If we would like to add a prop **color** to our button component we could do that without much effort.

```ts
import { PropsWithChildren } from "react";

const Button = ({ children }: PropsWithChildren<{ color: string }>) => {
  return <button>{children}</button>;
};
```

The above code would take any type of React node as children together with a color of our choice making it a robust solution that is future-proof.
