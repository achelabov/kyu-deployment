import{a as K,b as W}from"/build/_shared/chunk-DQYLG6I7.js";import"/build/_shared/chunk-SWKV3IKP.js";import"/build/_shared/chunk-2ASNDYGS.js";import{a as ye}from"/build/_shared/chunk-VZQVWFLO.js";import{a as U}from"/build/_shared/chunk-YDSERAUK.js";import{a as V,b as G}from"/build/_shared/chunk-NK5IF5RF.js";import{a as B,b as q}from"/build/_shared/chunk-53PIVPIF.js";import{a as b}from"/build/_shared/chunk-NQPXYJUQ.js";import{a as w}from"/build/_shared/chunk-A7SUEVP2.js";import"/build/_shared/chunk-PXEUFDPR.js";import"/build/_shared/chunk-LTBXYQR6.js";import"/build/_shared/chunk-243AYOFM.js";import"/build/_shared/chunk-HAINM4MF.js";import{Xc as Te,a as D,c as Se,e as _,f as ke,fc as j,jb as H,kb as M,lb as Re}from"/build/_shared/chunk-QH5UXTNE.js";import"/build/_shared/chunk-GO4RMXDG.js";import"/build/_shared/chunk-GZO74C6C.js";import"/build/_shared/chunk-5C6XY6QG.js";import"/build/_shared/chunk-P4GU2T66.js";import{a as Ne,k as O,l as P,m as Ae,p as g,q as Fe}from"/build/_shared/chunk-WKVXRFKR.js";import{b as L,e as we}from"/build/_shared/chunk-6UMQ6VR5.js";import"/build/_shared/chunk-DRCRQ7AX.js";import"/build/_shared/chunk-NSB5NZWW.js";import"/build/_shared/chunk-FQ2RG5VJ.js";import"/build/_shared/chunk-C4K24J7E.js";import"/build/_shared/chunk-YG2XDHGZ.js";import{a as h}from"/build/_shared/chunk-KOHXVCYB.js";import"/build/_shared/chunk-VGJ5EBYX.js";import"/build/_shared/chunk-MSGER76V.js";import{a as be}from"/build/_shared/chunk-Z3FUFQEO.js";import{h as u,m as I}from"/build/_shared/chunk-O7CS4SBR.js";import{Cb as ve,wb as C,xa as p}from"/build/_shared/chunk-NSQYLWAQ.js";import{b as y,c as E}from"/build/_shared/chunk-4YJISJ47.js";import{b as xe}from"/build/_shared/chunk-VOM23DNI.js";import"/build/_shared/chunk-5YEMDBLX.js";import"/build/_shared/chunk-X4RYED65.js";import"/build/_shared/chunk-2SDAKG4K.js";import{a as he,b as f}from"/build/_shared/chunk-TANAHWHW.js";import{e as n}from"/build/_shared/chunk-ADMCF34Z.js";we();Fe();ke();var r=n(he());var Y=n(xe()),J=n(Ne()),$=n(be());Se();ve();Te();Ae();Re();var e=n(f()),Ie=({login:i,loginSuccess:s,authSSO:l,ssrTheme:x})=>{let{t}=E("common"),[m,S]=(0,r.useState)({email:"",password:"",dontRemember:!1}),[oe,ae]=(0,r.useState)(!1),[k,re]=(0,r.useState)({}),[N,ie]=(0,r.useState)(!1),[c,d]=(0,r.useState)(!1),[ne,se]=(0,r.useState)(!1),[A,R]=(0,r.useState)(""),[me,F]=(0,r.useState)(null),le=()=>{let o={};V(m.email)||(o.email=t("auth.common.badEmailError")),G(m.password)||(o.password=t("auth.common.xCharsError",{amount:8}));let a=(0,J.default)((0,Y.default)(o));re(o),ae(a)};(0,r.useEffect)(()=>{le()},[m]);let de=o=>{let{target:{value:a}}=o;R(a),F(null)},v=(o,a)=>{o||(d(!1),se(a))},ce=o=>{c||(d(!0),i(o,v))},pe=async o=>{if(o.preventDefault(),o.stopPropagation(),!c){d(!0);try{let{accessToken:a,refreshToken:ue,user:fe}=await j(A);P(),M(),O(a),H(ue),s(fe)}catch(a){(0,$.default)(a)&&D.error(a),console.error(`[ERROR] Failed to authenticate with 2FA: ${a}`),F(t("profileSettings.invalid2fa"))}R(""),d(!1)}},T=({target:o})=>{S(a=>({...a,[o.name]:o.value}))},ge=o=>{o.preventDefault(),o.stopPropagation(),ie(!0),oe&&ce(m)};return ne?(0,e.jsx)("div",{className:"flex min-h-page flex-col bg-gray-50 px-4 py-6 dark:bg-slate-900 sm:px-6 lg:px-8",children:(0,e.jsxs)("form",{className:"mx-auto max-w-prose",onSubmit:pe,children:[(0,e.jsx)("h2",{className:"mt-2 text-3xl font-bold text-gray-900 dark:text-gray-50",children:t("auth.signin.2fa")}),(0,e.jsx)("p",{className:"mt-4 whitespace-pre-line text-base text-gray-900 dark:text-gray-50",children:t("auth.signin.2faDesc")}),(0,e.jsx)(b,{label:t("profileSettings.enter2faToDisable"),value:A,placeholder:t("auth.signin.6digitCode"),className:"mt-4",onChange:de,disabled:c,error:me}),(0,e.jsxs)("div",{className:"mt-3 flex justify-between",children:[(0,e.jsx)("div",{className:"whitespace-pre-line text-sm text-gray-600 dark:text-gray-400",children:!p&&(0,e.jsx)(y,{t,i18nKey:"auth.signin.2faUnavailable",components:{ctl:(0,e.jsx)(u,{to:h.contact,className:"underline hover:text-gray-900 dark:hover:text-gray-200"})}})}),(0,e.jsx)(w,{type:"submit",loading:c,primary:!0,large:!0,children:t("common.continue")})]})]})}):(0,e.jsxs)("div",{className:"flex min-h-min-footer flex-col bg-gray-50 px-4 py-6 dark:bg-slate-900 sm:px-6 lg:px-8",children:[(0,e.jsx)("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:(0,e.jsx)("h2",{className:"text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-50",children:t("auth.signin.title")})}),(0,e.jsxs)("div",{className:"mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]",children:[(0,e.jsxs)("div",{className:"bg-white px-6 py-12 shadow dark:bg-slate-800/20 dark:ring-1 dark:ring-slate-800 sm:rounded-lg sm:px-12",children:[(0,e.jsxs)("form",{className:"space-y-6",onSubmit:ge,children:[(0,e.jsx)(b,{name:"email",type:"email",label:t("auth.common.email"),value:m.email,className:"mt-4",onChange:T,error:N?k.email:""}),(0,e.jsx)(b,{name:"password",type:"password",label:t("auth.common.password"),hint:t("auth.common.hint",{amount:8}),value:m.password,className:"mt-4",onChange:T,error:N?k.password:""}),(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsx)(U,{checked:m.dontRemember,onChange:o=>S(a=>({...a,dontRemember:o})),name:"dontRemember",label:t("auth.common.noRemember")}),!p&&(0,e.jsx)("div",{className:"text-sm leading-6",children:(0,e.jsx)(u,{to:h.reset_password,className:"font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-500",children:t("auth.signin.forgot")})})]}),(0,e.jsx)(w,{className:"w-full justify-center",type:"submit",loading:c,primary:!0,giant:!0,children:t("auth.signin.button")})]}),!p&&(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"relative mt-10",children:[(0,e.jsx)("div",{className:"absolute inset-0 flex items-center","aria-hidden":"true",children:(0,e.jsx)("div",{className:"w-full border-t border-gray-200 dark:border-gray-600"})}),(0,e.jsx)("div",{className:"relative flex justify-center text-sm font-medium leading-6",children:(0,e.jsx)("span",{className:"bg-white px-6 text-gray-900 dark:bg-slate-800/20 dark:text-gray-50",children:t("auth.common.orContinueWith")})})]}),(0,e.jsxs)("div",{className:"mt-6 grid grid-cols-2 gap-4",children:[(0,e.jsx)(K,{setIsLoading:d,authSSO:l,callback:v,dontRemember:!1}),(0,e.jsx)(W,{setIsLoading:d,authSSO:l,callback:v,dontRemember:!1,ssrTheme:x})]})]})]}),!p&&(0,e.jsx)("p",{className:"mb-4 mt-10 text-center text-sm text-gray-500 dark:text-gray-200",children:(0,e.jsx)(y,{t,i18nKey:"auth.signin.notAMember",components:{url:(0,e.jsx)(u,{to:h.signup,className:"font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-500","aria-label":t("titles.signup")})},values:{amount:C}})})]})]})},z=(0,r.memo)(q(Ie,B.notAuthenticated));var Ee=i=>({login:(s,l)=>{i(g.loginAsync(s,l))},loginSuccess:s=>{i(_.loginSuccessful(s)),i(g.loadProjects()),i(g.loadSharedProjects())},authSSO:(s,l,x,t)=>{i(g.authSSO(s,l,x,t))}}),Q=L(null,Ee)(z);var Z=Q;var Ce=n(ye());var te=n(f());function ee(){let{theme:i}=I();return(0,te.jsx)(Z,{ssrTheme:i})}export{ee as default};
