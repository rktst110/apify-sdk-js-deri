"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>q});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=o(n),q=a,k=m["".concat(s,".").concat(q)]||m[q]||d[q]||u;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function q(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,l=new Array(u);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var o=2;o<u;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>q,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(87462),a=n(63366),u=(n(67294),n(3905)),l=["components"],i={id_old:"version-1.3-request-queue",title:"RequestQueue",id:"request-queue"},s=void 0,o={unversionedId:"api/request-queue",id:"version-1.3/api/request-queue",title:"RequestQueue",description:"Represents a queue of URLs to crawl, which is used for deep crawling of websites where you start with several URLs and then recursively follow links",source:"@site/versioned_docs/version-1.3/api/RequestQueue.md",sourceDirName:"api",slug:"/api/request-queue",permalink:"/docs/1.3/api/request-queue",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1662138729,formattedLastUpdatedAt:"Sep 2, 2022",frontMatter:{id_old:"version-1.3-request-queue",title:"RequestQueue",id:"request-queue"},sidebar:"version-1.3/docs",previous:{title:"RequestList",permalink:"/docs/1.3/api/request-list"},next:{title:"PseudoUrl",permalink:"/docs/1.3/api/pseudo-url"}},p={},d=[{value:"<code>requestQueue.addRequest(requestLike, [options])</code>",id:"requestqueueaddrequestrequestlike-options",level:2},{value:"<code>requestQueue.getRequest(id)</code>",id:"requestqueuegetrequestid",level:2},{value:"<code>requestQueue.fetchNextRequest()</code>",id:"requestqueuefetchnextrequest",level:2},{value:"<code>requestQueue.markRequestHandled(request)</code>",id:"requestqueuemarkrequesthandledrequest",level:2},{value:"<code>requestQueue.reclaimRequest(request, [options])</code>",id:"requestqueuereclaimrequestrequest-options",level:2},{value:"<code>requestQueue.isEmpty()</code>",id:"requestqueueisempty",level:2},{value:"<code>requestQueue.isFinished()</code>",id:"requestqueueisfinished",level:2},{value:"<code>requestQueue.drop()</code>",id:"requestqueuedrop",level:2},{value:"<code>requestQueue.handledCount()</code>",id:"requestqueuehandledcount",level:2},{value:"<code>requestQueue.getInfo()</code>",id:"requestqueuegetinfo",level:2}],m={toc:d};function q(e){var t=e.components,n=(0,a.Z)(e,l);return(0,u.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("a",{name:"requestqueue"}),(0,u.kt)("p",null,"Represents a queue of URLs to crawl, which is used for deep crawling of websites where you start with several URLs and then recursively follow links\nto other pages. The data structure supports both breadth-first and depth-first crawling orders."),(0,u.kt)("p",null,"Each URL is represented using an instance of the ",(0,u.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"Request"))," class. The queue can only contain unique URLs. More precisely, it can\nonly contain ",(0,u.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"Request"))," instances with distinct ",(0,u.kt)("inlineCode",{parentName:"p"},"uniqueKey")," properties. By default, ",(0,u.kt)("inlineCode",{parentName:"p"},"uniqueKey")," is generated from the URL, but it can\nalso be overridden. To add a single URL multiple times to the queue, corresponding ",(0,u.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"Request"))," objects will need to have different\n",(0,u.kt)("inlineCode",{parentName:"p"},"uniqueKey")," properties."),(0,u.kt)("p",null,"Do not instantiate this class directly, use the ",(0,u.kt)("a",{parentName:"p",href:"../api/apify#openrequestqueue",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"Apify.openRequestQueue()"))," function instead."),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"RequestQueue")," is used by ",(0,u.kt)("a",{parentName:"p",href:"../api/basic-crawler",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"BasicCrawler")),", ",(0,u.kt)("a",{parentName:"p",href:"../api/cheerio-crawler",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"CheerioCrawler")),",\n",(0,u.kt)("a",{parentName:"p",href:"../api/puppeteer-crawler",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"PuppeteerCrawler"))," and ",(0,u.kt)("a",{parentName:"p",href:"../api/playwright-crawler",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"PlaywrightCrawler"))," as a source of URLs to crawl. Unlike\n",(0,u.kt)("a",{parentName:"p",href:"../api/request-list",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"RequestList")),", ",(0,u.kt)("inlineCode",{parentName:"p"},"RequestQueue")," supports dynamic adding and removing of requests. On the other hand, the queue is not optimized\nfor operations that add or remove a large number of URLs in a batch."),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"RequestQueue")," stores its data either on local disk or in the Apify Cloud, depending on whether the ",(0,u.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR")," or ",(0,u.kt)("inlineCode",{parentName:"p"},"APIFY_TOKEN"),"\nenvironment variable is set."),(0,u.kt)("p",null,"If the ",(0,u.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR")," environment variable is set, the queue data is stored in that directory in an SQLite database file."),(0,u.kt)("p",null,"If the ",(0,u.kt)("inlineCode",{parentName:"p"},"APIFY_TOKEN")," environment variable is set but ",(0,u.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR")," is not, the data is stored in the\n",(0,u.kt)("a",{parentName:"p",href:"https://docs.apify.com/storage/request-queue",target:"_blank",rel:"noopener"},"Apify Request Queue")," cloud storage. Note that you can force usage of the cloud storage also by passing\nthe ",(0,u.kt)("inlineCode",{parentName:"p"},"forceCloud")," option to ",(0,u.kt)("a",{parentName:"p",href:"../api/apify#openrequestqueue",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"Apify.openRequestQueue()"))," function, even if the ",(0,u.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR")," variable is\nset."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Example usage:")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-javascript"},"// Open the default request queue associated with the actor run\nconst queue = await Apify.openRequestQueue();\n\n// Open a named request queue\nconst queueWithName = await Apify.openRequestQueue('some-name');\n\n// Enqueue few requests\nawait queue.addRequest({ url: 'http://example.com/aaa' });\nawait queue.addRequest({ url: 'http://example.com/bbb' });\nawait queue.addRequest({ url: 'http://example.com/foo/bar' }, { forefront: true });\n")),(0,u.kt)("hr",null),(0,u.kt)("a",{name:"addrequest"}),(0,u.kt)("h2",{id:"requestqueueaddrequestrequestlike-options"},(0,u.kt)("inlineCode",{parentName:"h2"},"requestQueue.addRequest(requestLike, [options])")),(0,u.kt)("p",null,"Adds a request to the queue."),(0,u.kt)("p",null,"If a request with the same ",(0,u.kt)("inlineCode",{parentName:"p"},"uniqueKey")," property is already present in the queue, it will not be updated. You can find out whether this happened from\nthe resulting ",(0,u.kt)("a",{parentName:"p",href:"../typedefs/queue-operation-info",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"QueueOperationInfo"))," object."),(0,u.kt)("p",null,"To add multiple requests to the queue by extracting links from a webpage, see the ",(0,u.kt)("a",{parentName:"p",href:"../api/utils#enqueuelinks",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"utils.enqueueLinks()"))," helper function."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},(0,u.kt)("inlineCode",{parentName:"strong"},"requestLike")),": ",(0,u.kt)("a",{parentName:"li",href:"../api/request",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"Request"))," | ",(0,u.kt)("a",{parentName:"li",href:"../typedefs/request-options",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"RequestOptions"))," - ",(0,u.kt)("a",{parentName:"li",href:"../api/request",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"Request"))," object or vanilla\nobject with request data. Note that the function sets the ",(0,u.kt)("inlineCode",{parentName:"li"},"uniqueKey")," and ",(0,u.kt)("inlineCode",{parentName:"li"},"id")," fields to the passed Request."),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},(0,u.kt)("inlineCode",{parentName:"strong"},"[options]")),": ",(0,u.kt)("inlineCode",{parentName:"li"},"Object"),(0,u.kt)("ul",{parentName:"li"},(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},(0,u.kt)("inlineCode",{parentName:"strong"},"[forefront]")),": ",(0,u.kt)("inlineCode",{parentName:"li"},"boolean")," ",(0,u.kt)("code",null," = false")," - If ",(0,u.kt)("inlineCode",{parentName:"li"},"true"),", the request will be added to the foremost position in the queue.")))),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Returns"),":"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"../typedefs/queue-operation-info",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"Promise<QueueOperationInfo>"))),(0,u.kt)("hr",null),(0,u.kt)("a",{name:"getrequest"}),(0,u.kt)("h2",{id:"requestqueuegetrequestid"},(0,u.kt)("inlineCode",{parentName:"h2"},"requestQueue.getRequest(id)")),(0,u.kt)("p",null,"Gets the request from the queue specified by ID."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},(0,u.kt)("inlineCode",{parentName:"strong"},"id")),": ",(0,u.kt)("inlineCode",{parentName:"li"},"string")," - ID of the request.")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Returns"),":"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"Promise<(Request|null)>"))," - Returns the request object, or ",(0,u.kt)("inlineCode",{parentName:"p"},"null")," if it was not found."),(0,u.kt)("hr",null),(0,u.kt)("a",{name:"fetchnextrequest"}),(0,u.kt)("h2",{id:"requestqueuefetchnextrequest"},(0,u.kt)("inlineCode",{parentName:"h2"},"requestQueue.fetchNextRequest()")),(0,u.kt)("p",null,"Returns a next request in the queue to be processed, or ",(0,u.kt)("inlineCode",{parentName:"p"},"null")," if there are no more pending requests."),(0,u.kt)("p",null,"Once you successfully finish processing of the request, you need to call\n",(0,u.kt)("a",{parentName:"p",href:"../api/request-queue#markrequesthandled",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"RequestQueue.markRequestHandled()"))," to mark the request as handled in the queue. If there was some error in\nprocessing the request, call ",(0,u.kt)("a",{parentName:"p",href:"../api/request-queue#reclaimrequest",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"RequestQueue.reclaimRequest()"))," instead, so that the queue will give the request\nto some other consumer in another call to the ",(0,u.kt)("inlineCode",{parentName:"p"},"fetchNextRequest")," function."),(0,u.kt)("p",null,"Note that the ",(0,u.kt)("inlineCode",{parentName:"p"},"null")," return value doesn't mean the queue processing finished, it means there are currently no pending requests. To check whether all\nrequests in queue were finished, use ",(0,u.kt)("a",{parentName:"p",href:"../api/request-queue#isfinished",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"RequestQueue.isFinished()"))," instead."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Returns"),":"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"Promise<(Request|null)>"))," - Returns the request object or ",(0,u.kt)("inlineCode",{parentName:"p"},"null")," if there are no more pending requests."),(0,u.kt)("hr",null),(0,u.kt)("a",{name:"markrequesthandled"}),(0,u.kt)("h2",{id:"requestqueuemarkrequesthandledrequest"},(0,u.kt)("inlineCode",{parentName:"h2"},"requestQueue.markRequestHandled(request)")),(0,u.kt)("p",null,"Marks a request that was previously returned by the ",(0,u.kt)("a",{parentName:"p",href:"../api/request-queue#fetchnextrequest",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"RequestQueue.fetchNextRequest()"))," function as handled\nafter successful processing. Handled requests will never again be returned by the ",(0,u.kt)("inlineCode",{parentName:"p"},"fetchNextRequest")," function."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},(0,u.kt)("inlineCode",{parentName:"strong"},"request")),": ",(0,u.kt)("a",{parentName:"li",href:"../api/request",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"Request")))),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Returns"),":"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"../typedefs/queue-operation-info",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"Promise<QueueOperationInfo>"))),(0,u.kt)("hr",null),(0,u.kt)("a",{name:"reclaimrequest"}),(0,u.kt)("h2",{id:"requestqueuereclaimrequestrequest-options"},(0,u.kt)("inlineCode",{parentName:"h2"},"requestQueue.reclaimRequest(request, [options])")),(0,u.kt)("p",null,"Reclaims a failed request back to the queue, so that it can be returned for processed later again by another call to\n",(0,u.kt)("a",{parentName:"p",href:"../api/request-queue#fetchnextrequest",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"RequestQueue.fetchNextRequest()")),". The request record in the queue is updated using the provided ",(0,u.kt)("inlineCode",{parentName:"p"},"request"),"\nparameter. For example, this lets you store the number of retries or error messages for the request."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},(0,u.kt)("inlineCode",{parentName:"strong"},"request")),": ",(0,u.kt)("a",{parentName:"li",href:"../api/request",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"Request"))),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},(0,u.kt)("inlineCode",{parentName:"strong"},"[options]")),": ",(0,u.kt)("inlineCode",{parentName:"li"},"object")," - ",(0,u.kt)("strong",{parentName:"li"},(0,u.kt)("inlineCode",{parentName:"strong"},"[forefront]")),": ",(0,u.kt)("inlineCode",{parentName:"li"},"boolean")," ",(0,u.kt)("code",null," = false")," - If ",(0,u.kt)("inlineCode",{parentName:"li"},"true")," then the request it placed to the beginning of the\nqueue, so that it's returned in the next call to ",(0,u.kt)("a",{parentName:"li",href:"../api/request-queue#fetchnextrequest",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"RequestQueue.fetchNextRequest()")),". By default, it's put\nto the end of the queue.")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Returns"),":"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"../typedefs/queue-operation-info",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"Promise<QueueOperationInfo>"))),(0,u.kt)("hr",null),(0,u.kt)("a",{name:"isempty"}),(0,u.kt)("h2",{id:"requestqueueisempty"},(0,u.kt)("inlineCode",{parentName:"h2"},"requestQueue.isEmpty()")),(0,u.kt)("p",null,"Resolves to ",(0,u.kt)("inlineCode",{parentName:"p"},"true")," if the next call to ",(0,u.kt)("a",{parentName:"p",href:"../api/request-queue#fetchnextrequest",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"RequestQueue.fetchNextRequest()"))," would return ",(0,u.kt)("inlineCode",{parentName:"p"},"null"),", otherwise it\nresolves to ",(0,u.kt)("inlineCode",{parentName:"p"},"false"),". Note that even if the queue is empty, there might be some pending requests currently being processed. If you need to ensure that\nthere is no activity in the queue, use ",(0,u.kt)("a",{parentName:"p",href:"../api/request-queue#isfinished",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"RequestQueue.isFinished()")),"."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Returns"),":"),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"Promise<boolean>")),(0,u.kt)("hr",null),(0,u.kt)("a",{name:"isfinished"}),(0,u.kt)("h2",{id:"requestqueueisfinished"},(0,u.kt)("inlineCode",{parentName:"h2"},"requestQueue.isFinished()")),(0,u.kt)("p",null,"Resolves to ",(0,u.kt)("inlineCode",{parentName:"p"},"true")," if all requests were already handled and there are no more left. Due to the nature of distributed storage used by the queue, the\nfunction might occasionally return a false negative, but it will never return a false positive."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Returns"),":"),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"Promise<boolean>")),(0,u.kt)("hr",null),(0,u.kt)("a",{name:"drop"}),(0,u.kt)("h2",{id:"requestqueuedrop"},(0,u.kt)("inlineCode",{parentName:"h2"},"requestQueue.drop()")),(0,u.kt)("p",null,"Removes the queue either from the Apify Cloud storage or from the local database, depending on the mode of operation."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Returns"),":"),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,u.kt)("hr",null),(0,u.kt)("a",{name:"handledcount"}),(0,u.kt)("h2",{id:"requestqueuehandledcount"},(0,u.kt)("inlineCode",{parentName:"h2"},"requestQueue.handledCount()")),(0,u.kt)("p",null,"Returns the number of handled requests."),(0,u.kt)("p",null,"This function is just a convenient shortcut for:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-javascript"},"const { handledRequestCount } = await queue.getInfo();\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Returns"),":"),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"Promise<number>")),(0,u.kt)("hr",null),(0,u.kt)("a",{name:"getinfo"}),(0,u.kt)("h2",{id:"requestqueuegetinfo"},(0,u.kt)("inlineCode",{parentName:"h2"},"requestQueue.getInfo()")),(0,u.kt)("p",null,"Returns an object containing general information about the request queue."),(0,u.kt)("p",null,"The function returns the same object as the Apify API Client's ",(0,u.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/apify-client-js/latest#ApifyClient-requestQueues",target:"_blank",rel:"noopener"},"getQueue"),"\nfunction, which in turn calls the ",(0,u.kt)("a",{parentName:"p",href:"https://apify.com/docs/api/v2#/reference/request-queues/queue/get-request-queue",target:"_blank",rel:"noopener"},"Get request queue")," API endpoint."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Example:")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'{\n  id: "WkzbQMuFYuamGv3YF",\n  name: "my-queue",\n  userId: "wRsJZtadYvn4mBZmm",\n  createdAt: new Date("2015-12-12T07:34:14.202Z"),\n  modifiedAt: new Date("2015-12-13T08:36:13.202Z"),\n  accessedAt: new Date("2015-12-14T08:36:13.202Z"),\n  totalRequestCount: 25,\n  handledRequestCount: 5,\n  pendingRequestCount: 20,\n}\n')),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Returns"),":"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"../typedefs/request-queue-info",target:null,rel:null},(0,u.kt)("inlineCode",{parentName:"a"},"Promise<RequestQueueInfo>"))),(0,u.kt)("hr",null))}q.isMDXComponent=!0}}]);