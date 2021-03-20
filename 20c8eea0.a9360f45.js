(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{125:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return u}));var i=a(3),r=a(8),n=(a(0),a(129)),o=a.p+"assets/images/proofreading-difference-example-browser-b7e098cb7e354446b627d36bcae55753.png",c=a.p+"assets/images/proofreading-difference-example-pdf-eae4ea3861d7620a1997896746686454.png",s=a.p+"assets/images/proofreading-example-insert-cursor-gh-issue-8ce583c89814f260aebcfbf0171f018d.png",b=a.p+"assets/images/proofreading-example-paste-image-gh-issue-c55c14eadde62dcc449194b2e99ecd47.png",d={title:"Proofreading"},l={unversionedId:"viewer/proofreading",id:"viewer/proofreading",isDocsHomePage:!1,title:"Proofreading",description:"This tutorial is for users that would like to learn how to improve the digital accuracy of the Shabad OS database. This tutorial will show how to proofread and publicly log differences between different sources and the Shabad OS database.",source:"@site/content/tutorials/viewer/proofreading.md",slug:"/viewer/proofreading",permalink:"/tutorials/viewer/proofreading",editUrl:"https://github.com/shabados/docs/edit/dev/content/tutorials/viewer/proofreading.md",version:"current",lastUpdatedBy:"Saihajpreet Singh",lastUpdatedAt:1616255223,sidebar:"tutorialsSidebar",previous:{title:"Tutorials",permalink:"/tutorials/"},next:{title:"Overlay",permalink:"/tutorials/overlay"}},p=[{value:"Concept",id:"concept",children:[]},{value:"Practical",id:"practical",children:[{value:"Checklist",id:"checklist",children:[]},{value:"View the Proof",id:"view-the-proof",children:[]},{value:"Use the Database Viewer",id:"use-the-database-viewer",children:[]},{value:"Use GitHub",id:"use-github",children:[]},{value:"Compare the Database and the Proof",id:"compare-the-database-and-the-proof",children:[]},{value:"Open an Issue (Reference Ticket)",id:"open-an-issue-reference-ticket",children:[]}]}],h={toc:p};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"This tutorial is for users that would like to learn how to improve the digital accuracy of the Shabad OS database. This tutorial will show how to proofread and publicly log differences between different sources and the Shabad OS database."),Object(n.b)("h2",{id:"concept"},"Concept"),Object(n.b)("p",null,"The Shabad OS database contains bani (hymns) from the Sikh Gurus and various writers of the time and place. Upon this there are translations, expositions, and descriptions from various authors whose work is potentially copyrighted."),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"Our proofreading effort is to accurately capture these works as they were written without modification."))),Object(n.b)("p",null,'It is difficult to choose one "correct version" with multiple saroops of Sri Guru Granth Sahib ji having slight differences from one another. As such we are currently logging these differences and setting a "basic truth" upon which future discussions can take place.'),Object(n.b)("p",null,"The Shabad OS ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://database.shabados.com"}),"database viewer")," helps submit differences between bani that is digitally stored and physically printed or electronically published."),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"Proofreaders cannot change the Shabad OS database."),Object(n.b)("ul",{parentName:"div"},Object(n.b)("li",{parentName:"ul"},"Proofreaders can create issues (i.e. reference tickets)"),Object(n.b)("li",{parentName:"ul"},"Proofreaders can take zero responsibility to fact check sources."),Object(n.b)("li",{parentName:"ul"},"Proofreaders can easily compare two passages.")),Object(n.b)("p",{parentName:"div"},"Proofreaders cannot modify bani \u2014 whether accidentally or maliciously. Proofreaders cannot spoof sources \u2014 images and publishing details of sources are required. Proofreaders cannot act alone \u2014 our process requires a second, trusted party to verify and enact changes."))),Object(n.b)("p",null,"Anyone can note deviations between two passages, safely and easily, helping improve the accuracy of Shabad OS."),Object(n.b)("h2",{id:"practical"},"Practical"),Object(n.b)("h3",{id:"checklist"},"Checklist"),Object(n.b)("p",null,"To proofread, you need two things:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Source (e.g. PDF of Sri Guru Granth Sahib published on SGPC's website). Here are some ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/ShabadOS/database-viewer#proofs-for-bani"}),"proofs")," that can be used as a source."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/join"}),"GitHub account"),".")),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"Any verifiable source can be used if given proper attribution of it's publishing. (i.e. edition, author, publisher, website origin, etc)."))),Object(n.b)("h3",{id:"view-the-proof"},"View the Proof"),Object(n.b)("p",null,'We are calling, for example, the PDF document consisting of physical page images showing what was actually published in print a "proof". For this example tutorial we will use ',Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"http://sikhbookclub.com/Book/Kabit-Sawaiye-Bhai-Gurdas-Ji-Steek3"}),"Kabit Sawaiye Bhai Gurdas Ji Steek 3"),"."),Object(n.b)("h3",{id:"use-the-database-viewer"},"Use the Database Viewer"),Object(n.b)("p",null,"The database viewer shows what is digitally saved and is shown on projectors or mobile phones with Shabad OS. Conversion mistakes caused by human error or computer OCR (optical character recognition) are some of the reasons we must do proofreading. The goal is to make sure the digital version is accurate."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Go to ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://database.shabados.com"}),"https://database.shabados.com"),"."),Object(n.b)("li",{parentName:"ol"},'Click on "Kabit Savaiye Bhai Gurdaas Jee".'),Object(n.b)("li",{parentName:"ol"},'Use the left and right arrows or the "seekbar/trackbar" at the bottom of the page to choose a "page" or, in this case, a kabit pauri.'),Object(n.b)("li",{parentName:"ol"},"Use the ",Object(n.b)("inlineCode",{parentName:"li"},"<Tab>")," key to highlight the next line, and ",Object(n.b)("inlineCode",{parentName:"li"},"<Shift+Tab>")," to highlight the previous line."),Object(n.b)("li",{parentName:"ol"},"Click a line (or hit enter) to open an issue on GitHub.")),Object(n.b)("h3",{id:"use-github"},"Use GitHub"),Object(n.b)("p",null,"As you can see from the last step, we use GitHub to submit any proofreading differences. See an ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ShabadOS/database/issues/1218"}),"example issue"),"."),Object(n.b)("p",null,"In this example there is a link to the database viewer and an image of the physical proof. This lets others see how the bani is digitally displayed in Shabad OS and also see what is physically printed in the published volume."),Object(n.b)("p",null,"Furthermore, the image of the physical proof highlights the relevant area to help others quickly spot the difference. And captures the page number and contextual bani to help others fact check the proof with other printed sources."),Object(n.b)("h3",{id:"compare-the-database-and-the-proof"},"Compare the Database and the Proof"),Object(n.b)("p",null,"It may help to dock both the web browser containing the database viewer and the pdf reader containing the proof on both halves of your screen."),Object(n.b)("h3",{id:"open-an-issue-reference-ticket"},"Open an Issue (Reference Ticket)"),Object(n.b)("p",null,"The short version is to document any differences and open an issue on GitHub for reference. Here is an example difference spotted between the database (browser) and the proof (PDF reader)."),Object(n.b)("img",{alt:"Example of line not matching in browser",src:o,width:"500"}),Object(n.b)("img",{alt:"Example of line not matching in PDF reader",src:c,width:"500"}),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Take a screenshot of the PDF reader containing the printed page number and difference.")),Object(n.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(n.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"Windows 10 users can open \u201cSnip & Sketch\u201d from the start menu or with the Win+Shift+S hotkey to capture images. See ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://support.microsoft.com/en-us/help/4488540"}),"\u200bhere\u200b")," for more help."))),Object(n.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(n.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"macOS users can read ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://support.apple.com/en-us/HT201361"}),"this\u200b")," article to get help on capturing images."))),Object(n.b)("ol",{start:2},Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click the thumbnail of the screenshot which briefly appears in the corner of your screen.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Highlight the difference.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Copy the marked up image."),Object(n.b)("img",{alt:"The copy button in Snip & Sketch for Windows 10",src:"data:image/png;base64,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",width:"200"})),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"In the database viewer (Figure 1), click the highlighted line or hit enter.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click the last empty line in the textbox (after the words \u200b",Object(n.b)("em",{parentName:"p"},"Add details & attach image(s) below"),"), so that the blinking text cursor is at the very end."),Object(n.b)("img",{src:s,width:500})),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Paste the marked up image."),Object(n.b)("img",{src:b,width:500})),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},'Click the green button "Submit new issue".'))))}u.isMDXComponent=!0},129:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var i=a(0),r=a.n(i);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=d(a),h=i,u=l["".concat(o,".").concat(h)]||l[h]||p[h]||n;return a?r.a.createElement(u,c(c({ref:t},b),{},{components:a})):r.a.createElement(u,c({ref:t},b))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var b=2;b<n;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);