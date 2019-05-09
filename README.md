# m-tweet

Redirects you to the (cleaner) mobile twitter URLs.

The entirety of the code is:

```js
const url = window.location.href;

if (!url.includes('mobile.twitter'))
  window.location.href = url.replace('twitter.com', 'mobile.twitter.com');
```
