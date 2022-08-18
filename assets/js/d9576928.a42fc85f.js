"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5852],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return r?a.createElement(h,i(i({ref:t},d),{},{components:r})):a.createElement(h,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},14959:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(39960),o=r(74477),i=r(52263);const l=function(e){var t=e.to,r=e.children,l=(0,o.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning?a.createElement(n.default,{to:"/api/"+t},r):a.createElement(n.default,{to:"/api/"+("current"===l.version?"next":l.version)+"/"+t},r)}},82155:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=r(14959),l=["components"],p={id:"docker-images",title:"Running in Docker"},s=void 0,d={unversionedId:"guides/docker-images",id:"guides/docker-images",title:"Running in Docker",description:"Running headless browsers in Docker requires a lot of setup to do it right. But you don't need to worry about that, because we already did it for you and created base images that you can freely use. We use them every day on the Apify Platform.",source:"@site/../docs/guides/docker_images.mdx",sourceDirName:"guides",slug:"/guides/docker-images",permalink:"/apify-sdk-js/docs/next/guides/docker-images",draft:!1,tags:[],version:"current",lastUpdatedBy:"Ondra Urban",lastUpdatedAt:1660825005,formattedLastUpdatedAt:"Aug 18, 2022",frontMatter:{id:"docker-images",title:"Running in Docker"},sidebar:"docs",previous:{title:"TypeScript Actors",permalink:"/apify-sdk-js/docs/next/guides/type-script-actor"},next:{title:"Examples",permalink:"/apify-sdk-js/docs/next/examples"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Example Dockerfile",id:"example-dockerfile",level:2},{value:"Versioning",id:"versioning",level:2},{value:"Node.js versioning",id:"nodejs-versioning",level:3},{value:"Automation library versioning",id:"automation-library-versioning",level:3},{value:"Pre-release tags",id:"pre-release-tags",level:3},{value:"Best practices",id:"best-practices",level:2},{value:"Warning about image size",id:"warning-about-image-size",level:3},{value:"actor-node",id:"actor-node",level:2},{value:"actor-node-puppeteer-chrome",id:"actor-node-puppeteer-chrome",level:2},{value:"actor-node-playwright",id:"actor-node-playwright",level:2},{value:"actor-node-playwright-chrome",id:"actor-node-playwright-chrome",level:2},{value:"actor-node-playwright-firefox",id:"actor-node-playwright-firefox",level:2},{value:"actor-node-playwright-webkit",id:"actor-node-playwright-webkit",level:2}],m={toc:c};function h(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Running headless browsers in Docker requires a lot of setup to do it right. But you don't need to worry about that, because we already did it for you and created base images that you can freely use. We use them every day on the ",(0,o.kt)("a",{parentName:"p",href:"/apify-sdk-js/docs/next/guides/apify-platform",target:null,rel:null},"Apify Platform"),"."),(0,o.kt)("p",null,"All images can be found in their ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-actor-docker",target:"_blank",rel:"noopener"},"GitHub repo")," and in our ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/orgs/apify",target:"_blank",rel:"noopener"},"DockerHub"),"."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Browsers are pretty big, so we try to provide a wide variety of images to suit your needs. Here's a full list of our Docker images."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#actor-node",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"apify/actor-node"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#actor-node-puppeteer-chrome",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"apify/actor-node-puppeteer-chrome"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#actor-node-playwright",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"apify/actor-node-playwright"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#actor-node-playwright-chrome",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"apify/actor-node-playwright-chrome"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#actor-node-playwright-firefox",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"apify/actor-node-playwright-firefox"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#actor-node-playwright-webkit",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"apify/actor-node-playwright-webkit")))),(0,o.kt)("h2",{id:"example-dockerfile"},"Example Dockerfile"),(0,o.kt)("p",null,"To use our images, you need a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder/",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Dockerfile")),". You can either use this example, or bootstrap your projects with the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/apify-cli",target:"_blank",rel:"noopener"},"Apify CLI")," which automatically copies the correct Dockerfile into your project folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},'# First, specify the base Docker image. You can read more about\n# the available images at https://sdk.apify.com/docs/guides/docker-images\n# You can also use any other image from Docker Hub.\n# The 16 represents the version of Node.js you want to use.\nFROM apify/actor-node:16\n\n# Second, copy just package.json and package-lock.json since it should be\n# the only file that affects "npm install" in the next step, to speed up the build\nCOPY package*.json ./\n\n# Install NPM packages, skip optional and development dependencies to\n# keep the image small. Avoid logging too much and print the dependency\n# tree for debugging\nRUN npm --quiet set progress=false \\\n && npm install --only=prod --no-optional \\\n && echo "Installed NPM packages:" \\\n && (npm list || true) \\\n && echo "Node.js version:" \\\n && node --version \\\n && echo "NPM version:" \\\n && npm --version\n\n# Next, copy the remaining files and directories with the source code.\n# Since we do this after NPM install, quick build will be really fast\n# for most source file changes.\nCOPY . ./\n\n# Optionally, specify how to launch the source code of your actor.\n# By default, Apify\'s base Docker images define the CMD instruction\n# that runs the Node.js source code using the command specified\n# in the "scripts.start" section of the package.json file.\n# In short, the instruction looks something like this:\n#\n# CMD npm start\n')),(0,o.kt)("h2",{id:"versioning"},"Versioning"),(0,o.kt)("p",null,"Each image is tagged with up to 2 version tags, depending on the type of the image. One for Node.js version and second for pre-installed web automation library version. If you use the image name without a version tag, you'll always get the latest available version."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We recommend always using at least the Node.js version tag in your production Dockerfiles. It will ensure that a future update of Node.js will not break your automations.")),(0,o.kt)("h3",{id:"nodejs-versioning"},"Node.js versioning"),(0,o.kt)("p",null,"Our images are built with multiple Node.js versions to ensure backwards compatibility. Currently, Node.js versions 14, 15 and 16 are supported. To select the preferred version, use the appropriate number as the image tag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"# Use Node.js 14\nFROM apify/actor-node:14\n# Use Node.js 16\nFROM apify/actor-node-playwright:16\n")),(0,o.kt)("h3",{id:"automation-library-versioning"},"Automation library versioning"),(0,o.kt)("p",null,"Images that include a pre-installed automation library, which means all images that include ",(0,o.kt)("inlineCode",{parentName:"p"},"puppeteer")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"playwright")," in their name,  are also tagged with the pre-installed version of the library. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome:16-8.0.0")," comes with Node.js 16 and Puppeteer v8.0.0. If you try to install a different version of Puppeteer into this image, you may run into compatibility issues, because the Chromium version bundled with ",(0,o.kt)("inlineCode",{parentName:"p"},"puppeteer")," will not match the version of Chrome we pre-installed."),(0,o.kt)("p",null,"Similarly ",(0,o.kt)("inlineCode",{parentName:"p"},"apify/actor-node-playwright-firefox:14-1.10.0")," runs on Node.js 14 and is pre-installed with the Firefox version that comes with v1.10.0."),(0,o.kt)("p",null,"Installing ",(0,o.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," (without a tag) will install the latest available version of Node.js and ",(0,o.kt)("inlineCode",{parentName:"p"},"puppeteer"),"."),(0,o.kt)("h3",{id:"pre-release-tags"},"Pre-release tags"),(0,o.kt)("p",null,"We also build pre-release versions of the images to test the changes we make. Those are typically denoted by a ",(0,o.kt)("inlineCode",{parentName:"p"},"beta")," suffix, but it can vary depending on our needs. If you need to try a pre-release version, you can do it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"# Without library version.\nFROM apify/actor-node:16-beta\n# With library version.\nFROM apify/actor-node-playwright-chrome:16-1.10.0-beta\n")),(0,o.kt)("h2",{id:"best-practices"},"Best practices"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Always")," use Node.js version tag."),(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("strong",{parentName:"li"},"added security"),", use the automation library version tag."),(0,o.kt)("li",{parentName:"ul"},"Use asterisk ",(0,o.kt)("inlineCode",{parentName:"li"},"*")," as the automation library version in your ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," files.")),(0,o.kt)("p",null,"It makes sure the pre-installed version of Puppeteer or Playwright is not reinstalled on build. This is important, because those libraries are only guaranteed to work with specific versions of browsers, and those browsers come pre-installed in the image."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM apify/actor-node-playwright-chrome:16\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "apify": "^1.2.0",\n        "playwright": "*"\n    }\n}\n')),(0,o.kt)("h3",{id:"warning-about-image-size"},"Warning about image size"),(0,o.kt)("p",null,"Browsers are huge. If you don't need them all in your image, it's better to use a smaller image with only the one browser you need."),(0,o.kt)("p",null,"Be careful when installing new dependencies. Nothing prevents you from installing Playwright into the",(0,o.kt)("inlineCode",{parentName:"p"},"actor-node-puppeteer-chrome")," image, but the resulting image will be about 3 times larger and extremely slow to download and build."),(0,o.kt)("p",null,"Use only what you need, and you'll be rewarded with reasonable build and start times."),(0,o.kt)("h2",{id:"actor-node"},"actor-node"),(0,o.kt)("p",null,"This is the smallest image we have based on Alpine Linux. It does not include any browsers, and it's therefore best used with ",(0,o.kt)(i.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")),". It benefits from lightning fast builds and container startups."),(0,o.kt)("p",null,"\u200b",(0,o.kt)(i.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")),", ",(0,o.kt)(i.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler"))," and other browser based features will ",(0,o.kt)("strong",{parentName:"p"},"NOT")," work with this image."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM apify/actor-node:16\n")),(0,o.kt)("h2",{id:"actor-node-puppeteer-chrome"},"actor-node-puppeteer-chrome"),(0,o.kt)("p",null,"This image includes Puppeteer (Chromium) and the Chrome browser. It can be used with ",(0,o.kt)(i.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"))," and ",(0,o.kt)(i.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")),", but ",(0,o.kt)("strong",{parentName:"p"},"NOT")," with ",(0,o.kt)(i.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")),"."),(0,o.kt)("p",null,"The image supports XVFB by default, so you can run both ",(0,o.kt)("inlineCode",{parentName:"p"},"headless")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"headful")," browsers with it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM apify/actor-node-puppeteer-chrome:16\n")),(0,o.kt)("h2",{id:"actor-node-playwright"},"actor-node-playwright"),(0,o.kt)("p",null,"A very large and slow image that can run all Playwright browsers: Chromium, Chrome, Firefox, WebKit. Everything is installed. If you need to develop or test with multiple browsers, this is the image to choose, but in most cases, we suggest using the specialized images below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM apify/actor-node-playwright:16\n")),(0,o.kt)("h2",{id:"actor-node-playwright-chrome"},"actor-node-playwright-chrome"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#actor-node-puppeteer-chrome",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"actor-node-puppeteer-chrome")),", but for Playwright. You can run ",(0,o.kt)(i.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"))," and ",(0,o.kt)(i.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")),", but ",(0,o.kt)("strong",{parentName:"p"},"NOT")," ",(0,o.kt)(i.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")),"."),(0,o.kt)("p",null,"It uses the ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/environment-variables/",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD"))," environment variable to block installation of more browsers into your images (to keep them small). If you want more browsers, either choose the ",(0,o.kt)("a",{parentName:"p",href:"#actor-node-playwright",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"actor-node-playwright"))," image or override this env var."),(0,o.kt)("p",null,"The image supports XVFB by default, so you can run both ",(0,o.kt)("inlineCode",{parentName:"p"},"headless")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"headful")," browsers with it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM apify/actor-node-playwright-chrome:16\n")),(0,o.kt)("h2",{id:"actor-node-playwright-firefox"},"actor-node-playwright-firefox"),(0,o.kt)("p",null,"Same idea as ",(0,o.kt)("a",{parentName:"p",href:"#actor-node-playwright-chrome",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"actor-node-playwright-chrome")),", but with Firefox\npre-installed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM apify/actor-node-playwright-firefox:16\n")),(0,o.kt)("h2",{id:"actor-node-playwright-webkit"},"actor-node-playwright-webkit"),(0,o.kt)("p",null,"Same idea as ",(0,o.kt)("a",{parentName:"p",href:"#actor-node-playwright-chrome",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"actor-node-playwright-chrome")),", but with WebKit\npre-installed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM apify/actor-node-playwright-webkit:16\n")))}h.isMDXComponent=!0}}]);