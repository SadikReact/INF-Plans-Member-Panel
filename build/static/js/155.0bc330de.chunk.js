(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[155],{2413:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var n=t(52),s=t(14),l=t(15),r=t(17),i=t(16),o=t(1),c=t.n(o),u=t(1148),d=t(1149),m=t(1146),f=t(1147),p=t(1150),b=t(173),h=t(1153),g=t(804),v=t(803),E=t(800),y=t(170),O=(t(802),t(57)),j=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.state={title:"",image:"",userName:"",email:"",selectedName:"",selectedFile:null,userMobile:"",fullName:""},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;y.a.get("/admin/getonePnlSheet/".concat(a)).then((function(a){var t,n,s;console.log(a.data.data),e.setState({image:a.data.data.pnlimg[0],userMobile:null===(t=a.data.data.userId)||void 0===t?void 0:t.mobile,fullName:(null===(n=a.data.data.userId)||void 0===n?void 0:n.firstname)+(null===(s=a.data.data.userId)||void 0===s?void 0:s.lastname)})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(u.a,null,c.a.createElement(d.a,{sm:"12"},c.a.createElement("div",null,c.a.createElement(m.a,{listTag:"div"},c.a.createElement(f.a,{href:"/analyticsDashboard",tag:"a"},"Home"),c.a.createElement(f.a,{href:"/app/explore/Trupee/opportunity",tag:"a"},"View Feedback"),c.a.createElement(f.a,{active:!0},"View Feedback"))))),c.a.createElement(p.a,null,c.a.createElement(u.a,{className:"m-2"},c.a.createElement(d.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View PnLSheet")),c.a.createElement(d.a,null,c.a.createElement(O.b,{render:function(e){var a=e.history;return c.a.createElement(b.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/trade/pnLSheetList")}},"Back")}}))),c.a.createElement(h.a,null,c.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(u.a,null,c.a.createElement(d.a,{lg:"4",md:"6",sm:"6",className:"mb-2"},c.a.createElement(v.a,null,"UserName"),c.a.createElement(E.a,{required:!0,type:"text",disabled:!0,name:"fullName",value:this.state.fullName,onChange:this.changeHandler})),c.a.createElement(d.a,{lg:"4",md:"6",sm:"6",className:"mb-2"},c.a.createElement(v.a,null,"Mobile"),c.a.createElement(E.a,{type:"text",disabled:!0,name:"userMobile",value:this.state.userMobile,onChange:this.changeHandler})),c.a.createElement(d.a,{lg:"4",md:"6",sm:"6",className:"mb-2"},c.a.createElement(v.a,null,"Email"),c.a.createElement(E.a,{type:"email",disabled:!0,name:"email",value:this.state.email,onChange:this.changeHandler})),c.a.createElement(d.a,{lg:"12",md:"12",sm:"6",className:"mb-2"},c.a.createElement("img",{src:this.state.image,alt:"no image"})))))))}}]),t}(o.Component)},800:function(e,a,t){"use strict";var n=t(6),s=t(10),l=t(12),r=t(13),i=t(1),o=t.n(i),c=t(2),u=t.n(c),d=t(5),m=t.n(d),f=t(4),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.focus=t.focus.bind(Object(l.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,r=e.bsSize,i=e.valid,c=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,h=e.innerRef,g=Object(s.a)(e,p),v=["radio","checkbox"].indexOf(l)>-1,E=new RegExp("\\D","g"),y=u||("select"===l||"textarea"===l?l:"input"),O="form-control";b?(O+="-plaintext",y=u||"input"):"file"===l?O+="-file":"range"===l?O+="-range":v&&(O=d?null:"form-check-input"),g.size&&E.test(g.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var j=Object(f.mapToCssModules)(m()(a,c&&"is-invalid",i&&"is-valid",!!r&&"form-control-"+r,O),t);return("input"===y||u&&"function"===typeof u)&&(g.type=l),g.children&&!b&&"select"!==l&&"string"===typeof y&&"select"!==y&&(Object(f.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(y,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":c}))},a}(o.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},803:function(e,a,t){"use strict";var n=t(6),s=t(10),l=t(1),r=t.n(l),i=t(2),o=t.n(i),c=t(5),u=t.n(c),d=t(4),m=["className","cssModule","hidden","widths","tag","check","size","for"],f=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:f,order:f,offset:f})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,l=e.hidden,i=e.widths,o=e.tag,c=e.check,f=e.size,p=e.for,b=Object(s.a)(e,m),h=[];i.forEach((function(a,n){var s=e[a];if(delete b[a],s||""===s){var l,r=!n;if(Object(d.isObject)(s)){var i,o=r?"-":"-"+a+"-";l=g(r,a,s.size),h.push(Object(d.mapToCssModules)(u()(((i={})[l]=s.size||""===s.size,i["order"+o+s.order]=s.order||0===s.order,i["offset"+o+s.offset]=s.offset||0===s.offset,i))),t)}else l=g(r,a,s),h.push(l)}}));var v=Object(d.mapToCssModules)(u()(a,!!l&&"sr-only",!!c&&"form-check-label",!!f&&"col-form-label-"+f,h,!!h.length&&"col-form-label"),t);return r.a.createElement(o,Object(n.a)({htmlFor:p},b,{className:v}))};v.propTypes=b,v.defaultProps=h,a.a=v},804:function(e,a,t){"use strict";var n=t(6),s=t(10),l=t(12),r=t(13),i=t(1),o=t.n(i),c=t(2),u=t.n(c),d=t(5),m=t.n(d),f=t(4),p=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.submit=t.submit.bind(Object(l.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.inline,r=e.tag,i=e.innerRef,c=Object(s.a)(e,p),u=Object(f.mapToCssModules)(m()(a,!!l&&"form-inline"),t);return o.a.createElement(r,Object(n.a)({},c,{ref:i,className:u}))},a}(i.Component);h.propTypes=b,h.defaultProps={tag:"form"},a.a=h}}]);
//# sourceMappingURL=155.0bc330de.chunk.js.map