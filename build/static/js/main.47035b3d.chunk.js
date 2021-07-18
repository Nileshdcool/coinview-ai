(this["webpackJsonpcoinview-web"]=this["webpackJsonpcoinview-web"]||[]).push([[0],{46:function(e,t,c){},48:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(23),r=c.n(s),a=(c(46),c(10)),i=c(5),l=(c(47),c(48),c(19)),o=c(16),j=c(7),d=c(13),b=c(6),h=c.n(b),u=c(15),O="CREATE_ASSET",x="RETRIEVE_ASSETS",p="RETRIEVE_ALL_ASSETS",m="UPDATE_ASSET",v="DELETE_ASSET",f="DELETE_ALL_ASSETS",g=c(38),y=c.n(g).a.create({baseURL:"http://localhost:8080/api",headers:{"Content-type":"application/json"}}),N={getAll:function(){return y.get("/assets")},get:function(e){return y.get("/assets/".concat(e))},create:function(e){return y.post("/assets",e)},update:function(e,t){return y.put("/assets/".concat(e),t)},remove:function(e){return y.delete("/assets/".concat(e))},removeAll:function(){return y.delete("/assets")},findByName:function(e){return y.get("/assets?name=".concat(e))},getAllAssets:function(){return y.get("/assets/getAllAssets")},getCryptoInfo:function(e){return y.get("/assets/getCryptoInfo?id=".concat(e))}},k=c(0),w=function(){var e={id:null,name:"",description:""},t=Object(n.useState)(e),c=Object(j.a)(t,2),s=c[0],r=c[1],a=Object(n.useState)(!1),b=Object(j.a)(a,2),x=b[0],p=b[1],m=Object(i.f)(),v=Object(d.b)(),f=function(e){var t=e.target,c=t.name,n=t.value;r(Object(o.a)(Object(o.a)({},s),{},Object(l.a)({},c,n)))};return Object(k.jsx)("div",{className:"submit-form",children:x?Object(k.jsxs)("div",{children:[Object(k.jsx)("h4",{children:"You submitted successfully!"}),Object(k.jsx)("button",{className:"btn btn-success",onClick:function(){r(e),p(!1)},children:"Add"})]}):Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"title",children:"Name"}),Object(k.jsx)("input",{type:"text",className:"form-control",id:"name",required:!0,value:s.name,onChange:f,name:"name"})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"description",children:"Description"}),Object(k.jsx)("input",{type:"text",className:"form-control",id:"description",required:!0,value:s.description,onChange:f,name:"description"})]}),Object(k.jsx)("button",{onClick:function(){var e=s.name,t=s.description;v(function(e,t){return function(){var c=Object(u.a)(h.a.mark((function c(n){var s;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,N.create({name:e,description:t});case 3:return s=c.sent,n({type:O,payload:s.data}),c.abrupt("return",Promise.resolve(s.data));case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",Promise.reject(c.t0));case 11:case"end":return c.stop()}}),c,null,[[0,8]])})));return function(e){return c.apply(this,arguments)}}()}(e,t)).then((function(e){r({id:e.id,name:e.name,description:e.description}),p(!0);m.push("assets"),console.log(e)})).catch((function(e){console.log(e)}))},className:"btn btn-success",children:"Submit"})]})})},S=c(78),A=function(e){var t=Object(n.useState)({id:null,name:"",description:""}),c=Object(j.a)(t,2),s=c[0],r=c[1],a=Object(n.useState)(""),i=Object(j.a)(a,2),b=i[0],O=i[1],x=Object(d.b)();Object(n.useEffect)((function(){var t;t=e.match.params.id,N.get(t).then((function(e){r(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[e.match.params.id]);var p=function(e){var t=e.target,c=t.name,n=t.value;r(Object(o.a)(Object(o.a)({},s),{},Object(l.a)({},c,n)))};return Object(k.jsx)("div",{children:s?Object(k.jsxs)("div",{className:"edit-form",children:[Object(k.jsx)("h4",{children:"Asset"}),Object(k.jsxs)("form",{style:{marginBottom:"10px"},children:[Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"name",children:"Title"}),Object(k.jsx)("input",{type:"text",className:"form-control",id:"name",name:"name",value:s.name,onChange:p})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"description",children:"Description"}),Object(k.jsx)("input",{type:"text",className:"form-control",id:"description",name:"description",value:s.description,onChange:p})]})]}),Object(k.jsx)(S.a,{style:{marginRight:"10px"},color:"danger",onClick:function(){var t;x((t=s.id,function(){var e=Object(u.a)(h.a.mark((function e(c){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.remove(t);case 3:c({type:v,payload:{id:t}}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}())).then((function(){e.history.push("/assets")})).catch((function(e){console.log(e)}))},children:"Delete"}),Object(k.jsx)(S.a,{type:"submit",color:"success",onClick:function(){var t,c;x((t=s.id,c=s,function(){var e=Object(u.a)(h.a.mark((function e(n){var s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.update(t,c);case 3:return s=e.sent,n({type:m,payload:c}),e.abrupt("return",Promise.resolve(s.data));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())).then((function(t){console.log(t),e.history.push("/assets"),O("The asset was updated successfully!")})).catch((function(e){console.log(e)}))},children:"Update"}),Object(k.jsx)("p",{children:b})]}):Object(k.jsxs)("div",{children:[Object(k.jsx)("br",{}),Object(k.jsx)("p",{children:"Please click on a Asset..."})]})})},E=c(76),C=c(75),T=function(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(-1),l=Object(j.a)(r,2),o=(l[0],l[1]),b=Object(n.useState)(""),O=Object(j.a)(b,2),p=O[0],m=O[1],v=Object(n.useState)(!1),g=Object(j.a)(v,2),y=g[0],w=(g[1],Object(i.f)()),A=Object(d.c)((function(e){return e.assets})),T=Object(d.b)();Object(n.useEffect)((function(){T(function(){var e=Object(u.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.getAll();case 3:c=e.sent,t({type:x,payload:c.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var L=function(){s(null),o(-1)};return Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col-md-12",children:Object(k.jsxs)("div",{className:"input-group mb-3",children:[Object(k.jsx)("input",{type:"text",className:"form-control",placeholder:"Search by name",value:p,onChange:function(e){var t=e.target.value;m(t)}}),Object(k.jsx)("div",{className:"input-group-append",children:Object(k.jsx)(S.a,{color:"primary",type:"button",onClick:function(){var e;L(),T((e=p,function(){var t=Object(u.a)(h.a.mark((function t(c){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.findByTitle(e);case 3:n=t.sent,c({type:x,payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()))},children:"Search"})})]})}),Object(k.jsxs)("div",{className:"col-md-8",children:[Object(k.jsxs)("div",{className:"row",style:{marginBottom:"20px"},children:[Object(k.jsx)("div",{className:"col-md-8",children:Object(k.jsx)("h4",{children:"Assets List"})}),Object(k.jsxs)("div",{className:"col-md-4",children:[Object(k.jsx)(S.a,{style:{float:"right"},onClick:function(){w.push("add")},color:"primary",children:"Add"})," "]})]}),y?Object(k.jsx)("div",{className:"center",style:{marginLeft:"50px"},children:Object(k.jsx)(C.a,{style:{width:"3rem",height:"3rem"},type:"grow"})}):Object(k.jsxs)(E.a,{dark:!0,children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"#"}),Object(k.jsx)("th",{children:"Name"}),Object(k.jsx)("th",{children:"Description"}),Object(k.jsx)("th",{children:"Action"})]})}),A.length>0&&Object(k.jsx)("tbody",{children:A.map((function(e,t){return Object(k.jsxs)("tr",{onClick:function(){return function(e,t){s(e),o(t)}(e,t)},children:[Object(k.jsx)("th",{style:{textAlign:"center"},scope:"row",children:t+1}),Object(k.jsx)("td",{children:e.name}),Object(k.jsx)("td",{children:e.description}),Object(k.jsxs)("td",{children:[Object(k.jsx)(S.a,{color:"link",children:"View"})," "]})]},t)}))})]}),Object(k.jsx)("button",{className:"m-3 btn btn-sm btn-danger",onClick:function(){T(function(){var e=Object(u.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.removeAll();case 3:return c=e.sent,t({type:f,payload:c.data}),e.abrupt("return",Promise.resolve(c.data));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()).then((function(e){console.log(e),L()})).catch((function(e){console.log(e)}))},children:"Remove All"})]}),Object(k.jsx)("div",{className:"col-md-4",children:c?Object(k.jsxs)("div",{children:[Object(k.jsx)("h4",{children:"Asset"}),Object(k.jsxs)("div",{children:[Object(k.jsx)("label",{children:Object(k.jsx)("strong",{children:"Name:"})})," ",c.name]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("label",{children:Object(k.jsx)("strong",{children:"Description:"})})," ",c.description]}),Object(k.jsx)(a.b,{to:"/assets/"+c.id,children:"Edit"})]}):""})]})};var L=function(e){var t=Object(n.useState)(null),c=Object(j.a)(t,2),s=(c[0],c[1],Object(n.useState)(-1)),r=Object(j.a)(s,2),a=(r[0],r[1],Object(n.useState)("")),i=Object(j.a)(a,2),l=(i[0],i[1],Object(n.useState)(!0)),o=Object(j.a)(l,2),b=o[0],O=o[1],x=Object(d.c)((function(e){if(e.crypto.length>0)return b&&O(!1),e.crypto.slice(0,50)})),m=Object(d.b)();Object(n.useEffect)((function(){m(function(){var e=Object(u.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.getAllAssets();case 3:c=e.sent,t({type:p,payload:c.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[]);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h2",{children:"Today's Cryptocurrency Prices by Market Cap"}),Object(k.jsx)("h5",{children:"The global crypto market cap is $1.31T, a 5.32% increase over the last day."}),b?Object(k.jsx)("div",{className:"center",style:{marginLeft:"50px"},children:Object(k.jsx)(C.a,{style:{width:"3rem",height:"3rem"},type:"grow"})}):Object(k.jsxs)(E.a,{dark:!0,children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"#"}),Object(k.jsx)("th",{}),Object(k.jsx)("th",{children:"Name"}),Object(k.jsx)("th",{children:"Symbol"}),Object(k.jsx)("th",{children:"Max Suppy"}),Object(k.jsx)("th",{children:"Price"})]})}),x.length>0&&Object(k.jsx)("tbody",{children:x.map((function(e,t){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{style:{textAlign:"center"},scope:"row",children:e.cmc_rank}),Object(k.jsxs)("td",{style:{textAlign:"right"},children:["  ",Object(k.jsx)("img",{src:(n=e.id,"https://s2.coinmarketcap.com/static/img/coins/64x64/"+n+".png")})]}),Object(k.jsx)("td",{children:e.name}),Object(k.jsx)("td",{children:e.symbol}),Object(k.jsx)("td",{children:(c=e.max_supply,c?c.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,","):"")}),Object(k.jsxs)("td",{children:["$",e.quote?e.quote.USD.price.toFixed(2):""]})]},t);var c,n}))})]})]})},P=function(e){return Object(k.jsxs)(E.a,{dark:!0,children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"#"}),Object(k.jsx)("th",{children:"First new"}),Object(k.jsx)("th",{children:"Last Name"}),Object(k.jsx)("th",{children:"Username"})]})}),Object(k.jsxs)("tbody",{children:[Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{scope:"row",children:"1"}),Object(k.jsx)("td",{children:"Mark"}),Object(k.jsx)("td",{children:"Otto"}),Object(k.jsx)("td",{children:"@mdo"})]}),Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{scope:"row",children:"2"}),Object(k.jsx)("td",{children:"Jacob"}),Object(k.jsx)("td",{children:"Thornton"}),Object(k.jsx)("td",{children:"@fat"})]}),Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{scope:"row",children:"3"}),Object(k.jsx)("td",{children:"Larry"}),Object(k.jsx)("td",{children:"the Bird"}),Object(k.jsx)("td",{children:"@twitter"})]})]})]})},D=c(77),F=function(e){return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"bgimg",children:Object(k.jsx)("div",{className:"topleft",children:Object(k.jsx)("p",{children:"Logo"})})}),Object(k.jsxs)("div",{className:"middle",children:[Object(k.jsx)("h1",{children:"COMING SOON"}),Object(k.jsx)("hr",{}),Object(k.jsx)("p",{children:"35 days"})]}),Object(k.jsx)("div",{className:"bottomleft",children:Object(k.jsx)("p",{children:"Some text"})})]})};var _=function(){return Object(k.jsxs)(a.a,{children:[Object(k.jsxs)("nav",{style:{paddingBottom:"0.1rem",paddingTop:"0.5rem"},className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(k.jsx)("h6",{style:{marginLeft:"10px"},children:Object(k.jsx)(D.a,{color:"secondary",children:"Cryptos:"})}),Object(k.jsx)("h6",{children:Object(k.jsx)(D.a,{color:"secondary",children:"Exchanges:"})}),Object(k.jsx)("h6",{children:Object(k.jsx)(D.a,{color:"secondary",children:"Market Cap:"})}),Object(k.jsx)("h6",{children:Object(k.jsx)(D.a,{color:"secondary",children:"24h Vol:"})}),Object(k.jsx)("h6",{children:Object(k.jsx)(D.a,{color:"secondary",children:"Dominance:"})}),Object(k.jsx)("h6",{children:Object(k.jsx)(D.a,{color:"secondary",children:"Eth Gas:"})})]}),Object(k.jsx)("hr",{style:{margin:"0.01rem"}}),Object(k.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(k.jsx)("a",{style:{marginLeft:"20px"},href:"/assets",className:"navbar-brand",children:"CoinView.AI"}),Object(k.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(a.b,{to:"/cryptocurrencies",className:"nav-link",children:"Cryptocurrencies"})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(a.b,{to:"/assets",className:"nav-link",children:"Portfolio"})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(a.b,{to:"/comingsoon",className:"nav-link",children:"Exchanges"})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(a.b,{to:"/comingsoon",className:"nav-link",children:"NFT"})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(a.b,{to:"/comingsoon",className:"nav-link",children:"Watchlist"})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(a.b,{to:"/comingsoon",className:"nav-link",children:"Calendars"})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(a.b,{to:"/comingsoon",className:"nav-link",children:"Products"})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(a.b,{to:"/comingsoon",className:"nav-link",children:"Learn"})})]})]}),Object(k.jsx)("div",{className:"container mt-3",children:Object(k.jsxs)(i.c,{children:[Object(k.jsx)(i.a,{exact:!0,path:["/","/cryptocurrencies"],component:L}),Object(k.jsx)(i.a,{exact:!0,path:["/exchanges"],component:P}),Object(k.jsx)(i.a,{exact:!0,path:"/add",component:w}),Object(k.jsx)(i.a,{exact:!0,path:"/assets",component:T}),Object(k.jsx)(i.a,{path:"/assets/:id",component:A}),Object(k.jsx)(i.a,{path:"/comingsoon",component:F})]})})]})},B=c(20),R=c(39),I=c(40),M=c(41),U=[];var V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case O:return[].concat(Object(M.a)(e),[n]);case x:return n;case m:return e.map((function(e){return e.id===n.id?Object(o.a)(Object(o.a)({},e),n):e}));case v:return e.filter((function(e){return e.id!==n.id}));case f:return[];default:return e}},q=[];var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case p:return n;default:return e}},G=Object(B.combineReducers)({assets:V,crypto:J}),W=[I.a],$=Object(B.createStore)(G,{},Object(R.composeWithDevTools)(B.applyMiddleware.apply(void 0,W))),Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,79)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};r.a.render(Object(k.jsx)(d.a,{store:$,children:Object(k.jsx)(_,{})}),document.getElementById("root")),Y()}},[[74,1,2]]]);
//# sourceMappingURL=main.47035b3d.chunk.js.map