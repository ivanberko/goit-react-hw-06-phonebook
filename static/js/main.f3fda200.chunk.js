(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports={formAddContact:"ContactForm_formAddContact__MagQ0",inputForm:"ContactForm_inputForm__1jDym",buttonAdd:"ContactForm_buttonAdd__26j_q"}},,function(t,e,n){t.exports={list:"ContactList_list__2WP4e",itemContact:"ContactList_itemContact__1gza1",btnDelete:"ContactList_btnDelete__3hluX"}},,,,,function(t,e,n){t.exports={notify:"Notification_notify__1FSGv",notifyText:"Notification_notifyText__3EZgK"}},function(t,e,n){t.exports={sectionFilter:"Filter_sectionFilter__3WugB",inputFilter:"Filter_inputFilter__3AA_J"}},function(t,e,n){t.exports={container:"App_container__1WH6h",title:"App_title__2CJ4z"}},,,,,,,function(t,e,n){t.exports={enter:"notify_enter__2lUrv",enterActive:"notify_enterActive__3M6BG",exit:"notify_exit__iBbAV",exitActive:"notify_exitActive__1gul5"}},function(t,e,n){t.exports={enter:"filter_enter__1GMX8",enterActive:"filter_enterActive__32dUv",exit:"filter_exit__9p4Rx",exitActive:"filter_exitActive__3m1LY"}},function(t,e,n){t.exports={enter:"slideContact_enter__1A-CJ",enterActive:"slideContact_enterActive__fT7Ma",exit:"slideContact_exit__2hdY6",exitActive:"slideContact_exitActive__3ATNR"}},function(t,e,n){t.exports={enter:"showTitle_enter__1VbYy",enterActive:"showTitle_enterActive__1JmU0"}},,,,,function(t,e,n){t.exports=n(43)},,,,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(4),r=n.n(c),i=n(3),u=n(5),l=n(21),s=n(18),m=n(45),f=[{id:Object(m.a)(),name:"Rosie Simpson",number:"459-12-56"},{id:Object(m.a)(),name:"Hermione Kline",number:"443-89-12"},{id:Object(m.a)(),name:"Eden Clements",number:"645-17-79"},{id:Object(m.a)(),name:"Annie Copeland",number:"227-91-26"}],_="ADD_CONTACT",d="DELETE_CONTACT",p="FILTER_CONTACT",b="CONTACTS_FROM_LS",v="NOTIFICATION",h=Object(u.combineReducers)({contacts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload,o=e.id,c=e.contacts,r=_,i=d,u=b;switch(n){case r:return[{id:a.id,name:a.name,number:a.number}].concat(Object(s.a)(t));case i:return t.filter((function(t){return t.id!==o}));case u:return Object(s.a)(c);default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.value,o=p;switch(n){case o:return a;default:return t}},notify:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.isNotify,o=v;switch(n){case o:return a;default:return t}}}),y=Object(u.combineReducers)({phonebook:h}),C=Object(u.createStore)(y,Object(l.devToolsEnhancer)()),E=n(22),N=n(23),A=n(29),x=n(28),O=n(44),g=n(15),T=function(){return o.a.createElement("div",{className:g.notify},o.a.createElement("p",{className:g.notifyText},"Contact already exists or incorrect data !"))},F=n(8),j=n(24),k=n.n(j),w=function(t){var e,n,a=t.contacts,c=t.isNotify,r=t.addContact,i=t.toggleNotify;return o.a.createElement("form",{className:F.formAddContact,onSubmit:function(t){if(t.preventDefault(),!function(t){return t.find((function(t){return t.name.toLowerCase()===e.value.toLowerCase()}))}(a)&&e.value&&Number(n.value))return r(e.value,n.value),e.value="",void(n.value="");i(!0),setTimeout((function(){i(!1)}),1500)}},o.a.createElement(O.a,{in:c,timeout:250,unmountOnExit:!0,classNames:k.a},o.a.createElement(T,null)),o.a.createElement("label",null,"Name",o.a.createElement("input",{ref:function(t){return e=t},type:"text",name:"name",className:F.inputForm})),o.a.createElement("label",null,"Number",o.a.createElement("input",{ref:function(t){return n=t},type:"text",name:"number",className:F.inputForm})),o.a.createElement("button",{type:"submit",className:F.buttonAdd},"Add contact"))},D=Object(i.b)((function(t){return{contacts:t.phonebook.contacts,isNotify:t.phonebook.notify}}),(function(t){return{addContact:function(e,n){return t(function(t,e){return{type:_,payload:{id:Object(m.a)(),name:t,number:e}}}(e,n))},toggleNotify:function(e){return t({type:v,isNotify:e})}}}))(w),L=n(16),S=n(25),J=n.n(S),I=function(t){var e,n=t.contacts,a=t.handleFindName;return o.a.createElement(O.a,{in:n.length>=2,timeout:250,unmountOnExit:!0,classNames:J.a},o.a.createElement("section",{className:L.sectionFilter},o.a.createElement("label",null,"Find contacts by name",o.a.createElement("input",{ref:function(t){return e=t},type:"text",name:"filter",onChange:function(){return a(e.value)},className:L.inputFilter}))))},R=Object(i.b)((function(t){return{contacts:t.phonebook.contacts}}),(function(t){return{handleFindName:function(e){return t(function(t){return{type:p,value:t}}(e))}}}))(I),M=n(46),B=n(10),U=n(26),G=n.n(U),W=function(t){var e=t.contacts,n=t.filter,a=t.onDeleteContact;return o.a.createElement(M.a,{component:"ul",className:B.list},function(t,e){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(n,e).map((function(t){var e=t.name,n=t.number,c=t.id;return o.a.createElement(O.a,{key:c,timeout:200,unmountOnExit:!0,classNames:G.a},o.a.createElement("li",{className:B.itemContact},o.a.createElement("p",null,e,": ",o.a.createElement("span",null,n)),o.a.createElement("button",{className:B.btnDelete,type:"button",onClick:function(){return a(c)}})))})))},Y=Object(i.b)((function(t){return{contacts:t.phonebook.contacts,filter:t.phonebook.filter}}),(function(t){return{onDeleteContact:function(e){return t(function(t){return{type:d,id:t}}(e))}}}))(W),z=n(17),H=n(27),K=n.n(H),P=function(t){Object(A.a)(n,t);var e=Object(x.a)(n);function n(){var t;Object(E.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={showTitle:!1},t}return Object(N.a)(n,[{key:"componentDidMount",value:function(){this.setState({showTitle:!0});var t=this.props.addContacts,e=localStorage.getItem("contacts");e&&t(JSON.parse(e))}},{key:"componentDidUpdate",value:function(t){var e=this.props.contacts;t.contacts!==e&&localStorage.setItem("contacts",JSON.stringify(e))}},{key:"render",value:function(){var t=this.state.showTitle;return o.a.createElement("section",{className:z.container},o.a.createElement(O.a,{in:t,timeout:500,unmountOnExit:!0,classNames:K.a},o.a.createElement("h1",{className:z.title},"Phonebook")),o.a.createElement(D,null),o.a.createElement(R,null),o.a.createElement(Y,null))}}]),n}(a.Component),V=Object(i.b)((function(t){return{contacts:t.phonebook.contacts}}),(function(t){return{addContacts:function(e){return t(function(t){return{type:b,contacts:t}}(e))}}}))(P);n(42);r.a.render(o.a.createElement(i.a,{store:C},o.a.createElement(V,null)),document.getElementById("root"))}],[[32,1,2]]]);
//# sourceMappingURL=main.f3fda200.chunk.js.map