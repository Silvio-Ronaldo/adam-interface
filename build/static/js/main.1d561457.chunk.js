(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,n){e.exports=n(41)},21:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),u=n.n(c);n(21);var s=function(){return r.a.createElement("header",{id:"main-header"},r.a.createElement("div",{className:"content"},r.a.createElement("p",null,"ADAM - GERENCIADOR DE RESPOSTAS OLIST")))},o=n(2),l=n.n(o),i=n(3),p=n(4);var m=function(e){var t=e.question,n=e.createdAt,a=e.answer;return r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"content"},r.a.createElement("p",null,t),r.a.createElement("p",null,"R: ",a," ",r.a.createElement("span",null,n))),r.a.createElement("hr",null))},d=n(15),f=n.n(d).a.create({baseURL:"https://adam-backend.herokuapp.com"});var E=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/getQuestions/product/1");case 2:t=e.sent,console.log(t),t.data&&c(t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"postlist"},n.map((function(e){return r.a.createElement(m,Object.assign({key:e._id},e))})))};var v=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1];function u(){return(u=Object(i.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,f.post("/storeQuestion/user/:userId/product/1",{question:n});case 3:a=e.sent,console.log(a.data._id),s(a.data.productId,a.data._id);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(e,t){return o.apply(this,arguments)}function o(){return(o=Object(i.a)(l.a.mark((function e(t,a){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.post("/sendMessage/user/1/product/1",{question:n});case 2:r=e.sent,m(t,a,r.data.answer);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t,n){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(l.a.mark((function e(t,n,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.post("/answerQuestion/product/".concat(t,"/question/").concat(n),{answer:a});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"question"},r.a.createElement("center",null,r.a.createElement("form",{onSubmit:function(e){return function(e){return u.apply(this,arguments)}(e)}},r.a.createElement("textarea",{placeholder:"Escreva uma pergunta..",maxLength:"2000",onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Perguntar"}))))};n(40);var h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement(v,null),r.a.createElement("div",{className:"div-scroll"},r.a.createElement(E,null)))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1d561457.chunk.js.map