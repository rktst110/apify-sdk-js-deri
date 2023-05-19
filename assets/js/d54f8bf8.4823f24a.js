"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2929],{68889:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),o=n(88746),r=n(6141),i=n(6832);const l=function(e){var t=e.to,n=e.children,l=(0,r.E)(),s=l.version,p=l.isLast;if((0,i.default)().siteConfig.presets[0][1].docs.disableVersioning)return a.createElement(o.default,{to:"/api/"+t},n);var d=s+"/";return"current"===s?d="next/":p&&(d=""),a.createElement(o.default,{to:"/api/"+d+t},n)}},70835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>v,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var a,o=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(68889),s=["components"],p={id:"environment-variables",title:"Environment Variables"},d=void 0,u={unversionedId:"guides/environment-variables",id:"guides/environment-variables",title:"Environment Variables",description:"The following is a list of the environment variables used by Apify SDK that are available to the user.",source:"@site/../docs/guides/environment_variables.mdx",sourceDirName:"guides",slug:"/guides/environment-variables",permalink:"/sdk/js/docs/next/guides/environment-variables",draft:!1,tags:[],version:"current",lastUpdatedBy:"Luk\xe1\u0161 K\u0159ivka",lastUpdatedAt:1684512970,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{id:"environment-variables",title:"Environment Variables"},sidebar:"docs",previous:{title:"Result Storage",permalink:"/sdk/js/docs/next/guides/result-storage"},next:{title:"Proxy Management",permalink:"/sdk/js/docs/next/guides/proxy-management"}},c={},m=[{value:"Important env vars",id:"important-env-vars",level:2},{value:"<code>APIFY_LOCAL_STORAGE_DIR</code>",id:"apify_local_storage_dir",level:3},{value:"<code>APIFY_TOKEN</code>",id:"apify_token",level:3},{value:"Combinations of <code>APIFY_LOCAL_STORAGE_DIR</code> and <code>APIFY_TOKEN</code>",id:"combinations-of-apify_local_storage_dir-and-apify_token",level:3},{value:"Convenience env vars",id:"convenience-env-vars",level:2},{value:"<code>APIFY_HEADLESS</code>",id:"apify_headless",level:3},{value:"<code>APIFY_LOG_LEVEL</code>",id:"apify_log_level",level:3},{value:"<code>APIFY_MEMORY_MBYTES</code>",id:"apify_memory_mbytes",level:3},{value:"<code>APIFY_PROXY_PASSWORD</code>",id:"apify_proxy_password",level:3}],y=(a="CrawleeApiLink",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:m},h="wrapper";function v(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)(h,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following is a list of the environment variables used by Apify SDK that are available to the user.\nThe SDK is capable of running without any env vars present, but certain features will only become available\nafter env vars are properly set. You can use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-cli",target:"_blank",rel:"noopener"},"Apify CLI"),"\nto set the env vars for you. ",(0,i.kt)("a",{parentName:"p",href:"../guides/apify-platform",target:null,rel:null},"Apify platform")," also sets the variables automatically."),(0,i.kt)("h2",{id:"important-env-vars"},"Important env vars"),(0,i.kt)("p",null,"The following environment variables have large impact on the way Apify SDK works and its behavior\ncan be changed significantly by setting or unsetting them."),(0,i.kt)("h3",{id:"apify_local_storage_dir"},(0,i.kt)("inlineCode",{parentName:"h3"},"APIFY_LOCAL_STORAGE_DIR")),(0,i.kt)("p",null,"Defines the path to a local directory where ",(0,i.kt)(l.Z,{to:"apify/class/KeyValueStore",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"KeyValueStore")),", ",(0,i.kt)(l.Z,{to:"apify/class/Dataset",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"Dataset")),", and ",(0,i.kt)(l.Z,{to:"apify/class/RequestQueue",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"RequestQueue"))," store their data. Typically, it is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"./storage"),". If omitted, you should define the ",(0,i.kt)("a",{parentName:"p",href:"#apify_token",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"APIFY_TOKEN"))," environment variable instead."),(0,i.kt)("h3",{id:"apify_token"},(0,i.kt)("inlineCode",{parentName:"h3"},"APIFY_TOKEN")),(0,i.kt)("p",null,"The API token for your Apify account. It is used to access the Apify API, e.g. to access cloud storage\nor to run an actor on the Apify platform. You can find your API token on the\n",(0,i.kt)("a",{parentName:"p",href:"https://console.apify.com/account#/integrations",target:"_blank",rel:"noopener"},"Account - Integrations")," page. If omitted,\nyou should define the ",(0,i.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR")," environment variable instead."),(0,i.kt)("h3",{id:"combinations-of-apify_local_storage_dir-and-apify_token"},"Combinations of ",(0,i.kt)("inlineCode",{parentName:"h3"},"APIFY_LOCAL_STORAGE_DIR")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"APIFY_TOKEN")),(0,i.kt)("p",null,"By combining the env vars in various ways, you can greatly influence the behavior of Apify SDK."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Env Vars"),(0,i.kt)("th",{parentName:"tr",align:null},"API"),(0,i.kt)("th",{parentName:"tr",align:null},"Storages"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"none OR ",(0,i.kt)("inlineCode",{parentName:"td"},"APIFY_LOCAL_STORAGE_DIR")),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"local")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"APIFY_TOKEN")),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Apify platform")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"APIFY_TOKEN")," AND ",(0,i.kt)("inlineCode",{parentName:"td"},"APIFY_LOCAL_STORAGE_DIR")),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"local+platform")))),(0,i.kt)("p",null,"When using both ",(0,i.kt)("inlineCode",{parentName:"p"},"APIFY_TOKEN")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR"),", you can use all the Apify platform\nfeatures and your data will be stored locally by default. If you want to access platform storages,\nyou can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"{ forceCloud: true }")," option in their respective functions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const localDataset = await Actor.openDataset('my-local-data');\nconst remoteDataset = await Actor.openDataset('my-remote-data', { forceCloud: true });\n")),(0,i.kt)("h2",{id:"convenience-env-vars"},"Convenience env vars"),(0,i.kt)("p",null,"The next group includes env vars that can help achieve certain goals without having to change\nyour code, such as temporarily switching log level to DEBUG."),(0,i.kt)("h3",{id:"apify_headless"},(0,i.kt)("inlineCode",{parentName:"h3"},"APIFY_HEADLESS")),(0,i.kt)("p",null,"If set to ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", web browsers launched by Apify SDK will run in the headless mode. You can still override\nthis setting in the code, e.g. by passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"headless: true")," option to the"),(0,i.kt)(l.Z,{to:"apify/class/Actor#launchPuppeteer",mdxType:"ApiLink"},"`Actor.launchPuppeteer()`")," function. But having this setting in an environment variable allows you to develop the crawler locally in headful mode to simplify the debugging, and only run the crawler in headless mode once you deploy it to the Apify platform. By default, the browsers are launched in headful mode, i.e. with windows.",(0,i.kt)("h3",{id:"apify_log_level"},(0,i.kt)("inlineCode",{parentName:"h3"},"APIFY_LOG_LEVEL")),(0,i.kt)("p",null,"Specifies the minimum log level, which can be one of the following values (in order of severity):\n",(0,i.kt)("inlineCode",{parentName:"p"},"DEBUG"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"INFO"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"WARNING")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ERROR"),". By default, the log level is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"INFO"),",\nwhich means that ",(0,i.kt)("inlineCode",{parentName:"p"},"DEBUG")," messages are not printed to console. See the ",(0,i.kt)(y,{to:"core/class/Log",mdxType:"CrawleeApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"utils.log")),"\nnamespace for logging utilities."),(0,i.kt)("h3",{id:"apify_memory_mbytes"},(0,i.kt)("inlineCode",{parentName:"h3"},"APIFY_MEMORY_MBYTES")),(0,i.kt)("p",null,"Sets the amount of system memory in megabytes to be used by the ",(0,i.kt)(y,{to:"core/class/AutoscaledPool",mdxType:"CrawleeApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"AutoscaledPool")),".\nIt is used to limit the number of concurrently running tasks. By default, the max amount of memory\nto be used is set to one quarter of total system memory, i.e. on a system with 8192 MB of memory,\nthe autoscaling feature will only use up to 2048 MB of memory."),(0,i.kt)("h3",{id:"apify_proxy_password"},(0,i.kt)("inlineCode",{parentName:"h3"},"APIFY_PROXY_PASSWORD")),(0,i.kt)("p",null,"Optional password to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy")," for IP address rotation.\nIf you have an Apify Account, you can find the password on the ",(0,i.kt)("a",{parentName:"p",href:"https://console.apify.com/proxy",target:"_blank",rel:"noopener"},"Proxy page"),"\nin the Apify Console. The password is automatically inferred using the ",(0,i.kt)("inlineCode",{parentName:"p"},"APIFY_TOKEN")," env var,\nso in most cases, you don't need to touch it. You should use it when, for some reason,\nyou need access to Apify Proxy, but no access to Apify API, or when you need access to\nproxy from a different account than your token represents."))}v.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,y=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(y,i(i({ref:t},d),{},{components:n})):a.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);