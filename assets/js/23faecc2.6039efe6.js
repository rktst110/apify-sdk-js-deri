"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9972],{14950:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],l={id:"crawl-some-links",title:"Crawl some links on a website"},i=void 0,p={unversionedId:"examples/crawl-some-links",id:"version-2.3/examples/crawl-some-links",title:"Crawl some links on a website",description:"This CheerioCrawler example uses the pseudoUrls property",source:"@site/versioned_docs/version-2.3/examples/crawl_some_links.md",sourceDirName:"examples",slug:"/examples/crawl-some-links",permalink:"/sdk/js/docs/2.3/examples/crawl-some-links",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1687964305,formattedLastUpdatedAt:"Jun 28, 2023",frontMatter:{id:"crawl-some-links",title:"Crawl some links on a website"},sidebar:"version-2.3/docs",previous:{title:"Crawl a sitemap",permalink:"/sdk/js/docs/2.3/examples/crawl-sitemap"},next:{title:"Forms",permalink:"/sdk/js/docs/2.3/examples/forms"}},u={},c=[],m={toc:c},d="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/cheerio-crawler",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"CheerioCrawler"))," example uses the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/pseudo-url",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"pseudoUrls"))," property\nin the ",(0,o.kt)("inlineCode",{parentName:"p"},"Apify.enqueueLinks()")," method to only add links to the ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestList")," queue if\nthey match the specified regular expression."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Create a RequestQueue\n    const requestQueue = await Apify.openRequestQueue();\n    // Define the starting URL\n    await requestQueue.addRequest({ url: 'https://apify.com/store' });\n    // Function called for each URL\n    const handlePageFunction = async ({ request, $ }) => {\n        console.log(request.url);\n        // Add some links from page to RequestQueue\n        await Apify.utils.enqueueLinks({\n            $,\n            requestQueue,\n            baseUrl: request.loadedUrl,\n            pseudoUrls: ['http[s?]://apify.com/[.+]/[.+]'],\n        });\n    };\n    // Create a CheerioCrawler\n    const crawler = new Apify.CheerioCrawler({\n        requestQueue,\n        handlePageFunction,\n        maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n    });\n    // Run the crawler\n    await crawler.run();\n});\n")))}f.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);