"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[882],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>f});var o=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=o.createContext({}),l=function(e){var r=o.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=l(e.components);return o.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},y=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=l(n),f=t,d=y["".concat(p,".").concat(f)]||y[f]||u[f]||a;return n?o.createElement(d,i(i({ref:r},c),{},{components:n})):o.createElement(d,i({ref:r},c))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=y;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4959:(e,r,n)=>{n.d(r,{Z:()=>s});var o=n(7294),t=n(9960),a=n(4477),i=n(2263);const s=function(e){var r=e.to,n=e.children,s=(0,a.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning?o.createElement(t.default,{to:"/api/"+r},n):o.createElement(t.default,{to:"/api/"+("current"===s.version?"next":s.version)+"/"+r},n)}},5717:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>c,toc:()=>y});var o=n(7462),t=n(3366),a=(n(7294),n(3905)),i=n(4959),s=["components"],p={id:"proxy-management",title:"Proxy Management"},l=void 0,c={unversionedId:"guides/proxy-management",id:"guides/proxy-management",title:"Proxy Management",description:"IP address blocking is one of the oldest",source:"@site/../docs/guides/proxy_management.mdx",sourceDirName:"guides",slug:"/guides/proxy-management",permalink:"/apify-sdk-js/docs/guides/proxy-management",draft:!1,tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1660097156,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"proxy-management",title:"Proxy Management"}},u={},y=[{value:"Quick start",id:"quick-start",level:2},{value:"Proxy Configuration",id:"proxy-configuration",level:2},{value:"Crawler integration",id:"crawler-integration",level:3},{value:"IP Rotation and session management",id:"ip-rotation-and-session-management",level:3},{value:"Apify Proxy vs. Your own proxies",id:"apify-proxy-vs-your-own-proxies",level:2},{value:"Apify Proxy Configuration",id:"apify-proxy-configuration",level:2},{value:"Inspecting current proxy in Crawlers",id:"inspecting-current-proxy-in-crawlers",level:2}],f={toc:y};function d(e){var r=e.components,n=(0,t.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IP_address_blocking",target:"_blank",rel:"noopener"},"IP address blocking")," is one of the oldest\nand most effective ways of preventing access to a website. It is therefore paramount for\na good web scraping library to provide easy to use but powerful tools which can work around\nIP blocking. The most powerful weapon in your anti IP blocking arsenal is a\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Proxy_server",target:"_blank",rel:"noopener"},"proxy server"),"."),(0,a.kt)("p",null,"With Apify SDK you can use your own proxy servers, proxy servers acquired from\nthird-party providers, or you can rely on ",(0,a.kt)("a",{parentName:"p",href:"https://apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy"),"\nfor your scraping needs."),(0,a.kt)("h2",{id:"quick-start"},"Quick start"),(0,a.kt)("p",null,"If you already subscribed to Apify Proxy or have proxy URLs of your own, you can start using\nthem immediately in only a few lines of code."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you want to use Apify Proxy, make sure that your ",(0,a.kt)("a",{parentName:"p",href:"../guides/apify-platform",target:null,rel:null},"scraper is logged in"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const proxyConfiguration = await Actor.createProxyConfiguration();\nconst proxyUrl = proxyConfiguration.newUrl();\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const proxyConfiguration = await Actor.createProxyConfiguration({\n    proxyUrls: [\n        'http://proxy-1.com',\n        'http://proxy-2.com',\n    ]\n});\nconst proxyUrl = proxyConfiguration.newUrl();\n")),(0,a.kt)("h2",{id:"proxy-configuration"},"Proxy Configuration"),(0,a.kt)("p",null,"All your proxy needs are managed by the ",(0,a.kt)(i.Z,{to:"core/class/ProxyConfiguration",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"ProxyConfiguration"))," class. You create an instance using the ",(0,a.kt)(i.Z,{to:"apify/class/Actor#createProxyConfiguration",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"Actor.createProxyConfiguration()"))," function. See the ",(0,a.kt)(i.Z,{to:"core/interface/ProxyConfigurationOptions",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"ProxyConfigurationOptions"))," for all the possible constructor options."),(0,a.kt)("h3",{id:"crawler-integration"},"Crawler integration"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ProxyConfiguration")," integrates seamlessly into ",(0,a.kt)(i.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"))," and ",(0,a.kt)(i.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const proxyConfiguration = await Actor.createProxyConfiguration({ /* your proxy opts */ });\nconst crawler = new CheerioCrawler({\n    proxyConfiguration,\n    // ...\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const proxyConfiguration = await Actor.createProxyConfiguration({ /* your proxy opts */ });\nconst crawler = new PuppeteerCrawler({\n    proxyConfiguration,\n    // ...\n});\n")),(0,a.kt)("p",null,"Your crawlers will now use the selected proxies for all connections."),(0,a.kt)("h3",{id:"ip-rotation-and-session-management"},"IP Rotation and session management"),(0,a.kt)("p",null,"\u200b",(0,a.kt)(i.Z,{to:"core/class/ProxyConfiguration#newUrl",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"proxyConfiguration.newUrl()"))," allows you to pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionId")," parameter. It will then be used to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionId"),"-",(0,a.kt)("inlineCode",{parentName:"p"},"proxyUrl")," pair, and subsequent ",(0,a.kt)("inlineCode",{parentName:"p"},"newUrl()")," calls with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionId")," will always return the same ",(0,a.kt)("inlineCode",{parentName:"p"},"proxyUrl"),". This is extremely useful in scraping, because you want to create the impression of a real user. See the ",(0,a.kt)("a",{parentName:"p",href:"../guides/session-management",target:null,rel:null},"session management guide")," and ",(0,a.kt)(i.Z,{to:"core/class/SessionPool",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"SessionPool"))," class for more information on how keeping a real session helps you avoid blocking."),(0,a.kt)("p",null,"When no ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionId")," is provided, your proxy URLs are rotated round-robin, whereas Apify Proxy manages their rotation using black magic to get the best performance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const proxyConfiguration = await Actor.createProxyConfiguration({ /* opts */ });\nconst sessionPool = await SessionPool.open({ /* opts */ });\nconst session = await sessionPool.getSession();\nconst proxyUrl = proxyConfiguration.newUrl(session.id);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const proxyConfiguration = await Actor.createProxyConfiguration({ /* opts */ });\nconst crawler = new PuppeteerCrawler({\n    useSessionPool: true,\n    persistCookiesPerSession: true,\n    proxyConfiguration,\n    // ...\n});\n")),(0,a.kt)("h2",{id:"apify-proxy-vs-your-own-proxies"},"Apify Proxy vs. Your own proxies"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ProxyConfiguration")," class covers both Apify Proxy and custom proxy URLs so that\nyou can easily switch between proxy providers, however, some features of the class\nare available only to Apify Proxy users, mainly because Apify Proxy is what\none would call a super-proxy. It's not a single proxy server, but an API endpoint\nthat allows connection through millions of different IP addresses. So the class\nessentially has two modes: Apify Proxy or Your proxy."),(0,a.kt)("p",null,"The difference is easy to remember. ",(0,a.kt)(i.Z,{to:"core/interface/ProxyConfigurationOptions#proxyUrls",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"ProxyConfigurationOptions.proxyUrls"))," and ",(0,a.kt)(i.Z,{to:"core/interface/ProxyConfigurationOptions#newUrlFunction",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"ProxyConfigurationOptions.newUrlFunction"))," enable use of your custom proxy URLs, whereas all the other options are there to configure Apify Proxy. Visit the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy docs")," for more info on how these parameters work."),(0,a.kt)("h2",{id:"apify-proxy-configuration"},"Apify Proxy Configuration"),(0,a.kt)("p",null,"With Apify Proxy, you can select specific proxy groups to use, or countries to connect from.\nThis allows you to get better proxy performance after some initial research."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const proxyConfiguration = await Actor.createProxyConfiguration({\n    groups: ['RESIDENTIAL'],\n    countryCode: 'US',\n});\nconst proxyUrl = proxyConfiguration.newUrl();\n")),(0,a.kt)("p",null,"Now your crawlers will use only Residential proxies from the US. Note that you must first get access\nto a proxy group before you are able to use it. You can find your available proxy groups\nin the ",(0,a.kt)("a",{parentName:"p",href:"https://console.apify.com/proxy",target:"_blank",rel:"noopener"},"proxy dashboard"),"."),(0,a.kt)("h2",{id:"inspecting-current-proxy-in-crawlers"},"Inspecting current proxy in Crawlers"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")," grant access to information about the currently used proxy\nin their ",(0,a.kt)("inlineCode",{parentName:"p"},"handlePageFunction")," using a ",(0,a.kt)(i.Z,{to:"core/interface/ProxyInfo",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"proxyInfo"))," object.\nWith the  object, you can easily access the proxy URL. If you're using Apify Proxy, the other\nconfiguration parameters will also be available in the ",(0,a.kt)("inlineCode",{parentName:"p"},"proxyInfo")," object."))}d.isMDXComponent=!0}}]);