"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6963],{43559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={id_old:"version-1.3-queue-operation-info",title:"QueueOperationInfo",id:"queue-operation-info"},u=void 0,s={unversionedId:"typedefs/queue-operation-info",id:"version-1.3/typedefs/queue-operation-info",title:"QueueOperationInfo",description:"A helper class that is used to report results from various RequestQueue functions as well as",source:"@site/versioned_docs/version-1.3/typedefs/QueueOperationInfo.md",sourceDirName:"typedefs",slug:"/typedefs/queue-operation-info",permalink:"/sdk/js/docs/1.3/typedefs/queue-operation-info",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1685384941,formattedLastUpdatedAt:"May 29, 2023",frontMatter:{id_old:"version-1.3-queue-operation-info",title:"QueueOperationInfo",id:"queue-operation-info"},sidebar:"version-1.3/docs",previous:{title:"MemoryInfo",permalink:"/sdk/js/docs/1.3/typedefs/memory-info"},next:{title:"RequestListState",permalink:"/sdk/js/docs/1.3/typedefs/request-list-state"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"<code>wasAlreadyPresent</code>",id:"wasalreadypresent",level:3},{value:"<code>wasAlreadyHandled</code>",id:"wasalreadyhandled",level:3},{value:"<code>requestId</code>",id:"requestid",level:3},{value:"<code>request</code>",id:"request",level:3}],c={toc:d},f="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)(f,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"queueoperationinfo"}),(0,o.kt)("p",null,"A helper class that is used to report results from various ",(0,o.kt)("a",{parentName:"p",href:"../api/request-queue",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"RequestQueue"))," functions as well as\n",(0,o.kt)("a",{parentName:"p",href:"../api/utils#enqueuelinks",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"utils.enqueueLinks()")),"."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"wasalreadypresent"},(0,o.kt)("inlineCode",{parentName:"h3"},"wasAlreadyPresent")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Indicates if request was already present in the queue."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"wasalreadyhandled"},(0,o.kt)("inlineCode",{parentName:"h3"},"wasAlreadyHandled")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Indicates if request was already marked as handled."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"requestid"},(0,o.kt)("inlineCode",{parentName:"h3"},"requestId")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"The ID of the added request"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"request"},(0,o.kt)("inlineCode",{parentName:"h3"},"request")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Request"))),(0,o.kt)("p",null,"The original ",(0,o.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Request"))," object passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestQueue")," function."),(0,o.kt)("hr",null))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);