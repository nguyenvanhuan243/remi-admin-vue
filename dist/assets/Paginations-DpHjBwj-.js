import{_ as f,c as p,w as e,a as o,b as m,e as a,h as l,f as n}from"./index-Cqi3r-nM.js";const g={name:"Paginations"},h=n("strong",null,"Vue Pagination",-1),b=n("p",{class:"text-body-secondary small"},[l(" We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping "),n("code",null,"<nav>"),l(" element to identify it as a navigation section to screen readers and other assistive technologies. ")],-1),x=n("p",{class:"text-body-secondary small"},[l(" In addition, as pages likely have more than one such navigation section, it's advisable to provide a descriptive "),n("code",null,"aria-label"),l(" for the "),n("code",null,"<nav>"),l(" to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be "),n("code",null,'aria-label="Search results pages"'),l(". ")],-1),v=n("strong",null,"Vue Pagination",-1),y=n("small",null,"Working with icons",-1),P=n("p",{class:"text-body-secondary small"},[l(" Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with "),n("code",null,"aria"),l(" attributes. ")],-1),C=n("span",{"aria-hidden":"true"},"«",-1),k=n("span",{"aria-hidden":"true"},"»",-1),w=n("strong",null,"Vue Pagination",-1),z=n("small",null,"Disabled and active states",-1),N=n("p",{class:"text-body-secondary small"},[l(" Pagination links are customizable for different circumstances. Use "),n("code",null,"disabled"),l(" for links that appear un-clickable and "),n("code",null,".active"),l(" to indicate the current page. ")],-1),V=n("p",{class:"text-body-secondary small"},[l(" While the "),n("code",null,"disabled"),l(" prop uses "),n("code",null,"pointer-events: none"),l(" to "),n("em",null,"try"),l(" to disable the link functionality of "),n("code",null,"<a>"),l("s, that CSS property is not yet standardized and doesn'taccount for keyboard navigation. As such, we always add "),n("code",null,'tabindex="-1"'),l(" on disabled links and use custom JavaScript to fully disable their functionality. ")],-1),B=n("span",{"aria-hidden":"true"},"«",-1),S=n("span",{"aria-hidden":"true"},"»",-1),$=n("strong",null,"Vue Pagination",-1),A=n("small",null,"Sizing",-1),D=n("p",{class:"text-body-secondary small"},[l(" Fancy larger or smaller pagination? Add "),n("code",null,'size="lg"'),l(" or "),n("code",null,'size="sm"'),l(" for additional sizes. ")],-1),H=n("strong",null,"Vue Pagination",-1),I=n("small",null,"Alignment",-1),W=n("p",{class:"text-body-secondary small"},[l(" Change the alignment of pagination components with "),n("a",{href:"https://coreui.io/docs/utilities/flex/"},"flexbox utilities"),l(". ")],-1);function j(E,F,L,R,T,U){const d=o("CCardHeader"),t=o("CPaginationItem"),s=o("CPagination"),i=o("DocsExample"),u=o("CCardBody"),c=o("CCard"),r=o("CCol"),_=o("CRow");return m(),p(_,null,{default:e(()=>[a(r,{xs:12},{default:e(()=>[a(c,{class:"mb-4"},{default:e(()=>[a(d,null,{default:e(()=>[h]),_:1}),a(u,null,{default:e(()=>[b,x,a(i,{href:"components/pagination.html"},{default:e(()=>[a(s,{"aria-label":"Page navigation example"},{default:e(()=>[a(t,null,{default:e(()=>[l("Previous")]),_:1}),a(t,null,{default:e(()=>[l("1")]),_:1}),a(t,null,{default:e(()=>[l("2")]),_:1}),a(t,null,{default:e(()=>[l("3")]),_:1}),a(t,null,{default:e(()=>[l("Next")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(r,{xs:12},{default:e(()=>[a(c,{class:"mb-4"},{default:e(()=>[a(d,null,{default:e(()=>[v,l(),y]),_:1}),a(u,null,{default:e(()=>[P,a(i,{href:"components/pagination.html#working-with-icons"},{default:e(()=>[a(s,{"aria-label":"Page navigation example"},{default:e(()=>[a(t,{"aria-label":"Previous"},{default:e(()=>[C]),_:1}),a(t,null,{default:e(()=>[l("1")]),_:1}),a(t,null,{default:e(()=>[l("2")]),_:1}),a(t,null,{default:e(()=>[l("3")]),_:1}),a(t,{"aria-label":"Next"},{default:e(()=>[k]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(r,{xs:12},{default:e(()=>[a(c,{class:"mb-4"},{default:e(()=>[a(d,null,{default:e(()=>[w,z]),_:1}),a(u,null,{default:e(()=>[N,V,a(i,{href:"components/pagination.html#disabled-and-active-states"},{default:e(()=>[a(s,{"aria-label":"Page navigation example"},{default:e(()=>[a(t,{"aria-label":"Previous",disabled:""},{default:e(()=>[B]),_:1}),a(t,{active:""},{default:e(()=>[l("1")]),_:1}),a(t,null,{default:e(()=>[l("2")]),_:1}),a(t,null,{default:e(()=>[l("3")]),_:1}),a(t,{"aria-label":"Next"},{default:e(()=>[S]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(r,{xs:12},{default:e(()=>[a(c,{class:"mb-4"},{default:e(()=>[a(d,null,{default:e(()=>[$,l(),A]),_:1}),a(u,null,{default:e(()=>[D,a(i,{href:"components/pagination.html#sizing"},{default:e(()=>[a(s,{size:"lg","aria-label":"Page navigation example"},{default:e(()=>[a(t,null,{default:e(()=>[l("Previous")]),_:1}),a(t,null,{default:e(()=>[l("1")]),_:1}),a(t,null,{default:e(()=>[l("2")]),_:1}),a(t,null,{default:e(()=>[l("3")]),_:1}),a(t,null,{default:e(()=>[l("Next")]),_:1})]),_:1})]),_:1}),a(i,{href:"components/pagination.html#sizing"},{default:e(()=>[a(s,{size:"sm","aria-label":"Page navigation example"},{default:e(()=>[a(t,null,{default:e(()=>[l("Previous")]),_:1}),a(t,null,{default:e(()=>[l("1")]),_:1}),a(t,null,{default:e(()=>[l("2")]),_:1}),a(t,null,{default:e(()=>[l("3")]),_:1}),a(t,null,{default:e(()=>[l("Next")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(r,{xs:12},{default:e(()=>[a(c,{class:"mb-4"},{default:e(()=>[a(d,null,{default:e(()=>[H,l(),I]),_:1}),a(u,null,{default:e(()=>[W,a(i,{href:"components/pagination.html#aligment"},{default:e(()=>[a(s,{class:"justify-content-center","aria-label":"Page navigation example"},{default:e(()=>[a(t,{disabled:""},{default:e(()=>[l("Previous")]),_:1}),a(t,null,{default:e(()=>[l("1")]),_:1}),a(t,null,{default:e(()=>[l("2")]),_:1}),a(t,null,{default:e(()=>[l("3")]),_:1}),a(t,null,{default:e(()=>[l("Next")]),_:1})]),_:1})]),_:1}),a(i,{href:"components/pagination.html#aligment"},{default:e(()=>[a(s,{class:"justify-content-end","aria-label":"Page navigation example"},{default:e(()=>[a(t,{disabled:""},{default:e(()=>[l("Previous")]),_:1}),a(t,null,{default:e(()=>[l("1")]),_:1}),a(t,null,{default:e(()=>[l("2")]),_:1}),a(t,null,{default:e(()=>[l("3")]),_:1}),a(t,null,{default:e(()=>[l("Next")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const M=f(g,[["render",j]]);export{M as default};
