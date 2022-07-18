"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3871],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,h=p["".concat(s,".").concat(d)]||p[d]||c[d]||l;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),l=a(6010),i=a(2389),o=a(7392),s=a(7094),u=a(2466);const m="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,a,i=e.lazy,p=e.block,d=e.defaultValue,h=e.values,v=e.groupId,w=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(f,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:k[0].props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,s.U)(),N=b.tabGroupChoices,x=b.setTabGroupChoices,C=(0,r.useState)(g),q=C[0],T=C[1],E=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var O=N[v];null!=O&&O!==q&&f.some((function(e){return e.value===O}))&&T(O)}var L=function(e){var t=e.currentTarget,a=E.indexOf(t),n=f[a].value;n!==q&&(S(t),T(n),null!=v&&x(v,String(n)))},Z=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=E.indexOf(e.currentTarget)+1;a=null!=(n=E[r])?n:E[0];break;case"ArrowLeft":var l,i=E.indexOf(e.currentTarget)-1;a=null!=(l=E[i])?l:E[E.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},w)},f.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:q===t?0:-1,"aria-selected":q===t,key:t,ref:function(e){return E.push(e)},onKeyDown:Z,onFocus:L,onClick:L},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":q===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(k.filter((function(e){return e.props.value===q}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==q})}))))}function d(e){var t=(0,i.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},4959:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(9960),l=a(4477),i=a(2263);const o=function(e){var t=e.to,a=e.children,o=(0,l.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning?n.createElement(r.default,{to:"/api/"+t},a):n.createElement(r.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+t},a)}},5883:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>k,frontMatter:()=>c,metadata:()=>d,toc:()=>v});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=a(5488),o=a(5162),s=a(1435),u=a(4959);var m=["components"],c={id:"crawl-relative-links",title:"Crawl a website with relative links"},p=void 0,d={unversionedId:"examples/crawl-relative-links",id:"examples/crawl-relative-links",title:"Crawl a website with relative links",description:"When crawling a website, you may encounter different types of links present that you may want to crawl.",source:"@site/../docs/examples/crawl_relative_links.mdx",sourceDirName:"examples",slug:"/examples/crawl-relative-links",permalink:"/apify-sdk-js/docs/examples/crawl-relative-links",draft:!1,tags:[],version:"current",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1658164006,formattedLastUpdatedAt:"7/18/2022",frontMatter:{id:"crawl-relative-links",title:"Crawl a website with relative links"},sidebar:"docs",previous:{title:"Crawl multiple URLs",permalink:"/apify-sdk-js/docs/examples/crawl-multiple-urls"},next:{title:"Crawl a single URL",permalink:"/apify-sdk-js/docs/examples/crawl-single-url"}},h={},v=[],w={toc:v};function k(e){var t=e.components,a=(0,r.Z)(e,m);return(0,l.kt)("wrapper",(0,n.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"When crawling a website, you may encounter different types of links present that you may want to crawl.\nTo facilitate the easy crawling of such links, we provide the ",(0,l.kt)("inlineCode",{parentName:"p"},"enqueueLinks()")," method on the crawler context, which will\nautomatically find links and add them to the crawler's ",(0,l.kt)(u.Z,{to:"core/class/RequestQueue",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"RequestQueue")),"."),(0,l.kt)("p",null,"We provide 3 different strategies for crawling relative links:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(u.Z,{to:"core/enum/EnqueueStrategy#All",mdxType:"ApiLink"},(0,l.kt)("inlineCode",null,"All"))," which will enqueue all links found, regardless of the domain they point to."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(u.Z,{to:"core/enum/EnqueueStrategy#SameHostname",mdxType:"ApiLink"},(0,l.kt)("inlineCode",null,"SameHostname"))," which will enqueue all links found for the same hostname (regardless of any subdomains present)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(u.Z,{to:"core/enum/EnqueueStrategy#SameSubdomain",mdxType:"ApiLink"},(0,l.kt)("inlineCode",null,"SameSubdomain"))," which will enqueue all links found that have the same subdomain and hostname. This is the default strategy.")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"For these examples, we are using the ",(0,l.kt)(u.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")),", however\nthe same method is available for both the ",(0,l.kt)(u.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")),"\nand ",(0,l.kt)(u.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")),", and you use it\nthe exact same way."))),(0,l.kt)(i.Z,{groupId:"enqueue_strategy",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"all",label:"All Links",mdxType:"TabItem"},(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example domains")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Any urls found will be matched by this strategy, even if they go off of the site you are currently crawling."))),(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { CheerioCrawler, EnqueueStrategy } from '@crawlee/cheerio';\n\nconst crawler = new CheerioCrawler({\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n    async requestHandler({ request, enqueueLinks }) {\n        console.log(request.url);\n        await enqueueLinks({\n            // Setting the strategy to 'all' will enqueue all links found\n            // highlight-next-line\n            strategy: EnqueueStrategy.All,\n            // Alternatively, you can pass in the string 'all'\n            // strategy: 'all',\n        });\n    },\n});\n\nawait crawler.addRequests(['https://apify.com/']);\n\n// Run the crawler\nawait crawler.run();\n")),(0,l.kt)(o.Z,{value:"same_hostname",label:"Same Hostname",mdxType:"TabItem"},(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example domains")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"For a url of ",(0,l.kt)("inlineCode",{parentName:"p"},"https://example.com"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"enqueueLinks()")," will match relative urls, urls that point to the same\nfull domain or urls that point to any subdomain of the provided domain."),(0,l.kt)("p",{parentName:"div"},"For instance, hyperlinks like ",(0,l.kt)("inlineCode",{parentName:"p"},"https://subdomain.example.com/some/path"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"https://example.com/some/path"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"/absolute/example"),"\nor ",(0,l.kt)("inlineCode",{parentName:"p"},"./relative/example")," will all be matched by this strategy."))),(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { CheerioCrawler, EnqueueStrategy } from '@crawlee/cheerio';\n\nconst crawler = new CheerioCrawler({\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n    async requestHandler({ request, enqueueLinks }) {\n        console.log(request.url);\n        await enqueueLinks({\n            // Setting the strategy to 'same-subdomain' will enqueue all links found that are on the same hostname\n            // as request.loadedUrl or request.url\n            // highlight-next-line\n            strategy: EnqueueStrategy.SameHostname,\n            // Alternatively, you can pass in the string 'same-hostname'\n            // strategy: 'same-hostname',\n        });\n    },\n});\n\nawait crawler.addRequests(['https://apify.com/']);\n\n// Run the crawler\nawait crawler.run();\n")),(0,l.kt)(o.Z,{value:"same-subdomain",label:"Same Subdomain",default:!0,mdxType:"TabItem"},(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This is the default strategy when calling ",(0,l.kt)("inlineCode",{parentName:"p"},"enqueueLinks()"),", so you don't have to specify it."))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example domains")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"For a url of ",(0,l.kt)("inlineCode",{parentName:"p"},"https://subdomain.example.com"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"enqueueLinks()")," will only match relative urls or urls that point to the same\nfull domain."),(0,l.kt)("p",{parentName:"div"},"For instance, hyperlinks like ",(0,l.kt)("inlineCode",{parentName:"p"},"https://subdomain.example.com/some/path"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"/absolute/example")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"./relative/example"),"\nwill all be matched by this strategy, while ",(0,l.kt)("inlineCode",{parentName:"p"},"https://other-subdomain.example.com")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"https://otherexample.com")," will not."))),(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { CheerioCrawler, EnqueueStrategy } from '@crawlee/cheerio';\n\nconst crawler = new CheerioCrawler({\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n    async requestHandler({ request, enqueueLinks }) {\n        console.log(request.url);\n        await enqueueLinks({\n            // Setting the strategy to 'same-subdomain' will enqueue all links found that are on the same subdomain and hostname\n            // as request.loadedUrl or request.url\n            // highlight-next-line\n            strategy: EnqueueStrategy.SameSubdomain,\n            // Alternatively, you can pass in the string 'same-subdomain'\n            // strategy: 'same-subdomain',\n        });\n    },\n});\n\nawait crawler.addRequests(['https://apify.com/']);\n\n// Run the crawler\nawait crawler.run();\n"))))}k.isMDXComponent=!0}}]);