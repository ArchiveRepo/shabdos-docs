(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{108:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(8),b=(a(0),a(128)),i={title:"Lines"},l={unversionedId:"schema/lines",id:"schema/lines",isDocsHomePage:!1,title:"Lines",description:"The Lines table contains all the Sikh bani and panthic content, across all sources.",source:"@site/content/database/schema/lines.md",slug:"/schema/lines",permalink:"/database/schema/lines",editUrl:"https://github.com/shabados/docs/edit/dev/content/database/schema/lines.md",version:"current",lastUpdatedBy:"Saihajpreet Singh",lastUpdatedAt:1613855763,sidebar:"databaseSidebar",previous:{title:"Overview",permalink:"/database/schema/overview"},next:{title:"Sources",permalink:"/database/schema/sources"}},c=[{value:"Columns",id:"columns",children:[{value:"<code>id</code>",id:"id",children:[]},{value:"<code>shabad_id</code>",id:"shabad_id",children:[]},{value:"<code>source_page</code>",id:"source_page",children:[]},{value:"<code>source_line</code>",id:"source_line",children:[]},{value:"<code>pronunciation</code>",id:"pronunciation",children:[]},{value:"<code>pronunciation_information</code>",id:"pronunciation_information",children:[]},{value:"<code>first_letters</code>",id:"first_letters",children:[]},{value:"<code>vishraam_first_letters</code>",id:"vishraam_first_letters",children:[]},{value:"<code>type_id</code>",id:"type_id",children:[]},{value:"<code>order_id</code>",id:"order_id",children:[]}]}],o={toc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"Lines")," table contains all the Sikh bani and panthic content, across all sources."),Object(b.b)("p",null,"Many lines must belong to one ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"shabads"}),"Shabad"),"."),Object(b.b)("p",null,"The content is unordered by default, and must be ordered by ",Object(b.b)("inlineCode",{parentName:"p"},"order_id"),". The ",Object(b.b)("inlineCode",{parentName:"p"},"id")," is a four-letter, immutable identifier that will refer to the same line across database versions."),Object(b.b)("p",null,"Currently, the ",Object(b.b)("inlineCode",{parentName:"p"},"gurmukhi")," stores an ASCII representation of Gurbani. They may be converted to unicode with ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"../../gurmukhi-utils"}),Object(b.b)("inlineCode",{parentName:"a"},"gurmukhi-utils")),"."),Object(b.b)("h2",{id:"columns"},"Columns"),Object(b.b)("h3",{id:"id"},Object(b.b)("inlineCode",{parentName:"h3"},"id")),Object(b.b)("p",null,"A unique identifier for the line which never changes."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"char(4)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Primary Key")))),Object(b.b)("h3",{id:"shabad_id"},Object(b.b)("inlineCode",{parentName:"h3"},"shabad_id")),Object(b.b)("p",null,"A unique identifier of the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"shabads"}),"Shabad")," to which the line belongs to."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"char(3)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Foreign Key (",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"shabads#id"}),"Shabads.id"),") ",Object(b.b)("br",null)," Not Null")))),Object(b.b)("h3",{id:"source_page"},Object(b.b)("inlineCode",{parentName:"h3"},"source_page")),Object(b.b)("p",null,'The physical "page" (e.g. ',Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wiktionary.org/wiki/%E0%A8%85%E0%A9%B0%E0%A8%97"}),"\u0a05\u0a70\u0a17"),") where the line appears within the source composition."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not Null")))),Object(b.b)("h3",{id:"source_line"},Object(b.b)("inlineCode",{parentName:"h3"},"source_line")),Object(b.b)("p",null,'The physical "line" (i.e. of horizontal lines on "page", not of sentence count) where the line appears within the source composition.'),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None")))),Object(b.b)("h3",{id:"pronunciation"},Object(b.b)("inlineCode",{parentName:"h3"},"pronunciation")),Object(b.b)("p",null,"Guidelines around pronouncing the Gurbani line stored in the ",Object(b.b)("inlineCode",{parentName:"p"},"gurmukhi")," field, correctly."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None")))),Object(b.b)("h3",{id:"pronunciation_information"},Object(b.b)("inlineCode",{parentName:"h3"},"pronunciation_information")),Object(b.b)("p",null,"Additional footnotes about the ",Object(b.b)("inlineCode",{parentName:"p"},"pronunciation")," guidelines."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None")))),Object(b.b)("h3",{id:"first_letters"},Object(b.b)("inlineCode",{parentName:"h3"},"first_letters")),Object(b.b)("p",null,"The first letters of each word in the ",Object(b.b)("inlineCode",{parentName:"p"},"gurmukhi")," line, useful for searching the database by first letter."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not Null")))),Object(b.b)("h3",{id:"vishraam_first_letters"},Object(b.b)("inlineCode",{parentName:"h3"},"vishraam_first_letters")),Object(b.b)("p",null,"Same as ",Object(b.b)("inlineCode",{parentName:"p"},"first_letters"),", but includes heavy vishraams. Useful for prioritizing search results."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not Null")))),Object(b.b)("h3",{id:"type_id"},Object(b.b)("inlineCode",{parentName:"h3"},"type_id")),Object(b.b)("p",null,"The unique identifier of the line type."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Foreign Key (",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"line_types"}),"Line_Types"),")")))),Object(b.b)("h3",{id:"order_id"},Object(b.b)("inlineCode",{parentName:"h3"},"order_id")),Object(b.b)("p",null,"The correct order of the line. Order by this field to fetch the lines in the correct order."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Constraints"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None")))))}d.isMDXComponent=!0},128:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,j=p["".concat(i,".").concat(u)]||p[u]||O[u]||b;return a?r.a.createElement(j,l(l({ref:t},o),{},{components:a})):r.a.createElement(j,l({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<b;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);