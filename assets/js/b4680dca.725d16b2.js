"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4959:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(9960),o=n(4477),s=n(2263);const l=function(e){var t=e.to,n=e.children,l=(0,o.E)();return(0,s.default)().siteConfig.presets[0][1].docs.disableVersioning?r.createElement(a.default,{to:"/api/"+t},n):r.createElement(a.default,{to:"/api/"+("current"===l.version?"next":l.version)+"/"+t},n)}},143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=n(1435),l=n(4959);var i=["components"],p={id:"use-stealth-mode",title:"Use stealth mode"},c=void 0,u={unversionedId:"examples/use-stealth-mode",id:"examples/use-stealth-mode",title:"Use stealth mode",description:"Stealth mode allows you to bypass anti-scraping techniques that use",source:"@site/../docs/examples/use_stealth_mode.mdx",sourceDirName:"examples",slug:"/examples/use-stealth-mode",permalink:"/apify-sdk-js/docs/examples/use-stealth-mode",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1659643775,formattedLastUpdatedAt:"Aug 4, 2022",frontMatter:{id:"use-stealth-mode",title:"Use stealth mode"}},d={},m=[{value:"Single-browser instances",id:"single-browser-instances",level:3}],h={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Stealth mode allows you to bypass anti-scraping techniques that use\n",(0,o.kt)("a",{parentName:"p",href:"https://pixelprivacy.com/resources/browser-fingerprinting/",target:"_blank",rel:"noopener"},"browser fingerprinting"),". It overrides the attributes specified for\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2017/04/headless-chrome",target:"_blank",rel:"noopener"},"headless")," browser mode, making your headless browser harder to distinguish from\nthe full Chrome browser."),(0,o.kt)("p",null,"To activate stealth mode, you need to turn ",(0,o.kt)("inlineCode",{parentName:"p"},"useChrome")," on, run ",(0,o.kt)("inlineCode",{parentName:"p"},"headless")," and turn ",(0,o.kt)("inlineCode",{parentName:"p"},"stealth")," on in your ",(0,o.kt)(l.Z,{to:"puppeteer-crawler/interface/PuppeteerCrawlerOptions#launchContext",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"launchContext")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const launchContext = {\n    useChrome: true,\n    stealth: true,\n    launchOptions: {\n        headless: true,\n    },\n};\n")),(0,o.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Dataset, PuppeteerCrawler } from '@crawlee/puppeteer';\n\nconst dataset = await Dataset.open();\n\nconst crawler = new PuppeteerCrawler({\n    launchContext: {\n        useChrome: true,\n        stealth: true,\n        launchOptions: {\n            headless: true,\n        },\n        // You can override default stealth options\n        // stealthOptions: {\n        //     addLanguage: false,\n        // },\n    },\n    async requestHandler({ page }) {\n        const data = await page.$$eval('.athing', ($posts) => {\n            const scrapedData = [];\n            // Get the title of each post on Hacker News\n            $posts.forEach(($post) => {\n                const title = $post.querySelector('.title a').innerText;\n                scrapedData.push({\n                    title: `The title is: ${title}`,\n                });\n            });\n            return scrapedData;\n        });\n            // Save the data array to the Apify dataSet\n        await dataset.pushData(data);\n    },\n});\n\nawait crawler.addRequests(['https://news.ycombinator.com/']);\n\nawait crawler.run();\n"),(0,o.kt)("p",null,"You can then specify the ",(0,o.kt)(l.Z,{to:"puppeteer-crawler/namespace/puppeteerStealth#StealthOptions",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"stealthOptions"))," you want,\nwhich allow you to adapt to different anti-scraping techniques. All the options are set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," by default. The number of options does not affect performance."),(0,o.kt)("p",null,"While the default configuration will be fine in many cases, you can adapt the options to your use case."),(0,o.kt)("h3",{id:"single-browser-instances"},"Single-browser instances"),(0,o.kt)("p",null,"You can also use stealth mode in single-browser instances when using ",(0,o.kt)(l.Z,{to:"puppeteer-crawler/function/launchPuppeteer",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"launchPuppeteer")),".\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"launchContext")," is the same."))}f.isMDXComponent=!0}}]);