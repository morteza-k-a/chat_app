(this["webpackJsonpcra-sample"]=this["webpackJsonpcra-sample"]||[]).push([[0],{77:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(11),c=a(0),i=a(9),o=a.n(i),r=a(62),s=a(10),l=a(63),m=a(126),b=a(122),u=a(30),j=a(51),h=a(52),p=a(55),d=a(54),O=a(115),x=a(119),v=a(123),f=a(125),g=a(121),y=(a(77),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).Join_room=function(){n.state.public&&!n.state.name||(n.state.public||n.state.name&&n.state.room)&&("public"!==n.state.room||n.state.public?n.props.history.push({pathname:"/room",room:n.state.public?"public":n.state.room,name:n.state.name}):alert("invalid room name"))},n.changeName=function(e){n.setState((function(t){return Object(u.a)(Object(u.a)({},t),{},{name:e.target.value})}))},n.handleCheck=function(){n.setState((function(e){return Object(u.a)(Object(u.a)({},e),{},{public:!e.public})}))},n.state={name:void 0,room:void 0,public:!1},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"field_container",children:Object(n.jsx)(O.a,{className:"Paper_style",elevation:3,children:Object(n.jsxs)(x.a,{className:"Grid_style",item:!0,container:!0,direction:"column",children:[Object(n.jsx)(v.a,{style:{margin:".5rem"},id:"name_inp",value:this.state.name,onChange:this.changeName,label:"name"}),this.state.public?null:Object(n.jsx)(v.a,{style:{margin:".5rem"},id:"room_inp",value:this.state.room,onChange:function(t){e.setState(Object(u.a)(Object(u.a)({},e.state),{},{room:t.target.value}))},label:"room id"}),this.state.public?null:"The room will be created if it doesn`t exist",Object(n.jsxs)("div",{children:[Object(n.jsx)(f.a,{color:"primary",checked:this.state.public,onChange:this.handleCheck,inputProps:{"aria-label":"primary checkbox"}}),"enter public chat"]}),Object(n.jsx)(g.a,{style:{margin:"0.5rem"},variant:"contained",color:"primary",onClick:this.Join_room,children:"Join room"})]})})})}}]),a}(c.Component)),k=function(){var e=Object(l.a)((function(){return Promise.all([a.e(2),a.e(4)]).then(a.bind(null,220))}),{fallback:Object(n.jsx)(m.a,{open:!0,children:Object(n.jsx)(b.a,{})})});return Object(n.jsx)(r.a,{children:Object(n.jsxs)(s.c,{children:[Object(n.jsx)(s.a,{exact:!0,path:"/room",component:e}),Object(n.jsx)(s.a,{component:y}),"      "]})})};o.a.render(Object(n.jsx)(k,{}),document.getElementById("root"))}},[[82,1,3]]]);
//# sourceMappingURL=main.0086ec49.chunk.js.map