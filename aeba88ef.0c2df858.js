(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{102:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(3),i=t(8),r=(t(0),t(128)),s={title:"Common SQL Query Examples",sidebar_label:"SQLite Querying"},o={unversionedId:"usage/queries",id:"usage/queries",isDocsHomePage:!1,title:"Common SQL Query Examples",description:"This section provides examples of common queries that you may wish to run to retrieve data.",source:"@site/content/database/usage/queries.md",slug:"/usage/queries",permalink:"/database/usage/queries",editUrl:"https://github.com/shabados/docs/edit/dev/content/database/usage/queries.md",version:"current",lastUpdatedBy:"Saihajpreet Singh",lastUpdatedAt:1613855763,sidebar_label:"SQLite Querying",sidebar:"databaseSidebar",previous:{title:"Overview",permalink:"/database/usage"}},l=[{value:"Given any Shabad ID (from any Composition), retrieve the possible Translations",id:"given-any-shabad-id-from-any-composition-retrieve-the-possible-translations",children:[]},{value:"Given any Shabad ID (from any Composition and every Source), retrieve the English Transliterations",id:"given-any-shabad-id-from-any-composition-and-every-source-retrieve-the-english-transliterations",children:[]}],c={toc:l};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section provides examples of common queries that you may wish to run to retrieve data."),Object(r.b)("p",null,"The queries below correspond to the latest version of the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/shabados/database/releases/latest"}),"SQLite Database"),"."),Object(r.b)("p",null,"These can be implemented in the programming language of choice, or alternatively executed using a database viewer such as ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://dbeaver.io/"}),"DBeaver"),"."),Object(r.b)("h4",{id:"given-some-first-letters-retrieve-any-matching-lines"},"Given some first letters, retrieve any matching Lines"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM lines\nJOIN line_content ON line_content.line_id = lines.id\nWHERE line_content.first_letters LIKE '%hhhh%'\nORDER BY order_id\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"hhhh")," is starting letters of the first 4 words in the line."),Object(r.b)("h4",{id:"given-a-shabad-id-retrieve-the-lines"},"Given a Shabad ID, retrieve the Lines"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM lines WHERE shabad_id = '9N9' ORDER BY order_id\n")),Object(r.b)("h4",{id:"given-a-composition-retrieve-all-the-translation-sources-with-languages-and-author-names"},"Given a Composition, retrieve all the Translation Sources, with Languages and Author Names"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM compositions\nJOIN translation_sources ON translation_sources.composition_id = compositions.id\nJOIN languages ON languages.id = translation_sources.language_id\nWHERE composition_id= 1\n")),Object(r.b)("h3",{id:"given-any-shabad-id-from-any-composition-retrieve-the-possible-translations"},"Given any Shabad ID (from any Composition), retrieve the possible Translations"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM lines\nJOIN shabads ON shabads.id = lines.shabad_id\nJOIN translations ON lines.id = translations.line_id\nWHERE shabad_id = 'W9Z'\nORDER BY lines.order_id\n")),Object(r.b)("h3",{id:"given-any-shabad-id-from-any-composition-and-every-source-retrieve-the-english-transliterations"},"Given any Shabad ID (from any Composition and every Source), retrieve the English Transliterations"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM lines\nJOIN shabads ON shabads.id = lines.shabad_id\nJOIN transliterations ON lines.id = transliterations.line_id\nJOIN languages ON languages.id = transliterations.language_id\nWHERE shabad_id = 'W9Z' AND languages.name_english = 'English'\nORDER BY lines.order_id\n")),Object(r.b)("h4",{id:"given-some-lines-retrieve-the-dr-sant-singh-khalsa-english-translations"},"Given some Lines, retrieve the Dr. Sant Singh Khalsa English Translations"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM lines\nJOIN translations ON lines.id = translations.line_id\nJOIN translation_sources ON translation_sources.id = translations.translation_source_id\nWHERE shabad_id = 'W9Z'\nAND translation_sources.name_english = 'Dr. Sant Singh Khalsa'\nORDER BY order_id\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," it is preferable to select a translation source by its ",Object(r.b)("inlineCode",{parentName:"p"},"id"),", than a text value, unlike the example above, since text values can change."),Object(r.b)("h4",{id:"fetch-all-the-lines-for-a-given-bani-using-sgpc"},"Fetch all the Lines for a given Bani using SGPC"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM lines\nJOIN bani_lines ON bani_lines.line_id = lines.id\nJOIN line_content ON line_content.line_id = lines.id\nWHERE bani_lines.bani_id = 1 AND line_content.source_id = 1\nORDER BY order_id\n")),Object(r.b)("p",null,"Fetch a list of Banis and their corresponding ",Object(r.b)("inlineCode",{parentName:"p"},"id"),"s with ",Object(r.b)("inlineCode",{parentName:"p"},"SELECT * FROM banis"),"."),Object(r.b)("h4",{id:"fetch-all-the-shabads-for-a-given-writer"},"Fetch all the Shabads for a given Writer"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM lines\nJOIN shabads ON shabads.id = lines.shabad_id\nWHERE writer_id = 3\n")),Object(r.b)("p",null,"Fetch a list of writers and their ",Object(r.b)("inlineCode",{parentName:"p"},"id"),"s with ",Object(r.b)("inlineCode",{parentName:"p"},"SELECT * FROM writers"),"."),Object(r.b)("h4",{id:"fetch-all-sections-and-subsections-for-all-sources"},"Fetch all Sections and Subsections for all Sources"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM compositions\nJOIN sections ON sections.composition_id = compositions.id\nJOIN subsections ON subsections.section_id = sections.id\n")))}b.isMDXComponent=!0},128:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),b=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=b(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=b(t),p=a,h=d["".concat(s,".").concat(p)]||d[p]||u[p]||r;return t?i.a.createElement(h,o(o({ref:n},c),{},{components:t})):i.a.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);