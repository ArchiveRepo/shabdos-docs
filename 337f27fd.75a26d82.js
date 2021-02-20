(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{128:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),l=p(a),u=n,h=l["".concat(o,".").concat(u)]||l[u]||d[u]||i;return a?r.a.createElement(h,s(s({ref:t},b),{},{components:a})):r.a.createElement(h,s({ref:t},b))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var b=2;b<i;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),i=(a(0),a(128)),o={title:"Installing or accessing Shabad OS Database",sidebar_label:"Installing or accessing"},s={unversionedId:"installing-or-accessing",id:"installing-or-accessing",isDocsHomePage:!1,title:"Installing or accessing Shabad OS Database",description:"There are 2 officially supported release formats (SQLite and npm), and a REST API provided by GurbaniNow",source:"@site/content/database/installing-or-accessing.md",slug:"/installing-or-accessing",permalink:"/database/installing-or-accessing",editUrl:"https://github.com/shabados/docs/edit/dev/content/database/installing-or-accessing.md",version:"current",lastUpdatedBy:"Bhajneet S.K",lastUpdatedAt:1613856281,sidebar_label:"Installing or accessing",sidebar:"databaseSidebar",previous:{title:"Source Material",permalink:"/database/source-material"},next:{title:"Overview",permalink:"/database/schema/overview"}},c=[{value:"SQLite",id:"sqlite",children:[]},{value:"npm",id:"npm",children:[]},{value:"GurbaniNow REST API",id:"gurbaninow-rest-api",children:[]}],b={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",{class:"lead"},"There are 2 officially supported release formats (",Object(i.b)("a",{href:"https://github.com/ShabadOS/database/releases"},"SQLite")," and ",Object(i.b)("a",{href:"https://www.npmjs.com/package/@shabados/database"},"npm"),"), and a REST API provided by ",Object(i.b)("a",{href:"https://github.com/GurbaniNow/api"},"GurbaniNow")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Please refrain from modify any existing content of the database. If there is a mistake, please file an issue for any specific line using the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://viewer.shabados.com/"}),"Shabad OS Viewer")," (use the menu button on any line) or more generally at ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/shabados/database/issues"}),"GitHub"),"."),Object(i.b)("p",{parentName:"div"},"The only exception to this rule is that tables or data that you do not require may be dropped entirely to save storage space in constrained environments."))),Object(i.b)("h2",{id:"sqlite"},"SQLite"),Object(i.b)("p",null,"Our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ShabadOS/database/releases"}),"GitHub Releases")," contain the latest SQLite3 database releases. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"schema/overview"}),"Read about the schema used >")),Object(i.b)("p",null,"These releases follow ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://semver.org/"}),"semantic versioning"),", so it is possible to download databases with content additions and fixes without breaking your application."),Object(i.b)("p",null,"Running ",Object(i.b)("inlineCode",{parentName:"p"},"SELECT * FROM Lines ORDER BY order_id LIMIT 100")," will return the first 100 lines that the database contains, in the correct order. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"usage/queries"}),"See more example queries >")),Object(i.b)("h2",{id:"npm"},"npm"),Object(i.b)("p",null,"The database is packaged as an npm module ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@shabados/database"}),"@shabados/database"),". To install it, run ",Object(i.b)("inlineCode",{parentName:"p"},"npm install @shabados/database"),". Importing the package will give you access to the location of the database."),Object(i.b)("p",null,"This package uses the same ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://semver.org/"}),"semantic versioning")," format as the SQLite database, so running ",Object(i.b)("inlineCode",{parentName:"p"},"npm update")," will allow you to retrieve compatible database corrections without breaking your application. Additionally, there is a JavaScript API that can be imported from the package, allowing you to leverage the database using wrapper functions, without the need to write SQL. ","[Check out the JavaScript wrapper functions >]"),Object(i.b)("h2",{id:"gurbaninow-rest-api"},"GurbaniNow REST API"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://gurbaniNow.com"}),"GurbaniNow")," has teamed up with Shabad OS to provide the most accurate, accessible, and transparent Gurbani database. GurbaniNow's latest ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://api.gurbaninow.com"}),"API endpoint")," is powered by the Shabad OS database, for those who wish to access Gurbani through an online REST interface. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/GurbaniNow/api"}),"See their GitHub repo for API Documentation >")))}p.isMDXComponent=!0}}]);