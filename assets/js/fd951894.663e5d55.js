"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2615],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var s=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,s,i=function(t,e){if(null==t)return{};var a,s,i={},r=Object.keys(t);for(s=0;s<r.length;s++)a=r[s],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)a=r[s],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var o=s.createContext({}),c=function(t){var e=s.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):n(n({},e),t)),a},p=function(t){var e=c(t.components);return s.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},d=s.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,o=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(a),k=i,m=d["".concat(o,".").concat(k)]||d[k]||u[k]||r;return a?s.createElement(m,n(n({ref:e},p),{},{components:a})):s.createElement(m,n({ref:e},p))}));function k(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,n=new Array(r);n[0]=d;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:i,n[1]=l;for(var c=2;c<r;c++)n[c]=a[c];return s.createElement.apply(null,n)}return s.createElement.apply(null,a)}d.displayName="MDXCreateElement"},98862:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var s=a(87462),i=a(63366),r=(a(67294),a(3905)),n=["components"],l={id_old:"version-1.3-statistics",title:"Statistics",id:"statistics"},o=void 0,c={unversionedId:"api/statistics",id:"version-1.3/api/statistics",title:"Statistics",description:"The statistics class provides an interface to collecting and logging run statistics for requests.",source:"@site/versioned_docs/version-1.3/api/Statistics.md",sourceDirName:"api",slug:"/api/statistics",permalink:"/docs/1.3/api/statistics",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1667520589,formattedLastUpdatedAt:"Nov 4, 2022",frontMatter:{id_old:"version-1.3-statistics",title:"Statistics",id:"statistics"},sidebar:"version-1.3/docs",previous:{title:"PuppeteerCrawler",permalink:"/docs/1.3/api/puppeteer-crawler"},next:{title:"Dataset",permalink:"/docs/1.3/api/dataset"}},p={},u=[{value:"Properties",id:"properties",level:2},{value:"<code>state</code>",id:"state",level:3},{value:"<code>id</code>",id:"id",level:3},{value:"<code>requestRetryHistogram</code>",id:"requestretryhistogram",level:3},{value:"<code>statistics.reset()</code>",id:"statisticsreset",level:2},{value:"<code>statistics.calculate()</code>",id:"statisticscalculate",level:2},{value:"<code>statistics.startCapturing()</code>",id:"statisticsstartcapturing",level:2},{value:"<code>statistics.stopCapturing()</code>",id:"statisticsstopcapturing",level:2},{value:"<code>statistics.persistState()</code>",id:"statisticspersiststate",level:2},{value:"<code>statistics.toJSON()</code>",id:"statisticstojson",level:2}],d={toc:u};function k(t){var e=t.components,a=(0,i.Z)(t,n);return(0,r.kt)("wrapper",(0,s.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"statistics"}),(0,r.kt)("p",null,"The statistics class provides an interface to collecting and logging run statistics for requests."),(0,r.kt)("p",null,"All statistic information is saved on key value store under the key SDK",(0,r.kt)("em",{parentName:"p"},"CRAWLER_STATISTICS"),"*",", persists between migrations and abort/resurrect"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"state"},(0,r.kt)("inlineCode",{parentName:"h3"},"state")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("a",{parentName:"p",href:"../typedefs/statistic-state",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"StatisticState"))),(0,r.kt)("p",null,"Current statistic state used for doing calculations on ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.3/api/statistics#calculate",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"Statistics.calculate()"))," calls"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"id"},(0,r.kt)("inlineCode",{parentName:"h3"},"id")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Statistic instance id"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"requestretryhistogram"},(0,r.kt)("inlineCode",{parentName:"h3"},"requestRetryHistogram")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Array<number>")),(0,r.kt)("p",null,"Contains the current retries histogram. Index 0 means 0 retries, index 2, 2 retries, and so on"),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"reset"}),(0,r.kt)("h2",{id:"statisticsreset"},(0,r.kt)("inlineCode",{parentName:"h2"},"statistics.reset()")),(0,r.kt)("p",null,"Set the current statistic instance to pristine values"),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"calculate"}),(0,r.kt)("h2",{id:"statisticscalculate"},(0,r.kt)("inlineCode",{parentName:"h2"},"statistics.calculate()")),(0,r.kt)("p",null,"Calculate the current statistics"),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"startcapturing"}),(0,r.kt)("h2",{id:"statisticsstartcapturing"},(0,r.kt)("inlineCode",{parentName:"h2"},"statistics.startCapturing()")),(0,r.kt)("p",null,"Initializes the key value store for persisting the statistics, displaying the current state in predefined intervals"),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"stopcapturing"}),(0,r.kt)("h2",{id:"statisticsstopcapturing"},(0,r.kt)("inlineCode",{parentName:"h2"},"statistics.stopCapturing()")),(0,r.kt)("p",null,"Stops logging and remove event listeners, then persist"),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"persiststate"}),(0,r.kt)("h2",{id:"statisticspersiststate"},(0,r.kt)("inlineCode",{parentName:"h2"},"statistics.persistState()")),(0,r.kt)("p",null,"Persist internal state to the key value store"),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"tojson"}),(0,r.kt)("h2",{id:"statisticstojson"},(0,r.kt)("inlineCode",{parentName:"h2"},"statistics.toJSON()")),(0,r.kt)("p",null,"Make this class serializable when called with ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.stringify(statsInstance)")," directly or through ",(0,r.kt)("inlineCode",{parentName:"p"},"keyValueStore.setValue('KEY', statsInstance)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../typedefs/statistic-persisted-state",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"StatisticPersistedState"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"../typedefs/statistic-state",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"StatisticState"))),(0,r.kt)("hr",null))}k.isMDXComponent=!0}}]);