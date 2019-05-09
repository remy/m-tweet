const url = window.location.href;

if (!url.includes('mobile.twitter'))
  window.location.href = url.replace('twitter.com', 'mobile.twitter.com');
