import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
    accessKey: process.env.REACT_APP_UNSPLASH_SECRET,
    // Optionally you can also configure a custom header to be sent with every request
    headers: {
      "Accept-Version": "v1"
    },
    // Optionally if using a node-fetch polyfill or a version of fetch which supports the timeout option, you can configure the request timeout for all requests
    timeout: 300 // values set in ms
  });

  export default unsplash;