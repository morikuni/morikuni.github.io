(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{108:function(e,n,t){e.exports=t(368)},109:function(e,n,t){},368:function(e,n,t){"use strict";t.r(n);t(109);var r=t(1),a=t.n(r),l=t(29),c=t(10),o=t(8),u=t(9),i="1.6em";function s(){var e=Object(o.a)(["\n  color: black;\n  &:visited {\n    color: black; \n  }\n  \n  &:hover {\n    color: rgb(250, 180, 180);\n    text-decoration: underline;\n  }\n"]);return s=function(){return e},e}function d(){var e=Object(o.a)(["\n  font-size: 1.5em;\n  padding: 10px 10px;\n  border-left: 5px solid hsl(0, 0%, 20%);\n"]);return d=function(){return e},e}function f(){var e=Object(o.a)(["\n  list-style: none;\n"]);return f=function(){return e},e}function m(){var e=Object(o.a)(["\n  font-size: ",";\n"]);return m=function(){return e},e}function p(){var e=Object(o.a)(["\n  padding: 0;\n  margin: 0;\n"]);return p=function(){return e},e}var v,h,E=u.a.ul(p()),g=u.a.h1(m(),i),b=function(e){return a.a.createElement("div",null,a.a.createElement(g,null,"\u8a18\u4e8b\u4e00\u89a7"),a.a.createElement(E,null,e.articles.map((function(e){return a.a.createElement(w,{key:e.id,article:e})}))))},x=u.a.li(f()),y=u.a.h1(d()),k=u.a.span(s()),w=function(e){return a.a.createElement(x,null,a.a.createElement(l.b,{to:"/articles/".concat(e.article.id),style:{textDecoration:"none"}},a.a.createElement(k,null,a.a.createElement(y,null,e.article.title))))},j=t(22);function O(){var e=Object(o.a)(["\n    query ListArticles {\n  articles {\n    id\n    title\n    publishedAt\n  }\n}\n    "]);return O=function(){return e},e}function L(){var e=Object(o.a)(["\n    query GetArticle($id: String!) {\n  article(id: $id) {\n    id\n    title\n    publishedAt\n    contents {\n      type\n      texts {\n        type\n        text\n        url\n      }\n      level\n      language\n    }\n  }\n}\n    "]);return L=function(){return e},e}!function(e){e.Header="Header",e.Paragraph="Paragraph",e.CodeBlock="CodeBlock",e.List="List",e.Quote="Quote"}(v||(v={})),function(e){e.Text="Text",e.Code="Code",e.Link="Link",e.Image="Image"}(h||(h={}));var A=Object(j.gql)(L());var z=Object(j.gql)(O());var C=function(e){var n,t,r=(n={errorPolicy:"all"},j.useQuery(z,n)),l=r.loading,c=r.error,o=r.data;return l?a.a.createElement("span",null,"Loading..."):null!=c?a.a.createElement("div",null,"Error:",null===(t=c.networkError)||void 0===t?void 0:t.message,c.graphQLErrors.map((function(e,n){var t=e.message;return a.a.createElement("span",{key:n},t)}))):null!=o&&o.articles?a.a.createElement("div",null,a.a.createElement(b,{articles:o.articles})):a.a.createElement("div",null,"something wrong")},P=t(50),Q=t(370);function q(){var e=Object(o.a)(["\n  border-left: 5px solid hsl(0, 0%, 80%);\n  padding: 3px 10px;\n  font-size: 1.2em;\n"]);return q=function(){return e},e}function I(){var e=Object(o.a)(["\n  border-left: 5px solid hsl(0, 0%, 60%);\n  padding: 3px 10px;\n  font-size: 1.3em;\n"]);return I=function(){return e},e}function M(){var e=Object(o.a)(["\n  border-left: 5px solid hsl(0, 0%, 40%);\n  padding: 3px 10px;\n  font-size: 1.4em;\n"]);return M=function(){return e},e}function S(){var e=Object(o.a)(["\n  max-width: 80%;\n  display: block;\n  margin: 0 auto;\n"]);return S=function(){return e},e}function B(){var e=Object(o.a)(["\n  color: rgb(150, 150, 250);\n  text-decoration: none;\n  \n  &:visited {\n    color: rgb(150, 150, 250);\n  }\n  \n  &:hover {\n    color: rgb(250, 180, 180);\n    text-decoration: underline;\n  }\n"]);return B=function(){return e},e}function D(){var e=Object(o.a)(['\n  background: rgb(245, 242, 240);\n  margin: auto 3px; \n  padding: 2px 7px; \n  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;\n  font-size: 0.8em;\n  font-weight: bold;\n']);return D=function(){return e},e}function H(){var e=Object(o.a)(["\n  background: hsl(0, 0%, 95%);\n  padding: 10px;\n  font-style: italic;\n  box-shadow: 1px 1px 5px hsla(0, 0%, 0%, 0.1);\n  border-left: 5px solid hsl(0, 0%, 60%);\n}\n"]);return H=function(){return e},e}function N(){var e=Object(o.a)(["\n  text-align: right;\n  color: hsl(0, 0%, 60%);\n"]);return N=function(){return e},e}function T(){var e=Object(o.a)(["\n  font-size: ",";\n  padding: 10px 10px;\n  border-left: 5px solid hsl(0, 0%, 20%);\n"]);return T=function(){return e},e}var $=u.a.h1(T(),i),F=u.a.div(N()),G=function(e){return a.a.createElement("div",null,a.a.createElement($,null,e.data.title),a.a.createElement(F,null,new Date(1e3*e.data.publishedAt).toLocaleDateString()),J(e.data.contents))},J=function(e){for(var n=new Array;e.length>0;){var t=_(e),r=Object(P.a)(t,2),l=r[0],c=r[1];n.push(a.a.createElement("div",{key:n.length},l)),e=c}return a.a.createElement("div",null,n)},X=u.a.blockquote(H()),_=function(e){var n=e[0];if(null==n)throw new Error("head is empty");switch(n.type){case v.Header:return[ee(n),e.slice(1)];case v.Paragraph:return[a.a.createElement("p",null,V(n.texts)),e.slice(1)];case v.CodeBlock:return[a.a.createElement(Q.a,{language:n.language,showLineNumbers:!0,customStyle:{fontSize:"0.8em"}},n.texts[0].text.replace(/\n$/g,"")),e.slice(1)];case v.List:return ne(e);case v.Quote:return[a.a.createElement(X,null,V(n.texts)),e.slice(1)];default:return[a.a.createElement("div",null,V(n.texts)),e.slice(1)]}},U=u.a.code(D()),K=u.a.a(B()),R=u.a.img(S()),V=function(e){return e.flatMap((function(e,n){switch(e.type){case h.Text:return e.text.split("\n").map((function(e,t){return a.a.createElement("span",{key:n+"-"+t},e)}));case h.Code:return a.a.createElement(U,{key:n},e.text);case h.Link:return a.a.createElement(K,{key:n,href:e.url},e.text);case h.Image:return a.a.createElement(R,{key:n,src:e.url,alt:e.text});default:throw new Error("unknown text type: ".concat(e.type))}}))},W=u.a.h2(M()),Y=u.a.h3(I()),Z=u.a.h4(q()),ee=function(e){if(null==e.level)throw new Error("empty header level");var n=V(e.texts);switch(e.level){case 1:return a.a.createElement(W,null,n);case 2:return a.a.createElement(Y,null,n);case 3:return a.a.createElement(Z,null,n);default:throw new Error("unsupported header level: ".concat(e.level))}},ne=function(e){var n=e.findIndex((function(e){return e.type!==v.List})),t=e.slice(0,n),r=te(1,t);return[Object(P.a)(r,1)[0],e.slice(n)]},te=function e(n,t){for(var r=new Array;t.length>0;){var l=t[0];if(l.level===n)r.push(a.a.createElement("li",{key:n+"-"+t.length},V(l.texts))),t=t.slice(1);else{if(l.level<n)break;var c=e(l.level,t),o=Object(P.a)(c,2),u=o[0],i=o[1];r.push(u),t=i}}return[a.a.createElement("ul",{key:n},r),t]},re=function(e){var n,t,r=(n={variables:{id:e.match.params.id},errorPolicy:"all"},j.useQuery(A,n)),l=r.loading,c=r.error,o=r.data;return l?a.a.createElement("span",null,"Loading..."):null!=c?a.a.createElement("div",null,"Error:",null===(t=c.networkError)||void 0===t?void 0:t.message,c.graphQLErrors.map((function(e,n){var t=e.message;return a.a.createElement("span",{key:n},t)}))):null!=o&&null!=o.article?a.a.createElement("div",null,a.a.createElement(G,{data:o.article})):a.a.createElement("div",null,"\u8a18\u4e8b\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3002")},ae=function(e){return a.a.createElement("div",null,"Not Found")};function le(){var e=Object(o.a)(["\n  padding: 10px min(200px, 7%);\n  max-width: 1000px;\n  margin: 0 auto;\n"]);return le=function(){return e},e}var ce=u.a.div(le());function oe(){var e=Object(o.a)(["\n  color: black;\n  &:visited {\n    color: black; \n  }\n"]);return oe=function(){return e},e}function ue(){var e=Object(o.a)(["\n  font-size: 1.8em;\n  display: inline;\n"]);return ue=function(){return e},e}function ie(){var e=Object(o.a)(["\n  background: hsla(0, 0%, 100%, 0.95);\n  box-shadow: 0px 2px 2px hsla(0, 0%, 0%, 0.1);\n  overflow: hidden;\n"]);return ie=function(){return e},e}var se=u.a.header(ie()),de=u.a.h1(ue()),fe=u.a.span(oe()),me=function(e){return a.a.createElement(se,null,a.a.createElement(ce,null,a.a.createElement(l.b,{to:"/",style:{textDecoration:"none"}},a.a.createElement(fe,null,a.a.createElement(de,null,"morikuni.dev")))))},pe=function(e){return a.a.createElement("div",null,a.a.createElement(l.a,null,a.a.createElement(me,null),a.a.createElement(ce,null,a.a.createElement(ve,null))))},ve=function(e){return function(){var e=Object(c.f)();Object(r.useEffect)((function(){gtag("config","G-MFE8N2XSXP",{page_path:e.pathname+e.search,page_title:e.pathname})}),[e])}(),a.a.createElement(c.c,null,a.a.createElement(c.a,{exact:!0,path:"/",component:C}),a.a.createElement(c.a,{exact:!0,path:"/articles/:id",component:re}),a.a.createElement(c.a,{component:ae}))},he=t(107),Ee=new j.ApolloClient({uri:"https://api.morikuni.dev/query",cache:new j.InMemoryCache});he.render(r.createElement(j.ApolloProvider,{client:Ee},r.createElement(pe,null)),document.getElementById("root"))}},[[108,1,2]]]);