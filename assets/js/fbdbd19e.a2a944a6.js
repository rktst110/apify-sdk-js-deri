"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1658],{43937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],s={id_old:"version-1.3-snapshotter",title:"Snapshotter",id:"snapshotter"},i=void 0,p={unversionedId:"api/snapshotter",id:"version-1.3/api/snapshotter",title:"Snapshotter",description:"Creates snapshots of system resources at given intervals and marks the resource as either overloaded or not during the last interval. Keeps a history",source:"@site/versioned_docs/version-1.3/api/Snapshotter.md",sourceDirName:"api",slug:"/api/snapshotter",permalink:"/sdk/js/docs/1.3/api/snapshotter",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1678968947,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{id_old:"version-1.3-snapshotter",title:"Snapshotter",id:"snapshotter"},sidebar:"version-1.3/docs",previous:{title:"ProxyConfiguration",permalink:"/sdk/js/docs/1.3/api/proxy-configuration"},next:{title:"SystemStatus",permalink:"/sdk/js/docs/1.3/api/system-status"}},m={},u=[{value:"<code>new Snapshotter([options])</code>",id:"new-snapshotteroptions",level:2},{value:"<code>snapshotter.log</code>",id:"snapshotterlog",level:2},{value:"<code>snapshotter.start()</code>",id:"snapshotterstart",level:2},{value:"<code>snapshotter.stop()</code>",id:"snapshotterstop",level:2},{value:"<code>snapshotter.getMemorySample([sampleDurationMillis])</code>",id:"snapshottergetmemorysamplesampledurationmillis",level:2},{value:"<code>snapshotter.getEventLoopSample([sampleDurationMillis])</code>",id:"snapshottergeteventloopsamplesampledurationmillis",level:2},{value:"<code>snapshotter.getCpuSample([sampleDurationMillis])</code>",id:"snapshottergetcpusamplesampledurationmillis",level:2},{value:"<code>snapshotter.getClientSample(sampleDurationMillis)</code>",id:"snapshottergetclientsamplesampledurationmillis",level:2}],d={toc:u},h="wrapper";function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("a",{name:"snapshotter"}),(0,l.kt)("p",null,"Creates snapshots of system resources at given intervals and marks the resource as either overloaded or not during the last interval. Keeps a history\nof the snapshots. It tracks the following resources: Memory, EventLoop, API and CPU. The class is used by the\n",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," class."),(0,l.kt)("p",null,"When running on the Apify platform, the CPU and memory statistics are provided by the platform, as collected from the running Docker container. When\nrunning locally, ",(0,l.kt)("inlineCode",{parentName:"p"},"Snapshotter")," makes its own statistics by querying the OS."),(0,l.kt)("p",null,"CPU becomes overloaded locally when its current use exceeds the ",(0,l.kt)("inlineCode",{parentName:"p"},"maxUsedCpuRatio")," option or when Apify platform marks it as overloaded."),(0,l.kt)("p",null,"Memory becomes overloaded if its current use exceeds the ",(0,l.kt)("inlineCode",{parentName:"p"},"maxUsedMemoryRatio")," option. It's computed using the total memory available to the container\nwhen running on the Apify platform and a quarter of total system memory when running locally. Max total memory when running locally may be overridden\nby using the ",(0,l.kt)("inlineCode",{parentName:"p"},"APIFY_MEMORY_MBYTES")," environment variable."),(0,l.kt)("p",null,"Event loop becomes overloaded if it slows down by more than the ",(0,l.kt)("inlineCode",{parentName:"p"},"maxBlockedMillis")," option."),(0,l.kt)("p",null,"Client becomes overloaded when rate limit errors (429 - Too Many Requests), typically received from the request queue, exceed the set limit within the\nset interval."),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"snapshotter"}),(0,l.kt)("h2",{id:"new-snapshotteroptions"},(0,l.kt)("inlineCode",{parentName:"h2"},"new Snapshotter([options])")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"[options]")),": ",(0,l.kt)("a",{parentName:"li",href:"../typedefs/snapshotter-options",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"SnapshotterOptions"))," - All ",(0,l.kt)("inlineCode",{parentName:"li"},"Snapshotter")," configuration options.")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"log"}),(0,l.kt)("h2",{id:"snapshotterlog"},(0,l.kt)("inlineCode",{parentName:"h2"},"snapshotter.log")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"start"}),(0,l.kt)("h2",{id:"snapshotterstart"},(0,l.kt)("inlineCode",{parentName:"h2"},"snapshotter.start()")),(0,l.kt)("p",null,"Starts capturing snapshots at configured intervals."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"stop"}),(0,l.kt)("h2",{id:"snapshotterstop"},(0,l.kt)("inlineCode",{parentName:"h2"},"snapshotter.stop()")),(0,l.kt)("p",null,"Stops all resource capturing."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"getmemorysample"}),(0,l.kt)("h2",{id:"snapshottergetmemorysamplesampledurationmillis"},(0,l.kt)("inlineCode",{parentName:"h2"},"snapshotter.getMemorySample([sampleDurationMillis])")),(0,l.kt)("p",null,"Returns a sample of latest memory snapshots, with the size of the sample defined by the sampleDurationMillis parameter. If omitted, it returns a full\nsnapshot history."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"[sampleDurationMillis]")),": ",(0,l.kt)("inlineCode",{parentName:"li"},"number"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Array<*>")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"geteventloopsample"}),(0,l.kt)("h2",{id:"snapshottergeteventloopsamplesampledurationmillis"},(0,l.kt)("inlineCode",{parentName:"h2"},"snapshotter.getEventLoopSample([sampleDurationMillis])")),(0,l.kt)("p",null,"Returns a sample of latest event loop snapshots, with the size of the sample defined by the sampleDurationMillis parameter. If omitted, it returns a\nfull snapshot history."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"[sampleDurationMillis]")),": ",(0,l.kt)("inlineCode",{parentName:"li"},"number"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Array<*>")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"getcpusample"}),(0,l.kt)("h2",{id:"snapshottergetcpusamplesampledurationmillis"},(0,l.kt)("inlineCode",{parentName:"h2"},"snapshotter.getCpuSample([sampleDurationMillis])")),(0,l.kt)("p",null,"Returns a sample of latest CPU snapshots, with the size of the sample defined by the sampleDurationMillis parameter. If omitted, it returns a full\nsnapshot history."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"[sampleDurationMillis]")),": ",(0,l.kt)("inlineCode",{parentName:"li"},"number"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Array<*>")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"getclientsample"}),(0,l.kt)("h2",{id:"snapshottergetclientsamplesampledurationmillis"},(0,l.kt)("inlineCode",{parentName:"h2"},"snapshotter.getClientSample(sampleDurationMillis)")),(0,l.kt)("p",null,"Returns a sample of latest Client snapshots, with the size of the sample defined by the sampleDurationMillis parameter. If omitted, it returns a full\nsnapshot history."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"sampleDurationMillis")),": ",(0,l.kt)("inlineCode",{parentName:"li"},"number"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Array<*>")),(0,l.kt)("hr",null))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,c=u["".concat(i,".").concat(h)]||u[h]||d[h]||l;return n?a.createElement(c,o(o({ref:t},m),{},{components:n})):a.createElement(c,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);