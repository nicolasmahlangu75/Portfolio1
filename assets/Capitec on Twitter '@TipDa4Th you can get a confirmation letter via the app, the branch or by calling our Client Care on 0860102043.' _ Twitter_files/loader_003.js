(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{"A+RP":function(e,t,n){"use strict";n.r(t),n.d(t,"UPDATE_INTERVAL",(function(){return N})),n.d(t,"ExploreSidebar",(function(){return Q}));n("kYxP");var r=n("KEM+"),s=n.n(r),o=n("ERkP"),i=n("v6aA"),a=n("FIs5"),c=(n("IAdD"),n("ezF+")),d=n("8UdT"),l=n("iu0J"),h=n("3XMw"),p=n.n(h),m=n("caTy"),u=n("+Bsv"),b=n("MWbm"),w=n("Irs7"),f=n("hxu0"),T=n("6vad"),E=n("rC8y");const S=p.a.c5f4befa,_=p.a.d228a9a0;class g extends o.Component{constructor(e,t){super(e,t),s()(this,"_handleShowMoreInlineClick",()=>{const{onClick:e}=this.props;this.setState({showMoreTrends:!0}),e("show_more_inline")}),s()(this,"_handleShowMoreClick",()=>{const{onClick:e}=this.props;e("show_more")}),this.state={showMoreTrends:!1}}componentDidMount(){const{trends:e,analytics:t}=this.props;e&&e.length>0&&t.scribe({action:"impression",component:"explore_sidebar"})}canShowMoreTrends(){const{trends:e}=this.props;return!this.state.showMoreTrends&&e.length>5}render(){const{footer:e,headerTitle:t,isInSidebar:n}=this.props,r=o.createElement(u.a,{to:"/settings/trends"});return o.createElement(b.a,null,o.createElement(T.b,{rightControl:r,text:t||S}),this._renderTrends(),this.canShowMoreTrends()?o.createElement(E.a,{onPress:this._handleShowMoreInlineClick,text:_,withBottomRadius:!0,withDarkerInteractiveBackground:n}):!!e&&o.createElement(E.a,{link:e.landingUrl?Object(m.b)(e.landingUrl):void 0,onPress:this._handleShowMoreClick,text:e.text,withBottomRadius:!0,withDarkerInteractiveBackground:n}))}_renderTrends(){const{trends:e}=this.props,{showMoreTrends:t}=this.state;return(t?e:e.slice(0,5)).map(e=>o.createElement(o.Fragment,{key:e.key},e.item))}}var y=Object(w.a)(Object(f.a)(g)),k=n("+o05"),v=n("zh9S"),M=n("5Y9N"),x=n("XtkE"),I=n("xN10"),C=n("VPAj");const O={[d.b.TimelineCursor]:c.d(c.a()),[d.b.Label]:c.d(c.a()),[d.b.Message]:c.d(c.a()),[d.b.News]:c.d(c.a()),[d.b.Trend]:Object(x.a)({withThirdPartyCards:!1,errorContext:"EXPLORE_SIDEBAR"}),[d.b.EventSummary]:Object(l.a)({errorContext:"EXPLORE_SIDEBAR"}),[d.b.ScoreEventSummary]:k.a},j={TrendsModule:c.f({bindActions:()=>({scribeAction:v.c}),component:y,createProps:({entry:e,renderEntry:t,scribeNamespace:n,actions:{scribeAction:r}})=>{const{footer:s,header:o,items:i}=e.content;return{footer:s,headerTitle:o&&o.text,onClick:e=>{r(Object.assign({},n,{element:e,action:"click"}))},trends:i.map(e=>({item:t(e),key:e.entryId}))}},shouldDisplayBorder:Object(C.a)(!1)})};var A=Object.assign({},Object(M.a)({customHandlers:j,customSelectDisplayType:e=>(e=>{const{content:{items:t}}=e;return t.length>0&&Object(I.a)(t,e=>e.type===d.b.Trend)})(e)?"TrendsModule":e.content.displayType,isInSidebar:!0}),O),R=n("oQhu"),D=n("fTQJ"),P=n("b8qQ"),U=n("2g+p"),B=n("BxsD");const F=p.a.b8e930fd,L=p.a.ae05f268,N=3e5,J=()=>o.createElement(a.a,{message:L}),X=Object(R.a)((e,t)=>Object(B.c)({featureSwitches:t,displayLocation:B.a.WebSidebar,profileUserId:e}));class Q extends o.Component{constructor(...e){super(...e),s()(this,"_setTimelineRef",e=>{this._timeline=e}),s()(this,"_onAppForegrounded",e=>{"active"===e&&this._fetchUpdates()}),s()(this,"_fetchUpdates",()=>{this._timeline&&"active"===U.a.currentState&&this._timeline.fetchTop({})})}componentDidMount(){U.a.addEventListener("change",this._onAppForegrounded)}componentWillUnmount(){U.a.removeEventListener("change",this._onAppForegrounded)}render(){const e=this.props.profileUserId?X(this.props.profileUserId,this.context.featureSwitches):Object(B.f)(this.context.featureSwitches);return o.createElement(b.a,null,o.createElement(D.a,{entryConfiguration:A,module:e,pollingIntervalMsOverride:N,renderUnavailable:J,scroller:P.a,showFooter:!1,timelineRef:this._setTimelineRef,title:F,withInstreamVideo:!1,withKeyboardShortcuts:!1}))}}s()(Q,"contextType",i.a);t.default=Q}}]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ExploreSidebar.e34ef325.js.map