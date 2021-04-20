(this["webpackJsonpbmi-calculator"]=this["webpackJsonpbmi-calculator"]||[]).push([[0],{206:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(16),i=n.n(a),o=(n(58),n(59),n(31)),l=n(4),s=(n(64),"CALCULATE_BMI"),u="REMOVE_DATA",d="UNDO_DATA",h=n(1);var b=Object(l.b)(null,(function(e){return{calculate_BMI:function(t,n){e(function(e,t){return{type:s,weight:e,height:t}}(t,n))}}}))((function(e){var t=Object(r.useRef)(null),n=Object(r.useRef)(null),c=Object(r.useState)(0),a=Object(o.a)(c,2),i=a[0],l=a[1],s=Object(r.useState)(0),u=Object(o.a)(s,2),d=u[0],b=u[1];return Object(h.jsxs)("div",{className:"input-data",children:[Object(h.jsxs)("div",{className:"input-data-col",children:[Object(h.jsx)("label",{children:"Weight (in kg)"}),Object(h.jsx)("input",{type:"number",ref:t,id:"weight",placeholder:"50",onChange:function(e){""===e.target.value?l(0):l(e.target.value)}})]}),Object(h.jsxs)("div",{className:"input-data-col",children:[Object(h.jsx)("label",{children:"Height (in cm)"}),Object(h.jsx)("input",{type:"number",ref:n,id:"height",placeholder:"170",onChange:function(e){""===e.target.value?b(0):b(e.target.value)}})]}),Object(h.jsx)("button",{disabled:0===i||0===d,type:"button",onClick:function(){t.current.value="",n.current.value="",l(0),b(0),e.calculate_BMI(i,d)},children:"Calculate BMI"})]})}));n(66);var j=Object(l.b)((function(e,t){return{calculate_BMI:e.calculate_BMI}}),(function(e){return{remove_DATA:function(t){e(function(e){return{type:u,id:e}}(t))},undo_DATA:function(){e({type:d})}}}))((function(e){var t=e.calculate_BMI.arrayBMI,n=function(e){return e<18.5?Object(h.jsx)("p",{children:"B\u1ea1n \u0111ang g\u1ea7y \u0111\u1ea5y c\u1ed1 \u0103n nhi\u1ec1u v\xf4 nhe !"}):e>=18.5&&e<24.9?Object(h.jsx)("p",{children:"C\u01a1 th\u1ec3 b\u1ea1n c\xe2n \u0111\u1ed1i \u0111\u1ea5y !"}):e>=25&&e<29.9?Object(h.jsx)("p",{children:"B\u1ea1n h\u01a1i th\u1eeba c\xe2n t\xed th\xf4i !"}):e>=30&&e<34.9?Object(h.jsx)("p",{children:"B\u1ea1n b\u1ecb b\xe9o ph\xec c\u1ea5p \u0111\u1ed9 I r\u1ed3i nhe !"}):e>=35&&e<39.9?Object(h.jsx)("p",{children:'B\u1ea1n b\u1ecb b\xe9o ph\xec c\u1ea5p \u0111\u1ed9 II r\u1ed3i n\xean gi\u1ea3m c\xe2n \u0111i !"'}):Object(h.jsx)("p",{children:"B\u1ea1n b\u1ecb b\xe9o ph\xec c\u1ea5p \u0111\u1ed9 III r\u1ed3i n\xean gi\u1ea3m c\xe2n g\u1ea5p !"})};return Object(h.jsxs)("div",{className:"notice",children:[Object(h.jsx)("h2",{children:"7 Day Data"}),Object(h.jsx)("div",{className:"notice-container",children:0===t.length?Object(h.jsx)("p",{style:{width:"100%",fontSize:"calc(10px + 1vmin)",textAlign:"center"},children:"No logs found"}):t.map((function(t,r){return Object(h.jsxs)("div",{className:"notice-message",children:[Object(h.jsxs)("h3",{children:["BMI : ",t.results]}),n(t.results),Object(h.jsxs)("h4",{children:[Object(h.jsxs)("span",{children:["Weight : ",t.weight," kg"]}),Object(h.jsxs)("span",{children:["Height : ",t.height," cm"]}),Object(h.jsxs)("span",{children:["Date : ",t.date]})]}),Object(h.jsx)("button",{onClick:function(){e.remove_DATA(t.id)},children:"x"})]},r)}))}),e.calculate_BMI.isRemove?Object(h.jsx)("button",{className:"btn-undo",onClick:function(){return e.undo_DATA()},children:"Undo"}):""]})})),g=n(53);var p=Object(l.b)((function(e){return{calculate_BMI:e.calculate_BMI}}),null)((function(e){return Object(h.jsx)("div",{style:{width:"70%"},children:Object(h.jsx)(g.Line,{data:function(t){var n=t.getContext("2d").createLinearGradient(63,81,181,700);return n.addColorStop(0,"#929dd9"),n.addColorStop(1,"#172b4d"),{labels:0===e.calculate_BMI.arrayBMI.length?[]:e.calculate_BMI.arrayBMI.map((function(e){return e.date})),datasets:[{data:0===e.calculate_BMI.arrayBMI.length?[]:e.calculate_BMI.arrayBMI.map((function(e){return e.results})),label:"BMI",backgroundColor:n,borderBackground:n,borderColor:"#3F51B5",pointRadius:7,pointHoverRadius:8,pointHoverBorderColor:"white",pointHoverBorderWidth:2,pointBorderColor:"#E00000",pointBorderWidth:2}]}},options:{responsive:!0,scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Date",fontSize:13,fontColor:"white"},gridLines:{display:!1,color:"white"},ticks:{fontColor:"white",fontSize:16}}],yAxes:[{scaleLabel:{display:!0,labelString:"BMI",fontSize:13,fontColor:"white"},gridLines:{display:!1,color:"white"},ticks:{fontColor:"white",fontSize:16,beginAtZero:!0}}]},tooltips:{titleFontSize:13,bodyFontSize:13}}})})}));var f=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{className:"App-header",children:Object(h.jsx)("h2",{children:"BMI Tracker"})}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(b,{}),Object(h.jsx)(p,{}),Object(h.jsx)(j,{})]})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,207)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},B=n(7),I=n(5),x=n(28),M=n.n(x),v=function(e,t){if(localStorage)try{return localStorage.setItem(e,JSON.stringify(t))}catch(n){console.err("Error storing item ".concat(e," to localStorage"),n)}},y={results:0,arrayBMI:function(e){if(localStorage)try{return JSON.parse(localStorage.getItem(e))}catch(t){console.error("Error getting item ".concat(e," from localStorage"),t)}}("data"),isRemove:!1},m=[],C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return e.results=Math.round(t.weight/Math.pow(t.height/100,2)*10)/10,e.arrayBMI.length>=7&&e.arrayBMI.shift(),e.arrayBMI.push({id:e.arrayBMI.length,date:M()().format("DD-MM-YYYY"),weight:t.weight,height:t.height,results:e.results}),v("data",e.arrayBMI.sort((function(e,t){return e.id-t.id}))),Object(I.a)({},e);case u:return m=e.arrayBMI.filter((function(e){return e.id===t.id})),e.arrayBMI=e.arrayBMI.filter((function(e){return e.id!==t.id})),v("data",e.arrayBMI.sort((function(e,t){return e.id-t.id}))),Object(I.a)(Object(I.a)({},e),{},{isRemove:!0});case d:return!0===e.isRemove?(e.arrayBMI.push(m[0]),v("data",e.arrayBMI.sort((function(e,t){return e.id-t.id}))),Object(I.a)(Object(I.a)({},e),{},{isRemove:!1})):Object(I.a)({},e);default:return Object(I.a)({},e)}},S=Object(B.b)({calculate_BMI:C}),A=Object(B.c)(S);i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(l.a,{store:A,children:Object(h.jsx)(f,{})})}),document.getElementById("root")),O()},58:function(e,t,n){},59:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){}},[[206,1,2]]]);
//# sourceMappingURL=main.59762d59.chunk.js.map