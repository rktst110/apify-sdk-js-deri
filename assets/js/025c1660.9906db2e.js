"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,f=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},54171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"playwright-crawler",title:"Playwright crawler"},l=void 0,c={unversionedId:"examples/playwright-crawler",id:"version-2.3/examples/playwright-crawler",title:"Playwright crawler",description:"This example demonstrates how to use PlaywrightCrawler",source:"@site/versioned_docs/version-2.3/examples/playwright_crawler.md",sourceDirName:"examples",slug:"/examples/playwright-crawler",permalink:"/docs/2.3/examples/playwright-crawler",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1664796086,formattedLastUpdatedAt:"Oct 3, 2022",frontMatter:{id:"playwright-crawler",title:"Playwright crawler"},sidebar:"version-2.3/docs",previous:{title:"Dataset Map and Reduce methods",permalink:"/docs/2.3/examples/map-and-reduce"},next:{title:"Puppeteer crawler",permalink:"/docs/2.3/examples/puppeteer-crawler"}},p={},u=[],h={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This example demonstrates how to use ",(0,i.kt)("a",{parentName:"p",href:"../api/playwright-crawler",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"PlaywrightCrawler")),"\nin combination with ",(0,i.kt)("a",{parentName:"p",href:"../api/request-queue",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"RequestQueue"))," to recursively scrape the\n",(0,i.kt)("a",{parentName:"p",href:"https://news.ycombinator.com",target:"_blank",rel:"noopener"},"Hacker News website")," using headless Chrome / Playwright."),(0,i.kt)("p",null," The crawler starts with a single URL, finds links to next pages,\nenqueues them and continues until no more desired links are available.\nThe results are stored to the default dataset. In local configuration, the results are stored as\nJSON files in ",(0,i.kt)("inlineCode",{parentName:"p"},"./apify_storage/datasets/default")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To run this example on the Apify Platform, select the ",(0,i.kt)("inlineCode",{parentName:"p"},"apify/actor-node-playwright-chrome")," image for your Dockerfile.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Apify.openRequestQueue() creates a preconfigured RequestQueue instance.\n    // We add our first request to it - the initial page the crawler will visit.\n    const requestQueue = await Apify.openRequestQueue();\n    await requestQueue.addRequest({ url: 'https://news.ycombinator.com/' });\n\n    // Create an instance of the PlaywrightCrawler class - a crawler\n    // that automatically loads the URLs in headless Chrome / Playwright.\n    const crawler = new Apify.PlaywrightCrawler({\n        requestQueue,\n        launchContext: {\n            // Here you can set options that are passed to the playwright .launch() function.\n            launchOptions: {\n                headless: true,\n            },\n        },\n\n        // Stop crawling after several pages\n        maxRequestsPerCrawl: 50,\n\n        // This function will be called for each URL to crawl.\n        // Here you can write the Playwright scripts you are familiar with,\n        // with the exception that browsers and pages are automatically managed by the Apify SDK.\n        // The function accepts a single parameter, which is an object with a lot of properties,\n        // the most important being:\n        // - request: an instance of the Request class with information such as URL and HTTP method\n        // - page: Playwright's Page object (see https://playwright.dev/docs/api/class-page)\n        handlePageFunction: async ({ request, page }) => {\n            console.log(`Processing ${request.url}...`);\n\n            // A function to be evaluated by Playwright within the browser context.\n            const data = await page.$$eval('.athing', ($posts) => {\n                const scrapedData = [];\n\n                // We're getting the title, rank and URL of each post on Hacker News.\n                $posts.forEach(($post) => {\n                    scrapedData.push({\n                        title: $post.querySelector('.title a').innerText,\n                        rank: $post.querySelector('.rank').innerText,\n                        href: $post.querySelector('.title a').href,\n                    });\n                });\n\n                return scrapedData;\n            });\n\n            // Store the results to the default dataset.\n            await Apify.pushData(data);\n\n            // Find a link to the next page and enqueue it if it exists.\n            const infos = await Apify.utils.enqueueLinks({\n                page,\n                requestQueue,\n                selector: '.morelink',\n            });\n\n            if (infos.length === 0) console.log(`${request.url} is the last page!`);\n        },\n\n        // This function is called if the page processing failed more than maxRequestRetries+1 times.\n        handleFailedRequestFunction: async ({ request }) => {\n            console.log(`Request ${request.url} failed too many times.`);\n        },\n    });\n\n    // Run the crawler and wait for it to finish.\n    await crawler.run();\n\n    console.log('Crawler finished.');\n});\n")))}d.isMDXComponent=!0}}]);