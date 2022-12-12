"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8436],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return n?o.createElement(k,r(r({ref:t},p),{},{components:n})):o.createElement(k,r({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<l;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var o=n(87462),a=n(63366),l=(n(67294),n(3905)),r=["components"],s={id_old:"version-1.3-autoscaled-pool",title:"AutoscaledPool",id:"autoscaled-pool"},i=void 0,u={unversionedId:"api/autoscaled-pool",id:"version-1.3/api/autoscaled-pool",title:"AutoscaledPool",description:"Manages a pool of asynchronous resource-intensive tasks that are executed in parallel. The pool only starts new tasks if there is enough free CPU and",source:"@site/versioned_docs/version-1.3/api/AutoscaledPool.md",sourceDirName:"api",slug:"/api/autoscaled-pool",permalink:"/docs/1.3/api/autoscaled-pool",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1670844045,formattedLastUpdatedAt:"Dec 12, 2022",frontMatter:{id_old:"version-1.3-autoscaled-pool",title:"AutoscaledPool",id:"autoscaled-pool"},sidebar:"version-1.3/docs",previous:{title:"KeyValueStore",permalink:"/docs/1.3/api/key-value-store"},next:{title:"Session",permalink:"/docs/1.3/api/session"}},p={},c=[{value:"<code>new AutoscaledPool(options)</code>",id:"new-autoscaledpooloptions",level:2},{value:"<code>autoscaledPool.log</code>",id:"autoscaledpoollog",level:2},{value:"<code>autoscaledPool.minConcurrency</code>",id:"autoscaledpoolminconcurrency",level:2},{value:"<code>autoscaledPool.minConcurrency</code>",id:"autoscaledpoolminconcurrency-1",level:2},{value:"<code>autoscaledPool.maxConcurrency</code>",id:"autoscaledpoolmaxconcurrency",level:2},{value:"<code>autoscaledPool.maxConcurrency</code>",id:"autoscaledpoolmaxconcurrency-1",level:2},{value:"<code>autoscaledPool.desiredConcurrency</code>",id:"autoscaledpooldesiredconcurrency",level:2},{value:"<code>autoscaledPool.desiredConcurrency</code>",id:"autoscaledpooldesiredconcurrency-1",level:2},{value:"<code>autoscaledPool.currentConcurrency</code>",id:"autoscaledpoolcurrentconcurrency",level:2},{value:"<code>autoscaledPool.run()</code>",id:"autoscaledpoolrun",level:2},{value:"<code>autoscaledPool.abort()</code>",id:"autoscaledpoolabort",level:2},{value:"<code>autoscaledPool.pause([timeoutSecs])</code>",id:"autoscaledpoolpausetimeoutsecs",level:2},{value:"<code>autoscaledPool.resume()</code>",id:"autoscaledpoolresume",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("a",{name:"autoscaledpool"}),(0,l.kt)("p",null,"Manages a pool of asynchronous resource-intensive tasks that are executed in parallel. The pool only starts new tasks if there is enough free CPU and\nmemory available and the Javascript event loop is not blocked."),(0,l.kt)("p",null,"The information about the CPU and memory usage is obtained by the ",(0,l.kt)("a",{parentName:"p",href:"../api/snapshotter",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Snapshotter"))," class, which makes regular snapshots of system\nresources that may be either local or from the Apify cloud infrastructure in case the process is running on the Apify platform. Meaningful data\ngathered from these snapshots is provided to ",(0,l.kt)("inlineCode",{parentName:"p"},"AutoscaledPool")," by the ",(0,l.kt)("a",{parentName:"p",href:"../api/system-status",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"SystemStatus"))," class."),(0,l.kt)("p",null,"Before running the pool, you need to implement the following three functions:\n",(0,l.kt)("a",{parentName:"p",href:"../typedefs/autoscaled-pool-options#runtaskfunction",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPoolOptions.runTaskFunction()")),",\n",(0,l.kt)("a",{parentName:"p",href:"../typedefs/autoscaled-pool-options#istaskreadyfunction",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPoolOptions.isTaskReadyFunction()"))," and\n",(0,l.kt)("a",{parentName:"p",href:"../typedefs/autoscaled-pool-options#isfinishedfunction",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPoolOptions.isFinishedFunction()")),"."),(0,l.kt)("p",null,"The auto-scaled pool is started by calling the ",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool#run",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool.run()"))," function. The pool periodically queries the\n",(0,l.kt)("a",{parentName:"p",href:"../typedefs/autoscaled-pool-options#istaskreadyfunction",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPoolOptions.isTaskReadyFunction()"))," function for more tasks, managing optimal\nconcurrency, until the function resolves to ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),". The pool then queries the\n",(0,l.kt)("a",{parentName:"p",href:"../typedefs/autoscaled-pool-options#isfinishedfunction",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPoolOptions.isFinishedFunction()")),". If it resolves to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", the run finishes\nafter all running tasks complete. If it resolves to ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),", it assumes there will be more tasks available later and keeps periodically querying for\ntasks. If any of the tasks throws then the ",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool#run",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool.run()"))," function rejects the promise with an error."),(0,l.kt)("p",null,"The pool evaluates whether it should start a new task every time one of the tasks finishes and also in the interval set by the\n",(0,l.kt)("inlineCode",{parentName:"p"},"options.maybeRunIntervalSecs")," parameter."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const pool = new Apify.AutoscaledPool({\n    maxConcurrency: 50,\n    runTaskFunction: async () => {\n        // Run some resource-intensive asynchronous operation here.\n    },\n    isTaskReadyFunction: async () => {\n        // Tell the pool whether more tasks are ready to be processed.\n        // Return true or false\n    },\n    isFinishedFunction: async () => {\n        // Tell the pool whether it should finish\n        // or wait for more tasks to become available.\n        // Return true or false\n    },\n});\n\nawait pool.run();\n")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"autoscaledpool"}),(0,l.kt)("h2",{id:"new-autoscaledpooloptions"},(0,l.kt)("inlineCode",{parentName:"h2"},"new AutoscaledPool(options)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"options")),": ",(0,l.kt)("a",{parentName:"li",href:"../typedefs/autoscaled-pool-options",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPoolOptions"))," - All ",(0,l.kt)("inlineCode",{parentName:"li"},"AutoscaledPool")," configuration options.")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"log"}),(0,l.kt)("h2",{id:"autoscaledpoollog"},(0,l.kt)("inlineCode",{parentName:"h2"},"autoscaledPool.log")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"minconcurrency"}),(0,l.kt)("h2",{id:"autoscaledpoolminconcurrency"},(0,l.kt)("inlineCode",{parentName:"h2"},"autoscaledPool.minConcurrency")),(0,l.kt)("p",null,"Gets the minimum number of tasks running in parallel."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"minconcurrency"}),(0,l.kt)("h2",{id:"autoscaledpoolminconcurrency-1"},(0,l.kt)("inlineCode",{parentName:"h2"},"autoscaledPool.minConcurrency")),(0,l.kt)("p",null,"Sets the minimum number of tasks running in parallel."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"WARNING:")," If you set this value too high with respect to the available system memory and CPU, your code might run extremely slow or crash. If you're\nnot sure, just keep the default value and the concurrency will scale up automatically."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"value")),": ",(0,l.kt)("inlineCode",{parentName:"li"},"number"))),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"maxconcurrency"}),(0,l.kt)("h2",{id:"autoscaledpoolmaxconcurrency"},(0,l.kt)("inlineCode",{parentName:"h2"},"autoscaledPool.maxConcurrency")),(0,l.kt)("p",null,"Gets the maximum number of tasks running in parallel."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"maxconcurrency"}),(0,l.kt)("h2",{id:"autoscaledpoolmaxconcurrency-1"},(0,l.kt)("inlineCode",{parentName:"h2"},"autoscaledPool.maxConcurrency")),(0,l.kt)("p",null,"Sets the maximum number of tasks running in parallel."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"value")),": ",(0,l.kt)("inlineCode",{parentName:"li"},"number"))),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"desiredconcurrency"}),(0,l.kt)("h2",{id:"autoscaledpooldesiredconcurrency"},(0,l.kt)("inlineCode",{parentName:"h2"},"autoscaledPool.desiredConcurrency")),(0,l.kt)("p",null,"Gets the desired concurrency for the pool, which is an estimated number of parallel tasks that the system can currently support."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"desiredconcurrency"}),(0,l.kt)("h2",{id:"autoscaledpooldesiredconcurrency-1"},(0,l.kt)("inlineCode",{parentName:"h2"},"autoscaledPool.desiredConcurrency")),(0,l.kt)("p",null,"Sets the desired concurrency for the pool, i.e. the number of tasks that should be running in parallel if there's large enough supply of tasks."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"value")),": ",(0,l.kt)("inlineCode",{parentName:"li"},"number"))),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"currentconcurrency"}),(0,l.kt)("h2",{id:"autoscaledpoolcurrentconcurrency"},(0,l.kt)("inlineCode",{parentName:"h2"},"autoscaledPool.currentConcurrency")),(0,l.kt)("p",null,"Gets the the number of parallel tasks currently running in the pool."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"run"}),(0,l.kt)("h2",{id:"autoscaledpoolrun"},(0,l.kt)("inlineCode",{parentName:"h2"},"autoscaledPool.run()")),(0,l.kt)("p",null,"Runs the auto-scaled pool. Returns a promise that gets resolved or rejected once all the tasks are finished or one of them fails."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"abort"}),(0,l.kt)("h2",{id:"autoscaledpoolabort"},(0,l.kt)("inlineCode",{parentName:"h2"},"autoscaledPool.abort()")),(0,l.kt)("p",null,"Aborts the run of the auto-scaled pool and destroys it. The promise returned from the ",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool#run",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool.run()"))," function\nwill immediately resolve, no more new tasks will be spawned and all running tasks will be left in their current state."),(0,l.kt)("p",null,"Due to the nature of the tasks, auto-scaled pool cannot reliably guarantee abortion of all the running tasks, therefore, no abortion is attempted and\nsome of the tasks may finish, while others may not. Essentially, auto-scaled pool doesn't care about their state after the invocation of ",(0,l.kt)("inlineCode",{parentName:"p"},".abort()"),",\nbut that does not mean that some parts of their asynchronous chains of commands will not execute."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"pause"}),(0,l.kt)("h2",{id:"autoscaledpoolpausetimeoutsecs"},(0,l.kt)("inlineCode",{parentName:"h2"},"autoscaledPool.pause([timeoutSecs])")),(0,l.kt)("p",null,"Prevents the auto-scaled pool from starting new tasks, but allows the running ones to finish (unlike abort, which terminates them). Used together with\n",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool#resume",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool.resume()"))),(0,l.kt)("p",null,"The function's promise will resolve once all running tasks have completed and the pool is effectively idle. If the ",(0,l.kt)("inlineCode",{parentName:"p"},"timeoutSecs")," argument is provided,\nthe promise will reject with a timeout error after the ",(0,l.kt)("inlineCode",{parentName:"p"},"timeoutSecs")," seconds."),(0,l.kt)("p",null,"The promise returned from the ",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool#run",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool.run()"))," function will not resolve when ",(0,l.kt)("inlineCode",{parentName:"p"},".pause()")," is invoked (unlike abort,\nwhich resolves it)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"[timeoutSecs]")),": ",(0,l.kt)("inlineCode",{parentName:"li"},"number"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"resume"}),(0,l.kt)("h2",{id:"autoscaledpoolresume"},(0,l.kt)("inlineCode",{parentName:"h2"},"autoscaledPool.resume()")),(0,l.kt)("p",null,"Resumes the operation of the autoscaled-pool by allowing more tasks to be run. Used together with\n",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool#pause",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool.pause()"))),(0,l.kt)("p",null,"Tasks will automatically start running again in ",(0,l.kt)("inlineCode",{parentName:"p"},"options.maybeRunIntervalSecs"),"."),(0,l.kt)("hr",null))}m.isMDXComponent=!0}}]);