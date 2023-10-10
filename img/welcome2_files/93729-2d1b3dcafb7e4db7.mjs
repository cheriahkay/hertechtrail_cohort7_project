"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[93729],{17314:(e,t,i)=>{i.d(t,{Z:()=>d});var r,s,n=i(813653),o=i(861470),a=0,u=0;let d=function(e,t,i){var d=t&&i||0,c=t||Array(16),p=(e=e||{}).node||r,l=void 0!==e.clockseq?e.clockseq:s;if(null==p||null==l){var h=e.random||(e.rng||n.Z)();null==p&&(p=r=[1|h[0],h[1],h[2],h[3],h[4],h[5]]),null==l&&(l=s=(h[6]<<8|h[7])&16383)}var m=void 0!==e.msecs?e.msecs:Date.now(),_=void 0!==e.nsecs?e.nsecs:u+1,g=m-a+(_-u)/1e4;if(g<0&&void 0===e.clockseq&&(l=l+1&16383),(g<0||m>a)&&void 0===e.nsecs&&(_=0),_>=1e4)throw Error("uuid.v1(): Can't create more than 10M uuids/sec");a=m,u=_,s=l;var f=((268435455&(m+=122192928e5))*1e4+_)%4294967296;c[d++]=f>>>24&255,c[d++]=f>>>16&255,c[d++]=f>>>8&255,c[d++]=255&f;var v=m/4294967296*1e4&268435455;c[d++]=v>>>8&255,c[d++]=255&v,c[d++]=v>>>24&15|16,c[d++]=v>>>16&255,c[d++]=l>>>8|128,c[d++]=255&l;for(var w=0;w<6;++w)c[d+w]=p[w];return t||(0,o.Z)(c)}},946618:(e,t,i)=>{i.d(t,{Z:()=>u});var r=i(739425);let s=/\/today\/(article|best|trending)\/[\w-]+\/(\d+)/,n=(e,t)=>t?e.substring(t.length).split("/")[0]:e,o=({boardUrl:e,path:t,pinId:i,pinnerUserName:o,query:a,search:u,storyPinDataId:d})=>{var c;if(!t)return"";let p="";switch(t){case"/":case"/homefeed/":return"UserHomefeedResource";case o&&`/${o}/pins/`:return"UserPinsResource";case o&&`/${o}/`:case/\/_activity\//.test(t)&&t:return"UserActivityPinsResource";case/\/_created\//.test(t)&&t:return d?"UserStoryPinsFeedResource":"UserActivityPinsResource";case/\/_community\//.test(t)&&t:return"UserDiscoveredPinsResource";case/\/_shop\//.test(t)&&t:return"StoreFrontFeedResource";case/\/_saved\//.test(t)&&t:return"BoardlessPinsResource";case o&&`/${o}/_shopping_list/`:return"ShoppingListFeedResource";case/\/visual-search\//.test(t)&&t:return"VisualLiveSearchResource";case/\/pin\//.test(t)&&t:p="/pin/";let l=n(t,p);if(i!==l)return`RelatedPinFeedResource_${l}`;break;case/\/search\//.test(t)&&t:if(u){let e=(0,r.mB)(u,{shouldDecode:!1}).q||"";return`SearchResource_${e.toLowerCase()}`}if(a)return`SearchResource_${encodeURIComponent(a.q||"").toLowerCase()}`;break;case/\/categories\//.test(t)&&t:p="/categories/";let h=n(t,p);return`CategoryFeedResource_${h}`;case/\/discover\/topics\//.test(t)&&t:return"CategoryFeedResource";case/\/news_hub\//.test(t)&&t:p="/news_hub/";let m=n(t,p);return`NewsHubDetailsResource_${m}`;case/\/_tools\/more-ideas\//.test(t)&&t:return"BoardContentRecommendationResource";case/\/topics\//.test(t)&&t:p="/topics/";let _=n(t,p);return`TopicFeedResource_${_}`;case o&&`/${o}/products/`:return"StoreFrontFeedResource";case/\/source\//.test(t)&&t:p="/source/";let g=n(t,p);return`DomainFeedResource_${g}`;case/\/explore\//.test(t)&&t:p="/explore/";let f=n(t,p);return`SearchResource_${f}`;case e:case!!e&&/\/more_ideas\//.test(t)&&t:return"BoardFeedResource";case e&&t.indexOf(e)>-1&&t:return"BoardSectionPinsResource";case/\/following\//.test(t)&&t:return"FollowingFeedResource";case/\/brand_catalog\//.test(t)&&t:return"BrandCatalogFeedResource";case s.test(t)&&t:let v=(null===(c=t.match(s))||void 0===c?void 0:c[2])||"unknown";return`TodayArticleFeedResource_${v}`;case/\/today\//.test(t):return"TodayTabResource";case/\story_feed\//.test(t)&&t:if(u){let{feed_type:e,request_params:t}=(0,r.mB)(u);return`StoryFeedResource_${e}_${t}`}}return""},a=e=>{let t=null==e?void 0:e.pathname;return t?(t.match(/\/search\//)&&null!=e&&e.search&&(t+=e.search),t.toLowerCase()):""},u=({boardUrl:e,location:t,pinId:i,pinnerUserName:r,previousHistory:s,storyPinDataId:n,trackingParams:u,trackingParamsMap:d={}})=>{let c,p;if(!i||!u||!t)return;if(!d)return`${null!=u?u:""}~0`;let{pathname:l,search:h,query:m}=t,_=o({boardUrl:e,path:l,pinId:i,pinnerUserName:r,query:m,search:h,storyPinDataId:n,trackingParams:u,trackingParamsMap:d}),g=Object.keys(d),f=(l||"").startsWith("/pin/");if(f){let e=g.find(e=>"PinResource"!==e);c=e?d[e]:d.PinResource}else c=d[_];if(!c&&s&&s.length){let t=a(s[s.length-1].location);p=o({boardUrl:e,path:t,pinId:i,pinnerUserName:r,query:m,search:h,storyPinDataId:n,trackingParams:u,trackingParamsMap:d}),c=d[p]}return c||(c=`${u||""}~0`),c}},348448:(e,t,i)=>{i.d(t,{w:()=>h});var r=i(40660),s=i(946618),n=i(291986),o=i(911386);function a(e,t,i){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let u=null,d={ACTIVE:"ACTIVE",PAUSED:"PAUSED"},c=()=>window&&window.performance&&window.performance.now?`(Time: ${(window.performance.now()/1e3).toFixed(3)}s)`:"",p=e=>{let t=!1;return(...i)=>{t||(t=!0,e(...i))}},l={};function h({contextLogger:e,shouldExtractTrackingParams:t}){if(u)return u;let i=(i,r,n)=>{if(t&&n&&i){let e;let{pair_id:t,event_type:d}=i;if(4703===d&&t&&l[t])i.clientTrackingParams=l[t];else{var o,a,u;let c=i.object_id_str,p=c?n[c]:null,h=null==r||null===(o=r.current)||void 0===o?void 0:o.location,m=null==r?void 0:r.previous;p&&h&&(e=(0,s.Z)({boardUrl:null===(a=p.board)||void 0===a?void 0:a.url,location:h,pinId:p.id,pinnerUserName:null===(u=p.pinner)||void 0===u?void 0:u.username,previousHistory:m,storyPinDataId:p.story_pin_data_id,trackingParams:p.tracking_params,trackingParamsMap:p.tracking_params_map})||`${p.tracking_params||""}~0`,i.clientTrackingParams=e,4702===d&&t&&(l[t]=e))}}e.logContextEvent(i)},h=new Map,m=(0,o.Z)()&&(0,o.Z)().debug_timespent,_=m?console:{error:(...e)=>{},log:(...e)=>{},group:(...e)=>{},groupEnd:(...e)=>{}};return console.group||(_.group=(...e)=>console.log(...e),_.groupEnd=(...e)=>{}),u=new class{constructor(){a(this,"appTimedPair",null),a(this,"clickthroughProperties",null),a(this,"historyStackContext",null),a(this,"offsiteTimedPair",null),a(this,"offsiteTimedPairForegroundId",null),a(this,"pins",Object.freeze({})),a(this,"addEventListeners",()=>{let e,t;"undefined"!==document.hidden?(e="hidden",t="visibilitychange"):"undefined"!==document.msHidden?(e="msHidden",t="msvisibilitychange"):"undefined"!==document.webkitHidden&&(e="webkitHidden",t="webkitvisibilitychange"),t&&document.addEventListener(t,t=>{document[e]?this.unregisterApp(!1,void 0,t):document.hasFocus()&&this.registerApp()},!1),window.addEventListener("focus",this.registerApp),window.addEventListener("blur",e=>this.unregisterApp(!1,void 0,e));let i=p(e=>this.unregisterApp(!0,void 0,e));window.addEventListener("beforeunload",i),window.addEventListener("pagehide",i);let s=navigator&&navigator.userAgent.toLowerCase();s&&s.includes("macintosh")&&s.includes("chrome")&&window.addEventListener("popstate",t=>{document.hasFocus()||document[e]||r.Z.increment("chrome_mac_back_forward_button",1)})}),a(this,"storeClickthroughProperties",e=>{this.clickthroughProperties&&r.Z.increment("webapp.metrics.clickthroughs.overwritten",1,{previousView:this.clickthroughProperties.view_type,previousViewParameter:this.clickthroughProperties.view_parameter,nextView:e.view_type,nextViewParameter:e.view_parameter}),this.clickthroughProperties=e}),a(this,"clearClickthroughProperties",()=>{this.clickthroughProperties=null,this.offsiteTimedPair=null,this.offsiteTimedPairForegroundId=null}),a(this,"registerApp",()=>{_.group("App Foreground",c()),null==this.appTimedPair?(this.appTimedPair=new n.Z,this.appTimedPair.start(),this._unpauseAllComponents(),this._endOffsiteTimedPair(),null!==this.appTimedPair&&void 0!==this.appTimedPair&&i({event_type:4700,pair_id:this.appTimedPair.uuid},this.historyStackContext,this.pins)):_.error("TimedPair already exists for app."),_.groupEnd()}),a(this,"unregisterApp",(t=!1,r=!1,s)=>{_.group("App Background",c());let{appTimedPair:n}=this;if(null!=n){this._pauseAllComponents();let e=n.end();this._startOffsiteTimedPair(),i({event_type:4701,duration_ns:e,pair_id:n.uuid},this.historyStackContext,this.pins),this.appTimedPair=null}else _.error("No TimedPair found for app.");let o=["beforeunload","pagehide"],a=o.includes(null==s?void 0:s.type),u=o.includes(null==s?void 0:s.pauseReason);(a||u)&&this._endOffsiteTimedPair(),r||e.flushContextEvents(null!=t&&t),_.groupEnd()}),a(this,"_activateComponent",e=>{_.group("Activating component",c()),m&&_.log(e.getContext());let t=e.getTimedPair();if(t){t.start();let{view:r,viewParameter:s,component:n,element:o,objectId:a,clientTrackingParams:u}=e.getLoggerContext();i({event_type:4702,view_type:r,view_parameter:s,component:n,element:o,object_id_str:a,view_data:e.props.viewData,pair_id:t.uuid,clientTrackingParams:u,aux_data:{time_spent_foreground_pairid:this.appTimedPair&&this.appTimedPair.uuid,time_spent_parent_pairid:e.getParentId(),...e.props.auxData}},this.historyStackContext,this.pins)}_.groupEnd()}),a(this,"_deactivateComponent",e=>{_.group("Deactivating component",c()),m&&_.log(e.getContext());let t=e.getTimedPair();if(t){let{view:r,viewParameter:s,component:n,element:o,objectId:a,clientTrackingParams:u}=t,d=t.end();i({event_type:4703,view_type:r,view_parameter:s,component:n,element:o,object_id_str:a,view_data:e.props.viewData,duration_ns:d,pair_id:t.uuid,clientTrackingParams:u,aux_data:{time_spent_foreground_pairid:this.appTimedPair&&this.appTimedPair.uuid,time_spent_parent_pairid:e.getParentId(),...e.props.auxData}},this.historyStackContext,this.pins)}_.groupEnd()}),a(this,"_startOffsiteTimedPair",()=>{let{clickthroughProperties:e}=this;e&&(this.offsiteTimedPair=new n.Z({...e,view:186,viewParameter:e.view_parameter,objectId:e.object_id_str}),this.offsiteTimedPair.start(),this.offsiteTimedPairForegroundId=this.appTimedPair?this.appTimedPair.uuid:null,i({...e,event_type:4702,view_type:186,pair_id:this.offsiteTimedPair?this.offsiteTimedPair.uuid:null,aux_data:{...e.aux_data,time_spent_foreground_pairid:this.offsiteTimedPairForegroundId}},this.historyStackContext,this.pins))}),a(this,"_endOffsiteTimedPair",()=>{let{offsiteTimedPair:e,clickthroughProperties:t}=this;if(e&&t){let r=e.end();i({...t,event_type:4703,view_type:186,pair_id:this.offsiteTimedPair?this.offsiteTimedPair.uuid:null,aux_data:{...t.aux_data,time_spent_foreground_pairid:this.offsiteTimedPairForegroundId},duration_ns:r},this.historyStackContext,this.pins),this.clearClickthroughProperties()}}),a(this,"_pauseAllComponents",()=>{_.group("Pause all components"),h.forEach((e,t,i)=>{e===d.ACTIVE&&this._deactivateComponent(t),i.set(t,d.PAUSED)}),_.groupEnd()}),a(this,"_unpauseAllComponents",()=>{_.group("Unpause all components"),h.forEach((e,t)=>{t.setTimedPair(new n.Z(t.getLoggerContext()))}),h.forEach((e,t)=>{h.set(t,d.ACTIVE),this._activateComponent(t)}),_.groupEnd()})}setHistoryStackContext(e){this.historyStackContext=e}setPins(e){this.pins=e}registerComponent(e){null===this.appTimedPair?h.set(e,d.PAUSED):(h.set(e,d.ACTIVE),this._activateComponent(e))}unregisterComponent(e){let t=h.get(e);t===d.ACTIVE&&(this._deactivateComponent(e),e.setTimedPair(new n.Z(e.getLoggerContext()))),h.delete(e)}size(){return h.size}}}},393729:(e,t,i)=>{i.d(t,{j:()=>l,w:()=>p});var r=i(388011),s=i(583592),n=i(282802),o=i(348448),a=i(549201),u=i(272109),d=i(785893);let{Provider:c,useMaybeHook:p}=(0,s.Z)("TimeSpentManagerContext");function l({children:e}){let t=(0,r.v)(),i=(0,a.HG)(),{isAuthenticated:s}=(0,n.B)(),p=(0,o.w)({contextLogger:t,shouldExtractTrackingParams:i&&s});return(0,u.Z)(()=>{document.hasFocus()&&p.registerApp(),p.addEventListeners()}),(0,d.jsx)(c,{value:p,children:e})}},291986:(e,t,i)=>{i.d(t,{Z:()=>a});var r=i(172045),s=i(17314);function n(e,t,i){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let o="undefined"!=typeof window&&window.performance&&window.performance.now?()=>Math.floor(1e6*window.performance.now()):()=>1e6*Date.now(),a=class{constructor(e){n(this,"start",()=>(this.startTime=o(),this.startTime)),n(this,"end",()=>(this.endTime=o(),this.duration=this.startTime?this.endTime-this.startTime:null,this.duration));try{this.uuid=(0,r.Z)()}catch(e){this.uuid=(0,s.Z)()}e&&Object.assign(this,e)}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/93729-2d1b3dcafb7e4db7.mjs.map