(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[11],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(103);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},103:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},104:function(e,t,n){},105:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return i}));var a=n(108),r=function(){return{type:"REQUIRE"}},c=function(e){return{type:"MINLENGTH",val:e}},o=function(){return{type:"EMAIL"}},i=function(e,t){var n,r=!0,c=Object(a.a)(t);try{for(c.s();!(n=c.n()).done;){var o=n.value;"REQUIRE"===o.type&&(r=r&&e.trim().length>0),"MINLENGTH"===o.type&&(r=r&&e.trim().length>=o.val),"MAXLENGTH"===o.type&&(r=r&&e.trim().length<=o.val),"MIN"===o.type&&(r=r&&+e>=o.val),"MAX"===o.type&&(r=r&&+e<=o.val),"EMAIL"===o.type&&(r=r&&/^\S+@\S+\.\S+$/.test(e))}}catch(i){c.e(i)}finally{c.f()}return r}},106:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(3),r=n(103),c=n(102),o=n(0),i=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var a in e.inputs)e.inputs[a]&&(n=a===t.inputId?n&&t.isValid:n&&e.inputs[a].isValid);return Object(c.a)({},e,{inputs:Object(c.a)({},e.inputs,Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return Object(c.a)({},e,{inputs:t.inputs,isValid:t.formIsValid});default:return e}},l=function(e,t){var n=Object(o.useReducer)(i,{inputs:e,isValid:t}),r=Object(a.a)(n,2),c=r[0],l=r[1];return[c,Object(o.useCallback)((function(e,t,n){l({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),Object(o.useCallback)((function(e,t){l({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},107:function(e,t,n){"use strict";var a=n(3),r=n(102),c=n(0),o=n.n(c),i=n(105),l=(n(109),function(e,t){switch(t.type){case"CHANGE":return Object(r.a)({},e,{value:t.val,isValid:Object(i.d)(t.val,t.validators)});case"TOUCH":return Object(r.a)({},e,{isTouched:!0});default:return e}});t.a=function(e){var t=function(t){d({type:"CHANGE",val:t.target.value,validators:e.validators})},n=function(e){d({type:"TOUCH"})},r={value:e.initailValue||"",isValid:e.initailValid||!1,isTouched:!1},i=Object(c.useReducer)(l,r),u=Object(a.a)(i,2),s=u[0],d=u[1],f=e.id,m=e.onInput,p=s.value,b=s.isValid;Object(c.useEffect)((function(){m(f,p,b)}),[f,p,b,m]);var v="input"===e.element?o.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:t,onBlur:n,value:s.value}):o.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:t,onBlur:n,value:s.value,placeholder:e.placeholder});return o.a.createElement("div",{className:"form-control ".concat(!s.isValid&&s.isTouched&&"form-control--invalid")},o.a.createElement("label",{htmlFor:e.id},e.label),v,!s.isValid&&s.isTouched&&o.a.createElement("p",null,e.errorText))}},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(23);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(a.a)(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c,o=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){i=!0,c=e},f:function(){try{o||null==r.return||r.return()}finally{if(i)throw c}}}}},109:function(e,t,n){},115:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var a=n(16),r=n.n(a),c=n(22),o=n(3),i=n(0),l=n.n(i),u=n(98),s=n(107),d=n(96),f=n(97),m=n(36),p=n(106),b=n(105),v=n(35);n(115);t.default=function(){var e=Object(v.a)(),t=e.isLoading,n=e.error,a=e.sendRequest,E=e.clearError,y=Object(i.useState)(),h=Object(o.a)(y,2),O=h[0],j=h[1],g=Object(p.a)({email:{value:"",isValid:!1}},!1),N=Object(o.a)(g,3),w=N[0],C=N[1],T=N[2],I=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={email:w.inputs.email.value},e.prev=1,t.preventDefault(),e.next=5,a("".concat("https://placesharer.herokuapp.com/api","/users/forget"),"POST",JSON.stringify(n),{"Content-Type":"application/json"});case 5:c=e.sent,j(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),T();case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(i.Fragment,null,O?l.a.createElement(u.a,{className:"forget_password no-select"},l.a.createElement("p",null,O.message)):l.a.createElement(u.a,{className:"forget_password no-select"},l.a.createElement("form",{className:"place-form",onSubmit:I},l.a.createElement(s.a,{id:"email",element:"input",type:"email",label:"Email",validators:[Object(b.a)()],errorText:"Please enter a valid email address",onInput:C}),l.a.createElement(d.a,{type:"submit",disabled:!w.isValid},"Send Email"))),l.a.createElement(f.a,{error:n,onClear:E}),t&&l.a.createElement(m.a,{asOverlay:!0}))}},96:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(4);n(101);t.a=function(e){return e.href?r.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?r.a.createElement(c.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):r.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,id:e.id},e.children)}},97:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(99),o=n(96);t.a=function(e){var t=e.error,n=e.onClear,a=e.header;return r.a.createElement(c.a,{onCancel:n,header:a||"An Error Occurred!!!",show:!!t,footer:r.a.createElement(o.a,{onClick:n},"Okay")},r.a.createElement("div",null,t))}},98:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(104);t.a=function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},99:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(12),o=n.n(c),i=(n(100),n(93)),l=n(37),u=function(e){var t=r.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},r.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},r.a.createElement("h2",null,e.header)),r.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),r.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return o.a.createPortal(t,document.getElementById("modal-hook"))};t.a=function(e){return r.a.createElement(a.Fragment,null,e.show&&r.a.createElement(l.a,{onClick:e.onCancel}),r.a.createElement(i.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},r.a.createElement(u,e)))}}}]);
//# sourceMappingURL=11.e0146a4c.chunk.js.map