(function(t){function e(e){for(var i,l,r=e[0],o=e[1],c=e[2],d=0,f=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&f.push(n[l][0]),n[l]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,r=1;r<a.length;r++){var o=a[r];0!==n[o]&&(i=!1)}i&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var i={},n={app:0},s=[];function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=i,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(a,i,function(e){return t[e]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2ee9":function(t,e,a){},"4ae8":function(t,e,a){"use strict";a("2ee9")},"4b68":function(t,e,a){"use strict";a("dc92")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("Navbar"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 col-md-6"},[a("MultiselectData",{on:{multiCovidData:function(e){return t.statesTableData(e)}}})],1),a("div",{staticClass:"col-lg-8 col-md-6"},[a("FilterData",{on:{filteredData:function(e){return t.filterStatesData(e)},resetData:function(e){return t.filterStatesData(e)}}})],1)]),a("div",{staticClass:"row justify-content-lg-center"},[a("div",{staticClass:"col-lg-10 col-md-6"},[a("br"),a("br"),"default"===t.tableType?a("Table",{attrs:{covidData:t.paginatedTableData,config:t.tableConfig}}):t._e(),"selected"===t.tableType?a("Table",{attrs:{covidData:t.paginatedMultiData,config:t.tableConfig}}):t._e(),"filtered"===t.tableType?a("Table",{attrs:{covidData:t.paginatedFilterData,config:t.tableConfig}}):t._e(),a("br"),a("br")],1)]),a("div",{staticClass:"row"},["noData"===t.tableType?a("div",{staticClass:"col d-flex justify-content-center"},[a("h1",[t._v("No Data Available")])]):t._e()]),a("div",{staticClass:"row"},[t.loading?a("Spinner"):t._e(),a("div",{staticClass:"col d-flex justify-content-center"},[a("Pagination",{attrs:{totalRecords:t.tableCount},model:{value:t.pagination,callback:function(e){t.pagination=e},expression:"pagination"}})],1)],1)],1)},s=[],l=a("5530"),r=(a("b64b"),a("fb6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.tempData?a("table",{staticClass:"table table-striped table-light table-bordered table-hover table-responsive"},[a("thead",{staticClass:"text-center"},[a("tr",[a("th",[t._v("State")]),t._l(t.config,(function(e,i){return a("th",{key:i},[t._v(" "+t._s(e.title)+" "),a("span",[a("i",{staticClass:"bi bi-filter",on:{click:function(a){return t.sort(e.key)}}})])])}))],2)]),a("tbody",{staticClass:"text-center"},t._l(t.covidData,(function(e,i){return a("tr",{key:i},[a("td",[t._v(t._s(e.state))]),t._l(t.config,(function(i,n){return a("td",{key:n},[t._v(" "+t._s(e["total"][i.key])+" ")])}))],2)})),0)]):t._e()}),o=[],c=(a("4e82"),{props:["covidData","config"],data:function(){return{tempData:[],currentSort:"",isAsc:!0}},mounted:function(){this.tempData=this.covidData},methods:{sort:function(t){var e=this;t===this.currentSort&&(this.isAsc=!this.isAsc),this.currentSort=t,this.tempData=this.covidData.sort((function(a,i){return a["total"][t]>i["total"][t]?e.isAsc?1:-1:a["total"][t]<i["total"][t]?e.isAsc?-1:1:0}))}}}),u=c,d=(a("4ae8"),a("2877")),f=Object(d["a"])(u,r,o,!1,null,"30f10aab",null),p=f.exports,h=[{key:"confirmed",title:"Confirmed"},{key:"deceased",title:"Deceased"},{key:"recovered",title:"Recovered"},{key:"tested",title:"Tested"},{key:"vaccinated1",title:"Vaccinated1"},{key:"vaccinated2",title:"Vaccinated2"}],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item active page-link",on:{click:function(e){return t.changePage(-1)}}},[t._v("Previous")]),t._l(t.pages,(function(e){return a("li",{key:e,staticClass:"page-item page-link",class:t.active(e),on:{click:function(a){return t.goToPage(e)}}},[t._v(" "+t._s(e)+" ")])})),a("li",{staticClass:"page-item page-link",on:{click:function(e){return t.changePage(1)}}},[t._v("Next")])],2)])])},g=[],b={props:["totalRecords"],data:function(){return{page:1,perPage:10}},computed:{pages:function(){var t=this.totalRecords%this.perPage;return t>0?Math.floor(this.totalRecords/this.perPage)+1:this.totalRecords/this.perPage}},methods:{changePage:function(t){switch(t){case-1:this.page=this.page>1?this.page-1:this.page;break;case 1:this.page=this.page<this.pages?this.page+1:this.page;break}this.$emit("input",{page:this.page,perPage:this.perPage})},active:function(t){if(this.page===t)return"pg"},goToPage:function(t){this.page=t,this.$emit("input",{page:this.page,perPage:this.perPage})}}},D=b,m=(a("937f"),Object(d["a"])(D,v,g,!1,null,"312c8552",null)),y=m.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3"},[a("label",{staticClass:"d-block ",attrs:{for:"fields"}},[t._v("Choose Field")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedField,expression:"selectedField"}],staticClass:"d-block form-select",attrs:{name:"fields",id:"fields"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedField=e.target.multiple?a:a[0]}}},t._l(t.fieldConfig,(function(e){return a("option",{key:e.key,domProps:{value:e.key}},[t._v(t._s(e.title))])})),0)]),a("div",{staticClass:"col-lg-3"},[a("label",{staticClass:"d-block",attrs:{for:"operation"}},[t._v("Choose Operation")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.operation,expression:"operation"}],staticClass:"d-block form-select",attrs:{name:"operation",id:"operation"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.operation=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"gt"}},[t._v("Greater than")]),a("option",{attrs:{value:"lt"}},[t._v("Less than")]),a("option",{attrs:{value:"eq"}},[t._v("Equals to")])])]),a("div",{staticClass:"col-lg-3"},[a("label",{staticClass:"d-block",attrs:{for:"val"}},[t._v("Enter Value")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"d-block form-control",attrs:{type:"number"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})]),a("div",{staticClass:"col-lg-3 mt-4"},[a("button",{staticClass:"btn btn-primary mx-2",on:{click:t.loadData}},[t._v("Show Data")]),a("button",{staticClass:"btn btn-info mx-2",on:{click:t.resetData}},[t._v("Reset Data")])])])},C=[],T=(a("4de4"),a("2f62")),S={data:function(){return{fieldConfig:h,selectedField:"",operation:"",value:0,filteredData:[]}},computed:Object(l["a"])({},Object(T["c"])({tableData:"covidData",filterData:"filterCovidData"})),methods:Object(l["a"])(Object(l["a"])({},Object(T["b"])(["initFilterData"])),{},{loadData:function(){var t=this;"lt"===this.operation&&""!==this.selectedField&&(this.filteredData=this.tableData.filter((function(e){return e.total[t.selectedField]<t.value})),this.initFilterData(this.filteredData),this.$emit("filteredData",{hasData:0===this.filterData.length,filterType:"show"})),"gt"===this.operation&&""!==this.selectedField&&(this.filteredData=this.tableData.filter((function(e){return e.total[t.selectedField]>t.value})),this.initFilterData(this.filteredData),this.$emit("filteredData",{hasData:0===this.filterData.length,filterType:"show"})),"eq"===this.operation&&""!==this.selectedField&&(this.filteredData=this.tableData.filter((function(e){return e.total[t.selectedField]==t.value})),this.initFilterData(this.filteredData),this.$emit("filteredData",{hasData:0===this.filterData.length,filterType:"show"}))},resetData:function(){this.selectedField="",this.operation="",this.value="",this.filteredData=[],this.initFilterData(this.filteredData),this.$emit("resetData",{hasData:0===this.filterData.length,filterType:"reset"})}})},k=S,O=Object(d["a"])(k,_,C,!1,null,"45f4dce4",null),j=O.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-light",staticStyle:{"background-color":"#e3f2fd"}},[a("div",{staticClass:"container-fluid"},[a("span",{staticClass:"navbar-brand mb-0 h1"},[t._v("Covid Data")])]),a("br"),a("br")]),a("br"),a("br")])}],x={},F=Object(d["a"])(x,w,P,!1,null,null,null),A=F.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 ms"},[a("label",{attrs:{for:"multiselect"}},[t._v("Select States")]),a("Multiselect",{staticClass:"mSelect",attrs:{"tag-placeholder":"Add this as new tag",placeholder:"Search or add a tag",label:"state",id:"multiselect","track-by":"state",options:t.states,multiple:!0,taggable:!0,maxHeight:300},model:{value:t.selectedStates,callback:function(e){t.selectedStates=e},expression:"selectedStates"}})],1)])},$=[],L=a("8e5f"),M=a.n(L),N={components:{Multiselect:M.a},data:function(){return{selectedStates:[]}},computed:Object(l["a"])({},Object(T["c"])({states:"covidData",multi:"multiSelectCovidData"})),watch:{selectedStates:function(t){this.initMultiData(t),this.$emit("multiCovidData",0===t.length)}},methods:Object(l["a"])({},Object(T["b"])(["initMultiData"]))},R=N,I=(a("60bc"),a("4b68"),Object(d["a"])(R,E,$,!1,null,"c5030ce2",null)),V=I.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center"},[a("div",{staticClass:"spinner-border",attrs:{role:"status"}},[a("span",{staticClass:"visually-hidden"},[t._v("Loading...")])])])}],J={},U=J,H=Object(d["a"])(U,q,G,!1,null,null,null),K=H.exports,z={components:{Table:p,Pagination:y,FilterData:j,Navbar:A,MultiselectData:V,Spinner:K},data:function(){return{tableConfig:h,pagination:{page:1,perPage:10},dataKeys:[],states:[],selectedStates:[],filteredStatesData:[],tableType:"default",btnType:""}},mounted:function(){this.initData()},computed:Object(l["a"])(Object(l["a"])({},Object(T["c"])({tableData:"covidData",multiData:"multiSelectCovidData",filterData:"filterCovidData",loading:"isLoading"})),{},{tableCount:function(){return"selected"===this.tableType?Object.keys(this.multiData).length:"filtered"===this.tableType?Object.keys(this.filterData).length:"noData"===this.tableType?0:Object.keys(this.tableData).length},paginatedTableData:function(){if(this.tableData){var t=(this.pagination.page-1)*this.pagination.perPage,e=this.pagination.page*this.pagination.perPage;return this.tableData.slice(t,e)}return[]},paginatedMultiData:function(){if(this.multiData){var t=(this.pagination.page-1)*this.pagination.perPage,e=this.pagination.page*this.pagination.perPage;return this.multiData.slice(t,e)}return[]},paginatedFilterData:function(){if(this.filterData){var t=(this.pagination.page-1)*this.pagination.perPage,e=this.pagination.page*this.pagination.perPage;return this.filterData.slice(t,e)}return[]}}),methods:Object(l["a"])(Object(l["a"])({},Object(T["b"])(["initData"])),{},{statesTableData:function(t){!1===t?this.tableType="selected":!0===t&&0!==this.filterData.length?this.tableType="filtered":!0===t&&0===this.filterData.length?"show"===this.btnType?this.filterStatesData({hasData:!0,filterType:"show"}):"reset"===this.btnType&&this.filterStatesData({hasData:!0,filterType:"reset"}):this.tableType="default"},filterStatesData:function(t){!1===t.hasData?(this.btnType="show",this.tableType="filtered"):!0===t.hasData&&0!==this.multiData.length&&"show"!==t.filterType?(this.btnType="reset",this.tableType="selected"):!0===t.hasData&&"show"===t.filterType?(this.btnType="show",this.tableType="noData"):this.tableType="default"}})},B=z,Q=(a("c4a5"),Object(d["a"])(B,n,s,!1,null,"4a4dcfcf",null)),W=Q.exports,X=a("b85c"),Y=a("bc3a"),Z=a.n(Y),tt={covidData:[],isLoading:!1},et={SET_COVID_DATA:function(t,e){t.covidData=e},SET_LOADING:function(t,e){t.isLoading=e}},at={initData:function(t){var e=t.commit,a=t.dispatch;a("setLoading",!0);var i=[],n=[];Z.a.get("https://api.covid19india.org/v4/min/data.min.json").then((function(t){var s=t.data;i=Object.keys(s);var l,r=Object(X["a"])(i);try{for(r.s();!(l=r.n()).done;){var o=l.value;n.push(s[o])}}catch(u){r.e(u)}finally{r.f()}for(var c=0;c<n.length;c++)n[c].state=i[c];e("SET_COVID_DATA",n),a("setLoading",!1)}))},setLoading:function(t,e){var a=t.commit;a("SET_LOADING",e)}},it={covidData:function(t){return t.covidData},isLoading:function(t){return t.isLoading}},nt={state:tt,mutations:et,actions:at,getters:it},st={multiSelectCovidData:[]},lt={SET_MULTI_DATA:function(t,e){t.multiSelectCovidData=e}},rt={initMultiData:function(t,e){var a=t.commit;a("SET_MULTI_DATA",e)}},ot={multiSelectCovidData:function(t){return t.multiSelectCovidData}},ct={state:st,mutations:lt,actions:rt,getters:ot},ut={filterCovidData:[]},dt={SET_FILTER_DATA:function(t,e){t.filterCovidData=e}},ft={initFilterData:function(t,e){var a=t.commit;a("SET_FILTER_DATA",e)}},pt={filterCovidData:function(t){return t.filterCovidData}},ht={state:ut,mutations:dt,actions:ft,getters:pt};i["a"].use(T["a"]);var vt=new T["a"].Store({modules:{table:nt,multiselect:ct,filter:ht}});i["a"].config.productionTip=!1,new i["a"]({store:vt,render:function(t){return t(W)}}).$mount("#app")},"937f":function(t,e,a){"use strict";a("d455")},c4a5:function(t,e,a){"use strict";a("ca41")},ca41:function(t,e,a){},d455:function(t,e,a){},dc92:function(t,e,a){}});
//# sourceMappingURL=app.7e6930eb.js.map