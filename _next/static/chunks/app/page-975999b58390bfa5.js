(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7151:function(e,t,n){Promise.resolve().then(n.bind(n,7679))},7679:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var a=n(3827);n(4930);var s=n(4090),r=n(7908);function l(){let{getAudioByText:e}={getAudioByText:async e=>{try{let t=await r.Z.post("https://api.elevenlabs.io/v1/text-to-speech/EXAVITQu4vr4xnSDxMaL",{model_id:"eleven_multilingual_v2",text:e},{headers:{"xi-api-key":"e998b36df8a67e717de6ea92b199caf0","Content-Type":"application/json",responseType:"blob"},responseType:"blob"});return URL.createObjectURL(t.data)}catch(e){return!1}}},[t,n]=(0,s.useState)(""),[l,c]=(0,s.useState)(""),[i,u]=(0,s.useState)(!1);async function o(){if(!t)return alert("Insira um texto");u(!0);let n=await e(t);u(!1),n&&c(n)}return(0,a.jsxs)("div",{className:"w-full flex flex-1 flex-col justify-center items-center h-full h-screen",children:[(0,a.jsx)("h1",{className:"pb-10 text-4xl",children:"Insira seu texo abaixo"}),(0,a.jsx)("textarea",{className:"w-[40rem] h-[10rem] outline-none text-black p-2",onChange:function(e){n(e.target.value)}}),l&&(0,a.jsx)("audio",{controls:!0,src:l,className:"m-20"}),(0,a.jsx)("button",{onClick:o,className:"p-3 c bg-cyan-800 rounded mt-5",disabled:i,children:i?"Aguarde ...":"Processar"})]})}},4930:function(){}},function(e){e.O(0,[908,971,69,744],function(){return e(e.s=7151)}),_N_E=e.O()}]);