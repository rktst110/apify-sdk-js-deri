"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4432],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,y=d["".concat(l,".").concat(f)]||d[f]||c[f]||p;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1592:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),o=["components"],i={id_old:"version-1.3-prepare-request-inputs",title:"PrepareRequestInputs",id:"prepare-request-inputs"},l=void 0,s={unversionedId:"typedefs/prepare-request-inputs",id:"version-1.3/typedefs/prepare-request-inputs",title:"PrepareRequestInputs",description:"Properties",source:"@site/versioned_docs/version-1.3/typedefs/PrepareRequestInputs.md",sourceDirName:"typedefs",slug:"/typedefs/prepare-request-inputs",permalink:"/docs/1.3/typedefs/prepare-request-inputs",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1664795529,formattedLastUpdatedAt:"Oct 3, 2022",frontMatter:{id_old:"version-1.3-prepare-request-inputs",title:"PrepareRequestInputs",id:"prepare-request-inputs"},sidebar:"version-1.3/docs",previous:{title:"PrepareRequest",permalink:"/docs/1.3/typedefs/prepare-request"},next:{title:"PlaywrightHandlePageFunction",permalink:"/docs/1.3/typedefs/playwright-handle-page-function"}},u={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>request</code>",id:"request",level:3},{value:"<code>session</code>",id:"session",level:3},{value:"<code>proxyInfo</code>",id:"proxyinfo",level:3},{value:"<code>crawler</code>",id:"crawler",level:3}],d={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("a",{name:"preparerequestinputs"}),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:"request"},(0,p.kt)("inlineCode",{parentName:"h3"},"request")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"Request"))),(0,p.kt)("p",null,"Original instance fo the {Request} object. Must be modified in-place."),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"session"},(0,p.kt)("inlineCode",{parentName:"h3"},"session")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("a",{parentName:"p",href:"../api/session",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"Session"))),(0,p.kt)("p",null,"The current session"),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"proxyinfo"},(0,p.kt)("inlineCode",{parentName:"h3"},"proxyInfo")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("a",{parentName:"p",href:"../typedefs/proxy-info",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"ProxyInfo"))),(0,p.kt)("p",null,"An object with information about currently used proxy by the crawler and configured by the ",(0,p.kt)("a",{parentName:"p",href:"../api/proxy-configuration",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"ProxyConfiguration"))," class."),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"crawler"},(0,p.kt)("inlineCode",{parentName:"h3"},"crawler")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("a",{parentName:"p",href:"../api/cheerio-crawler",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"CheerioCrawler"))),(0,p.kt)("hr",null))}f.isMDXComponent=!0}}]);