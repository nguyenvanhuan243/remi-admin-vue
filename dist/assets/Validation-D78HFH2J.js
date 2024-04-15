import{_ as S,c as T,w as a,a as n,b as q,e,h as t,f as l}from"./index-Cqi3r-nM.js";const P={name:"Validation",data:()=>({validatedCustom01:null,validatedDefault01:null,validatedTooltip01:null}),methods:{handleSubmitCustom01(r){r.currentTarget.checkValidity()===!1&&(r.preventDefault(),r.stopPropagation()),this.validatedCustom01=!0},handleSubmitDefault01(r){r.currentTarget.checkValidity()===!1&&(r.preventDefault(),r.stopPropagation()),this.validatedDefault01=!0},handleSubmitTooltip01(r){r.currentTarget.checkValidity()===!1&&(r.preventDefault(),r.stopPropagation()),this.validatedTooltip01=!0}}},w=l("strong",null,"Validation",-1),F=l("small",null,"Custom styles",-1),D=l("p",{class:"text-body-secondary small"},[t(" For custom CoreUI form validation messages, you'll need to add the "),l("code",null,"novalidate"),t(" boolean property to your "),l("code",null,"<CForm>"),t(". This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you'll see the "),l("code",null,":invalid"),t(" and "),l("code",null,":valid"),t(" styles applied to your form controls. ")],-1),V=l("p",{class:"text-body-secondary small"}," Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback. ",-1),E=l("option",{disabled:""},"Choose...",-1),U=l("option",null,"...",-1),G=l("strong",null,"Validation",-1),I=l("small",null,"Browser defaults",-1),L=l("p",{class:"text-body-secondary small"}," Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you'll see a slightly different style of feedback. ",-1),B=l("p",{class:"text-body-secondary small"}," While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript. ",-1),O=l("option",{disabled:""},"Choose...",-1),z=l("option",null,"...",-1),A=l("strong",null,"Validation",-1),M=l("small",null,"Server side",-1),J=l("p",{class:"text-body-secondary small"},[t(" We recommend using client-side validation, but in case you require server-side validation, you can indicate invalid and valid form fields with "),l("code",null,"invalid"),t(" and "),l("code",null,"valid"),t(" boolean properties. ")],-1),N=l("p",{class:"text-body-secondary small"},[t(" For invalid fields, ensure that the invalid feedback/error message is associated with the relevant form field using "),l("code",null,"aria-describedby"),t(" (noting that this attribute allows more than one "),l("code",null,"id"),t(" to be referenced, in case the field already points to additional form text). ")],-1),R=l("option",{disabled:""},"Choose...",-1),W=l("option",null,"...",-1),Y=l("strong",null,"Validation",-1),H=l("small",null,"Supported elements",-1),j=l("p",{class:"text-body-secondary small"}," Validation styles are available for the following form controls and components: ",-1),$=l("ul",null,[l("li",null,[l("code",null,"<CFormInput>"),t("s")]),l("li",null,[l("code",null,"<CFormSelect>"),t("s")]),l("li",null,[l("code",null,"<CFormCheck>"),t("s")])],-1),K={class:"mb-3"},Q={class:"mb-3"},X=l("option",null,"Open this select menu",-1),Z=l("option",{value:"1"},"One",-1),ee=l("option",{value:"2"},"Two",-1),ae=l("option",{value:"3"},"Three",-1),te={class:"mb-3"},le={class:"mb-3"},oe=l("strong",null,"Validation",-1),ie=l("small",null,"Tooltips",-1),de=l("p",{class:"text-body-secondary small"},[t(" If your form layout allows it, you can swap the text for the tooltip to display validation feedback in a styled tooltip. Be sure to have a parent with "),l("code",null,"position: relative"),t(" on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup. ")],-1),se=l("option",{disabled:"",value:""},"Choose...",-1),ne=l("option",null,"...",-1);function re(r,C,ue,fe,ce,x){const f=n("CCardHeader"),d=n("CFormLabel"),s=n("CFormInput"),i=n("CFormFeedback"),o=n("CCol"),b=n("CInputGroupText"),y=n("CInputGroup"),c=n("CFormSelect"),u=n("CFormCheck"),_=n("CButton"),m=n("CForm"),v=n("DocsExample"),p=n("CCardBody"),h=n("CCard"),g=n("CFormTextarea"),k=n("CRow");return q(),T(k,null,{default:a(()=>[e(o,{xs:12},{default:a(()=>[e(h,{class:"mb-4"},{default:a(()=>[e(f,null,{default:a(()=>[w,t(),F]),_:1}),e(p,null,{default:a(()=>[D,V,e(v,{href:"forms/validation.html"},{default:a(()=>[e(m,{class:"row g-3 needs-validation",novalidate:"",validated:r.validatedCustom01,onSubmit:x.handleSubmitCustom01},{default:a(()=>[e(o,{md:4},{default:a(()=>[e(d,{for:"validationCustom01"},{default:a(()=>[t("Email")]),_:1}),e(s,{id:"validationCustom01",value:"Mark",required:""}),e(i,{valid:""},{default:a(()=>[t(" Looks good! ")]),_:1})]),_:1}),e(o,{md:4},{default:a(()=>[e(d,{for:"validationCustom02"},{default:a(()=>[t("Email")]),_:1}),e(s,{id:"validationCustom02",value:"Otto",required:""}),e(i,{valid:""},{default:a(()=>[t(" Looks good! ")]),_:1})]),_:1}),e(o,{md:4},{default:a(()=>[e(d,{for:"validationCustomUsername"},{default:a(()=>[t("Username")]),_:1}),e(y,{class:"has-validation"},{default:a(()=>[e(b,{id:"inputGroupPrepend"},{default:a(()=>[t("@")]),_:1}),e(s,{id:"validationCustomUsername",value:"","aria-describedby":"inputGroupPrepend",required:""}),e(i,{invalid:""},{default:a(()=>[t(" Please choose a username. ")]),_:1})]),_:1})]),_:1}),e(o,{md:6},{default:a(()=>[e(d,{for:"validationCustom03"},{default:a(()=>[t("City")]),_:1}),e(s,{id:"validationCustom03",required:""}),e(i,{invalid:""},{default:a(()=>[t(" Please provide a valid city. ")]),_:1})]),_:1}),e(o,{md:3},{default:a(()=>[e(d,{for:"validationCustom04"},{default:a(()=>[t("City")]),_:1}),e(c,{id:"validationCustom04"},{default:a(()=>[E,U]),_:1}),e(i,{invalid:""},{default:a(()=>[t(" Please provide a valid city. ")]),_:1})]),_:1}),e(o,{md:3},{default:a(()=>[e(d,{for:"validationCustom05"},{default:a(()=>[t("City")]),_:1}),e(s,{id:"validationCustom05",required:""}),e(i,{invalid:""},{default:a(()=>[t(" Please provide a valid zip. ")]),_:1})]),_:1}),e(o,{xs:12},{default:a(()=>[e(u,{id:"invalidCheck",type:"checkbox",label:"Agree to terms and conditions",required:""}),e(i,{invalid:""},{default:a(()=>[t(" You must agree before submitting. ")]),_:1})]),_:1}),e(o,{xs:12},{default:a(()=>[e(_,{color:"primary",type:"submit"},{default:a(()=>[t("Submit form")]),_:1})]),_:1})]),_:1},8,["validated","onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1}),e(o,{xs:12},{default:a(()=>[e(h,{class:"mb-4"},{default:a(()=>[e(f,null,{default:a(()=>[G,t(),I]),_:1}),e(p,null,{default:a(()=>[L,B,e(v,{href:"forms/validation.html#browser-defaults"},{default:a(()=>[e(m,{class:"row g-3 needs-validation",validated:r.validatedDefault01,onSubmit:x.handleSubmitDefault01},{default:a(()=>[e(o,{md:4},{default:a(()=>[e(d,{for:"validationDefault01"},{default:a(()=>[t("Email")]),_:1}),e(s,{id:"validationDefault01",value:"Mark",required:""}),e(i,{valid:""},{default:a(()=>[t(" Looks good! ")]),_:1})]),_:1}),e(o,{md:4},{default:a(()=>[e(d,{for:"validationDefault02"},{default:a(()=>[t("Email")]),_:1}),e(s,{id:"validationDefault02",value:"Otto",required:""}),e(i,{valid:""},{default:a(()=>[t(" Looks good! ")]),_:1})]),_:1}),e(o,{md:4},{default:a(()=>[e(d,{for:"validationDefaultUsername"},{default:a(()=>[t("Username")]),_:1}),e(y,{class:"has-validation"},{default:a(()=>[e(b,{id:"inputGroupPrepend02"},{default:a(()=>[t("@")]),_:1}),e(s,{id:"validationDefaultUsername",value:"","aria-describedby":"inputGroupPrepend02",required:""}),e(i,{invalid:""},{default:a(()=>[t(" Please choose a username. ")]),_:1})]),_:1})]),_:1}),e(o,{md:6},{default:a(()=>[e(d,{for:"validationDefault03"},{default:a(()=>[t("City")]),_:1}),e(s,{id:"validationDefault03",required:""}),e(i,{invalid:""},{default:a(()=>[t(" Please provide a valid city. ")]),_:1})]),_:1}),e(o,{md:3},{default:a(()=>[e(d,{for:"validationDefault04"},{default:a(()=>[t("City")]),_:1}),e(c,{id:"validationDefault04"},{default:a(()=>[O,z]),_:1}),e(i,{invalid:""},{default:a(()=>[t(" Please provide a valid city. ")]),_:1})]),_:1}),e(o,{md:3},{default:a(()=>[e(d,{for:"validationDefault05"},{default:a(()=>[t("City")]),_:1}),e(s,{id:"validationDefault05",required:""}),e(i,{invalid:""},{default:a(()=>[t(" Please provide a valid zip. ")]),_:1})]),_:1}),e(o,{xs:12},{default:a(()=>[e(u,{id:"invalidCheck",type:"checkbox",label:"Agree to terms and conditions",required:""}),e(i,{invalid:""},{default:a(()=>[t(" You must agree before submitting. ")]),_:1})]),_:1}),e(o,{xs:12},{default:a(()=>[e(_,{color:"primary",type:"submit"},{default:a(()=>[t("Submit form")]),_:1})]),_:1})]),_:1},8,["validated","onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1}),e(o,{xs:12},{default:a(()=>[e(h,{class:"mb-4"},{default:a(()=>[e(f,null,{default:a(()=>[A,t(),M]),_:1}),e(p,null,{default:a(()=>[J,N,e(v,{href:"forms/validation.html#server-side"},{default:a(()=>[e(m,{class:"row g-3 needs-validation"},{default:a(()=>[e(o,{":md":4},{default:a(()=>[e(d,{for:"validationServer01"},{default:a(()=>[t("Email")]),_:1}),e(s,{id:"validationServer01",type:"text",value:"Mark",valid:"",required:""}),e(i,{valid:""},{default:a(()=>[t("Looks good!")]),_:1})]),_:1}),e(o,{":md":4},{default:a(()=>[e(d,{for:"validationServer02"},{default:a(()=>[t("Email")]),_:1}),e(s,{id:"validationServer02",type:"text",value:"Otto",valid:"",required:""}),e(i,{valid:""},{default:a(()=>[t("Looks good!")]),_:1})]),_:1}),e(o,{":md":4},{default:a(()=>[e(d,{for:"validationServerUsername"},{default:a(()=>[t("Username")]),_:1}),e(y,{class:"has-validation"},{default:a(()=>[e(b,{id:"inputGroupPrepend03"},{default:a(()=>[t("@")]),_:1}),e(s,{id:"validationServerUsername",type:"text",value:"","aria-describedby":"inputGroupPrepend03",invalid:"",required:""}),e(i,{invalid:""},{default:a(()=>[t("Please choose a username.")]),_:1})]),_:1})]),_:1}),e(o,{md:6},{default:a(()=>[e(d,{for:"validationServer03"},{default:a(()=>[t("City")]),_:1}),e(s,{id:"validationServer03",type:"text",invalid:"",required:""}),e(i,{invalid:""},{default:a(()=>[t("Please provide a valid city.")]),_:1})]),_:1}),e(o,{md:3},{default:a(()=>[e(d,{for:"validationServer04"},{default:a(()=>[t("City")]),_:1}),e(c,{id:"validationServer04",invalid:""},{default:a(()=>[R,W]),_:1}),e(i,{invalid:""},{default:a(()=>[t("Please provide a valid city.")]),_:1})]),_:1}),e(o,{md:3},{default:a(()=>[e(d,{for:"validationServer05"},{default:a(()=>[t("City")]),_:1}),e(s,{id:"validationServer05",type:"text",invalid:"",required:""}),e(i,{invalid:""},{default:a(()=>[t("Please provide a valid zip.")]),_:1})]),_:1}),e(o,{xs:12},{default:a(()=>[e(u,{id:"invalidCheck",type:"checkbox",label:"Agree to terms and conditions",invalid:"",required:""}),e(i,{invalid:""},{default:a(()=>[t("You must agree before submitting.")]),_:1})]),_:1}),e(o,{xs:12},{default:a(()=>[e(_,{color:"primary",type:"submit"},{default:a(()=>[t(" Submit form ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(o,{xs:12},{default:a(()=>[e(h,{class:"mb-4"},{default:a(()=>[e(f,null,{default:a(()=>[Y,t(),H]),_:1}),e(p,null,{default:a(()=>[j,$,e(v,{href:"forms/validation.html#supported-elements"},{default:a(()=>[e(m,{validated:!0},{default:a(()=>[l("div",K,[e(d,{for:"validationTextarea",class:"form-label"},{default:a(()=>[t("Textarea")]),_:1}),e(g,{id:"validationTextarea",placeholder:"Required example textarea",invalid:"",required:""}),e(i,{invalid:""},{default:a(()=>[t(" Please enter a message in the textarea. ")]),_:1})]),e(u,{id:"validationFormCheck1",class:"mb-3",label:"Check this checkbox",required:""}),e(i,{invalid:""},{default:a(()=>[t("Example invalid feedback text")]),_:1}),e(u,{id:"validationFormCheck2",type:"radio",name:"radio-stacked",label:"Check this checkbox",required:""}),e(u,{id:"validationFormCheck3",class:"mb-3",type:"radio",name:"radio-stacked",label:"Or toggle this other radio",required:""}),e(i,{invalid:""},{default:a(()=>[t("More example invalid feedback text")]),_:1}),l("div",Q,[e(c,{required:"","aria-label":"select example"},{default:a(()=>[X,Z,ee,ae]),_:1}),e(i,{invalid:""},{default:a(()=>[t("Example invalid select feedback")]),_:1})]),l("div",te,[e(s,{id:"validationTextarea",type:"file","aria-label":"file example",required:""}),e(i,{invalid:""},{default:a(()=>[t("Example invalid form file feedback")]),_:1})]),l("div",le,[e(_,{type:"submit",color:"primary",disabled:""},{default:a(()=>[t("Submit form")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(o,{xs:12},{default:a(()=>[e(h,{class:"mb-4"},{default:a(()=>[e(f,null,{default:a(()=>[oe,t(),ie]),_:1}),e(p,null,{default:a(()=>[de,e(v,{href:"forms/validation.html#tooltips"},{default:a(()=>[e(m,{class:"row g-3 needs-validation",novalidate:"",validated:r.validatedTooltip01,onSubmit:x.handleSubmitTooltip01},{default:a(()=>[e(o,{md:4,class:"position-relative"},{default:a(()=>[e(d,{for:"validationTooltip01"},{default:a(()=>[t("Email")]),_:1}),e(s,{id:"validationTooltip01",value:"Mark",required:""}),e(i,{tooltip:"",valid:""},{default:a(()=>[t(" Looks good! ")]),_:1})]),_:1}),e(o,{md:4,class:"position-relative"},{default:a(()=>[e(d,{for:"validationTooltip02"},{default:a(()=>[t("Email")]),_:1}),e(s,{id:"validationTooltip02",value:"Otto",required:""}),e(i,{tooltip:"",valid:""},{default:a(()=>[t(" Looks good! ")]),_:1})]),_:1}),e(o,{md:4,class:"position-relative"},{default:a(()=>[e(d,{for:"validationTooltipUsername"},{default:a(()=>[t("Username")]),_:1}),e(y,{class:"has-validation"},{default:a(()=>[e(b,{id:"inputGroupPrepend"},{default:a(()=>[t("@")]),_:1}),e(s,{id:"validationTooltipUsername",value:"","aria-describedby":"inputGroupPrepend",required:""}),e(i,{tooltip:"",invalid:""},{default:a(()=>[t(" Please choose a username. ")]),_:1})]),_:1})]),_:1}),e(o,{md:6,class:"position-relative"},{default:a(()=>[e(d,{for:"validationTooltip03"},{default:a(()=>[t("City")]),_:1}),e(s,{id:"validationTooltip03",required:""}),e(i,{tooltip:"",invalid:""},{default:a(()=>[t(" Please provide a valid city. ")]),_:1})]),_:1}),e(o,{md:3,class:"position-relative"},{default:a(()=>[e(d,{for:"validationTooltip04"},{default:a(()=>[t("City")]),_:1}),e(c,{id:"validationTooltip04",required:""},{default:a(()=>[se,ne]),_:1}),e(i,{tooltip:"",invalid:""},{default:a(()=>[t(" Please provide a valid city. ")]),_:1})]),_:1}),e(o,{md:3,class:"position-relative"},{default:a(()=>[e(d,{for:"validationTooltip05"},{default:a(()=>[t("City")]),_:1}),e(s,{id:"validationTooltip05",required:""}),e(i,{tooltip:"",invalid:""},{default:a(()=>[t(" Please provide a valid zip. ")]),_:1})]),_:1}),e(o,{xs:12,class:"position-relative"},{default:a(()=>[e(_,{color:"primary",type:"submit"},{default:a(()=>[t("Submit form")]),_:1})]),_:1})]),_:1},8,["validated","onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const me=S(P,[["render",re]]);export{me as default};
