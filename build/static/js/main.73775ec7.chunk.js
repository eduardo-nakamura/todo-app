(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(6),l=a.n(c),r=(a(13),a(2)),s=(a(14),a(7)),i=function(e){var t=e.setInputText,a=e.todos,o=e.setTodos,c=e.inputText,l=e.setStatus;return n.a.createElement("form",null,n.a.createElement("input",{value:c,onChange:function(e){t(e.target.value)},type:"text",className:"todo-input"}),n.a.createElement("button",{onClick:function(e){e.preventDefault(),o([].concat(Object(s.a)(a),[{text:c,completed:!1,id:1e3*Math.random()}])),t("")},className:"todo-button",type:"submit"},n.a.createElement("i",{className:"fas fa-plus-square"})),n.a.createElement("div",{className:"select"},n.a.createElement("select",{onChange:function(e){l(e.target.value)},name:"todos",className:"filter-todo"},n.a.createElement("option",{value:"all"},"All"),n.a.createElement("option",{value:"completed"},"Completed"),n.a.createElement("option",{value:"uncompleted"},"Uncompleted"))))},u=a(4),m=function(e){var t=e.text,a=e.todo,o=e.todos,c=e.setTodos;return n.a.createElement("div",{className:"todo"},n.a.createElement("li",{className:"todo-item ".concat(a.completed?"completed":"")},t),n.a.createElement("button",{onClick:function(){c(o.map((function(e){return e.id===a.id?Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed}):e})))},className:"complete-btn"},n.a.createElement("i",{className:"fas fa-check"})),n.a.createElement("button",{onClick:function(){c(o.filter((function(e){return e.id!==a.id})))},className:"trash-btn"},n.a.createElement("i",{className:"fas fa-trash"})))},d=function(e){var t=e.todos,a=e.setTodos,o=e.filterTodos;return console.log(o),console.log(t),n.a.createElement("div",{className:"todo-container"},n.a.createElement("ul",{className:"todo-list"},o.map((function(e){return n.a.createElement(m,{setTodos:a,todos:t,key:e.id,todo:e,text:e.text})}))))};var f=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],l=Object(o.useState)([]),s=Object(r.a)(l,2),u=s[0],m=s[1],f=Object(o.useState)("all"),p=Object(r.a)(f,2),E=p[0],b=p[1],h=Object(o.useState)([]),v=Object(r.a)(h,2),g=v[0],w=v[1];Object(o.useEffect)((function(){S()}),[]),Object(o.useEffect)((function(){N(),O()}),[u,E]);var N=function(){switch(E){case"completed":w(u.filter((function(e){return!0===e.completed})));break;case"uncompleted":w(u.filter((function(e){return!1===e.completed})));break;default:w(u)}},O=function(){localStorage.setItem("todos",JSON.stringify(u))},S=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));m(e)}};return n.a.createElement("div",{className:"App"},n.a.createElement("header",null,n.a.createElement("h2",null,"Ed's Todo List")),n.a.createElement(i,{inputText:a,todos:u,setTodos:m,setInputText:c,setStatus:b}),n.a.createElement(d,{setTodos:m,todos:u,filterTodos:g}),n.a.createElement("footer",{className:"footer"},n.a.createElement("h4",null,"Tutorial by ",n.a.createElement("a",{href:"https://www.youtube.com/watch?v=pCA4qpQDZD8"},"Dev Ed")),n.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/pCA4qpQDZD8",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.73775ec7.chunk.js.map