import{_ as x,c as v,w as e,a as b,b as r,e as t,d as m,i as h,F as f,h as o,f as l,t as p}from"./index-Cqi3r-nM.js";const k={name:"Buttons"},C=l("strong",null,"Vue Button",-1),B=l("p",{class:"text-body-secondary small"}," CoreUI includes a bunch of predefined buttons components, each serving its own semantic purpose. Buttons show what action will happen when the user clicks or touches it. CoreUI buttons are used to initialize operations, both in the background or foreground of an experience. ",-1),w=l("strong",null,"Vue Button",-1),z=l("small",null,"with icons",-1),U=l("p",{class:"text-body-secondary small"},[o(" You can combine button with our "),l("a",{href:"https://coreui.io/icons/"},"CoreUI Icons"),o(". ")],-1),A=l("strong",null,"Vue Button",-1),V=l("small",null,"Button components",-1),I=l("p",{class:"text-body-secondary small"},[o(" The "),l("code",null,"<CButton>"),o(" component are designed for "),l("code",null,"<button>"),o(" , "),l("code",null,"<a>"),o(" or "),l("code",null,"<input>"),o(" elements (though some browsers may apply a slightly different rendering). ")],-1),S=l("p",{class:"text-body-secondary small"},[o(" If you're using "),l("code",null,"<CButton>"),o(" component as "),l("code",null,"<a>"),o(" elements that are used to trigger functionality ex. collapsing content, these links should be given a "),l("code",null,'role="button"'),o(" to adequately communicate their meaning to assistive technologies such as screen readers. ")],-1),D=l("strong",null,"Vue Button",-1),L=l("small",null,"outline",-1),H=l("p",{class:"text-body-secondary small"},[o(" If you need a button, but without the strong background colors. Set "),l("code",null,'variant="outline"'),o(" prop to remove all background colors. ")],-1),R=l("strong",null,"Vue Button",-1),$=l("small",null,"ghost",-1),j=l("p",{class:"text-body-secondary small"},[o(" If you need a ghost variant of button, set "),l("code",null,'variant="ghost"'),o(" prop to remove all background colors. ")],-1),q=l("strong",null,"Vue Button",-1),E=l("small",null,"Sizes",-1),F=l("p",{class:"text-body-secondary small"},[o(" Larger or smaller buttons? Add "),l("code",null,'size="lg"'),o(" or "),l("code",null,'size="sm"'),o(" for additional sizes. ")],-1),N=l("strong",null,"Vue Button",-1),P=l("small",null,"Pill",-1),T=l("strong",null,"Vue Button",-1),Y=l("small",null,"Square",-1),G=l("strong",null,"Vue Button",-1),J=l("small",null,"Disabled state",-1),K=l("p",{class:"text-body-secondary small"},[o(" Add the "),l("code",null,"disabled"),o(" boolean prop to any "),l("code",null,"<CButton>"),o(" component to make buttons look inactive. Disabled button has "),l("code",null,"pointer-events: none"),o(" applied to, disabling hover and active states from triggering. ")],-1),M=l("p",{class:"text-body-secondary small"},[o(" Disabled buttons using the "),l("code",null,"<a>"),o(" component act a little different: ")],-1),O=l("p",{class:"text-body-secondary small"},[l("code",null,"<a>"),o("s don'tsupport the "),l("code",null,"disabled"),o(" attribute, so CoreUI has to add "),l("code",null,".disabled"),o(" class to make buttons look inactive. CoreUI also has to add to the disabled button component "),l("code",null,'aria-disabled="true"'),o(" attribute to show the state of the component to assistive technologies. ")],-1),Q=l("strong",null,"Vue Button",-1),W=l("small",null,"Block buttons",-1),X=l("p",{class:"text-body-secondary small"}," Create buttons that span the full width of a parent—by using utilities. ",-1),Z={class:"d-grid gap-2"},tt=l("p",{class:"text-body-secondary small"},[o(" Here we create a responsive variation, starting with vertically stacked buttons until the "),l("code",null,"md"),o(" breakpoint, where "),l("code",null,".d-md-block"),o(" replaces the "),l("code",null,".d-grid"),o(" class, thus nullifying the "),l("code",null,"gap-2"),o(" utility. Resize your browser to see them change. ")],-1),et={class:"d-grid gap-2 d-md-block"},ot=l("p",{class:"text-body-secondary small"},[o(' You can adjust the width of your block buttons with grid column width classes. For example, for a half-width "block button", use '),l("code",null,".col-6"),o(". Center it horizontally with "),l("code",null,".mx-auto"),o(", too. ")],-1),lt={class:"d-grid gap-2 col-6 mx-auto"},st=l("p",{class:"text-body-secondary small"}," Additional utilities can be used to adjust the alignment of buttons when horizontal. Here we've taken our previous responsive example and added some flex utilities and a margin utility on the button to right align the buttons when they're no longer stacked. ",-1),nt={class:"d-grid gap-2 d-md-flex justify-content-md-end"};function at(dt,ut,rt,ct,it,_t){const c=b("CCardHeader"),d=b("CCol"),n=b("CButton"),y=b("CRow"),u=b("DocsExample"),i=b("CCardBody"),_=b("CCard"),g=b("CIcon");return r(),v(y,null,{default:e(()=>[t(d,{xs:12},{default:e(()=>[t(_,{class:"mb-4"},{default:e(()=>[t(c,null,{default:e(()=>[C]),_:1}),t(i,null,{default:e(()=>[B,t(u,{href:"components/button.html"},{default:e(()=>[(r(),m(f,null,h(["normal","active","disabled"],s=>t(y,{key:s,class:"align-items-center mb-3"},{default:e(()=>[t(d,{xs:12,xl:2,class:"mb-3 mb-xl-0"},{default:e(()=>[o(p(s.charAt(0).toUpperCase()+s.slice(1)),1)]),_:2},1024),t(d,{xs:""},{default:e(()=>[(r(),m(f,null,h(["primary","secondary","success","danger","warning","info","light","dark"],a=>t(n,{key:a,color:a,active:s==="active",disabled:s==="disabled"},{default:e(()=>[o(p(a.charAt(0).toUpperCase()+a.slice(1)),1)]),_:2},1032,["color","active","disabled"])),64))]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1}),t(d,{xs:12},{default:e(()=>[t(_,{class:"mb-4"},{default:e(()=>[t(c,null,{default:e(()=>[w,o(),z]),_:1}),t(i,null,{default:e(()=>[U,t(u,{href:"components/button.html"},{default:e(()=>[(r(),m(f,null,h(["normal","active","disabled"],s=>t(y,{key:s,class:"align-items-center mb-3"},{default:e(()=>[t(d,{xs:12,xl:2,class:"mb-3 mb-xl-0"},{default:e(()=>[o(p(s.charAt(0).toUpperCase()+s.slice(1)),1)]),_:2},1024),t(d,{xs:""},{default:e(()=>[(r(),m(f,null,h(["primary","secondary","success","danger","warning","info","light","dark"],a=>t(n,{key:a,color:a,active:s==="active",disabled:s==="disabled"},{default:e(()=>[t(g,{icon:"cil-bell",class:"me-2"}),o(" "+p(a.charAt(0).toUpperCase()+a.slice(1)),1)]),_:2},1032,["color","active","disabled"])),64))]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1}),t(d,{xs:12},{default:e(()=>[t(_,{class:"mb-4"},{default:e(()=>[t(c,null,{default:e(()=>[A,o(),V]),_:1}),t(i,null,{default:e(()=>[I,S,t(u,{href:"components/button.html#button-components"},{default:e(()=>[t(n,{component:"a",color:"primary",href:"#",role:"button"},{default:e(()=>[o(" Link ")]),_:1}),t(n,{type:"submit",color:"primary"},{default:e(()=>[o(" Button ")]),_:1}),t(n,{component:"input",type:"button",color:"primary",value:"Input"}),t(n,{component:"input",type:"submit",color:"primary",value:"Submit"}),t(n,{component:"input",type:"reset",color:"primary",value:"Reset"})]),_:1})]),_:1})]),_:1})]),_:1}),t(d,{xs:12},{default:e(()=>[t(_,{class:"mb-4"},{default:e(()=>[t(c,null,{default:e(()=>[D,o(),L]),_:1}),t(i,null,{default:e(()=>[H,t(u,{href:"components/button.html#outline-buttons"},{default:e(()=>[(r(),m(f,null,h(["normal","active","disabled"],s=>t(y,{key:s,class:"align-items-center mb-3"},{default:e(()=>[t(d,{xs:12,xl:2,class:"mb-3 mb-xl-0"},{default:e(()=>[o(p(s.charAt(0).toUpperCase()+s.slice(1)),1)]),_:2},1024),t(d,{xs:""},{default:e(()=>[(r(),m(f,null,h(["primary","secondary","success","danger","warning","info","light","dark"],a=>t(n,{key:a,color:a,active:s==="active",disabled:s==="disabled",variant:"outline"},{default:e(()=>[o(p(a.charAt(0).toUpperCase()+a.slice(1)),1)]),_:2},1032,["color","active","disabled"])),64))]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1}),t(d,{xs:12},{default:e(()=>[t(_,{class:"mb-4"},{default:e(()=>[t(c,null,{default:e(()=>[R,o(),$]),_:1}),t(i,null,{default:e(()=>[j,t(u,{href:"components/button.html#ghost-buttons"},{default:e(()=>[(r(),m(f,null,h(["normal","active","disabled"],s=>t(y,{key:s,class:"align-items-center mb-3"},{default:e(()=>[t(d,{xs:12,xl:2,class:"mb-3 mb-xl-0"},{default:e(()=>[o(p(s.charAt(0).toUpperCase()+s.slice(1)),1)]),_:2},1024),t(d,{xs:""},{default:e(()=>[(r(),m(f,null,h(["primary","secondary","success","danger","warning","info","light","dark"],a=>t(n,{key:a,color:a,active:s==="active",disabled:s==="disabled",variant:"ghost"},{default:e(()=>[t(g,{icon:"cil-bell",class:"me-2"}),o(" "+p(a.charAt(0).toUpperCase()+a.slice(1)),1)]),_:2},1032,["color","active","disabled"])),64))]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1}),t(d,{xs:12},{default:e(()=>[t(_,{class:"mb-4"},{default:e(()=>[t(c,null,{default:e(()=>[q,o(),E]),_:1}),t(i,null,{default:e(()=>[F,t(u,{href:"components/button.html#sizes"},{default:e(()=>[t(n,{color:"primary",size:"lg"},{default:e(()=>[o(" Large button ")]),_:1}),t(n,{color:"secondary",size:"lg"},{default:e(()=>[o(" Large button ")]),_:1})]),_:1}),t(u,{href:"components/button.html#sizes"},{default:e(()=>[t(n,{color:"primary",size:"sm"},{default:e(()=>[o(" Small button ")]),_:1}),t(n,{color:"secondary",size:"sm"},{default:e(()=>[o(" Small button ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(d,{xs:12},{default:e(()=>[t(_,{class:"mb-4"},{default:e(()=>[t(c,null,{default:e(()=>[N,o(),P]),_:1}),t(i,null,{default:e(()=>[t(u,{href:"components/button.html#pill-buttons"},{default:e(()=>[(r(),m(f,null,h(["primary","secondary","success","danger","warning","info","light","dark"],s=>t(n,{key:s,color:s,shape:"rounded-pill"},{default:e(()=>[o(p(s.charAt(0).toUpperCase()+s.slice(1)),1)]),_:2},1032,["color"])),64))]),_:1})]),_:1})]),_:1})]),_:1}),t(d,{xs:12},{default:e(()=>[t(_,{class:"mb-4"},{default:e(()=>[t(c,null,{default:e(()=>[T,o(),Y]),_:1}),t(i,null,{default:e(()=>[t(u,{href:"components/button.html#square"},{default:e(()=>[(r(),m(f,null,h(["primary","secondary","success","danger","warning","info","light","dark"],s=>t(n,{key:s,color:s,shape:"rounded-0"},{default:e(()=>[o(p(s.charAt(0).toUpperCase()+s.slice(1)),1)]),_:2},1032,["color"])),64))]),_:1})]),_:1})]),_:1})]),_:1}),t(d,{xs:12},{default:e(()=>[t(_,{class:"mb-4"},{default:e(()=>[t(c,null,{default:e(()=>[G,o(),J]),_:1}),t(i,null,{default:e(()=>[K,t(u,{href:"components/button.html#disabled-state"},{default:e(()=>[t(n,{color:"primary",size:"lg",disabled:""},{default:e(()=>[o(" Primary button ")]),_:1}),t(n,{color:"secondary",size:"lg",disabled:""},{default:e(()=>[o(" Button ")]),_:1})]),_:1}),M,O,t(u,{href:"components/button.html#disabled-state"},{default:e(()=>[t(n,{component:"a",href:"#",color:"primary",size:"lg",disabled:""},{default:e(()=>[o(" Primary link ")]),_:1}),t(n,{component:"a",href:"#",color:"secondary",size:"lg",disabled:""},{default:e(()=>[o(" Link ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(d,{xs:12},{default:e(()=>[t(_,{class:"mb-4"},{default:e(()=>[t(c,null,{default:e(()=>[Q,o(),W]),_:1}),t(i,null,{default:e(()=>[X,t(u,{href:"components/button.html#block-buttons"},{default:e(()=>[l("div",Z,[t(n,{color:"primary"},{default:e(()=>[o("Button")]),_:1}),t(n,{color:"primary"},{default:e(()=>[o("Button")]),_:1})])]),_:1}),tt,t(u,{href:"components/button.html#block-buttons"},{default:e(()=>[l("div",et,[t(n,{color:"primary"},{default:e(()=>[o("Button")]),_:1}),t(n,{color:"primary"},{default:e(()=>[o("Button")]),_:1})])]),_:1}),ot,t(u,{href:"components/button.html#block-buttons"},{default:e(()=>[l("div",lt,[t(n,{color:"primary"},{default:e(()=>[o("Button")]),_:1}),t(n,{color:"primary"},{default:e(()=>[o("Button")]),_:1})])]),_:1}),st,t(u,{href:"components/button.html#block-buttons"},{default:e(()=>[l("div",nt,[t(n,{color:"primary",class:"me-md-2"},{default:e(()=>[o(" Button ")]),_:1}),t(n,{color:"primary"},{default:e(()=>[o("Button")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const ht=x(k,[["render",at]]);export{ht as default};
