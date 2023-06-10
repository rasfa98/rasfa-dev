---
title: "Send Firebase Cloud Messages Using HTTP"
date: "2022-07-09"
excerpt: "Firebase Cloud Messaging is realy handy and it provides an easy integration when it comes to sending notifications to both iOS, Android and the web. In this article I will show you how to send messages to multiple users using simple HTTP and the Firebase Cloud Messaging REST API."
image: "cloud.jpg"
---

Firebase Cloud Messaging is realy handy and it provides an easy integration when it comes to sending notifications to both iOS, Android and the web. In this article I will show you how to send messages to multiple users using simple HTTP and the Firebase Cloud Messaging REST API.

## 1. Set up a Firebase project and get your access token

Go to https://console.firebase.google.com and create a new project. When the project has been created go ahead and generate the access token that will be used in the API requests.

## 2. Create the sendMessage function

Install your favorite HTTP client (I'm gonna go with Axios as always) and create a new function **sendMessage**. This function will take two arguments **message** and **tokens**, where message is the actual message being sent and the tokens represents the different users.

```js
const sendMessage = (message, tokens) => {};
```

## 3. Build the request

Next up we are going to specify the required headers as well as the payload. This is done differently depending on the HTTP client that you choose. The URL to use for the request is **https://fcm.googleapis.com/v1/projects/PROJECT-ID/messages:send** and should be a POST request. There is plenty of options and data that can be passed in the payload but in this example I'm only gonna send the message data that will be shown on a users phone as a push notification.

```js
const sendMessage = (message, tokens) => {
  const headers = {
    Authorization: `Bearer <ACCESS_TOKEN>`,
  };

  const payload = {
    registration_ids: tokens,
    message,
  };

  return axios
    .post(
      "https://fcm.googleapis.com/v1/projects/<PROJECT_ID>/messages:send",
      payload,
      {
        headers,
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
```

## 4. Make multiple requests for a large number of tokens

This function will work great, just pass in a message and some tokens and you should be good to go! The only problem is that the **send** endpoint has a limit of _1000_ tokens so in order to send a message to let's say 2000 users you would have to split it up into chunks.

Let's create a new function that will split the tokens into chunks and use the function that we created in the previous steps.

```js
const sendMessages = () => {
  const tokens = ['token1', 'token2', 'token3', ...];
  const chunkSize = 1000;

  for (let i = 0; i < tokens.length; i += chunkSize) {
    const tokenChunk = tokens.slice(i, i + chunkSize);

    sendMessage(
      {
        notification: {
            title: 'Notification!',
            body: 'Hello World!',
        }
      }
      tokenChunk
    );
  }
};
```

Now you have a function that can be used to send a Firebase Cloud Message to multiple users and split it up into multiple requests depending on chunk size! I think this is an easy way of implementing this functionality since it does not require any external packages such as the Firebase Admin SDK.
