import{u as p,a as h,_ as g,b as v}from"./BJolqwt5.js";import{_ as b}from"./sMb-m6zB.js";import{r as u,g as k,o as x,c as f,a as t,t as c,d as m,b as a,w as S,P as y,F as C}from"./B5a_Xqlm.js";import{_ as w,a as O,b as M}from"./C2FoqDMS.js";import{_ as V}from"./DlAUqK2U.js";import{_ as B,a as D}from"./ChMqiR4-.js";import"./DAQyKQhi.js";import"./CvPl5tTm.js";import"./Bc36b--K.js";const N={setup(){const r=p(),e=u(!1),l=u("");function o(n){document.querySelector(n)&&(console.log("seciontId1",n),document.querySelector(n).scrollIntoView({behavior:"smooth",block:"center",inline:"center"}))}function i(n){l.value=n}return{dataStore:r,scrollTo:o,isModalOpen:e,currentLangName:k(()=>r.getCurrentLangName),onClickCard:i,selectRestaurant:l,captionText:"Aruku Provença, 327"}}},T={class:"hero-section w-full",id:"hero-section"},$=t("video",{loop:"",muted:"",autoplay:"",playsinline:"",poster:"",class:"background-video"},[t("source",{src:w,type:"video/mp4"})],-1),P=t("div",{class:"overlay"},null,-1),R=t("a",{href:"tel:+34 692043240",class:"right-5 fixed-btn",role:"click to call"},[t("i",{class:"fas fa-phone text-2xl sm:text-3xl"})],-1),F={class:"hero-section__text z-10"},L=t("img",{src:O,class:"hero-section__extra-image",alt:"aruku bcn sushi resturant gluten free logo"},null,-1),U={class:"text-3xl px-3 text-slate-200 mb-1 hero-section__text--caption font-extrabold font-1"},q={class:"px-3 color-1 hero-section__text--subcaption flex flex-col text-center font-1"},z={class:"text-5xl"},H={class:"text-3xl font-1"},j={class:"order-button text-xl px-3 color-3 mt-4 hero-section__text--online-order","data-glf-cuid":"4dd8e8b0-4640-4e5c-ae77-28e4a7021a0d","data-glf-ruid":"0311534e-9557-4c2f-a77a-ce14b7038049"},A=t("span",{class:"fas fa-shipping-fast mr-1"},null,-1),E=t("span",{class:"fas fa-calendar mr-1"},null,-1),G={class:"px-2 md:px-4 py-6 flex flex-col gap-4"},K={class:"flex justify-between px-4"},I={class:"text-black text-2xl font-bold"},J={class:"w-full"},Q=["src"];function W(r,e,l,o,i,d){const n=h,_=b;return x(),f("figure",T,[$,P,t("div",{onClick:e[0]||(e[0]=s=>o.scrollTo("#reservation-section")),class:"left-4 fixed-btn text-sm sm:text-lg"}," BOOK "),R,t("div",F,[L,t("div",U,c(o.dataStore.getCurrentData.hero.caption),1),t("div",q,[t("span",z,c(o.captionText),1),t("span",H,c(o.dataStore.getCurrentData.hero.subcaption),1)]),t("button",j,[A,m(" "+c(o.dataStore.getCurrentData.hero.onlineOrder),1)]),t("button",{onClick:e[1]||(e[1]=s=>o.isModalOpen=!0),class:"order-button text-xl px-3 color-3 mt-4 hero-section__text--online-order"},[E,m(" "+c(o.dataStore.getCurrentData.hero.onlineBook),1)]),a(_,{modelValue:o.isModalOpen,"onUpdate:modelValue":e[3]||(e[3]=s=>o.isModalOpen=s),"prevent-close":""},{default:S(()=>{var s;return[t("div",G,[t("div",K,[t("span",I," Reservation "+c((s=(r._.provides[y]||r.$route).path)==null?void 0:s.slice(1)),1),a(n,{color:"gray",size:"xl",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:e[2]||(e[2]=Z=>o.isModalOpen=!1)})]),t("div",J,[t("iframe",{id:"restaurante-arukubcn",title:"Reservas",frameborder:"0",src:`https://www.covermanager.com/reservation/module_restaurant/restaurante-arukubcn/${o.currentLangName}`,height:"580",width:"100%",class:"rounded-2xl"},null,8,Q)])])]}),_:1},8,["modelValue"])])])}const X=V(N,[["render",W]]),Y={class:"relative"},it={__name:"index",setup(r){return p(),(e,l)=>{const o=g,i=X,d=M,n=B,_=D,s=v;return x(),f(C,null,[a(o,{class:"absolute"}),t("main",Y,[a(i),a(d,{class:"container mx-auto"}),a(n),a(_,{class:"container mx-auto"})]),a(s)],64)}}};export{it as default};
