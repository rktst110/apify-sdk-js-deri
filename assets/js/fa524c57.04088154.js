"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3993],{91277:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),o=r(63366),p=(r(67294),r(3905)),a=["components"],i={id_old:"version-1.3-puppeteer-with-proxy",title:"Puppeteer with proxy",id:"puppeteer-with-proxy"},s=void 0,l={unversionedId:"examples/puppeteer-with-proxy",id:"version-1.3/examples/puppeteer-with-proxy",title:"Puppeteer with proxy",description:"This example demonstrates how to load pages in headless Chrome / Puppeteer over Apify Proxy. To make it work, you'll",source:"@site/versioned_docs/version-1.3/examples/puppeteer_with_proxy.md",sourceDirName:"examples",slug:"/examples/puppeteer-with-proxy",permalink:"/sdk/js/docs/1.3/examples/puppeteer-with-proxy",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1685384941,formattedLastUpdatedAt:"May 29, 2023",frontMatter:{id_old:"version-1.3-puppeteer-with-proxy",title:"Puppeteer with proxy",id:"puppeteer-with-proxy"},sidebar:"version-1.3/docs",previous:{title:"Puppeteer sitemap",permalink:"/sdk/js/docs/1.3/examples/puppeteer-sitemap"},next:{title:"Screenshots",permalink:"/sdk/js/docs/1.3/examples/screenshots"}},c={},u=[],y={toc:u},f="wrapper";function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,p.kt)(f,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"This example demonstrates how to load pages in headless Chrome / Puppeteer over ",(0,p.kt)("a",{parentName:"p",href:"https://docs.apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy"),". To make it work, you'll\nneed an Apify account with access to the proxy. Visit the ",(0,p.kt)("a",{parentName:"p",href:"/docs/guides/apify-platform",target:null,rel:null},"Apify platform introduction")," to find how to log into your\naccount from the SDK."),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"To run this example on the Apify Platform, select the ",(0,p.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    const requestList = await Apify.openRequestList('start-urls', ['http://proxy.apify.com']);\n\n    // Proxy connection is automatically established in the Crawler\n    const proxyConfiguration = await Apify.createProxyConfiguration();\n\n    const crawler = new Apify.PuppeteerCrawler({\n        requestList,\n        proxyConfiguration,\n        handlePageFunction: async ({ page }) => {\n            const status = await page.$eval('td.status', el => el.textContent);\n            console.log(`Proxy Status: ${status}`);\n        },\n    });\n\n    console.log('Running Puppeteer script...');\n    await crawler.run();\n    console.log('Puppeteer closed.');\n});\n")))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||y[f]||p;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<p;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);