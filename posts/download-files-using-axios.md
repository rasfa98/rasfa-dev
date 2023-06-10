---
title: "How to Download Files Using Node.js and Axios"
date: "2022-02-26"
excerpt: "One of the most popular HTTP packages for Node.js is axios, and it's my favorite HTTP client when it comes to making network requests. I have used it many times before making simple requests returning JSON data, but when I used it to download files to my computer for the first time, I struggled a bit. In this post, I will show you how you can download files such as images or videos and store them on your computer."
image: "network.jpg"
---

One of the most popular HTTP packages for Node.js is <a href="https://www.npmjs.com/package/axios" target="__blank">axios</a>, and it's my favorite HTTP client when it comes to making network requests. I have used it many times before making simple requests returning JSON data, but when I used it to download files to my computer for the first time, I struggled a bit. In this post, I will show you how you can download files such as images or videos and store them on your computer.

## 1. Install the axios package

```
npm install axios
```

## 2. Add the axios GET request

```js
const axios = require("axios");

(async () => {
  const response = await axios.get("https://placekitten.com/200/300");
})();
```

## 3. Converting the response to a stream

In order to download the image we will have to modify the response to be of type stream. This can be done by simply adding a second argument to the GET request.

```js
const axios = require("axios");

(async () => {
  const response = await axios.get("https://placekitten.com/200/300", {
    responseType: "stream",
  });
})();
```

## 4. Handling the stream

The GET request will now return a stream that we can pipe to a writable stream in order to save the image. In this example we will use the `fs` package that comes with Node.js which provides a handy function for this. We can simply pipe the stream to `fs.createWriteStream` specifying where the file should be stored.

```js
const axios = require("axios");
const fs = require("fs");

(async () => {
  const response = await axios.get("https://placekitten.com/200/300", {
    responseType: "stream",
  });

  const stream = response.data.pipe(fs.createWriteStream("kitten.jpeg"));
})();
```

## 5. Listening for events

If we would like to know when the file has been downloaded we can listen for the `finish` event. This will emit once the stream has been written to the disk. If we want to listen for any errors that might occur we can listen for the `error` event.

```js
const axios = require("axios");
const fs = require("fs");

(async () => {
  const response = await axios.get("https://placekitten.com/200/300", {
    responseType: "stream",
  });

  const stream = response.data.pipe(fs.createWriteStream("kitten.jpeg"));

  stream.on("finish", () => console.log("Image has been downloaded!"));
  stream.on("error", () => console.log("An error occured..."));
})();
```

## Conclusion

Now you know how to download files using Node.js and axios! I hope that you found this guide helpful and that you could incorporate this solution in your project.
