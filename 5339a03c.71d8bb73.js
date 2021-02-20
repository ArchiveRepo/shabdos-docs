(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),u=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,O=p["".concat(b,".").concat(d)]||p[d]||s[d]||c;return n?a.a.createElement(O,i(i({ref:t},o),{},{components:n})):a.a.createElement(O,i({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,b[1]=i;for(var o=2;o<c;o++)b[o]=n[o];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),c=(n(0),n(128)),b={title:"Line_Content"},i={unversionedId:"schema/line_content",id:"schema/line_content",isDocsHomePage:!1,title:"Line_Content",description:"The Line_Content table contains the content for Lines of Sources. This exists to support the different Sources of the same line.",source:"@site/content/database/schema/line_content.md",slug:"/schema/line_content",permalink:"/database/schema/line_content",editUrl:"https://github.com/shabados/docs/edit/dev/content/database/schema/line_content.md",version:"current",lastUpdatedBy:"Saihajpreet Singh",lastUpdatedAt:1613855763,sidebar:"databaseSidebar",previous:{title:"Sources",permalink:"/database/schema/sources"},next:{title:"Line_Types",permalink:"/database/schema/line_types"}},l=[{value:"Columns",id:"columns",children:[{value:"<code>line_id</code>",id:"line_id",children:[]},{value:"<code>source_id</code>",id:"source_id",children:[]},{value:"<code>gurmukhi</code>",id:"gurmukhi",children:[]},{value:"<code>first_letters</code>",id:"first_letters",children:[]}]}],o={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"Line_Content")," table contains the content for ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"lines"}),"Lines")," of ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"sources"}),"Sources"),". This exists to support the different Sources of the same line."),Object(c.b)("h2",{id:"columns"},"Columns"),Object(c.b)("h3",{id:"line_id"},Object(c.b)("inlineCode",{parentName:"h3"},"line_id")),Object(c.b)("p",null,"The unique identifier of the line."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"char(4)"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Primary Key, ",Object(c.b)("br",null)," Foreign Key (",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"lines#id"}),"Lines.id"),")")))),Object(c.b)("h3",{id:"source_id"},Object(c.b)("inlineCode",{parentName:"h3"},"source_id")),Object(c.b)("p",null,"The unique identifier of the source."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"integer"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Primary, ",Object(c.b)("br",null)," Foreign Key (",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"sources"}),"Sources"),") Key")))),Object(c.b)("h3",{id:"gurmukhi"},Object(c.b)("inlineCode",{parentName:"h3"},"gurmukhi")),Object(c.b)("p",null,"The line, stored as a compatible ASCII Gurmukhi font."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"text"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Not Null")))),Object(c.b)("h3",{id:"first_letters"},Object(c.b)("inlineCode",{parentName:"h3"},"first_letters")),Object(c.b)("p",null,"The first letters of each word in the ",Object(c.b)("inlineCode",{parentName:"p"},"gurmukhi")," line, useful for searching the database by first letter."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"text"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Not Null")))))}u.isMDXComponent=!0}}]);