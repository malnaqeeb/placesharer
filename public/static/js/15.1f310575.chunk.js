(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[15],{102:function(e,a,t){},103:function(e,a,t){},104:function(e,a,t){},110:function(e,a,t){"use strict";var n=t(0),r=t.n(n);t(115);a.a=function(e){var a=e.image,t=e.alt,n=e.style,o=e.className,c=e.width;return r.a.createElement("div",{className:"avatar ".concat(o),style:n},r.a.createElement("img",{src:a,alt:t,style:{width:c,height:c}}))}},115:function(e,a,t){},143:function(e,a,t){"use strict";var n=t(2),r=t(1),o=t(0),c=(t(8),t(20)),i=t(22),l=t(24),s=t(197),d=t(31),u=o.forwardRef((function(e,a){var t=e.children,i=e.classes,l=e.className,u=e.color,m=void 0===u?"default":u,p=e.component,b=void 0===p?"button":p,h=e.disabled,f=void 0!==h&&h,v=e.disableElevation,g=void 0!==v&&v,y=e.disableFocusRipple,E=void 0!==y&&y,x=e.endIcon,k=e.focusVisibleClassName,S=e.fullWidth,O=void 0!==S&&S,C=e.size,N=void 0===C?"medium":C,w=e.startIcon,j=e.type,z=void 0===j?"button":j,R=e.variant,_=void 0===R?"text":R,T=Object(n.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),F=w&&o.createElement("span",{className:Object(c.a)(i.startIcon,i["iconSize".concat(Object(d.a)(N))])},w),q=x&&o.createElement("span",{className:Object(c.a)(i.endIcon,i["iconSize".concat(Object(d.a)(N))])},x);return o.createElement(s.a,Object(r.a)({className:Object(c.a)(i.root,i[_],l,"inherit"===m?i.colorInherit:"default"!==m&&i["".concat(_).concat(Object(d.a)(m))],"medium"!==N&&[i["".concat(_,"Size").concat(Object(d.a)(N))],i["size".concat(Object(d.a)(N))]],g&&i.disableElevation,f&&i.disabled,O&&i.fullWidth),component:b,disabled:f,focusRipple:!E,focusVisibleClassName:Object(c.a)(i.focusVisible,k),ref:a,type:z},T),o.createElement("span",{className:i.label},F,t,q))}));a.a=Object(i.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(l.c)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(l.c)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(l.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(l.c)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(l.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(u)},145:function(e,a,t){"use strict";t.r(a);var n=t(38),r=t(15),o=t.n(r),c=t(21),i=t(3),l=t(0),s=t.n(l),d=t(4),u=t(110),m=t(97),p=t(35),b=t(143),h=function(e){var a=e.user,t=a.id,n=a.name,r=a.image,i=e.auth,l=e.unfriendHandler,h=Object(p.a)(),f=(h.error,h.sendRequest),v=(h.clearError,function(){var e=Object(c.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(i.token),e.prev=1,e.next=4,f("".concat("https://placesharer.herokuapp.com/api","/user/friends/").concat(t),"DELETE",null,{Authorization:"Bearer "+i.token});case 4:l(a),console.log(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}());return s.a.createElement("li",{className:"user-item"},s.a.createElement(m.a,{className:"user-item__content"},s.a.createElement(d.b,{className:"user-holder",to:"/".concat(t,"/places")},s.a.createElement("div",{className:"user-item__image"},s.a.createElement(u.a,{image:r,alt:n})),s.a.createElement("div",{className:"user-item__info"},s.a.createElement("h2",null,n)))),s.a.createElement(b.a,{variant:"contained",color:"secondary",onClick:function(){return v(t)}},s.a.createElement("i",{className:"fas fa-window-close"}),"unfriend"))},f=function(e){var a=e.friends,t=e.unfriendHandler,n=e.auth;return 0===a.length?s.a.createElement("div",{className:"center m-1"},s.a.createElement(m.a,null,s.a.createElement("h2",{className:"gray-text"},"No friend found."))):s.a.createElement("ul",{className:"users-list"},a.map((function(e){return s.a.createElement(h,{auth:n,user:e,key:e.id,unfriendHandler:t})})))},v=t(10),g=t(96),y=function(e){var a=e.request,t=a._id,n=a.user,r=n.id,i=n.name,l=n.image,h=e.auth,f=e.acceptFriendHandler,v=e.cancelFriendHandler,y=Object(p.a)(),E=y.error,x=y.sendRequest,k=y.clearError,S=function(){var e=Object(c.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("".concat("https://placesharer.herokuapp.com/api","/user/friends/requests/").concat(t),"PUT",null,{Authorization:"Bearer "+h.token});case 3:f(a),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(a){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("".concat("https://placesharer.herokuapp.com/api","/user/friends/requests/").concat(t),"DELETE",null,{Authorization:"Bearer "+h.token});case 3:v(a),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(g.a,{error:E,onClear:k}),s.a.createElement("li",{className:"user-item"},s.a.createElement(m.a,{className:"user-item__content"},s.a.createElement(d.b,{to:"/".concat(r,"/places")},s.a.createElement("div",{className:"user-item__image"},s.a.createElement(u.a,{image:l,alt:i})),s.a.createElement("div",{className:"user-item__info"},s.a.createElement("h2",null,i)))),s.a.createElement(b.a,{variant:"contained",color:"primary",onClick:function(){return S(r)}},s.a.createElement("i",{className:"fas fa-check-circle"}),"Accept")," ",s.a.createElement(b.a,{variant:"contained",color:"secondary",onClick:function(){return O(r)}},s.a.createElement("i",{className:"fas fa-window-close"}),"Cancel")))},E=function(e){var a=e.auth,t=e.friendRequests,n=e.acceptFriendHandler,r=e.cancelFriendHandler;return 0===t.length?s.a.createElement("div",{className:"center m-1"},s.a.createElement(m.a,null,s.a.createElement("h2",{className:"gray-text"},"No friend requests found."))):s.a.createElement("ul",{className:"users-list"},t.map((function(e){return s.a.createElement(y,{auth:a,request:e,key:e.id,acceptFriendHandler:n,cancelFriendHandler:r})})))};a.default=function(){var e=Object(l.useContext)(v.a),a=Object(l.useState)([]),t=Object(i.a)(a,2),r=t[0],d=t[1],u=Object(l.useState)([]),m=Object(i.a)(u,2),b=m[0],h=m[1],y=Object(l.useState)([]),x=Object(i.a)(y,2),k=x[0],S=x[1],O=Object(l.useState)([]),C=Object(i.a)(O,2),N=C[0],w=C[1],j=Object(p.a)(),z=j.isLoading,R=j.error,_=j.sendRequest,T=j.clearError;Object(l.useEffect)((function(){var a=function(){var a=Object(c.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,_("".concat("https://placesharer.herokuapp.com/api","/user/friends"),"GET",null,{Authorization:"Bearer "+e.token});case 3:t=a.sent,d(t.friends),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}}(),t=function(){var a=Object(c.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,_("".concat("https://placesharer.herokuapp.com/api","/user/friends/requests"),"GET",null,{Authorization:"Bearer "+e.token});case 3:t=a.sent,h(t.friendRequests),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}}();a(),t()}),[k,N,e.token,_]);var F=function(e){S((function(a){return[].concat(Object(n.a)(a),[e])}))};return s.a.createElement(l.Fragment,null,s.a.createElement("div",{className:"fade-in no-select"},s.a.createElement(g.a,{error:R,onClear:T}),!z&&r&&s.a.createElement(f,{friends:r,unfriendHandler:function(e){w((function(a){return[].concat(Object(n.a)(a),[e])}))},auth:e}),s.a.createElement(g.a,{error:R,onClear:T}),!z&&b&&s.a.createElement(E,{auth:e,friendRequests:b,acceptFriendHandler:F,cancelFriendHandler:F})))}},95:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(4);t(103);a.a=function(e){return e.href?r.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?r.a.createElement(o.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):r.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}},96:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(98),c=t(95);a.a=function(e){var a=e.error,t=e.onClear,n=e.header;return r.a.createElement(o.a,{onCancel:t,header:n||"An Error Occurred!!!",show:!!a,footer:r.a.createElement(c.a,{onClick:t},"Okay")},r.a.createElement("div",null,a))}},97:function(e,a,t){"use strict";var n=t(0),r=t.n(n);t(104);a.a=function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},98:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(12),c=t.n(o),i=(t(102),t(92)),l=t(37),s=function(e){var a=r.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},r.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},r.a.createElement("h2",null,e.header)),r.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),r.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return c.a.createPortal(a,document.getElementById("modal-hook"))};a.a=function(e){return r.a.createElement(n.Fragment,null,e.show&&r.a.createElement(l.a,{onClick:e.onCancel}),r.a.createElement(i.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},r.a.createElement(s,e)))}}}]);
//# sourceMappingURL=15.1f310575.chunk.js.map