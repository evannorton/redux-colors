(window["webpackJsonpredux-colors"]=window["webpackJsonpredux-colors"]||[]).push([[0],{12:function(e,r,t){e.exports=t(24)},22:function(e,r,t){},23:function(e,r,t){},24:function(e,r,t){"use strict";t.r(r);var n=t(0),o=t.n(n),c=t(4),a=t.n(c),i=t(6),l=t(1),u=t(5),s="CHANGE_COLORS",f=function(){return{type:s}},O=function(){for(var e="#",r=0;r<6;r++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e};function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}var w=function(){var e=new Array(100).fill(0);return e.forEach(function(r,t){e[t]=O()}),e},b={colors:w()};var d=function(){return{type:"TOGGLE_ORIENTATION"}};function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(t,!0).forEach(function(r){Object(u.a)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var v={row:!0},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"TOGGLE_ORIENTATION":return y({},e,{row:!e.row});default:return e}},j=Object(l.b)({color:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;switch((arguments.length>1?arguments[1]:void 0).type){case s:return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(t,!0).forEach(function(r){Object(u.a)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({},e,{colors:w()});default:return e}},orientation:g}),m=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c;t(22),t(23);var E=function(e){var r=e.color;return o.a.createElement("div",{style:{backgroundColor:r,flex:1},className:"color-square"})},P=Object(i.b)(function(e){return{colors:e.color.colors,row:e.orientation.row}},function(e){return Object(l.a)({handleChangeColors:f,handleToggleOrientation:d},e)})(function(e){var r=e.colors,t=e.handleChangeColors,n=e.handleToggleOrientation,c=e.row;return o.a.createElement("div",{tabIndex:0,style:{outline:"none",height:"100vh",width:"100%",display:"flex",flexDirection:c?"row":"column",overflow:"hidden"},onKeyPress:t,onClick:n,className:"App"},new Array(100).fill(0).map(function(e,t){return o.a.createElement(E,{key:t,color:r[t]})}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(i.a,{store:Object(l.d)(j,m())},o.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.a900224e.chunk.js.map