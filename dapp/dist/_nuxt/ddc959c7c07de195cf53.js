(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{297:function(e,t,r){"use strict";r.r(t);r(7),r(4),r(5),r(3),r(6);var o=r(0),n=r(66);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var c={computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.b)("web3ethers",["isAdminOrCreator"])),data:function(){return{form:{tokenUri:"",artistReserveInWei:"",artistReserveShow:null,splitBeneficiaries:"",splits:""}}},methods:{onSubmit:function(e){e.preventDefault(),this.$store.dispatch("web3ethers/mintAndCreate",this.form)}}},f=r(56),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Mint")]),e._v(" "),e.isAdminOrCreator?r("div",{staticClass:"row"},[r("div",{staticClass:"col-8"},[r("b-form",{attrs:{novalidate:""},on:{submit:e.onSubmit}},[r("b-form-group",{attrs:{id:"input-group-1",label:"Token URI:","label-for":"input-1",description:"Full ipfs link with hash"}},[r("b-form-input",{attrs:{id:"input-1",required:""},model:{value:e.form.tokenUri,callback:function(t){e.$set(e.form,"tokenUri",t)},expression:"form.tokenUri"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"input-group-2",label:"Artist reserve:","label-for":"input-2",description:"Artist reserve in WEI"}},[r("b-form-input",{attrs:{id:"input-2",type:"number",required:""},model:{value:e.form.artistReserveInWei,callback:function(t){e.$set(e.form,"artistReserveInWei",t)},expression:"form.artistReserveInWei"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"input-group-4"}},[r("b-form-checkbox",{attrs:{id:"checkbox-1",name:"checkbox-1",value:!0,"unchecked-value":!1},model:{value:e.form.artistReserveShow,callback:function(t){e.$set(e.form,"artistReserveShow",t)},expression:"form.artistReserveShow"}},[e._v("\n            Show artist reserve?\n          ")])],1),e._v(" "),r("b-form-group",{attrs:{id:"input-group-5",label:"Beneficiaries:","label-for":"input-5",description:"Separate addresses with ,"}},[r("b-form-input",{attrs:{id:"input-5",required:""},model:{value:e.form.splitBeneficiaries,callback:function(t){e.$set(e.form,"splitBeneficiaries",t)},expression:"form.splitBeneficiaries"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"input-group-6",label:"Splits:","label-for":"input-6",description:"Separate splits with ,"}},[r("b-form-input",{attrs:{id:"input-5",required:""},model:{value:e.form.splits,callback:function(t){e.$set(e.form,"splits",t)},expression:"form.splits"}})],1),e._v(" "),r("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)],1),e._v(" "),r("div",{staticClass:"col"})]):r("div",{staticClass:"alert alert-warning"},[e._v("\n    You must have the correct role to mint tokens and start auctions!\n  ")])])}),[],!1,null,null,null);t.default=component.exports}}]);