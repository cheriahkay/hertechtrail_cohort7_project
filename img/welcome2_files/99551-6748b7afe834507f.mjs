"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[99551],{521262:(e,t,i)=>{i.d(t,{ZP:()=>l,m_:()=>a});var n=i(40660),r=i(78309);function a(e,t,i,n){let a=new URLSearchParams;return a.append(r.NR.SOURCE_EVENT_ID,e),a.append(r.NR.DESTINATION,function(e){let t;try{t=decodeURIComponent(e)}catch(i){t=e}return t.startsWith("http")||(t="https://"+t),new URL(t).origin}(t)||""),a.append(r.NR.EXPIRY,i?r.uV:r.ug),a.append(r.NR.PRIORITY,i?r.NR.CLICK_PRIORITY:r.NR.VIEW_PRIORITY),n&&a.append(r.NR.CAMPAIGN_ID,n),a.append(r.NR.SOURCE_EVENT_TYPE,i?r.bC:r.Cu),"/attribution_source/?"+a.toString()}async function l(e,t,i,r,l,o){if(["Pin","pinImpressions"].includes(e)&&t&&i&&r){n.Z.increment("webapp.arapi.view.funnel",.1,{status:"start",appType:o});try{var s;if(!(null!==(s=window.document.featurePolicy)&&void 0!==s&&s.allowsFeature("attribution-reporting"))){n.Z.increment("webapp.arapi.view.funnel",.1,{status:"skipped",message:"attribution-reporting is not enabled",appType:o});return}let e=a(i,r||"",!1,l),t=await window.fetch(e,{keepalive:!0,attributionReporting:{eventSourceEligible:!0,triggerEligible:!1}});if(!t.ok)throw Error("server request failed.");n.Z.increment("webapp.arapi.view.funnel",.1,{status:"success",appType:o})}catch(e){n.Z.increment("webapp.arapi.view.funnel",.1,{status:"failed",error:e.name,appType:o})}}else n.Z.increment("webapp.arapi.view.funnel",.1,{status:"missing_param",appType:o})}},354428:(e,t,i)=>{i.d(t,{Se:()=>b,iw:()=>k,gV:()=>h,G3:()=>v,Gj:()=>f,Jd:()=>m,$3:()=>g});var n=i(965533),r=i(457628),a=i(791045),l=i(970588),o=i(250307);let s=e=>"string"!=typeof e&&e?e.state:null;var d=i(845098),u=i(48040),c=i(957733),p=i(625168),_=i(795142);let m=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()},h=({isOffsiteUrl:e,event:t})=>!e&&(t.metaKey||t.ctrlKey),g=({location:e,pinId:t,surface:i})=>!!i&&!_.ZF.includes(i)||e.pathname.includes(t),b=(e,t)=>{var i,n;let l=Math.round(1e3*Math.random())+"",o=Math.round(1e3*Math.random())+"";r.t8((0,a.GS)(l),o);let s={token:`${l}-${o}`,url:e,...t&&!t.params?t.queryParams:{pin:null!==(i=null==t?void 0:t.params.pinId)&&void 0!==i?i:void 0,csr:null!=t&&t.params.csrId&&!(null!==(n=t.params)&&void 0!==n&&n.pinId)?t.params.csrId:void 0,client_tracking_params:null==t?void 0:t.params.clientTrackingParams,aux_data:null!=t&&t.params.auxData?JSON.stringify(t.params.auxData):void 0}};return`/offsite/?${(0,d.Z)(s)}`},f=(e,t)=>{(0,n.Z)(b(e,t),!0)},k=async({clientTrackingParams:e,href:t,isMounted:i,pinId:n,spamCheckCallback:r})=>{let a=await (0,l.Z)({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:e,pin_id:n,url:t}});if(!a.resource_response.error&&i){let e=a.resource_response.data||{},{message:t,redirect_status:i,url:n}=e,l=["blocked","suspicious","porn"].includes(i);r({blocked:l,message:t,redirectStatus:i,sanitized_url:n})}},v=({event:e,onHistoryChange:t,href:i,history:r,target:a})=>{let l=(0,o.Z)(i),d=s(i),_=(0,u.Z)(l);_===p.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===a?(0,n.Z)(l,"blank"===a):r&&_===p.Z.SAME_ORIGIN&&(r.push((0,c.Z)({url:l}),null!=d?d:{}),t&&t({event:e}))}},599551:(e,t,i)=>{i.d(t,{Z:()=>p,p:()=>_});var n=i(667294),r=i(216317),a=i(946618),l=i(354428),o=i(300657),s=i(250307),d=i(28630),u=i(554318),c=i(935340);function p(e){var t,i,p;let{externalData:_,href:m,onHistoryChange:h,target:g}=e,[b,f]=(0,n.useState)(null),[k,v]=(0,n.useState)(!1),w=(0,r.useHistory)(),I=(0,r.useLocation)(),P=(0,s.Z)(m),S=(0,d.Z)({url:P}),{showWarning:y}=null!==(t=(0,u.s)())&&void 0!==t?t:{},{pin:A,surface:x}=_||{},R=A?(0,a.Z)({boardUrl:null===(i=A.board)||void 0===i?void 0:i.url,location:I,pinId:A.entityId,pinnerUserName:null===(p=A.pinner)||void 0===p?void 0:p.username,storyPinDataId:A.storyPinDataId,trackingParams:A.trackingParams,trackingParamsMap:A.trackingParamsMap}):null,Z=(0,o.Z)();return(0,n.useEffect)(()=>(v(!0),()=>{v(!1)}),[]),(0,n.useEffect)(()=>{S&&A&&null===b&&k&&(!A.promoter||A.isDownstreamPromotion)&&(0,l.$3)({location:I,pinId:A.entityId,surface:x})&&(0,l.iw)({clientTrackingParams:R,isMounted:k,pinId:A.entityId,spamCheckCallback:e=>f(e),href:P})},[R,A,x,P,S,k,I,b]),({event:e})=>{if(!(0,l.gV)({isOffsiteUrl:S,event:e})){if(e.preventDefault(),!m||"string"==typeof m&&m.startsWith("#")){(0,c.nP)("link_navigation_empty_href",{sampleRate:1,tags:{route:I.pathname}});return}if(S||null!=_&&_.dangerouslyForceOffsiteUrl){var t;Z({auxData:null==_?void 0:_.auxData,clientTrackingParams:R,pin:(null==_?void 0:_.pin)&&{attributionSourceId:_.pin.attributionSourceId,campaignId:_.pin.campaignId,isPromoted:_.pin.isPromoted,pinPromotionId:_.pin.pinPromotionId},pinId:null==_||null===(t=_.pin)||void 0===t?void 0:t.entityId,queryParams:null==_?void 0:_.queryParams,showWarning:y,spamCheck:b,url:P})}else(0,l.G3)({event:e,href:m,history:w,onHistoryChange:h,target:"blank"===g?"blank":null})}}}let _=({children:e,...t})=>{let i=p(t);return e({handleClick:i})}},300657:(e,t,i)=>{i.d(t,{Z:()=>_,t:()=>p});var n=i(758579),r=i(78309),a=i(521262),l=i(969327),o=i(388011),s=i(354428),d=i(204926);let u=(e,t,i)=>{let n=document.createElement("a");n.setAttribute("href",t),n.setAttribute("target","_blank"),n.setAttribute("rel","noopener nofollow noreferrer"),n.style.cursor="pointer",n.style.display="block",n.setAttribute(r.$N.ATTRIBUTION_SOURCE_ID,e),n.setAttribute(r.$N.ATTRIBUTE_DESTINATION,i),n.setAttribute(r.$N.ATTRIBUTE_ON,i),n.click()},c=(e,t,i,n)=>{let l=(0,a.m_)(e,i,!0,n),o=document.createElement("a");o.setAttribute("href",t),o.setAttribute("target","_blank"),o.setAttribute("rel","noopener nofollow noreferrer"),o.style.cursor="pointer",o.style.display="block",o.setAttribute(r.NR.SOURCE,l),o.click()},p=()=>{let{logContextEvent:e}=(0,o.v)();return({attributionSourceId:t,auxData:i,campaignId:r,clientTrackingParams:a,href:o,isPromoted:d,pinId:p,pinPromotionId:_})=>{var m,h,g,b,f;if(!d)return!1;let k=(0,n.Z)(),v=(0,s.Se)(o,{params:{pinId:p,csrId:null,clientTrackingParams:a,auxData:i}}),w=null!==(m=null==k?void 0:k.userAgent.browserName)&&void 0!==m?m:"";if((0,l.G6)(w)){let{group:i}=null!==(h=null==k?void 0:k.experimentsClient.checkExperiment("m10n_event_conversion_measurement"))&&void 0!==h?h:{},n=null!=k&&null!==(g=k.userAgent)&&void 0!==g&&g.browserVersion?k.userAgent.browserVersion:"0.0",l=parseFloat(n.split(".")[0]+"."+n.split(".")[1]);if(t&&l>=14.1&&["enabled_safari"].includes(i))return u(t,v,o),e({event_type:101,clientTrackingParams:a,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:_||"",click_measurement_campaign_id:r||"",is_pcm:!0,attribution_source_id:t,page_url:o}}),!0}else if((0,l.i7)(w)){let{group:i}=null!==(b=null==k?void 0:k.experimentsClient.checkExperiment("m10n_event_conversion_measurement_chrome"))&&void 0!==b?b:{},n=null!=k&&null!==(f=k.userAgent)&&void 0!==f&&f.browserVersion?parseInt(k.userAgent.browserVersion.split(".")[0],10):0;if(void 0!==t&&n>=101&&["enabled"].includes(i)){let i=null!=t?t:"0";return c(i,v,o,r),e({event_type:101,clientTrackingParams:a,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:_||"",click_measurement_campaign_id:r||"",is_arapi:!0,attribution_source_id:i,page_url:o}}),!0}}return!1}},_=e=>{let t=p();return({auxData:i,clientTrackingParams:n,pin:r,pinId:a,queryParams:l,showWarning:o,spamCheck:u,url:c})=>{if("undefined"!=typeof window&&window.Windows){(0,d.Z)(c,{clientTrackingParams:n,pinId:a,hasPin:!!r,auxData:i});return}if(!r&&!(null!=e&&e.isFromClickthroughLink)){(0,s.Gj)(c,l?{queryParams:l}:{params:{pinId:a}});return}if(null!=u&&u.blocked){null==o||o(u);return}r&&t({attributionSourceId:r.attributionSourceId,auxData:i,campaignId:r.campaignId?String(r.campaignId):null,clientTrackingParams:n,href:c,isPromoted:r.isPromoted,pinId:a,pinPromotionId:r.pinPromotionId?String(r.pinPromotionId):null})||(0,s.Gj)(c,{params:{pinId:a,clientTrackingParams:n,auxData:i}})}}},250307:(e,t,i)=>{i.d(t,{Z:()=>n});let n=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},957733:(e,t,i)=>{i.d(t,{Z:()=>a});let n=(e,t)=>0===e.lastIndexOf(t,0);var r=i(17330);let a=({url:e})=>{let t=(0,r.Z)("/");return n(e,t)?e.substr(t.length-1):e}},204926:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(970588),r=i(354428);function a(e,t){let{auxData:i,clientTrackingParams:a,hasPin:l,pinId:o}=t||{};(0,n.Z)({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:l?a:void 0,pin_id:o,url:e,aux_data:JSON.stringify(i)}}).then(t=>{if(t&&t.resource_response&&!t.resource_response.error){let{resource_response:e}=t,{redirect_status:i,url:n}=e.data,r=["blocked","suspicious","porn"].includes(i);if(!r){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){let e=new window.Windows.Foundation.Uri(n);window.Windows.System.Launcher.launchUriAsync(e)}return}}(0,r.Gj)(e,{params:l?{pinId:o,clientTrackingParams:a,auxData:i}:{pinId:o}})})}},795142:(e,t,i)=>{i.d(t,{UP:()=>o,Wv:()=>r,ZF:()=>n,zI:()=>a,zl:()=>l});let n=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],r=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","RelatedProductsFeed","UserProfilePinGrid","ShoppingGridShippedMetadataWithVisitButton"],a=[...r,"ShoppingGridShippedMetadata","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ProductPinsFeed","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid"],l=["ShoppingSquareGridDomain","ShoppingGridShippedMetadata","ShoppingSquareGridStorefront","ShoppingSquareGridStorefrontDomain","ShoppingGridShippedMetadataWithVisitButton"],o=["BaseBoardPinGrid"]},554318:(e,t,i)=>{i.d(t,{Z:()=>g,s:()=>h});var n=i(667294),r=i(583592),a=i(608575),l=i(883119),o=i(88622),s=i(536042),d=i(630089),u=i(785893);let c=()=>{var e;let t=(0,s.ZP)(),{dismissWarning:i}=null!==(e=h())&&void 0!==e?e:{};return(0,u.jsx)(l.xu,{paddingX:3,children:(0,u.jsx)(l.zx,{fullWidth:!0,color:"red",onClick:i,text:t._('Okay', 'Dismiss a modal stating that clicking through to a link has been blocked', 'Dismiss a modal stating that clicking through to a link has been blocked')})})},p=()=>{let e=(0,s.ZP)();return(0,u.jsx)(l.xv,{inline:!0,weight:"bold",children:(0,u.jsx)(l.rU,{target:"blank",href:"https://policy.pinterest.com/community-guidelines#section-spam",display:"inlineBlock",underline:"hover",children:e._('Learn more', 'Link text leading to policy website', 'Link text leading to policy website')})})},_=({message:e,sanitized_url:t})=>{var i;let n=(0,s.ZP)(),{dismissWarning:r}=null!==(i=h())&&void 0!==i?i:{};return(0,u.jsx)(o.ZP,{accessibilityModalLabel:n._('We have blocked this link', 'Modal label when clicking a spammy link', 'Modal label when clicking a spammy link'),onDismiss:r,heading:n._('Heads up!', 'Modal heading when clicking through to a link has been blocked', 'Modal heading when clicking through to a link has been blocked'),footer:(0,u.jsx)(c,{}),children:(0,u.jsxs)(l.xu,{padding:6,children:[(0,u.jsx)(l.xv,{children:(0,d.nk)("{{ message }} {{ learnMore }}",{message:e,learnMore:(0,u.jsx)(p,{},"learnMoreLink")})}),(0,u.jsxs)(l.xu,{alignItems:"center",display:"flex",marginTop:4,children:[(0,u.jsx)(l.xu,{marginEnd:3,children:(0,u.jsx)(l.JO,{accessibilityLabel:n._('Blocked link address', 'Icon label preceding a block url', 'Icon label preceding a block url'),color:"error",icon:"report",inline:!0,size:24})}),(0,u.jsx)(l.xv,{inline:!0,lineClamp:1,weight:"bold",children:a.parse(t).hostname})]})]})})},{Provider:m,useMaybeHook:h}=(0,r.Z)("SpammyClickthrough");function g({children:e}){let[t,i]=(0,n.useState)(null),r=(0,n.useCallback)(()=>{i(null)},[i]),a=(0,n.useCallback)(e=>{i(e)},[i]),l=(0,n.useMemo)(()=>({dismissWarning:r,showWarning:a}),[r,a]);return(0,u.jsxs)(m,{value:l,children:[t&&(0,u.jsx)(_,{...t}),e]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/99551-6748b7afe834507f.mjs.map