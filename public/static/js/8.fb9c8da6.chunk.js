(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[8],{100:function(e,t,a){},101:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return l}));var n=a(108),r=function(){return{type:"REQUIRE"}},c=function(e){return{type:"MINLENGTH",val:e}},o=function(){return{type:"EMAIL"}},l=function(e,t){var a,r=!0,c=Object(n.a)(t);try{for(c.s();!(a=c.n()).done;){var o=a.value;"REQUIRE"===o.type&&(r=r&&e.trim().length>0),"MINLENGTH"===o.type&&(r=r&&e.trim().length>=o.val),"MAXLENGTH"===o.type&&(r=r&&e.trim().length<=o.val),"MIN"===o.type&&(r=r&&+e>=o.val),"MAX"===o.type&&(r=r&&+e<=o.val),"EMAIL"===o.type&&(r=r&&/^\S+@\S+\.\S+$/.test(e))}}catch(l){c.e(l)}finally{c.f()}return r}},106:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(3),r=a(103),c=a(102),o=a(0),l=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return Object(c.a)({},e,{inputs:Object(c.a)({},e.inputs,Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return Object(c.a)({},e,{inputs:t.inputs,isValid:t.formIsValid});default:return e}},i=function(e,t){var a=Object(o.useReducer)(l,{inputs:e,isValid:t}),r=Object(n.a)(a,2),c=r[0],i=r[1];return[c,Object(o.useCallback)((function(e,t,a){i({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(o.useCallback)((function(e,t){i({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},107:function(e,t,a){"use strict";var n=a(3),r=a(102),c=a(0),o=a.n(c),l=a(105),i=(a(109),function(e,t){switch(t.type){case"CHANGE":return Object(r.a)({},e,{value:t.val,isValid:Object(l.d)(t.val,t.validators)});case"TOUCH":return Object(r.a)({},e,{isTouched:!0});default:return e}});t.a=function(e){var t=function(t){m({type:"CHANGE",val:t.target.value,validators:e.validators})},a=function(e){m({type:"TOUCH"})},r={value:e.initailValue||"",isValid:e.initailValid||!1,isTouched:!1},l=Object(c.useReducer)(i,r),u=Object(n.a)(l,2),s=u[0],m=u[1],d=e.id,p=e.onInput,f=s.value,v=s.isValid;Object(c.useEffect)((function(){p(d,f,v)}),[d,f,v,p]);var E="input"===e.element?o.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:t,onBlur:a,value:s.value}):o.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:t,onBlur:a,value:s.value,placeholder:e.placeholder});return o.a.createElement("div",{className:"form-control ".concat(!s.isValid&&s.isTouched&&"form-control--invalid")},o.a.createElement("label",{htmlFor:e.id},e.label),E,!s.isValid&&s.isTouched&&o.a.createElement("p",null,e.errorText))}},109:function(e,t,a){},130:function(e,t,a){},160:function(e,t,a){},164:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},210:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return R}));var n=a(16),r=a.n(n),c=a(22),o=a(3),l=a(0),i=a.n(l),u=a(13),s=a(102),m=a(39),d=a(35),p=a(97),f=a(36),v=a(212),E=a(106),h=a(10),b=a(96);a(160);function O(e){var t=e.addComment,a=e.placeId,n=Object(l.useContext)(h.a),u=Object(l.useState)(""),s=Object(o.a)(u,2),m=s[0],O=s[1],j=Object(d.a)(),y=j.isLoading,C=j.error,N=j.sendRequest,g=j.clearError,k=Object(E.a)({comment:{value:"",isValid:!1}},!1),I=Object(o.a)(k,2),w=(I[0],I[1]),x=function(){var e=Object(c.a)(r.a.mark((function e(o){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.preventDefault(),function(){var e=Object(c.a)(r.a.mark((function e(){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N("".concat("https://placesharer.herokuapp.com/api","/places/").concat(a,"/comments"),"POST",JSON.stringify({comment:m}),{"Content-Type":"application/json",Authorization:"Bearer "+n.token});case 3:c=e.sent,t(c.comment),w({comment:{value:"",isValid:!1}},!1),O(""),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement("div",{className:"add_comment-container",noValidate:!0},i.a.createElement(l.Fragment,null,i.a.createElement(p.a,{error:C,onClear:g}),y&&i.a.createElement(f.a,null),n.isLoggedIn&&i.a.createElement("form",{className:"comment-form"},i.a.createElement(v.a,{style:{backgroundColor:"white",borderRadius:"4px"},label:"Write your comment here ...",onChange:function(e){return O(e.target.value)}}),i.a.createElement(b.a,{id:"comment-button",onClick:x},"Add Comment"))))}var j=a(134),y=a(165),C=a.n(y),N=a(166),g=a.n(N),k=a(107),I=a(105),w=a(161),x=a.n(w);a(164);function V(e){var t=Object(l.useState)(!1),a=Object(o.a)(t,2),n=a[0],s=a[1],m=e.comment,p=m._id,f=m.creator,v=m.comment,b=m.date,O=Object(d.a)().sendRequest,y=Object(l.useContext)(h.a),N=f&&y&&y.userId&&f._id===y.userId,w=Object(u.h)().placeId,V=Object(E.a)({comment:{value:v,isValid:!1}},!1),_=Object(o.a)(V,2),T=_[0],A=_[1],S=function(){var t=Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O("".concat("https://placesharer.herokuapp.com/api","/places/").concat(w,"/comments/").concat(p),"DELETE",null,{Authorization:"Bearer ".concat(y.token)});case 3:e.removeComment(p),t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),R=function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),function(){var t=Object(c.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a={comment:T.inputs.comment.value},t.next=4,O("".concat("https://placesharer.herokuapp.com/api","/places/").concat(w,"/comments/").concat(p),"PATCH",JSON.stringify(a),{"Content-Type":"application/json",Authorization:"Bearer "+y.token});case 4:e.updateComment(p,a),s(!1),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return i.a.createElement("div",{className:"container"},n?i.a.createElement("div",{className:"conatiner"},i.a.createElement("form",{className:"comment-update-form",onSubmit:R},i.a.createElement(k.a,{id:"comment",element:"input",label:"comment",validators:[Object(I.c)()],errorText:"Please enter a valid message (min. 5 characters).",onInput:A,initailValue:v,initailValid:!0}),i.a.createElement(j.a,{variant:"contained",color:"secondary",type:"submit",disabled:!T.isValid},"Update"))):i.a.createElement("div",{className:"comment-container row"},i.a.createElement("div",{className:"commenter-info"},f&&i.a.createElement("img",{src:f.image,alt:f.name,width:"60",height:"60"}),i.a.createElement("h4",null,f&&f.name),i.a.createElement(x.a,{className:"date",format:"MMMM Do YYYY, h:mm:ss a"},b)),i.a.createElement("div",{className:"comments-holder"},i.a.createElement("p",null,v)),i.a.createElement("div",{className:"btn-holder"},N&&i.a.createElement(j.a,{variant:"contained",color:"secondary",onClick:S,startIcon:i.a.createElement(C.a,null),size:"small",style:{marginRight:"10px"}},"Delete"),N&&i.a.createElement(j.a,{variant:"contained",onClick:function(){s((function(e){return!e}))},startIcon:i.a.createElement(g.a,null),size:"small"},"Edit"))))}a(167);function _(e){var t=e.comments,a=e.removeComment,n=e.updateComment;return i.a.createElement("div",null,t&&t.length>0?i.a.createElement(i.a.Fragment,null,i.a.createElement("h5",{className:"comments-counter"},i.a.createElement("span",null,t.length)," Comment",1===t.length?" ":"s"),t.map((function(e){return i.a.createElement(V,{key:e._id,comment:e,removeComment:a,updateComment:n})}))):null)}function T(e){var t=e.placeId,a=Object(d.a)(),n=a.isLoading,u=a.error,v=a.sendRequest,E=a.clearError,h=Object(l.useState)(),b=Object(o.a)(h,2),j=b[0],y=b[1];Object(l.useEffect)((function(){(function(){var e=Object(c.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v("".concat("https://placesharer.herokuapp.com/api","/places/").concat(t,"/comments"));case 3:a=e.sent,y(a.comments),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t,v]);return i.a.createElement("div",null,n&&i.a.createElement(f.a,null),i.a.createElement(p.a,{error:u,onClear:E}),i.a.createElement(O,{addComment:function(e){y((function(t){return[].concat(Object(m.a)(t),[e])}))},placeId:t}),!n&&i.a.createElement(_,{removeComment:function(e){y((function(t){return t.filter((function(t){return t._id!==e}))}))},updateComment:function(e,t){y((function(a){return a.map((function(a){return a._id===e?{_id:e,creator:Object(s.a)({},a.creator),title:t.title,comment:t.comment}:a}))}))},comments:j}))}a(130);var A=a(98),S=function(e){var t=e.place,a=t.name,n=t.image,r=t.title,c=t.address,o=t.description;return i.a.createElement("div",{className:"place-item"},i.a.createElement(A.a,{className:"place-item__content detailed-view"},i.a.createElement("div",{className:"place-item__image"},i.a.createElement("img",{src:n.imageUrl,alt:a})),i.a.createElement("div",{className:"place-item__info"},i.a.createElement("h2",null,r),i.a.createElement("h3",null,c),i.a.createElement("p",null,o))))};a(168);function R(){var e=Object(l.useState)({}),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(d.a)(),m=s.isLoading,v=s.error,E=s.sendRequest,h=s.clearError,b=Object(u.h)().placeId;return Object(l.useEffect)((function(){(function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E("".concat("https://placesharer.herokuapp.com/api","/places/").concat(b));case 3:t=e.sent,n(t.place),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[E,b]),i.a.createElement("div",{className:"spinner-justify"},m&&i.a.createElement(f.a,null),i.a.createElement(p.a,{error:v,onClear:h}),!m&&a&&Object.keys(a).length>0&&i.a.createElement(S,{place:a}),i.a.createElement(T,{placeId:b}))}},96:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(4);a(101);t.a=function(e){return e.href?r.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?r.a.createElement(c.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):r.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,id:e.id},e.children)}},97:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(99),o=a(96);t.a=function(e){var t=e.error,a=e.onClear,n=e.header;return r.a.createElement(c.a,{onCancel:a,header:n||"An Error Occurred!!!",show:!!t,footer:r.a.createElement(o.a,{onClick:a},"Okay")},r.a.createElement("div",null,t))}},98:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(104);t.a=function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},99:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(12),o=a.n(c),l=(a(100),a(93)),i=a(37),u=function(e){var t=r.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},r.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},r.a.createElement("h2",null,e.header)),r.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),r.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return o.a.createPortal(t,document.getElementById("modal-hook"))};t.a=function(e){return r.a.createElement(n.Fragment,null,e.show&&r.a.createElement(i.a,{onClick:e.onCancel}),r.a.createElement(l.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},r.a.createElement(u,e)))}}}]);
//# sourceMappingURL=8.fb9c8da6.chunk.js.map