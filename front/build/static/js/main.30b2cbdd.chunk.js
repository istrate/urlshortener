(this["webpackJsonpurlshortener-front"]=this["webpackJsonpurlshortener-front"]||[]).push([[0],{184:function(e,t,n){},185:function(e,t,n){},307:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(41),i=n.n(c),s=(n(184),n(185),n(186),n(98)),u=n(22),o=n(30),l=n.n(o),h=n(44),d=n(7),j=n(8),b=n(11),O=n(10),p=n(82),x=n(328),f=n(318),v=n(330),m=n(319),g=n(113),S=n(320),y=n(4);var R=function(e){return e.external?Object(y.jsx)("a",{href:e.to,target:"_blank",rel:"noreferrer noopener",children:e.children}):Object(y.jsx)(s.b,{to:e.to,children:e.children})},w=n.p+"static/media/logo.88987fbf.png",k=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(e){var r;Object(d.a)(this,n),r=t.call(this,e);var a=0;return window.location.pathname.indexOf("/add")>-1&&(a=1),window.location.pathname.indexOf("/about")>-1&&(a=2),r.state={activeItem:a},r}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state.activeItem,t=Object(y.jsx)(p.a,{onSelect:this.onNavSelect,"aria-label":"Nav",variant:"horizontal",children:Object(y.jsxs)(x.a,{children:[Object(y.jsx)(R,{to:"/",children:Object(y.jsx)(f.a,{itemId:0,isActive:0===e,to:"/",children:"Current Shorties"})}),Object(y.jsx)(R,{to:"/add",children:Object(y.jsx)(f.a,{itemId:1,isActive:1===e,to:"/add",children:"Add New"})}),Object(y.jsx)(R,{to:"/about",children:Object(y.jsx)(f.a,{itemId:2,isActive:2===e,to:"/about",children:"About"})})]})}),n=Object(y.jsx)(v.a,{logo:Object(y.jsx)(m.a,{src:w,alt:"URL Shorties Logo"}),topNav:t});return Object(y.jsx)(a.a.Fragment,{children:Object(y.jsx)(g.a,{header:n,mainContainerId:"main-content-page-layout-horizontal-nav",children:Object(y.jsx)(S.a,{variant:S.b.light,children:this.props.children})})})}}]),n}(a.a.Component),C=n(80),I=new(function(){function e(){Object(d.a)(this,e),this.url=C.BASE_URL}return Object(j.a)(e,[{key:"getServerStatus",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.url,"/health")).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUrls",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.url,"/urls")).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"addUrl",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http"!==t.url.substr(0,4)&&(t.url="http://"+t.url),"/"!==t.route.substr(0,1)&&(t.route="/"+t.route),e.next=4,fetch("".concat(this.url,"/urls"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()}));case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),U=n(326),T=n(325),L=n(329),F=n(327),A=n(80),N=n(158),E=n.n(N),D=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={urls:[]},r}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.getUrls();case 2:t=e.sent,this.setState({urls:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.urls,t=e.map((function(e){return[e.route,{title:Object(y.jsx)(R,{to:e.url,external:!0,children:e.url})},{title:Object(y.jsx)(R,{to:"".concat(A.REDIRECTOR_URL).concat(e.route),external:!0,children:Object(y.jsx)(E.a,{})})}]}));return Object(y.jsxs)(k,{children:[0===e.length&&Object(y.jsx)(U.a,{variant:"warning",isInline:!0,title:"No routes defined.",children:'You can use the "Add New" link in the top navigation to add your first route."'}),Object(y.jsxs)(T.a,{"aria-label":"List of URLs",variant:"compact",borders:"compactBorderless",cells:["Short Url","Redirects To","Link"],rows:t,children:[Object(y.jsx)(L.a,{}),Object(y.jsx)(F.a,{})]})]})}}]),n}(a.a.Component),_=n(81),B=n(321),q=n(322),J=n(331),z=n(323),M=n(324),P=n(115),H=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={route:"",url:"",created:!1},r.handleTextInputChange=r.handleTextInputChange.bind(Object(_.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(_.a)(r)),r}return Object(j.a)(n,[{key:"handleTextInputChange",value:function(e,t){var n={};n[t.target.id]=e,this.setState(n)}},{key:"handleSubmit",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t,n=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={route:this.state.route,url:this.state.url},e.next=3,I.addUrl(t);case 3:this.setState({route:"",url:"",created:!0}),setTimeout((function(){return n.setState({created:!1})}),5e3);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.created;return Object(y.jsxs)(k,{children:[Object(y.jsx)(S.a,{children:Object(y.jsx)(B.a,{headingLevel:"h1",children:"Add a new redirection"})}),e&&Object(y.jsx)(S.a,{children:Object(y.jsx)(U.a,{variant:"success",isInline:!0,title:"New redirection successfully created"})}),Object(y.jsx)(S.a,{children:Object(y.jsxs)(q.a,{isHorizontal:!0,children:[Object(y.jsx)(J.a,{label:"Route",isRequired:!0,fieldId:"route",helperText:"Route in the redirector service (/shorturl)",children:Object(y.jsx)(z.a,{value:this.state.route,isRequired:!0,type:"text",id:"route","aria-describedby":"Route",name:"route",onChange:this.handleTextInputChange})}),Object(y.jsx)(J.a,{label:"Url",isRequired:!0,fieldId:"url",helperText:"URL to redirect to (http://longurl.com/service?option=1",children:Object(y.jsx)(z.a,{value:this.state.url,isRequired:!0,type:"text",id:"url","aria-describedby":"url",name:"url",onChange:this.handleTextInputChange})}),Object(y.jsxs)(M.a,{children:[Object(y.jsx)(P.a,{variant:"primary",onClick:this.handleSubmit,children:"Create Redirection"}),Object(y.jsx)(P.a,{variant:"link",children:"Cancel"})]})]})})]})}}]),n}(a.a.Component),Y=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={status:{server:!1,database:!1,redirector:!1}},r}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I.getServerStatus().then((function(e){e&&t.setState({status:e})})).catch((function(e){console.log(e),t.setState({status:{server:!1,database:!1}})})),fetch("".concat(A.REDIRECTOR_URL,"/health")).then((function(e){return e.json()})).then((function(e){t.setState((function(e){return e.status.redirector=!0,e}))})).catch(this.setState((function(e){return e.status.redirector=!1,e})));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.status;return Object(y.jsxs)(k,{children:[Object(y.jsx)(S.a,{children:Object(y.jsx)(B.a,{headingLevel:"h1",children:"Server Status"})}),Object(y.jsx)(S.a,{children:Object(y.jsxs)(U.a,{variant:e.server?"success":"danger",isInline:!0,title:"Server Status",children:[e.server&&Object(y.jsx)(a.a.Fragment,{children:"Up and running"}),!e.server&&Object(y.jsx)(a.a.Fragment,{children:"Unreachable"})]})}),Object(y.jsx)(S.a,{children:Object(y.jsxs)(U.a,{variant:e.database?"success":"danger",isInline:!0,title:"Database Status",children:[e.database&&Object(y.jsx)(a.a.Fragment,{children:"Up and running"}),!e.database&&Object(y.jsx)(a.a.Fragment,{children:"Unreachable"})]})}),Object(y.jsx)(S.a,{children:Object(y.jsxs)(U.a,{variant:e.redirector?"success":"danger",isInline:!0,title:"Redirection Server Status",children:[e.redirector&&Object(y.jsx)(a.a.Fragment,{children:"Up and running"}),!e.redirector&&Object(y.jsx)(a.a.Fragment,{children:"Unreachable"})]})})]})}}]),n}(a.a.Component);var G=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(s.a,{children:Object(y.jsxs)(u.c,{children:[Object(y.jsx)(u.a,{exact:!0,path:"/",component:D}),Object(y.jsx)(u.a,{path:"/add",component:H}),Object(y.jsx)(u.a,{path:"/about",component:Y})]})})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,332)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(G,{})}),document.getElementById("root")),K()},80:function(e){e.exports=JSON.parse('{"BASE_URL":"http://localhost:8888","REDIRECTOR_URL":"http://localhost:8080"}')}},[[307,1,2]]]);
//# sourceMappingURL=main.30b2cbdd.chunk.js.map