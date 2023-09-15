import {
  start,
  registerServiceWorker,
} from '@salesforce/pwa-kit-react-sdk/ssr/browser/main';

const main = () => Promise.all([start(), registerServiceWorker('/worker.js')]);

main();
