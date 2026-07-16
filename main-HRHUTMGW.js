import{$ as wc,$a as Ee,$b as ce,A as Q,Aa as Sc,Ab as p,B as jr,Ba as Mi,Bb as _,C as Xa,Ca as Ec,Cb as le,D as Ct,Da as Nt,Db as ze,E as Si,Ea as An,Eb as Xe,F as En,Fa as Rn,Fb as lt,G as he,Ga as qr,Gb as jc,H as Za,Ha as In,Hb as Uc,I as Qa,Ia as Tn,Ib as nt,J as Qt,Ja as Mc,Jb as Vt,K as Se,Ka as Ac,Kb as ae,L as Ja,La as Rc,Lb as zc,M as es,Ma as Ic,Mb as E,N as bc,Na as Tc,Nb as J,O as yc,Oa as kc,Ob as A,P as Ei,Pa as Oc,Pb as Ze,Q as Ur,Qa as je,Qb as He,R as Ce,Ra as Fc,Rb as V,S as ie,Sa as Pc,Sb as j,T as q,Ta as h,Tb as Hc,U as zr,Ua as kn,Ub as $c,V as fe,Va as Nc,Vb as as,W as k,Wa as Yr,Wb as Dt,X as Jt,Xa as ts,Xb as _t,Y as Hr,Ya as ke,Yb as F,Z as v,Za as st,Zb as ct,_ as I,_a as Ue,_b as w,a as f,aa as g,ab as Ke,ac as Y,b as W,ba as S,bb as Kr,bc as Gc,c as Ka,ca as l,cb as et,cc as _e,d as ge,da as Re,db as Xr,dc as Wc,e as pc,ea as Cc,eb as Lc,ec as jt,f as xe,fa as Pe,fb as ns,fc as Ut,g as y,ga as Ve,gb as D,gc as qc,h as Fe,ha as Ie,hb as T,hc as Yc,i as Lr,ia as Te,ib as N,ic as Me,j as gc,ja as $r,jb as is,jc as it,k as Ge,ka as U,kb as ve,kc as Ri,l as vc,la as R,lb as vt,lc as Kc,m as ye,ma as mt,mb as Bc,mc as Ii,n as b,na as Dc,nb as rs,nc as Xc,o as We,oa as $,ob as nn,oc as ss,p as Br,pa as O,pb as Ai,pc as ue,q as _c,qa as en,qb as os,qc as Zc,r as C,ra as Gr,rb as Vc,rc as K,s as Dn,sa as se,sb as tt,sc as Ti,t as we,ta as xc,tb as re,tc as Qc,u as Vr,ua as Wr,ub as L,uc as Qr,v as xn,va as Mn,vb as B,w as Ft,wa as qe,wb as Zr,x as Sn,xa as Ye,xb as Lt,y as at,ya as P,yb as Bt,z as Pt,za as tn,zb as de}from"./chunk-O6K64VEK.js";var Jc=null;function xt(){return Jc}function ls(n){Jc??=n}var ki=class{},On=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:()=>l(ed),providedIn:"platform"})}return n})();var ed=(()=>{class n extends On{_location;_history;_doc=l(R);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return xt().getBaseHref(this._doc)}onPopState(e){let t=xt().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=xt().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function id(n,i){return n?i?n.endsWith("/")?i.startsWith("/")?n+i.slice(1):n+i:i.startsWith("/")?n+i:`${n}/${i}`:n:i}function td(n){let i=n.search(/#|\?|$/);return n[i-1]==="/"?n.slice(0,i-1)+n.slice(i):n}function zt(n){return n&&n[0]!=="?"?`?${n}`:n}var Jr=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:()=>l(dm),providedIn:"root"})}return n})(),cm=new g(""),dm=(()=>{class n extends Jr{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??l(R).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return id(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+zt(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,o){let a=this.prepareExternalUrl(r+zt(o));this._platformLocation.pushState(e,t,a)}replaceState(e,t,r,o){let a=this.prepareExternalUrl(r+zt(o));this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(S(On),S(cm,8))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ht=(()=>{class n{_subject=new y;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=fm(td(nd(t))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+zt(t))}normalize(e){return n.stripTrailingSlash(hm(this._basePath,nd(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+zt(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+zt(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=zt;static joinWithSlash=id;static stripTrailingSlash=td;static \u0275fac=function(t){return new(t||n)(S(Jr))};static \u0275prov=v({token:n,factory:()=>um(),providedIn:"root"})}return n})();function um(){return new Ht(S(Jr))}function hm(n,i){if(!n||!i.startsWith(n))return i;let e=i.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function nd(n){return n.replace(/\/index\.html$/,"")}function fm(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var cs=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=l(U);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,r):!1,get:(e,t,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,r)}})}static \u0275fac=function(t){return new(t||n)(Ke(et))};static \u0275dir=N({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[qe]})}return n})();var eo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=I({})}return n})();function Oi(n,i){i=encodeURIComponent(i);for(let e of n.split(";")){let t=e.indexOf("="),[r,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(r.trim()===i)return decodeURIComponent(o)}return null}var rn=class{};var ds="browser";function Fi(n){return n===ds}var Pi=class{_doc;constructor(i){this._doc=i}manager},to=(()=>{class n extends Pi{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,o){return e.addEventListener(t,r,o),()=>this.removeEventListener(e,t,r,o)}removeEventListener(e,t,r,o){return e.removeEventListener(t,r,o)}static \u0275fac=function(t){return new(t||n)(S(R))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),ro=new g(""),ms=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof to));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof to);o&&this._plugins.push(o)}addEventListener(e,t,r,o){return this._findPluginFor(t).addEventListener(e,t,r,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new k(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(S(ro),S(O))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),us="ng-app-id";function rd(n){for(let i of n)i.remove()}function od(n,i){let e=i.createElement("style");return e.textContent=n,e}function gm(n,i,e,t){let r=n.head?.querySelectorAll(`style[${us}="${i}"],link[${us}="${i}"]`);if(r)for(let o of r)o.removeAttribute(us),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function fs(n,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var ps=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,o={}){this.doc=e,this.appId=t,this.nonce=r,gm(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,od);t?.forEach(r=>this.addUsage(r,this.external,fs))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(rd(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])rd(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,od(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,fs(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(S(R),S(Mi),S(Rn,8),S(Nt))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),hs={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},gs=/%COMP%/g;var sd="%COMP%",vm=`_nghost-${sd}`,_m=`_ngcontent-${sd}`,bm=!0,ym=new g("",{factory:()=>bm});function wm(n){return _m.replace(gs,n)}function Cm(n){return vm.replace(gs,n)}function ld(n,i){return i.map(e=>e.replace(gs,n))}var Bi=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,r,o,a,s,c=null,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=d,this.defaultRenderer=new Ni(e,a,s,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof io?r.applyToHost(e):r instanceof Li&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,o=r.get(t.id);if(!o){let a=this.doc,s=this.ngZone,c=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,m=this.tracingService;switch(t.encapsulation){case qr.Emulated:o=new io(c,d,t,this.appId,u,a,s,m);break;case qr.ShadowDom:return new no(c,e,t,a,s,this.nonce,m,d);case qr.ExperimentalIsolatedShadowDom:return new no(c,e,t,a,s,this.nonce,m);default:o=new Li(c,d,t,u,a,s,m);break}r.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(S(ms),S(ps),S(Mi),S(ym),S(R),S(O),S(Rn),S(Yr,8))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),Ni=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,t,r){this.eventManager=i,this.doc=e,this.ngZone=t,this.tracingService=r}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(hs[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(ad(i)?i.content:i).appendChild(e)}insertBefore(i,e,t){i&&(ad(i)?i.content:i).insertBefore(e,t)}removeChild(i,e){e.remove()}selectRootElement(i,e){let t=typeof i=="string"?this.doc.querySelector(i):i;if(!t)throw new k(-5104,!1);return e||(t.textContent=""),t}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,t,r){if(r){e=r+":"+e;let o=hs[r];o?i.setAttributeNS(o,e,t):i.setAttribute(e,t)}else i.setAttribute(e,t)}removeAttribute(i,e,t){if(t){let r=hs[t];r?i.removeAttributeNS(r,e):i.removeAttribute(`${t}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,t,r){r&(kn.DashCase|kn.Important)?i.style.setProperty(e,t,r&kn.Important?"important":""):i.style[e]=t}removeStyle(i,e,t){t&kn.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,t){i!=null&&(i[e]=t)}setValue(i,e){i.nodeValue=e}listen(i,e,t,r){if(typeof i=="string"&&(i=xt().getGlobalEventTarget(this.doc,i),!i))throw new k(5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function ad(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var no=class extends Ni{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,t,r,o,a,s,c){super(i,r,o,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=t.styles;d=ld(t.id,d);for(let m of d){let x=document.createElement("style");a&&x.setAttribute("nonce",a),x.textContent=m,this.shadowRoot.appendChild(x)}let u=t.getExternalStyles?.();if(u)for(let m of u){let x=fs(m,r);a&&x.setAttribute("nonce",a),this.shadowRoot.appendChild(x)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,t){return super.insertBefore(this.nodeOrShadowRoot(i),e,t)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Li=class extends Ni{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,t,r,o,a,s,c){super(i,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=t.styles;this.styles=c?ld(c,d):d,this.styleUrls=t.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Nc.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},io=class extends Li{contentAttr;hostAttr;constructor(i,e,t,r,o,a,s,c){let d=r+"-"+t.id;super(i,e,t,o,a,s,c,d),this.contentAttr=wm(d),this.hostAttr=Cm(d)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let t=super.createElement(i,e);return super.setAttribute(t,this.contentAttr,""),t}};var oo=class n extends ki{supportsDOMEvents=!0;static makeCurrent(){ls(new n)}onAndCancel(i,e,t,r){return i.addEventListener(e,t,r),()=>{i.removeEventListener(e,t,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=xm();return e==null?null:Sm(e)}resetBaseElement(){Vi=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Oi(document.cookie,i)}},Vi=null;function xm(){return Vi=Vi||document.head.querySelector("base"),Vi?Vi.getAttribute("href"):null}function Sm(n){return new URL(n,document.baseURI).pathname}var Em=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),cd=["alt","control","meta","shift"],Mm={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Am={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},dd=(()=>{class n extends Pi{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,r,o){let a=n.parseEventName(t),s=n.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>xt().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(t.pop()),a="",s=t.indexOf("code");if(s>-1&&(t.splice(s,1),a="code."),cd.forEach(d=>{let u=t.indexOf(d);u>-1&&(t.splice(u,1),a+=d+".")}),a+=o,t.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=a,c}static matchEventFullKeyCode(e,t){let r=Mm[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),cd.forEach(a=>{if(a!==r){let s=Am[a];s(e)&&(o+=a+".")}}),o+=r,o===t)}static eventCallback(e,t,r){return o=>{n.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(S(R))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})();async function vs(n,i,e){let t=f({rootComponent:n},Rm(i,e));return Zc(t)}function Rm(n,i){return{platformRef:i?.platformRef,appProviders:[...Fm,...n?.providers??[]],platformProviders:Om}}function Im(){oo.makeCurrent()}function Tm(){return new en}function km(){return Sc(document),document}var Om=[{provide:Nt,useValue:ds},{provide:Ec,useValue:Im,multi:!0},{provide:R,useFactory:km}];var Fm=[{provide:Cc,useValue:"root"},{provide:en,useFactory:Tm},{provide:ro,useClass:to,multi:!0},{provide:ro,useClass:dd,multi:!0},Bi,ps,ms,{provide:Ue,useExisting:Bi},{provide:rn,useClass:Em},[]];var $t=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let t=i.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...t),this.headers.set(e,r);break;case"d":let o=i.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(i,e){let t=i.toLowerCase();this.maybeSetNormalizedName(i,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(i,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var so=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},lo=class{encodeKey(i){return ud(i)}encodeValue(i){return ud(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Pm(n,i){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],c=e.get(a)||[];c.push(s),e.set(a,c)}),e}var Nm=/%(\d[a-f0-9])/gi,Lm={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ud(n){return encodeURIComponent(n).replace(Nm,(i,e)=>Lm[e]??i)}function ao(n){return`${n}`}var St=class n{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new lo,i.fromString){if(i.fromObject)throw new k(2805,!1);this.map=Pm(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let t=i.fromObject[e],r=Array.isArray(t)?t.map(ao):[ao(t)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(t=>{let r=i[t];Array.isArray(r)?r.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(ao(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let t=this.map.get(i.param)||[],r=t.indexOf(ao(i.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(i.param,t):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};function Bm(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function hd(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function fd(n){return typeof Blob<"u"&&n instanceof Blob}function md(n){return typeof FormData<"u"&&n instanceof FormData}function Vm(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var pd="Content-Type",gd="Accept",_d="text/plain",bd="application/json",jm=`${bd}, ${_d}, */*`,Fn=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,t,r){this.url=e,this.method=i.toUpperCase();let o;if(Bm(this.method)||r?(this.body=t!==void 0?t:null,o=r):o=t,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new k(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new $t,this.context??=new so,!this.params)this.params=new St,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),c=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||hd(this.body)||fd(this.body)||md(this.body)||Vm(this.body)?this.body:this.body instanceof St?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||md(this.body)?null:fd(this.body)?this.body.type||null:hd(this.body)?null:typeof this.body=="string"?_d:this.body instanceof St?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?bd:null}clone(i={}){let e=i.method||this.method,t=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,a=i.priority||this.priority,s=i.cache||this.cache,c=i.mode||this.mode,d=i.redirect||this.redirect,u=i.credentials||this.credentials,m=i.referrer??this.referrer,x=i.integrity||this.integrity,G=i.referrerPolicy||this.referrerPolicy,X=i.transferCache??this.transferCache,Z=i.timeout??this.timeout,H=i.body!==void 0?i.body:this.body,te=i.withCredentials??this.withCredentials,pe=i.reportProgress??this.reportProgress,$e=i.headers||this.headers,De=i.params||this.params,Di=i.context??this.context;return i.setHeaders!==void 0&&($e=Object.keys(i.setHeaders).reduce((xi,Zt)=>xi.set(Zt,i.setHeaders[Zt]),$e)),i.setParams&&(De=Object.keys(i.setParams).reduce((xi,Zt)=>xi.set(Zt,i.setParams[Zt]),De)),new n(e,t,H,{params:De,headers:$e,context:Di,reportProgress:pe,responseType:r,withCredentials:te,transferCache:X,keepalive:o,cache:s,priority:a,timeout:Z,mode:c,redirect:d,credentials:u,referrer:m,integrity:x,referrerPolicy:G})}},on=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(on||{}),Nn=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,t="OK"){this.headers=i.headers||new $t,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||t,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},co=class n extends Nn{constructor(i={}){super(i)}type=on.ResponseHeader;clone(i={}){return new n({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},ji=class n extends Nn{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=on.Response;clone(i={}){return new n({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},Pn=class extends Nn{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},Um=200,zm=204;var Hm=new g("");var $m=/^\)\]\}',?\n/;var bs=(()=>{class n{xhrFactory;tracingService=l(Yr,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new k(-2800,!1);let t=this.xhrFactory;return b(null).pipe(ie(()=>new xe(o=>{let a=t.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((H,te)=>a.setRequestHeader(H,te.join(","))),e.headers.has(gd)||a.setRequestHeader(gd,jm),!e.headers.has(pd)){let H=e.detectContentTypeHeader();H!==null&&a.setRequestHeader(pd,H)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let H=e.responseType.toLowerCase();a.responseType=H!=="json"?H:"text"}let s=e.serializeBody(),c=null,d=()=>{if(c!==null)return c;let H=a.statusText||"OK",te=new $t(a.getAllResponseHeaders()),pe=a.responseURL||e.url;return c=new co({headers:te,status:a.status,statusText:H,url:pe}),c},u=this.maybePropagateTrace(()=>{let{headers:H,status:te,statusText:pe,url:$e}=d(),De=null;te!==zm&&(De=typeof a.response>"u"?a.responseText:a.response),te===0&&(te=De?Um:0);let Di=te>=200&&te<300;if(e.responseType==="json"&&typeof De=="string"){let xi=De;De=De.replace($m,"");try{De=De!==""?JSON.parse(De):null}catch(Zt){De=xi,Di&&(Di=!1,De={error:Zt,text:De})}}Di?(o.next(new ji({body:De,headers:H,status:te,statusText:pe,url:$e||void 0})),o.complete()):o.error(new Pn({error:De,headers:H,status:te,statusText:pe,url:$e||void 0}))}),m=this.maybePropagateTrace(H=>{let{url:te}=d(),pe=new Pn({error:H,status:a.status||0,statusText:a.statusText||"Unknown Error",url:te||void 0});o.error(pe)}),x=m;e.timeout&&(x=this.maybePropagateTrace(H=>{let{url:te}=d(),pe=new Pn({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:te||void 0});o.error(pe)}));let G=!1,X=this.maybePropagateTrace(H=>{G||(o.next(d()),G=!0);let te={type:on.DownloadProgress,loaded:H.loaded};H.lengthComputable&&(te.total=H.total),e.responseType==="text"&&a.responseText&&(te.partialText=a.responseText),o.next(te)}),Z=this.maybePropagateTrace(H=>{let te={type:on.UploadProgress,loaded:H.loaded};H.lengthComputable&&(te.total=H.total),o.next(te)});return a.addEventListener("load",u),a.addEventListener("error",m),a.addEventListener("timeout",x),a.addEventListener("abort",m),e.reportProgress&&(a.addEventListener("progress",X),s!==null&&a.upload&&a.upload.addEventListener("progress",Z)),a.send(s),o.next({type:on.Sent}),()=>{a.removeEventListener("error",m),a.removeEventListener("abort",m),a.removeEventListener("load",u),a.removeEventListener("timeout",x),e.reportProgress&&(a.removeEventListener("progress",X),s!==null&&a.upload&&a.upload.removeEventListener("progress",Z)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(t){return new(t||n)(S(rn))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function yd(n,i){return i(n)}function Gm(n,i){return(e,t)=>i.intercept(e,{handle:r=>n(r,t)})}function Wm(n,i,e){return(t,r)=>Ve(e,()=>i(t,o=>n(o,r)))}var wd=new g(""),ys=new g("",{factory:()=>[]}),Cd=new g(""),ws=new g("",{factory:()=>!0});function qm(){let n=null;return(i,e)=>{n===null&&(n=(l(wd,{optional:!0})??[]).reduceRight(Gm,yd));let t=l(Wr);if(l(ws)){let o=t.add();return n(i,e).pipe(Qt(o))}else return n(i,e)}}var Cs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=S(bs),r},providedIn:"root"})}return n})();var uo=(()=>{class n{backend;injector;chain=null;pendingTasks=l(Wr);contributeToStability=l(ws);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(ys),...this.injector.get(Cd,[])]));this.chain=t.reduceRight((r,o)=>Wm(r,o,this.injector),yd)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Qt(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||n)(S(Cs),S(Pe))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ds=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=S(uo),r},providedIn:"root"})}return n})();function _s(n,i){return{body:i,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,credentials:n.credentials,transferCache:n.transferCache,timeout:n.timeout,keepalive:n.keepalive,priority:n.priority,cache:n.cache,mode:n.mode,redirect:n.redirect,integrity:n.integrity,referrer:n.referrer,referrerPolicy:n.referrerPolicy}}var Ln=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,r={}){let o;if(e instanceof Fn)o=e;else{let c;r.headers instanceof $t?c=r.headers:c=new $t(r.headers);let d;r.params&&(r.params instanceof St?d=r.params:d=new St({fromObject:r.params})),o=new Fn(e,t,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:d,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=b(o).pipe(Si(c=>this.handler.handle(c)));if(e instanceof Fn||r.observe==="events")return a;let s=a.pipe(Q(c=>c instanceof ji));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(C(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new k(2806,!1);return c.body}));case"blob":return s.pipe(C(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new k(2807,!1);return c.body}));case"text":return s.pipe(C(c=>{if(c.body!==null&&typeof c.body!="string")throw new k(2808,!1);return c.body}));default:return s.pipe(C(c=>c.body))}case"response":return s;default:throw new k(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new St().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,_s(r,t))}post(e,t,r={}){return this.request("POST",e,_s(r,t))}put(e,t,r={}){return this.request("PUT",e,_s(r,t))}static \u0275fac=function(t){return new(t||n)(S(Ds))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ym=new g("",{factory:()=>!0}),Km="XSRF-TOKEN",Xm=new g("",{factory:()=>Km}),Zm="X-XSRF-TOKEN",Qm=new g("",{factory:()=>Zm}),Jm=(()=>{class n{cookieName=l(Xm);doc=l(R);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Oi(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Dd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=S(Jm),r},providedIn:"root"})}return n})();function ep(n,i){if(!l(Ym)||n.method==="GET"||n.method==="HEAD")return i(n);try{let r=l(On).href,{origin:o}=new URL(r),{origin:a}=new URL(n.url,o);if(o!==a)return i(n)}catch{return i(n)}let e=l(Dd).getToken(),t=l(Qm);return e!=null&&!n.headers.has(t)&&(n=n.clone({headers:n.headers.set(t,e)})),i(n)}var xs=(function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n})(xs||{});function tp(n,i){return{\u0275kind:n,\u0275providers:i}}function Ss(...n){let i=[Ln,uo,{provide:Ds,useExisting:uo},{provide:Cs,useFactory:()=>l(Hm,{optional:!0})??l(bs)},{provide:ys,useValue:ep,multi:!0}];for(let e of n)i.push(...e.\u0275providers);return Re(i)}var vd=new g("");function Es(){return tp(xs.LegacyInterceptors,[{provide:vd,useFactory:qm},{provide:ys,useExisting:vd,multi:!0}])}var xd=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(S(R))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ui=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=S(ap),r},providedIn:"root"})}return n})(),ap=(()=>{class n extends Ui{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case je.NONE:return t;case je.HTML:return Tn(t,"HTML")?In(t):Oc(this._doc,String(t)).toString();case je.STYLE:return Tn(t,"Style")?In(t):t;case je.SCRIPT:if(Tn(t,"Script"))return In(t);throw new k(5200,!1);case je.URL:return Tn(t,"URL")?In(t):kc(String(t));case je.RESOURCE_URL:if(Tn(t,"ResourceURL"))return In(t);throw new k(5201,!1);default:throw new k(5202,!1)}}bypassSecurityTrustHtml(e){return Mc(e)}bypassSecurityTrustStyle(e){return Ac(e)}bypassSecurityTrustScript(e){return Rc(e)}bypassSecurityTrustUrl(e){return Ic(e)}bypassSecurityTrustResourceUrl(e){return Tc(e)}static \u0275fac=function(t){return new(t||n)(S(R))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var z="primary",tr=Symbol("RouteTitle"),Ts=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function sn(n){return new Ts(n)}function Ms(n,i,e){for(let t=0;t<n.length;t++){let r=n[t],o=i[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Od(n,i,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>n.length||e.pathMatch==="full"&&(i.hasChildren()||t.length<n.length))return null;let c={},d=n.slice(0,t.length);return Ms(t,d,c)?{consumed:d,posParams:c}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),a=t.slice(r+1);if(o.length+a.length>n.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let s={};return!Ms(o,n.slice(0,o.length),s)||!Ms(a,n.slice(n.length-a.length),s)?null:{consumed:n,posParams:s}}function vo(n){return new Promise((i,e)=>{n.pipe(Se()).subscribe({next:t=>i(t),error:t=>e(t)})})}function sp(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!bt(n[e],i[e]))return!1;return!0}function bt(n,i){let e=n?ks(n):void 0,t=i?ks(i):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Fd(n[r],i[r]))return!1;return!0}function ks(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Fd(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((r,o)=>t[o]===r)}else return n===i}function lp(n){return n.length>0?n[n.length-1]:null}function dn(n){return Br(n)?n:Ai(n)?ye(Promise.resolve(n)):b(n)}function Pd(n){return Br(n)?vo(n):Promise.resolve(n)}var cp={exact:Bd,subset:Vd},Nd={exact:dp,subset:up,ignored:()=>!0},Ld={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Os={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Ed(n,i,e){return cp[e.paths](n.root,i.root,e.matrixParams)&&Nd[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment==="exact"&&n.fragment!==i.fragment)}function dp(n,i){return bt(n,i)}function Bd(n,i,e){if(!an(n.segments,i.segments)||!mo(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!Bd(n.children[t],i.children[t],e))return!1;return!0}function up(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>Fd(n[e],i[e]))}function Vd(n,i,e){return jd(n,i,i.segments,e)}function jd(n,i,e,t){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!an(r,e)||i.hasChildren()||!mo(r,e,t))}else if(n.segments.length===e.length){if(!an(n.segments,e)||!mo(n.segments,e,t))return!1;for(let r in i.children)if(!n.children[r]||!Vd(n.children[r],i.children[r],t))return!1;return!0}else{let r=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!an(n.segments,r)||!mo(n.segments,r,t)||!n.children[z]?!1:jd(n.children[z],i,o,t)}}function mo(n,i,e){return i.every((t,r)=>Nd[e](n[r].parameters,t.parameters))}var ut=class{root;queryParams;fragment;_queryParamMap;constructor(i=new ne([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=sn(this.queryParams),this._queryParamMap}toString(){return mp.serialize(this)}},ne=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return po(this)}},Gt=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=sn(this.parameters),this._parameterMap}toString(){return zd(this)}};function hp(n,i){return an(n,i)&&n.every((e,t)=>bt(e.parameters,i[t].parameters))}function an(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function fp(n,i){let e=[];return Object.entries(n.children).forEach(([t,r])=>{t===z&&(e=e.concat(i(r,t)))}),Object.entries(n.children).forEach(([t,r])=>{t!==z&&(e=e.concat(i(r,t)))}),e}var nr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:()=>new Wt,providedIn:"root"})}return n})(),Wt=class{parse(i){let e=new Ps(i);return new ut(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${zi(i.root,!0)}`,t=vp(i.queryParams),r=typeof i.fragment=="string"?`#${pp(i.fragment)}`:"";return`${e}${t}${r}`}},mp=new Wt;function po(n){return n.segments.map(i=>zd(i)).join("/")}function zi(n,i){if(!n.hasChildren())return po(n);if(i){let e=n.children[z]?zi(n.children[z],!1):"",t=[];return Object.entries(n.children).forEach(([r,o])=>{r!==z&&t.push(`${r}:${zi(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=fp(n,(t,r)=>r===z?[zi(n.children[z],!1)]:[`${r}:${zi(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[z]!=null?`${po(n)}/${e[0]}`:`${po(n)}/(${e.join("//")})`}}function Ud(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ho(n){return Ud(n).replace(/%3B/gi,";")}function pp(n){return encodeURI(n)}function Fs(n){return Ud(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function go(n){return decodeURIComponent(n)}function Md(n){return go(n.replace(/\+/g,"%20"))}function zd(n){return`${Fs(n.path)}${gp(n.parameters)}`}function gp(n){return Object.entries(n).map(([i,e])=>`;${Fs(i)}=${Fs(e)}`).join("")}function vp(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(r=>`${ho(e)}=${ho(r)}`).join("&"):`${ho(e)}=${ho(t)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var _p=/^[^\/()?;#]+/;function As(n){let i=n.match(_p);return i?i[0]:""}var bp=/^[^\/()?;=#]+/;function yp(n){let i=n.match(bp);return i?i[0]:""}var wp=/^[^=?&#]+/;function Cp(n){let i=n.match(wp);return i?i[0]:""}var Dp=/^[^&#]+/;function xp(n){let i=n.match(Dp);return i?i[0]:""}var Ps=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ne([],{}):new ne([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new k(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(r[z]=new ne(e,t)),r}parseSegment(){let i=As(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new k(4009,!1);return this.capture(i),new Gt(go(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=yp(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=As(this.remaining);r&&(t=r,this.capture(t))}i[go(e)]=go(t)}parseQueryParam(i){let e=Cp(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=xp(this.remaining);a&&(t=a,this.capture(t))}let r=Md(e),o=Md(t);if(i.hasOwnProperty(r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=As(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new k(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=z);let s=this.parseChildren(e+1);t[a??z]=Object.keys(s).length===1&&s[z]?s[z]:new ne([],s),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new k(4011,!1)}};function Hd(n){return n.segments.length>0?new ne([],{[z]:n}):n}function $d(n){let i={};for(let[t,r]of Object.entries(n.children)){let o=$d(r);if(t===z&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))i[a]=s;else(o.segments.length>0||o.hasChildren())&&(i[t]=o)}let e=new ne(n.segments,i);return Sp(e)}function Sp(n){if(n.numberOfChildren===1&&n.children[z]){let i=n.children[z];return new ne(n.segments.concat(i.segments),i.children)}return n}function Un(n){return n instanceof ut}function Gd(n,i,e=null,t=null,r=new Wt){let o=Wd(n);return qd(o,i,e,t,r)}function Wd(n){let i;function e(o){let a={};for(let c of o.children){let d=e(c);a[c.outlet]=d}let s=new ne(o.url,a);return o===n&&(i=s),s}let t=e(n.root),r=Hd(t);return i??r}function qd(n,i,e,t,r){let o=n;for(;o.parent;)o=o.parent;if(i.length===0)return Rs(o,o,o,e,t,r);let a=Ep(i);if(a.toRoot())return Rs(o,o,new ne([],{}),e,t,r);let s=Mp(a,o,n),c=s.processChildren?$i(s.segmentGroup,s.index,a.commands):Kd(s.segmentGroup,s.index,a.commands);return Rs(o,s.segmentGroup,c,e,t,r)}function _o(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function qi(n){return typeof n=="object"&&n!=null&&n.outlets}function Ad(n,i,e){n||="\u0275";let t=new ut;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function Rs(n,i,e,t,r,o){let a={};for(let[d,u]of Object.entries(t??{}))a[d]=Array.isArray(u)?u.map(m=>Ad(d,m,o)):Ad(d,u,o);let s;n===i?s=e:s=Yd(n,i,e);let c=Hd($d(s));return new ut(c,a,r)}function Yd(n,i,e){let t={};return Object.entries(n.children).forEach(([r,o])=>{o===i?t[r]=e:t[r]=Yd(o,i,e)}),new ne(n.segments,t)}var bo=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&_o(t[0]))throw new k(4003,!1);let r=t.find(qi);if(r&&r!==lp(t))throw new k(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Ep(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new bo(!0,0,n);let i=0,e=!1,t=n.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,d])=>{s[c]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?i++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new bo(e,i,t)}var Vn=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function Mp(n,i,e){if(n.isAbsolute)return new Vn(i,!0,0);if(!e)return new Vn(i,!1,NaN);if(e.parent===null)return new Vn(e,!0,0);let t=_o(n.commands[0])?0:1,r=e.segments.length-1+t;return Ap(e,r,n.numberOfDoubleDots)}function Ap(n,i,e){let t=n,r=i,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new k(4005,!1);r=t.segments.length}return new Vn(t,!1,r-o)}function Rp(n){return qi(n[0])?n[0].outlets:{[z]:n}}function Kd(n,i,e){if(n??=new ne([],{}),n.segments.length===0&&n.hasChildren())return $i(n,i,e);let t=Ip(n,i,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let o=new ne(n.segments.slice(0,t.pathIndex),{});return o.children[z]=new ne(n.segments.slice(t.pathIndex),n.children),$i(o,0,r)}else return t.match&&r.length===0?new ne(n.segments,{}):t.match&&!n.hasChildren()?Ns(n,i,e):t.match?$i(n,0,r):Ns(n,i,e)}function $i(n,i,e){if(e.length===0)return new ne(n.segments,{});{let t=Rp(e),r={};if(Object.keys(t).some(o=>o!==z)&&n.children[z]&&n.numberOfChildren===1&&n.children[z].segments.length===0){let o=$i(n.children[z],i,e);return new ne(n.segments,o.children)}return Object.entries(t).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=Kd(n.children[o],i,a))}),Object.entries(n.children).forEach(([o,a])=>{t[o]===void 0&&(r[o]=a)}),new ne(n.segments,r)}}function Ip(n,i,e){let t=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(t>=e.length)return o;let a=n.segments[r],s=e[t];if(qi(s))break;let c=`${s}`,d=t<e.length-1?e[t+1]:null;if(r>0&&c===void 0)break;if(c&&d&&typeof d=="object"&&d.outlets===void 0){if(!Id(c,d,a))return o;t+=2}else{if(!Id(c,{},a))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function Ns(n,i,e){let t=n.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(qi(o)){let c=Tp(o.outlets);return new ne(t,c)}if(r===0&&_o(e[0])){let c=n.segments[i];t.push(new Gt(c.path,Rd(e[0]))),r++;continue}let a=qi(o)?o.outlets[z]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&_o(s)?(t.push(new Gt(a,Rd(s))),r+=2):(t.push(new Gt(a,{})),r++)}return new ne(t,{})}function Tp(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(i[e]=Ns(new ne([],{}),0,t))}),i}function Rd(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function Id(n,i,e){return n==e.path&&bt(i,e.parameters)}var Gi="imperative",Ae=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(Ae||{}),ot=class{id;url;constructor(i,e){this.id=i,this.url=e}},ln=class extends ot{type=Ae.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t="imperative",r=null){super(i,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Mt=class extends ot{urlAfterRedirects;type=Ae.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ne=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(Ne||{}),Yi=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(Yi||{}),dt=class extends ot{reason;code;type=Ae.NavigationCancel;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Xd(n){return n instanceof dt&&(n.code===Ne.Redirect||n.code===Ne.SupersededByNewNavigation)}var At=class extends ot{reason;code;type=Ae.NavigationSkipped;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}},cn=class extends ot{error;target;type=Ae.NavigationError;constructor(i,e,t,r){super(i,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Ki=class extends ot{urlAfterRedirects;state;type=Ae.RoutesRecognized;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},yo=class extends ot{urlAfterRedirects;state;type=Ae.GuardsCheckStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},wo=class extends ot{urlAfterRedirects;state;shouldActivate;type=Ae.GuardsCheckEnd;constructor(i,e,t,r,o){super(i,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Co=class extends ot{urlAfterRedirects;state;type=Ae.ResolveStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Do=class extends ot{urlAfterRedirects;state;type=Ae.ResolveEnd;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},xo=class{route;type=Ae.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},So=class{route;type=Ae.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Eo=class{snapshot;type=Ae.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Mo=class{snapshot;type=Ae.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ao=class{snapshot;type=Ae.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ro=class{snapshot;type=Ae.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var zn=class{},Xi=class{},Hn=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function kp(n){return!(n instanceof zn)&&!(n instanceof Hn)&&!(n instanceof Xi)}var Io=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new qn(this.rootInjector)}},qn=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new Io(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(S(Pe))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),To=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=Ls(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=Ls(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=Bs(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return Bs(i,this._root).map(e=>e.value)}};function Ls(n,i){if(n===i.value)return i;for(let e of i.children){let t=Ls(n,e);if(t)return t}return null}function Bs(n,i){if(n===i.value)return[i];for(let e of i.children){let t=Bs(n,e);if(t.length)return t.unshift(i),t}return[]}var rt=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function Bn(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var Zi=class extends To{snapshot;constructor(i,e){super(i),this.snapshot=e,qs(this,i)}toString(){return this.snapshot.toString()}};function Zd(n,i){let e=Op(n,i),t=new Fe([new Gt("",{})]),r=new Fe({}),o=new Fe({}),a=new Fe({}),s=new Fe(""),c=new qt(t,r,a,s,o,z,n,e.root);return c.snapshot=e.root,new Zi(new rt(c,[]),e)}function Op(n,i){let e={},t={},r={},a=new $n([],e,r,"",t,z,n,null,{},i);return new Qi("",new rt(a,[]))}var qt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,t,r,o,a,s,c){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(C(d=>d[tr]))??b(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(C(i=>sn(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(C(i=>sn(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Ws(n,i,e="emptyOnly"){let t,{routeConfig:r}=n;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?t={params:f(f({},i.params),n.params),data:f(f({},i.data),n.data),resolve:f(f(f(f({},n.data),i.data),r?.data),n._resolvedData)}:t={params:f({},n.params),data:f({},n.data),resolve:f(f({},n.data),n._resolvedData??{})},r&&Jd(r)&&(t.resolve[tr]=r.title),t}var $n=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[tr]}constructor(i,e,t,r,o,a,s,c,d,u){this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=sn(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=sn(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},Qi=class extends To{url;constructor(i,e){super(e),this.url=i,qs(this,e)}toString(){return Qd(this._root)}};function qs(n,i){i.value._routerState=n,i.children.forEach(e=>qs(n,e))}function Qd(n){let i=n.children.length>0?` { ${n.children.map(Qd).join(", ")} } `:"";return`${n.value}${i}`}function Is(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,bt(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),bt(i.params,e.params)||n.paramsSubject.next(e.params),sp(i.url,e.url)||n.urlSubject.next(e.url),bt(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Vs(n,i){let e=bt(n.params,i.params)&&hp(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||Vs(n.parent,i.parent))}function Jd(n){return typeof n.title=="string"||n.title===null}var eu=new g(""),ir=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=z;activateEvents=new $;deactivateEvents=new $;attachEvents=new $;detachEvents=new $;routerOutletData=Kc();parentContexts=l(qn);location=l(et);changeDetector=l(ue);inputBinder=l(Po,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new k(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new k(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new k(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new k(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new js(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:c,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[qe]})}return n})(),js=class{route;childContexts;parent;outletData;constructor(i,e,t,r){this.route=i,this.childContexts=e,this.parent=t,this.outletData=r}get(i,e){return i===qt?this.route:i===qn?this.childContexts:i===eu?this.outletData:this.parent.get(i,e)}},Po=new g("");var Ys=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&le(0,"router-outlet")},dependencies:[ir],encapsulation:2})}return n})();function Ks(n){let i=n.children&&n.children.map(Ks),e=i?W(f({},n),{children:i}):f({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==z&&(e.component=Ys),e}function Fp(n,i,e){let t=Ji(n,i._root,e?e._root:void 0);return new Zi(t,i)}function Ji(n,i,e){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=i.value;let r=Pp(n,i,e);return new rt(t,r)}else{if(n.shouldAttach(i.value)){let o=n.retrieve(i.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=i.value,a.children=i.children.map(s=>Ji(n,s)),a}}let t=Np(i.value),r=i.children.map(o=>Ji(n,o));return new rt(t,r)}}function Pp(n,i,e){return i.children.map(t=>{for(let r of e.children)if(n.shouldReuseRoute(t.value,r.value.snapshot))return Ji(n,t,r);return Ji(n,t)})}function Np(n){return new qt(new Fe(n.url),new Fe(n.params),new Fe(n.queryParams),new Fe(n.fragment),new Fe(n.data),n.outlet,n.component,n)}var Gn=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},tu="ngNavigationCancelingError";function ko(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=Un(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=nu(!1,Ne.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function nu(n,i){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[tu]=!0,e.cancellationCode=i,e}function Lp(n){return iu(n)&&Un(n.url)}function iu(n){return!!n&&n[tu]}var Us=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),Is(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let r=Bn(e);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],t),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let a=t.getContext(r.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=Bn(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(t&&t.outlet){let a=t.outlet.detach(),s=t.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:s})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=Bn(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(i,e,t){let r=Bn(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new Ro(o.value.snapshot))}),i.children.length&&this.forwardEvent(new Mo(i.value.snapshot))}activateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(Is(r),r===o)if(r.component){let a=t.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,t);else if(r.component){let a=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Is(s.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,t)}},Oo=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},jn=class{component;route;constructor(i,e){this.component=i,this.route=e}};function Bp(n,i,e){let t=n._root,r=i?i._root:null;return Hi(t,r,e,[t.value])}function Vp(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function Yn(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n=="function"&&!wc(n)?n:i.get(n):t}function Hi(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Bn(i);return n.children.forEach(a=>{jp(a,o[a.value.outlet],e,t.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>Wi(s,e.getContext(a),r)),r}function jp(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,a=i?i.value:null,s=e?e.getContext(n.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=Up(a,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Oo(t)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Hi(n,i,s?s.children:null,t,r):Hi(n,i,e,t,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new jn(s.outlet.component,a))}else a&&Wi(i,s,r),r.canActivateChecks.push(new Oo(t)),o.component?Hi(n,null,s?s.children:null,t,r):Hi(n,null,e,t,r);return r}function Up(n,i,e){if(typeof e=="function")return Ve(i._environmentInjector,()=>e(n,i));switch(e){case"pathParamsChange":return!an(n.url,i.url);case"pathParamsOrQueryParamsChange":return!an(n.url,i.url)||!bt(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Vs(n,i)||!bt(n.queryParams,i.queryParams);default:return!Vs(n,i)}}function Wi(n,i,e){let t=Bn(n),r=n.value;Object.entries(t).forEach(([o,a])=>{r.component?i?Wi(a,i.children.getContext(o),e):Wi(a,null,e):Wi(a,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new jn(i.outlet.component,r)):e.canDeactivateChecks.push(new jn(null,r)):e.canDeactivateChecks.push(new jn(null,r))}function rr(n){return typeof n=="function"}function zp(n){return typeof n=="boolean"}function Hp(n){return n&&rr(n.canLoad)}function $p(n){return n&&rr(n.canActivate)}function Gp(n){return n&&rr(n.canActivateChild)}function Wp(n){return n&&rr(n.canDeactivate)}function qp(n){return n&&rr(n.canMatch)}function ru(n){return n instanceof _c||n?.name==="EmptyError"}var fo=Symbol("INITIAL_VALUE");function Wn(){return ie(n=>Dn(n.map(i=>i.pipe(he(1),Ce(fo)))).pipe(C(i=>{for(let e of i)if(e!==!0){if(e===fo)return fo;if(e===!1||Yp(e))return e}return!0}),Q(i=>i!==fo),he(1)))}function Yp(n){return Un(n)||n instanceof Gn}function ou(n){return n.aborted?b(void 0).pipe(he(1)):new xe(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function au(n){return q(ou(n))}function Kp(n){return we(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?b(W(f({},i),{guardsResult:!0})):Xp(o,e,t).pipe(we(a=>a&&zp(a)?Zp(e,r,n):b(a)),C(a=>W(f({},i),{guardsResult:a})))})}function Xp(n,i,e){return ye(n).pipe(we(t=>ng(t.component,t.route,e,i)),Se(t=>t!==!0,!0))}function Zp(n,i,e){return ye(i).pipe(Si(t=>Vr(Jp(t.route.parent,e),Qp(t.route,e),tg(n,t.path),eg(n,t.route))),Se(t=>t!==!0,!0))}function Qp(n,i){return n!==null&&i&&i(new Ao(n)),b(!0)}function Jp(n,i){return n!==null&&i&&i(new Eo(n)),b(!0)}function eg(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return b(!0);let t=e.map(r=>xn(()=>{let o=i._environmentInjector,a=Yn(r,o),s=$p(a)?a.canActivate(i,n):Ve(o,()=>a(i,n));return dn(s).pipe(Se())}));return b(t).pipe(Wn())}function tg(n,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>Vp(o)).filter(o=>o!==null).map(o=>xn(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,d=Yn(s,c),u=Gp(d)?d.canActivateChild(e,n):Ve(c,()=>d(e,n));return dn(u).pipe(Se())});return b(a).pipe(Wn())}));return b(r).pipe(Wn())}function ng(n,i,e,t){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return b(!0);let o=r.map(a=>{let s=i._environmentInjector,c=Yn(a,s),d=Wp(c)?c.canDeactivate(n,i,e,t):Ve(s,()=>c(n,i,e,t));return dn(d).pipe(Se())});return b(o).pipe(Wn())}function ig(n,i,e,t,r){let o=i.canLoad;if(o===void 0||o.length===0)return b(!0);let a=o.map(s=>{let c=Yn(s,n),d=Hp(c)?c.canLoad(i,e):Ve(n,()=>c(i,e)),u=dn(d);return r?u.pipe(au(r)):u});return b(a).pipe(Wn(),su(t))}function su(n){return pc(fe(i=>{if(typeof i!="boolean")throw ko(n,i)}),C(i=>i===!0))}function rg(n,i,e,t,r,o){let a=i.canMatch;if(!a||a.length===0)return b(!0);let s=a.map(c=>{let d=Yn(c,n),u=qp(d)?d.canMatch(i,e,r):Ve(n,()=>d(i,e,r));return dn(u).pipe(au(o))});return b(s).pipe(Wn(),su(t))}var Et=class n extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},er=class n extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function og(n){throw new k(4e3,!1)}function ag(n){throw nu(!1,Ne.GuardRejected)}var zs=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}async lineralizeSegments(i,e){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[z])throw og(`${i.redirectTo}`);r=r.children[z]}}async applyRedirectCommands(i,e,t,r,o){let a=await sg(e,r,o);if(a instanceof ut)throw new er(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,t);if(a[0]==="/")throw new er(s);return s}applyRedirectCreateUrlTree(i,e,t,r){let o=this.createSegmentGroup(i,e.root,t,r);return new ut(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);t[r]=e[s]}else t[r]=o}),t}createSegmentGroup(i,e,t,r){let o=this.createSegments(i,e.segments,t,r),a={};return Object.entries(e.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(i,c,t,r)}),new ne(o,a)}createSegments(i,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,t))}findPosParam(i,e,t){let r=t[e.path.substring(1)];if(!r)throw new k(4001,!1);return r}findOrReturn(i,e){let t=0;for(let r of e){if(r.path===i.path)return e.splice(t),r;t++}return i}};function sg(n,i,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return vo(dn(Ve(e,()=>t(i))))}function lg(n,i){return n.providers&&!n._injector&&(n._injector=ns(n.providers,i,`Route: ${n.path}`)),n._injector??i}function pt(n){return n.outlet||z}function cg(n,i){let e=n.filter(t=>pt(t)===i);return e.push(...n.filter(t=>pt(t)!==i)),e}var Hs={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function lu(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function dg(n,i,e,t,r,o,a){let s=cu(n,i,e);if(!s.matched)return b(s);let c=lu(o(s));return t=lg(i,t),rg(t,i,e,r,c,a).pipe(C(d=>d===!0?s:f({},Hs)))}function cu(n,i,e){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||e.length>0)?f({},Hs):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Od)(e,n,i);if(!r)return f({},Hs);let o={};Object.entries(r.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=r.consumed.length>0?f(f({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function Td(n,i,e,t,r){return e.length>0&&fg(n,e,t,r)?{segmentGroup:new ne(i,hg(t,new ne(e,n.children))),slicedSegments:[]}:e.length===0&&mg(n,e,t)?{segmentGroup:new ne(n.segments,ug(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new ne(n.segments,n.children),slicedSegments:e}}function ug(n,i,e,t){let r={};for(let o of e)if(No(n,i,o)&&!t[pt(o)]){let a=new ne([],{});r[pt(o)]=a}return f(f({},t),r)}function hg(n,i){let e={};e[z]=i;for(let t of n)if(t.path===""&&pt(t)!==z){let r=new ne([],{});e[pt(t)]=r}return e}function fg(n,i,e,t){return e.some(r=>!No(n,i,r)||!(pt(r)!==z)?!1:!(t!==void 0&&pt(r)===t))}function mg(n,i,e){return e.some(t=>No(n,i,t))}function No(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function pg(n,i,e){return i.length===0&&!n.children[e]}var $s=class{};async function gg(n,i,e,t,r,o,a="emptyOnly",s){return new Gs(n,i,e,t,r,a,o,s).recognize()}var vg=31,Gs=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,t,r,o,a,s,c){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new zs(this.urlSerializer,this.urlTree)}noMatchError(i){return new k(4002,`'${i.segmentGroup}'`)}async recognize(){let i=Td(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=await this.match(i),r=new rt(t,e),o=new Qi("",r),a=Gd(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(i){let e=new $n([],Object.freeze({}),Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),z,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,z,e),rootSnapshot:e}}catch(t){if(t instanceof er)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof Et?this.noMatchError(t):t}}async processSegmentGroup(i,e,t,r,o){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,o);let a=await this.processSegment(i,e,t,t.segments,r,!0,o);return a instanceof rt?[a]:[]}async processChildren(i,e,t,r){let o=[];for(let c of Object.keys(t.children))c==="primary"?o.unshift(c):o.push(c);let a=[];for(let c of o){let d=t.children[c],u=cg(e,c),m=await this.processSegmentGroup(i,u,d,c,r);a.push(...m)}let s=du(a);return _g(s),s}async processSegment(i,e,t,r,o,a,s){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??i,e,c,t,r,o,a,s)}catch(d){if(d instanceof Et||ru(d))continue;throw d}if(pg(t,r,o))return new $s;throw new Et(t)}async processSegmentAgainstRoute(i,e,t,r,o,a,s,c){if(pt(t)!==a&&(a===z||!No(r,o,t)))throw new Et(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,t,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,t,o,a,c);throw new Et(r)}async expandSegmentAgainstRouteUsingRedirect(i,e,t,r,o,a,s){let{matched:c,parameters:d,consumedSegments:u,positionalParamSegments:m,remainingSegments:x}=cu(e,r,o);if(!c)throw new Et(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>vg&&(this.allowRedirects=!1));let G=this.createSnapshot(i,r,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let X=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,m,lu(G),i),Z=await this.applyRedirects.lineralizeSegments(r,X);return this.processSegment(i,t,e,Z.concat(x),a,!1,s)}createSnapshot(i,e,t,r,o){let a=new $n(t,r,Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,yg(e),pt(e),e.component??e._loadedComponent??null,e,wg(e),i),s=Ws(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(i,e,t,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=$e=>this.createSnapshot(i,t,$e.consumedSegments,$e.parameters,a),c=await vo(dg(e,t,r,i,this.urlSerializer,s,this.abortSignal));if(t.path==="**"&&(e.children={}),!c?.matched)throw new Et(e);i=t._injector??i;let{routes:d}=await this.getChildConfig(i,t,r),u=t._loadedInjector??i,{parameters:m,consumedSegments:x,remainingSegments:G}=c,X=this.createSnapshot(i,t,x,m,a),{segmentGroup:Z,slicedSegments:H}=Td(e,x,G,d,o);if(H.length===0&&Z.hasChildren()){let $e=await this.processChildren(u,d,Z,X);return new rt(X,$e)}if(d.length===0&&H.length===0)return new rt(X,[]);let te=pt(t)===o,pe=await this.processSegment(u,d,Z,H,te?z:o,!0,X);return new rt(X,pe instanceof rt?[pe]:[])}async getChildConfig(i,e,t){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await vo(ig(i,e,t,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw ag(e)}return{routes:[],injector:i}}};function _g(n){n.sort((i,e)=>i.value.outlet===z?-1:e.value.outlet===z?1:i.value.outlet.localeCompare(e.value.outlet))}function bg(n){let i=n.value.routeConfig;return i&&i.path===""}function du(n){let i=[],e=new Set;for(let t of n){if(!bg(t)){i.push(t);continue}let r=i.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):i.push(t)}for(let t of e){let r=du(t.children);i.push(new rt(t.value,r))}return i.filter(t=>!e.has(t))}function yg(n){return n.data||{}}function wg(n){return n.resolve||{}}function Cg(n,i,e,t,r,o,a){return we(async s=>{let{state:c,tree:d}=await gg(n,i,e,t,s.extractedUrl,r,o,a);return W(f({},s),{targetSnapshot:c,urlAfterRedirects:d})})}function Dg(n){return we(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return b(i);let r=new Set(t.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let c of uu(s))o.add(c);let a=0;return ye(o).pipe(Si(s=>r.has(s)?xg(s,e,n):(s.data=Ws(s,s.parent,n).resolve,b(void 0))),fe(()=>a++),Ja(1),we(s=>a===o.size?b(i):Ge))})}function uu(n){let i=n.children.map(e=>uu(e)).flat();return[n,...i]}function xg(n,i,e){let t=n.routeConfig,r=n._resolve;return t?.title!==void 0&&!Jd(t)&&(r[tr]=t.title),xn(()=>(n.data=Ws(n,n.parent,e).resolve,Sg(r,n,i).pipe(C(o=>(n._resolvedData=o,n.data=f(f({},n.data),o),null)))))}function Sg(n,i,e){let t=ks(n);if(t.length===0)return b({});let r={};return ye(t).pipe(we(o=>Eg(n[o],i,e).pipe(Se(),fe(a=>{if(a instanceof Gn)throw ko(new Wt,a);r[o]=a}))),Ja(1),C(()=>r),Ct(o=>ru(o)?Ge:We(o)))}function Eg(n,i,e){let t=i._environmentInjector,r=Yn(n,t),o=r.resolve?r.resolve(i,e):Ve(t,()=>r(i,e));return dn(o)}function kd(n){return ie(i=>{let e=n(i);return e?ye(e).pipe(C(()=>i)):b(i)})}var Xs=(()=>{class n{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===z);return t}getResolvedTitleForRoute(e){return e.data[tr]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:()=>l(hu),providedIn:"root"})}return n})(),hu=(()=>{class n extends Xs{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(S(xd))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),or=new g("",{factory:()=>({})}),ar=new g(""),fu=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(Yc);async loadComponent(e,t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await Pd(Ve(e,()=>t.loadComponent())),a=await gu(pu(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}})();return this.componentLoaders.set(t,r),r}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await mu(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}})();return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();async function mu(n,i,e,t){let r=await Pd(Ve(e,()=>n.loadChildren())),o=await gu(pu(r)),a;o instanceof Lc||Array.isArray(o)?a=o:a=await i.compileModuleAsync(o),t&&t(n);let s,c,d=!1,u;return Array.isArray(a)?(c=a,d=!0):(s=a.create(e).injector,u=a,c=s.get(ar,[],{optional:!0,self:!0}).flat()),{routes:c.map(Ks),injector:s,factory:u}}function Mg(n){return n&&typeof n=="object"&&"default"in n}function pu(n){return Mg(n)?n.default:n}async function gu(n){return n}var Lo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:()=>l(Ag),providedIn:"root"})}return n})(),Ag=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),vu=new g("");var Rg=()=>{},_u=new g(""),bu=(()=>{class n{currentNavigation=se(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=se(null);events=new y;transitionAbortWithErrorSubject=new y;configLoader=l(fu);environmentInjector=l(Pe);destroyRef=l(mt);urlSerializer=l(nr);rootContexts=l(qn);location=l(Ht);inputBindingEnabled=l(Po,{optional:!0})!==null;titleStrategy=l(Xs);options=l(or,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=l(Lo);createViewTransition=l(vu,{optional:!0});navigationErrorHandler=l(_u,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>b(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new xo(r)),t=r=>this.events.next(new So(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;Me(()=>{this.transitions?.next(W(f({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Fe(null),this.transitions.pipe(Q(t=>t!==null),ie(t=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===t.id;return b(t).pipe(ie(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",Ne.SupersededByNewNavigation),Ge;this.currentTransition=t;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?W(f({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&u!=="reload")return this.events.next(new At(s.id,this.urlSerializer.serialize(s.rawUrl),"",Yi.IgnoredSameUrlNavigation)),s.resolve(!1),Ge;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return b(s).pipe(ie(m=>(this.events.next(new ln(m.id,this.urlSerializer.serialize(m.extractedUrl),m.source,m.restoredState)),m.id!==this.navigationId?Ge:Promise.resolve(m))),Cg(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),fe(m=>{t.targetSnapshot=m.targetSnapshot,t.urlAfterRedirects=m.urlAfterRedirects,this.currentNavigation.update(x=>(x.finalUrl=m.urlAfterRedirects,x)),this.events.next(new Xi)}),ie(m=>ye(t.routesRecognizeHandler.deferredHandle??b(void 0)).pipe(C(()=>m))),fe(()=>{let m=new Ki(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:m,extractedUrl:x,source:G,restoredState:X,extras:Z}=s,H=new ln(m,this.urlSerializer.serialize(x),G,X);this.events.next(H);let te=Zd(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=W(f({},s),{targetSnapshot:te,urlAfterRedirects:x,extras:W(f({},Z),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(pe=>(pe.finalUrl=x,pe)),b(t)}else return this.events.next(new At(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Yi.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Ge}),C(s=>{let c=new yo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=t=W(f({},s),{guards:Bp(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),Kp(s=>this.events.next(s)),ie(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw ko(this.urlSerializer,s.guardsResult);let c=new wo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return Ge;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Ne.GuardRejected),Ge;if(s.guards.canActivateChecks.length===0)return b(s);let d=new Co(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!a())return Ge;let u=!1;return b(s).pipe(Dg(this.paramsInheritanceStrategy),fe({next:()=>{u=!0;let m=new Do(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)},complete:()=>{u||this.cancelNavigationTransition(s,"",Ne.NoDataFromResolver)}}))}),kd(s=>{let c=u=>{let m=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let x=u._environmentInjector;m.push(this.configLoader.loadComponent(x,u.routeConfig).then(G=>{u.component=G}))}for(let x of u.children)m.push(...c(x));return m},d=c(s.targetSnapshot.root);return d.length===0?b(s):ye(Promise.all(d).then(()=>s))}),kd(()=>this.afterPreactivation()),ie(()=>{let{currentSnapshot:s,targetSnapshot:c}=t,d=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return d?ye(d).pipe(C(()=>t)):b(t)}),he(1),ie(s=>{let c=Fp(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=t=s=W(f({},s),{targetRouterState:c}),this.currentNavigation.update(u=>(u.targetRouterState=c,u)),this.events.next(new zn);let d=t.beforeActivateHandler.deferredHandle;return d?ye(d.then(()=>s)):b(s)}),fe(s=>{new Us(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(c=>(c.abort=Rg,c)),this.lastSuccessfulNavigation.set(Me(this.currentNavigation)),this.events.next(new Mt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),q(ou(o.signal).pipe(Q(()=>!r&&!t.targetRouterState),fe(()=>{this.cancelNavigationTransition(t,o.signal.reason+"",Ne.Aborted)}))),fe({complete:()=>{r=!0}}),q(this.transitionAbortWithErrorSubject.pipe(fe(s=>{throw s}))),Qt(()=>{o.abort(),r||this.cancelNavigationTransition(t,"",Ne.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ct(s=>{if(r=!0,this.destroyed)return t.resolve(!1),Ge;if(iu(s))this.events.next(new dt(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),Lp(s)?this.events.next(new Hn(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let c=new cn(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let d=Ve(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof Gn){let{message:u,cancellationCode:m}=ko(this.urlSerializer,d);this.events.next(new dt(t.id,this.urlSerializer.serialize(t.extractedUrl),u,m)),this.events.next(new Hn(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(d){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(d)}}return Ge}))}))}cancelNavigationTransition(e,t,r){let o=new dt(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=Me(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ig(n){return n!==Gi}var yu=new g("");var wu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:()=>l(Tg),providedIn:"root"})}return n})(),Fo=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},Tg=(()=>{class n extends Fo{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ye(n)))(r||n)}})();static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Zs=(()=>{class n{urlSerializer=l(nr);options=l(or,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(Ht);urlHandlingStrategy=l(Lo);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new ut;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=r??o;return a instanceof ut?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=Zd(null,l(Pe));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:()=>l(kg),providedIn:"root"})}return n})(),kg=(()=>{class n extends Zs{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof ln?this.updateStateMemento():e instanceof At?this.commitTransition(t):e instanceof Ki?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof zn?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof dt&&!Xd(e)?this.restoreHistory(t):e instanceof cn?this.restoreHistory(t,!0):e instanceof Mt&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:r,id:o}=t,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let c=this.browserPageId,d=f(f({},s),this.generateNgRouterState(o,c,t));this.location.replaceState(e,"",d)}else{let c=f(f({},s),this.generateNgRouterState(o,this.browserPageId+1,t));this.location.go(e,"",c)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,r){return this.canceledNavigationResolution==="computed"?f({navigationId:e,\u0275routerPageId:t},this.routerUrlState(r)):f({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ye(n)))(r||n)}})();static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Qs(n,i){n.events.pipe(Q(e=>e instanceof Mt||e instanceof dt||e instanceof cn||e instanceof At),C(e=>e instanceof Mt||e instanceof At?0:(e instanceof dt?e.code===Ne.Redirect||e.code===Ne.SupersededByNewNavigation:!1)?2:1),Q(e=>e!==2),he(1)).subscribe(()=>{i()})}var Bo=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(rs);stateManager=l(Zs);options=l(or,{optional:!0})||{};pendingTasks=l(Dc);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(bu);urlSerializer=l(nr);location=l(Ht);urlHandlingStrategy=l(Lo);injector=l(Pe);_events=new y;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(wu);injectorCleanup=l(yu,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(ar,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(Po,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ge;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=Me(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof dt&&t.code!==Ne.Redirect&&t.code!==Ne.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof Mt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof Hn){let a=t.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),c=f({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Ig(r.source)},a);this.scheduleNavigation(s,Gi,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}kp(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Gi,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o)=>{this.navigateToSyncWithBrowser(e,r,t,o)})}navigateToSyncWithBrowser(e,t,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=W(f({},o),{browserUrl:e})),r){let d=f({},r);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(o.state=d)}let c=this.parseUrl(s);this.scheduleNavigation(c,t,a,o).catch(d=>{this.disposed||this.injector.get(Gr)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Me(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Ks),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=t,d=c?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=f(f({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let m;try{let x=r?r.snapshot:this.routerState.snapshot.root;m=Wd(x)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),m=this.currentUrlTree.root}return qd(m,e,u,d??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=Un(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Gi,null,t)}navigate(e,t={skipLocationChange:!1}){return Og(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Jt(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=f({},Ld):t===!1?r=f({},Os):r=f(f({},Os),t),Un(e))return Ed(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Ed(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,c,d;a?(s=a.resolve,c=a.reject,d=a.promise):d=new Promise((m,x)=>{s=m,c=x});let u=this.pendingTasks.add();return Qs(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:c,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Og(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new k(4008,!1)}var Ng=new g("");function Js(n,...i){return Re([{provide:ar,multi:!0,useValue:n},[],{provide:qt,useFactory:Lg},{provide:Vc,multi:!0,useFactory:Bg},i.map(e=>e.\u0275providers)])}function Lg(){return l(Bo).routerState.root}function Bg(){let n=l(U);return i=>{let e=n.get(tt);if(i!==e.components[0])return;let t=n.get(Bo),r=n.get(Vg);n.get(jg)===1&&t.initialNavigation(),n.get(Ug,null,{optional:!0})?.setUpPreloading(),n.get(Ng,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Vg=new g("",{factory:()=>new y}),jg=new g("",{factory:()=>1});var Ug=new g("");function un(n){return n.buttons===0||n.detail===0}function hn(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var el;function Cu(){if(el==null){let n=typeof document<"u"?document.head:null;el=!!(n&&(n.createShadowRoot||n.attachShadow))}return el}function tl(n){if(Cu()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function Oe(n){return n.composedPath?n.composedPath()[0]:n.target}var nl;try{nl=typeof Intl<"u"&&Intl.v8BreakIterator}catch{nl=!1}var oe=(()=>{class n{_platformId=l(Nt);isBrowser=this._platformId?Fi(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||nl)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var sr;function Du(){if(sr==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>sr=!0}))}finally{sr=sr||!1}return sr}function Kn(n){return Du()?n:!!n.capture}function Rt(n,i=0){return xu(n)?Number(n):arguments.length===2?i:0}function xu(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function yt(n){return n instanceof P?n.nativeElement:n}var Su=new g("cdk-input-modality-detector-options"),Eu={ignoreKeys:[18,17,224,91,16]},Mu=650,il={passive:!0,capture:!0},Au=(()=>{class n{_platform=l(oe);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Fe(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Oe(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Mu||(this._modality.next(un(e)?"keyboard":"mouse"),this._mostRecentTarget=Oe(e))};_onTouchstart=e=>{if(hn(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Oe(e)};constructor(){let e=l(O),t=l(R),r=l(Su,{optional:!0});if(this._options=f(f({},Eu),r),this.modalityDetected=this._modality.pipe(Ur(1)),this.modalityChanged=this.modalityDetected.pipe(Qa()),this._platform.isBrowser){let o=l(Ue).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,il),o.listen(t,"mousedown",this._onMousedown,il),o.listen(t,"touchstart",this._onTouchstart,il)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),lr=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(lr||{}),Ru=new g("cdk-focus-monitor-default-options"),Vo=Kn({passive:!0,capture:!0}),Yt=(()=>{class n{_ngZone=l(O);_platform=l(oe);_inputModalityDetector=l(Au);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(R);_stopInputModalityDetector=new y;constructor(){let e=l(Ru,{optional:!0});this._detectionMode=e?.detectionMode||lr.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Oe(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=yt(e);if(!this._platform.isBrowser||r.nodeType!==1)return b();let o=tl(r)||this._document,a=this._elementInfo.get(r);if(a)return t&&(a.checkChildren=!0),a.subject;let s={checkChildren:t,subject:new y,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=yt(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=yt(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,t,c)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===lr.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===lr.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Mu:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=Oe(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Vo),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Vo)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(q(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Vo),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Vo),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var jo=new WeakMap,Qe=(()=>{class n{_appRef;_injector=l(U);_environmentInjector=l(Pe);load(e){let t=this._appRef=this._appRef||this._injector.get(tt),r=jo.get(t);r||(r={loaders:new Set,refs:[]},jo.set(t,r),t.onDestroy(()=>{jo.get(t)?.refs.forEach(o=>o.destroy()),jo.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Qr(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var zo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})(),Uo;function Hg(){if(Uo===void 0&&(Uo=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(Uo=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return Uo}function fn(n){return Hg()?.createHTML(n)||n}function Iu(n,i,e){let t=e.sanitize(je.HTML,i);n.innerHTML=fn(t||"")}function Xn(n){return Array.isArray(n)?n:[n]}var Tu=new Set,mn,Ho=(()=>{class n{_platform=l(oe);_nonce=l(Rn,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Gg}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&$g(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function $g(n,i){if(!Tu.has(n))try{mn||(mn=document.createElement("style"),i&&mn.setAttribute("nonce",i),mn.setAttribute("type","text/css"),document.head.appendChild(mn)),mn.sheet&&(mn.sheet.insertRule(`@media ${n} {body{ }}`,0),Tu.add(n))}catch(e){console.error(e)}}function Gg(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var pn=(()=>{class n{_mediaMatcher=l(Ho);_zone=l(O);_queries=new Map;_destroySubject=new y;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return ku(Xn(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=ku(Xn(e)).map(a=>this._registerQuery(a).observable),o=Dn(r);return o=Vr(o.pipe(he(1)),o.pipe(Ur(1),En(0))),o.pipe(C(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:c,query:d})=>{s.matches=s.matches||c,s.breakpoints[d]=c}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new xe(a=>{let s=c=>this._zone.run(()=>a.next(c));return t.addListener(s),()=>{t.removeListener(s)}}).pipe(Ce(t),C(({matches:a})=>({query:e,matches:a})),q(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ku(n){return n.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}var Wg=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ou=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=I({providers:[Wg]})}return n})();var Go=(()=>{class n{_platform=l(oe);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return Yg(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=qg(nv(e));if(t&&(Fu(t)===-1||!this.isVisible(t)))return!1;let r=e.nodeName.toLowerCase(),o=Fu(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!ev(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return tv(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function qg(n){try{return n.frameElement}catch{return null}}function Yg(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function Kg(n){let i=n.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function Xg(n){return Qg(n)&&n.type=="hidden"}function Zg(n){return Jg(n)&&n.hasAttribute("href")}function Qg(n){return n.nodeName.toLowerCase()=="input"}function Jg(n){return n.nodeName.toLowerCase()=="a"}function Pu(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let i=n.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function Fu(n){if(!Pu(n))return null;let i=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function ev(n){let i=n.nodeName.toLowerCase(),e=i==="input"&&n.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function tv(n){return Xg(n)?!1:Kg(n)||Zg(n)||n.hasAttribute("contenteditable")||Pu(n)}function nv(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var $o=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,t,r,o=!1,a){this._element=i,this._checker=e,this._ngZone=t,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){this._injector?ke(i,{injector:this._injector}):setTimeout(i)}},rl=(()=>{class n{_checker=l(Go);_ngZone=l(O);_document=l(R);_injector=l(U);constructor(){l(Qe).load(zo)}create(e,t=!1){return new $o(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Nu=new g("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Lu=new g("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),iv=0,cr=(()=>{class n{_ngZone=l(O);_defaultOptions=l(Lu,{optional:!0});_liveElement;_document=l(R);_sanitizer=l(Ui);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=l(Nu,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let r=this._defaultOptions,o,a;return t.length===1&&typeof t[0]=="number"?a=t[0]:[o,a]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Iu(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<t.length;o++)t[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${iv++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var rv=200,Wo=class{_letterKeyStream=new y;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new y;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:rv;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(fe(e=>this._pressedLetters.push(e)),En(i),Q(()=>this._pressedLetters.length>0),C(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Je(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Zn=class{_items;_activeItemIndex=se(-1);_activeItem=se(null);_wrap=!1;_typeaheadSubscription=ge.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof tn?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):nn(i)&&(this._effectRef=Mn(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new y;change=new y;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Wo(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||Je(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+i*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return nn(this._items)?this._items():this._items instanceof tn?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var mr=class extends Zn{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var pr=class extends Zn{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var ol={},Le=class n{_appId=l(Mi);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),ol.hasOwnProperty(i)||(ol[i]=0),`${i}${e?n._infix+"-":""}${ol[i]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})};var Vu=" ";function ju(n,i,e){let t=Uu(n,i);e=e.trim(),!t.some(r=>r.trim()===e)&&(t.push(e),n.setAttribute(i,t.join(Vu)))}function al(n,i,e){let t=Uu(n,i);e=e.trim();let r=t.filter(o=>o!==e);r.length?n.setAttribute(i,r.join(Vu)):n.removeAttribute(i)}function Uu(n,i){return n.getAttribute(i)?.match(/\S+/g)??[]}var Qn={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};function sl(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function me(n){return n==null?"":typeof n=="string"?n:`${n}px`}var ov=new g("cdk-dir-doc",{providedIn:"root",factory:()=>l(R)}),av=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function zu(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?av.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var Be=(()=>{class n{get value(){return this.valueSignal()}valueSignal=se("ltr");change=new $;constructor(){let e=l(ov,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(zu(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var gt=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(gt||{}),qo,gn;function Yo(){if(gn==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return gn=!1,gn;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)gn=!0;else{let n=Element.prototype.scrollTo;n?gn=!/\{\s*\[native code\]\s*\}/.test(n.toString()):gn=!1}}return gn}function Jn(){if(typeof document!="object"||!document)return gt.NORMAL;if(qo==null){let n=document.createElement("div"),i=n.style;n.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",n.appendChild(e),document.body.appendChild(n),qo=gt.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,qo=n.scrollLeft===0?gt.NEGATED:gt.INVERTED),n.remove()}return qo}var ee=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=I({})}return n})();var sv=20,vn=(()=>{class n{_ngZone=l(O);_platform=l(oe);_renderer=l(Ue).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new y;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=sv){return this._platform.isBrowser?new xe(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Xa(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):b()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(Q(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_scrollableContainsElement(e,t){let r=yt(t),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ei=(()=>{class n{elementRef=l(P);scrollDispatcher=l(vn);ngZone=l(O);dir=l(Be,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new y;_renderer=l(Ee);_cleanupScroll;_elementScrolled=new y;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&Jn()!=gt.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),Jn()==gt.INVERTED?e.left=e.right:Jn()==gt.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;Yo()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:t:e=="end"&&(e=a?t:r),a&&Jn()==gt.INVERTED?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&Jn()==gt.NEGATED?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),lv=20,wt=(()=>{class n{_platform=l(oe);_listeners;_viewportSize=null;_change=new y;_document=l(R);constructor(){let e=l(O),t=l(Ue).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=lv){return e>0?this._change.pipe(Xa(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var It=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=I({})}return n})(),ll=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=I({imports:[ee,It,ee,It]})}return n})();var gr=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},ti=class extends gr{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,t,r,o){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null}},Tt=class extends gr{templateRef;viewContainerRef;context;injector;constructor(i,e,t,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},cl=class extends gr{element;constructor(i){super(),this.element=i instanceof P?i.nativeElement:i}},ni=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof ti)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Tt)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof cl)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},vr=class extends ni{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,r=t.get(Xr,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=i.injector||this._defaultInjector||U.NULL,o=r.get(Pe,t.injector);e=Qr(i.component,{elementInjector:r,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var dl=(()=>{class n extends ni{_moduleRef=l(Xr,{optional:!0});_document=l(R);_viewContainerRef=l(et);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new $;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[ve]})}return n})(),ul=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=I({})}return n})();var Hu=Yo();function Xu(n){return new Ko(n.get(wt),n.get(R))}var Ko=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=me(-this._previousScrollPosition.left),i.style.top=me(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,r=e.style,o=t.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),Hu&&(t.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Hu&&(t.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Zu(n,i){return new Xo(n.get(vn),n.get(O),n.get(wt),i)}var Xo=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,r){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(Q(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var _r=class{enable(){}disable(){}attach(){}};function hl(n,i){return i.some(e=>{let t=n.bottom<e.top,r=n.top>e.bottom,o=n.right<e.left,a=n.left>e.right;return t||r||o||a})}function $u(n,i){return i.some(e=>{let t=n.top<e.top,r=n.bottom>e.bottom,o=n.left<e.left,a=n.right>e.right;return t||r||o||a})}function bn(n,i){return new Zo(n.get(vn),n.get(wt),n.get(O),i)}var Zo=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,r){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:r}=this._viewportRuler.getViewportSize();hl(e,[{width:t,height:r,bottom:r,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Qu=(()=>{class n{_injector=l(U);constructor(){}noop=()=>new _r;close=e=>Zu(this._injector,e);block=()=>Xu(this._injector);reposition=e=>bn(this._injector,e);static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),kt=class{positionStrategy;scrollStrategy=new _r;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var Qo=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var Ju=(()=>{class n{_attachedOverlays=[];_document=l(R);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),eh=(()=>{class n extends Ju{_ngZone=l(O);_renderer=l(Ue).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let o=t[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ye(n)))(r||n)}})();static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),th=(()=>{class n extends Ju{_platform=l(oe);_ngZone=l(O);_renderer=l(Ue).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,r),o.listen(t,"click",this._clickListener,r),o.listen(t,"auxclick",this._clickListener,r),o.listen(t,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Oe(e)};_clickListener=e=>{let t=Oe(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,c))){if(Gu(s.overlayElement,t)||Gu(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ye(n)))(r||n)}})();static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Gu(n,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var nh=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),ih=(()=>{class n{_platform=l(oe);_containerElement;_document=l(R);_styleLoader=l(Qe);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||sl()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let t=this._document.createElement("div");t.classList.add(e),sl()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(nh)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),fl=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,r){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function ml(n){return n&&n.nodeType===1}var Jo=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new y;_attachments=new y;_detachments=new y;_positionStrategy;_scrollStrategy;_locationChanges=ge.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new y;_outsidePointerEvents=new y;_afterNextRenderRef;constructor(i,e,t,r,o,a,s,c,d,u=!1,m,x){this._portalOutlet=i,this._host=e,this._pane=t,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=c,this._outsideClickDispatcher=d,this._animationsDisabled=u,this._injector=m,this._renderer=x,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=ke(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=f(f({},this._config),i),this._updateElementSize()}setDirection(i){this._config=W(f({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=me(this._config.width),i.height=me(this._config.height),i.minWidth=me(this._config.minWidth),i.minHeight=me(this._config.minHeight),i.maxWidth=me(this._config.maxWidth),i.maxHeight=me(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;ml(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new fl(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let r=Xn(e||[]).filter(o=>!!o);r.length&&(t?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=ke(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},Wu="cdk-overlay-connected-position-bounding-box",cv=/([A-Za-z%]+)$/;function br(n,i){return new ea(i,n.get(wt),n.get(R),n.get(oe),n.get(ih))}var ea=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new y;_resizeSubscription=ge.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,r,o){this._viewportRuler=e,this._document=t,this._platform=r,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(Wu),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let c=this._getOriginPoint(i,r,s),d=this._getOverlayPoint(c,e,s),u=this._getOverlayFit(d,e,t,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(u,d,t)){o.push({position:s,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:d,originPoint:c,position:s,overlayRect:e})}if(o.length){let s=null,c=-1;for(let d of o){let u=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);u>c&&(c=u,s=d)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&_n(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Wu),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof P?this._origin.nativeElement:ml(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let r;if(t.originX=="center")r=i.left+i.width/2;else{let a=this._isRtl()?i.right:i.left,s=this._isRtl()?i.left:i.right;r=t.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return t.originY=="center"?o=i.top+i.height/2:o=t.originY=="top"?i.top:i.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(i,e,t){let r;t.overlayX=="center"?r=-e.width/2:t.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:i.x+r,y:i.y+o}}_getOverlayFit(i,e,t,r){let o=Yu(e),{x:a,y:s}=i,c=this._getOffset(r,"x"),d=this._getOffset(r,"y");c&&(a+=c),d&&(s+=d);let u=0-a,m=a+o.width-t.width,x=0-s,G=s+o.height-t.height,X=this._subtractOverflows(o.width,u,m),Z=this._subtractOverflows(o.height,x,G),H=X*Z;return{visibleArea:H,isCompletelyWithinViewport:o.width*o.height===H,fitsInViewportVertically:Z===o.height,fitsInViewportHorizontally:X==o.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let r=t.bottom-e.y,o=t.right-e.x,a=qu(this._overlayRef.getConfig().minHeight),s=qu(this._overlayRef.getConfig().minWidth),c=i.fitsInViewportVertically||a!=null&&a<=r,d=i.fitsInViewportHorizontally||s!=null&&s<=o;return c&&d}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let r=Yu(e),o=this._viewportRect,a=Math.max(i.x+r.width-o.width,0),s=Math.max(i.y+r.height-o.height,0),c=Math.max(o.top-t.top-i.y,0),d=Math.max(o.left-t.left-i.x,0),u=0,m=0;return r.width<=o.width?u=d||-a:u=i.x<this._getViewportMarginStart()?o.left-t.left-i.x:0,r.height<=o.height?m=c||-s:m=i.y<this._getViewportMarginTop()?o.top-t.top-i.y:0,this._previousPushAmount={x:u,y:m},{x:i.x+u,y:i.y+m}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!dv(this._lastScrollVisibility,t)){let r=new Qo(i,t);this._positionChanges.next(r)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,r=i.overlayY;i.overlayX==="center"?t="center":this._isRtl()?t=i.overlayX==="start"?"right":"left":t=i.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${r}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=i.y,o=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-s+this._getViewportMarginTop();else{let G=Math.min(t.bottom-i.y+t.top,i.y),X=this._lastBoundingBoxSize.height;o=G*2,a=i.y-G,o>X&&!this._isInitialRender&&!this._growAfterOpen&&(a=i.y-X/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,d=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,m,x;if(d)x=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=i.x-this._getViewportMarginStart();else if(c)m=i.x,u=t.right-i.x-this._getViewportMarginEnd();else{let G=Math.min(t.right-i.x+t.left,i.x),X=this._lastBoundingBoxSize.width;u=G*2,m=i.x-G,u>X&&!this._isInitialRender&&!this._growAfterOpen&&(m=i.x-X/2)}return{top:a,left:m,bottom:s,right:x,width:u,height:o}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=me(t.width),r.height=me(t.height),r.top=me(t.top)||"auto",r.bottom=me(t.bottom)||"auto",r.left=me(t.left)||"auto",r.right=me(t.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=me(o)),a&&(r.maxWidth=me(a))}this._lastBoundingBoxSize=t,_n(this._boundingBox.style,r)}_resetBoundingBoxStyles(){_n(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){_n(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let t={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();_n(t,this._getExactOverlayY(e,i,u)),_n(t,this._getExactOverlayX(e,i,u))}else t.position="static";let s="",c=this._getOffset(e,"x"),d=this._getOffset(e,"y");c&&(s+=`translateX(${c}px) `),d&&(s+=`translateY(${d}px)`),t.transform=s.trim(),a.maxHeight&&(r?t.maxHeight=me(a.maxHeight):o&&(t.maxHeight="")),a.maxWidth&&(r?t.maxWidth=me(a.maxWidth):o&&(t.maxWidth="")),_n(this._pane.style,t)}_getExactOverlayY(i,e,t){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),i.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=me(o.y);return r}_getExactOverlayX(i,e,t){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let a;if(this._isRtl()?a=i.overlayX==="end"?"left":"right":a=i.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=me(o.x);return r}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:$u(i,t),isOriginOutsideView:hl(i,t),isOverlayClipped:$u(e,t),isOverlayOutsideView:hl(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,r)=>t-Math.max(r,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&Xn(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof P)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let t=e.getBoundingClientRect();return i&&(e.style.display=""),t}};function _n(n,i){for(let e in i)i.hasOwnProperty(e)&&(n[e]=i[e]);return n}function qu(n){if(typeof n!="number"&&n!=null){let[i,e]=n.split(cv);return!e||e==="px"?parseFloat(i):null}return n||null}function Yu(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function dv(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var Ku="cdk-global-overlay-wrapper";function na(n){return new ta}var ta=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(Ku),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=t,c=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),d=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),u=this._xPosition,m=this._xOffset,x=this._overlayRef.getConfig().direction==="rtl",G="",X="",Z="";c?Z="flex-start":u==="center"?(Z="center",x?X=m:G=m):x?u==="left"||u==="end"?(Z="flex-end",G=m):(u==="right"||u==="start")&&(Z="flex-start",X=m):u==="left"||u==="start"?(Z="flex-start",G=m):(u==="right"||u==="end")&&(Z="flex-end",X=m),i.position=this._cssPosition,i.marginLeft=c?"0":G,i.marginTop=d?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=c?"0":X,e.justifyContent=Z,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Ku),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},rh=(()=>{class n{_injector=l(U);constructor(){}global(){return na()}flexibleConnectedTo(e){return br(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),yr=new g("OVERLAY_DEFAULT_CONFIG");function yn(n,i){n.get(Qe).load(nh);let e=n.get(ih),t=n.get(R),r=n.get(Le),o=n.get(tt),a=n.get(Be),s=n.get(Ee,null,{optional:!0})||n.get(Ue).createRenderer(null,null),c=new kt(i),d=n.get(yr,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,"showPopover"in t.body?c.usePopover=i?.usePopover??d:c.usePopover=!1;let u=t.createElement("div"),m=t.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),m.appendChild(u),c.usePopover&&(m.setAttribute("popover","manual"),m.classList.add("cdk-overlay-popover"));let x=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return ml(x)?x.after(m):x?.type==="parent"?x.element.appendChild(m):e.getContainerElement().appendChild(m),new Jo(new vr(u,o,n),m,u,c,n.get(O),n.get(eh),t,n.get(Ht),n.get(th),i?.disableAnimations??n.get(An,null,{optional:!0})==="NoopAnimations",n.get(Pe),s)}var oh=(()=>{class n{scrollStrategies=l(Qu);_positionBuilder=l(rh);_injector=l(U);constructor(){}create(e){return yn(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),uv=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],hv=new g("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(U);return()=>bn(n)}}),ii=(()=>{class n{elementRef=l(P);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return n})(),ah=new g("cdk-connected-overlay-default-config"),ia=(()=>{class n{_dir=l(Be,{optional:!0});_injector=l(U);_overlayRef;_templatePortal;_backdropSubscription=ge.EMPTY;_attachSubscription=ge.EMPTY;_detachSubscription=ge.EMPTY;_positionSubscription=ge.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=l(hv);_ngZone=l(O);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new $;positionChange=new $;attach=new $;detach=new $;overlayKeydown=new $;overlayOutsideClick=new $;constructor(){let e=l(st),t=l(et),r=l(ah,{optional:!0}),o=l(yr,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new Tt(e,t),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=uv);let e=this._overlayRef=yn(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!Je(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let r=this._getOriginElement(),o=Oe(t);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new kt({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=br(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof ii?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof ii?this.origin.elementRef.nativeElement:this.origin instanceof P?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(zr(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",K],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",K],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",K],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",K],push:[2,"cdkConnectedOverlayPush","push",K],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",K],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",K],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[qe]})}return n})(),oi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=I({providers:[oh],imports:[ee,ul,ll,ll]})}return n})();var fv=new g("MATERIAL_ANIMATIONS"),sh=null;function mv(){return l(fv,{optional:!0})?.animationsDisabled||l(An,{optional:!0})==="NoopAnimations"?"di-disabled":(sh??=l(Ho).matchMedia("(prefers-reduced-motion)").matches,sh?"reduced-motion":"enabled")}function be(){return mv()!=="enabled"}function ht(n){return n!=null&&`${n}`!="false"}var ft=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(ft||{}),pl=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ft.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},lh=Kn({passive:!0,capture:!0}),gl=class{_events=new Map;addHandler(i,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,lh)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,lh)))}_delegateEventHandler=i=>{let e=Oe(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(i))})}},wr={enterDuration:225,exitDuration:150},pv=800,ch=Kn({passive:!0,capture:!0}),dh=["mousedown","touchstart"],uh=["mouseup","mouseleave","touchend","touchcancel"],gv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),Cr=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new gl;constructor(i,e,t,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=yt(t)),o&&o.get(Qe).load(gv)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=f(f({},wr),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||vv(i,e,r),s=i-r.left,c=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${c-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let m=window.getComputedStyle(u),x=m.transitionProperty,G=m.transitionDuration,X=x==="none"||G==="0s"||G==="0s, 0s"||r.width===0&&r.height===0,Z=new pl(this,u,t,X);u.style.transform="scale3d(1, 1, 1)",Z.state=ft.FADING_IN,t.persistent||(this._mostRecentTransientRipple=Z);let H=null;return!X&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let te=()=>{H&&(H.fallbackTimer=null),clearTimeout($e),this._finishRippleTransition(Z)},pe=()=>this._destroyRipple(Z),$e=setTimeout(pe,d+100);u.addEventListener("transitionend",te),u.addEventListener("transitioncancel",pe),H={onTransitionEnd:te,onTransitionCancel:pe,fallbackTimer:$e}}),this._activeRipples.set(Z,H),(X||!d)&&this._finishRippleTransition(Z),Z}fadeOutRipple(i){if(i.state===ft.FADING_OUT||i.state===ft.HIDDEN)return;let e=i.element,t=f(f({},wr),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=ft.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=yt(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,dh.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{uh.forEach(e=>{this._triggerElement.addEventListener(e,this,ch)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===ft.FADING_IN?this._startFadeOutTransition(i):i.state===ft.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=ft.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=ft.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=un(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+pv;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!hn(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===ft.VISIBLE||i.config.terminateOnPointerUp&&i.state===ft.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(dh.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(uh.forEach(e=>i.removeEventListener(e,this,ch)),this._pointerUpEventsRegistered=!1))}};function vv(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var vl=new g("mat-ripple-global-options"),ra=(()=>{class n{_elementRef=l(P);_animationsDisabled=be();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=l(O),t=l(oe),r=l(vl,{optional:!0}),o=l(U);this._globalOptions=r||{},this._rippleRenderer=new Cr(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:f(f(f({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,f(f({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,f(f({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&F("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var _v={capture:!0},bv=["focus","mousedown","mouseenter","touchstart"],_l="mat-ripple-loader-uninitialized",bl="mat-ripple-loader-class-name",hh="mat-ripple-loader-centered",oa="mat-ripple-loader-disabled",fh=(()=>{class n{_document=l(R);_animationsDisabled=be();_globalRippleOptions=l(vl,{optional:!0});_platform=l(oe);_ngZone=l(O);_injector=l(U);_eventCleanups;_hosts=new Map;constructor(){let e=l(Ue).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>bv.map(t=>e.listen(this._document,t,this._onInteraction,_v)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(_l,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(bl))&&e.setAttribute(bl,t.className||""),t.centered&&e.setAttribute(hh,""),t.disabled&&e.setAttribute(oa,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(oa,""):e.removeAttribute(oa)}_onInteraction=e=>{let t=Oe(e);if(t instanceof HTMLElement){let r=t.closest(`[${_l}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(bl)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??wr.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??wr.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(oa),rippleConfig:{centered:e.hasAttribute(hh),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new Cr(s,this._ngZone,t,this._platform,this._injector),d=!s.rippleDisabled;d&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:d}),e.removeAttribute(_l)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ai=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var yv=["mat-icon-button",""],wv=["*"],Cv=new g("MAT_BUTTON_CONFIG");function mh(n){return n==null?void 0:Ti(n)}var yl=(()=>{class n{_elementRef=l(P);_ngZone=l(O);_animationsDisabled=be();_config=l(Cv,{optional:!0});_focusMonitor=l(Yt);_cleanupClick;_renderer=l(Ee);_rippleLoader=l(fh);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){l(Qe).load(ai);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,r){t&2&&(re("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),ct(r.color?"mat-"+r.color:""),F("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",K],disabled:[2,"disabled","disabled",K],ariaDisabled:[2,"aria-disabled","ariaDisabled",K],disabledInteractive:[2,"disabledInteractive","disabledInteractive",K],tabIndex:[2,"tabIndex","tabIndex",mh],_tabindex:[2,"tabindex","_tabindex",mh]}})}return n})(),Dr=(()=>{class n extends yl{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ve],attrs:yv,ngContentSelectors:wv,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(J(),lt(0,"span",0),A(1),lt(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var si=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=I({imports:[ee]})}return n})();var Dv=["matButton",""],xv=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Sv=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var ph=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),aa=(()=>{class n extends yl{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Ev(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?ph.get(this._appearance):null,o=ph.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ve],attrs:Dv,ngContentSelectors:Sv,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(J(xv),lt(0,"span",0),A(1),ze(2,"span",1),A(3,1),Xe(),A(4,2),lt(5,"span",2)(6,"span",3)),t&2&&F("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function Ev(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var wn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=I({imports:[si,ee]})}return n})();function Mv(n,i){if(n&1){let e=nt();p(0,"div",1)(1,"button",2),ae("click",function(){Ie(e);let r=E();return Te(r.action())}),w(2),_()()}if(n&2){let e=E();h(2),Y(" ",e.data.action," ")}}var Av=["label"];function Rv(n,i){}var Iv=Math.pow(2,31)-1,xr=class{_overlayRef;instance;containerInstance;_afterDismissed=new y;_afterOpened=new y;_onAction=new y;_durationTimeoutId;_dismissedByAction=!1;constructor(i,e){this._overlayRef=e,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,Iv))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},gh=new g("MatSnackBarData"),li=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Tv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),kv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),Ov=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),Fv=(()=>{class n{snackBarRef=l(xr);data=l(gh);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,r){t&1&&(p(0,"div",0),w(1),_(),L(2,Mv,3,1,"div",1)),t&2&&(h(),Y(" ",r.data.message,`
`),h(),B(r.hasAction?2:-1))},dependencies:[aa,Tv,kv,Ov],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Cl="_mat-snack-bar-enter",Dl="_mat-snack-bar-exit",Pv=(()=>{class n extends ni{_ngZone=l(O);_elementRef=l(P);_changeDetectorRef=l(ue);_platform=l(oe);_animationsDisabled=be();snackBarConfig=l(li);_document=l(R);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=l(U);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new y;_onExit=new y;_onEnter=new y;_animationState="void";_live;_label;_role;_liveElementId=l(Le).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Dl?this._completeExit():e===Cl&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?ke(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Cl)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Cl)},200)))}exit(){return this._destroyed?b(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?ke(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Dl)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Dl),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(a=>e.classList.add(a)):e.classList.add(t)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let r=t.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(t&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(o=document.activeElement),t.removeAttribute("aria-hidden"),r.appendChild(t),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,r){if(t&1&&He(dl,7)(Av,7),t&2){let o;V(o=j())&&(r._portalOutlet=o.first),V(o=j())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,r){t&1&&ae("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),t&2&&F("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[ve],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(p(0,"div",1)(1,"div",2,0)(3,"div",3),vt(4,Rv,0,0,"ng-template",4),_(),le(5,"div"),_()()),t&2&&(h(5),re("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[dl],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return n})(),Nv=new g("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new li}),vh=(()=>{class n{_live=l(cr);_injector=l(U);_breakpointObserver=l(pn);_parentSnackBar=l(n,{optional:!0,skipSelf:!0});_defaultConfig=l(Nv);_animationsDisabled=be();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Fv;snackBarContainerComponent=Pv;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",r){let o=f(f({},this._defaultConfig),r);return o.data={message:e,action:t},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let r=t&&t.viewContainerRef&&t.viewContainerRef.injector,o=U.create({parent:r||this._injector,providers:[{provide:li,useValue:t}]}),a=new ti(this.snackBarContainerComponent,t.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=t,s.instance}_attach(e,t){let r=f(f(f({},new li),this._defaultConfig),t),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new xr(a,o);if(e instanceof st){let c=new Tt(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(c)}else{let c=this._createInjector(r,s),d=new ti(e,void 0,c),u=a.attachComponentPortal(d);s.instance=u.instance}return this._breakpointObserver.observe(Qn.HandsetPortrait).pipe(q(o.detachments())).subscribe(c=>{o.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new kt;t.direction=e.direction;let r=na(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),t.positionStrategy=r,t.disableAnimations=this._animationsDisabled,yn(this._injector,t)}_createInjector(e,t){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return U.create({parent:r||this._injector,providers:[{provide:xr,useValue:t},{provide:gh,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var xl="Service workers are disabled or not supported by this browser",ci=class{serviceWorker;worker;registration;events;constructor(i,e){if(this.serviceWorker=i,!i)this.worker=this.events=this.registration=new xe(t=>t.error(new k(5601,!1)));else{let t=null,r=new y;this.worker=new xe(d=>(t!==null&&d.next(t),r.subscribe(u=>d.next(u))));let o=()=>{let{controller:d}=i;d!==null&&(t=d,r.next(t))};i.addEventListener("controllerchange",o),o(),this.registration=this.worker.pipe(ie(()=>i.getRegistration().then(d=>{if(!d)throw new k(5601,!1);return d})));let a=new y;this.events=a.asObservable();let s=d=>{let{data:u}=d;u?.type&&a.next(u)};i.addEventListener("message",s),e?.get(tt,null,{optional:!0})?.onDestroy(()=>{i.removeEventListener("controllerchange",o),i.removeEventListener("message",s)})}}postMessage(i,e){return new Promise(t=>{this.worker.pipe(he(1)).subscribe(r=>{r.postMessage(f({action:i},e)),t()})})}postMessageWithOperation(i,e,t){let r=this.waitForOperationCompleted(t),o=this.postMessage(i,e);return Promise.all([o,r]).then(([,a])=>a)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(i){let e;return typeof i=="string"?e=t=>t.type===i:e=t=>i.includes(t.type),this.events.pipe(Q(e))}nextEventOfType(i){return this.eventsOfType(i).pipe(he(1))}waitForOperationCompleted(i){return new Promise((e,t)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(Q(r=>r.nonce===i),he(1),C(r=>{if(r.result!==void 0)return r.result;throw new Error(r.error)})).subscribe({next:e,error:t})})}get isEnabled(){return!!this.serviceWorker}},Lv=(()=>{class n{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new y;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=Pt,this.notificationClicks=Pt,this.notificationCloses=Pt,this.pushSubscriptionChanges=Pt,this.subscription=Pt;return}this.messages=this.sw.eventsOfType("PUSH").pipe(C(r=>r.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(C(r=>r.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(C(r=>r.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(C(r=>r.data)),this.pushManager=this.sw.registration.pipe(C(r=>r.pushManager));let t=this.pushManager.pipe(ie(r=>r.getSubscription()));this.subscription=new xe(r=>{let o=t.subscribe(r),a=this.subscriptionChanges.subscribe(r);return()=>{o.unsubscribe(),a.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(xl));let t={userVisibleOnly:!0},r=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(r.length));for(let a=0;a<r.length;a++)o[a]=r.charCodeAt(a);return t.applicationServerKey=o,new Promise((a,s)=>{this.pushManager.pipe(ie(c=>c.subscribe(t)),he(1)).subscribe({next:c=>{this.subscriptionChanges.next(c),a(c)},error:s})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(xl));let e=t=>{if(t===null)throw new k(5602,!1);return t.unsubscribe().then(r=>{if(!r)throw new k(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((t,r)=>{this.subscription.pipe(he(1),ie(e)).subscribe({next:t,error:r})})}decodeBase64(e){return atob(e)}static \u0275fac=function(t){return new(t||n)(S(ci))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),Sl=(()=>{class n{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=Pt,this.unrecoverable=Pt;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(xl));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new k(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(t){return new(t||n)(S(ci))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),bh=new g("");function Bv(){let n=l(Sr);if(!("serviceWorker"in navigator&&n.enabled!==!1))return;let i=l(bh),e=l(O),t=l(tt);e.runOutsideAngular(()=>{let r=navigator.serviceWorker,o=()=>r.controller?.postMessage({action:"INITIALIZE"});r.addEventListener("controllerchange",o),t.onDestroy(()=>{r.removeEventListener("controllerchange",o)})}),e.runOutsideAngular(()=>{let r,{registrationStrategy:o}=n;if(typeof o=="function")r=new Promise(a=>o().subscribe(()=>a()));else{let[a,...s]=(o||"registerWhenStable:30000").split(":");switch(a){case"registerImmediately":r=Promise.resolve();break;case"registerWithDelay":r=_h(+s[0]||0);break;case"registerWhenStable":r=Promise.race([t.whenStable(),_h(+s[0])]);break;default:throw new k(5600,!1)}}r.then(()=>{t.destroyed||navigator.serviceWorker.register(i,{scope:n.scope,updateViaCache:n.updateViaCache,type:n.type}).catch(a=>console.error(Jt(5604,!1)))})})}function _h(n){return new Promise(i=>setTimeout(i,n))}function Vv(){let n=l(Sr),i=l(U),e=!0;return new ci(e&&n.enabled!==!1?navigator.serviceWorker:void 0,i)}var Sr=class{enabled;updateViaCache;type;scope;registrationStrategy};function yh(n,i={}){return Re([Lv,Sl,{provide:bh,useValue:n},{provide:Sr,useValue:i},{provide:ci,useFactory:Vv},os(Bv)])}function El(n){n||(n=l(mt));let i=new xe(e=>{if(n.destroyed){e.next();return}return n.onDestroy(e.next.bind(e))});return e=>e.pipe(q(i))}var Rl=class{translations;constructor(i){this.translations=i}getTranslation(i){return b(this.translations.get(i)||{})}},Dh=new g("");function Ml(n,i){return n&&(Object.prototype.hasOwnProperty.call(n,i)?n[i]:i.split(".").reduce((e,t)=>e?.[t],n))}function jv(n,i,e){n=f({},n);let t=i.split("."),r=t.length-1;return t.reduce((o,a,s)=>(s===r?o[a]=e:o[a]=Array.isArray(o[a])?o[a].slice():f({},o[a]),o&&o[a]),n),n}function xh(n){return n?Array.isArray(n)?n.length:ca(n)?Object.keys(n).length:n?n.length:0:0}function Uv(n){return xh(n)===0}function zv(n){return typeof n=="function"}function ui(n){return typeof n=="string"}function ca(n){return!!n&&typeof n=="object"&&!Array.isArray(n)}function Sh(n){return n.replace(/(?:^\w|[A-Z]|\b\w)/g,(i,e)=>e==0?i.toLowerCase():i.toUpperCase()).replace(/\s+|_|-|\//g,"")}function Eh(){return typeof window<"u"}function Il(n){return n==null}function wh(n){return Il(n)===!1}function Mh(n){return n&&typeof n.scope=="string"}function Hv(n){return n&&ca(n.loader)}function Ch(n){let i={};function e(t,r){if(t===null)i[r]=null;else if(ca(t))for(let[o,a]of Object.entries(t))e(a,r?`${r}.${o}`:o);else i[r]=t}return e(n,""),i}function $v(n){let i={};for(let[e,t]of Object.entries(n)){let r=e.split("."),o=i;r.forEach((a,s)=>{s===r.length-1?o[a]=t:(o[a]??={},o=o[a])})}return i}var hi=new g("",{providedIn:"root",factory:()=>di}),di={defaultLang:"en",reRenderOnLangChange:!1,prodMode:!1,failedRetries:2,fallbackLang:[],availableLangs:[],missingHandler:{logMissingKey:!0,useFallbackTranslation:!1,allowEmpty:!1},flatten:{aot:!1},interpolation:["{{","}}"],scopes:{keepCasing:!1}};function Gv(n={}){return W(f(f({},di),n),{missingHandler:f(f({},di.missingHandler),n.missingHandler),flatten:f(f({},di.flatten),n.flatten),scopes:f(f({},di.scopes),n.scopes)})}var Ah=new g(""),Wv=(()=>{class n{config=l(hi,{optional:!0})??di;get interpolationMatcher(){return qv(this.config)}transpile({value:e,params:t={},translation:r,key:o}){if(ui(e)){let a,s=e;for(;(a=this.interpolationMatcher.exec(s))!==null;){let[c,d]=a;s=s.replace(c,()=>{let u=d.trim(),m=Ml(t,u);return wh(m)?m:wh(r[u])?this.transpile({params:t,translation:r,key:o,value:r[u]}):""})}return s}else t&&(ca(e)?e=this.handleObject({value:e,params:t,translation:r,key:o}):Array.isArray(e)&&(e=this.handleArray({value:e,params:t,translation:r,key:o})));return e}handleObject({value:e,params:t={},translation:r,key:o}){let a=e;return Object.keys(t).forEach(s=>{let c=this.transpile({value:Ml(a,s),params:Ml(t,s),translation:r,key:o});a=jv(a,s,c)}),a}handleArray(r){var o=r,{value:e}=o,t=Ka(o,["value"]);return e.map(a=>this.transpile(f({value:a},t)))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})();function qv(n){let[i,e]=n.interpolation;return new RegExp(`${i}([^${i}${e}]*?)${e}`,"g")}var Rh=new g(""),Yv=(()=>{class n{handle(e,t){if(t.missingHandler.logMissingKey&&!t.prodMode){let r=`Missing translation for '${e}'`;console.warn(`%c ${r}`,"font-size: 12px; color: red")}return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),Ih=new g(""),Kv=(()=>{class n{preSaveTranslation(e){return e}preSaveTranslationKey(e,t){return t}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),Th=new g(""),Xv=(()=>{class n{userConfig;constructor(e){this.userConfig=e}getNextLangs(){let e=this.userConfig.fallbackLang;if(!e)throw new Error("When using the default fallback, a fallback language must be provided in the config!");return Array.isArray(e)?e:[e]}static \u0275fac=function(t){return new(t||n)(S(hi))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})();function Er(n){if(!n)return"";let i=n.split("/");return i.pop(),i.join("/")}function Kt(n){return n?n.split("/").pop():""}function Tl(n,i,e="|"){if(ui(n)){let t=n.split(e),r=t.pop();return r===i?[!0,t.toString()]:[!1,r]}return[!1,""]}function kh(n,i){let[e]=Tl(i,"static");return e?!1:!!n.config.reRenderOnLangChange}function Oh(n){return n?i=>i:he(1)}function Zv(n,i){return Object.keys(n).reduce((e,t)=>(e[`${i}/${t}`]=n[t],e),{})}function Ol(n,i){return Hv(n)?Zv(n.loader,i):void 0}function Al(n){return{scope:Er(n)||null,langName:Kt(n)}}function Fh(n){let{path:i,inlineLoader:e,mainLoader:t,data:r}=n;if(e){let o=e[i];if(zv(o)===!1)throw`You're using an inline loader but didn't provide a loader for ${i}`;return e[i]().then(a=>a.default?a.default:a)}return t.getTranslation(i,r)}function Qv({mainLoader:n,path:i,data:e,fallbackPath:t,inlineLoader:r}){return(t?[i,t]:[i]).map(a=>{let s=Fh({path:a,mainLoader:n,inlineLoader:r,data:e});return ye(s).pipe(C(c=>({translation:c,lang:a})))})}var Jv;var fi=(()=>{class n{loader;parser;missingHandler;interceptor;fallbackStrategy;langChanges$;translations=new Map;cache=new Map;firstFallbackLang;defaultLang="";availableLangs=[];isResolvedMissingOnce=!1;lang;failedLangs=new Set;events=new y;events$=this.events.asObservable();config;destroyRef=l(mt);constructor(e,t,r,o,a,s){this.loader=e,this.parser=t,this.missingHandler=r,this.interceptor=o,this.fallbackStrategy=s,this.loader||(this.loader=new Rl(this.translations)),Jv=this,this.config=JSON.parse(JSON.stringify(a)),this.setAvailableLangs(this.config.availableLangs||[]),this.setFallbackLangForMissingTranslation(this.config),this.setDefaultLang(this.config.defaultLang),this.lang=new Fe(this.getDefaultLang()),this.langChanges$=this.lang.asObservable(),this.events$.subscribe(c=>{c.type==="translationLoadSuccess"&&c.wasFailure&&this.setActiveLang(c.payload.langName)}),this.destroyRef.onDestroy(()=>{this.lang.complete(),this.events.complete(),this.cache.clear()})}getDefaultLang(){return this.defaultLang}setDefaultLang(e){this.defaultLang=e}getActiveLang(){return this.lang.getValue()}setActiveLang(e){return this.parser.onLangChanged?.(e),this.lang.next(e),this.events.next({type:"langChanged",payload:Al(e)}),this}setAvailableLangs(e){this.availableLangs=e}getAvailableLangs(){return this.availableLangs}load(e,t={}){let r=this.cache.get(e);if(r)return r;let o,a=this._isLangScoped(e),s;a&&(s=Er(e));let c={path:e,mainLoader:this.loader,inlineLoader:t.inlineLoader,data:a?{scope:s}:void 0};if(this.useFallbackTranslation(e)){let u=a?`${s}/${this.firstFallbackLang}`:this.firstFallbackLang,m=Qv(W(f({},c),{fallbackPath:u}));o=Ft(m)}else{let u=Fh(c);o=ye(u)}let d=o.pipe(bc(this.config.failedRetries),fe(u=>{if(Array.isArray(u)){u.forEach(m=>{this.handleSuccess(m.lang,m.translation),m.lang!==e&&this.cache.set(m.lang,b({}))});return}this.handleSuccess(e,u)}),Ct(u=>(this.config.prodMode||console.error(`Error while trying to load "${e}"`,u),this.handleFailure(e,t))),Ei(1),El(this.destroyRef));return this.cache.set(e,d),d}translate(e,t={},r=this.getActiveLang()){if(!e)return e;let{scope:o,resolveLang:a}=this.resolveLangAndScope(r);if(Array.isArray(e))return e.map(d=>this.translate(o?`${o}.${d}`:d,t,a));e=o?`${o}.${e}`:e;let s=this.getTranslation(a),c=s[e];return c?this.parser.transpile({value:c,params:t,translation:s,key:e}):this._handleMissingKey(e,c,t)}selectTranslate(e,t,r,o=!1){let a,s=(d,u)=>this.load(d,u).pipe(C(()=>o?this.translateObject(e,t,d):this.translate(e,t,d)));if(Il(r))return this.langChanges$.pipe(ie(d=>s(d)));if(r=Array.isArray(r)?r[0]:r,Mh(r)){let d=r;r=d.scope,a=Ol(d,d.scope)}if(r=r,this.isLang(r)||this.isScopeWithLang(r))return s(r);let c=r;return this.langChanges$.pipe(ie(d=>s(`${c}/${d}`,{inlineLoader:a})))}isScopeWithLang(e){return this.isLang(Kt(e))}translateObject(e,t={},r=this.getActiveLang()){if(ui(e)||Array.isArray(e)){let{resolveLang:a,scope:s}=this.resolveLangAndScope(r);if(Array.isArray(e))return e.map(u=>this.translateObject(s?`${s}.${u}`:u,t,a));let c=this.getTranslation(a);e=s?`${s}.${e}`:e;let d=$v(this.getObjectByKey(c,e));return Uv(d)?this.translate(e,t,r):this.parser.transpile({value:d,params:t,translation:c,key:e})}let o=[];for(let[a,s]of this.getEntries(e))o.push(this.translateObject(a,s,r));return o}selectTranslateObject(e,t,r){if(ui(e)||Array.isArray(e))return this.selectTranslate(e,t,r,!0);let[[o,a],...s]=this.getEntries(e);return this.selectTranslateObject(o,a,r).pipe(C(c=>{let d=[c];for(let[u,m]of s)d.push(this.translateObject(u,m,r));return d}))}getTranslation(e){if(e){if(this.isLang(e))return this.translations.get(e)||{};{let{scope:t,resolveLang:r}=this.resolveLangAndScope(e),o=this.translations.get(r)||{};return this.getObjectByKey(o,t)}}return this.translations}selectTranslation(e){let t=this.langChanges$;if(e){let r=Kt(e)!==e;this.isLang(e)||r?t=b(e):t=this.langChanges$.pipe(C(o=>`${e}/${o}`))}return t.pipe(ie(r=>this.load(r).pipe(C(()=>this.getTranslation(r)))))}setTranslation(e,t=this.getActiveLang(),r={}){let a=f(f({},{merge:!0,emitChange:!0}),r),s=Er(t),c=e;if(s){let G=this.getMappedScope(s);c=Ch({[G]:e})}let d=s?Kt(t):t,u=f(f({},a.merge&&this.getTranslation(d)),c),m=this.config.flatten.aot?u:Ch(u),x=this.interceptor.preSaveTranslation(m,d);this.translations.set(d,x),a.emitChange&&this.setActiveLang(this.getActiveLang())}setTranslationKey(e,t,r={}){let o=r.lang||this.getActiveLang(),a=this.interceptor.preSaveTranslationKey(e,t,o),s={[e]:a};this.setTranslation(s,o,W(f({},r),{merge:!0}))}setFallbackLangForMissingTranslation({fallbackLang:e}){let t=Array.isArray(e)?e[0]:e;e&&this.useFallbackTranslation(t)&&(this.firstFallbackLang=t)}_handleMissingKey(e,t,r){if(this.config.missingHandler.allowEmpty&&t==="")return"";if(!this.isResolvedMissingOnce&&this.useFallbackTranslation()){this.isResolvedMissingOnce=!0;let o=this.translate(e,r,this.firstFallbackLang);return this.isResolvedMissingOnce=!1,o}return this.missingHandler.handle(e,this.getMissingHandlerData(),r)}_isLangScoped(e){return this.getAvailableLangsIds().indexOf(e)===-1}isLang(e){return this.getAvailableLangsIds().indexOf(e)!==-1}_loadDependencies(e,t){let r=Kt(e);return this._isLangScoped(e)&&!this.isLoadedTranslation(r)?Dn([this.load(r),this.load(e,{inlineLoader:t})]):this.load(e,{inlineLoader:t})}_completeScopeWithLang(e){return this._isLangScoped(e)&&!this.isLang(Kt(e))?`${e}/${this.getActiveLang()}`:e}_setScopeAlias(e,t){this.config.scopeMapping||(this.config.scopeMapping={}),this.config.scopeMapping[e]=t}isLoadedTranslation(e){return xh(this.getTranslation(e))}getAvailableLangsIds(){let e=this.getAvailableLangs()[0];return ui(e)?this.getAvailableLangs():this.getAvailableLangs().map(t=>t.id)}getMissingHandlerData(){return W(f({},this.config),{activeLang:this.getActiveLang(),availableLangs:this.availableLangs,defaultLang:this.defaultLang})}useFallbackTranslation(e){return this.config.missingHandler.useFallbackTranslation&&e!==this.firstFallbackLang}handleSuccess(e,t){this.setTranslation(t,e,{emitChange:!1}),this.events.next({wasFailure:!!this.failedLangs.size,type:"translationLoadSuccess",payload:Al(e)}),this.failedLangs.forEach(r=>this.cache.delete(r)),this.failedLangs.clear()}handleFailure(e,t){Il(t.failedCounter)&&(t.failedCounter=0,t.fallbackLangs||(t.fallbackLangs=this.fallbackStrategy.getNextLangs(e)));let r=e.split("/"),a=t.fallbackLangs[t.failedCounter];if(this.failedLangs.add(e),this.cache.has(a))return this.handleSuccess(a,this.getTranslation(a)),Ge;let s=a===r[r.length-1];if(!a||s){let d="Unable to load translation and all the fallback languages";throw r.length>1&&(d+=", did you misspelled the scope name?"),new Error(d)}let c=a;return r.length>1&&(r[r.length-1]=a,c=r.join("/")),t.failedCounter++,this.events.next({type:"translationLoadFailure",payload:Al(e)}),this.load(c,t)}getMappedScope(e){let{scopeMapping:t={},scopes:r={keepCasing:!1}}=this.config;return t[e]||(r.keepCasing?e:Sh(e))}resolveLangAndScope(e){let t=e,r;if(this._isLangScoped(e)){let o=Kt(e),a=this.isLang(o);t=a?o:this.getActiveLang(),r=this.getMappedScope(a?Er(e):e)}return{scope:r,resolveLang:t}}getObjectByKey(e,t){let r={},o=`${t}.`;for(let a in e)a.startsWith(o)&&(r[a.replace(o,"")]=e[a]);return r}getEntries(e){return e instanceof Map?e.entries():Object.entries(e)}static \u0275fac=function(t){return new(t||n)(S(Dh,8),S(Ah),S(Rh),S(Ih),S(hi),S(Th))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),e_=(()=>{class n{html;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],inputs:{html:"html"},decls:1,vars:1,consts:[[1,"transloco-loader-template",3,"innerHTML"]],template:function(t,r){t&1&&lt(0,"div",0),t&2&&Vt("innerHTML",r.html,Fc)},encapsulation:2})}return n})(),kl=class{view;vcr;constructor(i,e){this.view=i,this.vcr=e}attachView(){if(this.view instanceof st)this.vcr.createEmbeddedView(this.view);else if(ui(this.view)){let i=this.vcr.createComponent(e_);i.instance.html=this.view,i.hostView.detectChanges()}else this.vcr.createComponent(this.view)}detachView(){this.vcr.clear()}},Ph=new g(""),t_=new g(""),Nh=new g(""),sa=class{initialized=!1;resolve({inline:i,provider:e,active:t}){let r=t;if(this.initialized)return r=t,r;if(e){let[,o]=Tl(e,"static");r=o}if(i){let[,o]=Tl(i,"static");r=o}return this.initialized=!0,r}resolveLangBasedOnScope(i){return Er(i)?Kt(i):i}resolveLangPath(i,e){return e?`${e}/${i}`:i}},la=class{service;constructor(i){this.service=i}resolve(i){let{inline:e,provider:t}=i;if(e)return e;if(t){if(Mh(t)){let{scope:r,alias:o=this.service.config.scopes.keepCasing?r:Sh(r)}=t;return this.service._setScopeAlias(r,o),r}return t}}},Lh=(()=>{class n{destroyRef=l(mt);service=l(fi);tpl=l(st,{optional:!0});providerLang=l(Ph,{optional:!0});providerScope=l(Nh,{optional:!0});providedLoadingTpl=l(t_,{optional:!0});cdr=l(ue);host=l(P);vcr=l(et);renderer=l(Ee);view;memo=new Map;key;params={};inlineScope;inlineRead;prefix;inlineLang;inlineTpl;currentLang;loaderTplHandler;initialized=!1;path;langResolver=new sa;scopeResolver=new la(this.service);strategy=this.tpl===null?"attribute":"structural";static ngTemplateContextGuard(e,t){return!0}ngOnInit(){let e=kh(this.service,this.providerLang||this.inlineLang);if(this.service.langChanges$.pipe(ie(t=>{let r=this.langResolver.resolve({inline:this.inlineLang,provider:this.providerLang,active:t});return Array.isArray(this.providerScope)?Ft(this.providerScope.map(o=>this.resolveScope(r,o))):this.resolveScope(r,this.providerScope)}),Oh(e),El(this.destroyRef)).subscribe(()=>{this.currentLang=this.langResolver.resolveLangBasedOnScope(this.path),this.strategy==="attribute"?this.attributeStrategy():this.structuralStrategy(this.currentLang,this.prefix||this.inlineRead),this.cdr.markForCheck(),this.initialized=!0}),!this.initialized){let t=this.resolveLoadingContent();t&&(this.loaderTplHandler=new kl(t,this.vcr),this.loaderTplHandler.attachView())}}ngOnChanges(e){this.strategy==="attribute"&&Object.keys(e).some(r=>!e[r].firstChange)&&this.attributeStrategy()}attributeStrategy(){this.detachLoader(),this.renderer.setProperty(this.host.nativeElement,"innerText",this.service.translate(this.key,this.params,this.currentLang))}structuralStrategy(e,t){this.memo.clear();let r=this.getTranslateFn(e,t);this.view?(this.view.context.$implicit=r,this.view.context.currentLang=this.currentLang):(this.detachLoader(),this.view=this.vcr.createEmbeddedView(this.tpl,{$implicit:r,currentLang:this.currentLang}))}getTranslateFn(e,t){return(r,o)=>{let a=t?`${t}.${r}`:r,s=o?`${a}${JSON.stringify(o)}`:a;return this.memo.has(s)||this.memo.set(s,this.service.translate(a,o,e)),this.memo.get(s)}}resolveLoadingContent(){return this.inlineTpl||this.providedLoadingTpl}ngOnDestroy(){this.memo.clear()}detachLoader(){this.loaderTplHandler?.detachView()}resolveScope(e,t){let r=this.scopeResolver.resolve({inline:this.inlineScope,provider:t});this.path=this.langResolver.resolveLangPath(e,r);let o=Ol(t,r);return this.service._loadDependencies(this.path,o)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","transloco",""]],inputs:{key:[0,"transloco","key"],params:[0,"translocoParams","params"],inlineScope:[0,"translocoScope","inlineScope"],inlineRead:[0,"translocoRead","inlineRead"],prefix:[0,"translocoPrefix","prefix"],inlineLang:[0,"translocoLang","inlineLang"],inlineTpl:[0,"translocoLoadingTpl","inlineTpl"]},features:[qe]})}return n})(),mi=(()=>{class n{service;providerScope;providerLang;cdr;subscription=null;lastValue="";lastKey;path;langResolver=new sa;scopeResolver;constructor(e,t,r,o){this.service=e,this.providerScope=t,this.providerLang=r,this.cdr=o,this.scopeResolver=new la(this.service)}transform(e,t,r){if(!e)return e;let o=t?`${e}${JSON.stringify(t)}`:e;if(o===this.lastKey)return this.lastValue;this.lastKey=o,this.subscription?.unsubscribe();let a=kh(this.service,this.providerLang||r);return this.subscription=this.service.langChanges$.pipe(ie(s=>{let c=this.langResolver.resolve({inline:r,provider:this.providerLang,active:s});return Array.isArray(this.providerScope)?Ft(this.providerScope.map(d=>this.resolveScope(c,d))):this.resolveScope(c,this.providerScope)}),Oh(a)).subscribe(()=>this.updateValue(e,t)),this.lastValue}ngOnDestroy(){this.subscription?.unsubscribe(),this.subscription=null}updateValue(e,t){let r=this.langResolver.resolveLangBasedOnScope(this.path);this.lastValue=this.service.translate(e,t,r),this.cdr.markForCheck()}resolveScope(e,t){let r=this.scopeResolver.resolve({inline:void 0,provider:t});this.path=this.langResolver.resolveLangPath(e,r);let o=Ol(t,r);return this.service._loadDependencies(this.path,o)}static \u0275fac=function(t){return new(t||n)(Ke(fi,16),Ke(Nh,24),Ke(Ph,24),Ke(ue,16))};static \u0275pipe=is({name:"transloco",type:n,pure:!1})}return n})();var Bh=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=I({})}return n})();function Vh(n){let i=[r_(Wv),a_(Yv),s_(Kv),o_(Xv)];return n.config&&i.push(n_(n.config)),n.loader&&i.push(i_(n.loader)),i}function n_(n){return Re([{provide:hi,useValue:Gv(n)}])}function i_(n){return Re([{provide:Dh,useClass:n}])}function r_(n){return Re([{provide:Ah,useClass:n,deps:[hi]}])}function o_(n){return Re([{provide:Th,useClass:n,deps:[hi]}])}function a_(n){return Re([{provide:Rh,useClass:n}])}function s_(n){return Re([{provide:Ih,useClass:n}])}function Fl(){let n=l_();if(!(!n||!Eh()))return n.indexOf("-")!==-1&&(n=n.split("-")[0]),n.indexOf("_")!==-1&&(n=n.split("_")[0]),n}function l_(){if(!Eh())return"";let n=window.navigator;return n.languages?.[0]??n.language}var da=class n{constructor(){let i=l(Sl),e=l(vh),t=l(fi);i.unrecoverable.subscribe(r=>{e.open(`An error occurred that we cannot recover from:
`+r.reason+`

Please reload the page.`,"Reload").onAction().subscribe(()=>{window.location.reload()}),console.debug(`An error occurred that we cannot recover from:
`+r.reason+`

Please reload the page.`)}),i.versionUpdates.pipe(Q(r=>r.type==="VERSION_DETECTED")).subscribe(()=>{e.open(t.translate("messages.update-available"),"Reload").onAction().subscribe(()=>{window.location.reload()})})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){e&1&&le(0,"router-outlet")},dependencies:[ir],encapsulation:2})};var d_="@",u_=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=l(U);loadingSchedulerFn=l(h_,{optional:!0});_engine;constructor(e,t,r,o,a){this.doc=e,this.delegate=t,this.zone=r,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-QDCQM5WI.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new k(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new Pl(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(e,t);o.use(s),this.scheduler??=this.injector.get(xc,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){Kr()};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),Pl=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,t,r){this.delegate.insertBefore(i,e,t,r)}removeChild(i,e,t,r){this.delegate.removeChild(i,e,t,r)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,r){this.delegate.setAttribute(i,e,t,r)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,r){this.delegate.setStyle(i,e,t,r)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(i,e,t)),this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(i,e,t,r)),this.delegate.listen(i,e,t,r)}shouldReplay(i){return this.replay!==null&&i.startsWith(d_)}},h_=new g("");function jh(n="animations"){return ts("NgAsyncAnimations"),Re([{provide:Ue,useFactory:()=>new u_(l(R),l(Bi),l(O),n)},{provide:An,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ha=class n{http=l(Ln);getTranslation(i){return this.http.get(`i18n/${i}.json`)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})};var fa=class n{playerCount=new $;neutralBuildings=[{title:"A",sides:[{title:"front"}]},{title:"B",sides:[{title:"front"}]},{title:"C",sides:[{title:"front"}]},{title:"D",sides:[{title:"front"}]},{title:"E",sides:[{title:"front"}]},{title:"F",sides:[{title:"front"}]},{title:"G",sides:[{title:"front"}]},{title:"H",sides:[{title:"front"}]}];playerBuildings=[{title:"1",sides:[{title:"a"},{title:"b"}]},{title:"2",sides:[{title:"a"},{title:"b"}]},{title:"3",sides:[{title:"a"},{title:"b"}]},{title:"4",sides:[{title:"a"},{title:"b"}]},{title:"5",sides:[{title:"a"},{title:"b"}]},{title:"6",sides:[{title:"a"},{title:"b"}]},{title:"7",sides:[{title:"a"},{title:"b"}]},{title:"8",sides:[{title:"a"},{title:"b"}]},{title:"9",sides:[{title:"a"},{title:"b"}]},{title:"10",sides:[{title:"a"},{title:"b"}]}];deckBuildingModules=["1","2","3","4","5","6","7","8","9","10"];harborMasters=[{title:"1",sides:[{title:"front",image:"img/harbormaster-01.png"}]},{title:"2",sides:[{title:"front",image:"img/harbormaster-02.png"}]},{title:"3",sides:[{title:"front",image:"img/harbormaster-03.png"}]},{title:"4",sides:[{title:"front",image:"img/harbormaster-04.png"}]},{title:"5",sides:[{title:"front",image:"img/harbormaster-05.png"}]},{title:"6",sides:[{title:"front",image:"img/harbormaster-06.png"}]},{title:"7",sides:[{title:"front",image:"img/harbormaster-07.png"}]},{title:"8",sides:[{title:"front",image:"img/harbormaster-08.png"}]}];getRandomNeutralBuildingOrder(){return this.shuffleArray(this.neutralBuildings)}getRandomHarborMasters(){let i=[],e=this.shuffleArray(this.harborMasters);for(let t=0;t<5;t++)i.push(e.pop());return i}getRandomDeckbuildingModules(){let i=[],e=this.shuffleArray(this.deckBuildingModules);for(let t=0;t<4;t++)i.push(e.pop());return i.sort((t,r)=>parseInt(t)-parseInt(r))}getRandomPlayerBuildings(){let i=JSON.parse(JSON.stringify(this.playerBuildings));return i.forEach(e=>{e.sides.splice(Math.floor(Math.random()*e.sides.length),1)}),i}shuffleArray(i){let e=i.slice();for(let t,r,o=e.length;o;t=Math.floor(Math.random()*o),r=e[--o],e[o]=e[t],e[t]=r);return e}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})};var Uh="indexedDB is not working",ga=class extends Error{message=Uh},f_=`The storage is currently localStorage,
where data must be serialized, and the provided data can't be serialized.`,Nl=class extends Error{message=f_},m_=new g("localStoragePrefix",{providedIn:"root",factory:()=>""}),p_="ngStorage",g_=new g("localStorageIDBDBName",{providedIn:"root",factory:()=>p_}),v_=1,__=new g("localStorageIDBDBVersion",{providedIn:"root",factory:()=>v_}),b_="localStorage",y_=new g("localStorageIDBStoreName",{providedIn:"root",factory:()=>b_}),w_=!0,C_=new g("localStorageIDBWrap",{providedIn:"root",factory:()=>w_});var D_=`Data stored is not valid against the provided JSON schema.
Check your JSON schema, otherwise it means data has been corrupted.`,va=class extends Error{message=D_},ma=(()=>{class n{prefix;constructor(){this.prefix=l(m_)}get size(){return b(localStorage.length)}get(e){let t=localStorage.getItem(this.prefixKey(e));if(t!==null)try{let r=JSON.parse(t);return b(r)}catch(r){return We(()=>r)}return b(void 0)}set(e,t){let r=null,o=Object.getPrototypeOf(t);if(typeof t=="object"&&!Array.isArray(t)&&!(o===Object.prototype||o===null))return We(()=>new Nl);try{if(r=JSON.stringify(t),r===void 0)throw new Error}catch(a){return We(()=>a)}try{localStorage.setItem(this.prefixKey(e),r)}catch(a){return We(()=>a)}return b(void 0)}delete(e){return localStorage.removeItem(this.prefixKey(e)),b(void 0)}clear(){return localStorage.clear(),b(void 0)}keys(){return new xe(e=>{for(let t=0;t<localStorage.length;t+=1)e.next(this.getUnprefixedKey(t));e.complete()}).pipe(vc(gc))}has(e){for(let t=0;t<localStorage.length;t+=1)if(e===this.getUnprefixedKey(t))return b(!0);return b(!1)}getUnprefixedKey(e){let t=localStorage.key(e);return t!==null?this.prefix===""?t:t.substring(this.prefix.length):null}prefixKey(e){return`${this.prefix}${e}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),pa=(()=>{class n{memoryStorage=new Map;get size(){return b(this.memoryStorage.size)}get(e){return b(this.memoryStorage.get(e))}set(e,t){return this.memoryStorage.set(e,t),b(void 0)}delete(e){return this.memoryStorage.delete(e),b(void 0)}clear(){return this.memoryStorage.clear(),b(void 0)}keys(){return ye(this.memoryStorage.keys())}has(e){return b(this.memoryStorage.has(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function x_(){let n=l(Nt);try{if(Fi(n)&&indexedDB!==void 0&&indexedDB!==null&&"open"in indexedDB)return new Ll;if(Fi(n)&&localStorage!==void 0&&localStorage!==null&&"getItem"in localStorage)return new ma}catch{}return new pa}var S_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:()=>x_(),providedIn:"root"})}return n})(),Ll=(()=>{class n{dbName;storeName;dbVersion;database=new Lr(1);noWrap;wrapIndex="value";constructor(){this.dbName=l(g_),this.storeName=l(y_),this.dbVersion=l(__),this.noWrap=l(C_),this.connect()}get backingStore(){return{database:this.dbName,store:this.storeName,version:this.dbVersion}}get size(){return this.transaction("readonly").pipe(we(e=>{let{store:t,events:r}=e,o=t.count();return r.pipe(C(()=>o.result))}),Se())}get(e){return this.transaction("readonly").pipe(we(t=>{let{store:r,events:o}=t,a=r.get(e);return o.pipe(C(()=>{if(a.result!==void 0&&a.result!==null)return!this.noWrap&&typeof a.result=="object"&&this.wrapIndex in a.result&&a.result[this.wrapIndex]!==void 0&&a.result[this.wrapIndex]!==null?a.result[this.wrapIndex]:a.result}))}),Se())}set(e,t){return t===void 0?this.delete(e):this.transaction("readwrite").pipe(we(r=>{let{store:o,events:a}=r,s=this.noWrap?t:{[this.wrapIndex]:t};return o.put(s,e),a.pipe(C(()=>{}))}),Se())}delete(e){return this.transaction("readwrite").pipe(we(t=>{let{store:r,events:o}=t;return r.delete(e),o.pipe(C(()=>{}))}),Se())}clear(){return this.transaction("readwrite").pipe(we(e=>{let{store:t,events:r}=e;return t.clear(),r.pipe(C(()=>{}))}),Se())}keys(){return this.transaction("readonly").pipe(Se(),we(e=>{let{store:t}=e,r=t.openKeyCursor(),o=Sn(r,"success").pipe(zr(()=>r.result!==null),C(()=>r.result.key.toString()),fe(()=>{r.result.continue()})),a=this.listenError(r);return jr([o,a])}))}has(e){return this.transaction("readonly").pipe(we(t=>{let{store:r,events:o}=t,a=r.getKey(e);return o.pipe(C(()=>a.result!==void 0))}),Se())}connect(){let e;try{e=indexedDB.open(this.dbName,this.dbVersion)}catch{this.database.error(new ga);return}this.createStore(e);let t=Sn(e,"success"),r=this.listenError(e);jr([t,r]).pipe(Se()).subscribe({next:()=>{this.database.next(e.result)},error:()=>{this.database.error(new ga)}})}createStore(e){Sn(e,"upgradeneeded").pipe(Se()).subscribe({next:()=>{e.result.objectStoreNames.contains(this.storeName)||e.result.createObjectStore(this.storeName)}})}transaction(e){return this.database.pipe(we(t=>{let r;try{r=t.transaction([this.storeName],e)}catch(s){return We(()=>s)}let o=r.objectStore(this.storeName),a=this.listenTransactionEvents(r);return b({store:o,events:a})}))}listenError(e){return Sn(e,"error").pipe(we(t=>We(()=>t.target?.error)))}listenTransactionEvents(e){let t=Sn(e,"complete"),r=this.listenError(e);return jr([t,r])}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),E_=(()=>{class n{validate(e,t){switch(t.type){case"string":return this.validateString(e,t);case"number":case"integer":return this.validateNumber(e,t);case"boolean":return this.validateBoolean(e,t);case"array":return this.validateArray(e,t);case"object":return this.validateObject(e,t)}}validateString(e,t){if(typeof e!="string"||!this.validateConst(e,t)||!this.validateEnum(e,t)||t.maxLength!==void 0&&e.length>t.maxLength||t.minLength!==void 0&&e.length<t.minLength)return!1;if(t.pattern!==void 0)try{if(!new RegExp(t.pattern).test(e))return!1}catch{}return!0}validateNumber(e,t){return!(typeof e!="number"||t.type==="integer"&&!Number.isInteger(e)||!this.validateConst(e,t)||!this.validateEnum(e,t)||t.multipleOf!==void 0&&t.multipleOf!==0&&Number.isFinite(t.multipleOf)&&!Number.isInteger(e/t.multipleOf)||t.maximum!==void 0&&e>t.maximum||t.exclusiveMaximum!==void 0&&e>=t.exclusiveMaximum||t.minimum!==void 0&&e<t.minimum||t.exclusiveMinimum!==void 0&&e<=t.exclusiveMinimum)}validateBoolean(e,t){return!(typeof e!="boolean"||!this.validateConst(e,t))}validateArray(e,t){if(!Array.isArray(e)||t.maxItems!==void 0&&e.length>t.maxItems||t.minItems!==void 0&&e.length<t.minItems)return!1;if(t.uniqueItems===!0){let r=new Set(e);if(e.length!==r.size)return!1}if(Array.isArray(t.items)||t.items===void 0)return this.validateTuple(e,t.items);for(let r of e)if(!this.validate(r,t.items))return!1;return!0}validateTuple(e,t){let r=t?t.length:0;if(e.length!==r)return!1;if(t){for(let[o,a]of t.entries())if(!this.validate(e[o],a))return!1}return!0}validateObject(e,t){if(typeof e!="object"||e===null||Object.keys(t.properties).length<Object.keys(e).length)return!1;if(t.required){for(let r of t.required)if(!Object.hasOwn(e,r))return!1}for(let r in t.properties)if(Object.hasOwn(t.properties,r)&&Object.hasOwn(e,r)&&!this.validate(e[r],t.properties[r]))return!1;return!0}validateConst(e,t){return t.const===void 0?!0:e===t.const}validateEnum(e,t){return t.enum?t.enum.includes(e):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),zh=(()=>{class n{#e;#i;#n=new Map;constructor(e){this.#e=e,this.#i=new E_}get size(){return this.#e.size.pipe(this.#t(()=>this.#e.size))}get backingEngine(){return this.#e instanceof Ll?"indexedDB":this.#e instanceof ma?"localStorage":this.#e instanceof pa?"memory":"unknown"}get backingStore(){return this.#e instanceof Ll?this.#e.backingStore:{database:"",store:"",version:0}}get fallbackBackingStore(){return this.#e instanceof ma?{prefix:this.#e.prefix}:{prefix:""}}get(e,t){return this.#e.get(e).pipe(this.#t(()=>this.#e.get(e)),we(r=>r==null?b(void 0):t?this.#i.validate(r,t)?b(r):We(()=>new va):b(r)))}set(e,t,r){return t==null?this.delete(e):r&&!this.#i.validate(t,r)?We(()=>new va):this.#e.set(e,t).pipe(this.#t(()=>this.#e.set(e,t)),fe(()=>{this.#r(e,t)}))}delete(e){return this.#e.delete(e).pipe(this.#t(()=>this.#e.delete(e)),fe(()=>{this.#r(e,void 0)}))}clear(){return this.#e.clear().pipe(this.#t(()=>this.#e.clear()),fe(()=>{for(let e of this.#n.keys())this.#r(e,void 0)}))}keys(){return this.#e.keys().pipe(this.#t(()=>this.#e.keys()))}has(e){return this.#e.has(e).pipe(this.#t(()=>this.#e.has(e)))}watch(e,t){this.#n.has(e)||this.#n.set(e,new Lr(1));let r=this.#n.get(e);return(t?this.get(e,t):this.get(e)).subscribe({next:o=>{r.next(o)},error:o=>{r.error(o)}}),r.asObservable()}#r(e,t){let r=this.#n.get(e);r&&r.next(t)}#t(e){return Ct(t=>{if(t!=null&&typeof t=="object"&&"message"in t&&t.message===Uh){try{"getItem"in localStorage?this.#e=new ma:this.#e=new pa}catch{this.#e=new pa}return e()}else return We(()=>t)})}\u0275internalGetDatabase(){return this.#e}static \u0275fac=function(t){return new(t||n)(S(S_))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Mr=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new y;constructor(i=!1,e,t=!0,r){this._multiple=i,this._emitChanges=t,this.compareWith=r,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};function jl(n){return n==null||Ul(n)===0}function Ul(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var Kh=new g(""),Xh=new g(""),M_=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ba=class{static min(i){return A_(i)}static max(i){return R_(i)}static required(i){return I_(i)}static requiredTrue(i){return T_(i)}static email(i){return k_(i)}static minLength(i){return O_(i)}static maxLength(i){return F_(i)}static pattern(i){return P_(i)}static nullValidator(i){return Zh()}static compose(i){return rf(i)}static composeAsync(i){return of(i)}};function A_(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<n?{min:{min:n,actual:i.value}}:null}}function R_(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>n?{max:{max:n,actual:i.value}}:null}}function I_(n){return jl(n.value)?{required:!0}:null}function T_(n){return n.value===!0?null:{required:!0}}function k_(n){return jl(n.value)||M_.test(n.value)?null:{email:!0}}function O_(n){return i=>{let e=i.value?.length??Ul(i.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function F_(n){return i=>{let e=i.value?.length??Ul(i.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function P_(n){if(!n)return Zh;let i,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=n.toString(),i=n),t=>{if(jl(t.value))return null;let r=t.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Zh(n){return null}function Qh(n){return n!=null}function Jh(n){return Ai(n)?ye(n):n}function ef(n){let i={};return n.forEach(e=>{i=e!=null?f(f({},i),e):i}),Object.keys(i).length===0?null:i}function tf(n,i){return i.map(e=>e(n))}function N_(n){return!n.validate}function nf(n){return n.map(i=>N_(i)?i:e=>i.validate(e))}function rf(n){if(!n)return null;let i=n.filter(Qh);return i.length==0?null:function(e){return ef(tf(e,i))}}function zl(n){return n!=null?rf(nf(n)):null}function of(n){if(!n)return null;let i=n.filter(Qh);return i.length==0?null:function(e){let t=tf(e,i).map(Jh);return Ft(t).pipe(C(ef))}}function Hl(n){return n!=null?of(nf(n)):null}function Hh(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function af(n){return n._rawValidators}function sf(n){return n._rawAsyncValidators}function Bl(n){return n?Array.isArray(n)?n:[n]:[]}function ya(n,i){return Array.isArray(n)?n.includes(i):n===i}function $h(n,i){let e=Bl(i);return Bl(n).forEach(r=>{ya(e,r)||e.push(r)}),e}function Gh(n,i){return Bl(i).filter(e=>!ya(n,e))}var wa=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=zl(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=Hl(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},vi=class extends wa{name;get formDirective(){return null}get path(){return null}},Ca=class extends wa{_parent=null;name=null;valueAccessor=null};var Ar="VALID",_a="INVALID",pi="PENDING",Rr="DISABLED",Xt=class{},Da=class extends Xt{value;source;constructor(i,e){super(),this.value=i,this.source=e}},Tr=class extends Xt{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},kr=class extends Xt{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},gi=class extends Xt{status;source;constructor(i,e){super(),this.status=i,this.source=e}},xa=class extends Xt{source;constructor(i){super(),this.source=i}},Sa=class extends Xt{source;constructor(i){super(),this.source=i}};function lf(n){return(Ia(n)?n.validators:n)||null}function L_(n){return Array.isArray(n)?zl(n):n||null}function cf(n,i){return(Ia(i)?i.asyncValidators:n)||null}function B_(n){return Array.isArray(n)?Hl(n):n||null}function Ia(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function V_(n,i,e){let t=n.controls;if(!(i?Object.keys(t):t).length)throw new k(1e3,"");if(!t[e])throw new k(1001,"")}function j_(n,i,e){n._forEachChild((t,r)=>{if(e[r]===void 0)throw new k(-1002,"")})}var Ea=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return Me(this.statusReactive)}set status(i){Me(()=>this.statusReactive.set(i))}_status=it(()=>this.statusReactive());statusReactive=se(void 0);get valid(){return this.status===Ar}get invalid(){return this.status===_a}get pending(){return this.status===pi}get disabled(){return this.status===Rr}get enabled(){return this.status!==Rr}errors;get pristine(){return Me(this.pristineReactive)}set pristine(i){Me(()=>this.pristineReactive.set(i))}_pristine=it(()=>this.pristineReactive());pristineReactive=se(!0);get dirty(){return!this.pristine}get touched(){return Me(this.touchedReactive)}set touched(i){Me(()=>this.touchedReactive.set(i))}_touched=it(()=>this.touchedReactive());touchedReactive=se(!1);get untouched(){return!this.touched}_events=new y;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators($h(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators($h(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(Gh(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(Gh(i,this._rawAsyncValidators))}hasValidator(i){return ya(this._rawValidators,i)}hasAsyncValidator(i){return ya(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(W(f({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new kr(!0,t))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:t})}),i.onlySelf||this._parent?._updateTouched(i,t),e&&i.emitEvent!==!1&&this._events.next(new kr(!1,t))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(W(f({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Tr(!1,t))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,t),e&&i.emitEvent!==!1&&this._events.next(new Tr(!0,t))}markAsPending(i={}){this.status=pi;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new gi(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(W(f({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Rr,this.errors=null,this._forEachChild(r=>{r.disable(W(f({},i),{onlySelf:!0}))}),this._updateValue();let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Da(this.value,t)),this._events.next(new gi(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(W(f({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Ar,this._forEachChild(t=>{t.enable(W(f({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(W(f({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ar||this.status===pi)&&this._runAsyncValidator(t,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Da(this.value,e)),this._events.next(new gi(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(W(f({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Rr:Ar}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=pi,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let t=Jh(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,r)=>t&&t._find(r),this)}getError(i,e){let t=e?this.get(e):this;return t?.errors?t.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,t){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||t)&&this._events.next(new gi(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,t)}_initObservables(){this.valueChanges=new $,this.statusChanges=new $}_calculateStatus(){return this._allControlsDisabled()?Rr:this.errors?_a:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(pi)?pi:this._anyControlsHaveStatus(_a)?_a:Ar}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new Tr(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new kr(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Ia(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=L_(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=B_(this._rawAsyncValidators)}},Ma=class extends Ea{constructor(i,e,t){super(lf(e),cf(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,t={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,t={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){j_(this,!0,i),Object.keys(i).forEach(t=>{V_(this,!0,t),this.controls[t].setValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(t=>{let r=this.controls[t];r&&r.patchValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((t,r)=>{t.reset(i?i[r]:null,W(f({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Sa(this))}getRawValue(){return this._reduceChildren({},(i,e,t)=>(i[t]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&i(t,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&i(t))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(i,e){let t=i;return this._forEachChild((r,o)=>{t=e(t,r,o)}),t}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var df=new g("",{factory:()=>uf}),uf="always";function Vl(n,i,e=uf){$l(n,i),i.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(n.disabled),z_(n,i),$_(n,i),H_(n,i),U_(n,i)}function Wh(n,i,e=!0){let t=()=>{};i?.valueAccessor?.registerOnChange(t),i?.valueAccessor?.registerOnTouched(t),Ra(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Aa(n,i){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function U_(n,i){if(i.valueAccessor.setDisabledState){let e=t=>{i.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(e),i._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function $l(n,i){let e=af(n);i.validator!==null?n.setValidators(Hh(e,i.validator)):typeof e=="function"&&n.setValidators([e]);let t=sf(n);i.asyncValidator!==null?n.setAsyncValidators(Hh(t,i.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let r=()=>n.updateValueAndValidity();Aa(i._rawValidators,r),Aa(i._rawAsyncValidators,r)}function Ra(n,i){let e=!1;if(n!==null){if(i.validator!==null){let r=af(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.validator);o.length!==r.length&&(e=!0,n.setValidators(o))}}if(i.asyncValidator!==null){let r=sf(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.asyncValidator);o.length!==r.length&&(e=!0,n.setAsyncValidators(o))}}}let t=()=>{};return Aa(i._rawValidators,t),Aa(i._rawAsyncValidators,t),e}function z_(n,i){i.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&hf(n,i)})}function H_(n,i){i.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&hf(n,i),n.updateOn!=="submit"&&n.markAsTouched()})}function hf(n,i){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function $_(n,i){let e=(t,r)=>{i.valueAccessor.writeValue(t),r&&i.viewToModelUpdate(t)};n.registerOnChange(e),i._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function ff(n,i){n==null,$l(n,i)}function G_(n,i){return Ra(n,i)}function mf(n,i){n._syncPendingControls(),i.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function W_(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}var q_={provide:vi,useExisting:Hr(()=>Gl)},Ir=Promise.resolve(),Gl=(()=>{class n extends vi{callSetDisabledState;get submitted(){return Me(this.submittedReactive)}_submitted=it(()=>this.submittedReactive());submittedReactive=se(!1);_directives=new Set;form;ngSubmit=new $;options;constructor(e,t,r){super(),this.callSetDisabledState=r,this.form=new Ma({},zl(e),Hl(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Ir.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),Vl(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Ir.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Ir.then(()=>{let t=this._findContainer(e.path),r=new Ma({});ff(r,e),t.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Ir.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Ir.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),mf(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new xa(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(Ke(Kh,10),Ke(Xh,10),Ke(df,8))};static \u0275dir=N({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){t&1&&ae("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[_e([q_]),ve]})}return n})();function qh(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}function Yh(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Y_=class extends Ea{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,t){super(lf(e),cf(t,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ia(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Yh(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Sa(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){qh(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){qh(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){Yh(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var K_=n=>n instanceof Y_;var X_=(()=>{class n extends vi{callSetDisabledState;get submitted(){return Me(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=it(()=>this._submittedReactive());_submittedReactive=se(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Ra(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return Vl(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){Wh(e.control||null,e,!1),W_(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,mf(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new xa(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,r=this.form.get(e.path);t!==r&&(Wh(t||null,e),K_(r)&&(Vl(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);ff(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&G_(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){$l(this.form,this),this._oldForm&&Ra(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||n)(Ke(Kh,10),Ke(Xh,10),Ke(df,8))};static \u0275dir=N({type:n,features:[ve,qe]})}return n})();var Z_={provide:vi,useExisting:Hr(()=>Wl)},Wl=(()=>{class n extends X_{form=null;ngSubmit=new $;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ye(n)))(r||n)}})();static \u0275dir=N({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,r){t&1&&ae("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[_e([Z_]),ve]})}return n})();var ql=class{_box;_destroyed=new y;_resizeSubject=new y;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new xe(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(Q(e=>e.some(t=>t.target===i)),Ei({bufferSize:1,refCount:!0}),q(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},pf=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=l(O);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new ql(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Q_=["notch"],J_=["matFormFieldNotchedOutline",""],eb=["*"],gf=["iconPrefixContainer"],vf=["textPrefixContainer"],_f=["iconSuffixContainer"],bf=["textSuffixContainer"],tb=["textField"],nb=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],ib=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function rb(n,i){n&1&&le(0,"span",21)}function ob(n,i){if(n&1&&(p(0,"label",20),A(1,1),L(2,rb,1,0,"span",21),_()),n&2){let e=E(2);de("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),re("for",e._control.disableAutomaticLabeling?null:e._control.id),h(2),B(!e.hideRequiredMarker&&e._control.required?2:-1)}}function ab(n,i){if(n&1&&L(0,ob,3,5,"label",20),n&2){let e=E();B(e._hasFloatingLabel()?0:-1)}}function sb(n,i){n&1&&le(0,"div",7)}function lb(n,i){}function cb(n,i){if(n&1&&vt(0,lb,0,0,"ng-template",13),n&2){E(2);let e=Dt(1);de("ngTemplateOutlet",e)}}function db(n,i){if(n&1&&(p(0,"div",9),L(1,cb,1,1,null,13),_()),n&2){let e=E();de("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),h(),B(e._forceDisplayInfixLabel()?-1:1)}}function ub(n,i){n&1&&(p(0,"div",10,2),A(2,2),_())}function hb(n,i){n&1&&(p(0,"div",11,3),A(2,3),_())}function fb(n,i){}function mb(n,i){if(n&1&&vt(0,fb,0,0,"ng-template",13),n&2){E();let e=Dt(1);de("ngTemplateOutlet",e)}}function pb(n,i){n&1&&(p(0,"div",14,4),A(2,4),_())}function gb(n,i){n&1&&(p(0,"div",15,5),A(2,5),_())}function vb(n,i){n&1&&le(0,"div",16)}function _b(n,i){n&1&&(p(0,"div",18),A(1,6),_())}function bb(n,i){if(n&1&&(p(0,"mat-hint",22),w(1),_()),n&2){let e=E(2);de("id",e._hintLabelId),h(),ce(e.hintLabel)}}function yb(n,i){if(n&1&&(p(0,"div",19),L(1,bb,2,2,"mat-hint",22),A(2,7),le(3,"div",23),A(4,8),_()),n&2){let e=E();h(),B(e.hintLabel?1:-1)}}var Or=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["mat-label"]]})}return n})(),wb=new g("MatError");var Yl=(()=>{class n{align="start";id=l(Le).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,r){t&2&&(Vt("id",r.id),re("align",null),F("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),Cb=new g("MatPrefix");var Db=new g("MatSuffix");var Ef=new g("FloatingLabelParent"),yf=(()=>{class n{_elementRef=l(P);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=l(pf);_ngZone=l(O);_parent=l(Ef);_resizeSubscription=new ge;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return xb(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,r){t&2&&F("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function xb(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var wf="mdc-line-ripple--active",Ta="mdc-line-ripple--deactivating",Cf=(()=>{class n{_elementRef=l(P);_cleanupTransitionEnd;constructor(){let e=l(O),t=l(Ee);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ta),e.add(wf)}deactivate(){this._elementRef.nativeElement.classList.add(Ta)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(Ta);e.propertyName==="opacity"&&r&&t.remove(wf,Ta)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),Df=(()=>{class n{_elementRef=l(P);_ngZone=l(O);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,r){if(t&1&&He(Q_,5),t&2){let o;V(o=j())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,r){t&2&&F("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:J_,ngContentSelectors:eb,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,r){t&1&&(J(),lt(0,"div",1),ze(1,"div",2,0),A(3),Xe(),lt(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),Kl=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n})}return n})();var Xl=new g("MatFormField"),Sb=new g("MAT_FORM_FIELD_DEFAULT_OPTIONS"),xf="fill",Eb="auto",Sf="fixed",Mb="translateY(-50%)",ka=(()=>{class n{_elementRef=l(P);_changeDetectorRef=l(ue);_platform=l(oe);_idGenerator=l(Le);_ngZone=l(O);_defaults=l(Sb,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Ii("iconPrefixContainer");_textPrefixContainerSignal=Ii("textPrefixContainer");_iconSuffixContainerSignal=Ii("iconSuffixContainer");_textSuffixContainerSignal=Ii("textSuffixContainer");_prefixSuffixContainers=it(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Xc(Or);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ht(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Eb}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||xf;this._appearanceSignal.set(t)}_appearanceSignal=se(xf);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Sf}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Sf}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new y;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=be();constructor(){let e=this._defaults,t=l(Be);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Mn(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=it(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Ce([void 0,void 0]),C(()=>[t.errorState,t.userAriaDescribedBy]),es(),Q(([[o,a],[s,c]])=>o!==s||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(q(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),at(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Qc({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=it(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,r;if(t){let o=this._describedByIds||e;r=e.concat(t.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=t?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",m=`${a+s}px`,G=`calc(${u} * (${m} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,X=`var(--mat-mdc-form-field-label-transform, ${Mb} translateX(${G}))`,Z=a+s+c+d;return[X,Z]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,r,o){if(t&1&&(Hc(o,r._labelChild,Or,5),Ze(o,Kl,5)(o,Cb,5)(o,Db,5)(o,wb,5)(o,Yl,5)),t&2){as();let a;V(a=j())&&(r._formFieldControl=a.first),V(a=j())&&(r._prefixChildren=a),V(a=j())&&(r._suffixChildren=a),V(a=j())&&(r._errorChildren=a),V(a=j())&&(r._hintChildren=a)}},viewQuery:function(t,r){if(t&1&&($c(r._iconPrefixContainerSignal,gf,5)(r._textPrefixContainerSignal,vf,5)(r._iconSuffixContainerSignal,_f,5)(r._textSuffixContainerSignal,bf,5),He(tb,5)(gf,5)(vf,5)(_f,5)(bf,5)(yf,5)(Df,5)(Cf,5)),t&2){as(4);let o;V(o=j())&&(r._textField=o.first),V(o=j())&&(r._iconPrefixContainer=o.first),V(o=j())&&(r._textPrefixContainer=o.first),V(o=j())&&(r._iconSuffixContainer=o.first),V(o=j())&&(r._textSuffixContainer=o.first),V(o=j())&&(r._floatingLabel=o.first),V(o=j())&&(r._notchedOutline=o.first),V(o=j())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,r){t&2&&F("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[_e([{provide:Xl,useExisting:n},{provide:Ef,useExisting:n}])],ngContentSelectors:ib,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,r){if(t&1&&(J(nb),vt(0,ab,1,1,"ng-template",null,0,qc),p(2,"div",6,1),ae("click",function(a){return r._control.onContainerClick(a)}),L(4,sb,1,0,"div",7),p(5,"div",8),L(6,db,2,2,"div",9),L(7,ub,3,0,"div",10),L(8,hb,3,0,"div",11),p(9,"div",12),L(10,mb,1,1,null,13),A(11),_(),L(12,pb,3,0,"div",14),L(13,gb,3,0,"div",15),_(),L(14,vb,1,0,"div",16),_(),p(15,"div",17),L(16,_b,2,0,"div",18)(17,yb,5,1,"div",19),_()),t&2){let o;h(2),F("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),h(2),B(!r._hasOutline()&&!r._control.disabled?4:-1),h(2),B(r._hasOutline()?6:-1),h(),B(r._hasIconPrefix?7:-1),h(),B(r._hasTextPrefix?8:-1),h(2),B(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),h(2),B(r._hasTextSuffix?12:-1),h(),B(r._hasIconSuffix?13:-1),h(),B(r._hasOutline()?-1:14),h(),F("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();h(),B((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[yf,Df,cs,Cf,Yl],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return n})();var Mf=(()=>{class n{_animationsDisabled=be();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,r){t&2&&F("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return n})();var Ab=["text"],Rb=[[["mat-icon"]],"*"],Ib=["mat-icon","*"];function Tb(n,i){if(n&1&&le(0,"mat-pseudo-checkbox",1),n&2){let e=E();de("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function kb(n,i){if(n&1&&le(0,"mat-pseudo-checkbox",3),n&2){let e=E();de("disabled",e.disabled)}}function Ob(n,i){if(n&1&&(p(0,"span",4),w(1),_()),n&2){let e=E();h(),Y("(",e.group.label,")")}}var Ql=new g("MAT_OPTION_PARENT_COMPONENT"),Jl=new g("MatOptgroup");var Zl=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},yi=(()=>{class n{_element=l(P);_changeDetectorRef=l(ue);_parent=l(Ql,{optional:!0});group=l(Jl,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=l(Le).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=se(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new $;_text;_stateChanges=new y;constructor(){let e=l(Qe);e.load(ai),e.load(zo),this._signalDisableRipple=!!this._parent&&nn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Je(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Zl(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-option"]],viewQuery:function(t,r){if(t&1&&He(Ab,7),t&2){let o;V(o=j())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,r){t&1&&ae("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),t&2&&(Vt("id",r.id),re("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),F("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",K]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Ib,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,r){t&1&&(J(Rb),L(0,Tb,1,2,"mat-pseudo-checkbox",1),A(1),p(2,"span",2,0),A(4,1),_(),L(5,kb,1,1,"mat-pseudo-checkbox",3),L(6,Ob,2,1,"span",4),le(7,"div",5)),t&2&&(B(r.multiple?0:-1),h(5),B(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),h(),B(r.group&&r.group._inert?6:-1),h(),de("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[Mf,ra],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();function Af(n,i,e){if(e.length){let t=i.toArray(),r=e.toArray(),o=0;for(let a=0;a<n+1;a++)t[a].group&&t[a].group===r[o]&&o++;return o}return 0}function Rf(n,i,e,t){return n<e?n:n+i>e+t?Math.max(0,n-t+i):e}var If=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Oa=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,t,r,o){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=o}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=t?.isErrorState(r,e)??!1;o!==i&&(this.errorState=o,this._stateChanges.next())}};var Fa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=I({imports:[Ou,ka,ee]})}return n})();var Tf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=I({imports:[ee]})}return n})();var ec=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=I({imports:[si,Tf,yi,ee]})}return n})();var Pb=["trigger"],Nb=["panel"],Lb=[[["mat-select-trigger"]],"*"],Bb=["mat-select-trigger","*"];function Vb(n,i){if(n&1&&(p(0,"span",4),w(1),_()),n&2){let e=E();h(),ce(e.placeholder)}}function jb(n,i){n&1&&A(0)}function Ub(n,i){if(n&1&&(p(0,"span",11),w(1),_()),n&2){let e=E(2);h(),ce(e.triggerValue)}}function zb(n,i){if(n&1&&(p(0,"span",5),L(1,jb,1,0)(2,Ub,2,1,"span",11),_()),n&2){let e=E();h(),B(e.customTrigger?1:2)}}function Hb(n,i){if(n&1){let e=nt();p(0,"div",12,1),ae("keydown",function(r){Ie(e);let o=E();return Te(o._handleKeydown(r))}),A(2,1),_()}if(n&2){let e=E();ct(e.panelClass),F("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),re("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var $b=new g("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(U);return()=>bn(n)}}),Gb=new g("MAT_SELECT_CONFIG"),Wb=new g("MatSelectTrigger"),tc=class{source;value;constructor(i,e){this.source=i,this.value=e}},kf=(()=>{class n{_viewportRuler=l(wt);_changeDetectorRef=l(ue);_elementRef=l(P);_dir=l(Be,{optional:!0});_idGenerator=l(Le);_renderer=l(Ee);_parentFormField=l(Xl,{optional:!0});ngControl=l(Ca,{self:!0,optional:!0});_liveAnnouncer=l(cr);_defaultOptions=l(Gb,{optional:!0});_animationsDisabled=be();_popoverLocation;_initialized=new y;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,o=Af(e,this.options,this.optionGroups),a=t._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=Rf(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new tc(this,e)}_scrollStrategyFactory=l($b);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new y;_errorStateTracker;stateChanges=new y;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=se(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ba.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=xn(()=>{let e=this.options;return e?e.changes.pipe(Ce(e),ie(()=>at(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(ie(()=>this.optionSelectionChanges))});openedChange=new $;_openedStream=this.openedChange.pipe(Q(e=>e),C(()=>{}));_closedStream=this.openedChange.pipe(Q(e=>!e),C(()=>{}));selectionChange=new $;valueChange=new $;constructor(){let e=l(If),t=l(Gl,{optional:!0}),r=l(Wl,{optional:!0}),o=l(new Ri("tabindex"),{optional:!0}),a=l(yr,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Oa(e,this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Mr(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(q(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(q(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Ce(null),q(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(he(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&al(this._trackedModal,"aria-owns",t),ju(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;al(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,r=t===40||t===38||t===37||t===39,o=t===13||t===32,a=this._keyManager;if(!a.isTyping()&&o&&!Je(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let c=this.selected;c&&s!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,o=r===40||r===38,a=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&t.activeItem&&!Je(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(s?c.select():c.deselect())})}else{let s=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==s&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Je(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof ii?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new mr(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=at(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(q(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),at(...this.options.map(t=>t._stateChanges)).pipe(q(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Oe(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-select"]],contentQueries:function(t,r,o){if(t&1&&Ze(o,Wb,5)(o,yi,5)(o,Jl,5),t&2){let a;V(a=j())&&(r.customTrigger=a.first),V(a=j())&&(r.options=a),V(a=j())&&(r.optionGroups=a)}},viewQuery:function(t,r){if(t&1&&He(Pb,5)(Nb,5)(ia,5),t&2){let o;V(o=j())&&(r.trigger=o.first),V(o=j())&&(r.panel=o.first),V(o=j())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,r){t&1&&ae("keydown",function(a){return r._handleKeydown(a)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),t&2&&(re("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),F("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",K],disableRipple:[2,"disableRipple","disableRipple",K],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ti(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",K],placeholder:"placeholder",required:[2,"required","required",K],multiple:[2,"multiple","multiple",K],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",K],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Ti],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",K]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[_e([{provide:Kl,useExisting:n},{provide:Ql,useExisting:n}]),qe],ngContentSelectors:Bb,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,r){if(t&1&&(J(Lb),p(0,"div",2,0),ae("click",function(){return r.open()}),p(3,"div",3),L(4,Vb,2,1,"span",4)(5,zb,3,1,"span",5),_(),p(6,"div",6)(7,"div",7),$r(),p(8,"svg",8),le(9,"path",9),_()()()(),vt(10,Hb,3,16,"ng-template",10),ae("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(a){return r._handleOverlayKeydown(a)})),t&2){let o=Dt(1);h(3),re("id",r._valueId),h(),B(r.empty?4:5),h(6),de("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[ii,ia],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return n})();var Of=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=I({imports:[oi,ec,ee,It,Fa,ec]})}return n})();var La=["*"],Yb=["content"],Kb=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Xb=["mat-drawer","mat-drawer-content","*"];function Zb(n,i){if(n&1){let e=nt();p(0,"div",1),ae("click",function(){Ie(e);let r=E();return Te(r._onBackdropClicked())}),_()}if(n&2){let e=E();F("mat-drawer-shown",e._isShowingBackdrop())}}function Qb(n,i){n&1&&(p(0,"mat-drawer-content"),A(1,2),_())}var Jb=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],ey=["mat-sidenav","mat-sidenav-content","*"];function ty(n,i){if(n&1){let e=nt();p(0,"div",1),ae("click",function(){Ie(e);let r=E();return Te(r._onBackdropClicked())}),_()}if(n&2){let e=E();F("mat-drawer-shown",e._isShowingBackdrop())}}function ny(n,i){n&1&&(p(0,"mat-sidenav-content"),A(1,2),_())}var iy=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var ry=new g("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),rc=new g("MAT_DRAWER_CONTAINER"),Pa=(()=>{class n extends ei{_platform=l(oe);_changeDetectorRef=l(ue);_container=l(ic);constructor(){let e=l(P),t=l(vn),r=l(O);super(e,t,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,r){t&2&&(_t("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),F("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[_e([{provide:ei,useExisting:n}]),ve],ngContentSelectors:La,decls:1,vars:0,template:function(t,r){t&1&&(J(),A(0))},encapsulation:2,changeDetection:0})}return n})(),nc=(()=>{class n{_elementRef=l(P);_focusTrapFactory=l(rl);_focusMonitor=l(Yt);_platform=l(oe);_ngZone=l(O);_renderer=l(Ee);_interactivityChecker=l(Go);_doc=l(R);_container=l(rc,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=ht(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=ht(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(ht(e))}_opened=se(!1);_openedVia=null;_animationStarted=new y;_animationEnd=new y;openedChange=new $(!0);_openedStream=this.openedChange.pipe(Q(e=>e),C(()=>{}));openedStart=this._animationStarted.pipe(Q(()=>this.opened),Za(void 0));_closedStream=this.openedChange.pipe(Q(e=>!e),C(()=>{}));closedStart=this._animationStarted.pipe(Q(()=>!this.opened),Za(void 0));_destroyed=new y;onPositionChanged=new $;_content;_modeChanged=new y;_injector=l(U);_changeDetectorRef=l(ue);constructor(){this.openedChange.pipe(q(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!Je(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(t)}_focusByCssSelector(e,t){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":ke(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,t,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(he(1)).subscribe(a=>o(a?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,r=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,t)),r.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-drawer"]],viewQuery:function(t,r){if(t&1&&He(Yb,5),t&2){let o;V(o=j())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,r){t&2&&(re("align",null)("tabIndex",r.mode!=="side"?"-1":null),_t("visibility",!r._container&&!r.opened?"hidden":null),F("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:La,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,r){t&1&&(J(),p(0,"div",1,0),A(2),_())},dependencies:[ei],encapsulation:2,changeDetection:0})}return n})(),ic=(()=>{class n{_dir=l(Be,{optional:!0});_element=l(P);_ngZone=l(O);_changeDetectorRef=l(ue);_animationDisabled=be();_transitionsEnabled=!1;_allDrawers;_drawers=new tn;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=ht(e)}_autosize=l(ry);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:ht(e)}_backdropOverride=null;backdropClick=new $;_start=null;_end=null;_left=null;_right=null;_destroyed=new y;_doCheckSubject=new y;_contentMargins={left:null,right:null};_contentMarginChanges=new y;get scrollable(){return this._userContent||this._content}_injector=l(U);constructor(){let e=l(oe),t=l(wt);this._dir?.change.pipe(q(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(q(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Ce(this._allDrawers),q(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Ce(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(En(10),q(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,t-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();t+=r,e-=r}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(q(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(q(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(q(this._drawers.changes)).subscribe(()=>{ke({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(q(at(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?t.add(r):t.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(t,r,o){if(t&1&&Ze(o,Pa,5)(o,nc,5),t&2){let a;V(a=j())&&(r._content=a.first),V(a=j())&&(r._allDrawers=a)}},viewQuery:function(t,r){if(t&1&&He(Pa,5),t&2){let o;V(o=j())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,r){t&2&&F("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[_e([{provide:rc,useExisting:n}])],ngContentSelectors:Xb,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,r){t&1&&(J(Kb),L(0,Zb,1,2,"div",0),A(1),A(2,1),L(3,Qb,2,0,"mat-drawer-content")),t&2&&(B(r.hasBackdrop?0:-1),h(3),B(r._content?-1:3))},dependencies:[Pa],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return n})(),Na=(()=>{class n extends Pa{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ye(n)))(r||n)}})();static \u0275cmp=D({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[_e([{provide:ei,useExisting:n}]),ve],ngContentSelectors:La,decls:1,vars:0,template:function(t,r){t&1&&(J(),A(0))},encapsulation:2,changeDetection:0})}return n})(),oc=(()=>{class n extends nc{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=ht(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Rt(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Rt(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ye(n)))(r||n)}})();static \u0275cmp=D({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,r){t&2&&(re("tabIndex",r.mode!=="side"?"-1":null)("align",null),_t("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),F("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[_e([{provide:nc,useExisting:n}]),ve],ngContentSelectors:La,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,r){t&1&&(J(),p(0,"div",1,0),A(2),_())},dependencies:[ei],encapsulation:2,changeDetection:0})}return n})(),Ff=(()=>{class n extends ic{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ye(n)))(r||n)}})();static \u0275cmp=D({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(t,r,o){if(t&1&&Ze(o,Na,5)(o,oc,5),t&2){let a;V(a=j())&&(r._content=a.first),V(a=j())&&(r._allDrawers=a)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,r){t&2&&F("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[_e([{provide:rc,useExisting:n},{provide:ic,useExisting:n}]),ve],ngContentSelectors:ey,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,r){t&1&&(J(Jb),L(0,ty,1,2,"div",0),A(1),A(2,1),L(3,ny,2,0,"mat-sidenav-content")),t&2&&(B(r.hasBackdrop?0:-1),h(3),B(r._content?-1:3))},dependencies:[Na],styles:[iy],encapsulation:2,changeDetection:0})}return n})(),Pf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=I({imports:[It,ee,It]})}return n})();var ay=["*"];var sy=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],ly=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],cy=new g("MAT_CARD_CONFIG"),Nf=(()=>{class n{appearance;constructor(){let e=l(cy,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&F("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:ay,decls:1,vars:0,template:function(t,r){t&1&&(J(),A(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return n})();var Lf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})();var Bf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:ly,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(t,r){t&1&&(J(sy),A(0),ze(1,"div",0),A(2,1),Xe(),A(3,2))},encapsulation:2,changeDetection:0})}return n})();var Vf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=I({imports:[ee]})}return n})();var Ba=class{tracker;columnIndex=0;rowIndex=0;get rowCount(){return this.rowIndex+1}get rowspan(){let i=Math.max(...this.tracker);return i>1?this.rowCount+i-1:this.rowCount}positions;update(i,e){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(i),this.tracker.fill(0,0,this.tracker.length),this.positions=e.map(t=>this._trackTile(t))}_trackTile(i){let e=this._findMatchingGap(i.colspan);return this._markTilePosition(e,i),this.columnIndex=e+i.colspan,new ac(this.rowIndex,e)}_findMatchingGap(i){i>this.tracker.length;let e=-1,t=-1;do{if(this.columnIndex+i>this.tracker.length){this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),t=this._findGapEndIndex(e);continue}if(e=this.tracker.indexOf(0,this.columnIndex),e==-1){this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),t=this._findGapEndIndex(e);continue}t=this._findGapEndIndex(e),this.columnIndex=e+1}while(t-e<i||t==0);return Math.max(e,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let i=0;i<this.tracker.length;i++)this.tracker[i]=Math.max(0,this.tracker[i]-1)}_findGapEndIndex(i){for(let e=i+1;e<this.tracker.length;e++)if(this.tracker[e]!=0)return e;return this.tracker.length}_markTilePosition(i,e){for(let t=0;t<e.colspan;t++)this.tracker[i+t]=e.rowspan}},ac=class{row;col;constructor(i,e){this.row=i,this.col=e}};var jf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","mat-line",""],["","matLine",""]],hostAttrs:[1,"mat-line"]})}return n})();function Uf(n,i,e="mat"){n.changes.pipe(Ce(n)).subscribe(({length:t})=>{Fr(i,`${e}-2-line`,!1),Fr(i,`${e}-3-line`,!1),Fr(i,`${e}-multi-line`,!1),t===2||t===3?Fr(i,`${e}-${t}-line`,!0):t>3&&Fr(i,`${e}-multi-line`,!0)})}function Fr(n,i,e){n.nativeElement.classList.toggle(i,e)}var sc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=I({imports:[ee]})}return n})();var zf=["*"],uy=[[["","mat-grid-avatar",""],["","matGridAvatar",""]],[["","mat-line",""],["","matLine",""]],"*"],hy=["[mat-grid-avatar], [matGridAvatar]","[mat-line], [matLine]","*"],fy=`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`,Hf=new g("MAT_GRID_LIST"),uc=(()=>{class n{_element=l(P);_gridList=l(Hf,{optional:!0});_rowspan=1;_colspan=1;constructor(){}get rowspan(){return this._rowspan}set rowspan(e){this._rowspan=Math.round(Rt(e))}get colspan(){return this._colspan}set colspan(e){this._colspan=Math.round(Rt(e))}_setStyle(e,t){this._element.nativeElement.style[e]=t}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(t,r){t&2&&re("rowspan",r.rowspan)("colspan",r.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:zf,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(t,r){t&1&&(J(),ze(0,"div",0),A(1),Xe())},styles:[`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`],encapsulation:2,changeDetection:0})}return n})(),$f=(()=>{class n{_element=l(P);_lines;constructor(){}ngAfterContentInit(){Uf(this._lines,this._element)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-grid-tile-header"],["mat-grid-tile-footer"]],contentQueries:function(t,r,o){if(t&1&&Ze(o,jf,5),t&2){let a;V(a=j())&&(r._lines=a)}},ngContentSelectors:hy,decls:4,vars:0,consts:[[1,"mat-grid-list-text"]],template:function(t,r){t&1&&(J(uy),A(0),ze(1,"div",0),A(2,1),Xe(),A(3,2))},encapsulation:2,changeDetection:0})}return n})();var Gf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["mat-grid-tile-header"]],hostAttrs:[1,"mat-grid-tile-header"]})}return n})();var my=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,Pr=class{_gutterSize;_rows=0;_rowspan=0;_cols;_direction;init(i,e,t,r){this._gutterSize=Wf(i),this._rows=e.rowCount,this._rowspan=e.rowspan,this._cols=t,this._direction=r}getBaseTileSize(i,e){return`(${i}% - (${this._gutterSize} * ${e}))`}getTilePosition(i,e){return e===0?"0":Cn(`(${i} + ${this._gutterSize}) * ${e}`)}getTileSize(i,e){return`(${i} * ${e}) + (${e-1} * ${this._gutterSize})`}setStyle(i,e,t){let r=100/this._cols,o=(this._cols-1)/this._cols;this.setColStyles(i,t,r,o),this.setRowStyles(i,e,r,o)}setColStyles(i,e,t,r){let o=this.getBaseTileSize(t,r),a=this._direction==="rtl"?"right":"left";i._setStyle(a,this.getTilePosition(o,e)),i._setStyle("width",Cn(this.getTileSize(o,i.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(i){return`${this._rowspan} * ${this.getTileSize(i,1)}`}getComputedHeight(){return null}},lc=class extends Pr{fixedRowHeight;constructor(i){super(),this.fixedRowHeight=i}init(i,e,t,r){super.init(i,e,t,r),this.fixedRowHeight=Wf(this.fixedRowHeight),my.test(this.fixedRowHeight)}setRowStyles(i,e){i._setStyle("top",this.getTilePosition(this.fixedRowHeight,e)),i._setStyle("height",Cn(this.getTileSize(this.fixedRowHeight,i.rowspan)))}getComputedHeight(){return["height",Cn(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(i){i._setListStyle(["height",null]),i._tiles&&i._tiles.forEach(e=>{e._setStyle("top",null),e._setStyle("height",null)})}},cc=class extends Pr{rowHeightRatio;baseTileHeight;constructor(i){super(),this._parseRatio(i)}setRowStyles(i,e,t,r){let o=t/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(o,r),i._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,e)),i._setStyle("paddingTop",Cn(this.getTileSize(this.baseTileHeight,i.rowspan)))}getComputedHeight(){return["paddingBottom",Cn(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(i){i._setListStyle(["paddingBottom",null]),i._tiles.forEach(e=>{e._setStyle("marginTop",null),e._setStyle("paddingTop",null)})}_parseRatio(i){let e=i.split(":");e.length,this.rowHeightRatio=parseFloat(e[0])/parseFloat(e[1])}},dc=class extends Pr{setRowStyles(i,e){let t=100/this._rowspan,r=(this._rows-1)/this._rows,o=this.getBaseTileSize(t,r);i._setStyle("top",this.getTilePosition(o,e)),i._setStyle("height",Cn(this.getTileSize(o,i.rowspan)))}reset(i){i._tiles&&i._tiles.forEach(e=>{e._setStyle("top",null),e._setStyle("height",null)})}};function Cn(n){return`calc(${n})`}function Wf(n){return n.match(/([A-Za-z%]+)$/)?n:`${n}px`}var py="fit",qf=(()=>{class n{_element=l(P);_dir=l(Be,{optional:!0});_cols;_tileCoordinator;_rowHeight;_gutter="1px";_tileStyler;_tiles;constructor(){}get cols(){return this._cols}set cols(e){this._cols=Math.max(1,Math.round(Rt(e)))}get gutterSize(){return this._gutter}set gutterSize(e){this._gutter=`${e??""}`}get rowHeight(){return this._rowHeight}set rowHeight(e){let t=`${e??""}`;t!==this._rowHeight&&(this._rowHeight=t,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){this.cols}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(e){this._tileStyler&&this._tileStyler.reset(this),e===py?this._tileStyler=new dc:e&&e.indexOf(":")>-1?this._tileStyler=new cc(e):this._tileStyler=new lc(e)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new Ba);let e=this._tileCoordinator,t=this._tiles.filter(o=>!o._gridList||o._gridList===this),r=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,t),this._tileStyler.init(this.gutterSize,e,this.cols,r),t.forEach((o,a)=>{let s=e.positions[a];this._tileStyler.setStyle(o,s.row,s.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(e){e&&(this._element.nativeElement.style[e[0]]=e[1])}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-grid-list"]],contentQueries:function(t,r,o){if(t&1&&Ze(o,uc,5),t&2){let a;V(a=j())&&(r._tiles=a)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(t,r){t&2&&re("cols",r.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[_e([{provide:Hf,useExisting:n}])],ngContentSelectors:zf,decls:2,vars:0,template:function(t,r){t&1&&(J(),ze(0,"div"),A(1),Xe())},styles:[fy],encapsulation:2,changeDetection:0})}return n})(),Yf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=I({imports:[sc,ee,sc]})}return n})();var Kf=(()=>{class n{get vertical(){return this._vertical}set vertical(e){this._vertical=ht(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=ht(e)}_inset=!1;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,r){t&2&&(re("aria-orientation",r.vertical?"vertical":"horizontal"),F("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return n})(),Xf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=I({imports:[ee]})}return n})();var _y=["*",[["mat-toolbar-row"]]],by=["*","mat-toolbar-row"],yy=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),Va=(()=>{class n{_elementRef=l(P);_platform=l(oe);_document=l(R);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,r,o){if(t&1&&Ze(o,yy,5),t&2){let a;V(a=j())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,r){t&2&&(ct(r.color?"mat-"+r.color:""),F("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:by,decls:2,vars:0,template:function(t,r){t&1&&(J(_y),A(0),A(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var ja=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=I({imports:[ee]})}return n})();function Qf(n){return Error(`Unable to find icon with the name "${n}"`)}function wy(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Jf(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function em(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var Ot=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},nm=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new Ot(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,o){let a=this._sanitizer.sanitize(je.HTML,r);if(!a)throw em(r);let s=fn(a);return this._addSvgIconConfig(e,t,new Ot("",s,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new Ot(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize(je.HTML,t);if(!o)throw em(t);let a=fn(o);return this._addSvgIconSetConfig(e,new Ot("",a,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(je.RESOURCE_URL,e);if(!t)throw Jf(e);let r=this._cachedIconsByUrl.get(t);return r?b(Ua(r)):this._loadSvgIconFromConfig(new Ot(e,null)).pipe(fe(o=>this._cachedIconsByUrl.set(t,o)),C(o=>Ua(o)))}getNamedSvgIcon(e,t=""){let r=tm(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):We(Qf(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?b(Ua(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(C(t=>Ua(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return b(r);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Ct(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(je.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),b(null)})));return Ft(o).pipe(C(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw Qf(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(fe(t=>e.svgText=t),C(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?b(null):this._fetchIcon(e).pipe(fe(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(fn("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(fn("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&t.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw wy();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(je.RESOURCE_URL,t);if(!a)throw Jf(t);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(C(d=>fn(d)),Qt(()=>this._inProgressUrlFetches.delete(a)),yc());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(tm(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return Cy(o)?new Ot(o.url,null,o.options):new Ot(o,null)}}static \u0275fac=function(t){return new(t||n)(S(Ln,8),S(Ui),S(R,8),S(en))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ua(n){return n.cloneNode(!0)}function tm(n,i){return n+":"+i}function Cy(n){return!!(n.url&&n.options)}var Dy=["*"],xy=new g("MAT_ICON_DEFAULT_OPTIONS"),Sy=new g("mat-icon-location",{providedIn:"root",factory:()=>{let n=l(R),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),im=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Ey=im.map(n=>`[${n}]`).join(", "),My=/^url\(['"]?#(.*?)['"]?\)$/,za=(()=>{class n{_elementRef=l(P);_iconRegistry=l(nm);_location=l(Sy);_errorHandler=l(en);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ge.EMPTY;constructor(){let e=l(new Ri("aria-hidden"),{optional:!0}),t=l(xy,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Ey),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)im.forEach(a=>{let s=t[o],c=s.getAttribute(a),d=c?c.match(My):null;if(d){let u=r.get(s);u||(u=[],r.set(s,u)),u.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(he(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(re("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),ct(r.color?"mat-"+r.color:""),F("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",K],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Dy,decls:1,vars:0,template:function(t,r){t&1&&(J(),A(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ha=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=I({imports:[ee]})}return n})();var Ay=["mat-menu-item",""],Ry=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Iy=["mat-icon, [matMenuItemIcon]","*"];function Ty(n,i){n&1&&($r(),p(0,"svg",2),le(1,"polygon",3),_())}var ky=["*"];function Oy(n,i){if(n&1){let e=nt();ze(0,"div",0),zc("click",function(){Ie(e);let r=E();return Te(r.closed.emit("click"))})("animationstart",function(r){Ie(e);let o=E();return Te(o._onAnimationStart(r.animationName))})("animationend",function(r){Ie(e);let o=E();return Te(o._onAnimationDone(r.animationName))})("animationcancel",function(r){Ie(e);let o=E();return Te(o._onAnimationDone(r.animationName))}),ze(1,"div",1),A(2),Xe()()}if(n&2){let e=E();ct(e._classList),F("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Vt("id",e.panelId),re("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var fc=new g("MAT_MENU_PANEL"),Nr=(()=>{class n{_elementRef=l(P);_document=l(R);_focusMonitor=l(Yt);_parentMenu=l(fc,{optional:!0});_changeDetectorRef=l(ue);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new y;_focused=new y;_highlighted=!1;_triggersSubmenu=!1;constructor(){l(Qe).load(ai),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<t.length;r++)t[r].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,r){t&1&&ae("click",function(a){return r._checkDisabled(a)})("mouseenter",function(){return r._handleMouseEnter()}),t&2&&(re("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),F("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",K],disableRipple:[2,"disableRipple","disableRipple",K]},exportAs:["matMenuItem"],attrs:Ay,ngContentSelectors:Iy,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,r){t&1&&(J(Ry),A(0),p(1,"span",0),A(2,1),_(),le(3,"div",1),L(4,Ty,2,0,":svg:svg",2)),t&2&&(h(3),de("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),h(),B(r._triggersSubmenu?4:-1))},dependencies:[ra],encapsulation:2,changeDetection:0})}return n})();var Fy=new g("MatMenuContent");var Py=new g("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),hc="_mat-menu-enter",$a="_mat-menu-exit",Ci=(()=>{class n{_elementRef=l(P);_changeDetectorRef=l(ue);_injector=l(U);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=be();_allItems;_directDescendantItems=new tn;_classList={};_panelAnimationState="void";_animationDone=new y;_isAnimating=se(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,r=f({},this._classList);t&&t.length&&t.split(" ").forEach(o=>{r[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{r[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=r}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new $;close=this.closed;panelId=l(Le).getId("mat-menu-panel-");constructor(){let e=l(Py);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new pr(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Ce(this._directDescendantItems),ie(e=>at(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let r=e.toArray(),o=Math.max(0,Math.min(r.length-1,t.activeItemIndex||0));r[o]&&!r[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Ce(this._directDescendantItems),ie(t=>at(...t.map(r=>r._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,r=this._keyManager;switch(t){case 27:Je(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=ke(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(e).setFirstItemActive(),!r.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=W(f({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===$a;(t||e===hc)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===hc||e===$a)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone($a),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?hc:$a)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Ce(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-menu"]],contentQueries:function(t,r,o){if(t&1&&Ze(o,Fy,5)(o,Nr,5)(o,Nr,4),t&2){let a;V(a=j())&&(r.lazyContent=a.first),V(a=j())&&(r._allItems=a),V(a=j())&&(r.items=a)}},viewQuery:function(t,r){if(t&1&&He(st,5),t&2){let o;V(o=j())&&(r.templateRef=o.first)}},hostVars:3,hostBindings:function(t,r){t&2&&re("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",K],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:K(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[_e([{provide:fc,useExisting:n}])],ngContentSelectors:ky,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,r){t&1&&(J(),Bc(0,Oy,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ny=new g("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(U);return()=>bn(n)}});var wi=new WeakMap,Ly=(()=>{class n{_canHaveBackdrop;_element=l(P);_viewContainerRef=l(et);_menuItemInstance=l(Nr,{optional:!0,self:!0});_dir=l(Be,{optional:!0});_focusMonitor=l(Yt);_ngZone=l(O);_injector=l(U);_scrollStrategy=l(Ny);_changeDetectorRef=l(ue);_animationsDisabled=be();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=ge.EMPTY;_menuCloseSubscription=ge.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=l(fc,{optional:!0});this._parentMaterialMenu=t instanceof Ci?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&wi.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let r=wi.get(t);wi.set(t,this),r&&r!==this&&r._closeMenu();let o=this._createOverlay(t),a=o.getConfig(),s=a.positionStrategy;this._setPosition(t,s),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof Ci&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(q(t.close)).subscribe(()=>{s.withLockedPosition(!1).reapplyLastPosition(),s.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,r=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof Ci&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(he(1)).subscribe(()=>{t.detach(),wi.has(r)||r.lazyContent?.detach()}),r._setIsOpen(!1)):(t.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&wi.delete(r),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=yn(this._injector,t),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof Ci&&this._menu._handleKeydown(r)})}return this._overlayRef}_getOverlayConfig(e){return new kt({positionStrategy:br(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let o=r.connectionPair.overlayX==="start"?"after":"before",a=r.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,a)})})}_setPosition(e,t){let[r,o]=e.xPosition==="before"?["end","start"]:["start","end"],[a,s]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[c,d]=[a,s],[u,m]=[r,o],x=0;if(this._triggersSubmenu()){if(m=r=e.xPosition==="before"?"start":"end",o=u=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let G=this._parentMaterialMenu.items.first;this._parentInnerPadding=G?G._getHostElement().offsetTop:0}x=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(c=a==="top"?"bottom":"top",d=s==="top"?"bottom":"top");t.withPositions([{originX:r,originY:c,overlayX:u,overlayY:a,offsetY:x},{originX:o,originY:c,overlayX:m,overlayY:a,offsetY:x},{originX:r,originY:d,overlayX:u,overlayY:s,offsetY:-x},{originX:o,originY:d,overlayX:m,overlayY:s,offsetY:-x}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:b(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Q(a=>this._menuOpen&&a!==this._menuItemInstance)):b();return at(e,r,o,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Tt(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return wi.get(e)===this}_triggerIsAriaDisabled(){return K(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Kr()};static \u0275dir=N({type:n})}return n})(),om=(()=>{class n extends Ly{_cleanupTouchstart;_hoverSubscription=ge.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new $;onMenuOpen=this.menuOpened;menuClosed=new $;onMenuClose=this.menuClosed;constructor(){super(!0);let e=l(Ee);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{hn(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){un(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,r){t&1&&ae("click",function(a){return r._handleClick(a)})("mousedown",function(a){return r._handleMousedown(a)})("keydown",function(a){return r._handleKeydown(a)}),t&2&&re("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu==null?null:r.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[ve]})}return n})();var am=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=I({imports:[si,oi,ee,It]})}return n})();function Vy(n,i){if(n&1){let e=nt();p(0,"button",3),ae("click",function(){let r=Ie(e).$implicit,o=E();return Te(o.changeLanguage(r))}),p(1,"mat-icon"),w(2," language "),_(),p(3,"span"),w(4),jt(5,"transloco"),_()()}if(n&2){let e=i.$implicit,t=E();F("active",t.activeLang===e),h(),_t("color",t.activeLang===e?"rgb(255 143 0)":""),h(2),_t("color",t.activeLang===e?"rgb(255 143 0)":""),h(),Y(" ",Ut(5,7,e+"-language-label")," ")}}var Ga=class n{activeLang;availableLangs;translocoService=l(fi);ngOnInit(){let i=`${Fl()}`;this.availableLangs=this.translocoService.getAvailableLangs(),this.translocoService.isLang(i)?(this.activeLang=Fl(),this.translocoService.setActiveLang(this.activeLang)):this.activeLang=this.translocoService.getDefaultLang()}changeLanguage(i){this.translocoService.setActiveLang(i),this.activeLang=this.translocoService.getActiveLang()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-language-selector"]],decls:10,vars:4,consts:[["menu","matMenu"],["mat-icon-button","","aria-label","Language Selection",1,"example-icon","favorite-icon",3,"matMenuTriggerFor"],["mat-menu-item","",3,"active"],["mat-menu-item","",3,"click"]],template:function(e,t){if(e&1&&(p(0,"button",1)(1,"mat-icon"),w(2,"translate"),_()(),p(3,"span"),w(4),jt(5,"transloco"),_(),p(6,"mat-menu",null,0),Lt(8,Vy,6,9,"button",2,Zr),_()),e&2){let r=Dt(7);de("matMenuTriggerFor",r),h(4),ce(Ut(5,2,t.activeLang+"-language-label")),h(4),Bt(t.availableLangs)}},dependencies:[eo,wn,Dr,Ha,za,am,Ci,Nr,om,Bh,mi],encapsulation:2})};function jy(n,i){n&1&&(p(0,"span"),w(1),jt(2,"transloco"),_()),n&2&&(h(),ce(Ut(2,1,"app-title")))}function Uy(n,i){n&1&&(p(0,"span",4),w(1),jt(2,"transloco"),_()),n&2&&(h(),ce(Ut(2,1,"app-title-short")))}var Wa=class n{sidebarHandle;isXSmall;responsive=l(pn);ngOnInit(){this.responsive.observe(Qn.XSmall).subscribe(i=>{i.matches?this.isXSmall=!0:this.isXSmall=!1})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-page-header"]],inputs:{sidebarHandle:"sidebarHandle"},decls:10,vars:4,consts:[[1,"page-header"],[1,"main-toolbar","toolbar"],["type","button","mat-icon-button","",3,"click","hidden"],[1,"app-name","text-xl"],[1,"text-xl"],[1,"spacer"]],template:function(e,t){e&1&&(p(0,"div",0)(1,"mat-toolbar",1)(2,"button",2),ae("click",function(){return t.sidebarHandle.toggle()}),p(3,"mat-icon"),w(4,"menu"),_()(),p(5,"span",3),L(6,jy,3,3,"span")(7,Uy,3,3,"span",4),_(),le(8,"span",5)(9,"app-language-selector"),_()()),e&2&&(h(),F("is-mobile",t.isXSmall),h(),de("hidden",!t.isXSmall),h(4),B(t.isXSmall?7:6))},dependencies:[ja,Va,wn,Dr,Ha,za,Ga,mi],styles:[".is-mobile[_ngcontent-%COMP%]{position:fixed;z-index:2}.app-name[_ngcontent-%COMP%]{margin:0 0 0 8px}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-toolbar[_ngcontent-%COMP%]{color:var(--mat-sys-primary);background:var(--bg-color)}"]})};var qa=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-page-footer"]],decls:7,vars:3,consts:[[1,"page-footer","text-xs","flex","items-center","flex-row","flex-wrap"],["color","primary",1,"page-footer"],[1,"flex","flex-1","justify-end","text-xl"],["href","https://boardgamegeek.com/user/Vortilion","target","_blank",1,"text-blue-700"]],template:function(e,t){e&1&&(p(0,"div",0)(1,"mat-toolbar",1)(2,"div",2),w(3),jt(4,"transloco"),p(5,"a",3),w(6,"Vortilion"),_()()()()),e&2&&(h(3),Y(" ",Ut(4,1,"creator-prefix"),"\xA0"))},dependencies:[ja,Va,mi],styles:[".page-footer[_ngcontent-%COMP%]{color:var(--mat-sys-primary);background:var(--bg-color)}"]})};var zy=n=>({"w-full":n}),Hy=(n,i)=>i.value,mc=(n,i)=>i.title;function $y(n,i){if(n&1&&(p(0,"mat-option",10),w(1),p(2,"span"),w(3),_()()),n&2){let e=i.$implicit,t=E().$implicit;de("value",e.value),h(),Y(" ",e.label," "),h(2),ce(t("players-label"))}}function Gy(n,i){if(n&1&&(p(0,"li",20)(1,"span"),w(2),_()()),n&2){let e=i.$implicit;h(2),ce(e.title)}}function Wy(n,i){if(n&1&&(p(0,"mat-grid-tile")(1,"mat-grid-tile-header")(2,"h3")(3,"span"),w(4),_(),w(5,": "),_()(),p(6,"ul",19),Lt(7,Gy,3,1,"li",20,mc),_()()),n&2){let e=E().$implicit,t=E();h(4),ce(e("neutral-buildings-label")),h(3),Bt(t.randomNeutralBuildings)}}function qy(n,i){if(n&1&&(p(0,"div"),le(1,"img",21),_()),n&2){let e=i.$implicit;h(),de("src",e.sides[0].image,Pc)}}function Yy(n,i){if(n&1&&(p(0,"mat-grid-tile")(1,"mat-grid-tile-header")(2,"h3")(3,"span"),w(4),_(),w(5,": "),_()(),p(6,"div",19),Lt(7,qy,2,1,"div",null,mc),_()()),n&2){let e=E().$implicit,t=E();h(4),ce(e("harbor-masters-label")),h(3),Bt(t.randomHarborMasters)}}function Ky(n,i){if(n&1&&(p(0,"li",20)(1,"span"),w(2),_()()),n&2){let e=i.$implicit;h(2),ce(e)}}function Xy(n,i){if(n&1&&(p(0,"mat-grid-tile")(1,"mat-grid-tile-header")(2,"h3")(3,"span"),w(4),_(),w(5,": "),_()(),p(6,"ul",19),Lt(7,Ky,3,1,"li",20,Zr),_()()),n&2){let e=E().$implicit,t=E();h(4),ce(e("deckbuilding-modules-label")),h(3),Bt(t.randomDeckbuildingModules)}}function Zy(n,i){if(n&1&&(p(0,"span",17)(1,"span",22),w(2),_()()),n&2){let e=i.$implicit;h(2),Gc("",e.title,"",e.sides[0].title," ")}}function Qy(n,i){if(n&1&&(p(0,"li"),w(1),_()),n&2){let e=E().$implicit;h(),Y(" ",e("further-steps-step21")," ")}}function Jy(n,i){if(n&1&&(p(0,"li"),w(1),_()),n&2){let e=E().$implicit;h(),Y(" ",e("further-steps-step22")," ")}}function e0(n,i){if(n&1&&(p(0,"li"),w(1),_()),n&2){let e=E().$implicit;h(),Y(" ",e("further-steps-step23")," ")}}function t0(n,i){if(n&1&&(p(0,"li"),w(1),_()),n&2){let e=E().$implicit;h(),Y(" ",e("further-steps-step51")," ")}}function n0(n,i){if(n&1&&(p(0,"li"),w(1),_()),n&2){let e=E().$implicit;h(),Y(" ",e("further-steps-step52")," ")}}function i0(n,i){if(n&1&&(p(0,"li"),w(1),_()),n&2){let e=E().$implicit;h(),Y(" ",e("further-steps-step53")," ")}}function r0(n,i){if(n&1&&(p(0,"li"),w(1),_()),n&2){let e=E().$implicit;h(),Y(" ",e("further-steps-step81")," ")}}function o0(n,i){if(n&1&&(p(0,"li"),w(1),_()),n&2){let e=E().$implicit;h(),Y(" ",e("further-steps-step82")," ")}}function a0(n,i){if(n&1&&(p(0,"li"),w(1),_()),n&2){let e=E().$implicit;h(),Y(" ",e("further-steps-step83")," ")}}function s0(n,i){if(n&1&&(p(0,"li"),w(1),_()),n&2){let e=E().$implicit;h(),Y(" ",e("further-steps-step113")," ")}}function l0(n,i){if(n&1&&(p(0,"li"),w(1),_()),n&2){let e=E().$implicit;h(),Y(" ",e("further-steps-step114")," ")}}function c0(n,i){if(n&1){let e=nt();jc(0),p(1,"div",2),le(2,"app-page-header",3),p(3,"mat-sidenav-container",4)(4,"mat-sidenav",5,0)(6,"div",6)(7,"h2"),w(8),_(),le(9,"mat-divider",7),p(10,"h3"),w(11),_(),p(12,"mat-form-field",8)(13,"mat-label"),w(14),_(),p(15,"mat-select",9),ae("selectionChange",function(r){Ie(e);let o=E();return Te(o.onPlayerCountChange(r))}),Lt(16,$y,4,3,"mat-option",10,Hy),_()()()(),p(18,"mat-sidenav-content")(19,"div",11)(20,"div",12)(21,"div",13)(22,"button",14),ae("click",function(){Ie(e);let r=E();return Te(r.randomizeSetup())}),p(23,"span"),w(24),_()()(),p(25,"mat-grid-list",15),L(26,Wy,9,1,"mat-grid-tile"),L(27,Yy,9,1,"mat-grid-tile"),L(28,Xy,9,1,"mat-grid-tile"),p(29,"mat-grid-tile")(30,"mat-grid-tile-header")(31,"h3")(32,"span"),w(33),_(),w(34,": "),_()(),p(35,"div",16),Lt(36,Zy,3,2,"span",17,mc),_()()(),p(38,"mat-card")(39,"mat-card-header")(40,"h3")(41,"span"),w(42),_()()(),p(43,"mat-card-content")(44,"ol")(45,"li"),w(46),_(),p(47,"li"),w(48),p(49,"ul",18),L(50,Qy,2,1,"li"),L(51,Jy,2,1,"li"),L(52,e0,2,1,"li"),_()(),p(53,"li"),w(54),_(),p(55,"li"),w(56),_(),p(57,"li"),w(58),p(59,"ul",18),L(60,t0,2,1,"li"),L(61,n0,2,1,"li"),L(62,i0,2,1,"li"),_()(),p(63,"li"),w(64),_(),p(65,"li"),w(66),_(),p(67,"li"),w(68),p(69,"ul",18),L(70,r0,2,1,"li"),L(71,o0,2,1,"li"),L(72,a0,2,1,"li"),_()(),p(73,"li"),w(74),p(75,"ul",18)(76,"li"),w(77),_(),p(78,"li"),w(79),_(),p(80,"li"),w(81),_(),p(82,"li"),w(83),_()()(),p(84,"li"),w(85),_(),p(86,"li"),w(87),p(88,"ul",18)(89,"li"),w(90),_(),p(91,"li"),w(92),_(),L(93,s0,2,1,"li"),L(94,l0,2,1,"li"),_()()()()()()()()(),le(95,"app-page-footer"),_(),Uc()}if(n&2){let e=i.$implicit,t=Dt(5),r=E();h(),F("is-mobile",r.isXSmall),h(),de("sidebarHandle",t),h(),_t("padding-top",r.isXSmall?56:0,"px"),h(),de("mode",r.isXSmall?"over":"side")("fixedInViewport",r.isXSmall)("opened",r.isXSmall?"false":"opened"),h(4),Y("",e("options-label"),":"),h(3),Y("",e("player-count-label"),":"),h(3),ce(e("player-count-select-label")),h(),de("value",r.playerCount),h(),Bt(r.playerCountList),h(6),ct(Wc(49,zy,r.isXSmall)),h(2),ce(e("btn-setup-label")),h(),de("cols",r.isMax1280?1:2),h(),B(r.randomNeutralBuildings.length>0?26:-1),h(),B(r.randomHarborMasters&&r.randomHarborMasters.length>0?27:-1),h(),B(r.randomDeckbuildingModules.length>0?28:-1),h(5),ce(e("player-buildings-label")),h(3),Bt(r.randomPlayerBuildings),h(6),ce(e("further-setup-steps-label")),h(4),Y("1. ",e("further-steps-step1")),h(2),Y(" 2. ",e("further-steps-step2")," "),h(2),B(r.playerCount===2?50:-1),h(),B(r.playerCount===3?51:-1),h(),B(r.playerCount===4?52:-1),h(2),Y("3. ",e("further-steps-step3")),h(2),Y("4. ",e("further-steps-step4")),h(2),Y(" 5. ",e("further-steps-step5")," "),h(2),B(r.playerCount===2?60:-1),h(),B(r.playerCount===3?61:-1),h(),B(r.playerCount===4?62:-1),h(2),Y("6. ",e("further-steps-step6")),h(2),Y("7. ",e("further-steps-step7")),h(2),Y(" 8. ",e("further-steps-step8")," "),h(2),B(r.playerCount===2?70:-1),h(),B(r.playerCount===3?71:-1),h(),B(r.playerCount===4?72:-1),h(2),Y(" 9. ",e("further-steps-step9")," "),h(3),ce(e("further-steps-step91")),h(2),ce(e("further-steps-step92")),h(2),ce(e("further-steps-step93")),h(2),ce(e("further-steps-step94")),h(2),Y("10. ",e("further-steps-step10")),h(2),Y(" 11. ",e("further-steps-step11")," "),h(3),ce(e("further-steps-step111")),h(2),ce(e("further-steps-step112")),h(),B(r.playerCount>=3?93:-1),h(),B(r.playerCount>3?94:-1)}}var Ya=class n{randomNeutralBuildings;randomPlayerBuildings;randomHarborMasters;playerCount;playerCountList;randomDeckbuildingModules;isXSmall;isMax1280;applicationConfigService=l(fa);responsive=l(pn);storage=l(zh);ngOnInit(){this.playerCount=2,this.playerCountList=[{label:"2",value:2},{label:"3",value:3},{label:"4",value:4}],this.responsive.observe(Qn.XSmall).subscribe(i=>{i.matches?this.isXSmall=!0:this.isXSmall=!1}),this.responsive.observe("(max-width: 1280px)").subscribe(i=>{i.matches?this.isMax1280=!0:this.isMax1280=!1}),this.storage.get("rar-playerCount").subscribe(i=>{i&&typeof i=="number"?this.emitPlayerCount(i):this.storage.set("rar-playerCount",2).subscribe()}),this.applicationConfigService.playerCount.subscribe(i=>{this.playerCount=i}),this.randomizeSetup()}emitPlayerCount(i){this.applicationConfigService.playerCount.emit(i)}onPlayerCountChange(i){this.storage.set("rar-playerCount",i.value).subscribe(),this.emitPlayerCount(i.value)}randomizeSetup(){this.randomNeutralBuildings=this.applicationConfigService.getRandomNeutralBuildingOrder(),this.randomHarborMasters=this.applicationConfigService.getRandomHarborMasters(),this.randomDeckbuildingModules=this.applicationConfigService.getRandomDeckbuildingModules(),this.randomPlayerBuildings=this.applicationConfigService.getRandomPlayerBuildings()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-home"]],decls:1,vars:0,consts:[["sidenav",""],[4,"transloco"],[1,"home-component","flex","flex-col"],[3,"sidebarHandle"],[1,"sidenav-container","flex-1"],["fixedTopGap","56",1,"sidenav",3,"mode","fixedInViewport","opened"],[1,"sidenav__inner","p-4"],[1,"divider","mb-4"],["appearance","fill"],[3,"selectionChange","value"],[3,"value"],[1,"sidenav-content","flex","flex-col","min-h-full"],[1,"flex-1","px-2","xSmall:px-10","py-5"],[1,"mb-4"],["mat-flat-button","","color","primary",3,"click"],["rowHeight","180px","gutterSize","5px",3,"cols"],[1,"flex","flex-wrap"],[1,"px-2","text-2xl","xSmall:text-xl","flex-1"],[1,"list-disc","pl-8","text-gray-400"],[1,"flex"],[1,"px-2","text-2xl","xSmall:text-xl"],["alt","Harbor Master",1,"px-1","xSmall:px-2","md:px-4",3,"src"],[1,"whitespace-nowrap"]],template:function(e,t){e&1&&vt(0,c0,96,51,"ng-container",1)},dependencies:[Pf,oc,Ff,Na,Fa,ka,Or,Of,kf,yi,wn,aa,Vf,Nf,Lf,Bf,Yf,qf,uc,$f,Gf,Xf,Kf,Lh,Wa,qa],styles:[`.is-mobile[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]{flex-shrink:0;flex-grow:1;flex-basis:auto}.divider[_ngcontent-%COMP%]{margin-bottom:16px!important}
`]})};var sm=[{path:"home",component:Ya},{path:"**",redirectTo:"home",pathMatch:"full"}];var lm={providers:[Js(sm),jh(),Ss(Es()),yh("ngsw-worker.js",{enabled:!ss(),registrationStrategy:"registerWhenStable:30000"}),Vh({config:{availableLangs:["de","en","ru","pl"],defaultLang:"en",fallbackLang:"en",missingHandler:{useFallbackTranslation:!0},reRenderOnLangChange:!0,prodMode:!ss()},loader:ha})]};vs(da,lm).catch(n=>console.error(n));
