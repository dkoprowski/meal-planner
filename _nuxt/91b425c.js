(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2],{227:function(t,e,n){var content=n(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("5914834c",content,!0,{sourceMap:!1})},228:function(t,e,n){"use strict";n(227)},229:function(t,e,n){var r=n(83)(!1);r.push([t.i,".numbered{list-style-type:square}",""]),t.exports=r},230:function(t,e,n){"use strict";n.r(e);var r={props:{type:String,text:String}},o=(n(228),n(42)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["heading_1"===t.type?n("h1",[t._v(t._s(t.text))]):"heading_2"===t.type?n("h2",[t._v(t._s(t.text))]):"heading_3"===t.type?n("h3",[t._v(t._s(t.text))]):"bulleted_list_item"===t.type?n("li",[t._v(t._s(t.text))]):"numbered_list_item"===t.type?n("li",{staticClass:"numbered"},[t._v("\n    "+t._s(t.text)+"\n  ")]):"paragraph"===t.type?n("p",[t._v(t._s(t.text))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},239:function(t,e,n){"use strict";n.r(e);var r=n(5),o=(n(44),n(36),n(31),{components:{Block:n(230).default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.env,r=t.params,o=t.$axios,l=n.notionSecret,e.prev=2,e.next=5,o.$get("https://api.notion.com/v1/blocks/".concat(r.id,"/children"),{headers:{Authorization:"Bearer ".concat(l),"Content-Type":"application/json","Notion-Version":"2021-05-13"}});case 5:return c=e.sent,d=c.results.filter((function(t){return"unsupported"!==(null==t?void 0:t.type)})).map((function(t){var e,n,r,o;return{id:t.id,type:t.type,text:null!==(e=null===(n=t[t.type])||void 0===n||null===(r=n.text)||void 0===r||null===(o=r[0])||void 0===o?void 0:o.plain_text)&&void 0!==e?e:""}})),e.abrupt("return",{blocks:d});case 10:return e.prev=10,e.t0=e.catch(2),console.log({e:e.t0}),e.abrupt("return",{blocks:{}});case 14:case"end":return e.stop()}}),e,null,[[2,10]])})))()},computed:{title:function(){var t=this.$route.params.id;return this.$store.state.meals.titles[t]}}}),l=n(42),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[n("NuxtLink",{attrs:{to:"/"}},[t._v(t._s(t.title))])],1),t._v(" "),t._l(t.blocks,(function(t){return n("Block",{key:t.id,attrs:{type:t.type,text:t.text}})}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Block:n(230).default})}}]);