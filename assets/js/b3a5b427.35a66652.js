"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"playwright-launch-context",title:"PlaywrightLaunchContext"},p=void 0,s={unversionedId:"typedefs/playwright-launch-context",id:"version-2.3/typedefs/playwright-launch-context",title:"PlaywrightLaunchContext",description:"Apify extends the launch options of Playwright. You can use any of the Playwright compatible",source:"@site/versioned_docs/version-2.3/typedefs/PlaywrightLaunchContext.md",sourceDirName:"typedefs",slug:"/typedefs/playwright-launch-context",permalink:"/apify-sdk-js/docs/2.3/typedefs/playwright-launch-context",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1660602731,formattedLastUpdatedAt:"Aug 15, 2022",frontMatter:{id:"playwright-launch-context",title:"PlaywrightLaunchContext"},sidebar:"version-2.3/docs",previous:{title:"PlaywrightCrawlerOptions",permalink:"/apify-sdk-js/docs/2.3/typedefs/playwright-crawler-options"},next:{title:"PuppeteerCrawlerOptions",permalink:"/apify-sdk-js/docs/2.3/typedefs/puppeteer-crawler-options"}},c={},u=[{value:"Properties",id:"properties",level:2},{value:"<code>launchOptions</code>",id:"launchoptions",level:3},{value:"<code>proxyUrl</code>",id:"proxyurl",level:3},{value:"<code>userAgent</code>",id:"useragent",level:3},{value:"<code>useChrome</code>",id:"usechrome",level:3},{value:"<code>useIncognitoPages</code>",id:"useincognitopages",level:3},{value:"<code>userDataDir</code>",id:"userdatadir",level:3},{value:"<code>launcher</code>",id:"launcher",level:3}],d={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"playwrightlaunchcontext"}),(0,o.kt)("p",null,"Apify extends the launch options of Playwright. You can use any of the Playwright compatible\n",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-browsertype#browsertypelaunchoptions",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"LaunchOptions"))," options by providing the ",(0,o.kt)("inlineCode",{parentName:"p"},"launchOptions")," property."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// launch a headless Chrome (not Chromium)\nconst launchContext = {\n    // Apify helpers\n    useChrome: true,\n    proxyUrl: 'http://user:password@some.proxy.com'\n    // Native Playwright options\n    launchOptions: {\n        headless: true,\n        args: ['--some-flag'],\n    }\n}\n")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"launchoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},"launchOptions")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"LaunchOptions")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"browserType.launch")," ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-browsertype#browser-type-launch",target:"_blank",rel:"noopener"},"options")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"proxyurl"},(0,o.kt)("inlineCode",{parentName:"h3"},"proxyUrl")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"URL to a HTTP proxy server. It must define the port number, and it may also contain proxy username and password."),(0,o.kt)("p",null,"Example: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://bob:pass123@proxy.example.com:1234"),"."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"useragent"},(0,o.kt)("inlineCode",{parentName:"h3"},"userAgent")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"User-Agent")," HTTP header used by the browser. If not provided, the function sets ",(0,o.kt)("inlineCode",{parentName:"p"},"User-Agent")," to a reasonable default to reduce the chance of\ndetection of the crawler."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"usechrome"},(0,o.kt)("inlineCode",{parentName:"h3"},"useChrome")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,o.kt)("code",null," = false")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"executablePath")," is not set, Playwright will launch full Google Chrome browser available on the machine rather than the bundled\nChromium. The path to Chrome executable is taken from the ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_CHROME_EXECUTABLE_PATH")," environment variable if provided, or defaults to the typical\nGoogle Chrome executable location specific for the operating system."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"useincognitopages"},(0,o.kt)("inlineCode",{parentName:"h3"},"useIncognitoPages")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,o.kt)("code",null," = false")),(0,o.kt)("p",null,"With this option selected, all pages will be opened in a new incognito browser context. This means they will not share cookies nor cache and their\nresources will not be throttled by one another."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"userdatadir"},(0,o.kt)("inlineCode",{parentName:"h3"},"userDataDir")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"Sets the ",(0,o.kt)("a",{parentName:"p",href:"https://chromium.googlesource.com/chromium/src/+/master/docs/user_data_dir.md",target:"_blank",rel:"noopener"},"User Data Directory")," path. The user data directory contains\nprofile data such as history, bookmarks, and cookies, as well as other per-installation local state. If not specified, a temporary directory is used\ninstead."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"launcher"},(0,o.kt)("inlineCode",{parentName:"h3"},"launcher")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"*")),(0,o.kt)("p",null,"By default this function uses ",(0,o.kt)("inlineCode",{parentName:"p"},'require("playwright").chromium'),". If you want to use a different browser you can pass it by this property as e.g.\n",(0,o.kt)("inlineCode",{parentName:"p"},'require("playwright").firefox')),(0,o.kt)("hr",null))}h.isMDXComponent=!0}}]);