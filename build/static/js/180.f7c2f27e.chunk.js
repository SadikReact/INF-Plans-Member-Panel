(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[180],{2440:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return F}));var n=a(52),l=a(14),r=a(15),s=a(17),o=a(16),c=a(1),i=a.n(c),m=a(1148),d=a(1149),u=a(1146),p=a(1147),b=a(1150),h=a(173),g=a(1153),E=a(804),f=a(803),N=a(800),y=a(170),S=a(57),v=a(834),C=a(835),O=a(812),k=a.n(O),T=(a(846),a(809),a(802)),H=a.n(T),F=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).onEditorStateChange=function(e){r.setState({editorState:e,desc:k()(Object(v.convertToRaw)(e.getCurrentContent()))})},r.onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),console.log(r.state);var t=new FormData;t.append("title",r.state.title),t.append("desc",r.state.desc),t.append("img",r.state.selectedFile,r.state.selectedName),y.a.post("/admin/addOportunity",t).then((function(e){console.log(e.data),H()("Success!","Submitted SuccessFull!","success"),r.props.history.push("/app/explore/Trupee/opportunity")})).catch((function(e){console.log(e)}))},r.state={title:"",image:"",selectedName:"",selectedFile:null,editorState:v.EditorState.createEmpty(),desc:""},r}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(d.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(u.a,{listTag:"div"},i.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(p.a,{href:"/app/explore/Trupee/opportunity",tag:"a"},"Opportunity List"),i.a.createElement(p.a,{active:!0},"Add Opportunity"))))),i.a.createElement(b.a,null,i.a.createElement(m.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Opportunity")),i.a.createElement(d.a,null,i.a.createElement(S.b,{render:function(e){var t=e.history;return i.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/explore/Trupee/opportunity")}},"Back")}}))),i.a.createElement(g.a,null,i.a.createElement(E.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Title"),i.a.createElement(N.a,{required:!0,type:"text",name:"title",placeholder:"Title",value:this.state.title,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Image"),i.a.createElement(N.a,{type:"file",name:"img",onChange:this.onChangeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Descripition"),i.a.createElement(C.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}))),i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),a}(c.Component)},809:function(e,t,a){}}]);
//# sourceMappingURL=180.f7c2f27e.chunk.js.map