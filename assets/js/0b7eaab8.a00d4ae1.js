"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2373],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),k=i,c=u["".concat(s,".").concat(k)]||u[k]||m[k]||r;return a?n.createElement(c,o(o({ref:t},d),{},{components:a})):n.createElement(c,o({ref:t},d))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},14373:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],l={id_old:"version-1.3-dataset",title:"Dataset",id:"dataset"},s=void 0,p={unversionedId:"api/dataset",id:"version-1.3/api/dataset",title:"Dataset",description:"The Dataset class represents a store for structured data where each object stored has the same attributes, such as online store products or real",source:"@site/versioned_docs/version-1.3/api/Dataset.md",sourceDirName:"api",slug:"/api/dataset",permalink:"/docs/1.3/api/dataset",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1664795529,formattedLastUpdatedAt:"Oct 3, 2022",frontMatter:{id_old:"version-1.3-dataset",title:"Dataset",id:"dataset"},sidebar:"version-1.3/docs",previous:{title:"Statistics",permalink:"/docs/1.3/api/statistics"},next:{title:"KeyValueStore",permalink:"/docs/1.3/api/key-value-store"}},d={},m=[{value:"<code>dataset.pushData(data)</code>",id:"datasetpushdatadata",level:2},{value:"<code>dataset.getData([options])</code>",id:"datasetgetdataoptions",level:2},{value:"<code>dataset.getInfo()</code>",id:"datasetgetinfo",level:2},{value:"<code>dataset.forEach(iteratee, [options], [index])</code>",id:"datasetforeachiteratee-options-index",level:2},{value:"<code>dataset.map(iteratee, [options])</code>",id:"datasetmapiteratee-options",level:2},{value:"<code>dataset.reduce(iteratee, memo, [options])</code>",id:"datasetreduceiteratee-memo-options",level:2},{value:"<code>dataset.drop()</code>",id:"datasetdrop",level:2}],u={toc:m};function k(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"dataset"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Dataset")," class represents a store for structured data where each object stored has the same attributes, such as online store products or real\nestate offers. You can imagine it as a table, where each object is a row and its attributes are columns. Dataset is an append-only storage - you can\nonly add new records to it but you cannot modify or remove existing records. Typically it is used to store crawling results."),(0,r.kt)("p",null,"Do not instantiate this class directly, use the ",(0,r.kt)("a",{parentName:"p",href:"../api/apify#opendataset",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"Apify.openDataset()"))," function instead."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Dataset")," stores its data either on local disk or in the Apify cloud, depending on whether the ",(0,r.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"APIFY_TOKEN")," environment\nvariables are set."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR")," environment variable is set, the data is stored in the local directory in the following files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{APIFY_LOCAL_STORAGE_DIR}/datasets/{DATASET_ID}/{INDEX}.json\n")),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"{DATASET_ID}")," is the name or ID of the dataset. The default dataset has ID: ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),", unless you override it by setting the\n",(0,r.kt)("inlineCode",{parentName:"p"},"APIFY_DEFAULT_DATASET_ID")," environment variable. Each dataset item is stored as a separate JSON file, where ",(0,r.kt)("inlineCode",{parentName:"p"},"{INDEX}")," is a zero-based index of the\nitem in the dataset."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"APIFY_TOKEN")," environment variable is set but ",(0,r.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR")," not, the data is stored in the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.apify.com/storage/dataset",target:"_blank",rel:"noopener"},"Apify Dataset")," cloud storage. Note that you can force usage of the cloud storage also by passing the\n",(0,r.kt)("inlineCode",{parentName:"p"},"forceCloud")," option to ",(0,r.kt)("a",{parentName:"p",href:"../api/apify#opendataset",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"Apify.openDataset()"))," function, even if the ",(0,r.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR")," variable is set."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Write a single row to the default dataset\nawait Apify.pushData({ col1: 123, col2: 'val2' });\n\n// Open a named dataset\nconst dataset = await Apify.openDataset('some-name');\n\n// Write a single row\nawait dataset.pushData({ foo: 'bar' });\n\n// Write multiple rows\nawait dataset.pushData([{ foo: 'bar2', col2: 'val2' }, { col3: 123 }]);\n")),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"pushdata"}),(0,r.kt)("h2",{id:"datasetpushdatadata"},(0,r.kt)("inlineCode",{parentName:"h2"},"dataset.pushData(data)")),(0,r.kt)("p",null,"Stores an object or an array of objects to the dataset. The function returns a promise that resolves when the operation finishes. It has no result,\nbut throws on invalid args or other errors."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANT"),": Make sure to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," keyword when calling ",(0,r.kt)("inlineCode",{parentName:"p"},"pushData()"),", otherwise the actor process might finish before the data is stored!"),(0,r.kt)("p",null,"The size of the data is limited by the receiving API and therefore ",(0,r.kt)("inlineCode",{parentName:"p"},"pushData()")," will only allow objects whose JSON representation is smaller than 9MB.\nWhen an array is passed, none of the included objects may be larger than 9MB, but the array itself may be of any size."),(0,r.kt)("p",null,"The function internally chunks the array into separate items and pushes them sequentially. The chunking process is stable (keeps order of data), but\nit does not provide a transaction safety mechanism. Therefore, in the event of an uploading error (after several automatic retries), the function's\nPromise will reject and the dataset will be left in a state where some of the items have already been saved to the dataset while other items from the\nsource array were not. To overcome this limitation, the developer may, for example, read the last item saved in the dataset and re-attempt the save of\nthe data from this item onwards to prevent duplicates."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"data")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"object")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"Array<object>")," - Object or array of objects containing data to be stored in the default dataset. The objects must be\nserializable to JSON and the JSON representation of each object must be smaller than 9MB.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"getdata"}),(0,r.kt)("h2",{id:"datasetgetdataoptions"},(0,r.kt)("inlineCode",{parentName:"h2"},"dataset.getData([options])")),(0,r.kt)("p",null,"Returns ",(0,r.kt)("a",{parentName:"p",href:"../typedefs/dataset-content",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"DatasetContent"))," object holding the items in the dataset based on the provided parameters."),(0,r.kt)("p",null,"If you need to get data in an unparsed format, use the ",(0,r.kt)("a",{parentName:"p",href:"../api/apify#newclient",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"Apify.newClient()"))," function to get a new ",(0,r.kt)("inlineCode",{parentName:"p"},"apify-client")," instance and\ncall ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-client-js#DatasetClient+downloadItems",target:"_blank",rel:"noopener"},(0,r.kt)("inlineCode",{parentName:"a"},"datasetClient.downloadItems()"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[options]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Object")," - All ",(0,r.kt)("inlineCode",{parentName:"li"},"getData()")," parameters are passed via an options object with the following keys:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[offset]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," ",(0,r.kt)("code",null," = 0")," - Number of array elements that should be skipped at the start."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[limit]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," ",(0,r.kt)("code",null," = 250000")," - Maximum number of array elements to return."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[desc]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," ",(0,r.kt)("code",null," = false")," - If ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," then the objects are sorted by ",(0,r.kt)("inlineCode",{parentName:"li"},"createdAt")," in descending order. Otherwise they are\nsorted in ascending order."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[fields]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Array<string>")," - An array of field names that will be included in the result. If omitted, all fields are included in the\nresults."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[unwind]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - Specifies a name of the field in the result objects that will be used to unwind the resulting objects. By default,\nthe results are returned as they are."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[clean]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," ",(0,r.kt)("code",null," = false")," - If ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," then the function returns only non-empty items and skips hidden fields (i.e. fields\nstarting with ",(0,r.kt)("inlineCode",{parentName:"li"},"#")," character). Note that the ",(0,r.kt)("inlineCode",{parentName:"li"},"clean")," parameter is a shortcut for ",(0,r.kt)("inlineCode",{parentName:"li"},"skipHidden: true")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"skipEmpty: true")," options."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[skipHidden]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," ",(0,r.kt)("code",null," = false")," - If ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),' then the function doesn\'t return hidden fields (fields starting with "#"\ncharacter).'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[skipEmpty]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," ",(0,r.kt)("code",null," = false")," - If ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," then the function doesn't return empty items. Note that in this case the\nreturned number of items might be lower than limit parameter and pagination must be done using the ",(0,r.kt)("inlineCode",{parentName:"li"},"limit")," value.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../typedefs/dataset-content",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"Promise<DatasetContent>"))),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"getinfo"}),(0,r.kt)("h2",{id:"datasetgetinfo"},(0,r.kt)("inlineCode",{parentName:"h2"},"dataset.getInfo()")),(0,r.kt)("p",null,"Returns an object containing general information about the dataset."),(0,r.kt)("p",null,"The function returns the same object as the Apify API Client's\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/apify-client-js/latest#ApifyClient-datasets-getDataset",target:"_blank",rel:"noopener"},"getDataset")," function, which in turn calls the\n",(0,r.kt)("a",{parentName:"p",href:"https://apify.com/docs/api/v2#/reference/datasets/dataset/get-dataset",target:"_blank",rel:"noopener"},"Get dataset")," API endpoint."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  id: "WkzbQMuFYuamGv3YF",\n  name: "my-dataset",\n  userId: "wRsJZtadYvn4mBZmm",\n  createdAt: new Date("2015-12-12T07:34:14.202Z"),\n  modifiedAt: new Date("2015-12-13T08:36:13.202Z"),\n  accessedAt: new Date("2015-12-14T08:36:13.202Z"),\n  itemCount: 14,\n  cleanItemCount: 10\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise<object>")),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"foreach"}),(0,r.kt)("h2",{id:"datasetforeachiteratee-options-index"},(0,r.kt)("inlineCode",{parentName:"h2"},"dataset.forEach(iteratee, [options], [index])")),(0,r.kt)("p",null,"Iterates over dataset items, yielding each in turn to an ",(0,r.kt)("inlineCode",{parentName:"p"},"iteratee")," function. Each invocation of ",(0,r.kt)("inlineCode",{parentName:"p"},"iteratee")," is called with two arguments:\n",(0,r.kt)("inlineCode",{parentName:"p"},"(item, index)"),"."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"iteratee")," function returns a Promise then it is awaited before the next call. If it throws an error, the iteration is aborted and the\n",(0,r.kt)("inlineCode",{parentName:"p"},"forEach")," function throws the error."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const dataset = await Apify.openDataset('my-results');\nawait dataset.forEach(async (item, index) => {\n    console.log(`Item at ${index}: ${JSON.stringify(item)}`);\n});\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"iteratee")),": ",(0,r.kt)("a",{parentName:"li",href:"../typedefs/dataset-consumer",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"DatasetConsumer"))," - A function that is called for every item in the dataset."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[options]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Object")," - All ",(0,r.kt)("inlineCode",{parentName:"li"},"forEach()")," parameters are passed via an options object with the following keys:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[desc]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," ",(0,r.kt)("code",null," = false")," - If ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," then the objects are sorted by ",(0,r.kt)("inlineCode",{parentName:"li"},"createdAt")," in descending order."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[fields]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Array<string>")," - If provided then returned objects will only contain specified keys."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[unwind]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - If provided then objects will be unwound based on provided field."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[index]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," ",(0,r.kt)("code",null," = 0")," - Specifies the initial index number passed to the ",(0,r.kt)("inlineCode",{parentName:"li"},"iteratee")," function.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"map"}),(0,r.kt)("h2",{id:"datasetmapiteratee-options"},(0,r.kt)("inlineCode",{parentName:"h2"},"dataset.map(iteratee, [options])")),(0,r.kt)("p",null,"Produces a new array of values by mapping each value in list through a transformation function ",(0,r.kt)("inlineCode",{parentName:"p"},"iteratee()"),". Each invocation of ",(0,r.kt)("inlineCode",{parentName:"p"},"iteratee()")," is called\nwith two arguments: ",(0,r.kt)("inlineCode",{parentName:"p"},"(element, index)"),"."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"iteratee")," returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," then it's awaited before a next call."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"iteratee")),": ",(0,r.kt)("a",{parentName:"li",href:"../typedefs/dataset-mapper",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"DatasetMapper"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[options]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Object")," - All ",(0,r.kt)("inlineCode",{parentName:"li"},"map()")," parameters are passed via an options object with the following keys:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[desc]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," ",(0,r.kt)("code",null," = false")," - If ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," then the objects are sorted by createdAt in descending order."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[fields]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Array<string>")," - If provided then returned objects will only contain specified keys"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[unwind]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - If provided then objects will be unwound based on provided field.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise<Array<object>>")),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"reduce"}),(0,r.kt)("h2",{id:"datasetreduceiteratee-memo-options"},(0,r.kt)("inlineCode",{parentName:"h2"},"dataset.reduce(iteratee, memo, [options])")),(0,r.kt)("p",null,"Reduces a list of values down to a single value."),(0,r.kt)("p",null,"Memo is the initial state of the reduction, and each successive step of it should be returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"iteratee()"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"iteratee()")," is passed three\narguments: the ",(0,r.kt)("inlineCode",{parentName:"p"},"memo"),", then the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," of the iteration."),(0,r.kt)("p",null,"If no ",(0,r.kt)("inlineCode",{parentName:"p"},"memo")," is passed to the initial invocation of reduce, the ",(0,r.kt)("inlineCode",{parentName:"p"},"iteratee()")," is not invoked on the first element of the list. The first element is\ninstead passed as the memo in the invocation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"iteratee()")," on the next element in the list."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"iteratee()")," returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," then it's awaited before a next call."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"iteratee")),": ",(0,r.kt)("a",{parentName:"li",href:"../typedefs/dataset-reducer",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"DatasetReducer"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"memo")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"object")," - Initial state of the reduction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[options]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Object")," - All ",(0,r.kt)("inlineCode",{parentName:"li"},"reduce()")," parameters are passed via an options object with the following keys:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[desc]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," ",(0,r.kt)("code",null," = false")," - If ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," then the objects are sorted by createdAt in descending order."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[fields]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Array<string>")," - If provided then returned objects will only contain specified keys"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[unwind]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - If provided then objects will be unwound based on provided field.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise<object>")),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"drop"}),(0,r.kt)("h2",{id:"datasetdrop"},(0,r.kt)("inlineCode",{parentName:"h2"},"dataset.drop()")),(0,r.kt)("p",null,"Removes the dataset either from the Apify cloud storage or from the local directory, depending on the mode of operation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,r.kt)("hr",null))}k.isMDXComponent=!0}}]);