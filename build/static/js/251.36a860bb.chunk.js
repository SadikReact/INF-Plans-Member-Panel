(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[251],{2397:function(e,a,t){"use strict";t.r(a);var r=t(14),l=t(15),n=t(17),i=t(16),d=t(1),c=t.n(d),s=t(1148),m=t(1149),u=t(1150),o=t(1153),p=t(793),g=t(796),f=t(794),h=t(792),v=t(800),w=t(173),N=t(170),E=t(171),b=t(808),y=t(440),_=t(262),T=(t(28),t(805),t(570),t(870)),F=t.n(T),k=t(802),S=t.n(k),R=function(e){Object(n.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(r.a)(this,t);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Type Of Script",field:"script_type",width:140,cellRendererFramework:function(e){return c.a.createElement("div",{className:"d-flex  align-items-center cursor-pointer"},c.a.createElement("span",null,e.data.script_type))}},{headerName:"Script Name",field:"scriptName",width:140,cellRendererFramework:function(e){var a,t,r;return c.a.createElement("div",{className:"d-flex  align-items-center cursor-pointer"},c.a.createElement("span",null,null===(a=e.data.fnoindex_scrpt_name)||void 0===a?void 0:a.scriptName),c.a.createElement("span",null,null===(t=e.data.fnoequty_scrpt_name)||void 0===t?void 0:t.scriptName),c.a.createElement("span",null,null===(r=e.data.cash_scrpt_name)||void 0===r?void 0:r.scriptName))}},{headerName:" Date",field:"date",width:140,cellRendererFramework:function(e){return c.a.createElement("div",{className:"d-flex  align-items-center cursor-pointer"},c.a.createElement("span",null,F()(e.data.updatedAt).format("ll")))}},{headerName:"Trade Type",field:"type",width:140,cellRendererFramework:function(e){return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,e.data.type))}},{headerName:"Call Type",field:"call_type",width:140,cellRendererFramework:function(e){return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,e.data.call_type))}},{headerName:"Active Value",field:"active_value",width:140,cellRendererFramework:function(e){return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,e.data.active_value))}},{headerName:"Active Value 2",field:"active_value2",width:140,cellRendererFramework:function(e){return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,e.data.active_value2))}},{headerName:" SL",field:"SL",width:140,cellRendererFramework:function(e){return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,e.data.SL))}},{headerName:"Trial",field:"trl",width:140,cellRendererFramework:function(e){return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,e.data.trl))}},{headerName:"T\u20b9 1",field:"T1",width:140,cellRendererFramework:function(e){return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,e.data.T1))}},{headerName:"T\u20b9 2",field:"T2",width:140,cellRendererFramework:function(e){return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,e.data.T2))}},{headerName:"T\u20b9 3",field:"T3",width:140,cellRendererFramework:function(e){return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,e.data.T3))}},{headerName:"T\u20b9 4",field:"T4",width:140,cellRendererFramework:function(e){return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,e.data.T4))}},{headerName:"T5",field:"t5",width:140,cellRendererFramework:function(e){return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,e.data.t5))}},{headerName:"Quantity",field:"qty",width:140,cellRendererFramework:function(e){return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,e.data.qty))}},{headerName:"Investment Amount",field:"investment_amt",width:140,cellRendererFramework:function(e){return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,e.data.investment_amt))}},{headerName:"Date",field:"updatedAt",width:120,cellRendererFramework:function(e){return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,F()(e.data.updatedAt).format("ll")," "))}},{headerName:"Number Of Lots",field:"no_of_lots",width:140,cellRendererFramework:function(e){return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,e.data.no_of_lots))}},{headerName:"SL Type",field:"sl_type",filter:!0,width:150,cellRendererFramework:function(e){return"true"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.sl_type):"false"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.sl_type):null}},{headerName:"Trial Type",field:"trl_type",filter:!0,width:150,cellRendererFramework:function(e){return"true"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.trl_type):"false"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.trl_type):null}},{headerName:"FT1 Type",field:"FT1_type",filter:!0,width:150,cellRendererFramework:function(e){return"true"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.FT1_type):"false"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.FT1_type):null}},{headerName:"FT2 Type",field:"FT2_type",filter:!0,width:150,cellRendererFramework:function(e){return"true"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.FT2_type):"false"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.FT2_type):null}},{headerName:"FT3 Type",field:"FT3_type",filter:!0,width:150,cellRendererFramework:function(e){return"true"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.FT3_type):"false"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.FT3_type):null}},{headerName:"T1 Type",field:"t1_type",filter:!0,width:150,cellRendererFramework:function(e){return"true"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.t1_type):"false"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.t1_type):null}},{headerName:"T2 Type",field:"t2_type",filter:!0,width:150,cellRendererFramework:function(e){return"true"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.t2_type):"false"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.t2_type):null}},{headerName:"T3 Type",field:"t3_type",filter:!0,width:150,cellRendererFramework:function(e){return"true"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.t3_type):"false"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.t3_type):null}},{headerName:"T4 Type",field:"t4_type",filter:!0,width:150,cellRendererFramework:function(e){return"true"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.t4_type):"false"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.t4_type):null}},{headerName:"Status ",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Closed"===e.data.tradeStatus?c.a.createElement("div",{className:"badge badge-pill badge-success"},"Complted"):"true"===e.data.sl_type?c.a.createElement("div",{className:"badge badge-pill badge-danger"},"Complted"):null}},{headerName:"Actions",field:"sortorder",width:150,pinned:window.innerWidth>992&&"right",cellRendererFramework:function(a){return c.a.createElement("div",{className:"actions cursor-pointer"},c.a.createElement(y.a,{size:20,color:"red",onClick:function(){e.runthisfunction(a.data._id)}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(l.a)(t,[{key:"runthisfunction",value:function(e){var a=this;S()("Do You Want To Delete Permanently","This item will be deleted immediately",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"catch"}}}).then((function(t){switch(t){case"cancel":break;case"catch":N.a.get("/admin/dlt_alltrade/".concat(e)).then((function(e){a.getCompletedTradeList()}))}}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,l=a.defaultColDef;return c.a.createElement(s.a,{className:"app-user-list"},c.a.createElement(m.a,{sm:"12"}),c.a.createElement(m.a,{sm:"12"},c.a.createElement(u.a,null,c.a.createElement(s.a,{className:"m-2"},c.a.createElement(m.a,null,c.a.createElement("h1",{sm:"6",className:"float-left"},"Completed Trade List"))),c.a.createElement(o.a,null,null===this.state.rowData?null:c.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},c.a.createElement("div",{className:"mb-1"},c.a.createElement(p.a,{className:"p-1 ag-dropdown"},c.a.createElement(g.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,c.a.createElement(_.a,{className:"ml-50",size:15})),c.a.createElement(f.a,{right:!0},c.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),c.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),c.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),c.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},c.a.createElement("div",{className:"table-input mr-1"},c.a.createElement(v.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),c.a.createElement("div",{className:"export-btn"},c.a.createElement(w.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),c.a.createElement(E.a.Consumer,null,(function(a){return c.a.createElement(b.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:l,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(c.a.Component);a.default=R}}]);
//# sourceMappingURL=251.36a860bb.chunk.js.map