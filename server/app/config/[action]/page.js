(()=>{var e={};e.id=384,e.ids=[384],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},85158:e=>{"use strict";e.exports=require("http2")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},71576:e=>{"use strict";e.exports=require("string_decoder")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},13807:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c});var r=s(74003),n=s(51271),i=s(73620),a=s.n(i),o=s(32835),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["config",{children:["[action]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,13374)),"D:\\Code\\mvt-app\\src\\app\\config\\[action]\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,67037)),"D:\\Code\\mvt-app\\src\\app\\config\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,20817))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,66317)),"D:\\Code\\mvt-app\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,49785,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,20817))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\Code\\mvt-app\\src\\app\\config\\[action]\\page.tsx"],u="/config/[action]/page",p={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/config/[action]/page",pathname:"/config/[action]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},55832:(e,t,s)=>{Promise.resolve().then(s.bind(s,96746))},34095:(e,t,s)=>{"use strict";var r;s.d(t,{l:()=>r}),function(e){e.contentRight="embedLeftContentRight",e.contentLeft="embedRightContentLeft",e.onlyContent="onlyContent"}(r||(r={}))},96746:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>Page});var r=s(1413),n=s(25339),i=s(34095),a=s(69070),o=s(88266),l=s(37881),c=s(84562),d=s.n(c),u=s(58467),p=s(66462),x=s(8817);function Page({params:e,searchParams:t}){let s=(0,u.useRouter)(),[c,m]=(0,p.useState)({type:i.l.contentLeft,iconUrl:"",content:"",title:"",embedType:"videoLink",embed:"",order:1});(0,p.useEffect)(()=>{t.documentId&&(0,o.QT)((0,o.JU)(n.RZ,"slides",t.documentId)).then(e=>{m(e.data())})},[]);let h=(0,l.TA)({initialValues:c,enableReinitialize:!0,onSubmit:handleSubmitForm});async function handleSubmitForm(e){if(t.documentId){(0,o.r7)((0,o.JU)(n.RZ,"slides",t.documentId),e).then(()=>{s.push("/config")});return}(0,o.ET)((0,o.hJ)(n.RZ,"slides"),e).then(()=>{s.push("/config")}).catch(e=>console.log(e))}return r.jsx("div",{className:"prose max-w-none w-full mt-4",children:(0,r.jsxs)("form",{onSubmit:h.handleSubmit,children:[(0,r.jsxs)("h2",{className:"mb-1 border-b-2 border-[#D3D3D3] flex flex-row mt-0 items-center",children:[r.jsx("a",{href:"/config",className:"mr-2 text-[#007bff] no-underline",children:r.jsx(x.Z,{})}),(0,r.jsxs)("div",{className:"grow",children:[r.jsx("a",{href:"#",className:"mr-2 text-[#007bff] no-underline",children:"#"}),"add"===e.action?"Create":"Update"," slide"]}),r.jsx("button",{type:"submit",disabled:d()(h.values,c),className:"nes-text hover:text-[#0056b3] disabled:opacity-[0.5] disabled:no-underline disabled:text-[var(--tw-prose-links)] hover:underline font-normal",children:"add"===e.action?"Create":"Update"})]}),r.jsx("p",{className:"mt-0",children:"NES.css is NES-style (8bit-like) CSS Framework."}),(0,r.jsxs)("div",{className:"nes-field",children:[r.jsx("label",{children:"Title"}),r.jsx("input",{type:"text",name:"title",id:"title",className:"nes-input !p-0",value:h.values.title,onChange:h.handleChange})]}),r.jsx("label",{children:"Type"}),r.jsx("div",{className:"nes-select",children:(0,r.jsxs)("select",{required:!0,id:"type",name:"type",className:"!p-0",onChange:h.handleChange,value:h.values.type,children:[r.jsx("option",{value:i.l.contentLeft,children:"Content left | Embed right"}),r.jsx("option",{value:i.l.contentRight,children:"Content right | Embed left"}),r.jsx("option",{value:i.l.onlyContent,children:"Only content"})]})}),(0,r.jsxs)("div",{className:"nes-field",children:[r.jsx("label",{children:"Order"}),r.jsx("input",{type:"text",name:"order",id:"order",className:"nes-input !p-0",value:h.values.order,onChange:h.handleChange})]}),(0,r.jsxs)("div",{className:"nes-field",children:[r.jsx("label",{children:"iconUrl"}),r.jsx("input",{type:"text",name:"iconUrl",id:"iconUrl",className:"nes-input !p-0",value:h.values.iconUrl,onChange:h.handleChange})]}),r.jsx("label",{children:"Textarea"}),r.jsx(a.Editor,{className:"nes-textarea !px-0",height:"40vh",onChange:function(e,t){h.setFieldValue("content",e)},defaultLanguage:"html",value:h.values.content})]})})}},13374:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>a,__esModule:()=>i,default:()=>l});var r=s(99704);let n=(0,r.createProxy)(String.raw`D:\Code\mvt-app\src\app\config\[action]\page.tsx`),{__esModule:i,$$typeof:a}=n,o=n.default,l=o}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[133,215,297,741,636,870,219,240],()=>__webpack_exec__(13807));module.exports=s})();