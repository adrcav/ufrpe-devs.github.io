"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{6179:function(t,e,n){var a=n(7294),r=n(5414),o=n(5444);function i(t){var e,n,i=t.description,u=t.lang,l=t.meta,c=t.title,m=(0,o.useStaticQuery)("63159454").site,s=i||m.siteMetadata.description,d=null===(e=m.siteMetadata)||void 0===e?void 0:e.title;return a.createElement(r.q,{htmlAttributes:{lang:u},title:c,titleTemplate:d?"%s | "+d:null,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=m.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(l)})}i.defaultProps={lang:"en",meta:[],description:""},e.Z=i},2809:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var a=n(7294),r=n(9439),o=n(7602),i=n(5587),u=i.jU?a.useLayoutEffect:a.useEffect;var l=n(7690),c=n(2543),m=n(4667),s=n(8950),d=n(9265);function p(){return p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},p.apply(this,arguments)}function f(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}var g=(0,c.G)((function(t,e){var n=t.area,r=t.templateAreas,o=t.gap,i=t.rowGap,u=t.columnGap,l=t.column,c=t.row,m=t.autoFlow,s=t.autoRows,g=t.templateRows,h=t.autoColumns,y=t.templateColumns,w=f(t,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]),v={display:"grid",gridArea:n,gridTemplateAreas:r,gridGap:o,gridRowGap:i,gridColumnGap:u,gridAutoColumns:h,gridColumn:l,gridRow:c,gridAutoFlow:m,gridAutoRows:s,gridTemplateRows:g,gridTemplateColumns:y};return a.createElement(d.m$.div,p({ref:e,__css:v},w))}));m.Ts&&(g.displayName="Grid");function h(){return h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},h.apply(this,arguments)}var y=(0,c.G)((function(t,e){var n,r,o=t.columns,i=t.spacingX,u=t.spacingY,l=t.spacing,c=t.minChildWidth,d=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["columns","spacingX","spacingY","spacing","minChildWidth"]),p=c?(r=c,(0,s.XQ)(r,(function(t){return(0,m.Ft)(t)?null:"repeat(auto-fit, minmax("+(e=t,((0,m.hj)(e)?e+"px":e)+", 1fr))");var e}))):(n=o,(0,s.XQ)(n,(function(t){return(0,m.Ft)(t)?null:"repeat("+t+", minmax(0, 1fr))"})));return a.createElement(g,h({ref:e,gap:l,columnGap:i,rowGap:u,templateColumns:p},d))}));m.Ts&&(y.displayName="SimpleGrid");var w=n(2755),v=n.p+"static/community-e63170e1be027380a0f9234184e7963d.svg",b={display:"flex","@media screen and (max-width: 992px)":{marginTop:"20px",".hero__community-button--desktop":{display:"none"},".hero__community-button--mobile":{display:"block",width:200,margin:"auto"}},"@media screen and (min-width: 992px)":{".hero__community-button--desktop":{display:"block"},".hero__community-button--mobile":{display:"none"}}};function E(){var t,e,n,c,m,s,d,p,f=(t="(max-width: 767px)",e=(0,o.O)(),n=Array.isArray(t)?t:[t],c=i.jU&&"matchMedia"in e.window,m=a.useState(n.map((function(t){return!!c&&!!e.window.matchMedia(t).matches}))),s=(0,r.Z)(m,2),d=s[0],p=s[1],u((function(){if(c){var t=n.map((function(t){return e.window.matchMedia(t)})),a=t.map((function(t,e){var n=function(){return p((function(n){return n.map((function(n,a){return e===a?!!t.matches:n}))}))};return t.addListener(n),n}));return function(){t.forEach((function(t,e){t.removeListener(a[e])}))}}}),[t]),d)[0];return a.createElement(l.xu,{id:"home",__css:b,px:4,mb:8},a.createElement(y,{columns:{md:1,lg:2},gap:6},a.createElement(l.xu,{w:"100%",style:{margin:"auto"}},a.createElement(l.xu,{style:{fontSize:72,fontWeight:700,lineHeight:1,width:f?"100%":"90%"}},"Boas vindas ao UFRPE Devs"),a.createElement(l.xu,{mt:6,style:{fontSize:20,fontWeight:400,width:f?"100%":"90%"}},"Nós somos uma comunidade de desenvolvimento open source da Universidade Federal Rural de Pernambuco. Juntos buscamos incentivar e praticar diariamente o compartilhamento de conhecimento e a socialização entre todos os cursos de tecnologia da UFRPE."),a.createElement(w.z,{bg:"brand.secondary",color:"white",mt:6,className:"hero__community-button--desktop"},"Community")),a.createElement(l.xu,{w:"100%",style:{display:"flex",alignItems:"center"}},a.createElement("img",{src:v,alt:"community"})),a.createElement(w.z,{bg:"brand.secondary",color:"white",className:"hero__community-button--mobile"},"Community")))}var _=n(6179),x=function(){return a.createElement(a.Fragment,null,a.createElement(_.Z,{title:"Home"}),a.createElement(E,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-859c2b997675905763f8.js.map