"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1387],{73087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=["components"],l={id_old:"version-1.3-use-stealth-mode",title:"Use stealth mode",id:"use-stealth-mode"},i=void 0,p={unversionedId:"examples/use-stealth-mode",id:"version-1.3/examples/use-stealth-mode",title:"Use stealth mode",description:"Stealth mode allows you to bypass anti-scraping techniques that use",source:"@site/versioned_docs/version-1.3/examples/use_stealth_mode.md",sourceDirName:"examples",slug:"/examples/use-stealth-mode",permalink:"/sdk/js/docs/1.3/examples/use-stealth-mode",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1685384941,formattedLastUpdatedAt:"May 29, 2023",frontMatter:{id_old:"version-1.3-use-stealth-mode",title:"Use stealth mode",id:"use-stealth-mode"},sidebar:"version-1.3/docs",previous:{title:"Synchronous run",permalink:"/sdk/js/docs/1.3/examples/synchronous-run"},next:{title:"Apify",permalink:"/sdk/js/docs/1.3/api/apify"}},c={},u=[{value:"Single-browser instances",id:"single-browser-instances",level:3}],d={toc:u},h="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Stealth mode allows you to bypass anti-scraping techniques that use\n",(0,o.kt)("a",{parentName:"p",href:"https://pixelprivacy.com/resources/browser-fingerprinting/",target:"_blank",rel:"noopener"},"browser fingerprinting"),". It overrides the attributes specified for\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2017/04/headless-chrome",target:"_blank",rel:"noopener"},"headless")," browser mode, making your headless browser harder to distinguish from\nthe full Chrome browser."),(0,o.kt)("p",null,"To activate stealth mode, you need to ",(0,o.kt)("inlineCode",{parentName:"p"},"useChrome"),", run ",(0,o.kt)("inlineCode",{parentName:"p"},"headless")," and turn ",(0,o.kt)("inlineCode",{parentName:"p"},"stealth")," on in your\n",(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/typedefs/puppeteer-crawler-options#launchcontext",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"launchContext")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const launchContext = {\n    useChrome: true,\n    stealth: true,\n    launchOptions: {\n        headless: true,\n    },\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    const requestList = await Apify.openRequestList('start-urls', ['https://news.ycombinator.com/']);\n\n    const crawler = new Apify.PuppeteerCrawler({\n        requestList,\n        launchContext: {\n            useChrome: true,\n            stealth: true,\n            launchOptions: {\n                headless: true,\n            },\n            // You can override default stealth options\n            // stealthOptions: {\n            //     addLanguage: false,\n            // },\n        },\n        handlePageFunction: async ({ page }) => {\n            const data = await page.$$eval('.athing', $posts => {\n                const scrapedData = [];\n                // Get the title of each post on Hacker News\n                $posts.forEach($post => {\n                    const title = $post.querySelector('.title a').innerText;\n                    scrapedData.push({\n                        title: `The title is: ${title}`,\n                    });\n                });\n                return scrapedData;\n            });\n            // Save the data array to the Apify dataSet\n            await Apify.pushData(data);\n        },\n    });\n    await crawler.run();\n});\n")),(0,o.kt)("p",null,"You can then specify the ",(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/typedefs/stealth-options",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"stealthOptions")),", which allow you to adapt to different anti-scraping\ntechniques. All the options are set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," by default. The number of options does not affect performance."),(0,o.kt)("p",null,"While the default configuration will be fine in many cases, you can adapt the options to your use case."),(0,o.kt)("h3",{id:"single-browser-instances"},"Single-browser instances"),(0,o.kt)("p",null,"You can also use stealth mode in single-browser instances when using ",(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/api/apify#launchpuppeteer",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Apify.launchPuppeteer")),".\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"launchContext")," is the same."))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);