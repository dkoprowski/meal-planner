(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{233:function(t,n,e){"use strict";var r=e(2),o=e(63).find,l=e(113),d="find",c=!0;d in[]&&Array(1).find((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),l(d)},238:function(t,n,e){"use strict";e.r(n);e(31),e(43),e(51),e(233);var r={computed:{meals:function(){var t=this.$route.params.id,n=this.$store.state.meals.mealList;return n.filter((function(n){return n.dayIds.includes(t)}))},details:function(){var t=this.$route.params.id;return this.$store.state.meals.days.find((function(n){return n.id===t}))}}},o=e(42),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v(t._s(t.details.name))]),t._v(" "),e("ul",t._l(t.meals,(function(n){return e("li",{key:n.id},[e("NuxtLink",{attrs:{to:"/meal/"+n.id}},[t._v(t._s(n.title))])],1)})),0)])}),[],!1,null,null,null);n.default=component.exports}}]);