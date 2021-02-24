(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),c=(n(0),n(128)),i={title:"Sources"},l={unversionedId:"schema/sources",id:"schema/sources",isDocsHomePage:!1,title:"Sources",description:"The Sources table provides a list of published source materials used in the database (e.g. SGPC, Budha Dal Mehron).",source:"@site/content/database/schema/sources.md",slug:"/schema/sources",permalink:"/database/schema/sources",editUrl:"https://github.com/shabados/docs/edit/dev/content/database/schema/sources.md",version:"current",lastUpdatedBy:"Bhajneet S.K",lastUpdatedAt:1613850890,sidebar:"databaseSidebar",previous:{title:"Lines",permalink:"/database/schema/lines"},next:{title:"Line_Content",permalink:"/database/schema/line_content"}},b=[{value:"Columns",id:"columns",children:[{value:"<code>id</code>",id:"id",children:[]},{value:"<code>name_english</code>",id:"name_english",children:[]},{value:"<code>name_gurmukhi</code>",id:"name_gurmukhi",children:[]}]}],o={toc:b};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"Sources")," table provides a list of published source materials used in the database (e.g. ",Object(c.b)("inlineCode",{parentName:"p"},"SGPC"),", ",Object(c.b)("inlineCode",{parentName:"p"},"Budha Dal Mehron"),")."),Object(c.b)("p",null,"It is possible to have multiple ",Object(c.b)("inlineCode",{parentName:"p"},"Sources")," for the same ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"lines"}),Object(c.b)("inlineCode",{parentName:"a"},"Lines")),", since it is possible for the same line to vary slightly between source materials. This allows comparing different, but widely authenticated, publications for the same composition."),Object(c.b)("p",null,"Use this to select which Gurbani source that ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"lines"}),Object(c.b)("inlineCode",{parentName:"a"},"Lines"))," will be displayed from."),Object(c.b)("h2",{id:"columns"},"Columns"),Object(c.b)("h3",{id:"id"},Object(c.b)("inlineCode",{parentName:"h3"},"id")),Object(c.b)("p",null,"The unique identifier of the source."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Primary Key")))),Object(c.b)("h3",{id:"name_english"},Object(c.b)("inlineCode",{parentName:"h3"},"name_english")),Object(c.b)("p",null,"The name of the source, in English."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"text"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Not Null")))),Object(c.b)("h3",{id:"name_gurmukhi"},Object(c.b)("inlineCode",{parentName:"h3"},"name_gurmukhi")),Object(c.b)("p",null,"The name of the source, in Gurmukhi, ASCII representation."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"text"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Not Null")))))}s.isMDXComponent=!0},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||c;return n?r.a.createElement(m,l(l({ref:t},o),{},{components:n})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<c;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);