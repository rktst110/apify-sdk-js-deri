"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5769],{63561:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=r(87462),o=r(63366),s=(r(67294),r(3905)),a=["components"],i={id:"memory-info",title:"MemoryInfo"},l=void 0,p={unversionedId:"typedefs/memory-info",id:"version-2.3/typedefs/memory-info",title:"MemoryInfo",description:"Describes memory usage of an Actor.",source:"@site/versioned_docs/version-2.3/typedefs/MemoryInfo.md",sourceDirName:"typedefs",slug:"/typedefs/memory-info",permalink:"/sdk/js/docs/2.3/typedefs/memory-info",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1685530206,formattedLastUpdatedAt:"May 31, 2023",frontMatter:{id:"memory-info",title:"MemoryInfo"},sidebar:"version-2.3/docs",previous:{title:"DatasetContent",permalink:"/sdk/js/docs/2.3/typedefs/dataset-content"},next:{title:"QueueOperationInfo",permalink:"/sdk/js/docs/2.3/typedefs/queue-operation-info"}},c={},d=[{value:"Properties",id:"properties",level:2},{value:"<code>totalBytes</code>",id:"totalbytes",level:3},{value:"<code>freeBytes</code>",id:"freebytes",level:3},{value:"<code>usedBytes</code>",id:"usedbytes",level:3},{value:"<code>mainProcessBytes</code>",id:"mainprocessbytes",level:3},{value:"<code>childProcessesBytes</code>",id:"childprocessesbytes",level:3}],m={toc:d},u="wrapper";function y(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("a",{name:"memoryinfo"}),(0,s.kt)("p",null,"Describes memory usage of an Actor."),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"totalbytes"},(0,s.kt)("inlineCode",{parentName:"h3"},"totalBytes")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"Total memory available in the system or container"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"freebytes"},(0,s.kt)("inlineCode",{parentName:"h3"},"freeBytes")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"Amount of free memory in the system or container"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"usedbytes"},(0,s.kt)("inlineCode",{parentName:"h3"},"usedBytes")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"Amount of memory used (= totalBytes - freeBytes)"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"mainprocessbytes"},(0,s.kt)("inlineCode",{parentName:"h3"},"mainProcessBytes")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"Amount of memory used the current Node.js process"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"childprocessesbytes"},(0,s.kt)("inlineCode",{parentName:"h3"},"childProcessesBytes")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"Amount of memory used by child processes of the current Node.js process"),(0,s.kt)("hr",null))}y.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),u=o,y=d["".concat(l,".").concat(u)]||d[u]||m[u]||s;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);