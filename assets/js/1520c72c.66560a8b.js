"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8223],{52774:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"3.0","label":"3.0","banner":null,"badge":true,"className":"docs-version-3.0","isLast":true,"docsSidebars":{"docs":[{"type":"category","label":"Guides","items":[{"type":"link","label":"Apify Platform","href":"/apify-sdk-js/docs/guides/apify-platform","docId":"guides/apify-platform"},{"type":"link","label":"Request Storage","href":"/apify-sdk-js/docs/guides/request-storage","docId":"guides/request-storage"},{"type":"link","label":"Result Storage","href":"/apify-sdk-js/docs/guides/result-storage","docId":"guides/result-storage"},{"type":"link","label":"Environment Variables","href":"/apify-sdk-js/docs/guides/environment-variables","docId":"guides/environment-variables"},{"type":"link","label":"Proxy Management","href":"/apify-sdk-js/docs/guides/proxy-management","docId":"guides/proxy-management"},{"type":"link","label":"Session Management","href":"/apify-sdk-js/docs/guides/session-management","docId":"guides/session-management"},{"type":"link","label":"TypeScript Actors","href":"/apify-sdk-js/docs/guides/type-script-actor","docId":"guides/type-script-actor"},{"type":"link","label":"Running in Docker","href":"/apify-sdk-js/docs/guides/docker-images","docId":"guides/docker-images"}],"collapsed":true,"collapsible":true,"href":"/apify-sdk-js/docs/guides"},{"type":"category","label":"Examples","items":[{"type":"link","label":"Accept user input","href":"/apify-sdk-js/docs/examples/accept-user-input","docId":"examples/accept-user-input"},{"type":"link","label":"Add data to dataset","href":"/apify-sdk-js/docs/examples/add-data-to-dataset","docId":"examples/add-data-to-dataset"},{"type":"link","label":"Basic crawler","href":"/apify-sdk-js/docs/examples/basic-crawler","docId":"examples/basic-crawler"},{"type":"link","label":"Cheerio crawler","href":"/apify-sdk-js/docs/examples/cheerio-crawler","docId":"examples/cheerio-crawler"},{"type":"link","label":"Crawl all links on a website","href":"/apify-sdk-js/docs/examples/crawl-all-links","docId":"examples/crawl-all-links"},{"type":"link","label":"Crawl multiple URLs","href":"/apify-sdk-js/docs/examples/crawl-multiple-urls","docId":"examples/crawl-multiple-urls"},{"type":"link","label":"Crawl a website with relative links","href":"/apify-sdk-js/docs/examples/crawl-relative-links","docId":"examples/crawl-relative-links"},{"type":"link","label":"Crawl a single URL","href":"/apify-sdk-js/docs/examples/crawl-single-url","docId":"examples/crawl-single-url"},{"type":"link","label":"Crawl a sitemap","href":"/apify-sdk-js/docs/examples/crawl-sitemap","docId":"examples/crawl-sitemap"},{"type":"link","label":"Crawl some links on a website","href":"/apify-sdk-js/docs/examples/crawl-some-links","docId":"examples/crawl-some-links"},{"type":"link","label":"Forms","href":"/apify-sdk-js/docs/examples/forms","docId":"examples/forms"},{"type":"link","label":"Examples","href":"/apify-sdk-js/docs/examples/","docId":"examples/examples"},{"type":"link","label":"Dataset Map and Reduce methods","href":"/apify-sdk-js/docs/examples/map-and-reduce","docId":"examples/map-and-reduce"},{"type":"link","label":"Playwright crawler","href":"/apify-sdk-js/docs/examples/playwright-crawler","docId":"examples/playwright-crawler"},{"type":"link","label":"Capture a screenshot using Puppeteer","href":"/apify-sdk-js/docs/examples/capture-screenshot","docId":"examples/capture-screenshot"},{"type":"link","label":"Puppeteer crawler","href":"/apify-sdk-js/docs/examples/puppeteer-crawler","docId":"examples/puppeteer-crawler"},{"type":"link","label":"Puppeteer recursive crawl","href":"/apify-sdk-js/docs/examples/puppeteer-recursive-crawl","docId":"examples/puppeteer-recursive-crawl"},{"type":"link","label":"Puppeteer with proxy","href":"/apify-sdk-js/docs/examples/puppeteer-with-proxy","docId":"examples/puppeteer-with-proxy"},{"type":"link","label":"Use stealth mode","href":"/apify-sdk-js/docs/examples/use-stealth-mode","docId":"examples/use-stealth-mode"}],"collapsed":true,"collapsible":true,"href":"/apify-sdk-js/docs/examples/"},{"type":"category","label":"Upgrading","items":[{"type":"link","label":"Upgrading to v1","href":"/apify-sdk-js/docs/upgrading/upgrading-to-v1","docId":"upgrading/upgrading-to-v1"},{"type":"link","label":"Upgrading to v2","href":"/apify-sdk-js/docs/upgrading/upgrading-to-v2","docId":"upgrading/upgrading-to-v2"},{"type":"link","label":"Upgrading to v3","href":"/apify-sdk-js/docs/upgrading/upgrading-to-v3","docId":"upgrading/upgrading-to-v3"}],"collapsed":true,"collapsible":true,"href":"/apify-sdk-js/docs/upgrading"}]},"docs":{"examples/accept-user-input":{"id":"examples/accept-user-input","title":"Accept user input","description":"This example accepts and logs user input:","sidebar":"docs"},"examples/add-data-to-dataset":{"id":"examples/add-data-to-dataset","title":"Add data to dataset","description":"This example saves data to the default dataset. If the dataset doesn\'t exist, it will be created.","sidebar":"docs"},"examples/basic-crawler":{"id":"examples/basic-crawler","title":"Basic crawler","description":"This is the most bare-bones example of the Apify SDK, which demonstrates some of its building blocks such as the BasicCrawler. You probably don\'t need to go this deep though, and it would be better to start with one of the full-featured crawlers","sidebar":"docs"},"examples/capture-screenshot":{"id":"examples/capture-screenshot","title":"Capture a screenshot using Puppeteer","description":"To run this example on the Apify Platform, select the apify/actor-node-puppeteer-chrome image for your Dockerfile.","sidebar":"docs"},"examples/cheerio-crawler":{"id":"examples/cheerio-crawler","title":"Cheerio crawler","description":"This example demonstrates how to use CheerioCrawler to crawl a list of URLs from an external file, load each URL using a plain HTTP request, parse the HTML using the Cheerio library and extract some data from it: the page title and all h1 tags.","sidebar":"docs"},"examples/crawl-all-links":{"id":"examples/crawl-all-links","title":"Crawl all links on a website","description":"This example uses the enqueueLinks() method to add new links to the RequestQueue as the crawler navigates from page to page. If only the","sidebar":"docs"},"examples/crawl-multiple-urls":{"id":"examples/crawl-multiple-urls","title":"Crawl multiple URLs","description":"This example crawls the specified list of URLs.","sidebar":"docs"},"examples/crawl-relative-links":{"id":"examples/crawl-relative-links","title":"Crawl a website with relative links","description":"When crawling a website, you may encounter different types of links present that you may want to crawl.","sidebar":"docs"},"examples/crawl-single-url":{"id":"examples/crawl-single-url","title":"Crawl a single URL","description":"This example uses the got-scraping npm package","sidebar":"docs"},"examples/crawl-sitemap":{"id":"examples/crawl-sitemap","title":"Crawl a sitemap","description":"This example downloads and crawls the URLs from a sitemap.","sidebar":"docs"},"examples/crawl-some-links":{"id":"examples/crawl-some-links","title":"Crawl some links on a website","description":"This CheerioCrawler example uses the pseudoUrls property in the enqueueLinks() method to only add links to the RequestQueue queue if they match the specified regular expression.","sidebar":"docs"},"examples/examples":{"id":"examples/examples","title":"Examples","description":"","sidebar":"docs"},"examples/forms":{"id":"examples/forms","title":"Forms","description":"This example demonstrates how to use PuppeteerCrawler to","sidebar":"docs"},"examples/map-and-reduce":{"id":"examples/map-and-reduce","title":"Dataset Map and Reduce methods","description":"This example shows an easy use-case of the Dataset map","sidebar":"docs"},"examples/playwright-crawler":{"id":"examples/playwright-crawler","title":"Playwright crawler","description":"This example demonstrates how to use PlaywrightCrawler","sidebar":"docs"},"examples/puppeteer-crawler":{"id":"examples/puppeteer-crawler","title":"Puppeteer crawler","description":"This example demonstrates how to use PuppeteerCrawler in combination","sidebar":"docs"},"examples/puppeteer-recursive-crawl":{"id":"examples/puppeteer-recursive-crawl","title":"Puppeteer recursive crawl","description":"Run the following example to perform a recursive crawl of a website using PuppeteerCrawler.","sidebar":"docs"},"examples/puppeteer-with-proxy":{"id":"examples/puppeteer-with-proxy","title":"Puppeteer with proxy","description":"FIXME: is this staying?","sidebar":"docs"},"examples/use-stealth-mode":{"id":"examples/use-stealth-mode","title":"Use stealth mode","description":"Stealth mode allows you to bypass anti-scraping techniques that use","sidebar":"docs"},"guides/apify-platform":{"id":"guides/apify-platform","title":"Apify Platform","description":"Apify is a platform built to serve large-scale and high-performance web scraping","sidebar":"docs"},"guides/docker-images":{"id":"guides/docker-images","title":"Running in Docker","description":"Running headless browsers in Docker requires a lot of setup to do it right. But you don\'t need to worry about that, because we already did it for you and created base images that you can freely use. We use them every day on the Apify Platform.","sidebar":"docs"},"guides/environment-variables":{"id":"guides/environment-variables","title":"Environment Variables","description":"The following is a list of the environment variables used by Apify SDK that are available to the user.","sidebar":"docs"},"guides/proxy-management":{"id":"guides/proxy-management","title":"Proxy Management","description":"IP address blocking is one of the oldest","sidebar":"docs"},"guides/request-storage":{"id":"guides/request-storage","title":"Request Storage","description":"The Apify SDK has several request storage types that are useful for specific tasks. The requests are stored either on local disk to a directory defined by the","sidebar":"docs"},"guides/result-storage":{"id":"guides/result-storage","title":"Result Storage","description":"The Apify SDK has several result storage types that are useful for specific tasks. The data is stored either on local disk to a directory defined by the","sidebar":"docs"},"guides/session-management":{"id":"guides/session-management","title":"Session Management","description":"&#8203;SessionPool is a class that allows you to handle the rotation of proxy IP addresses along with cookies and other custom settings in Apify SDK.","sidebar":"docs"},"guides/type-script-actor":{"id":"guides/type-script-actor","title":"TypeScript Actors","description":"Apify SDK supports TypeScript by covering public APIs with type declarations. This","sidebar":"docs"},"readme/introduction":{"id":"readme/introduction","title":"Apify SDK: The scalable web crawling and scraping library for JavaScript","description":"npm version"},"readme/overview":{"id":"readme/overview","title":"overview","description":"Overview"},"readme/support":{"id":"readme/support","title":"support","description":"Support"},"upgrading/upgrading-to-v1":{"id":"upgrading/upgrading-to-v1","title":"Upgrading to v1","description":"Summary","sidebar":"docs"},"upgrading/upgrading-to-v2":{"id":"upgrading/upgrading-to-v2","title":"Upgrading to v2","description":"- BREAKING: Require Node.js >=15.10.0 because HTTP2 support on lower Node.js versions is very buggy.","sidebar":"docs"},"upgrading/upgrading-to-v3":{"id":"upgrading/upgrading-to-v3","title":"Upgrading to v3","description":"This page summarizes most of the breaking changes between Crawlee (v3) and Apify SDK (v2). Crawlee is the spiritual successor to Apify SDK, so we decided to keep the versioning and release Crawlee as v3.","sidebar":"docs"}}}')}}]);