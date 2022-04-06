(this.webpackJsonpstardui=this.webpackJsonpstardui||[]).push([[0],[,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={ERROR_TO_FETCH:"[ERROR] ERROR TO FETCH",IS_LOADING:"[LOADING] IS LOADING",AUTH_CHECKING:"[AUTH] CHECKING",AUTH_LOGIN:"[AUTH] LOGIN",AUTH_LOGOUT:"[AUTH] LOGOUT",PRODUCT_GET:"[PRODUCT] GET",PRODUCT_GET_ID:"[PRODUCT] GET BY ID",PRODUCT_GET_DETAILS:"[PRODUCT] GET DETAILS",PRODUCT_SEARCH:"[PRODUCT] SEARCH",CURRENT_PAGE:"[PAGE] CURRENT",ADD_TO_CART:"[CART] CREATE",ADD_IT_ALL_UP:"[CART] ADD IT ALL UP",GET_USER_CART:"[CART] GET USER CART",COUNT_CART:"[CART] COUNT",REMOVE_ONE_FROM_CART:"[CART] ONE FROM CART",CATEGORY_GET:"[CATEGORY] GET",PRODUCTS_CATEGORY:"[CATEGORY] PRODUCTS CATEGORY"}},,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={LOGIN:"/auth/login",SIGN_IN:"/auth/signin",AUTH_BASE:"/auth",MENU_BASE:"/menu",ABOUT:"/about",DETAILS:"/d",DETAILS_NAME:"/d/:name",SEARCH_P:"/search",CART:"/cart",CATEGORIES:"/categories"}},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c="https://stardiu.herokuapp.com/api",r={login:"".concat(c,"/auth/login"),loginWithGoogle:"".concat(c,"/auth/google"),renew:"".concat(c,"/auth/renew"),createUser:"".concat(c,"/users"),getProducts:"".concat(c,"/products"),search:"".concat(c,"/search"),addToCart:"".concat(c,"/cart/add"),getShoppingCart:"".concat(c,"/cart"),countShoppingCart:"".concat(c,"/cart/count"),productExistInShoppingCart:"".concat(c,"/cart/verify"),deleteOneFromShoppingCart:"".concat(c,"/cart/delete"),getCategories:"".concat(c,"/categories"),getProductsByCategory:"".concat(c,"/products/category")}},,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var c=n(5),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{type:c.a.ERROR_TO_FETCH,payload:e}},a=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{type:c.a.IS_LOADING,payload:e}}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(4),r=function(){var e=function(e,t){var n={accept:"application/json"},r=new AbortController;return t.signal=r.signal,t.method=t.method||"GET",t.headers=t.headers?Object(c.a)(Object(c.a)({},n),t.headers):n,t.body=JSON.stringify(t.body)||!1,t.body||delete t.body,setTimeout((function(){return r.abort()}),8e3),fetch(e,t).then((function(e){return e.ok?e.json():Promise.reject({err:!0,status:e.status||"00",statusText:e.statusText||"Ocurred an error"})})).catch((function(e){return e}))};return{get:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e(t,n)},post:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.method="POST",e(t,n)},put:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.method="PUT",e(t,n)},del:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.method="DELETE",e(t,n)}}}},,,,function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"e",(function(){return j})),n.d(t,"c",(function(){return b})),n.d(t,"a",(function(){return O})),n.d(t,"d",(function(){return f}));var c=n(9),r=n.n(c),a=n(12),s=n(13),i=n(25),o=n(5),l=n(20),u=Object(i.a)(),d=function(e,t){return function(){var n=Object(a.a)(r.a.mark((function n(c){var a,i,o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a={body:{email:e,password:t},headers:{"content-type":"application/json"}},n.next=4,u.post(s.a.login,a);case 4:if((i=n.sent).err){n.next=11;break}return o=i.user,localStorage.setItem("star-token",i.token),n.abrupt("return",c(m({uid:o.uid,name:o.name,img:o.img,role:o.role})));case 11:return n.abrupt("return",l.b.error("Email or password incorred",{hideProgressBar:!1,autoClose:2e3}));case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),console.error(n.t0.msg);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(e){return n.apply(this,arguments)}}()},j=function(e,t,n){return function(){var c=Object(a.a)(r.a.mark((function c(a){var i,o,d,j,b,O;return r.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,i={body:{name:e,email:t,password:n,role:"USER_ROLE",google:!1},headers:{"content-type":"application/json"}},c.next=4,u.post(s.a.createUser,i);case 4:if((o=c.sent).err){c.next=11;break}return d=o.uid,j=o.name,b=o.img,O=o.role,localStorage.setItem("star-token",o.token),c.abrupt("return",a(m({uid:d,name:j,img:b,role:O})));case 11:return a(h()),c.abrupt("return",l.b.error("This user already exists, please try another"));case 13:c.next=18;break;case 15:c.prev=15,c.t0=c.catch(0),console.error(c.t0);case 18:case"end":return c.stop()}}),c,null,[[0,15]])})));return function(e){return c.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(a.a)(r.a.mark((function t(n){var c,a,i,o,d,j,b;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c={body:{id_token:e},headers:{"content-type":"application/json"}},t.next=4,u.post(s.a.loginWithGoogle,c);case 4:if((a=t.sent).err){t.next=11;break}return i=a.user,o=i.uid,d=i.name,j=i.img,b=i.role,localStorage.setItem("star-token",a.token),t.abrupt("return",n(m({uid:o,name:d,img:j,role:b})));case 11:return n(h()),t.abrupt("return",l.b.error("This user already exists, please try another"));case 13:t.next=18;break;case 15:return t.prev=15,t.t0=t.catch(0),t.abrupt("return",l.b.error("google auth failed"));case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}()},O=function(){return function(){var e=Object(a.a)(r.a.mark((function e(t){var n,c,a,i,o,l,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=localStorage.getItem("star-token")||"",c={headers:{"content-type":"application/json","x-token":n}},e.next=5,u.get(s.a.renew,c);case 5:if(!(a=e.sent).ok){e.next=12;break}return i=a.uid,o=a.name,l=a.img,d=a.role,localStorage.setItem("star-token",a.token),e.abrupt("return",t(m({uid:i,name:o,img:l,role:d})));case 12:return e.abrupt("return",t(h()));case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),t(h()),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}()},h=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{type:o.a.AUTH_CHECKING,payload:e}},m=function(e){return{type:o.a.AUTH_LOGIN,payload:e}},f=function(){return function(e){localStorage.clear(),e(p())}},p=function(){return{type:o.a.AUTH_LOGOUT}}},,,function(e,t,n){"use strict";n.d(t,"e",(function(){return j})),n.d(t,"c",(function(){return b})),n.d(t,"f",(function(){return O})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return m})),n.d(t,"a",(function(){return p}));var c=n(9),r=n.n(c),a=n(12),s=n(5),i=n(13),o=n(25),l=n(20),u=n(23),d=Object(o.a)(),j=function(e){return function(){var t=Object(a.a)(r.a.mark((function t(n){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.get("".concat(i.a.getShoppingCart,"/").concat(e));case 3:c=t.sent,n(Object(u.b)(!1)),n(x(c.products)),n(g()),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(a.a)(r.a.mark((function t(n){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.get("".concat(i.a.countShoppingCart,"/").concat(e));case 3:c=t.sent,n(p(c.total)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},O=function(){var e=Object(a.a)(r.a.mark((function e(t,n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.get("".concat(i.a.productExistInShoppingCart,"/").concat(t,"/").concat(n));case 3:return c=e.sent,e.abrupt("return",c);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),h=function(e){return function(){var t=Object(a.a)(r.a.mark((function t(n){var c,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c={body:e,headers:{"content-type":"application/json"}},l.b.success("Se agreg\xf3 el producto correctamente",{autoClose:1e3,hideProgressBar:!1,closeOnClick:!0}),t.next=5,d.post(i.a.addToCart,c);case 5:a=t.sent,n(f(a.cart)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},m=function(){var e=Object(a.a)(r.a.mark((function e(t,n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.del("".concat(i.a.deleteOneFromShoppingCart,"/").concat(t,"/").concat(n));case 3:return c=e.sent,l.b.error("Borrando del carrito",{autoClose:200,hideProgressBar:!1,closeOnClick:!0}),e.abrupt("return",c);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),f=function(e){return{type:s.a.ADD_TO_CART,payload:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{type:s.a.COUNT_CART,payload:e}},x=function(e){return{type:s.a.GET_USER_CART,payload:e}},g=function(){return{type:s.a.ADD_IT_ALL_UP}}},function(e,t,n){"use strict";var c=n(24),r=n(0),a=n(3),s=n(42),i=n(6),o=n(1);var l=function(){var e=Object(i.g)();return Object(o.jsx)(a.B,{children:Object(o.jsx)("img",{src:s.a,alt:"startdiu",height:"30",onClick:function(){return e.push("/")},loading:"lazy"})})},u=n(11),d=n(10);var j=function(){return Object(o.jsx)("section",{children:Object(o.jsxs)("article",{className:"row d-flex align-items-center",children:[Object(o.jsx)("div",{className:"col-sm-12 col-lg-4",children:Object(o.jsx)(u.c,{to:"/",className:"nav-link",children:"Inicio"})}),Object(o.jsx)("div",{className:"col-sm-12 col-lg-4",children:Object(o.jsx)(u.c,{to:d.a.MENU_BASE,className:"nav-link",activeClassName:"active",children:"Menu"})}),Object(o.jsx)("div",{className:"col-sm-12 col-lg-4",children:Object(o.jsx)(u.c,{to:d.a.ABOUT,className:"nav-link",activeClassName:"active",children:"Acerca"})})]})})},b=n(8),O=n(45),h=n(46),m=n(47);var f=function(e){var t=e.isAuth,n=Object(i.g)(),c=Object(b.c)((function(e){return e.shoppingCart})).total;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(a.C,{disabled:t,className:"me-3 pointer",onClick:function(){return n.push(d.a.CART)},children:[Object(o.jsx)(a.a,{pill:!0,color:"danger",children:c||"0"}),Object(o.jsx)("span",{children:Object(o.jsx)(a.q,{fas:!0,icon:"shopping-cart"})})]})})},p=n.p+"static/media/defaultProfile.f0f358f2.png";var x=function(e){var t=e.img,n=e.name;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("img",{src:t,alt:n,className:"img-fluid",style:{width:"30px",borderRadius:"50%",marginLeft:"0.4rem"},onError:function(e){e.target.src=p}})})},g=n(55),v=n.n(g),N=n(29);var y=function(){var e=Object(b.b)();return Object(o.jsx)("section",{className:"toast-body",children:Object(o.jsx)("div",{className:"mt-3",children:Object(o.jsx)(u.b,{className:"text-dark exit",to:d.a.LOGIN,children:Object(o.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"start"},onClick:function(){return e(Object(N.d)())},children:[Object(o.jsx)(a.q,{fas:!0,icon:"sign-out-alt"}),Object(o.jsx)("span",{className:"mx-3",children:"Cerrar secci\xf3n"})]})})})})};var C=function(){return Object(o.jsxs)("section",{className:"toast-header",children:[Object(o.jsx)("strong",{className:"me-auto",children:"Cuenta"}),Object(o.jsx)("button",{type:"button",className:"btn-close ms-2 mb-1"})]})};n(80);var T=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(v.a,{top:!0,children:Object(o.jsxs)("article",{className:"toast show toast-show mt-3",children:[Object(o.jsx)(C,{}),Object(o.jsx)(y,{})]})})})};var E=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1],s=Object(b.c)((function(e){return e.auth})),i=s.name,l=s.img;return Object(o.jsxs)("section",{className:"d-flex align-items-center align-items-center",children:[Object(o.jsx)("span",{className:"fw-bold",children:i}),Object(o.jsxs)("div",{onClick:function(){return a(!n)},className:"toast-wrapper",style:{cursor:"pointer"},children:[Object(o.jsx)(x,{img:l,name:i}),n&&Object(o.jsx)(T,{})]})]})};var k=function(){var e=Object(b.c)((function(e){return e.auth})).checking;return Object(o.jsxs)("div",{className:"d-flex align-lg-items-center flex-lg-row flex-sm-column justify-content-between flex-md-column",children:[Object(o.jsx)(f,{isAuth:e}),e?Object(o.jsxs)(O.a,{children:[Object(o.jsx)(h.a,{margin:!0}),Object(o.jsx)(m.a,{})]}):Object(o.jsx)(E,{})]})};t.a=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],s=t[1];return Object(o.jsx)(a.A,{expand:"lg",light:!0,bgColor:"light",children:Object(o.jsxs)(a.o,{fluid:!0,children:[Object(o.jsx)(l,{}),Object(o.jsx)(a.E,{"aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){return s(!n)},children:Object(o.jsx)(a.q,{icon:"bars",fas:!0})}),Object(o.jsx)(a.n,{navbar:!0,center:!0,show:n,children:Object(o.jsxs)(a.D,{className:"justify-content-between",children:[Object(o.jsx)(j,{}),Object(o.jsx)(k,{})]})})]})})}},function(e,t,n){"use strict";n(0);var c=n(3),r=n(1);var a=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(c.b,{floating:!0,className:"m-1",style:{backgroundColor:"#3b5998"},href:"#",target:"_blank",children:Object(r.jsx)(c.q,{fab:!0,icon:"facebook-f"})}),Object(r.jsx)(c.b,{floating:!0,className:"m-1",style:{backgroundColor:"#55acee"},href:"#",target:"_blank",children:Object(r.jsx)(c.q,{fab:!0,icon:"twitter"})}),Object(r.jsx)(c.b,{floating:!0,className:"m-1",style:{backgroundColor:"#ac2bac"},href:"#",target:"_blank",children:Object(r.jsx)(c.q,{fab:!0,icon:"instagram"})})]})};t.a=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(c.p,{backgroundColor:"light",className:"text-center text-lg-left",children:Object(r.jsxs)(c.o,{className:"p-4 pb-0",children:[Object(r.jsx)("hr",{}),Object(r.jsx)("small",{children:"Contactos"}),Object(r.jsx)(a,{}),Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{className:"text-center p-3",style:{backgroundColor:"white"},children:["\xa9 ",(new Date).getFullYear()," Copyright:"," ",Object(r.jsx)("a",{className:"text-dark",href:"https://mdbootstrap.com/",children:"Stardiu Coffee Company. Todos los derechos reservados."})]})]})})})}},function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return h.a})),n.d(t,"d",(function(){return T})),n.d(t,"e",(function(){return E.a}));n(0);var c=n.p+"static/media/coffe-cup.811c6884.jpg",r=n.p+"static/media/coffe-shop.1a194405.jpg",a=[{item:0,title:"Mejor",desc:"El mejor caf\xe9 de El Salvador",img:c},{item:1,title:"Disfrutar",desc:"Disfruta del mejor caf\xe9 con nosotros",img:n.p+"static/media/person-drink-coffe.6ab05fef.jpg"},{item:2,title:"Excelente",desc:"Excelente servicio y con un lugar moderno",img:r}],s=n(3),i=n(1);var o=function(e){var t=e.item,n=e.image,c=e.title,r=e.desc;return Object(i.jsxs)(s.m,{itemId:t,className:"".concat(0===t&&"active"),children:[Object(i.jsx)(s.k,{style:{borderRadius:"12px"},src:n,alt:r}),Object(i.jsxs)(s.j,{children:[Object(i.jsx)("h5",{children:c}),Object(i.jsx)("p",{children:r})]})]})};n(81);var l=function(){return Object(i.jsxs)("div",{className:"container-fluid p-4 text-center mb-4 carousel-width",children:[Object(i.jsx)("h2",{className:"mb-4",children:"Servicios"}),Object(i.jsx)(s.i,{showControls:!0,showIndicators:!0,children:Object(i.jsx)(s.l,{children:a.map((function(e){return Object(i.jsx)(o,{item:e.item,title:e.title,image:e.img,desc:e.desc},e.item)}))})})]})};var u=function(e){var t=e.children;return Object(i.jsx)("section",{className:"container my-5",children:Object(i.jsx)("article",{className:"row",children:t})})},d=n.p+"static/media/descImage.d571ba5c.svg";var j=function(){return Object(i.jsx)("div",{className:"col-lg-6",children:Object(i.jsx)("img",{src:d,className:"img-fluid w-75 center-desc-img",alt:"Stardiu description image",loading:"lazy"})})};var b=function(){return Object(i.jsxs)("div",{className:"col-lg-6",children:[Object(i.jsx)("h2",{className:"my-4",children:"BIENVENIDO"}),Object(i.jsx)("p",{children:"Tenemos el mejor caf\xe9 y servicio, disfruta un lugar moderno de una buena taza de caf\xe9 con nosotros y recuerda que no hay nada mejor que un caf\xe9 con estilo."})]})};n(82);var O=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(u,{children:[Object(i.jsx)(j,{}),Object(i.jsx)(b,{})]})})},h=n(34),m=n.p+"static/media/hero.1382a501.svg",f=n.p+"static/media/coffee-cup.9433a695.svg",p=n(19),x=n.n(p);var g=function(){return Object(i.jsx)("div",{className:"col-lg-6 hero-title-image",children:Object(i.jsx)(x.a,{children:Object(i.jsx)("img",{src:f,alt:"coffe cup",loading:"lazy",className:"img-fluid hero-image-size"})})})},v=n(6),N=n(10);var y=function(){var e=Object(v.g)();return Object(i.jsxs)("div",{className:"col-lg-6 hero-back hero-title-center",style:{letterSpacing:"3px",paddingTop:"4.8rem",paddingLeft:"2rem"},children:[Object(i.jsxs)("div",{children:[Object(i.jsxs)(x.a,{children:[Object(i.jsx)("span",{className:"d-block fw-bold font-title",children:"EL"}),Object(i.jsx)("span",{className:"d-block fw-bold font-title",id:"test",children:"CAF\xc9 CON"})]}),Object(i.jsx)(x.a,{right:!0,cascade:!0,children:Object(i.jsx)("span",{className:"d-block fw-bold font-title green-text",children:"ESTILO"})})]}),Object(i.jsx)("div",{className:"discover-btn-center",children:Object(i.jsx)(x.a,{delay:1e3,children:Object(i.jsx)(s.b,{rounded:!0,outline:!0,color:"dark",className:"mt-3",onClick:function(){return e.push(N.a.MENU_BASE)},children:"Descubrir"})})})]})};n(83);var C=function(e){var t=e.children;return Object(i.jsx)("article",{className:"mask hero-image-position",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row",children:t})})})};var T=function(){return Object(i.jsx)("section",{className:"p-5 text-center bg-image",style:{backgroundImage:'url("'.concat(m,'")'),height:640},children:Object(i.jsxs)(C,{children:[Object(i.jsx)(g,{}),Object(i.jsx)(y,{})]})})},E=n(33)},,,,,function(e,t,n){},function(e,t,n){"use strict";n(0),n(75);var c=n(1);t.a=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"lds-dual-ring"})})}},function(e,t,n){"use strict";t.a=n.p+"static/media/stardiuLogo.77eae348.svg"},,,function(e,t,n){"use strict";n(0);var c=n(1);t.a=function(e){var t=e.children;return Object(c.jsx)("div",{children:t})}},function(e,t,n){"use strict";n(0);var c=n(6),r=n(10),a=n(3),s=n(1);t.a=function(e){var t=e.margin,n=Object(c.g)();return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(a.b,{rounded:!0,outline:!0,color:"dark",className:t?"me-2":"",onClick:function(){return n.push(r.a.LOGIN)},children:"Log In"})})}},function(e,t,n){"use strict";n(0);var c=n(6),r=n(10),a=n(3),s=n(1);t.a=function(){var e=Object(c.g)();return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(a.b,{rounded:!0,color:"dark",onClick:function(){return e.push(r.a.SIGN_IN)},children:"Sign In"})})}},function(e,t,n){"use strict";n(0);var c=n(6),r=n(3),a=n(1);t.a=function(){var e=Object(c.g)();return Object(a.jsxs)(r.b,{onClick:function(){return e.goBack()},size:"sm",color:"dark",rounded:!0,children:[Object(a.jsx)(r.q,{fas:!0,icon:"caret-left"})," Regresar"]})}},function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2})},function(e,t,n){"use strict";n(0);var c=n(11),r=n(1);t.a=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("ul",{className:"nav nav-tabs nav-fill mb-3",id:"ex1",role:"tablist",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(c.c,{className:"nav-link",to:"/menu",activeClassName:"active",children:"Todos los productos"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(c.c,{className:"nav-link",to:"/categories",activeClassName:"active",children:"Categorias"})})]})})}},function(e,t,n){"use strict";n(0);var c=n(8),r=n(6),a=n(10),s=n(23),i=n(49),o=n(3),l=n(1);var u=function(e){var t=e.price,n=e.name,c=e.category;return Object(l.jsx)("div",{children:Object(l.jsxs)(o.e,{style:{backgroundColor:"#FBFCFC"},children:[Object(l.jsx)(o.h,{children:n}),Object(l.jsx)(o.g,{children:Object(l.jsx)("small",{className:"fw-lighter",children:c})}),Object(l.jsx)(o.g,{children:Object(l.jsxs)("p",{children:[i.a.format(t)," USD"]})})]})})},d=n.p+"static/media/defaultProduct.4767ee23.webp";var j=function(e){var t=e.name,n=e.img,c=e.handleSelect;return Object(l.jsx)(o.F,{style:{cursor:"pointer"},children:Object(l.jsx)(o.f,{src:n||d,position:"top",alt:t,onClick:c})})};t.a=function(e){var t=Object(c.b)(),n=e.name,i=e.img,d=e.price,b=e.category,O=Object(r.g)();return Object(l.jsxs)(o.d,{style:{boxShadow:"0 2px 9px rgba(0, 0, 0, 0.2)"},children:[Object(l.jsx)(j,{name:n,img:i,handleSelect:function(){t(Object(s.b)(!0)),O.push("".concat(a.a.DETAILS,"/").concat(e._id))}}),Object(l.jsx)(u,{price:d,name:n,category:b.name})]})}},,,,,,,,,,,,,,,function(e,t,n){},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(14),s=n.n(a),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l=function(e){e&&e instanceof Function&&n.e(9).then(n.bind(null,102)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},u=(n(65),n(66),n(67),n(8)),d=n(26),j=n(52),b=n(4),O=n(5),h={checking:!0},m=n(22),f={records:[],productsCategory:[],isLoading:!0},p={records:[],total:0,limit:0,pagesNumber:0,currentPage:1,error:null,isLoading:!0,detailsData:null},x={results:[],loading:!1,error:null,thereAreProducts:null},g={isLoading:!0,cart:[],total:0,resume:0},v=Object(d.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.a.AUTH_LOGIN:return Object(b.a)(Object(b.a)(Object(b.a)({},e),t.payload),{},{checking:!1});case O.a.AUTH_CHECKING:return Object(b.a)(Object(b.a)({},e),{},{checking:t.payload});case O.a.AUTH_LOGOUT:return{checking:!0};default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.a.PRODUCT_GET:return Object(b.a)(Object(b.a)({},e),{},{records:Object(m.a)(t.payload.data),total:t.payload.total,limit:t.payload.limit,pagesNumber:t.payload.pagesNumber});case O.a.PRODUCT_GET_DETAILS:return Object(b.a)(Object(b.a)({},e),{},{detailsData:t.payload});case O.a.CURRENT_PAGE:return Object(b.a)(Object(b.a)({},e),{},{currentPage:t.payload});case O.a.ERROR_TO_FETCH:return Object(b.a)(Object(b.a)({},e),{},{error:t.payload});case O.a.IS_LOADING:return Object(b.a)(Object(b.a)({},e),{},{isLoading:t.payload});default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.a.CATEGORY_GET:return Object(b.a)(Object(b.a)({},e),{},{records:Object(m.a)(t.payload)});case O.a.PRODUCTS_CATEGORY:return Object(b.a)(Object(b.a)({},e),{},{productsCategory:Object(m.a)(t.payload)});case O.a.IS_LOADING:return Object(b.a)(Object(b.a)({},e),{},{isLoading:t.payload});default:return e}},shoppingCart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.a.GET_USER_CART:return Object(b.a)(Object(b.a)({},e),{},{cart:Object(m.a)(t.payload)});case O.a.IS_LOADING:return Object(b.a)(Object(b.a)({},e),{},{isLoading:t.payload});case O.a.ADD_TO_CART:return Object(b.a)(Object(b.a)({},e),{},{cart:[].concat(Object(m.a)(e.cart),[t.payload])});case O.a.COUNT_CART:return Object(b.a)(Object(b.a)({},e),{},{total:t.payload});case O.a.ADD_IT_ALL_UP:var n=0;return e.cart.forEach((function(e){n+=e.quantity*e.productId.price})),Object(b.a)(Object(b.a)({},e),{},{resume:n});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.a.PRODUCT_SEARCH:return Object(b.a)(Object(b.a)({},e),{},{results:t.payload.products,thereAreProducts:t.payload.thereAreProducts});case O.a.IS_LOADING:return Object(b.a)(Object(b.a)({},e),{},{loading:t.payload});default:return e}}}),N="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.c,y=Object(d.d)(v,N(Object(d.a)(j.a))),C=n(20),T=n(11),E=n(6),k=n(10),A=n(29),w=n.p+"static/media/error404.ded87f5c.svg",_=n(1);var R=function(){return Object(_.jsxs)("main",{className:"container d-flex justify-content-center flex-column align-items-center",children:[Object(_.jsx)("div",{className:"m-5 w-50",children:Object(_.jsx)("img",{src:w,alt:"",className:"img-fluid"})}),Object(_.jsx)("p",{style:{fontSize:"2rem"},children:"Not found"}),Object(_.jsx)(T.b,{to:"/",className:"btn btn-outline-dark",children:"Redirect"})]})};n(74);var S=function(){return Object(_.jsx)("section",{className:"loader-container",children:Object(_.jsxs)("div",{className:"lds-roller",children:[Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{})]})})},I=n(56);var U=function(e){var t=e.isAuthenticated,n=e.component,c=Object(I.a)(e,["isAuthenticated","component"]);return Object(_.jsx)(E.b,Object(b.a)(Object(b.a)({},c),{},{component:function(e){return t?Object(_.jsx)(E.a,{to:"/"}):Object(_.jsx)(n,Object(b.a)({},e))}}))},D=n(32),L=n(41),G=n(3),P=n(24);var F=function(e){var t=e.productId,n=function(e){var t,n=e.value,r=void 0===n?0:n,a=e.initialValues,s=Object(c.useState)(null!==(t=null===a||void 0===a?void 0:a.count)&&void 0!==t?t:r),i=Object(P.a)(s,2),o=i[0],l=i[1];return{isMaxCountReached:!!(null===a||void 0===a?void 0:a.maxCount)&&a.maxCount===o,maxCount:null===a||void 0===a?void 0:a.maxCount,counter:o,increaseBy:function(e){var t=(null===a||void 0===a?void 0:a.maxCount)?Math.min(Math.max(o+e,0),a.maxCount):Math.max(o+e,0);l(t)}}}({value:e.quantity,initialValues:{counter:1,maxCount:10}}),r=n.counter,a=n.increaseBy,s=n.maxCount,i=Object(c.useCallback)((function(){return!!s&&r===s}),[r,s]);return Object(_.jsx)("div",{className:"info-product mt-2",children:Object(_.jsxs)("div",{className:"product-detail",children:[Object(_.jsx)("img",{src:t.img,className:"info-image",alt:""}),Object(_.jsxs)("div",{className:"info-details",children:[Object(_.jsx)("span",{children:t.name}),Object(_.jsx)("span",{children:"Size: ****"})]}),Object(_.jsxs)("div",{className:"price-details",children:[Object(_.jsxs)("div",{className:"product-amount-container",children:[Object(_.jsx)("div",{className:"product-amount",children:r}),Object(_.jsxs)(G.c,{size:"sm",children:[Object(_.jsx)(G.b,{color:"dark",outline:!0,style:{border:"1px"},onClick:function(){return a(1)},disabled:i(),children:Object(_.jsx)("span",{className:i()&&"disabled",children:"+"})}),Object(_.jsx)(G.b,{color:"dark",outline:!0,style:{border:0},onClick:function(){return a(-1)},children:"-"})]})]}),Object(_.jsxs)("div",{className:"product-price",children:["$",t.price]})]})]})})};n(76);var H=function(e){var t=e.products,n=e.isLoading;return Object(_.jsx)("article",{className:"info",children:n?Object(_.jsx)(L.a,{}):null===t||void 0===t?void 0:t.map((function(e){var t=e.quantity,n=e.productId;return Object(_.jsx)(F,{productId:n,quantity:t},n._id)}))})};n(77);var B=function(e){var t=e.userName,n=e.total,c=Object(u.c)((function(e){return e.shoppingCart})).resume;return Object(_.jsxs)("div",{className:"summary",children:[Object(_.jsx)("h2",{className:"summary-title",children:"RESUMEN"}),Object(_.jsxs)("div",{className:"summary-sub-item",children:[Object(_.jsx)("span",{className:"summary-item-text font-weight-bold",children:"Productos"}),Object(_.jsx)("span",{className:"summary-item-price",children:n})]}),Object(_.jsxs)("div",{className:"summary-sub-item",children:[Object(_.jsx)("span",{className:"summary-item-text font-weight-bold",children:"Propietario"}),Object(_.jsx)("span",{className:"summary-item-price",children:t})]}),Object(_.jsxs)("div",{className:"summary-item",children:[Object(_.jsx)("span",{className:"summary-item-text",children:"Total"}),Object(_.jsxs)("span",{className:"summary-item-price",children:["$",c]})]}),Object(_.jsx)("div",{className:"d-grid gap-2",children:Object(_.jsx)(G.b,{color:"dark",children:"Ordenar ahora"})})]})};n(78);var M=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.auth})),n=t.checking,r=t.uid,a=t.name,s=Object(u.c)((function(e){return e.shoppingCart})),i=s.cart,o=s.total,l=s.isLoading;return Object(c.useEffect)((function(){n||e(Object(D.e)(r))}),[r]),Object(_.jsxs)("main",{className:"container mt-4",children:[Object(_.jsxs)("h1",{className:"cart-title",children:["Tu carrito (",o,")"]}),Object(_.jsx)("section",{className:"wrapper",children:Object(_.jsxs)("div",{className:"cart-bottom",children:[Object(_.jsx)(H,{products:i,isLoading:l}),Object(_.jsx)(B,{userName:a,total:o})]})})]})},z=n(34),q=n(33);var Y=function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(q.a,{}),Object(_.jsx)(M,{}),Object(_.jsx)(z.a,{})]})},W=n(35),V=n(9),K=n.n(V),J=n(12),$=n(13),X=n(25),Q=n(23),Z=Object(X.a)(),ee=function(e){return{type:O.a.CATEGORY_GET,payload:e}},te=function(e){return{type:O.a.PRODUCTS_CATEGORY,payload:e}},ne=n.p+"static/media/categories.b83d2a5f.jpg";n(84);var ce=function(e){var t=e.url,n=e.records;return Object(_.jsx)(_.Fragment,{children:n.map((function(e){return Object(_.jsxs)(G.d,{children:[Object(_.jsx)("div",{style:{backgroundImage:"url(".concat(ne,")")},className:"categories-blur-img"}),Object(_.jsx)("div",{className:"categories-info",children:Object(_.jsx)("div",{className:"categories-info-blur",children:Object(_.jsx)("span",{children:e.name})})}),Object(_.jsx)("div",{className:"categories-link",children:Object(_.jsx)(T.b,{to:"".concat(t,"/").concat(e.name),children:Object(_.jsxs)(G.b,{size:"md",outline:!0,rounded:!0,color:"light",className:"borders",children:[Object(_.jsx)(G.q,{className:"me-2",fas:!0,icon:"hat-wizard"}),"Descubrir"]})})})]},e._id)}))})},re=n(19),ae=n.n(re),se=n(48),ie=n(51);n(40);var oe=function(e){var t=e.id,n=e.name,r=Object(u.c)((function(e){return e.categories})).productsCategory,a=Object(u.b)();return Object(c.useEffect)((function(){a(function(e){return function(){var t=Object(J.a)(K.a.mark((function t(n){var c;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Z.get("".concat($.a.getProductsByCategory,"/").concat(e));case 3:c=t.sent,n(te(c.products)),n(Object(Q.b)(!1)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[a]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{style:{position:"fixed",bottom:"1rem",right:"0.3rem",zIndex:"999"},children:Object(_.jsx)(se.a,{})}),Object(_.jsx)("h4",{className:"mx-2 my-4",children:Object(_.jsxs)(ae.a,{right:!0,cascade:!0,children:[Object(_.jsx)("h2",{children:"Categoria"}),Object(_.jsx)("h5",{style:{display:"inline"},children:Object(_.jsx)(G.a,{className:"",color:"dark",children:n.toLowerCase()})})]})}),Object(_.jsx)("div",{className:"container-fluid cards-grid",children:null===r||void 0===r?void 0:r.map((function(e){return Object(_.jsx)(ie.a,Object(b.a)({},e),e._id)}))})]})},le=n(50);var ue=function(){var e=Object(E.i)(),t=e.path,n=e.url,r=Object(u.b)(),a=Object(u.c)((function(e){return e.categories})),s=a.records,i=a.isLoading;return Object(c.useEffect)((function(){r(function(){var e=Object(J.a)(K.a.mark((function e(t){var n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.get("".concat($.a.getCategories));case 3:n=e.sent,t(ee(n.categories)),t(Object(Q.b)(!1)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]),i?Object(_.jsx)("div",{className:"d-flex justify-content-center mt-5",children:Object(_.jsx)(G.H,{color:"dark",children:Object(_.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"mt-4 container-fluid",children:Object(_.jsx)(le.a,{})}),Object(_.jsxs)(E.d,{children:[Object(_.jsx)(E.b,{exact:!0,path:"".concat(t,"/"),children:Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)(ae.a,{right:!0,cascade:!0,children:Object(_.jsx)("h2",{className:"mt-5",children:"Categorias"})}),Object(_.jsx)("hr",{}),Object(_.jsx)("section",{className:"cards-grid categories-mg",children:Object(_.jsx)(ce,{url:n,records:s})})]})}),null===s||void 0===s?void 0:s.map((function(e){return Object(_.jsx)(E.b,{exact:!0,path:"".concat(t,"/").concat(e.name),children:Object(_.jsx)(oe,{id:e._id,name:e.name})},e._id)})),Object(_.jsx)(E.a,{to:"".concat(t)})]})]})};var de=function(){return Object(c.useEffect)((function(){document.title="Stardui - Categories"}),[]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(W.e,{}),Object(_.jsx)(ue,{}),Object(_.jsx)(W.c,{})]})},je=Object(c.lazy)((function(){return n.e(8).then(n.bind(null,103))})),be=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,107))})),Oe=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,104))})),he=Object(c.lazy)((function(){return Promise.all([n.e(7),n.e(5)]).then(n.bind(null,105))})),me=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,106))}));var fe=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.auth})).uid;return Object(c.useEffect)((function(){e(Object(A.a)())}),[e]),Object(c.useEffect)((function(){t&&e(Object(D.c)(t))}),[t]),Object(_.jsx)(T.a,{children:Object(_.jsx)("div",{children:Object(_.jsx)(c.Suspense,{fallback:Object(_.jsx)(S,{}),children:Object(_.jsxs)(E.d,{children:[Object(_.jsx)(E.b,{exact:!0,path:"/",component:be}),Object(_.jsx)(U,{path:k.a.AUTH_BASE,component:he,isAuthenticated:!!t}),Object(_.jsx)(U,{path:k.a.CART,component:Y,isAuthenticated:!t}),Object(_.jsx)(E.b,{path:k.a.MENU_BASE,component:Oe}),Object(_.jsx)(E.b,{exact:!0,path:k.a.ABOUT,component:je}),Object(_.jsx)(E.b,{exact:!0,path:k.a.DETAILS_NAME,component:me}),Object(_.jsx)(E.b,{path:k.a.CATEGORIES,component:de}),Object(_.jsx)(E.b,{path:"*",component:R})]})})})})};var pe=function(){return Object(_.jsxs)(u.a,{store:y,children:[Object(_.jsx)(fe,{}),Object(_.jsx)(C.a,{position:"top-right",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})};s.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(pe,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");i?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):o(t,e)}))}}(),l()}],[[85,1,2]]]);
//# sourceMappingURL=main.104cc0ef.chunk.js.map