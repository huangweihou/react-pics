(this["webpackJsonpreact-pics"]=this["webpackJsonpreact-pics"]||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),c=a.n(i),s=a(6),o=a.n(s),u=a(17),m=a(2),l=a(3),p=a(5),h=a(4),f=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term)},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("input",{type:"text",onChange:this.onInputChange,value:this.state.term})),r.a.createElement("div",null,this.state.term))}}]),a}(r.a.Component),v=a(18),b=a.n(v).a.create({baseURL:" https://api.unsplash.com",headers:{Authorization:"Client-ID vaEVAcM2Q1CRzPmDjHmjUzfoyjoUvaVH4nzQa1hwm9o"}}),g=(a(42),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).setSpans=function(){var e=n.imageRef.current.clientHeight;n.setState({spans:Math.ceil(e/1)})},n.imageRef=r.a.createRef(),n.state={spans:0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls;return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},r.a.createElement("img",{ref:this.imageRef,src:a.regular,description:t}))}}]),a}(r.a.Component)),d=function(e){var t=e.images.map((function(e){return r.a.createElement(g,{image:e,key:e.id})}));return r.a.createElement("div",{className:"image-list"},t)},j=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={images:[]},e.onSearchBarSubmit=function(){var t=Object(u.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.get("/search/photos",{params:{query:a}});case 2:n=t.sent,e.setState({images:n.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{onSubmit:this.onSearchBarSubmit}),r.a.createElement(d,{images:this.state.images}))}}]),a}(r.a.Component);c.a.render(r.a.createElement(j,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.c0ae1f09.chunk.js.map