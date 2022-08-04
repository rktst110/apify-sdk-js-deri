"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,w=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return n?r.createElement(w,i(i({ref:t},p),{},{components:n})):r.createElement(w,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4959:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(9960),o=n(4477),i=n(2263);const s=function(e){var t=e.to,n=e.children,s=(0,o.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning?r.createElement(a.default,{to:"/api/"+t},n):r.createElement(a.default,{to:"/api/"+("current"===s.version?"next":s.version)+"/"+t},n)}},2149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(1435),s=n(4959);var l=["components"],c={id:"playwright-crawler",title:"Playwright crawler"},p=void 0,u={unversionedId:"examples/playwright-crawler",id:"examples/playwright-crawler",title:"Playwright crawler",description:"This example demonstrates how to use PlaywrightCrawler",source:"@site/../docs/examples/playwright_crawler.mdx",sourceDirName:"examples",slug:"/examples/playwright-crawler",permalink:"/apify-sdk-js/docs/examples/playwright-crawler",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1659643775,formattedLastUpdatedAt:"Aug 4, 2022",frontMatter:{id:"playwright-crawler",title:"Playwright crawler"}},h={},d=[],w={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example demonstrates how to use ",(0,o.kt)(s.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")),"\nin combination with ",(0,o.kt)(s.Z,{to:"core/class/RequestQueue",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"RequestQueue"))," to\nrecursively scrape the ",(0,o.kt)("a",{parentName:"p",href:"https://news.ycombinator.com",target:"_blank",rel:"noopener"},"Hacker News website")," using headless Chrome / Playwright."),(0,o.kt)("p",null,"The crawler starts with a single URL, finds links to next pages, enqueues them and continues until no more desired links are available. The results\nare stored to the default dataset. In local configuration, the results are stored as JSON files in ",(0,o.kt)("inlineCode",{parentName:"p"},"./apify_storage/datasets/default")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,o.kt)("inlineCode",{parentName:"p"},"apify/actor-node-playwright-chrome")," image for your Dockerfile.")),(0,o.kt)(i.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Dataset, PlaywrightCrawler } from '@crawlee/playwright';\n\nconst dataset = await Dataset.open();\n\n// Create an instance of the PlaywrightCrawler class - a crawler\n// that automatically loads the URLs in headless Chrome / Playwright.\nconst crawler = new PlaywrightCrawler({\n    launchContext: {\n        // Here you can set options that are passed to the playwright .launch() function.\n        launchOptions: {\n            headless: true,\n        },\n    },\n\n    // Stop crawling after several pages\n    maxRequestsPerCrawl: 50,\n\n    // This function will be called for each URL to crawl.\n    // Here you can write the Playwright scripts you are familiar with,\n    // with the exception that browsers and pages are automatically managed by the Apify SDK.\n    // The function accepts a single parameter, which is an object with a lot of properties,\n    // the most important being:\n    // - request: an instance of the Request class with information such as URL and HTTP method\n    // - page: Playwright's Page object (see https://playwright.dev/docs/api/class-page)\n    async requestHandler({ request, page, enqueueLinks }) {\n        console.log(`Processing ${request.url}...`);\n\n        // A function to be evaluated by Playwright within the browser context.\n        const data = await page.$$eval('.athing', ($posts) => {\n            const scrapedData = [];\n\n            // We're getting the title, rank and URL of each post on Hacker News.\n            $posts.forEach(($post) => {\n                scrapedData.push({\n                    title: $post.querySelector('.title a').innerText,\n                    rank: $post.querySelector('.rank').innerText,\n                    href: $post.querySelector('.title a').href,\n                });\n            });\n\n            return scrapedData;\n        });\n\n        // Store the results to the default dataset.\n        await dataset.pushData(data);\n\n        // Find a link to the next page and enqueue it if it exists.\n        const infos = await enqueueLinks({\n            selector: '.morelink',\n        });\n\n        if (infos.length === 0) console.log(`${request.url} is the last page!`);\n    },\n\n    // This function is called if the page processing failed more than maxRequestRetries+1 times.\n    failedRequestHandler({ request }) {\n        console.log(`Request ${request.url} failed too many times.`);\n    },\n});\n\nawait crawler.addRequests(['https://news.ycombinator.com/']);\n\n// Run the crawler and wait for it to finish.\nawait crawler.run();\n\nconsole.log('Crawler finished.');\n"))}f.isMDXComponent=!0}}]);