import{a as F}from"/build/_shared/chunk-3JHWEXEA.js";import{a as A}from"/build/_shared/chunk-57RLGXHQ.js";import"/build/_shared/chunk-OCXPQHWM.js";import"/build/_shared/chunk-2ASNDYGS.js";import"/build/_shared/chunk-63OPQ3LC.js";import"/build/_shared/chunk-KLAONM72.js";import"/build/_shared/chunk-YG736PC4.js";import"/build/_shared/chunk-B26ZFINY.js";import{a as Y}from"/build/_shared/chunk-VZQVWFLO.js";import{a as I}from"/build/_shared/chunk-NQPXYJUQ.js";import{a as f}from"/build/_shared/chunk-A7SUEVP2.js";import"/build/_shared/chunk-PXEUFDPR.js";import"/build/_shared/chunk-LTBXYQR6.js";import"/build/_shared/chunk-243AYOFM.js";import"/build/_shared/chunk-HAINM4MF.js";import{Lc as N,Xc as ro,hb as E,ib as eo}from"/build/_shared/chunk-QH5UXTNE.js";import{ka as oo}from"/build/_shared/chunk-GO4RMXDG.js";import{u as to}from"/build/_shared/chunk-GZO74C6C.js";import"/build/_shared/chunk-5C6XY6QG.js";import"/build/_shared/chunk-P4GU2T66.js";import{a as q}from"/build/_shared/chunk-WKVXRFKR.js";import{d as k,e as Z}from"/build/_shared/chunk-6UMQ6VR5.js";import"/build/_shared/chunk-DRCRQ7AX.js";import"/build/_shared/chunk-NSB5NZWW.js";import"/build/_shared/chunk-FQ2RG5VJ.js";import"/build/_shared/chunk-C4K24J7E.js";import"/build/_shared/chunk-YG2XDHGZ.js";import{a as l}from"/build/_shared/chunk-KOHXVCYB.js";import"/build/_shared/chunk-VGJ5EBYX.js";import"/build/_shared/chunk-MSGER76V.js";import"/build/_shared/chunk-Z3FUFQEO.js";import{d as b,e as x,m as y}from"/build/_shared/chunk-O7CS4SBR.js";import"/build/_shared/chunk-NSQYLWAQ.js";import{c as v}from"/build/_shared/chunk-4YJISJ47.js";import{b as Q}from"/build/_shared/chunk-VOM23DNI.js";import"/build/_shared/chunk-5YEMDBLX.js";import"/build/_shared/chunk-X4RYED65.js";import"/build/_shared/chunk-2SDAKG4K.js";import{a as K,b as c}from"/build/_shared/chunk-TANAHWHW.js";import{e}from"/build/_shared/chunk-ADMCF34Z.js";var r=e(K());var S=e(Q()),u=e(q()),T=e(to()),j=e(oo());ro();Z();eo();var t=e(c()),L=80,so=({ssrTheme:d,embedded:a,isAuth:i})=>{let{t:s}=v("common"),[n,H]=(0,r.useState)({password:""}),[C,M]=(0,r.useState)(!1),[R,w]=(0,r.useState)({}),{id:p}=x(),[X,$]=(0,r.useState)(!1),[h,g]=(0,r.useState)(!1),P=b(),z=k(),G=()=>{let o={};(0,u.default)(n.password)&&(o.password=s("apiNotifications.enterPassword")),(0,T.default)(n.password)>=L&&(o.password=s("auth.common.passwordTooLong",{amount:L}));let m=(0,u.default)((0,S.default)(o));w(o),M(m)};(0,r.useEffect)(()=>{G()},[n]);let J=async o=>{h||(g(!0),await N(p,o.password).then(m=>{m&&(z(E.setProjectProtectedPassword({id:p,password:o.password})),P({pathname:(0,j.default)(l.project,":id",p),search:`?embedded=${a}&theme=${d}`})),w({password:s("apiNotifications.incorrectPassword")})}).catch(console.error).finally(()=>{g(!1)}))},O=({target:o})=>{let m=o.type==="checkbox"?o.checked:o.value;H(W=>({...W,[o.name]:m}))},U=o=>{o.preventDefault(),o.stopPropagation(),$(!0),C&&J(n)},V=()=>{P(l.main)};return(0,t.jsxs)(t.Fragment,{children:[!a&&(0,t.jsx)(A,{ssrTheme:d,authenticated:i}),(0,t.jsx)("div",{className:"flex min-h-page flex-col bg-gray-50 px-4 py-6 dark:bg-slate-900 sm:px-6 lg:px-8",children:(0,t.jsxs)("form",{className:"mx-auto w-full max-w-7xl",onSubmit:U,children:[(0,t.jsx)("h2",{className:"mt-2 text-3xl font-bold text-gray-900 dark:text-gray-50",children:s("titles.passwordProtected")}),(0,t.jsx)(I,{name:"password",type:"password",label:s("auth.common.password"),value:n.password,placeholder:s("auth.common.password"),className:"mt-4",onChange:O,error:X&&R.password}),(0,t.jsxs)("div",{className:"mt-5",children:[(0,t.jsx)(f,{className:"mr-2 border-indigo-100 dark:border-slate-700/50 dark:bg-slate-800 dark:text-gray-50 dark:hover:bg-slate-700",onClick:V,secondary:!0,regular:!0,children:s("common.cancel")}),(0,t.jsx)(f,{type:"submit",loading:h,primary:!0,regular:!0,children:s("common.continue")})]})]})}),!a&&(0,t.jsx)(F,{authenticated:i,minimal:!0})]})},_=(0,r.memo)(so);var ao=e(Y());var D=e(c());function B(){let{theme:d,embedded:a,isAuth:i}=y();return(0,D.jsx)(_,{ssrTheme:d,embedded:a,isAuth:i})}export{B as default};
