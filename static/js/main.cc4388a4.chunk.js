(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,o){},16:function(e,t,o){"use strict";o.r(t);var n=o(3),s=o.n(n),c=o(7),r=o(4),a=o(5),d=o(9),l=o(8),i=o(1),u=o.n(i),h=(o(14),o(6)),g=o.n(h),b=o(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(d.a)(o,e);var t=Object(l.a)(o);function o(){var e;Object(r.a)(this,o);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={selectedGoods:[]},e.removeGood=function(t){return e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}}))},e.addGood=function(t){return e.setState((function(e){return{selectedGoods:[].concat(Object(c.a)(e.selectedGoods),[t])}}))},e.clearGoods=function(){e.setState({selectedGoods:[]})},e.goodsCreator=function(e){var t="";if(1===e.length)t="is ".concat(e[0]);else if(2===e.length)t="are ".concat(e[0]," and ").concat(e[1]);else{t+="are ";for(var o=0;o<=e.length-1;o+=1)o<e.length-2?(t+=e[o],t+=", "):o===e.length-2?(t+=e[o],t+=" and "):t+=e[o]}return t},e}return Object(a.a)(o,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("main",{className:"main",children:[Object(b.jsxs)("h1",{className:"title",children:[Object(b.jsx)("button",{type:"button",className:"goods__button goods__button--close",onClick:this.clearGoods,children:"X"}),t.length?"Selected goods ".concat(this.goodsCreator(t)):"No goods selected"]}),Object(b.jsx)("ul",{className:"goods",children:j.map((function(o){return Object(b.jsxs)("li",{className:"goods__prop",children:[Object(b.jsx)("span",{className:g()("goods__item",{goods__selected:t.includes(o)}),children:o}),Object(b.jsx)("button",{type:"button",className:"goods__button",onClick:function(){return t.includes(o)?e.removeGood(o):e.addGood(o)},children:t.includes(o)?"Remove":"Add"})]},o)}))})]})})}}]),o}(u.a.Component);s.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.cc4388a4.chunk.js.map