import"./assets/modulepreload-polyfill-3cfb730f.js";const a=document.querySelector(".feedback-form"),o=a.elements.email,r=a.elements.message;let l;function n(){let e;return localStorage.getItem("feedback-form-state")===null?(e={},e):(e=JSON.parse(localStorage.getItem("feedback-form-state")),a.elements.email.value=e.email!==void 0?e.email:"",a.elements.message.value=e.text!==void 0?e.text:"",e)}l=n();function i(e,t){if(!(t.target.nodeName!=="INPUT"&&t.target.nodeName!=="TEXTAREA"))return t.target.nodeName==="INPUT"?e.email=t.target.value.trim():t.target.nodeName==="TEXTAREA"&&(e.text=t.target.value.trim()),e}function s(e){localStorage.setItem("feedback-form-state",JSON.stringify(e))}a.addEventListener("input",e=>{const t=i(l,e);s(t)});a.addEventListener("submit",e=>{if(e.preventDefault(),console.log(r.value===""),o.value.trim()===""||r.value.trim()===""){alert("Fill please all fields");return}l=JSON.parse(localStorage.getItem("feedback-form-state")),console.log(l),o.value="",r.value="",localStorage.removeItem("feedback-form-state"),l={}});o.addEventListener("focus",function(){this.setAttribute("placeholder","Type area")});o.addEventListener("blur",function(){this.removeAttribute("placeholder")});r.addEventListener("focus",function(){this.setAttribute("placeholder","Type area")});r.addEventListener("blur",function(){this.removeAttribute("placeholder")});
//# sourceMappingURL=commonHelpers2.js.map
