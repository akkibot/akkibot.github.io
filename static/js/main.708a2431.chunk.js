(this.webpackJsonpakki=this.webpackJsonpakki||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(7),s=t.n(r),c=(t(14),t(15),t(16),t(5)),o=t(1),m=t(2),i=t(4),d=t(3),h=t(8),u=t.n(h);function v(e,a){return Math.random()*(a-e)+e}var g=["pink lighten-4","yellow accent-2"];function E(e){return e>=0&&e<=5?"blue lighten-4":parseInt((e-6)/9)%2==0?g[0]:g[1]}var N=function(e){Object(i.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=a.call.apply(a,[this].concat(s))).calculateResult=function(){var a=e.props.rawData,t=a.amount,r=a.days,s=a.mateWater,c=a.minLength,o=a.maxLength,m=a.minWidth,i=a.maxWidth,d=a.minHeight,h=a.maxHeight,u={perDayWage:190,rate:118.62};u.mwQuantity=Math.round(t/(r*u.perDayWage*50));var g=[];g.push(n.a.createElement("div",{className:"row no-bottom-margin grey darken-4 white-text"},n.a.createElement("div",{className:"col border s1"},"No"),n.a.createElement("div",{className:"col border s2"},"Length"),n.a.createElement("div",{className:"col border s2"},"Width"),n.a.createElement("div",{className:"col border s2"},"Height"),n.a.createElement("div",{className:"col border s2"},"Result"),n.a.createElement("div",{className:"col border s3"},"Cumulative")));var N=Math.round(u.mwQuantity*u.perDayWage*r);console.log("mateVal",N);var b,p=N;console.log("waterVal",p),"true"===s?(b=t-2*N,console.log("excavation",b)):(b=t,console.log("excavation",b));var w=parseFloat(b/u.rate).toFixed(2);console.log("quantity",w);for(var x=0,y=0,f=0;y<=w;){var F=v(c,o).toFixed(1),W=v(m,i).toFixed(1),C=v(d,h).toFixed(2),M=parseFloat(F*W*C).toFixed(2),S=y;if(y+=M=parseFloat(M),(y=parseFloat(parseFloat(y).toFixed(2)))<=w)g.push(n.a.createElement("div",{className:"row no-bottom-margin ".concat(E(f))},n.a.createElement("div",{className:"col border s1"},"1"),n.a.createElement("div",{className:"col border s2"},String(F)),n.a.createElement("div",{className:"col border s2"},String(W)),n.a.createElement("div",{className:"col border s2"},String(C)),n.a.createElement("div",{className:"col border s2"},String(M)),n.a.createElement("div",{className:"col border s3"},String(y)))),console.log("1 * "+F+" * "+W+" * "+C+" = "+M+"     "+y),x+=parseFloat(M);else{var k=w-S;W=(k=parseFloat(parseFloat(k).toFixed(2)))/((F=v(c,o).toFixed(1))*(C=v(d,h).toFixed(2))),M=parseFloat(F*W*C),console.log("remainderVal",k),g.push(n.a.createElement("div",{className:"row no-bottom-margin ".concat(E(f))},n.a.createElement("div",{className:"col border s1"},"1"),n.a.createElement("div",{className:"col border s2"},String(F)),n.a.createElement("div",{className:"col border s2"},String(W.toFixed(2))),n.a.createElement("div",{className:"col border s2"},String(C)),n.a.createElement("div",{className:"col border s2"},String(M.toFixed(2))),n.a.createElement("div",{className:"col border s3"},String(w)))),console.log("1 * "+F+" * "+W.toFixed(2)+" * "+C+" = "+M.toFixed(2)+"     "+w),x+=parseFloat(M)}f+=1}return g.push(n.a.createElement("div",{className:"row no-bottom-margin lime accent-3"},n.a.createElement("div",{className:"col border s7"},"Total Quantity"),n.a.createElement("div",{className:"col border s2"},String(x.toFixed(2))),n.a.createElement("div",{className:"col border s3"},String(x.toFixed(2))))),g.push(n.a.createElement("div",{className:"row no-bottom-margin lime accent-3"},n.a.createElement("div",{className:"col border s9"},"@rate"),n.a.createElement("div",{className:"col border s3"},u.rate))),g.push(n.a.createElement("div",{className:"row no-bottom-margin lime accent-3"},n.a.createElement("div",{className:"col border s9"},"Excavation Amount"),n.a.createElement("div",{className:"col border s3"},b))),"true"===s&&g.push(n.a.createElement("div",{className:"row no-bottom-margin  blue lighten-3"},n.a.createElement("div",{className:"col border s9"},"Mate Amount"),n.a.createElement("div",{className:"col border s3"},N))),"true"===s&&g.push(n.a.createElement("div",{className:"row no-bottom-margin  blue lighten-3"},n.a.createElement("div",{className:"col border s9"},"Water Amount"),n.a.createElement("div",{className:"col border s3"},N))),g.push(n.a.createElement(l.Fragment,null,n.a.createElement("div",{className:"row no-bottom-margin"}),n.a.createElement("div",{className:"row no-bottom-margin orange lighten-2"},n.a.createElement("div",{className:"col border s9"},"Total Amount"),n.a.createElement("div",{className:"col border s3"},b+2*N)))),g.push(n.a.createElement(l.Fragment,null,n.a.createElement("div",{className:"row no-bottom-margin"}),n.a.createElement("div",{className:"row no-bottom-margin"},n.a.createElement("div",{className:"col border s9"},"Total Iterations"),n.a.createElement("div",{className:"col border s3"},f)))),n.a.createElement("div",null,g)},e}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,this.calculateResult())}}]),t}(l.Component),b=function(e){Object(i.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).componentDidMount=function(){u.a.AutoInit()},e.handleSubmit=function(a){a.preventDefault(),e.setState({showResult:!0})},e.handleChange=function(a){var t;e.setState((t={},Object(c.a)(t,a.target.name,parseFloat(a.target.value)),Object(c.a)(t,"showResult",!1),t))},e.handleRadio=function(a){e.setState({mateWater:a.target.value,showResult:!1})},e.state={amount:4e4,days:6,mateWater:"true",minLength:12,maxLength:17,minWidth:12,maxWidth:17,minHeight:.1,maxHeight:.18,showResult:!1},e}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"akki"},n.a.createElement("div",{className:"row section container"},n.a.createElement("form",{className:"col s12",onSubmit:this.handleSubmit},n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{placeholder:"Amount",id:"amount",name:"amount",type:"number",value:this.state.amount,onChange:this.handleChange,className:"validate"}),n.a.createElement("label",{className:"active",htmlFor:"amount"},"Amount")),n.a.createElement("div",{className:"col left s9"},n.a.createElement("h6",null,"Weather to Calculate Mate/Water")),n.a.createElement("div",{className:"input-field col s3"},n.a.createElement("span",null,n.a.createElement("label",null,n.a.createElement("input",{name:"group1",className:"with-gap",type:"radio",value:!0,onChange:this.handleRadio,checked:"true"===this.state.mateWater}),n.a.createElement("span",null,"Yes"))),n.a.createElement("span",null,n.a.createElement("label",null,n.a.createElement("input",{name:"group1",className:"with-gap",type:"radio",value:!1,onChange:this.handleRadio,checked:"false"===this.state.mateWater}),n.a.createElement("span",null,"No")))),"true"===this.state.mateWater?n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{placeholder:"No of Days",id:"days",name:"days",type:"number",value:this.state.days,onChange:this.handleChange,className:"validate",min:1}),n.a.createElement("label",{className:"active",htmlFor:"days"},"No of Days")):null,n.a.createElement("div",{className:"minmaxContainer"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col left s12"},n.a.createElement("h5",null,"Enter Limit")),n.a.createElement("div",{className:"col s4"},"Length"),n.a.createElement("div",{className:"col s4"},"Width"),n.a.createElement("div",{className:"col s4"},"Height")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4"},n.a.createElement("input",{placeholder:"Min Length",id:"minLength",name:"minLength",type:"number",value:this.state.minLength,onChange:this.handleChange,className:"validate"}),n.a.createElement("label",{className:"active",htmlFor:"days"},"Min Length")),n.a.createElement("div",{className:"col s4"},n.a.createElement("input",{placeholder:"Min Width",id:"minWidth",name:"minWidth",type:"number",value:this.state.minWidth,onChange:this.handleChange,className:"validate"}),n.a.createElement("label",{className:"active",htmlFor:"days"},"Min Width")),n.a.createElement("div",{className:"col s4"},n.a.createElement("input",{placeholder:"Min Height",id:"minHeight",name:"minHeight",type:"number",value:this.state.minHeight,onChange:this.handleChange,className:"validate"}),n.a.createElement("label",{className:"active",htmlFor:"days"},"Min Height"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4"},n.a.createElement("input",{placeholder:"Max Length",id:"maxLength",name:"maxLength",type:"number",value:this.state.maxLength,onChange:this.handleChange,className:"validate"}),n.a.createElement("label",{className:"active",htmlFor:"days"},"Max Length")),n.a.createElement("div",{className:"col s4"},n.a.createElement("input",{placeholder:"Max Width",id:"maxWidth",name:"maxWidth",type:"number",value:this.state.maxWidth,onChange:this.handleChange,className:"validate"}),n.a.createElement("label",{className:"active",htmlFor:"days"},"Max Width")),n.a.createElement("div",{className:"col s4"},n.a.createElement("input",{placeholder:"Max Height",id:"maxHeight",name:"maxHeight",type:"number",value:this.state.maxHeight,onChange:this.handleChange,className:"validate"}),n.a.createElement("label",{className:"active",htmlFor:"days"},"Max Height")))),n.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"action"},"Calculate",n.a.createElement("i",{className:"material-icons right"},"send")))),this.state.showResult&&n.a.createElement("div",{className:"row section"},n.a.createElement(N,{rawData:this.state})))}}]),t}(l.Component);function p(){return n.a.createElement("nav",null,n.a.createElement("div",{class:"nav-wrapper teal"},n.a.createElement("a",{href:"#",class:"brand-logo center"},"Akki")))}var w=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(p,null),n.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.708a2431.chunk.js.map