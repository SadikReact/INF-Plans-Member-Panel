(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[222],{2385:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a(15),i=a(17),l=a(16),c=a(1),o=a.n(c),s=a(1148),d=a(1149),u=a(1150),m=a(1153),p=a(793),g=a(796),f=a(794),h=a(792),v=a(800),w=a(173),N=a(170),E=a(171),S=a(808),D=a(440),y=a(262),z=a(802),b=a.n(z),P=(a(28),a(805),a(570),a(870)),k=a.n(P),C=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={rowData:[],StartDate:"",EndDate:"",list:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Details",field:"scriptName",width:120,cellRendererFramework:function(e){return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,e.data.scriptName))}},{headerName:"Claim No.",field:"scriptName",width:160,cellRendererFramework:function(e){return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,e.data.scriptName))}},{headerName:"Claim Applied",field:"scriptName",width:160,cellRendererFramework:function(e){return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,e.data.scriptName))}},{headerName:"Name",field:"scriptName",width:160,cellRendererFramework:function(e){return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,e.data.scriptName))}},{headerName:"Start Date",field:"scriptName",width:160,cellRendererFramework:function(e){return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,e.data.scriptName))}},{headerName:"End Date",field:"scriptName",width:160,cellRendererFramework:function(e){return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,e.data.scriptName))}},{headerName:"Policy Name",field:"scriptName",width:160,cellRendererFramework:function(e){return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,e.data.scriptName))}},{headerName:"Actions",field:"sortorder",width:150,pinned:window.innerWidth>992&&"right",cellRendererFramework:function(t){return o.a.createElement("div",{className:"actions cursor-pointer"},o.a.createElement(D.a,{size:20,color:"red",onClick:function(){e.runthisfunction(t.data._id)}}))}}]},e.changeHandlerStartDate=function(t){var a=k()(t.target.value).format("D-MM-YYYY");e.setState({StartDate:a})},e.changeHandlerEndDate=function(t){var a=k()(t.target.value).format("D-MM-YYYY");e.setState({EndDate:a})},e.alltradeList=function(){N.a.get("/admin/tradelist").then((function(t){console.log(t.data.data);var a=t.data.data.filter((function(e){if("true"===e.FT1_type||"true"===(null===e||void 0===e?void 0:e.FT2_type)||"true"===(null===e||void 0===e?void 0:e.FT3_type)||"true"===(null===e||void 0===e?void 0:e.t1_type)||"true"===(null===e||void 0===e?void 0:e.t2_type)||"true"===(null===e||void 0===e?void 0:e.t3_type)||"true"===(null===e||void 0===e?void 0:e.t4_type)||"true"===(null===e||void 0===e?void 0:e.trl_type)||"true"===(null===e||void 0===e?void 0:e.t5_type)||"true"===(null===e||void 0===e?void 0:e.sl_type))return e}));console.log("NewList",a);var n=t.data.data;e.setState({rowData:a}),e.setState({list:n})}))},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e.submitHandler=function(t){console.log(e.state.StartDate,e.state.EndDate),N.a.get("/user/tradefilterBydate?start=".concat(e.state.StartDate,"&end=").concat(e.state.EndDate)).then((function(t){e.setState({rowData:t.data.data})})).catch((function(e){console.log(e)}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.alltradeList()}},{key:"runthisfunction",value:function(e){var t=this;b()("Do You Want To Delete Permanently","This item will be deleted immediately",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"catch"}}}).then((function(a){switch(a){case"cancel":break;case"catch":N.a.get("/admin/dlt_alltrade/".concat(e)).then((function(){t.alltradeList()}))}}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,r=t.defaultColDef;return o.a.createElement(s.a,{className:"app-user-list "},o.a.createElement(d.a,{lg:"12",md:"12",sm:"12"},o.a.createElement(u.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:" p-2"},"View Your Claim Status"),o.a.createElement(m.a,null,null===this.state.rowData?null:o.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},o.a.createElement("div",{className:"mb-1"},o.a.createElement(p.a,{className:"p-1 ag-dropdown"},o.a.createElement(g.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,o.a.createElement(y.a,{className:"ml-50",size:15})),o.a.createElement(f.a,{right:!0},o.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),o.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),o.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),o.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},o.a.createElement("div",{className:"table-input mr-1"},o.a.createElement(v.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),o.a.createElement("div",{className:"export-btn"},o.a.createElement(w.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),o.a.createElement(E.a.Consumer,null,(function(t){return o.a.createElement(S.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(o.a.Component);t.default=C}}]);
//# sourceMappingURL=222.90bbfc02.chunk.js.map