(function(t){function e(e){for(var i,s,r=e[0],o=e[1],c=e[2],d=0,f=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(f.length)f.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],i=!0,r=1;r<a.length;r++){var o=a[r];0!==n[o]&&(i=!1)}i&&(l.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},n={app:0},l=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=o;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2ee9":function(t,e,a){},"4ae8":function(t,e,a){"use strict";a("2ee9")},"4b68":function(t,e,a){"use strict";a("dc92")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("Navbar"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 col-md-6"},["default"===t.tableType||"selected"===t.tableType?a("MultiselectData",{on:{multiCovidData:function(e){return t.statesTableData(e)}}}):t._e()],1),a("div",{staticClass:"col-lg-8 col-md-6"},["default"===t.tableType||"filtered"===t.tableType?a("FilterData",{on:{filteredData:function(e){return t.filterStatesData(e)},resetData:function(e){return t.filterStatesData(e)}}}):t._e()],1)]),a("div",{staticClass:"row justify-content-lg-center"},[a("div",{staticClass:"col-lg-10 col-md-6"},[a("br"),a("br"),"default"===t.tableType?a("Table",{attrs:{covidData:t.paginatedTableData,config:t.tableConfig}}):t._e(),"selected"===t.tableType?a("Table",{attrs:{covidData:t.paginatedMultiData,config:t.tableConfig}}):t._e(),"filtered"===t.tableType?a("Table",{attrs:{covidData:t.paginatedFilterData,config:t.tableConfig}}):t._e(),a("br"),a("br")],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col d-flex justify-content-center"},[a("Pagination",{attrs:{totalRecords:t.tableCount},model:{value:t.pagination,callback:function(e){t.pagination=e},expression:"pagination"}})],1)])],1)},l=[],s=a("5530"),r=(a("b64b"),a("fb6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.tempData?a("table",{staticClass:"table table-striped table-light table-bordered table-hover table-responsive"},[a("thead",{staticClass:"text-center"},[a("tr",[a("th",[t._v("State")]),t._l(t.config,(function(e,i){return a("th",{key:i},[t._v(" "+t._s(e.title)+" "),a("span",[a("i",{staticClass:"bi bi-filter",on:{click:function(a){return t.sort(e.key)}}})])])}))],2)]),a("tbody",{staticClass:"text-center"},t._l(t.covidData,(function(e,i){return a("tr",{key:i},[a("td",[t._v(t._s(e.state))]),t._l(t.config,(function(i,n){return a("td",{key:n},[t._v(" "+t._s(e["total"][i.key])+" ")])}))],2)})),0)]):t._e()}),o=[],c=(a("4e82"),{props:["covidData","config"],data:function(){return{tempData:[],currentSort:"",isAsc:!0}},mounted:function(){this.tempData=this.covidData},methods:{sort:function(t){var e=this;t===this.currentSort&&(this.isAsc=!this.isAsc),this.currentSort=t,this.tempData=this.covidData.sort((function(a,i){return a["total"][t]>i["total"][t]?e.isAsc?1:-1:a["total"][t]<i["total"][t]?e.isAsc?-1:1:0}))}}}),u=c,d=(a("4ae8"),a("2877")),f=Object(d["a"])(u,r,o,!1,null,"30f10aab",null),p=f.exports,h=[{key:"confirmed",title:"Confirmed"},{key:"deceased",title:"Deceased"},{key:"recovered",title:"Recovered"},{key:"tested",title:"Tested"},{key:"vaccinated1",title:"Vaccinated1"},{key:"vaccinated2",title:"Vaccinated2"}],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item active page-link",on:{click:function(e){return t.changePage(-1)}}},[t._v("Previous")]),t._l(t.pages,(function(e){return a("li",{key:e,staticClass:"page-item page-link",class:t.active(e),on:{click:function(a){return t.goToPage(e)}}},[t._v(" "+t._s(e)+" ")])})),a("li",{staticClass:"page-item page-link",on:{click:function(e){return t.changePage(1)}}},[t._v("Next")])],2)])])},g=[],b={props:["totalRecords"],data:function(){return{page:1,perPage:10}},computed:{pages:function(){var t=this.totalRecords%this.perPage;return t>0?Math.floor(this.totalRecords/this.perPage)+1:this.totalRecords/this.perPage}},methods:{changePage:function(t){switch(t){case-1:this.page=this.page>1?this.page-1:this.page;break;case 1:this.page=this.page<this.pages?this.page+1:this.page;break}this.$emit("input",{page:this.page,perPage:this.perPage})},active:function(t){if(this.page===t)return"pg"},goToPage:function(t){this.page=t,this.$emit("input",{page:this.page,perPage:this.perPage})}}},D=b,m=(a("c912"),Object(d["a"])(D,v,g,!1,null,"1aa3f72a",null)),_=m.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3"},[a("label",{staticClass:"d-block ",attrs:{for:"fields"}},[t._v("Choose Field")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedField,expression:"selectedField"}],staticClass:"d-block form-select",attrs:{name:"fields",id:"fields"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedField=e.target.multiple?a:a[0]}}},t._l(t.fieldConfig,(function(e){return a("option",{key:e.key,domProps:{value:e.key}},[t._v(t._s(e.title))])})),0)]),a("div",{staticClass:"col-lg-3"},[a("label",{staticClass:"d-block",attrs:{for:"operation"}},[t._v("Choose Operation")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.operation,expression:"operation"}],staticClass:"d-block form-select",attrs:{name:"operation",id:"operation"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.operation=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"gt"}},[t._v("Greater than")]),a("option",{attrs:{value:"lt"}},[t._v("Less than")]),a("option",{attrs:{value:"eq"}},[t._v("Equals to")])])]),a("div",{staticClass:"col-lg-3"},[a("label",{staticClass:"d-block",attrs:{for:"val"}},[t._v("Enter Value")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"d-block form-control",attrs:{type:"number"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})]),a("div",{staticClass:"col-lg-3 mt-4"},[a("button",{staticClass:"btn btn-primary mx-2",on:{click:t.loadData}},[t._v("Show Data")]),a("button",{staticClass:"btn btn-info mx-2",on:{click:t.resetData}},[t._v("Reset Data")])])])},C=[],T=(a("4de4"),a("2f62")),k={data:function(){return{fieldConfig:h,selectedField:"",operation:"",value:0,filteredData:[]}},computed:Object(s["a"])({},Object(T["c"])({tableData:"covidData",filterData:"filterCovidData"})),methods:Object(s["a"])(Object(s["a"])({},Object(T["b"])(["initFilterData"])),{},{loadData:function(){var t=this;"lt"===this.operation&&""!==this.selectedField&&(this.filteredData=this.tableData.filter((function(e){return e.total[t.selectedField]<t.value})),this.initFilterData(this.filteredData),this.$emit("filteredData",0===this.filterData.length)),"gt"===this.operation&&""!==this.selectedField&&(this.filteredData=this.tableData.filter((function(e){return e.total[t.selectedField]>t.value})),this.initFilterData(this.filteredData),this.$emit("filteredData",0===this.filterData.length)),"eq"===this.operation&&""!==this.selectedField&&(this.filteredData=this.tableData.filter((function(e){return e.total[t.selectedField]==t.value})),this.initFilterData(this.filteredData),this.$emit("filteredData",0===this.filterData.length))},resetData:function(){this.selectedField="",this.operation="",this.value="",this.filteredData=[],this.initFilterData(this.filteredData),this.$emit("resetData",0===this.filterData.length)}})},O=k,j=Object(d["a"])(O,y,C,!1,null,"47305cea",null),S=j.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-light",staticStyle:{"background-color":"#e3f2fd"}},[a("div",{staticClass:"container-fluid"},[a("span",{staticClass:"navbar-brand mb-0 h1"},[t._v("Covid Data")])]),a("br"),a("br")]),a("br"),a("br")])}],x={},w=Object(d["a"])(x,P,F,!1,null,null,null),A=w.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 ms"},[a("label",{attrs:{for:"multiselect"}},[t._v("Select States")]),a("Multiselect",{staticClass:"mSelect",attrs:{"tag-placeholder":"Add this as new tag",placeholder:"Search or add a tag",label:"state",id:"multiselect","track-by":"state",options:t.states,multiple:!0,taggable:!0,maxHeight:300},model:{value:t.selectedStates,callback:function(e){t.selectedStates=e},expression:"selectedStates"}})],1)])},E=[],$=a("8e5f"),R=a.n($),I={components:{Multiselect:R.a},data:function(){return{selectedStates:[]}},computed:Object(s["a"])({},Object(T["c"])({states:"covidData",multi:"multiSelectCovidData"})),watch:{selectedStates:function(t){this.initMultiData(t),this.$emit("multiCovidData",0===t.length)}},methods:Object(s["a"])({},Object(T["b"])(["initMultiData"]))},N=I,L=(a("60bc"),a("4b68"),Object(d["a"])(N,M,E,!1,null,"c5030ce2",null)),V=L.exports,q={components:{Table:p,Pagination:_,FilterData:S,Navbar:A,MultiselectData:V},data:function(){return{tableConfig:h,pagination:{page:1,perPage:10},dataKeys:[],states:[],selectedStates:[],filteredStatesData:[],tableType:"default"}},mounted:function(){this.initData()},computed:Object(s["a"])(Object(s["a"])({},Object(T["c"])({tableData:"covidData",multiData:"multiSelectCovidData",filterData:"filterCovidData"})),{},{tableCount:function(){return"selected"===this.tableType?Object.keys(this.multiData).length:"filtered"===this.tableType?Object.keys(this.filterData).length:Object.keys(this.tableData).length},paginatedTableData:function(){if(this.tableData){var t=(this.pagination.page-1)*this.pagination.perPage,e=this.pagination.page*this.pagination.perPage;return this.tableData.slice(t,e)}return[]},paginatedMultiData:function(){if(this.multiData){var t=(this.pagination.page-1)*this.pagination.perPage,e=this.pagination.page*this.pagination.perPage;return this.multiData.slice(t,e)}return[]},paginatedFilterData:function(){if(this.filterData){var t=(this.pagination.page-1)*this.pagination.perPage,e=this.pagination.page*this.pagination.perPage;return this.filterData.slice(t,e)}return[]}}),methods:Object(s["a"])(Object(s["a"])({},Object(T["b"])(["initData","initMultiData","initFilterData"])),{},{statesTableData:function(t){!1===t?(this.initFilterData([]),this.tableType="selected"):!0===t&&0!==this.filterData.length?this.tableType="filtered":this.tableType="default"},filterStatesData:function(t){!1===t?(this.initMultiData([]),this.tableType="filtered"):!0===t&&0!==this.multiData.length?this.tableType="selected":this.tableType="default"}})},J=q,U=(a("f68d"),Object(d["a"])(J,n,l,!1,null,"fb5e3ede",null)),G=U.exports,H=a("b85c"),K=a("bc3a"),z=a.n(K),B={covidData:[]},Q={SET_COVID_DATA:function(t,e){t.covidData=e}},W={initData:function(t){var e=t.commit,a=[],i=[];z.a.get("https://api.covid19india.org/v4/min/data.min.json").then((function(t){var n=t.data;a=Object.keys(n);var l,s=Object(H["a"])(a);try{for(s.s();!(l=s.n()).done;){var r=l.value;i.push(n[r])}}catch(c){s.e(c)}finally{s.f()}for(var o=0;o<i.length;o++)i[o].state=a[o];e("SET_COVID_DATA",i)}))}},X={covidData:function(t){return t.covidData}},Y={state:B,mutations:Q,actions:W,getters:X},Z={multiSelectCovidData:[]},tt={SET_MULTI_DATA:function(t,e){t.multiSelectCovidData=e}},et={initMultiData:function(t,e){var a=t.commit;a("SET_MULTI_DATA",e)}},at={multiSelectCovidData:function(t){return t.multiSelectCovidData}},it={state:Z,mutations:tt,actions:et,getters:at},nt={filterCovidData:[]},lt={SET_FILTER_DATA:function(t,e){t.filterCovidData=e}},st={initFilterData:function(t,e){var a=t.commit;a("SET_FILTER_DATA",e)}},rt={filterCovidData:function(t){return t.filterCovidData}},ot={state:nt,mutations:lt,actions:st,getters:rt};i["a"].use(T["a"]);var ct=new T["a"].Store({modules:{table:Y,multiselect:it,filter:ot}});i["a"].config.productionTip=!1,new i["a"]({store:ct,render:function(t){return t(G)}}).$mount("#app")},"58e9":function(t,e,a){},"9b0e":function(t,e,a){},c912:function(t,e,a){"use strict";a("9b0e")},dc92:function(t,e,a){},f68d:function(t,e,a){"use strict";a("58e9")}});
//# sourceMappingURL=app.5d8f6ab7.js.map