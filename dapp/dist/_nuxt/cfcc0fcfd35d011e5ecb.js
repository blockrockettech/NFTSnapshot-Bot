(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{287:function(n,t,e){"use strict";function r(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}e.d(t,"c",(function(){return y})),e.d(t,"a",(function(){return k})),e.d(t,"b",(function(){return w})),e.d(t,"d",(function(){return _})),e.d(t,"e",(function(){return O}));var o=e(81),c=e.n(o);function d(){var data=r(["\n  query tokenById($id: String!) {\n    tokenById: token(id: $id) {\n      id\n      owner\n      metaData {\n        name\n        image\n        description\n      }\n    }\n  }\n"]);return d=function(){return data},data}function l(){var data=r(["\n  query tokensByAccount($owner: String!) {\n    tokensByAccount: tokens(where:{owner: $owner}) {\n      id\n      owner\n      metaData {\n        name\n        image\n        description\n      }\n    }\n  }\n"]);return l=function(){return data},data}function f(){var data=r(["\n  query auctionById($id: String!) {\n    auctionById: ephimeraAuction(id: $id) {\n      id\n      token {\n        metaData {\n          id\n          name\n          image\n          description\n        }\n      }\n      start\n      end\n      artist\n      bidCount\n      topBidder\n      topBidInWei\n      topBidTimestamp\n      bids {\n        id\n        bidder\n        bidInWei\n        bidTimestamp\n      }\n      success\n    }\n  }\n"]);return f=function(){return data},data}function m(){var data=r(["\n  {\n    ephimeraAuctions(first: 5) {\n      id\n      token {\n        metaData {\n          id\n          name\n          image\n          description\n        }\n      }\n      start\n      end\n      artist\n      bidCount\n      topBidder\n      topBidInWei\n      topBidTimestamp\n      bids {\n        id\n        bidder\n        bidInWei\n        bidTimestamp\n      },\n      success\n    }\n  }\n"]);return m=function(){return data},data}function v(){var data=r(["\n  {\n    tokens(first: 10) {\n      id\n      owner\n      transferCount\n      metaData {\n        id\n        name\n        image\n        description\n      }\n    }\n  }\n"]);return v=function(){return data},data}var y=c()(v()),k=c()(m()),w=c()(f()),_=c()(l()),O=c()(d())},289:function(n,t,e){"use strict";var r={props:["token"]},o=e(56),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card",{staticStyle:{"max-width":"25rem"},attrs:{"no-body":"","img-top":""},scopedSlots:n._u([{key:"header",fn:function(){return[e("h3",{staticClass:"mb-4"},[n._v(n._s(n.token.metaData&&n.token.metaData.name))]),n._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h6",[n._v("Token #"+n._s(n.token.id))])]),n._v(" "),e("div",{staticClass:"col text-right"})])]},proxy:!0},{key:"footer",fn:function(){return[e("div",{staticClass:"row"},[e("div",{staticClass:"col"})]),n._v(" "),e("div",{staticClass:"row mt-2"},[e("div",{staticClass:"col"}),n._v(" "),e("div",{staticClass:"col text-right"},[n._t("default")],2)])]},proxy:!0}],null,!0)},[n._v(" "),e("b-card-body",[e("b-card-text",[n._v("\n      "+n._s(n.token.metaData&&n.token.metaData.description)+"\n      "),e("br"),n._v("\n      Owner: "+n._s(n.token.owner)+"\n    ")])],1)],1)}),[],!1,null,"714aeda8",null);t.a=component.exports},299:function(n,t,e){"use strict";e.r(t);e(7),e(4),e(5),e(3),e(6);var r=e(0),o=e(287),c=e(66);function d(object,n){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(object,n).enumerable}))),t.push.apply(t,e)}return t}var l={components:{Token:e(289).a},computed:function(n){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(n,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(source,t))}))}return n}({},Object(c.b)("web3ethers",["account"])),apollo:{tokensByAccount:{query:o.d,pollInterval:1e3,variables:function(){return{owner:this.account}}}}},f=e(56),component=Object(f.a)(l,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("h1",[n._v("Account")]),n._v(" "),n.tokensByAccount?e("h2",[n._v("You own "),e("span",{staticClass:"badge badge-info"},[n._v(n._s(n.tokensByAccount.length))]),n._v(" tokens")]):n._e(),n._v(" "),n.tokensByAccount&&n.tokensByAccount.length>0?e("div",{staticClass:"mt-5"},[e("b-card-group",{attrs:{deck:""}},n._l(n.tokensByAccount,(function(n){return e("token",{key:n.id,staticStyle:{"max-width":"25rem"},attrs:{token:n}})})),1)],1):e("div",{staticClass:"alert alert-warning"},[n._v("\n    You don't own any Ephimera tokens yet :(\n  ")])])}),[],!1,null,null,null);t.default=component.exports}}]);