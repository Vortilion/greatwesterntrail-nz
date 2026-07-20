import{$ as T,$a as Ue,$b as C,A as Lt,Aa as rn,Ab as de,B as J,Ba as Mc,Bb as p,C as zr,Ca as Ri,Cb as _,D as Ja,Da as Ac,Db as le,E as Ct,Ea as Bt,Eb as ze,F as Mi,Fa as In,Fb as Ze,G as Rn,Ga as Tn,Gb as ct,H as he,Ha as Kr,Hb as zc,I as es,Ia as kn,Ib as Hc,J as ts,Ja as On,Jb as rt,K as en,Ka as Rc,Kb as Ut,L as Me,La as Ic,Lb as se,M as ns,Ma as Tc,Mb as $c,N as is,Na as kc,Nb as E,O as wc,Oa as Oc,Ob as ee,P as Cc,Pa as Fc,Pb as A,Q as Ai,Qa as Pc,Qb as Qe,R as Hr,Ra as je,Rb as He,S as Ce,Sa as Nc,Sb as V,T as re,Ta as Lc,Tb as j,U as Y,Ua as h,Ub as Gc,V as $r,Va as Fn,Vb as Wc,W as fe,Wa as Bc,Wb as cs,X as I,Xa as Xr,Xb as xt,Y as tn,Ya as rs,Yb as _t,Z as Gr,Za as De,Zb as F,_ as v,_a as lt,_b as dt,a as f,aa as Dc,ab as Ae,ac as ce,b as q,ba as g,bb as Xe,bc as K,c as Qa,ca as S,cb as Zr,cc as qc,d as ge,da as l,db as nt,dc as _e,e as vc,ea as Ie,eb as Qr,ec as Yc,f as Ee,fa as xc,fb as Vc,fc as zt,g as y,ga as Pe,gb as os,gc as Ht,h as Fe,ha as Ve,hb as D,hc as Kc,i as Vr,ia as Te,ib as k,ic as Xc,j as _c,ja as ke,jb as N,jc as xe,k as We,ka as Wr,kb as as,kc as $e,l as bc,la as U,lb as ve,lc as Ti,m as ye,ma as R,mb as vt,mc as eo,n as b,na as tt,nb as jc,nc as ki,o as qe,oa as Sc,ob as ss,oc as Zc,p as jr,pa as G,pb as on,pc as ds,q as yc,qa as O,qb as Ii,qc as ue,r as Sn,ra as nn,rb as ls,rc as Qc,s as w,sa as qr,sb as Uc,sc as X,t as En,ta as H,tb as it,tc as Oi,u as we,ua as Ec,ub as oe,uc as Jc,v as Ur,va as Yr,vb as L,vc as to,w as Mn,wa as Dt,wb as B,x as Nt,xa as Ye,xb as Jr,y as An,ya as Ke,yb as Vt,z as st,za as P,zb as jt}from"./chunk-Z2ZO7TFS.js";var ed=null;function St(){return ed}function us(n){ed??=n}var Fi=class{},Pn=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:()=>l(td),providedIn:"platform"})}return n})();var td=(()=>{class n extends Pn{_location;_history;_doc=l(R);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return St().getBaseHref(this._doc)}onPopState(e){let t=St().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=St().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function rd(n,i){return n?i?n.endsWith("/")?i.startsWith("/")?n+i.slice(1):n+i:i.startsWith("/")?n+i:`${n}/${i}`:n:i}function nd(n){let i=n.search(/#|\?|$/);return n[i-1]==="/"?n.slice(0,i-1)+n.slice(i):n}function $t(n){return n&&n[0]!=="?"?`?${n}`:n}var no=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:()=>l(hm),providedIn:"root"})}return n})(),um=new g(""),hm=(()=>{class n extends no{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??l(R).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return rd(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+$t(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,o){let a=this.prepareExternalUrl(r+$t(o));this._platformLocation.pushState(e,t,a)}replaceState(e,t,r,o){let a=this.prepareExternalUrl(r+$t(o));this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(S(Pn),S(um,8))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Gt=(()=>{class n{_subject=new y;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=pm(nd(id(t))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+$t(t))}normalize(e){return n.stripTrailingSlash(mm(this._basePath,id(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+$t(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+$t(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=$t;static joinWithSlash=rd;static stripTrailingSlash=nd;static \u0275fac=function(t){return new(t||n)(S(no))};static \u0275prov=v({token:n,factory:()=>fm(),providedIn:"root"})}return n})();function fm(){return new Gt(S(no))}function mm(n,i){if(!n||!i.startsWith(n))return i;let e=i.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function id(n){return n.replace(/\/index\.html$/,"")}function pm(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var hs=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=l(U);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,r):!1,get:(e,t,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,r)}})}static \u0275fac=function(t){return new(t||n)(Xe(nt))};static \u0275dir=N({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ye]})}return n})();var io=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=T({})}return n})();function Pi(n,i){i=encodeURIComponent(i);for(let e of n.split(";")){let t=e.indexOf("="),[r,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(r.trim()===i)return decodeURIComponent(o)}return null}var an=class{};var fs="browser";function Ni(n){return n===fs}var Li=class{_doc;constructor(i){this._doc=i}manager},ro=(()=>{class n extends Li{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,o){return e.addEventListener(t,r,o),()=>this.removeEventListener(e,t,r,o)}removeEventListener(e,t,r,o){return e.removeEventListener(t,r,o)}static \u0275fac=function(t){return new(t||n)(S(R))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),so=new g(""),vs=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof ro));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof ro);o&&this._plugins.push(o)}addEventListener(e,t,r,o){return this._findPluginFor(t).addEventListener(e,t,r,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new I(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(S(so),S(O))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),ms="ng-app-id";function od(n){for(let i of n)i.remove()}function ad(n,i){let e=i.createElement("style");return e.textContent=n,e}function _m(n,i,e,t){let r=n.head?.querySelectorAll(`style[${ms}="${i}"],link[${ms}="${i}"]`);if(r)for(let o of r)o.removeAttribute(ms),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function gs(n,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var _s=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,o={}){this.doc=e,this.appId=t,this.nonce=r,_m(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,ad);t?.forEach(r=>this.addUsage(r,this.external,gs))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(od(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])od(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,ad(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,gs(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(S(R),S(Ri),S(Tn,8),S(Bt))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),ps={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},bs=/%COMP%/g;var ld="%COMP%",bm=`_nghost-${ld}`,ym=`_ngcontent-${ld}`,wm=!0,Cm=new g("",{factory:()=>wm});function Dm(n){return ym.replace(bs,n)}function xm(n){return bm.replace(bs,n)}function cd(n,i){return i.map(e=>e.replace(bs,n))}var ji=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,r,o,a,s,c=null,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=d,this.defaultRenderer=new Bi(e,a,s,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof ao?r.applyToHost(e):r instanceof Vi&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,o=r.get(t.id);if(!o){let a=this.doc,s=this.ngZone,c=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,m=this.tracingService;switch(t.encapsulation){case Kr.Emulated:o=new ao(c,d,t,this.appId,u,a,s,m);break;case Kr.ShadowDom:return new oo(c,e,t,a,s,this.nonce,m,d);case Kr.ExperimentalIsolatedShadowDom:return new oo(c,e,t,a,s,this.nonce,m);default:o=new Vi(c,d,t,u,a,s,m);break}r.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(S(vs),S(_s),S(Ri),S(Cm),S(R),S(O),S(Tn),S(Xr,8))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),Bi=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,t,r){this.eventManager=i,this.doc=e,this.ngZone=t,this.tracingService=r}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(ps[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(sd(i)?i.content:i).appendChild(e)}insertBefore(i,e,t){i&&(sd(i)?i.content:i).insertBefore(e,t)}removeChild(i,e){e.remove()}selectRootElement(i,e){let t=typeof i=="string"?this.doc.querySelector(i):i;if(!t)throw new I(-5104,!1);return e||(t.textContent=""),t}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,t,r){if(r){e=r+":"+e;let o=ps[r];o?i.setAttributeNS(o,e,t):i.setAttribute(e,t)}else i.setAttribute(e,t)}removeAttribute(i,e,t){if(t){let r=ps[t];r?i.removeAttributeNS(r,e):i.removeAttribute(`${t}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,t,r){r&(Fn.DashCase|Fn.Important)?i.style.setProperty(e,t,r&Fn.Important?"important":""):i.style[e]=t}removeStyle(i,e,t){t&Fn.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,t){i!=null&&(i[e]=t)}setValue(i,e){i.nodeValue=e}listen(i,e,t,r){if(typeof i=="string"&&(i=St().getGlobalEventTarget(this.doc,i),!i))throw new I(5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function sd(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var oo=class extends Bi{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,t,r,o,a,s,c){super(i,r,o,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=t.styles;d=cd(t.id,d);for(let m of d){let x=document.createElement("style");a&&x.setAttribute("nonce",a),x.textContent=m,this.shadowRoot.appendChild(x)}let u=t.getExternalStyles?.();if(u)for(let m of u){let x=gs(m,r);a&&x.setAttribute("nonce",a),this.shadowRoot.appendChild(x)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,t){return super.insertBefore(this.nodeOrShadowRoot(i),e,t)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Vi=class extends Bi{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,t,r,o,a,s,c){super(i,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=t.styles;this.styles=c?cd(c,d):d,this.styleUrls=t.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Bc.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ao=class extends Vi{contentAttr;hostAttr;constructor(i,e,t,r,o,a,s,c){let d=r+"-"+t.id;super(i,e,t,o,a,s,c,d),this.contentAttr=Dm(d),this.hostAttr=xm(d)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let t=super.createElement(i,e);return super.setAttribute(t,this.contentAttr,""),t}};var lo=class n extends Fi{supportsDOMEvents=!0;static makeCurrent(){us(new n)}onAndCancel(i,e,t,r){return i.addEventListener(e,t,r),()=>{i.removeEventListener(e,t,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=Em();return e==null?null:Mm(e)}resetBaseElement(){Ui=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Pi(document.cookie,i)}},Ui=null;function Em(){return Ui=Ui||document.head.querySelector("base"),Ui?Ui.getAttribute("href"):null}function Mm(n){return new URL(n,document.baseURI).pathname}var Am=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),dd=["alt","control","meta","shift"],Rm={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Im={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},ud=(()=>{class n extends Li{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,r,o){let a=n.parseEventName(t),s=n.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>St().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(t.pop()),a="",s=t.indexOf("code");if(s>-1&&(t.splice(s,1),a="code."),dd.forEach(d=>{let u=t.indexOf(d);u>-1&&(t.splice(u,1),a+=d+".")}),a+=o,t.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=a,c}static matchEventFullKeyCode(e,t){let r=Rm[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),dd.forEach(a=>{if(a!==r){let s=Im[a];s(e)&&(o+=a+".")}}),o+=r,o===t)}static eventCallback(e,t,r){return o=>{n.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(S(R))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})();async function ys(n,i,e){let t=f({rootComponent:n},Tm(i,e));return Qc(t)}function Tm(n,i){return{platformRef:i?.platformRef,appProviders:[...Nm,...n?.providers??[]],platformProviders:Pm}}function km(){lo.makeCurrent()}function Om(){return new nn}function Fm(){return Mc(document),document}var Pm=[{provide:Bt,useValue:fs},{provide:Ac,useValue:km,multi:!0},{provide:R,useFactory:Fm}];var Nm=[{provide:xc,useValue:"root"},{provide:nn,useFactory:Om},{provide:so,useClass:ro,multi:!0},{provide:so,useClass:ud,multi:!0},ji,_s,vs,{provide:Ue,useExisting:ji},{provide:an,useClass:Am},[]];var Wt=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let t=i.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...t),this.headers.set(e,r);break;case"d":let o=i.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(i,e){let t=i.toLowerCase();this.maybeSetNormalizedName(i,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(i,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var uo=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},ho=class{encodeKey(i){return hd(i)}encodeValue(i){return hd(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Lm(n,i){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],c=e.get(a)||[];c.push(s),e.set(a,c)}),e}var Bm=/%(\d[a-f0-9])/gi,Vm={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function hd(n){return encodeURIComponent(n).replace(Bm,(i,e)=>Vm[e]??i)}function co(n){return`${n}`}var Et=class n{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new ho,i.fromString){if(i.fromObject)throw new I(2805,!1);this.map=Lm(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let t=i.fromObject[e],r=Array.isArray(t)?t.map(co):[co(t)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(t=>{let r=i[t];Array.isArray(r)?r.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(co(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let t=this.map.get(i.param)||[],r=t.indexOf(co(i.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(i.param,t):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};function jm(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function fd(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function md(n){return typeof Blob<"u"&&n instanceof Blob}function pd(n){return typeof FormData<"u"&&n instanceof FormData}function Um(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var gd="Content-Type",vd="Accept",bd="text/plain",yd="application/json",zm=`${yd}, ${bd}, */*`,Nn=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,t,r){this.url=e,this.method=i.toUpperCase();let o;if(jm(this.method)||r?(this.body=t!==void 0?t:null,o=r):o=t,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new I(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Wt,this.context??=new uo,!this.params)this.params=new Et,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),c=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||fd(this.body)||md(this.body)||pd(this.body)||Um(this.body)?this.body:this.body instanceof Et?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||pd(this.body)?null:md(this.body)?this.body.type||null:fd(this.body)?null:typeof this.body=="string"?bd:this.body instanceof Et?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?yd:null}clone(i={}){let e=i.method||this.method,t=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,a=i.priority||this.priority,s=i.cache||this.cache,c=i.mode||this.mode,d=i.redirect||this.redirect,u=i.credentials||this.credentials,m=i.referrer??this.referrer,x=i.integrity||this.integrity,W=i.referrerPolicy||this.referrerPolicy,Z=i.transferCache??this.transferCache,Q=i.timeout??this.timeout,$=i.body!==void 0?i.body:this.body,ne=i.withCredentials??this.withCredentials,pe=i.reportProgress??this.reportProgress,Ge=i.headers||this.headers,Se=i.params||this.params,Si=i.context??this.context;return i.setHeaders!==void 0&&(Ge=Object.keys(i.setHeaders).reduce((Ei,Jt)=>Ei.set(Jt,i.setHeaders[Jt]),Ge)),i.setParams&&(Se=Object.keys(i.setParams).reduce((Ei,Jt)=>Ei.set(Jt,i.setParams[Jt]),Se)),new n(e,t,$,{params:Se,headers:Ge,context:Si,reportProgress:pe,responseType:r,withCredentials:ne,transferCache:Z,keepalive:o,cache:s,priority:a,timeout:Q,mode:c,redirect:d,credentials:u,referrer:m,integrity:x,referrerPolicy:W})}},sn=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(sn||{}),Bn=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,t="OK"){this.headers=i.headers||new Wt,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||t,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},fo=class n extends Bn{constructor(i={}){super(i)}type=sn.ResponseHeader;clone(i={}){return new n({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},zi=class n extends Bn{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=sn.Response;clone(i={}){return new n({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},Ln=class extends Bn{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},Hm=200,$m=204;var Gm=new g("");var Wm=/^\)\]\}',?\n/;var Cs=(()=>{class n{xhrFactory;tracingService=l(Xr,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new I(-2800,!1);let t=this.xhrFactory;return b(null).pipe(re(()=>new Ee(o=>{let a=t.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach(($,ne)=>a.setRequestHeader($,ne.join(","))),e.headers.has(vd)||a.setRequestHeader(vd,zm),!e.headers.has(gd)){let $=e.detectContentTypeHeader();$!==null&&a.setRequestHeader(gd,$)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let $=e.responseType.toLowerCase();a.responseType=$!=="json"?$:"text"}let s=e.serializeBody(),c=null,d=()=>{if(c!==null)return c;let $=a.statusText||"OK",ne=new Wt(a.getAllResponseHeaders()),pe=a.responseURL||e.url;return c=new fo({headers:ne,status:a.status,statusText:$,url:pe}),c},u=this.maybePropagateTrace(()=>{let{headers:$,status:ne,statusText:pe,url:Ge}=d(),Se=null;ne!==$m&&(Se=typeof a.response>"u"?a.responseText:a.response),ne===0&&(ne=Se?Hm:0);let Si=ne>=200&&ne<300;if(e.responseType==="json"&&typeof Se=="string"){let Ei=Se;Se=Se.replace(Wm,"");try{Se=Se!==""?JSON.parse(Se):null}catch(Jt){Se=Ei,Si&&(Si=!1,Se={error:Jt,text:Se})}}Si?(o.next(new zi({body:Se,headers:$,status:ne,statusText:pe,url:Ge||void 0})),o.complete()):o.error(new Ln({error:Se,headers:$,status:ne,statusText:pe,url:Ge||void 0}))}),m=this.maybePropagateTrace($=>{let{url:ne}=d(),pe=new Ln({error:$,status:a.status||0,statusText:a.statusText||"Unknown Error",url:ne||void 0});o.error(pe)}),x=m;e.timeout&&(x=this.maybePropagateTrace($=>{let{url:ne}=d(),pe=new Ln({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:ne||void 0});o.error(pe)}));let W=!1,Z=this.maybePropagateTrace($=>{W||(o.next(d()),W=!0);let ne={type:sn.DownloadProgress,loaded:$.loaded};$.lengthComputable&&(ne.total=$.total),e.responseType==="text"&&a.responseText&&(ne.partialText=a.responseText),o.next(ne)}),Q=this.maybePropagateTrace($=>{let ne={type:sn.UploadProgress,loaded:$.loaded};$.lengthComputable&&(ne.total=$.total),o.next(ne)});return a.addEventListener("load",u),a.addEventListener("error",m),a.addEventListener("timeout",x),a.addEventListener("abort",m),e.reportProgress&&(a.addEventListener("progress",Z),s!==null&&a.upload&&a.upload.addEventListener("progress",Q)),a.send(s),o.next({type:sn.Sent}),()=>{a.removeEventListener("error",m),a.removeEventListener("abort",m),a.removeEventListener("load",u),a.removeEventListener("timeout",x),e.reportProgress&&(a.removeEventListener("progress",Z),s!==null&&a.upload&&a.upload.removeEventListener("progress",Q)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(t){return new(t||n)(S(an))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function wd(n,i){return i(n)}function qm(n,i){return(e,t)=>i.intercept(e,{handle:r=>n(r,t)})}function Ym(n,i,e){return(t,r)=>Ve(e,()=>i(t,o=>n(o,r)))}var Cd=new g(""),Ds=new g("",{factory:()=>[]}),Dd=new g(""),xs=new g("",{factory:()=>!0});function Km(){let n=null;return(i,e)=>{n===null&&(n=(l(Cd,{optional:!0})??[]).reduceRight(qm,wd));let t=l(Yr);if(l(xs)){let o=t.add();return n(i,e).pipe(en(o))}else return n(i,e)}}var Ss=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=S(Cs),r},providedIn:"root"})}return n})();var mo=(()=>{class n{backend;injector;chain=null;pendingTasks=l(Yr);contributeToStability=l(xs);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(Ds),...this.injector.get(Dd,[])]));this.chain=t.reduceRight((r,o)=>Ym(r,o,this.injector),wd)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(en(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||n)(S(Ss),S(Pe))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Es=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=S(mo),r},providedIn:"root"})}return n})();function ws(n,i){return{body:i,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,credentials:n.credentials,transferCache:n.transferCache,timeout:n.timeout,keepalive:n.keepalive,priority:n.priority,cache:n.cache,mode:n.mode,redirect:n.redirect,integrity:n.integrity,referrer:n.referrer,referrerPolicy:n.referrerPolicy}}var Vn=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,r={}){let o;if(e instanceof Nn)o=e;else{let c;r.headers instanceof Wt?c=r.headers:c=new Wt(r.headers);let d;r.params&&(r.params instanceof Et?d=r.params:d=new Et({fromObject:r.params})),o=new Nn(e,t,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:d,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=b(o).pipe(Mi(c=>this.handler.handle(c)));if(e instanceof Nn||r.observe==="events")return a;let s=a.pipe(J(c=>c instanceof zi));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(w(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new I(2806,!1);return c.body}));case"blob":return s.pipe(w(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new I(2807,!1);return c.body}));case"text":return s.pipe(w(c=>{if(c.body!==null&&typeof c.body!="string")throw new I(2808,!1);return c.body}));default:return s.pipe(w(c=>c.body))}case"response":return s;default:throw new I(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new Et().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,ws(r,t))}post(e,t,r={}){return this.request("POST",e,ws(r,t))}put(e,t,r={}){return this.request("PUT",e,ws(r,t))}static \u0275fac=function(t){return new(t||n)(S(Es))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Xm=new g("",{factory:()=>!0}),Zm="XSRF-TOKEN",Qm=new g("",{factory:()=>Zm}),Jm="X-XSRF-TOKEN",ep=new g("",{factory:()=>Jm}),tp=(()=>{class n{cookieName=l(Qm);doc=l(R);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Pi(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),xd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=S(tp),r},providedIn:"root"})}return n})();function np(n,i){if(!l(Xm)||n.method==="GET"||n.method==="HEAD")return i(n);try{let r=l(Pn).href,{origin:o}=new URL(r),{origin:a}=new URL(n.url,o);if(o!==a)return i(n)}catch{return i(n)}let e=l(xd).getToken(),t=l(ep);return e!=null&&!n.headers.has(t)&&(n=n.clone({headers:n.headers.set(t,e)})),i(n)}var Ms=(function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n})(Ms||{});function ip(n,i){return{\u0275kind:n,\u0275providers:i}}function As(...n){let i=[Vn,mo,{provide:Es,useExisting:mo},{provide:Ss,useFactory:()=>l(Gm,{optional:!0})??l(Cs)},{provide:Ds,useValue:np,multi:!0}];for(let e of n)i.push(...e.\u0275providers);return Ie(i)}var _d=new g("");function Rs(){return ip(Ms.LegacyInterceptors,[{provide:_d,useFactory:Km},{provide:Ds,useExisting:_d,multi:!0}])}var Sd=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(S(R))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Hi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:function(t){let r=null;return t?r=new(t||n):r=S(lp),r},providedIn:"root"})}return n})(),lp=(()=>{class n extends Hi{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case je.NONE:return t;case je.HTML:return On(t,"HTML")?kn(t):Pc(this._doc,String(t)).toString();case je.STYLE:return On(t,"Style")?kn(t):t;case je.SCRIPT:if(On(t,"Script"))return kn(t);throw new I(5200,!1);case je.URL:return On(t,"URL")?kn(t):Fc(String(t));case je.RESOURCE_URL:if(On(t,"ResourceURL"))return kn(t);throw new I(5201,!1);default:throw new I(5202,!1)}}bypassSecurityTrustHtml(e){return Rc(e)}bypassSecurityTrustStyle(e){return Ic(e)}bypassSecurityTrustScript(e){return Tc(e)}bypassSecurityTrustUrl(e){return kc(e)}bypassSecurityTrustResourceUrl(e){return Oc(e)}static \u0275fac=function(t){return new(t||n)(S(R))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Is(n){n||(n=l(tt));let i=new Ee(e=>{if(n.destroyed){e.next();return}return n.onDestroy(e.next.bind(e))});return e=>e.pipe(Y(i))}function Mt(n,i){let t=!i?.manualCleanup?i?.injector?.get(tt)??l(tt):null,r=cp(i?.equal),o;i?.requireSync?o=H({kind:0},{equal:r}):o=H({kind:1,value:i?.initialValue},{equal:r});let a,s=n.subscribe({next:c=>o.set({kind:1,value:c}),error:c=>{o.set({kind:2,error:c}),a?.()},complete:()=>{a?.()}});if(i?.requireSync&&o().kind===0)throw new I(601,!1);return a=t?.onDestroy(s.unsubscribe.bind(s)),$e(()=>{let c=o();switch(c.kind){case 1:return c.value;case 2:throw c.error;case 0:throw new I(601,!1)}},{equal:i?.equal})}function cp(n=Object.is){return(i,e)=>i.kind===1&&e.kind===1&&n(i.value,e.value)}var z="primary",ir=Symbol("RouteTitle"),Ps=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function cn(n){return new Ps(n)}function Ts(n,i,e){for(let t=0;t<n.length;t++){let r=n[t],o=i[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Fd(n,i,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>n.length||e.pathMatch==="full"&&(i.hasChildren()||t.length<n.length))return null;let c={},d=n.slice(0,t.length);return Ts(t,d,c)?{consumed:d,posParams:c}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),a=t.slice(r+1);if(o.length+a.length>n.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let s={};return!Ts(o,n.slice(0,o.length),s)||!Ts(a,n.slice(n.length-a.length),s)?null:{consumed:n,posParams:s}}function yo(n){return new Promise((i,e)=>{n.pipe(Me()).subscribe({next:t=>i(t),error:t=>e(t)})})}function dp(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!bt(n[e],i[e]))return!1;return!0}function bt(n,i){let e=n?Ns(n):void 0,t=i?Ns(i):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Pd(n[r],i[r]))return!1;return!0}function Ns(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Pd(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((r,o)=>t[o]===r)}else return n===i}function up(n){return n.length>0?n[n.length-1]:null}function hn(n){return jr(n)?n:Ii(n)?ye(Promise.resolve(n)):b(n)}function Nd(n){return jr(n)?yo(n):Promise.resolve(n)}var hp={exact:Vd,subset:jd},Ld={exact:fp,subset:mp,ignored:()=>!0},Bd={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Ls={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Md(n,i,e){return hp[e.paths](n.root,i.root,e.matrixParams)&&Ld[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment==="exact"&&n.fragment!==i.fragment)}function fp(n,i){return bt(n,i)}function Vd(n,i,e){if(!ln(n.segments,i.segments)||!vo(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!Vd(n.children[t],i.children[t],e))return!1;return!0}function mp(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>Pd(n[e],i[e]))}function jd(n,i,e){return Ud(n,i,i.segments,e)}function Ud(n,i,e,t){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!ln(r,e)||i.hasChildren()||!vo(r,e,t))}else if(n.segments.length===e.length){if(!ln(n.segments,e)||!vo(n.segments,e,t))return!1;for(let r in i.children)if(!n.children[r]||!jd(n.children[r],i.children[r],t))return!1;return!0}else{let r=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!ln(n.segments,r)||!vo(n.segments,r,t)||!n.children[z]?!1:Ud(n.children[z],i,o,t)}}function vo(n,i,e){return i.every((t,r)=>Ld[e](n[r].parameters,t.parameters))}var ht=class{root;queryParams;fragment;_queryParamMap;constructor(i=new ie([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=cn(this.queryParams),this._queryParamMap}toString(){return vp.serialize(this)}},ie=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return _o(this)}},qt=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=cn(this.parameters),this._parameterMap}toString(){return Hd(this)}};function pp(n,i){return ln(n,i)&&n.every((e,t)=>bt(e.parameters,i[t].parameters))}function ln(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function gp(n,i){let e=[];return Object.entries(n.children).forEach(([t,r])=>{t===z&&(e=e.concat(i(r,t)))}),Object.entries(n.children).forEach(([t,r])=>{t!==z&&(e=e.concat(i(r,t)))}),e}var rr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:()=>new Yt,providedIn:"root"})}return n})(),Yt=class{parse(i){let e=new Vs(i);return new ht(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${$i(i.root,!0)}`,t=yp(i.queryParams),r=typeof i.fragment=="string"?`#${_p(i.fragment)}`:"";return`${e}${t}${r}`}},vp=new Yt;function _o(n){return n.segments.map(i=>Hd(i)).join("/")}function $i(n,i){if(!n.hasChildren())return _o(n);if(i){let e=n.children[z]?$i(n.children[z],!1):"",t=[];return Object.entries(n.children).forEach(([r,o])=>{r!==z&&t.push(`${r}:${$i(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=gp(n,(t,r)=>r===z?[$i(n.children[z],!1)]:[`${r}:${$i(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[z]!=null?`${_o(n)}/${e[0]}`:`${_o(n)}/(${e.join("//")})`}}function zd(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function po(n){return zd(n).replace(/%3B/gi,";")}function _p(n){return encodeURI(n)}function Bs(n){return zd(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function bo(n){return decodeURIComponent(n)}function Ad(n){return bo(n.replace(/\+/g,"%20"))}function Hd(n){return`${Bs(n.path)}${bp(n.parameters)}`}function bp(n){return Object.entries(n).map(([i,e])=>`;${Bs(i)}=${Bs(e)}`).join("")}function yp(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(r=>`${po(e)}=${po(r)}`).join("&"):`${po(e)}=${po(t)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var wp=/^[^\/()?;#]+/;function ks(n){let i=n.match(wp);return i?i[0]:""}var Cp=/^[^\/()?;=#]+/;function Dp(n){let i=n.match(Cp);return i?i[0]:""}var xp=/^[^=?&#]+/;function Sp(n){let i=n.match(xp);return i?i[0]:""}var Ep=/^[^&#]+/;function Mp(n){let i=n.match(Ep);return i?i[0]:""}var Vs=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ie([],{}):new ie([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new I(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(r[z]=new ie(e,t)),r}parseSegment(){let i=ks(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new I(4009,!1);return this.capture(i),new qt(bo(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=Dp(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=ks(this.remaining);r&&(t=r,this.capture(t))}i[bo(e)]=bo(t)}parseQueryParam(i){let e=Sp(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=Mp(this.remaining);a&&(t=a,this.capture(t))}let r=Ad(e),o=Ad(t);if(i.hasOwnProperty(r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=ks(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new I(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=z);let s=this.parseChildren(e+1);t[a??z]=Object.keys(s).length===1&&s[z]?s[z]:new ie([],s),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new I(4011,!1)}};function $d(n){return n.segments.length>0?new ie([],{[z]:n}):n}function Gd(n){let i={};for(let[t,r]of Object.entries(n.children)){let o=Gd(r);if(t===z&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))i[a]=s;else(o.segments.length>0||o.hasChildren())&&(i[t]=o)}let e=new ie(n.segments,i);return Ap(e)}function Ap(n){if(n.numberOfChildren===1&&n.children[z]){let i=n.children[z];return new ie(n.segments.concat(i.segments),i.children)}return n}function Hn(n){return n instanceof ht}function Wd(n,i,e=null,t=null,r=new Yt){let o=qd(n);return Yd(o,i,e,t,r)}function qd(n){let i;function e(o){let a={};for(let c of o.children){let d=e(c);a[c.outlet]=d}let s=new ie(o.url,a);return o===n&&(i=s),s}let t=e(n.root),r=$d(t);return i??r}function Yd(n,i,e,t,r){let o=n;for(;o.parent;)o=o.parent;if(i.length===0)return Os(o,o,o,e,t,r);let a=Rp(i);if(a.toRoot())return Os(o,o,new ie([],{}),e,t,r);let s=Ip(a,o,n),c=s.processChildren?Wi(s.segmentGroup,s.index,a.commands):Xd(s.segmentGroup,s.index,a.commands);return Os(o,s.segmentGroup,c,e,t,r)}function wo(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Ki(n){return typeof n=="object"&&n!=null&&n.outlets}function Rd(n,i,e){n||="\u0275";let t=new ht;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function Os(n,i,e,t,r,o){let a={};for(let[d,u]of Object.entries(t??{}))a[d]=Array.isArray(u)?u.map(m=>Rd(d,m,o)):Rd(d,u,o);let s;n===i?s=e:s=Kd(n,i,e);let c=$d(Gd(s));return new ht(c,a,r)}function Kd(n,i,e){let t={};return Object.entries(n.children).forEach(([r,o])=>{o===i?t[r]=e:t[r]=Kd(o,i,e)}),new ie(n.segments,t)}var Co=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&wo(t[0]))throw new I(4003,!1);let r=t.find(Ki);if(r&&r!==up(t))throw new I(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Rp(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Co(!0,0,n);let i=0,e=!1,t=n.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,d])=>{s[c]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?i++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Co(e,i,t)}var Un=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function Ip(n,i,e){if(n.isAbsolute)return new Un(i,!0,0);if(!e)return new Un(i,!1,NaN);if(e.parent===null)return new Un(e,!0,0);let t=wo(n.commands[0])?0:1,r=e.segments.length-1+t;return Tp(e,r,n.numberOfDoubleDots)}function Tp(n,i,e){let t=n,r=i,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new I(4005,!1);r=t.segments.length}return new Un(t,!1,r-o)}function kp(n){return Ki(n[0])?n[0].outlets:{[z]:n}}function Xd(n,i,e){if(n??=new ie([],{}),n.segments.length===0&&n.hasChildren())return Wi(n,i,e);let t=Op(n,i,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let o=new ie(n.segments.slice(0,t.pathIndex),{});return o.children[z]=new ie(n.segments.slice(t.pathIndex),n.children),Wi(o,0,r)}else return t.match&&r.length===0?new ie(n.segments,{}):t.match&&!n.hasChildren()?js(n,i,e):t.match?Wi(n,0,r):js(n,i,e)}function Wi(n,i,e){if(e.length===0)return new ie(n.segments,{});{let t=kp(e),r={};if(Object.keys(t).some(o=>o!==z)&&n.children[z]&&n.numberOfChildren===1&&n.children[z].segments.length===0){let o=Wi(n.children[z],i,e);return new ie(n.segments,o.children)}return Object.entries(t).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=Xd(n.children[o],i,a))}),Object.entries(n.children).forEach(([o,a])=>{t[o]===void 0&&(r[o]=a)}),new ie(n.segments,r)}}function Op(n,i,e){let t=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(t>=e.length)return o;let a=n.segments[r],s=e[t];if(Ki(s))break;let c=`${s}`,d=t<e.length-1?e[t+1]:null;if(r>0&&c===void 0)break;if(c&&d&&typeof d=="object"&&d.outlets===void 0){if(!Td(c,d,a))return o;t+=2}else{if(!Td(c,{},a))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function js(n,i,e){let t=n.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(Ki(o)){let c=Fp(o.outlets);return new ie(t,c)}if(r===0&&wo(e[0])){let c=n.segments[i];t.push(new qt(c.path,Id(e[0]))),r++;continue}let a=Ki(o)?o.outlets[z]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&wo(s)?(t.push(new qt(a,Id(s))),r+=2):(t.push(new qt(a,{})),r++)}return new ie(t,{})}function Fp(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(i[e]=js(new ie([],{}),0,t))}),i}function Id(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function Td(n,i,e){return n==e.path&&bt(i,e.parameters)}var qi="imperative",Re=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(Re||{}),at=class{id;url;constructor(i,e){this.id=i,this.url=e}},dn=class extends at{type=Re.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t="imperative",r=null){super(i,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Rt=class extends at{urlAfterRedirects;type=Re.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ne=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(Ne||{}),Xi=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(Xi||{}),ut=class extends at{reason;code;type=Re.NavigationCancel;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Zd(n){return n instanceof ut&&(n.code===Ne.Redirect||n.code===Ne.SupersededByNewNavigation)}var It=class extends at{reason;code;type=Re.NavigationSkipped;constructor(i,e,t,r){super(i,e),this.reason=t,this.code=r}},un=class extends at{error;target;type=Re.NavigationError;constructor(i,e,t,r){super(i,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Zi=class extends at{urlAfterRedirects;state;type=Re.RoutesRecognized;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Do=class extends at{urlAfterRedirects;state;type=Re.GuardsCheckStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},xo=class extends at{urlAfterRedirects;state;shouldActivate;type=Re.GuardsCheckEnd;constructor(i,e,t,r,o){super(i,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},So=class extends at{urlAfterRedirects;state;type=Re.ResolveStart;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Eo=class extends at{urlAfterRedirects;state;type=Re.ResolveEnd;constructor(i,e,t,r){super(i,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Mo=class{route;type=Re.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Ao=class{route;type=Re.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Ro=class{snapshot;type=Re.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Io=class{snapshot;type=Re.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},To=class{snapshot;type=Re.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ko=class{snapshot;type=Re.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var $n=class{},Qi=class{},Gn=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function Pp(n){return!(n instanceof $n)&&!(n instanceof Gn)&&!(n instanceof Qi)}var Oo=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new Kn(this.rootInjector)}},Kn=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new Oo(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(S(Pe))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Fo=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=Us(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=Us(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=zs(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return zs(i,this._root).map(e=>e.value)}};function Us(n,i){if(n===i.value)return i;for(let e of i.children){let t=Us(n,e);if(t)return t}return null}function zs(n,i){if(n===i.value)return[i];for(let e of i.children){let t=zs(n,e);if(t.length)return t.unshift(i),t}return[]}var ot=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function jn(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var Ji=class extends Fo{snapshot;constructor(i,e){super(i),this.snapshot=e,Zs(this,i)}toString(){return this.snapshot.toString()}};function Qd(n,i){let e=Np(n,i),t=new Fe([new qt("",{})]),r=new Fe({}),o=new Fe({}),a=new Fe({}),s=new Fe(""),c=new Kt(t,r,a,s,o,z,n,e.root);return c.snapshot=e.root,new Ji(new ot(c,[]),e)}function Np(n,i){let e={},t={},r={},a=new Wn([],e,r,"",t,z,n,null,{},i);return new er("",new ot(a,[]))}var Kt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,t,r,o,a,s,c){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(w(d=>d[ir]))??b(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(w(i=>cn(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(w(i=>cn(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Xs(n,i,e="emptyOnly"){let t,{routeConfig:r}=n;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?t={params:f(f({},i.params),n.params),data:f(f({},i.data),n.data),resolve:f(f(f(f({},n.data),i.data),r?.data),n._resolvedData)}:t={params:f({},n.params),data:f({},n.data),resolve:f(f({},n.data),n._resolvedData??{})},r&&eu(r)&&(t.resolve[ir]=r.title),t}var Wn=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[ir]}constructor(i,e,t,r,o,a,s,c,d,u){this.url=i,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=cn(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=cn(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},er=class extends Fo{url;constructor(i,e){super(e),this.url=i,Zs(this,e)}toString(){return Jd(this._root)}};function Zs(n,i){i.value._routerState=n,i.children.forEach(e=>Zs(n,e))}function Jd(n){let i=n.children.length>0?` { ${n.children.map(Jd).join(", ")} } `:"";return`${n.value}${i}`}function Fs(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,bt(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),bt(i.params,e.params)||n.paramsSubject.next(e.params),dp(i.url,e.url)||n.urlSubject.next(e.url),bt(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Hs(n,i){let e=bt(n.params,i.params)&&pp(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||Hs(n.parent,i.parent))}function eu(n){return typeof n.title=="string"||n.title===null}var tu=new g(""),or=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=z;activateEvents=new G;deactivateEvents=new G;attachEvents=new G;detachEvents=new G;routerOutletData=eo();parentContexts=l(Kn);location=l(nt);changeDetector=l(ue);inputBinder=l(Bo,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new I(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new I(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new I(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new I(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new $s(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:c,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ye]})}return n})(),$s=class{route;childContexts;parent;outletData;constructor(i,e,t,r){this.route=i,this.childContexts=e,this.parent=t,this.outletData=r}get(i,e){return i===Kt?this.route:i===Kn?this.childContexts:i===tu?this.outletData:this.parent.get(i,e)}},Bo=new g("");var Qs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&le(0,"router-outlet")},dependencies:[or],encapsulation:2})}return n})();function Js(n){let i=n.children&&n.children.map(Js),e=i?q(f({},n),{children:i}):f({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==z&&(e.component=Qs),e}function Lp(n,i,e){let t=tr(n,i._root,e?e._root:void 0);return new Ji(t,i)}function tr(n,i,e){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=i.value;let r=Bp(n,i,e);return new ot(t,r)}else{if(n.shouldAttach(i.value)){let o=n.retrieve(i.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=i.value,a.children=i.children.map(s=>tr(n,s)),a}}let t=Vp(i.value),r=i.children.map(o=>tr(n,o));return new ot(t,r)}}function Bp(n,i,e){return i.children.map(t=>{for(let r of e.children)if(n.shouldReuseRoute(t.value,r.value.snapshot))return tr(n,t,r);return tr(n,t)})}function Vp(n){return new Kt(new Fe(n.url),new Fe(n.params),new Fe(n.queryParams),new Fe(n.fragment),new Fe(n.data),n.outlet,n.component,n)}var qn=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},nu="ngNavigationCancelingError";function Po(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=Hn(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=iu(!1,Ne.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function iu(n,i){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[nu]=!0,e.cancellationCode=i,e}function jp(n){return ru(n)&&Hn(n.url)}function ru(n){return!!n&&n[nu]}var Gs=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),Fs(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let r=jn(e);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],t),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let a=t.getContext(r.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=jn(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(t&&t.outlet){let a=t.outlet.detach(),s=t.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:s})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),r=t&&i.value.component?t.children:e,o=jn(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(i,e,t){let r=jn(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new ko(o.value.snapshot))}),i.children.length&&this.forwardEvent(new Io(i.value.snapshot))}activateRoutes(i,e,t){let r=i.value,o=e?e.value:null;if(Fs(r),r===o)if(r.component){let a=t.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,t);else if(r.component){let a=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Fs(s.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,t)}},No=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},zn=class{component;route;constructor(i,e){this.component=i,this.route=e}};function Up(n,i,e){let t=n._root,r=i?i._root:null;return Gi(t,r,e,[t.value])}function zp(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function Xn(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n=="function"&&!Dc(n)?n:i.get(n):t}function Gi(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=jn(i);return n.children.forEach(a=>{Hp(a,o[a.value.outlet],e,t.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>Yi(s,e.getContext(a),r)),r}function Hp(n,i,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,a=i?i.value:null,s=e?e.getContext(n.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=$p(a,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new No(t)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Gi(n,i,s?s.children:null,t,r):Gi(n,i,e,t,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new zn(s.outlet.component,a))}else a&&Yi(i,s,r),r.canActivateChecks.push(new No(t)),o.component?Gi(n,null,s?s.children:null,t,r):Gi(n,null,e,t,r);return r}function $p(n,i,e){if(typeof e=="function")return Ve(i._environmentInjector,()=>e(n,i));switch(e){case"pathParamsChange":return!ln(n.url,i.url);case"pathParamsOrQueryParamsChange":return!ln(n.url,i.url)||!bt(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Hs(n,i)||!bt(n.queryParams,i.queryParams);default:return!Hs(n,i)}}function Yi(n,i,e){let t=jn(n),r=n.value;Object.entries(t).forEach(([o,a])=>{r.component?i?Yi(a,i.children.getContext(o),e):Yi(a,null,e):Yi(a,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new zn(i.outlet.component,r)):e.canDeactivateChecks.push(new zn(null,r)):e.canDeactivateChecks.push(new zn(null,r))}function ar(n){return typeof n=="function"}function Gp(n){return typeof n=="boolean"}function Wp(n){return n&&ar(n.canLoad)}function qp(n){return n&&ar(n.canActivate)}function Yp(n){return n&&ar(n.canActivateChild)}function Kp(n){return n&&ar(n.canDeactivate)}function Xp(n){return n&&ar(n.canMatch)}function ou(n){return n instanceof yc||n?.name==="EmptyError"}var go=Symbol("INITIAL_VALUE");function Yn(){return re(n=>En(n.map(i=>i.pipe(he(1),Ce(go)))).pipe(w(i=>{for(let e of i)if(e!==!0){if(e===go)return go;if(e===!1||Zp(e))return e}return!0}),J(i=>i!==go),he(1)))}function Zp(n){return Hn(n)||n instanceof qn}function au(n){return n.aborted?b(void 0).pipe(he(1)):new Ee(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function su(n){return Y(au(n))}function Qp(n){return we(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?b(q(f({},i),{guardsResult:!0})):Jp(o,e,t).pipe(we(a=>a&&Gp(a)?eg(e,r,n):b(a)),w(a=>q(f({},i),{guardsResult:a})))})}function Jp(n,i,e){return ye(n).pipe(we(t=>og(t.component,t.route,e,i)),Me(t=>t!==!0,!0))}function eg(n,i,e){return ye(i).pipe(Mi(t=>Ur(ng(t.route.parent,e),tg(t.route,e),rg(n,t.path),ig(n,t.route))),Me(t=>t!==!0,!0))}function tg(n,i){return n!==null&&i&&i(new To(n)),b(!0)}function ng(n,i){return n!==null&&i&&i(new Ro(n)),b(!0)}function ig(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return b(!0);let t=e.map(r=>Mn(()=>{let o=i._environmentInjector,a=Xn(r,o),s=qp(a)?a.canActivate(i,n):Ve(o,()=>a(i,n));return hn(s).pipe(Me())}));return b(t).pipe(Yn())}function rg(n,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>zp(o)).filter(o=>o!==null).map(o=>Mn(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,d=Xn(s,c),u=Yp(d)?d.canActivateChild(e,n):Ve(c,()=>d(e,n));return hn(u).pipe(Me())});return b(a).pipe(Yn())}));return b(r).pipe(Yn())}function og(n,i,e,t){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return b(!0);let o=r.map(a=>{let s=i._environmentInjector,c=Xn(a,s),d=Kp(c)?c.canDeactivate(n,i,e,t):Ve(s,()=>c(n,i,e,t));return hn(d).pipe(Me())});return b(o).pipe(Yn())}function ag(n,i,e,t,r){let o=i.canLoad;if(o===void 0||o.length===0)return b(!0);let a=o.map(s=>{let c=Xn(s,n),d=Wp(c)?c.canLoad(i,e):Ve(n,()=>c(i,e)),u=hn(d);return r?u.pipe(su(r)):u});return b(a).pipe(Yn(),lu(t))}function lu(n){return vc(fe(i=>{if(typeof i!="boolean")throw Po(n,i)}),w(i=>i===!0))}function sg(n,i,e,t,r,o){let a=i.canMatch;if(!a||a.length===0)return b(!0);let s=a.map(c=>{let d=Xn(c,n),u=Xp(d)?d.canMatch(i,e,r):Ve(n,()=>d(i,e,r));return hn(u).pipe(su(o))});return b(s).pipe(Yn(),lu(t))}var At=class n extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},nr=class n extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function lg(n){throw new I(4e3,!1)}function cg(n){throw iu(!1,Ne.GuardRejected)}var Ws=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}async lineralizeSegments(i,e){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[z])throw lg(`${i.redirectTo}`);r=r.children[z]}}async applyRedirectCommands(i,e,t,r,o){let a=await dg(e,r,o);if(a instanceof ht)throw new nr(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,t);if(a[0]==="/")throw new nr(s);return s}applyRedirectCreateUrlTree(i,e,t,r){let o=this.createSegmentGroup(i,e.root,t,r);return new ht(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);t[r]=e[s]}else t[r]=o}),t}createSegmentGroup(i,e,t,r){let o=this.createSegments(i,e.segments,t,r),a={};return Object.entries(e.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(i,c,t,r)}),new ie(o,a)}createSegments(i,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,t))}findPosParam(i,e,t){let r=t[e.path.substring(1)];if(!r)throw new I(4001,!1);return r}findOrReturn(i,e){let t=0;for(let r of e){if(r.path===i.path)return e.splice(t),r;t++}return i}};function dg(n,i,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return yo(hn(Ve(e,()=>t(i))))}function ug(n,i){return n.providers&&!n._injector&&(n._injector=os(n.providers,i,`Route: ${n.path}`)),n._injector??i}function pt(n){return n.outlet||z}function hg(n,i){let e=n.filter(t=>pt(t)===i);return e.push(...n.filter(t=>pt(t)!==i)),e}var qs={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function cu(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function fg(n,i,e,t,r,o,a){let s=du(n,i,e);if(!s.matched)return b(s);let c=cu(o(s));return t=ug(i,t),sg(t,i,e,r,c,a).pipe(w(d=>d===!0?s:f({},qs)))}function du(n,i,e){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||e.length>0)?f({},qs):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Fd)(e,n,i);if(!r)return f({},qs);let o={};Object.entries(r.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=r.consumed.length>0?f(f({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function kd(n,i,e,t,r){return e.length>0&&gg(n,e,t,r)?{segmentGroup:new ie(i,pg(t,new ie(e,n.children))),slicedSegments:[]}:e.length===0&&vg(n,e,t)?{segmentGroup:new ie(n.segments,mg(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new ie(n.segments,n.children),slicedSegments:e}}function mg(n,i,e,t){let r={};for(let o of e)if(Vo(n,i,o)&&!t[pt(o)]){let a=new ie([],{});r[pt(o)]=a}return f(f({},t),r)}function pg(n,i){let e={};e[z]=i;for(let t of n)if(t.path===""&&pt(t)!==z){let r=new ie([],{});e[pt(t)]=r}return e}function gg(n,i,e,t){return e.some(r=>!Vo(n,i,r)||!(pt(r)!==z)?!1:!(t!==void 0&&pt(r)===t))}function vg(n,i,e){return e.some(t=>Vo(n,i,t))}function Vo(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function _g(n,i,e){return i.length===0&&!n.children[e]}var Ys=class{};async function bg(n,i,e,t,r,o,a="emptyOnly",s){return new Ks(n,i,e,t,r,a,o,s).recognize()}var yg=31,Ks=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,t,r,o,a,s,c){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new Ws(this.urlSerializer,this.urlTree)}noMatchError(i){return new I(4002,`'${i.segmentGroup}'`)}async recognize(){let i=kd(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=await this.match(i),r=new ot(t,e),o=new er("",r),a=Wd(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(i){let e=new Wn([],Object.freeze({}),Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),z,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,z,e),rootSnapshot:e}}catch(t){if(t instanceof nr)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof At?this.noMatchError(t):t}}async processSegmentGroup(i,e,t,r,o){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,o);let a=await this.processSegment(i,e,t,t.segments,r,!0,o);return a instanceof ot?[a]:[]}async processChildren(i,e,t,r){let o=[];for(let c of Object.keys(t.children))c==="primary"?o.unshift(c):o.push(c);let a=[];for(let c of o){let d=t.children[c],u=hg(e,c),m=await this.processSegmentGroup(i,u,d,c,r);a.push(...m)}let s=uu(a);return wg(s),s}async processSegment(i,e,t,r,o,a,s){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??i,e,c,t,r,o,a,s)}catch(d){if(d instanceof At||ou(d))continue;throw d}if(_g(t,r,o))return new Ys;throw new At(t)}async processSegmentAgainstRoute(i,e,t,r,o,a,s,c){if(pt(t)!==a&&(a===z||!Vo(r,o,t)))throw new At(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,t,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,t,o,a,c);throw new At(r)}async expandSegmentAgainstRouteUsingRedirect(i,e,t,r,o,a,s){let{matched:c,parameters:d,consumedSegments:u,positionalParamSegments:m,remainingSegments:x}=du(e,r,o);if(!c)throw new At(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>yg&&(this.allowRedirects=!1));let W=this.createSnapshot(i,r,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let Z=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,m,cu(W),i),Q=await this.applyRedirects.lineralizeSegments(r,Z);return this.processSegment(i,t,e,Q.concat(x),a,!1,s)}createSnapshot(i,e,t,r,o){let a=new Wn(t,r,Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,Dg(e),pt(e),e.component??e._loadedComponent??null,e,xg(e),i),s=Xs(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(i,e,t,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Ge=>this.createSnapshot(i,t,Ge.consumedSegments,Ge.parameters,a),c=await yo(fg(e,t,r,i,this.urlSerializer,s,this.abortSignal));if(t.path==="**"&&(e.children={}),!c?.matched)throw new At(e);i=t._injector??i;let{routes:d}=await this.getChildConfig(i,t,r),u=t._loadedInjector??i,{parameters:m,consumedSegments:x,remainingSegments:W}=c,Z=this.createSnapshot(i,t,x,m,a),{segmentGroup:Q,slicedSegments:$}=kd(e,x,W,d,o);if($.length===0&&Q.hasChildren()){let Ge=await this.processChildren(u,d,Q,Z);return new ot(Z,Ge)}if(d.length===0&&$.length===0)return new ot(Z,[]);let ne=pt(t)===o,pe=await this.processSegment(u,d,Q,$,ne?z:o,!0,Z);return new ot(Z,pe instanceof ot?[pe]:[])}async getChildConfig(i,e,t){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await yo(ag(i,e,t,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw cg(e)}return{routes:[],injector:i}}};function wg(n){n.sort((i,e)=>i.value.outlet===z?-1:e.value.outlet===z?1:i.value.outlet.localeCompare(e.value.outlet))}function Cg(n){let i=n.value.routeConfig;return i&&i.path===""}function uu(n){let i=[],e=new Set;for(let t of n){if(!Cg(t)){i.push(t);continue}let r=i.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):i.push(t)}for(let t of e){let r=uu(t.children);i.push(new ot(t.value,r))}return i.filter(t=>!e.has(t))}function Dg(n){return n.data||{}}function xg(n){return n.resolve||{}}function Sg(n,i,e,t,r,o,a){return we(async s=>{let{state:c,tree:d}=await bg(n,i,e,t,s.extractedUrl,r,o,a);return q(f({},s),{targetSnapshot:c,urlAfterRedirects:d})})}function Eg(n){return we(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return b(i);let r=new Set(t.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let c of hu(s))o.add(c);let a=0;return ye(o).pipe(Mi(s=>r.has(s)?Mg(s,e,n):(s.data=Xs(s,s.parent,n).resolve,b(void 0))),fe(()=>a++),ns(1),we(s=>a===o.size?b(i):We))})}function hu(n){let i=n.children.map(e=>hu(e)).flat();return[n,...i]}function Mg(n,i,e){let t=n.routeConfig,r=n._resolve;return t?.title!==void 0&&!eu(t)&&(r[ir]=t.title),Mn(()=>(n.data=Xs(n,n.parent,e).resolve,Ag(r,n,i).pipe(w(o=>(n._resolvedData=o,n.data=f(f({},n.data),o),null)))))}function Ag(n,i,e){let t=Ns(n);if(t.length===0)return b({});let r={};return ye(t).pipe(we(o=>Rg(n[o],i,e).pipe(Me(),fe(a=>{if(a instanceof qn)throw Po(new Yt,a);r[o]=a}))),ns(1),w(()=>r),Ct(o=>ou(o)?We:qe(o)))}function Rg(n,i,e){let t=i._environmentInjector,r=Xn(n,t),o=r.resolve?r.resolve(i,e):Ve(t,()=>r(i,e));return hn(o)}function Od(n){return re(i=>{let e=n(i);return e?ye(e).pipe(w(()=>i)):b(i)})}var el=(()=>{class n{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===z);return t}getResolvedTitleForRoute(e){return e.data[ir]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:()=>l(fu),providedIn:"root"})}return n})(),fu=(()=>{class n extends el{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(S(Sd))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),sr=new g("",{factory:()=>({})}),lr=new g(""),mu=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(Xc);async loadComponent(e,t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await Nd(Ve(e,()=>t.loadComponent())),a=await vu(gu(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}})();return this.componentLoaders.set(t,r),r}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await pu(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}})();return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();async function pu(n,i,e,t){let r=await Nd(Ve(e,()=>n.loadChildren())),o=await vu(gu(r)),a;o instanceof Vc||Array.isArray(o)?a=o:a=await i.compileModuleAsync(o),t&&t(n);let s,c,d=!1,u;return Array.isArray(a)?(c=a,d=!0):(s=a.create(e).injector,u=a,c=s.get(lr,[],{optional:!0,self:!0}).flat()),{routes:c.map(Js),injector:s,factory:u}}function Ig(n){return n&&typeof n=="object"&&"default"in n}function gu(n){return Ig(n)?n.default:n}async function vu(n){return n}var jo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:()=>l(Tg),providedIn:"root"})}return n})(),Tg=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),_u=new g("");var kg=()=>{},bu=new g(""),yu=(()=>{class n{currentNavigation=H(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=H(null);events=new y;transitionAbortWithErrorSubject=new y;configLoader=l(mu);environmentInjector=l(Pe);destroyRef=l(tt);urlSerializer=l(rr);rootContexts=l(Kn);location=l(Gt);inputBindingEnabled=l(Bo,{optional:!0})!==null;titleStrategy=l(el);options=l(sr,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=l(jo);createViewTransition=l(_u,{optional:!0});navigationErrorHandler=l(bu,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>b(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Mo(r)),t=r=>this.events.next(new Ao(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;xe(()=>{this.transitions?.next(q(f({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Fe(null),this.transitions.pipe(J(t=>t!==null),re(t=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===t.id;return b(t).pipe(re(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",Ne.SupersededByNewNavigation),We;this.currentTransition=t;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?q(f({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&u!=="reload")return this.events.next(new It(s.id,this.urlSerializer.serialize(s.rawUrl),"",Xi.IgnoredSameUrlNavigation)),s.resolve(!1),We;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return b(s).pipe(re(m=>(this.events.next(new dn(m.id,this.urlSerializer.serialize(m.extractedUrl),m.source,m.restoredState)),m.id!==this.navigationId?We:Promise.resolve(m))),Sg(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),fe(m=>{t.targetSnapshot=m.targetSnapshot,t.urlAfterRedirects=m.urlAfterRedirects,this.currentNavigation.update(x=>(x.finalUrl=m.urlAfterRedirects,x)),this.events.next(new Qi)}),re(m=>ye(t.routesRecognizeHandler.deferredHandle??b(void 0)).pipe(w(()=>m))),fe(()=>{let m=new Zi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:m,extractedUrl:x,source:W,restoredState:Z,extras:Q}=s,$=new dn(m,this.urlSerializer.serialize(x),W,Z);this.events.next($);let ne=Qd(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=q(f({},s),{targetSnapshot:ne,urlAfterRedirects:x,extras:q(f({},Q),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(pe=>(pe.finalUrl=x,pe)),b(t)}else return this.events.next(new It(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Xi.IgnoredByUrlHandlingStrategy)),s.resolve(!1),We}),w(s=>{let c=new Do(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=t=q(f({},s),{guards:Up(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),Qp(s=>this.events.next(s)),re(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Po(this.urlSerializer,s.guardsResult);let c=new xo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return We;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Ne.GuardRejected),We;if(s.guards.canActivateChecks.length===0)return b(s);let d=new So(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!a())return We;let u=!1;return b(s).pipe(Eg(this.paramsInheritanceStrategy),fe({next:()=>{u=!0;let m=new Eo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)},complete:()=>{u||this.cancelNavigationTransition(s,"",Ne.NoDataFromResolver)}}))}),Od(s=>{let c=u=>{let m=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let x=u._environmentInjector;m.push(this.configLoader.loadComponent(x,u.routeConfig).then(W=>{u.component=W}))}for(let x of u.children)m.push(...c(x));return m},d=c(s.targetSnapshot.root);return d.length===0?b(s):ye(Promise.all(d).then(()=>s))}),Od(()=>this.afterPreactivation()),re(()=>{let{currentSnapshot:s,targetSnapshot:c}=t,d=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return d?ye(d).pipe(w(()=>t)):b(t)}),he(1),re(s=>{let c=Lp(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=t=s=q(f({},s),{targetRouterState:c}),this.currentNavigation.update(u=>(u.targetRouterState=c,u)),this.events.next(new $n);let d=t.beforeActivateHandler.deferredHandle;return d?ye(d.then(()=>s)):b(s)}),fe(s=>{new Gs(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(c=>(c.abort=kg,c)),this.lastSuccessfulNavigation.set(xe(this.currentNavigation)),this.events.next(new Rt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Y(au(o.signal).pipe(J(()=>!r&&!t.targetRouterState),fe(()=>{this.cancelNavigationTransition(t,o.signal.reason+"",Ne.Aborted)}))),fe({complete:()=>{r=!0}}),Y(this.transitionAbortWithErrorSubject.pipe(fe(s=>{throw s}))),en(()=>{o.abort(),r||this.cancelNavigationTransition(t,"",Ne.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ct(s=>{if(r=!0,this.destroyed)return t.resolve(!1),We;if(ru(s))this.events.next(new ut(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),jp(s)?this.events.next(new Gn(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let c=new un(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let d=Ve(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof qn){let{message:u,cancellationCode:m}=Po(this.urlSerializer,d);this.events.next(new ut(t.id,this.urlSerializer.serialize(t.extractedUrl),u,m)),this.events.next(new Gn(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(d){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(d)}}return We}))}))}cancelNavigationTransition(e,t,r){let o=new ut(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=xe(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Og(n){return n!==qi}var wu=new g("");var Cu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:()=>l(Fg),providedIn:"root"})}return n})(),Lo=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},Fg=(()=>{class n extends Lo{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(n)))(r||n)}})();static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),tl=(()=>{class n{urlSerializer=l(rr);options=l(sr,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(Gt);urlHandlingStrategy=l(jo);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new ht;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=r??o;return a instanceof ht?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=Qd(null,l(Pe));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:()=>l(Pg),providedIn:"root"})}return n})(),Pg=(()=>{class n extends tl{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof dn?this.updateStateMemento():e instanceof It?this.commitTransition(t):e instanceof Zi?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof $n?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof ut&&!Zd(e)?this.restoreHistory(t):e instanceof un?this.restoreHistory(t,!0):e instanceof Rt&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:r,id:o}=t,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let c=this.browserPageId,d=f(f({},s),this.generateNgRouterState(o,c,t));this.location.replaceState(e,"",d)}else{let c=f(f({},s),this.generateNgRouterState(o,this.browserPageId+1,t));this.location.go(e,"",c)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,r){return this.canceledNavigationResolution==="computed"?f({navigationId:e,\u0275routerPageId:t},this.routerUrlState(r)):f({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(n)))(r||n)}})();static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function nl(n,i){n.events.pipe(J(e=>e instanceof Rt||e instanceof ut||e instanceof un||e instanceof It),w(e=>e instanceof Rt||e instanceof It?0:(e instanceof ut?e.code===Ne.Redirect||e.code===Ne.SupersededByNewNavigation:!1)?2:1),J(e=>e!==2),he(1)).subscribe(()=>{i()})}var Uo=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(ss);stateManager=l(tl);options=l(sr,{optional:!0})||{};pendingTasks=l(Sc);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(yu);urlSerializer=l(rr);location=l(Gt);urlHandlingStrategy=l(jo);injector=l(Pe);_events=new y;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(Cu);injectorCleanup=l(wu,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(lr,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(Bo,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ge;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=xe(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof ut&&t.code!==Ne.Redirect&&t.code!==Ne.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof Rt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof Gn){let a=t.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),c=f({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Og(r.source)},a);this.scheduleNavigation(s,qi,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Pp(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),qi,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o)=>{this.navigateToSyncWithBrowser(e,r,t,o)})}navigateToSyncWithBrowser(e,t,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=q(f({},o),{browserUrl:e})),r){let d=f({},r);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(o.state=d)}let c=this.parseUrl(s);this.scheduleNavigation(c,t,a,o).catch(d=>{this.disposed||this.injector.get(qr)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return xe(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Js),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=t,d=c?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=f(f({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let m;try{let x=r?r.snapshot:this.routerState.snapshot.root;m=qd(x)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),m=this.currentUrlTree.root}return Yd(m,e,u,d??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=Hn(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,qi,null,t)}navigate(e,t={skipLocationChange:!1}){return Ng(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(tn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=f({},Bd):t===!1?r=f({},Ls):r=f(f({},Ls),t),Hn(e))return Md(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Md(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,c,d;a?(s=a.resolve,c=a.reject,d=a.promise):d=new Promise((m,x)=>{s=m,c=x});let u=this.pendingTasks.add();return nl(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:c,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ng(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new I(4008,!1)}var Vg=new g("");function il(n,...i){return Ie([{provide:lr,multi:!0,useValue:n},[],{provide:Kt,useFactory:jg},{provide:Uc,multi:!0,useFactory:Ug},i.map(e=>e.\u0275providers)])}function jg(){return l(Uo).routerState.root}function Ug(){let n=l(U);return i=>{let e=n.get(it);if(i!==e.components[0])return;let t=n.get(Uo),r=n.get(zg);n.get(Hg)===1&&t.initialNavigation(),n.get($g,null,{optional:!0})?.setUpPreloading(),n.get(Vg,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var zg=new g("",{factory:()=>new y}),Hg=new g("",{factory:()=>1});var $g=new g("");function fn(n){return n.buttons===0||n.detail===0}function mn(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var rl;function Du(){if(rl==null){let n=typeof document<"u"?document.head:null;rl=!!(n&&(n.createShadowRoot||n.attachShadow))}return rl}function ol(n){if(Du()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function Oe(n){return n.composedPath?n.composedPath()[0]:n.target}var al;try{al=typeof Intl<"u"&&Intl.v8BreakIterator}catch{al=!1}var ae=(()=>{class n{_platformId=l(Bt);isBrowser=this._platformId?Ni(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||al)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var cr;function xu(){if(cr==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>cr=!0}))}finally{cr=cr||!1}return cr}function Zn(n){return xu()?n:!!n.capture}function Tt(n,i=0){return Su(n)?Number(n):arguments.length===2?i:0}function Su(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function yt(n){return n instanceof P?n.nativeElement:n}var Eu=new g("cdk-input-modality-detector-options"),Mu={ignoreKeys:[18,17,224,91,16]},Au=650,sl={passive:!0,capture:!0},Ru=(()=>{class n{_platform=l(ae);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Fe(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Oe(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Au||(this._modality.next(fn(e)?"keyboard":"mouse"),this._mostRecentTarget=Oe(e))};_onTouchstart=e=>{if(mn(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Oe(e)};constructor(){let e=l(O),t=l(R),r=l(Eu,{optional:!0});if(this._options=f(f({},Mu),r),this.modalityDetected=this._modality.pipe(Hr(1)),this.modalityChanged=this.modalityDetected.pipe(ts()),this._platform.isBrowser){let o=l(Ue).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,sl),o.listen(t,"mousedown",this._onMousedown,sl),o.listen(t,"touchstart",this._onTouchstart,sl)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),dr=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(dr||{}),Iu=new g("cdk-focus-monitor-default-options"),zo=Zn({passive:!0,capture:!0}),Xt=(()=>{class n{_ngZone=l(O);_platform=l(ae);_inputModalityDetector=l(Ru);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(R);_stopInputModalityDetector=new y;constructor(){let e=l(Iu,{optional:!0});this._detectionMode=e?.detectionMode||dr.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Oe(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=yt(e);if(!this._platform.isBrowser||r.nodeType!==1)return b();let o=ol(r)||this._document,a=this._elementInfo.get(r);if(a)return t&&(a.checkChildren=!0),a.subject;let s={checkChildren:t,subject:new y,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=yt(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=yt(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,t,c)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===dr.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===dr.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Au:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=Oe(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,zo),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,zo)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Y(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,zo),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,zo),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ho=new WeakMap,Je=(()=>{class n{_appRef;_injector=l(U);_environmentInjector=l(Pe);load(e){let t=this._appRef=this._appRef||this._injector.get(it),r=Ho.get(t);r||(r={loaders:new Set,refs:[]},Ho.set(t,r),t.onDestroy(()=>{Ho.get(t)?.refs.forEach(o=>o.destroy()),Ho.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(to(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Go=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return n})(),$o;function Wg(){if($o===void 0&&($o=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&($o=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return $o}function pn(n){return Wg()?.createHTML(n)||n}function Tu(n,i,e){let t=e.sanitize(je.HTML,i);n.innerHTML=pn(t||"")}function Qn(n){return Array.isArray(n)?n:[n]}var ku=new Set,gn,Wo=(()=>{class n{_platform=l(ae);_nonce=l(Tn,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Yg}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&qg(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function qg(n,i){if(!ku.has(n))try{gn||(gn=document.createElement("style"),i&&gn.setAttribute("nonce",i),gn.setAttribute("type","text/css"),document.head.appendChild(gn)),gn.sheet&&(gn.sheet.insertRule(`@media ${n} {body{ }}`,0),ku.add(n))}catch(e){console.error(e)}}function Yg(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var vn=(()=>{class n{_mediaMatcher=l(Wo);_zone=l(O);_queries=new Map;_destroySubject=new y;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Ou(Qn(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=Ou(Qn(e)).map(a=>this._registerQuery(a).observable),o=En(r);return o=Ur(o.pipe(he(1)),o.pipe(Hr(1),Rn(0))),o.pipe(w(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:c,query:d})=>{s.matches=s.matches||c,s.breakpoints[d]=c}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new Ee(a=>{let s=c=>this._zone.run(()=>a.next(c));return t.addListener(s),()=>{t.removeListener(s)}}).pipe(Ce(t),w(({matches:a})=>({query:e,matches:a})),Y(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ou(n){return n.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}var Kg=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Fu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=T({providers:[Kg]})}return n})();var Yo=(()=>{class n{_platform=l(ae);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return Zg(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=Xg(ov(e));if(t&&(Pu(t)===-1||!this.isVisible(t)))return!1;let r=e.nodeName.toLowerCase(),o=Pu(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!iv(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return rv(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Xg(n){try{return n.frameElement}catch{return null}}function Zg(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function Qg(n){let i=n.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function Jg(n){return tv(n)&&n.type=="hidden"}function ev(n){return nv(n)&&n.hasAttribute("href")}function tv(n){return n.nodeName.toLowerCase()=="input"}function nv(n){return n.nodeName.toLowerCase()=="a"}function Nu(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let i=n.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function Pu(n){if(!Nu(n))return null;let i=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function iv(n){let i=n.nodeName.toLowerCase(),e=i==="input"&&n.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function rv(n){return Jg(n)?!1:Qg(n)||ev(n)||n.hasAttribute("contenteditable")||Nu(n)}function ov(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var qo=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,t,r,o=!1,a){this._element=i,this._checker=e,this._ngZone=t,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){this._injector?De(i,{injector:this._injector}):setTimeout(i)}},ll=(()=>{class n{_checker=l(Yo);_ngZone=l(O);_document=l(R);_injector=l(U);constructor(){l(Je).load(Go)}create(e,t=!1){return new qo(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Lu=new g("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Bu=new g("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),av=0,ur=(()=>{class n{_ngZone=l(O);_defaultOptions=l(Bu,{optional:!0});_liveElement;_document=l(R);_sanitizer=l(Hi);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=l(Lu,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let r=this._defaultOptions,o,a;return t.length===1&&typeof t[0]=="number"?a=t[0]:[o,a]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Tu(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<t.length;o++)t[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${av++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var sv=200,Ko=class{_letterKeyStream=new y;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new y;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:sv;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(fe(e=>this._pressedLetters.push(e)),Rn(i),J(()=>this._pressedLetters.length>0),w(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function et(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Jn=class{_items;_activeItemIndex=H(-1);_activeItem=H(null);_wrap=!1;_typeaheadSubscription=ge.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof rn?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):on(i)&&(this._effectRef=Dt(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new y;change=new y;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Ko(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||et(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+i*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return on(this._items)?this._items():this._items instanceof rn?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var gr=class extends Jn{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var vr=class extends Jn{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var cl={},Le=class n{_appId=l(Ri);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),cl.hasOwnProperty(i)||(cl[i]=0),`${i}${e?n._infix+"-":""}${cl[i]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})};var ju=" ";function Uu(n,i,e){let t=zu(n,i);e=e.trim(),!t.some(r=>r.trim()===e)&&(t.push(e),n.setAttribute(i,t.join(ju)))}function dl(n,i,e){let t=zu(n,i);e=e.trim();let r=t.filter(o=>o!==e);r.length?n.setAttribute(i,r.join(ju)):n.removeAttribute(i)}function zu(n,i){return n.getAttribute(i)?.match(/\S+/g)??[]}var ei={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};function ul(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function me(n){return n==null?"":typeof n=="string"?n:`${n}px`}var lv=new g("cdk-dir-doc",{providedIn:"root",factory:()=>l(R)}),cv=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Hu(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?cv.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var Be=(()=>{class n{get value(){return this.valueSignal()}valueSignal=H("ltr");change=new G;constructor(){let e=l(lv,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Hu(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var gt=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(gt||{}),Xo,_n;function Zo(){if(_n==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return _n=!1,_n;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)_n=!0;else{let n=Element.prototype.scrollTo;n?_n=!/\{\s*\[native code\]\s*\}/.test(n.toString()):_n=!1}}return _n}function ti(){if(typeof document!="object"||!document)return gt.NORMAL;if(Xo==null){let n=document.createElement("div"),i=n.style;n.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",n.appendChild(e),document.body.appendChild(n),Xo=gt.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,Xo=n.scrollLeft===0?gt.NEGATED:gt.INVERTED),n.remove()}return Xo}var te=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=T({})}return n})();var dv=20,bn=(()=>{class n{_ngZone=l(O);_platform=l(ae);_renderer=l(Ue).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new y;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=dv){return this._platform.isBrowser?new Ee(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Ja(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):b()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(J(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_scrollableContainsElement(e,t){let r=yt(t),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ni=(()=>{class n{elementRef=l(P);scrollDispatcher=l(bn);ngZone=l(O);dir=l(Be,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new y;_renderer=l(Ae);_cleanupScroll;_elementScrolled=new y;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&ti()!=gt.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),ti()==gt.INVERTED?e.left=e.right:ti()==gt.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;Zo()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:t:e=="end"&&(e=a?t:r),a&&ti()==gt.INVERTED?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&ti()==gt.NEGATED?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),uv=20,wt=(()=>{class n{_platform=l(ae);_listeners;_viewportSize=null;_change=new y;_document=l(R);constructor(){let e=l(O),t=l(Ue).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=uv){return e>0?this._change.pipe(Ja(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var kt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=T({})}return n})(),hl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=T({imports:[te,kt,te,kt]})}return n})();var _r=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},ii=class extends _r{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,t,r,o){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null}},Ot=class extends _r{templateRef;viewContainerRef;context;injector;constructor(i,e,t,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},fl=class extends _r{element;constructor(i){super(),this.element=i instanceof P?i.nativeElement:i}},ri=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof ii)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Ot)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof fl)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},br=class extends ri{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,r=t.get(Qr,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=i.injector||this._defaultInjector||U.NULL,o=r.get(Pe,t.injector);e=to(i.component,{elementInjector:r,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var ml=(()=>{class n extends ri{_moduleRef=l(Qr,{optional:!0});_document=l(R);_viewContainerRef=l(nt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new G;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[ve]})}return n})(),pl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=T({})}return n})();var $u=Zo();function Zu(n){return new Qo(n.get(wt),n.get(R))}var Qo=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=me(-this._previousScrollPosition.left),i.style.top=me(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,r=e.style,o=t.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),$u&&(t.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),$u&&(t.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Qu(n,i){return new Jo(n.get(bn),n.get(O),n.get(wt),i)}var Jo=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,r){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(J(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var yr=class{enable(){}disable(){}attach(){}};function gl(n,i){return i.some(e=>{let t=n.bottom<e.top,r=n.top>e.bottom,o=n.right<e.left,a=n.left>e.right;return t||r||o||a})}function Gu(n,i){return i.some(e=>{let t=n.top<e.top,r=n.bottom>e.bottom,o=n.left<e.left,a=n.right>e.right;return t||r||o||a})}function wn(n,i){return new ea(n.get(bn),n.get(wt),n.get(O),i)}var ea=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,r){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:r}=this._viewportRuler.getViewportSize();gl(e,[{width:t,height:r,bottom:r,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Ju=(()=>{class n{_injector=l(U);constructor(){}noop=()=>new yr;close=e=>Qu(this._injector,e);block=()=>Zu(this._injector);reposition=e=>wn(this._injector,e);static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ft=class{positionStrategy;scrollStrategy=new yr;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var ta=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var eh=(()=>{class n{_attachedOverlays=[];_document=l(R);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),th=(()=>{class n extends eh{_ngZone=l(O);_renderer=l(Ue).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let o=t[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(n)))(r||n)}})();static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),nh=(()=>{class n extends eh{_platform=l(ae);_ngZone=l(O);_renderer=l(Ue).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,r),o.listen(t,"click",this._clickListener,r),o.listen(t,"auxclick",this._clickListener,r),o.listen(t,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Oe(e)};_clickListener=e=>{let t=Oe(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,c))){if(Wu(s.overlayElement,t)||Wu(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(n)))(r||n)}})();static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Wu(n,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var ih=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return n})(),rh=(()=>{class n{_platform=l(ae);_containerElement;_document=l(R);_styleLoader=l(Je);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||ul()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let t=this._document.createElement("div");t.classList.add(e),ul()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(ih)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),vl=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,r){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function _l(n){return n&&n.nodeType===1}var na=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new y;_attachments=new y;_detachments=new y;_positionStrategy;_scrollStrategy;_locationChanges=ge.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new y;_outsidePointerEvents=new y;_afterNextRenderRef;constructor(i,e,t,r,o,a,s,c,d,u=!1,m,x){this._portalOutlet=i,this._host=e,this._pane=t,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=c,this._outsideClickDispatcher=d,this._animationsDisabled=u,this._injector=m,this._renderer=x,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=De(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=f(f({},this._config),i),this._updateElementSize()}setDirection(i){this._config=q(f({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=me(this._config.width),i.height=me(this._config.height),i.minWidth=me(this._config.minWidth),i.minHeight=me(this._config.minHeight),i.maxWidth=me(this._config.maxWidth),i.maxHeight=me(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;_l(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new vl(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let r=Qn(e||[]).filter(o=>!!o);r.length&&(t?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=De(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},qu="cdk-overlay-connected-position-bounding-box",hv=/([A-Za-z%]+)$/;function wr(n,i){return new ia(i,n.get(wt),n.get(R),n.get(ae),n.get(rh))}var ia=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new y;_resizeSubscription=ge.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,r,o){this._viewportRuler=e,this._document=t,this._platform=r,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(qu),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let c=this._getOriginPoint(i,r,s),d=this._getOverlayPoint(c,e,s),u=this._getOverlayFit(d,e,t,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(u,d,t)){o.push({position:s,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:d,originPoint:c,position:s,overlayRect:e})}if(o.length){let s=null,c=-1;for(let d of o){let u=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);u>c&&(c=u,s=d)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&yn(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(qu),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof P?this._origin.nativeElement:_l(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let r;if(t.originX=="center")r=i.left+i.width/2;else{let a=this._isRtl()?i.right:i.left,s=this._isRtl()?i.left:i.right;r=t.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return t.originY=="center"?o=i.top+i.height/2:o=t.originY=="top"?i.top:i.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(i,e,t){let r;t.overlayX=="center"?r=-e.width/2:t.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:i.x+r,y:i.y+o}}_getOverlayFit(i,e,t,r){let o=Ku(e),{x:a,y:s}=i,c=this._getOffset(r,"x"),d=this._getOffset(r,"y");c&&(a+=c),d&&(s+=d);let u=0-a,m=a+o.width-t.width,x=0-s,W=s+o.height-t.height,Z=this._subtractOverflows(o.width,u,m),Q=this._subtractOverflows(o.height,x,W),$=Z*Q;return{visibleArea:$,isCompletelyWithinViewport:o.width*o.height===$,fitsInViewportVertically:Q===o.height,fitsInViewportHorizontally:Z==o.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let r=t.bottom-e.y,o=t.right-e.x,a=Yu(this._overlayRef.getConfig().minHeight),s=Yu(this._overlayRef.getConfig().minWidth),c=i.fitsInViewportVertically||a!=null&&a<=r,d=i.fitsInViewportHorizontally||s!=null&&s<=o;return c&&d}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let r=Ku(e),o=this._viewportRect,a=Math.max(i.x+r.width-o.width,0),s=Math.max(i.y+r.height-o.height,0),c=Math.max(o.top-t.top-i.y,0),d=Math.max(o.left-t.left-i.x,0),u=0,m=0;return r.width<=o.width?u=d||-a:u=i.x<this._getViewportMarginStart()?o.left-t.left-i.x:0,r.height<=o.height?m=c||-s:m=i.y<this._getViewportMarginTop()?o.top-t.top-i.y:0,this._previousPushAmount={x:u,y:m},{x:i.x+u,y:i.y+m}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!fv(this._lastScrollVisibility,t)){let r=new ta(i,t);this._positionChanges.next(r)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,r=i.overlayY;i.overlayX==="center"?t="center":this._isRtl()?t=i.overlayX==="start"?"right":"left":t=i.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${r}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=i.y,o=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-s+this._getViewportMarginTop();else{let W=Math.min(t.bottom-i.y+t.top,i.y),Z=this._lastBoundingBoxSize.height;o=W*2,a=i.y-W,o>Z&&!this._isInitialRender&&!this._growAfterOpen&&(a=i.y-Z/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,d=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,m,x;if(d)x=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=i.x-this._getViewportMarginStart();else if(c)m=i.x,u=t.right-i.x-this._getViewportMarginEnd();else{let W=Math.min(t.right-i.x+t.left,i.x),Z=this._lastBoundingBoxSize.width;u=W*2,m=i.x-W,u>Z&&!this._isInitialRender&&!this._growAfterOpen&&(m=i.x-Z/2)}return{top:a,left:m,bottom:s,right:x,width:u,height:o}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=me(t.width),r.height=me(t.height),r.top=me(t.top)||"auto",r.bottom=me(t.bottom)||"auto",r.left=me(t.left)||"auto",r.right=me(t.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=me(o)),a&&(r.maxWidth=me(a))}this._lastBoundingBoxSize=t,yn(this._boundingBox.style,r)}_resetBoundingBoxStyles(){yn(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){yn(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let t={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();yn(t,this._getExactOverlayY(e,i,u)),yn(t,this._getExactOverlayX(e,i,u))}else t.position="static";let s="",c=this._getOffset(e,"x"),d=this._getOffset(e,"y");c&&(s+=`translateX(${c}px) `),d&&(s+=`translateY(${d}px)`),t.transform=s.trim(),a.maxHeight&&(r?t.maxHeight=me(a.maxHeight):o&&(t.maxHeight="")),a.maxWidth&&(r?t.maxWidth=me(a.maxWidth):o&&(t.maxWidth="")),yn(this._pane.style,t)}_getExactOverlayY(i,e,t){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),i.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=me(o.y);return r}_getExactOverlayX(i,e,t){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let a;if(this._isRtl()?a=i.overlayX==="end"?"left":"right":a=i.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=me(o.x);return r}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Gu(i,t),isOriginOutsideView:gl(i,t),isOverlayClipped:Gu(e,t),isOverlayOutsideView:gl(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,r)=>t-Math.max(r,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&Qn(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof P)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let t=e.getBoundingClientRect();return i&&(e.style.display=""),t}};function yn(n,i){for(let e in i)i.hasOwnProperty(e)&&(n[e]=i[e]);return n}function Yu(n){if(typeof n!="number"&&n!=null){let[i,e]=n.split(hv);return!e||e==="px"?parseFloat(i):null}return n||null}function Ku(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function fv(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var Xu="cdk-global-overlay-wrapper";function oa(n){return new ra}var ra=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(Xu),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=t,c=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),d=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),u=this._xPosition,m=this._xOffset,x=this._overlayRef.getConfig().direction==="rtl",W="",Z="",Q="";c?Q="flex-start":u==="center"?(Q="center",x?Z=m:W=m):x?u==="left"||u==="end"?(Q="flex-end",W=m):(u==="right"||u==="start")&&(Q="flex-start",Z=m):u==="left"||u==="start"?(Q="flex-start",W=m):(u==="right"||u==="end")&&(Q="flex-end",Z=m),i.position=this._cssPosition,i.marginLeft=c?"0":W,i.marginTop=d?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=c?"0":Z,e.justifyContent=Q,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Xu),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},oh=(()=>{class n{_injector=l(U);constructor(){}global(){return oa()}flexibleConnectedTo(e){return wr(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Cr=new g("OVERLAY_DEFAULT_CONFIG");function Cn(n,i){n.get(Je).load(ih);let e=n.get(rh),t=n.get(R),r=n.get(Le),o=n.get(it),a=n.get(Be),s=n.get(Ae,null,{optional:!0})||n.get(Ue).createRenderer(null,null),c=new Ft(i),d=n.get(Cr,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,"showPopover"in t.body?c.usePopover=i?.usePopover??d:c.usePopover=!1;let u=t.createElement("div"),m=t.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),m.appendChild(u),c.usePopover&&(m.setAttribute("popover","manual"),m.classList.add("cdk-overlay-popover"));let x=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return _l(x)?x.after(m):x?.type==="parent"?x.element.appendChild(m):e.getContainerElement().appendChild(m),new na(new br(u,o,n),m,u,c,n.get(O),n.get(th),t,n.get(Gt),n.get(nh),i?.disableAnimations??n.get(In,null,{optional:!0})==="NoopAnimations",n.get(Pe),s)}var ah=(()=>{class n{scrollStrategies=l(Ju);_positionBuilder=l(oh);_injector=l(U);constructor(){}create(e){return Cn(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),mv=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],pv=new g("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(U);return()=>wn(n)}}),oi=(()=>{class n{elementRef=l(P);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return n})(),sh=new g("cdk-connected-overlay-default-config"),aa=(()=>{class n{_dir=l(Be,{optional:!0});_injector=l(U);_overlayRef;_templatePortal;_backdropSubscription=ge.EMPTY;_attachSubscription=ge.EMPTY;_detachSubscription=ge.EMPTY;_positionSubscription=ge.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=l(pv);_ngZone=l(O);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new G;positionChange=new G;attach=new G;detach=new G;overlayKeydown=new G;overlayOutsideClick=new G;constructor(){let e=l(lt),t=l(nt),r=l(sh,{optional:!0}),o=l(Cr,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new Ot(e,t),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=mv);let e=this._overlayRef=Cn(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!et(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let r=this._getOriginElement(),o=Oe(t);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new Ft({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=wr(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof oi?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof oi?this.origin.elementRef.nativeElement:this.origin instanceof P?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe($r(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",X],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",X],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",X],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",X],push:[2,"cdkConnectedOverlayPush","push",X],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",X],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",X],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Ye]})}return n})(),si=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=T({providers:[ah],imports:[te,pl,hl,hl]})}return n})();var gv=new g("MATERIAL_ANIMATIONS"),lh=null;function vv(){return l(gv,{optional:!0})?.animationsDisabled||l(In,{optional:!0})==="NoopAnimations"?"di-disabled":(lh??=l(Wo).matchMedia("(prefers-reduced-motion)").matches,lh?"reduced-motion":"enabled")}function be(){return vv()!=="enabled"}function ft(n){return n!=null&&`${n}`!="false"}var mt=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(mt||{}),bl=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=mt.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},ch=Zn({passive:!0,capture:!0}),yl=class{_events=new Map;addHandler(i,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,ch)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,ch)))}_delegateEventHandler=i=>{let e=Oe(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(i))})}},Dr={enterDuration:225,exitDuration:150},_v=800,dh=Zn({passive:!0,capture:!0}),uh=["mousedown","touchstart"],hh=["mouseup","mouseleave","touchend","touchcancel"],bv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return n})(),xr=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new yl;constructor(i,e,t,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=yt(t)),o&&o.get(Je).load(bv)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=f(f({},Dr),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||yv(i,e,r),s=i-r.left,c=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${c-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let m=window.getComputedStyle(u),x=m.transitionProperty,W=m.transitionDuration,Z=x==="none"||W==="0s"||W==="0s, 0s"||r.width===0&&r.height===0,Q=new bl(this,u,t,Z);u.style.transform="scale3d(1, 1, 1)",Q.state=mt.FADING_IN,t.persistent||(this._mostRecentTransientRipple=Q);let $=null;return!Z&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ne=()=>{$&&($.fallbackTimer=null),clearTimeout(Ge),this._finishRippleTransition(Q)},pe=()=>this._destroyRipple(Q),Ge=setTimeout(pe,d+100);u.addEventListener("transitionend",ne),u.addEventListener("transitioncancel",pe),$={onTransitionEnd:ne,onTransitionCancel:pe,fallbackTimer:Ge}}),this._activeRipples.set(Q,$),(Z||!d)&&this._finishRippleTransition(Q),Q}fadeOutRipple(i){if(i.state===mt.FADING_OUT||i.state===mt.HIDDEN)return;let e=i.element,t=f(f({},Dr),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=mt.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=yt(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,uh.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{hh.forEach(e=>{this._triggerElement.addEventListener(e,this,dh)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===mt.FADING_IN?this._startFadeOutTransition(i):i.state===mt.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=mt.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=mt.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=fn(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+_v;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!mn(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===mt.VISIBLE||i.config.terminateOnPointerUp&&i.state===mt.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(uh.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(hh.forEach(e=>i.removeEventListener(e,this,dh)),this._pointerUpEventsRegistered=!1))}};function yv(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var wl=new g("mat-ripple-global-options"),sa=(()=>{class n{_elementRef=l(P);_animationsDisabled=be();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=l(O),t=l(ae),r=l(wl,{optional:!0}),o=l(U);this._globalOptions=r||{},this._rippleRenderer=new xr(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:f(f(f({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,f(f({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,f(f({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&F("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var wv={capture:!0},Cv=["focus","mousedown","mouseenter","touchstart"],Cl="mat-ripple-loader-uninitialized",Dl="mat-ripple-loader-class-name",fh="mat-ripple-loader-centered",la="mat-ripple-loader-disabled",mh=(()=>{class n{_document=l(R);_animationsDisabled=be();_globalRippleOptions=l(wl,{optional:!0});_platform=l(ae);_ngZone=l(O);_injector=l(U);_eventCleanups;_hosts=new Map;constructor(){let e=l(Ue).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Cv.map(t=>e.listen(this._document,t,this._onInteraction,wv)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Cl,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Dl))&&e.setAttribute(Dl,t.className||""),t.centered&&e.setAttribute(fh,""),t.disabled&&e.setAttribute(la,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(la,""):e.removeAttribute(la)}_onInteraction=e=>{let t=Oe(e);if(t instanceof HTMLElement){let r=t.closest(`[${Cl}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Dl)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Dr.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Dr.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(la),rippleConfig:{centered:e.hasAttribute(fh),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new xr(s,this._ngZone,t,this._platform,this._injector),d=!s.rippleDisabled;d&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:d}),e.removeAttribute(Cl)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var li=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return n})();var Dv=["mat-icon-button",""],xv=["*"],Sv=new g("MAT_BUTTON_CONFIG");function ph(n){return n==null?void 0:Oi(n)}var xl=(()=>{class n{_elementRef=l(P);_ngZone=l(O);_animationsDisabled=be();_config=l(Sv,{optional:!0});_focusMonitor=l(Xt);_cleanupClick;_renderer=l(Ae);_rippleLoader=l(mh);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){l(Je).load(li);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,r){t&2&&(oe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),dt(r.color?"mat-"+r.color:""),F("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",X],disabled:[2,"disabled","disabled",X],ariaDisabled:[2,"aria-disabled","ariaDisabled",X],disabledInteractive:[2,"disabledInteractive","disabledInteractive",X],tabIndex:[2,"tabIndex","tabIndex",ph],_tabindex:[2,"tabindex","_tabindex",ph]}})}return n})(),Sr=(()=>{class n extends xl{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ve],attrs:Dv,ngContentSelectors:xv,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(ee(),ct(0,"span",0),A(1),ct(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return n})();var ci=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=T({imports:[te]})}return n})();var Ev=["matButton",""],Mv=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Av=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var gh=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),ca=(()=>{class n extends xl{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Rv(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?gh.get(this._appearance):null,o=gh.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ve],attrs:Ev,ngContentSelectors:Av,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(ee(Mv),ct(0,"span",0),A(1),ze(2,"span",1),A(3,1),Ze(),A(4,2),ct(5,"span",2)(6,"span",3)),t&2&&F("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return n})();function Rv(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Dn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=T({imports:[ci,te]})}return n})();function Iv(n,i){if(n&1){let e=rt();p(0,"div",1)(1,"button",2),se("click",function(){Te(e);let r=E();return ke(r.action())}),C(2),_()()}if(n&2){let e=E();h(2),K(" ",e.data.action," ")}}var Tv=["label"];function kv(n,i){}var Ov=Math.pow(2,31)-1,Er=class{_overlayRef;instance;containerInstance;_afterDismissed=new y;_afterOpened=new y;_onAction=new y;_durationTimeoutId;_dismissedByAction=!1;constructor(i,e){this._overlayRef=e,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,Ov))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},vh=new g("MatSnackBarData"),di=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Fv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),Pv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),Nv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),Lv=(()=>{class n{snackBarRef=l(Er);data=l(vh);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,r){t&1&&(p(0,"div",0),C(1),_(),L(2,Iv,3,1,"div",1)),t&2&&(h(),K(" ",r.data.message,`
`),h(),B(r.hasAction?2:-1))},dependencies:[ca,Fv,Pv,Nv],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),El="_mat-snack-bar-enter",Ml="_mat-snack-bar-exit",Bv=(()=>{class n extends ri{_ngZone=l(O);_elementRef=l(P);_changeDetectorRef=l(ue);_platform=l(ae);_animationsDisabled=be();snackBarConfig=l(di);_document=l(R);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=l(U);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new y;_onExit=new y;_onEnter=new y;_animationState="void";_live;_label;_role;_liveElementId=l(Le).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Ml?this._completeExit():e===El&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?De(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(El)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(El)},200)))}exit(){return this._destroyed?b(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?De(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Ml)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Ml),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(a=>e.classList.add(a)):e.classList.add(t)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let r=t.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(t&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(o=document.activeElement),t.removeAttribute("aria-hidden"),r.appendChild(t),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,r){if(t&1&&He(ml,7)(Tv,7),t&2){let o;V(o=j())&&(r._portalOutlet=o.first),V(o=j())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,r){t&1&&se("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),t&2&&F("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[ve],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(p(0,"div",1)(1,"div",2,0)(3,"div",3),vt(4,kv,0,0,"ng-template",4),_(),le(5,"div"),_()()),t&2&&(h(5),oe("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[ml],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return n})(),Vv=new g("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new di}),_h=(()=>{class n{_live=l(ur);_injector=l(U);_breakpointObserver=l(vn);_parentSnackBar=l(n,{optional:!0,skipSelf:!0});_defaultConfig=l(Vv);_animationsDisabled=be();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Lv;snackBarContainerComponent=Bv;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",r){let o=f(f({},this._defaultConfig),r);return o.data={message:e,action:t},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let r=t&&t.viewContainerRef&&t.viewContainerRef.injector,o=U.create({parent:r||this._injector,providers:[{provide:di,useValue:t}]}),a=new ii(this.snackBarContainerComponent,t.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=t,s.instance}_attach(e,t){let r=f(f(f({},new di),this._defaultConfig),t),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new Er(a,o);if(e instanceof lt){let c=new Ot(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(c)}else{let c=this._createInjector(r,s),d=new ii(e,void 0,c),u=a.attachComponentPortal(d);s.instance=u.instance}return this._breakpointObserver.observe(ei.HandsetPortrait).pipe(Y(o.detachments())).subscribe(c=>{o.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new Ft;t.direction=e.direction;let r=oa(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),t.positionStrategy=r,t.disableAnimations=this._animationsDisabled,Cn(this._injector,t)}_createInjector(e,t){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return U.create({parent:r||this._injector,providers:[{provide:Er,useValue:t},{provide:vh,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Al="Service workers are disabled or not supported by this browser",ui=class{serviceWorker;worker;registration;events;constructor(i,e){if(this.serviceWorker=i,!i)this.worker=this.events=this.registration=new Ee(t=>t.error(new I(5601,!1)));else{let t=null,r=new y;this.worker=new Ee(d=>(t!==null&&d.next(t),r.subscribe(u=>d.next(u))));let o=()=>{let{controller:d}=i;d!==null&&(t=d,r.next(t))};i.addEventListener("controllerchange",o),o(),this.registration=this.worker.pipe(re(()=>i.getRegistration().then(d=>{if(!d)throw new I(5601,!1);return d})));let a=new y;this.events=a.asObservable();let s=d=>{let{data:u}=d;u?.type&&a.next(u)};i.addEventListener("message",s),e?.get(it,null,{optional:!0})?.onDestroy(()=>{i.removeEventListener("controllerchange",o),i.removeEventListener("message",s)})}}postMessage(i,e){return new Promise(t=>{this.worker.pipe(he(1)).subscribe(r=>{r.postMessage(f({action:i},e)),t()})})}postMessageWithOperation(i,e,t){let r=this.waitForOperationCompleted(t),o=this.postMessage(i,e);return Promise.all([o,r]).then(([,a])=>a)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(i){let e;return typeof i=="string"?e=t=>t.type===i:e=t=>i.includes(t.type),this.events.pipe(J(e))}nextEventOfType(i){return this.eventsOfType(i).pipe(he(1))}waitForOperationCompleted(i){return new Promise((e,t)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(J(r=>r.nonce===i),he(1),w(r=>{if(r.result!==void 0)return r.result;throw new Error(r.error)})).subscribe({next:e,error:t})})}get isEnabled(){return!!this.serviceWorker}},jv=(()=>{class n{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new y;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=Lt,this.notificationClicks=Lt,this.notificationCloses=Lt,this.pushSubscriptionChanges=Lt,this.subscription=Lt;return}this.messages=this.sw.eventsOfType("PUSH").pipe(w(r=>r.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(w(r=>r.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(w(r=>r.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(w(r=>r.data)),this.pushManager=this.sw.registration.pipe(w(r=>r.pushManager));let t=this.pushManager.pipe(re(r=>r.getSubscription()));this.subscription=new Ee(r=>{let o=t.subscribe(r),a=this.subscriptionChanges.subscribe(r);return()=>{o.unsubscribe(),a.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(Al));let t={userVisibleOnly:!0},r=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(r.length));for(let a=0;a<r.length;a++)o[a]=r.charCodeAt(a);return t.applicationServerKey=o,new Promise((a,s)=>{this.pushManager.pipe(re(c=>c.subscribe(t)),he(1)).subscribe({next:c=>{this.subscriptionChanges.next(c),a(c)},error:s})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(Al));let e=t=>{if(t===null)throw new I(5602,!1);return t.unsubscribe().then(r=>{if(!r)throw new I(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((t,r)=>{this.subscription.pipe(he(1),re(e)).subscribe({next:t,error:r})})}decodeBase64(e){return atob(e)}static \u0275fac=function(t){return new(t||n)(S(ui))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),Rl=(()=>{class n{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=Lt,this.unrecoverable=Lt;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Al));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new I(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(t){return new(t||n)(S(ui))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),yh=new g("");function Uv(){let n=l(Mr);if(!("serviceWorker"in navigator&&n.enabled!==!1))return;let i=l(yh),e=l(O),t=l(it);e.runOutsideAngular(()=>{let r=navigator.serviceWorker,o=()=>r.controller?.postMessage({action:"INITIALIZE"});r.addEventListener("controllerchange",o),t.onDestroy(()=>{r.removeEventListener("controllerchange",o)})}),e.runOutsideAngular(()=>{let r,{registrationStrategy:o}=n;if(typeof o=="function")r=new Promise(a=>o().subscribe(()=>a()));else{let[a,...s]=(o||"registerWhenStable:30000").split(":");switch(a){case"registerImmediately":r=Promise.resolve();break;case"registerWithDelay":r=bh(+s[0]||0);break;case"registerWhenStable":r=Promise.race([t.whenStable(),bh(+s[0])]);break;default:throw new I(5600,!1)}}r.then(()=>{t.destroyed||navigator.serviceWorker.register(i,{scope:n.scope,updateViaCache:n.updateViaCache,type:n.type}).catch(a=>console.error(tn(5604,!1)))})})}function bh(n){return new Promise(i=>setTimeout(i,n))}function zv(){let n=l(Mr),i=l(U),e=!0;return new ui(e&&n.enabled!==!1?navigator.serviceWorker:void 0,i)}var Mr=class{enabled;updateViaCache;type;scope;registrationStrategy};function wh(n,i={}){return Ie([jv,Rl,{provide:yh,useValue:n},{provide:Mr,useValue:i},{provide:ui,useFactory:zv},ls(Uv)])}var kl=class{translations;constructor(i){this.translations=i}getTranslation(i){return b(this.translations.get(i)||{})}},xh=new g("");function Il(n,i){return n&&(Object.prototype.hasOwnProperty.call(n,i)?n[i]:i.split(".").reduce((e,t)=>e?.[t],n))}function Hv(n,i,e){n=f({},n);let t=i.split("."),r=t.length-1;return t.reduce((o,a,s)=>(s===r?o[a]=e:o[a]=Array.isArray(o[a])?o[a].slice():f({},o[a]),o&&o[a]),n),n}function Sh(n){return n?Array.isArray(n)?n.length:ha(n)?Object.keys(n).length:n?n.length:0:0}function $v(n){return Sh(n)===0}function Gv(n){return typeof n=="function"}function fi(n){return typeof n=="string"}function ha(n){return!!n&&typeof n=="object"&&!Array.isArray(n)}function Eh(n){return n.replace(/(?:^\w|[A-Z]|\b\w)/g,(i,e)=>e==0?i.toLowerCase():i.toUpperCase()).replace(/\s+|_|-|\//g,"")}function Mh(){return typeof window<"u"}function Ol(n){return n==null}function Ch(n){return Ol(n)===!1}function Ah(n){return n&&typeof n.scope=="string"}function Wv(n){return n&&ha(n.loader)}function Dh(n){let i={};function e(t,r){if(t===null)i[r]=null;else if(ha(t))for(let[o,a]of Object.entries(t))e(a,r?`${r}.${o}`:o);else i[r]=t}return e(n,""),i}function qv(n){let i={};for(let[e,t]of Object.entries(n)){let r=e.split("."),o=i;r.forEach((a,s)=>{s===r.length-1?o[a]=t:(o[a]??={},o=o[a])})}return i}var mi=new g("",{providedIn:"root",factory:()=>hi}),hi={defaultLang:"en",reRenderOnLangChange:!1,prodMode:!1,failedRetries:2,fallbackLang:[],availableLangs:[],missingHandler:{logMissingKey:!0,useFallbackTranslation:!1,allowEmpty:!1},flatten:{aot:!1},interpolation:["{{","}}"],scopes:{keepCasing:!1}};function Yv(n={}){return q(f(f({},hi),n),{missingHandler:f(f({},hi.missingHandler),n.missingHandler),flatten:f(f({},hi.flatten),n.flatten),scopes:f(f({},hi.scopes),n.scopes)})}var Rh=new g(""),Kv=(()=>{class n{config=l(mi,{optional:!0})??hi;get interpolationMatcher(){return Xv(this.config)}transpile({value:e,params:t={},translation:r,key:o}){if(fi(e)){let a,s=e;for(;(a=this.interpolationMatcher.exec(s))!==null;){let[c,d]=a;s=s.replace(c,()=>{let u=d.trim(),m=Il(t,u);return Ch(m)?m:Ch(r[u])?this.transpile({params:t,translation:r,key:o,value:r[u]}):""})}return s}else t&&(ha(e)?e=this.handleObject({value:e,params:t,translation:r,key:o}):Array.isArray(e)&&(e=this.handleArray({value:e,params:t,translation:r,key:o})));return e}handleObject({value:e,params:t={},translation:r,key:o}){let a=e;return Object.keys(t).forEach(s=>{let c=this.transpile({value:Il(a,s),params:Il(t,s),translation:r,key:o});a=Hv(a,s,c)}),a}handleArray(r){var o=r,{value:e}=o,t=Qa(o,["value"]);return e.map(a=>this.transpile(f({value:a},t)))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})();function Xv(n){let[i,e]=n.interpolation;return new RegExp(`${i}([^${i}${e}]*?)${e}`,"g")}var Ih=new g(""),Zv=(()=>{class n{handle(e,t){if(t.missingHandler.logMissingKey&&!t.prodMode){let r=`Missing translation for '${e}'`;console.warn(`%c ${r}`,"font-size: 12px; color: red")}return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),Th=new g(""),Qv=(()=>{class n{preSaveTranslation(e){return e}preSaveTranslationKey(e,t){return t}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),kh=new g(""),Jv=(()=>{class n{userConfig;constructor(e){this.userConfig=e}getNextLangs(){let e=this.userConfig.fallbackLang;if(!e)throw new Error("When using the default fallback, a fallback language must be provided in the config!");return Array.isArray(e)?e:[e]}static \u0275fac=function(t){return new(t||n)(S(mi))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})();function Ar(n){if(!n)return"";let i=n.split("/");return i.pop(),i.join("/")}function Zt(n){return n?n.split("/").pop():""}function Fl(n,i,e="|"){if(fi(n)){let t=n.split(e),r=t.pop();return r===i?[!0,t.toString()]:[!1,r]}return[!1,""]}function Oh(n,i){let[e]=Fl(i,"static");return e?!1:!!n.config.reRenderOnLangChange}function Fh(n){return n?i=>i:he(1)}function e_(n,i){return Object.keys(n).reduce((e,t)=>(e[`${i}/${t}`]=n[t],e),{})}function Nl(n,i){return Wv(n)?e_(n.loader,i):void 0}function Tl(n){return{scope:Ar(n)||null,langName:Zt(n)}}function Ph(n){let{path:i,inlineLoader:e,mainLoader:t,data:r}=n;if(e){let o=e[i];if(Gv(o)===!1)throw`You're using an inline loader but didn't provide a loader for ${i}`;return e[i]().then(a=>a.default?a.default:a)}return t.getTranslation(i,r)}function t_({mainLoader:n,path:i,data:e,fallbackPath:t,inlineLoader:r}){return(t?[i,t]:[i]).map(a=>{let s=Ph({path:a,mainLoader:n,inlineLoader:r,data:e});return ye(s).pipe(w(c=>({translation:c,lang:a})))})}var n_;var pi=(()=>{class n{loader;parser;missingHandler;interceptor;fallbackStrategy;langChanges$;translations=new Map;cache=new Map;firstFallbackLang;defaultLang="";availableLangs=[];isResolvedMissingOnce=!1;lang;failedLangs=new Set;events=new y;events$=this.events.asObservable();config;destroyRef=l(tt);constructor(e,t,r,o,a,s){this.loader=e,this.parser=t,this.missingHandler=r,this.interceptor=o,this.fallbackStrategy=s,this.loader||(this.loader=new kl(this.translations)),n_=this,this.config=JSON.parse(JSON.stringify(a)),this.setAvailableLangs(this.config.availableLangs||[]),this.setFallbackLangForMissingTranslation(this.config),this.setDefaultLang(this.config.defaultLang),this.lang=new Fe(this.getDefaultLang()),this.langChanges$=this.lang.asObservable(),this.events$.subscribe(c=>{c.type==="translationLoadSuccess"&&c.wasFailure&&this.setActiveLang(c.payload.langName)}),this.destroyRef.onDestroy(()=>{this.lang.complete(),this.events.complete(),this.cache.clear()})}getDefaultLang(){return this.defaultLang}setDefaultLang(e){this.defaultLang=e}getActiveLang(){return this.lang.getValue()}setActiveLang(e){return this.parser.onLangChanged?.(e),this.lang.next(e),this.events.next({type:"langChanged",payload:Tl(e)}),this}setAvailableLangs(e){this.availableLangs=e}getAvailableLangs(){return this.availableLangs}load(e,t={}){let r=this.cache.get(e);if(r)return r;let o,a=this._isLangScoped(e),s;a&&(s=Ar(e));let c={path:e,mainLoader:this.loader,inlineLoader:t.inlineLoader,data:a?{scope:s}:void 0};if(this.useFallbackTranslation(e)){let u=a?`${s}/${this.firstFallbackLang}`:this.firstFallbackLang,m=t_(q(f({},c),{fallbackPath:u}));o=Nt(m)}else{let u=Ph(c);o=ye(u)}let d=o.pipe(wc(this.config.failedRetries),fe(u=>{if(Array.isArray(u)){u.forEach(m=>{this.handleSuccess(m.lang,m.translation),m.lang!==e&&this.cache.set(m.lang,b({}))});return}this.handleSuccess(e,u)}),Ct(u=>(this.config.prodMode||console.error(`Error while trying to load "${e}"`,u),this.handleFailure(e,t))),Ai(1),Is(this.destroyRef));return this.cache.set(e,d),d}translate(e,t={},r=this.getActiveLang()){if(!e)return e;let{scope:o,resolveLang:a}=this.resolveLangAndScope(r);if(Array.isArray(e))return e.map(d=>this.translate(o?`${o}.${d}`:d,t,a));e=o?`${o}.${e}`:e;let s=this.getTranslation(a),c=s[e];return c?this.parser.transpile({value:c,params:t,translation:s,key:e}):this._handleMissingKey(e,c,t)}selectTranslate(e,t,r,o=!1){let a,s=(d,u)=>this.load(d,u).pipe(w(()=>o?this.translateObject(e,t,d):this.translate(e,t,d)));if(Ol(r))return this.langChanges$.pipe(re(d=>s(d)));if(r=Array.isArray(r)?r[0]:r,Ah(r)){let d=r;r=d.scope,a=Nl(d,d.scope)}if(r=r,this.isLang(r)||this.isScopeWithLang(r))return s(r);let c=r;return this.langChanges$.pipe(re(d=>s(`${c}/${d}`,{inlineLoader:a})))}isScopeWithLang(e){return this.isLang(Zt(e))}translateObject(e,t={},r=this.getActiveLang()){if(fi(e)||Array.isArray(e)){let{resolveLang:a,scope:s}=this.resolveLangAndScope(r);if(Array.isArray(e))return e.map(u=>this.translateObject(s?`${s}.${u}`:u,t,a));let c=this.getTranslation(a);e=s?`${s}.${e}`:e;let d=qv(this.getObjectByKey(c,e));return $v(d)?this.translate(e,t,r):this.parser.transpile({value:d,params:t,translation:c,key:e})}let o=[];for(let[a,s]of this.getEntries(e))o.push(this.translateObject(a,s,r));return o}selectTranslateObject(e,t,r){if(fi(e)||Array.isArray(e))return this.selectTranslate(e,t,r,!0);let[[o,a],...s]=this.getEntries(e);return this.selectTranslateObject(o,a,r).pipe(w(c=>{let d=[c];for(let[u,m]of s)d.push(this.translateObject(u,m,r));return d}))}getTranslation(e){if(e){if(this.isLang(e))return this.translations.get(e)||{};{let{scope:t,resolveLang:r}=this.resolveLangAndScope(e),o=this.translations.get(r)||{};return this.getObjectByKey(o,t)}}return this.translations}selectTranslation(e){let t=this.langChanges$;if(e){let r=Zt(e)!==e;this.isLang(e)||r?t=b(e):t=this.langChanges$.pipe(w(o=>`${e}/${o}`))}return t.pipe(re(r=>this.load(r).pipe(w(()=>this.getTranslation(r)))))}setTranslation(e,t=this.getActiveLang(),r={}){let a=f(f({},{merge:!0,emitChange:!0}),r),s=Ar(t),c=e;if(s){let W=this.getMappedScope(s);c=Dh({[W]:e})}let d=s?Zt(t):t,u=f(f({},a.merge&&this.getTranslation(d)),c),m=this.config.flatten.aot?u:Dh(u),x=this.interceptor.preSaveTranslation(m,d);this.translations.set(d,x),a.emitChange&&this.setActiveLang(this.getActiveLang())}setTranslationKey(e,t,r={}){let o=r.lang||this.getActiveLang(),a=this.interceptor.preSaveTranslationKey(e,t,o),s={[e]:a};this.setTranslation(s,o,q(f({},r),{merge:!0}))}setFallbackLangForMissingTranslation({fallbackLang:e}){let t=Array.isArray(e)?e[0]:e;e&&this.useFallbackTranslation(t)&&(this.firstFallbackLang=t)}_handleMissingKey(e,t,r){if(this.config.missingHandler.allowEmpty&&t==="")return"";if(!this.isResolvedMissingOnce&&this.useFallbackTranslation()){this.isResolvedMissingOnce=!0;let o=this.translate(e,r,this.firstFallbackLang);return this.isResolvedMissingOnce=!1,o}return this.missingHandler.handle(e,this.getMissingHandlerData(),r)}_isLangScoped(e){return this.getAvailableLangsIds().indexOf(e)===-1}isLang(e){return this.getAvailableLangsIds().indexOf(e)!==-1}_loadDependencies(e,t){let r=Zt(e);return this._isLangScoped(e)&&!this.isLoadedTranslation(r)?En([this.load(r),this.load(e,{inlineLoader:t})]):this.load(e,{inlineLoader:t})}_completeScopeWithLang(e){return this._isLangScoped(e)&&!this.isLang(Zt(e))?`${e}/${this.getActiveLang()}`:e}_setScopeAlias(e,t){this.config.scopeMapping||(this.config.scopeMapping={}),this.config.scopeMapping[e]=t}isLoadedTranslation(e){return Sh(this.getTranslation(e))}getAvailableLangsIds(){let e=this.getAvailableLangs()[0];return fi(e)?this.getAvailableLangs():this.getAvailableLangs().map(t=>t.id)}getMissingHandlerData(){return q(f({},this.config),{activeLang:this.getActiveLang(),availableLangs:this.availableLangs,defaultLang:this.defaultLang})}useFallbackTranslation(e){return this.config.missingHandler.useFallbackTranslation&&e!==this.firstFallbackLang}handleSuccess(e,t){this.setTranslation(t,e,{emitChange:!1}),this.events.next({wasFailure:!!this.failedLangs.size,type:"translationLoadSuccess",payload:Tl(e)}),this.failedLangs.forEach(r=>this.cache.delete(r)),this.failedLangs.clear()}handleFailure(e,t){Ol(t.failedCounter)&&(t.failedCounter=0,t.fallbackLangs||(t.fallbackLangs=this.fallbackStrategy.getNextLangs(e)));let r=e.split("/"),a=t.fallbackLangs[t.failedCounter];if(this.failedLangs.add(e),this.cache.has(a))return this.handleSuccess(a,this.getTranslation(a)),We;let s=a===r[r.length-1];if(!a||s){let d="Unable to load translation and all the fallback languages";throw r.length>1&&(d+=", did you misspelled the scope name?"),new Error(d)}let c=a;return r.length>1&&(r[r.length-1]=a,c=r.join("/")),t.failedCounter++,this.events.next({type:"translationLoadFailure",payload:Tl(e)}),this.load(c,t)}getMappedScope(e){let{scopeMapping:t={},scopes:r={keepCasing:!1}}=this.config;return t[e]||(r.keepCasing?e:Eh(e))}resolveLangAndScope(e){let t=e,r;if(this._isLangScoped(e)){let o=Zt(e),a=this.isLang(o);t=a?o:this.getActiveLang(),r=this.getMappedScope(a?Ar(e):e)}return{scope:r,resolveLang:t}}getObjectByKey(e,t){let r={},o=`${t}.`;for(let a in e)a.startsWith(o)&&(r[a.replace(o,"")]=e[a]);return r}getEntries(e){return e instanceof Map?e.entries():Object.entries(e)}static \u0275fac=function(t){return new(t||n)(S(xh,8),S(Rh),S(Ih),S(Th),S(mi),S(kh))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),i_=(()=>{class n{html;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],inputs:{html:"html"},decls:1,vars:1,consts:[[1,"transloco-loader-template",3,"innerHTML"]],template:function(t,r){t&1&&ct(0,"div",0),t&2&&Ut("innerHTML",r.html,Nc)},encapsulation:2})}return n})(),Pl=class{view;vcr;constructor(i,e){this.view=i,this.vcr=e}attachView(){if(this.view instanceof lt)this.vcr.createEmbeddedView(this.view);else if(fi(this.view)){let i=this.vcr.createComponent(i_);i.instance.html=this.view,i.hostView.detectChanges()}else this.vcr.createComponent(this.view)}detachView(){this.vcr.clear()}},Nh=new g(""),r_=new g(""),Lh=new g(""),da=class{initialized=!1;resolve({inline:i,provider:e,active:t}){let r=t;if(this.initialized)return r=t,r;if(e){let[,o]=Fl(e,"static");r=o}if(i){let[,o]=Fl(i,"static");r=o}return this.initialized=!0,r}resolveLangBasedOnScope(i){return Ar(i)?Zt(i):i}resolveLangPath(i,e){return e?`${e}/${i}`:i}},ua=class{service;constructor(i){this.service=i}resolve(i){let{inline:e,provider:t}=i;if(e)return e;if(t){if(Ah(t)){let{scope:r,alias:o=this.service.config.scopes.keepCasing?r:Eh(r)}=t;return this.service._setScopeAlias(r,o),r}return t}}},Bh=(()=>{class n{destroyRef=l(tt);service=l(pi);tpl=l(lt,{optional:!0});providerLang=l(Nh,{optional:!0});providerScope=l(Lh,{optional:!0});providedLoadingTpl=l(r_,{optional:!0});cdr=l(ue);host=l(P);vcr=l(nt);renderer=l(Ae);view;memo=new Map;key;params={};inlineScope;inlineRead;prefix;inlineLang;inlineTpl;currentLang;loaderTplHandler;initialized=!1;path;langResolver=new da;scopeResolver=new ua(this.service);strategy=this.tpl===null?"attribute":"structural";static ngTemplateContextGuard(e,t){return!0}ngOnInit(){let e=Oh(this.service,this.providerLang||this.inlineLang);if(this.service.langChanges$.pipe(re(t=>{let r=this.langResolver.resolve({inline:this.inlineLang,provider:this.providerLang,active:t});return Array.isArray(this.providerScope)?Nt(this.providerScope.map(o=>this.resolveScope(r,o))):this.resolveScope(r,this.providerScope)}),Fh(e),Is(this.destroyRef)).subscribe(()=>{this.currentLang=this.langResolver.resolveLangBasedOnScope(this.path),this.strategy==="attribute"?this.attributeStrategy():this.structuralStrategy(this.currentLang,this.prefix||this.inlineRead),this.cdr.markForCheck(),this.initialized=!0}),!this.initialized){let t=this.resolveLoadingContent();t&&(this.loaderTplHandler=new Pl(t,this.vcr),this.loaderTplHandler.attachView())}}ngOnChanges(e){this.strategy==="attribute"&&Object.keys(e).some(r=>!e[r].firstChange)&&this.attributeStrategy()}attributeStrategy(){this.detachLoader(),this.renderer.setProperty(this.host.nativeElement,"innerText",this.service.translate(this.key,this.params,this.currentLang))}structuralStrategy(e,t){this.memo.clear();let r=this.getTranslateFn(e,t);this.view?(this.view.context.$implicit=r,this.view.context.currentLang=this.currentLang):(this.detachLoader(),this.view=this.vcr.createEmbeddedView(this.tpl,{$implicit:r,currentLang:this.currentLang}))}getTranslateFn(e,t){return(r,o)=>{let a=t?`${t}.${r}`:r,s=o?`${a}${JSON.stringify(o)}`:a;return this.memo.has(s)||this.memo.set(s,this.service.translate(a,o,e)),this.memo.get(s)}}resolveLoadingContent(){return this.inlineTpl||this.providedLoadingTpl}ngOnDestroy(){this.memo.clear()}detachLoader(){this.loaderTplHandler?.detachView()}resolveScope(e,t){let r=this.scopeResolver.resolve({inline:this.inlineScope,provider:t});this.path=this.langResolver.resolveLangPath(e,r);let o=Nl(t,r);return this.service._loadDependencies(this.path,o)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","transloco",""]],inputs:{key:[0,"transloco","key"],params:[0,"translocoParams","params"],inlineScope:[0,"translocoScope","inlineScope"],inlineRead:[0,"translocoRead","inlineRead"],prefix:[0,"translocoPrefix","prefix"],inlineLang:[0,"translocoLang","inlineLang"],inlineTpl:[0,"translocoLoadingTpl","inlineTpl"]},features:[Ye]})}return n})(),gi=(()=>{class n{service;providerScope;providerLang;cdr;subscription=null;lastValue="";lastKey;path;langResolver=new da;scopeResolver;constructor(e,t,r,o){this.service=e,this.providerScope=t,this.providerLang=r,this.cdr=o,this.scopeResolver=new ua(this.service)}transform(e,t,r){if(!e)return e;let o=t?`${e}${JSON.stringify(t)}`:e;if(o===this.lastKey)return this.lastValue;this.lastKey=o,this.subscription?.unsubscribe();let a=Oh(this.service,this.providerLang||r);return this.subscription=this.service.langChanges$.pipe(re(s=>{let c=this.langResolver.resolve({inline:r,provider:this.providerLang,active:s});return Array.isArray(this.providerScope)?Nt(this.providerScope.map(d=>this.resolveScope(c,d))):this.resolveScope(c,this.providerScope)}),Fh(a)).subscribe(()=>this.updateValue(e,t)),this.lastValue}ngOnDestroy(){this.subscription?.unsubscribe(),this.subscription=null}updateValue(e,t){let r=this.langResolver.resolveLangBasedOnScope(this.path);this.lastValue=this.service.translate(e,t,r),this.cdr.markForCheck()}resolveScope(e,t){let r=this.scopeResolver.resolve({inline:void 0,provider:t});this.path=this.langResolver.resolveLangPath(e,r);let o=Nl(t,r);return this.service._loadDependencies(this.path,o)}static \u0275fac=function(t){return new(t||n)(Xe(pi,16),Xe(Lh,24),Xe(Nh,24),Xe(ue,16))};static \u0275pipe=as({name:"transloco",type:n,pure:!1})}return n})();var Vh=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=T({})}return n})();function jh(n){let i=[s_(Kv),c_(Zv),d_(Qv),l_(Jv)];return n.config&&i.push(o_(n.config)),n.loader&&i.push(a_(n.loader)),i}function o_(n){return Ie([{provide:mi,useValue:Yv(n)}])}function a_(n){return Ie([{provide:xh,useClass:n}])}function s_(n){return Ie([{provide:Rh,useClass:n,deps:[mi]}])}function l_(n){return Ie([{provide:kh,useClass:n,deps:[mi]}])}function c_(n){return Ie([{provide:Ih,useClass:n}])}function d_(n){return Ie([{provide:Th,useClass:n}])}function Uh(){let n=u_();if(!(!n||!Mh()))return n.indexOf("-")!==-1&&(n=n.split("-")[0]),n.indexOf("_")!==-1&&(n=n.split("_")[0]),n}function u_(){if(!Mh())return"";let n=window.navigator;return n.languages?.[0]??n.language}var fa=class n{swUpdate=l(Rl);snackbar=l(_h);translocoService=l(pi);unrecoverableEvent=Mt(this.swUpdate.unrecoverable,{initialValue:null});versionDetectedAt=Mt(this.swUpdate.versionUpdates.pipe(J(i=>i.type==="VERSION_DETECTED"),w(()=>Date.now())),{initialValue:0});constructor(){Dt(()=>{let i=this.unrecoverableEvent();if(!i)return;let e=`An error occurred that we cannot recover from:
`+i.reason+`

Please reload the page.`;this.promptReload(e),console.debug(e)}),Dt(()=>{this.versionDetectedAt()&&this.promptReload(this.translocoService.translate("messages.update-available"))})}async promptReload(i){let e=this.snackbar.open(i,"Reload");await Sn(e.onAction()),window.location.reload()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){e&1&&le(0,"router-outlet")},dependencies:[or],encapsulation:2})};var f_="@",m_=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=l(U);loadingSchedulerFn=l(p_,{optional:!0});_engine;constructor(e,t,r,o,a){this.doc=e,this.delegate=t,this.zone=r,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-F6J52ICJ.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new I(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new Ll(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(e,t);o.use(s),this.scheduler??=this.injector.get(Ec,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){Zr()};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),Ll=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,t,r){this.delegate.insertBefore(i,e,t,r)}removeChild(i,e,t,r){this.delegate.removeChild(i,e,t,r)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,r){this.delegate.setAttribute(i,e,t,r)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,r){this.delegate.setStyle(i,e,t,r)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(i,e,t)),this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(i,e,t,r)),this.delegate.listen(i,e,t,r)}shouldReplay(i){return this.replay!==null&&i.startsWith(f_)}},p_=new g("");function zh(n="animations"){return rs("NgAsyncAnimations"),Ie([{provide:Ue,useFactory:()=>new m_(l(R),l(ji),l(O),n)},{provide:In,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var pa=class n{http=l(Vn);getTranslation(i){return this.http.get(`i18n/${i}.json`)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})};var ga=class n{_playerCount=H(2);playerCount=this._playerCount.asReadonly();setPlayerCount(i){this._playerCount.set(i)}neutralBuildings=[{title:"A",sides:[{title:"front"}]},{title:"B",sides:[{title:"front"}]},{title:"C",sides:[{title:"front"}]},{title:"D",sides:[{title:"front"}]},{title:"E",sides:[{title:"front"}]},{title:"F",sides:[{title:"front"}]},{title:"G",sides:[{title:"front"}]},{title:"H",sides:[{title:"front"}]}];playerBuildings=[{title:"1",sides:[{title:"a"},{title:"b"}]},{title:"2",sides:[{title:"a"},{title:"b"}]},{title:"3",sides:[{title:"a"},{title:"b"}]},{title:"4",sides:[{title:"a"},{title:"b"}]},{title:"5",sides:[{title:"a"},{title:"b"}]},{title:"6",sides:[{title:"a"},{title:"b"}]},{title:"7",sides:[{title:"a"},{title:"b"}]},{title:"8",sides:[{title:"a"},{title:"b"}]},{title:"9",sides:[{title:"a"},{title:"b"}]},{title:"10",sides:[{title:"a"},{title:"b"}]}];deckBuildingModules=["1","2","3","4","5","6","7","8","9","10"];harborMasters=[{title:"1",sides:[{title:"front",image:"img/harbormaster-01.png"}]},{title:"2",sides:[{title:"front",image:"img/harbormaster-02.png"}]},{title:"3",sides:[{title:"front",image:"img/harbormaster-03.png"}]},{title:"4",sides:[{title:"front",image:"img/harbormaster-04.png"}]},{title:"5",sides:[{title:"front",image:"img/harbormaster-05.png"}]},{title:"6",sides:[{title:"front",image:"img/harbormaster-06.png"}]},{title:"7",sides:[{title:"front",image:"img/harbormaster-07.png"}]},{title:"8",sides:[{title:"front",image:"img/harbormaster-08.png"}]}];getRandomNeutralBuildingOrder(){return this.shuffleArray(this.neutralBuildings)}getRandomHarborMasters(){let i=[],e=this.shuffleArray(this.harborMasters);for(let t=0;t<5;t++){let r=e.pop();r&&i.push(r)}return i}getRandomDeckbuildingModules(){let i=[],e=this.shuffleArray(this.deckBuildingModules);for(let t=0;t<4;t++){let r=e.pop();r&&i.push(r)}return i.sort((t,r)=>parseInt(t)-parseInt(r))}getRandomPlayerBuildings(){let i=JSON.parse(JSON.stringify(this.playerBuildings));return i.forEach(e=>{e.sides.splice(Math.floor(Math.random()*e.sides.length),1)}),i}shuffleArray(i){let e=i.slice();for(let t=e.length-1;t>0;t--){let r=Math.floor(Math.random()*(t+1)),o=e[t];e[t]=e[r],e[r]=o}return e}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})};var Hh="indexedDB is not working",ba=class extends Error{message=Hh},g_=`The storage is currently localStorage,
where data must be serialized, and the provided data can't be serialized.`,Bl=class extends Error{message=g_},v_=new g("localStoragePrefix",{providedIn:"root",factory:()=>""}),__="ngStorage",b_=new g("localStorageIDBDBName",{providedIn:"root",factory:()=>__}),y_=1,w_=new g("localStorageIDBDBVersion",{providedIn:"root",factory:()=>y_}),C_="localStorage",D_=new g("localStorageIDBStoreName",{providedIn:"root",factory:()=>C_}),x_=!0,S_=new g("localStorageIDBWrap",{providedIn:"root",factory:()=>x_});var E_=`Data stored is not valid against the provided JSON schema.
Check your JSON schema, otherwise it means data has been corrupted.`,ya=class extends Error{message=E_},va=(()=>{class n{prefix;constructor(){this.prefix=l(v_)}get size(){return b(localStorage.length)}get(e){let t=localStorage.getItem(this.prefixKey(e));if(t!==null)try{let r=JSON.parse(t);return b(r)}catch(r){return qe(()=>r)}return b(void 0)}set(e,t){let r=null,o=Object.getPrototypeOf(t);if(typeof t=="object"&&!Array.isArray(t)&&!(o===Object.prototype||o===null))return qe(()=>new Bl);try{if(r=JSON.stringify(t),r===void 0)throw new Error}catch(a){return qe(()=>a)}try{localStorage.setItem(this.prefixKey(e),r)}catch(a){return qe(()=>a)}return b(void 0)}delete(e){return localStorage.removeItem(this.prefixKey(e)),b(void 0)}clear(){return localStorage.clear(),b(void 0)}keys(){return new Ee(e=>{for(let t=0;t<localStorage.length;t+=1)e.next(this.getUnprefixedKey(t));e.complete()}).pipe(bc(_c))}has(e){for(let t=0;t<localStorage.length;t+=1)if(e===this.getUnprefixedKey(t))return b(!0);return b(!1)}getUnprefixedKey(e){let t=localStorage.key(e);return t!==null?this.prefix===""?t:t.substring(this.prefix.length):null}prefixKey(e){return`${this.prefix}${e}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),_a=(()=>{class n{memoryStorage=new Map;get size(){return b(this.memoryStorage.size)}get(e){return b(this.memoryStorage.get(e))}set(e,t){return this.memoryStorage.set(e,t),b(void 0)}delete(e){return this.memoryStorage.delete(e),b(void 0)}clear(){return this.memoryStorage.clear(),b(void 0)}keys(){return ye(this.memoryStorage.keys())}has(e){return b(this.memoryStorage.has(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function M_(){let n=l(Bt);try{if(Ni(n)&&indexedDB!==void 0&&indexedDB!==null&&"open"in indexedDB)return new Vl;if(Ni(n)&&localStorage!==void 0&&localStorage!==null&&"getItem"in localStorage)return new va}catch{}return new _a}var A_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:()=>M_(),providedIn:"root"})}return n})(),Vl=(()=>{class n{dbName;storeName;dbVersion;database=new Vr(1);noWrap;wrapIndex="value";constructor(){this.dbName=l(b_),this.storeName=l(D_),this.dbVersion=l(w_),this.noWrap=l(S_),this.connect()}get backingStore(){return{database:this.dbName,store:this.storeName,version:this.dbVersion}}get size(){return this.transaction("readonly").pipe(we(e=>{let{store:t,events:r}=e,o=t.count();return r.pipe(w(()=>o.result))}),Me())}get(e){return this.transaction("readonly").pipe(we(t=>{let{store:r,events:o}=t,a=r.get(e);return o.pipe(w(()=>{if(a.result!==void 0&&a.result!==null)return!this.noWrap&&typeof a.result=="object"&&this.wrapIndex in a.result&&a.result[this.wrapIndex]!==void 0&&a.result[this.wrapIndex]!==null?a.result[this.wrapIndex]:a.result}))}),Me())}set(e,t){return t===void 0?this.delete(e):this.transaction("readwrite").pipe(we(r=>{let{store:o,events:a}=r,s=this.noWrap?t:{[this.wrapIndex]:t};return o.put(s,e),a.pipe(w(()=>{}))}),Me())}delete(e){return this.transaction("readwrite").pipe(we(t=>{let{store:r,events:o}=t;return r.delete(e),o.pipe(w(()=>{}))}),Me())}clear(){return this.transaction("readwrite").pipe(we(e=>{let{store:t,events:r}=e;return t.clear(),r.pipe(w(()=>{}))}),Me())}keys(){return this.transaction("readonly").pipe(Me(),we(e=>{let{store:t}=e,r=t.openKeyCursor(),o=An(r,"success").pipe($r(()=>r.result!==null),w(()=>r.result.key.toString()),fe(()=>{r.result.continue()})),a=this.listenError(r);return zr([o,a])}))}has(e){return this.transaction("readonly").pipe(we(t=>{let{store:r,events:o}=t,a=r.getKey(e);return o.pipe(w(()=>a.result!==void 0))}),Me())}connect(){let e;try{e=indexedDB.open(this.dbName,this.dbVersion)}catch{this.database.error(new ba);return}this.createStore(e);let t=An(e,"success"),r=this.listenError(e);zr([t,r]).pipe(Me()).subscribe({next:()=>{this.database.next(e.result)},error:()=>{this.database.error(new ba)}})}createStore(e){An(e,"upgradeneeded").pipe(Me()).subscribe({next:()=>{e.result.objectStoreNames.contains(this.storeName)||e.result.createObjectStore(this.storeName)}})}transaction(e){return this.database.pipe(we(t=>{let r;try{r=t.transaction([this.storeName],e)}catch(s){return qe(()=>s)}let o=r.objectStore(this.storeName),a=this.listenTransactionEvents(r);return b({store:o,events:a})}))}listenError(e){return An(e,"error").pipe(we(t=>qe(()=>t.target?.error)))}listenTransactionEvents(e){let t=An(e,"complete"),r=this.listenError(e);return zr([t,r])}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),R_=(()=>{class n{validate(e,t){switch(t.type){case"string":return this.validateString(e,t);case"number":case"integer":return this.validateNumber(e,t);case"boolean":return this.validateBoolean(e,t);case"array":return this.validateArray(e,t);case"object":return this.validateObject(e,t)}}validateString(e,t){if(typeof e!="string"||!this.validateConst(e,t)||!this.validateEnum(e,t)||t.maxLength!==void 0&&e.length>t.maxLength||t.minLength!==void 0&&e.length<t.minLength)return!1;if(t.pattern!==void 0)try{if(!new RegExp(t.pattern).test(e))return!1}catch{}return!0}validateNumber(e,t){return!(typeof e!="number"||t.type==="integer"&&!Number.isInteger(e)||!this.validateConst(e,t)||!this.validateEnum(e,t)||t.multipleOf!==void 0&&t.multipleOf!==0&&Number.isFinite(t.multipleOf)&&!Number.isInteger(e/t.multipleOf)||t.maximum!==void 0&&e>t.maximum||t.exclusiveMaximum!==void 0&&e>=t.exclusiveMaximum||t.minimum!==void 0&&e<t.minimum||t.exclusiveMinimum!==void 0&&e<=t.exclusiveMinimum)}validateBoolean(e,t){return!(typeof e!="boolean"||!this.validateConst(e,t))}validateArray(e,t){if(!Array.isArray(e)||t.maxItems!==void 0&&e.length>t.maxItems||t.minItems!==void 0&&e.length<t.minItems)return!1;if(t.uniqueItems===!0){let r=new Set(e);if(e.length!==r.size)return!1}if(Array.isArray(t.items)||t.items===void 0)return this.validateTuple(e,t.items);for(let r of e)if(!this.validate(r,t.items))return!1;return!0}validateTuple(e,t){let r=t?t.length:0;if(e.length!==r)return!1;if(t){for(let[o,a]of t.entries())if(!this.validate(e[o],a))return!1}return!0}validateObject(e,t){if(typeof e!="object"||e===null||Object.keys(t.properties).length<Object.keys(e).length)return!1;if(t.required){for(let r of t.required)if(!Object.hasOwn(e,r))return!1}for(let r in t.properties)if(Object.hasOwn(t.properties,r)&&Object.hasOwn(e,r)&&!this.validate(e[r],t.properties[r]))return!1;return!0}validateConst(e,t){return t.const===void 0?!0:e===t.const}validateEnum(e,t){return t.enum?t.enum.includes(e):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),$h=(()=>{class n{#e;#i;#n=new Map;constructor(e){this.#e=e,this.#i=new R_}get size(){return this.#e.size.pipe(this.#t(()=>this.#e.size))}get backingEngine(){return this.#e instanceof Vl?"indexedDB":this.#e instanceof va?"localStorage":this.#e instanceof _a?"memory":"unknown"}get backingStore(){return this.#e instanceof Vl?this.#e.backingStore:{database:"",store:"",version:0}}get fallbackBackingStore(){return this.#e instanceof va?{prefix:this.#e.prefix}:{prefix:""}}get(e,t){return this.#e.get(e).pipe(this.#t(()=>this.#e.get(e)),we(r=>r==null?b(void 0):t?this.#i.validate(r,t)?b(r):qe(()=>new ya):b(r)))}set(e,t,r){return t==null?this.delete(e):r&&!this.#i.validate(t,r)?qe(()=>new ya):this.#e.set(e,t).pipe(this.#t(()=>this.#e.set(e,t)),fe(()=>{this.#r(e,t)}))}delete(e){return this.#e.delete(e).pipe(this.#t(()=>this.#e.delete(e)),fe(()=>{this.#r(e,void 0)}))}clear(){return this.#e.clear().pipe(this.#t(()=>this.#e.clear()),fe(()=>{for(let e of this.#n.keys())this.#r(e,void 0)}))}keys(){return this.#e.keys().pipe(this.#t(()=>this.#e.keys()))}has(e){return this.#e.has(e).pipe(this.#t(()=>this.#e.has(e)))}watch(e,t){this.#n.has(e)||this.#n.set(e,new Vr(1));let r=this.#n.get(e);return(t?this.get(e,t):this.get(e)).subscribe({next:o=>{r.next(o)},error:o=>{r.error(o)}}),r.asObservable()}#r(e,t){let r=this.#n.get(e);r&&r.next(t)}#t(e){return Ct(t=>{if(t!=null&&typeof t=="object"&&"message"in t&&t.message===Hh){try{"getItem"in localStorage?this.#e=new va:this.#e=new _a}catch{this.#e=new _a}return e()}else return qe(()=>t)})}\u0275internalGetDatabase(){return this.#e}static \u0275fac=function(t){return new(t||n)(S(A_))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Rr=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new y;constructor(i=!1,e,t=!0,r){this._multiple=i,this._emitChanges=t,this.compareWith=r,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};function zl(n){return n==null||Hl(n)===0}function Hl(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var Zh=new g(""),Qh=new g(""),I_=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Ca=class{static min(i){return T_(i)}static max(i){return k_(i)}static required(i){return O_(i)}static requiredTrue(i){return F_(i)}static email(i){return P_(i)}static minLength(i){return N_(i)}static maxLength(i){return L_(i)}static pattern(i){return B_(i)}static nullValidator(i){return Jh()}static compose(i){return af(i)}static composeAsync(i){return sf(i)}};function T_(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<n?{min:{min:n,actual:i.value}}:null}}function k_(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>n?{max:{max:n,actual:i.value}}:null}}function O_(n){return zl(n.value)?{required:!0}:null}function F_(n){return n.value===!0?null:{required:!0}}function P_(n){return zl(n.value)||I_.test(n.value)?null:{email:!0}}function N_(n){return i=>{let e=i.value?.length??Hl(i.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function L_(n){return i=>{let e=i.value?.length??Hl(i.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function B_(n){if(!n)return Jh;let i,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=n.toString(),i=n),t=>{if(zl(t.value))return null;let r=t.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Jh(n){return null}function ef(n){return n!=null}function tf(n){return Ii(n)?ye(n):n}function nf(n){let i={};return n.forEach(e=>{i=e!=null?f(f({},i),e):i}),Object.keys(i).length===0?null:i}function rf(n,i){return i.map(e=>e(n))}function V_(n){return!n.validate}function of(n){return n.map(i=>V_(i)?i:e=>i.validate(e))}function af(n){if(!n)return null;let i=n.filter(ef);return i.length==0?null:function(e){return nf(rf(e,i))}}function $l(n){return n!=null?af(of(n)):null}function sf(n){if(!n)return null;let i=n.filter(ef);return i.length==0?null:function(e){let t=rf(e,i).map(tf);return Nt(t).pipe(w(nf))}}function Gl(n){return n!=null?sf(of(n)):null}function Gh(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function lf(n){return n._rawValidators}function cf(n){return n._rawAsyncValidators}function jl(n){return n?Array.isArray(n)?n:[n]:[]}function Da(n,i){return Array.isArray(n)?n.includes(i):n===i}function Wh(n,i){let e=jl(i);return jl(n).forEach(r=>{Da(e,r)||e.push(r)}),e}function qh(n,i){return jl(i).filter(e=>!Da(n,e))}var xa=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=$l(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=Gl(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},bi=class extends xa{name;get formDirective(){return null}get path(){return null}},Sa=class extends xa{_parent=null;name=null;valueAccessor=null};var Ir="VALID",wa="INVALID",vi="PENDING",Tr="DISABLED",Qt=class{},Ea=class extends Qt{value;source;constructor(i,e){super(),this.value=i,this.source=e}},Or=class extends Qt{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},Fr=class extends Qt{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},_i=class extends Qt{status;source;constructor(i,e){super(),this.status=i,this.source=e}},Ma=class extends Qt{source;constructor(i){super(),this.source=i}},Aa=class extends Qt{source;constructor(i){super(),this.source=i}};function df(n){return(Oa(n)?n.validators:n)||null}function j_(n){return Array.isArray(n)?$l(n):n||null}function uf(n,i){return(Oa(i)?i.asyncValidators:n)||null}function U_(n){return Array.isArray(n)?Gl(n):n||null}function Oa(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function z_(n,i,e){let t=n.controls;if(!(i?Object.keys(t):t).length)throw new I(1e3,"");if(!t[e])throw new I(1001,"")}function H_(n,i,e){n._forEachChild((t,r)=>{if(e[r]===void 0)throw new I(-1002,"")})}var Ra=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return xe(this.statusReactive)}set status(i){xe(()=>this.statusReactive.set(i))}_status=$e(()=>this.statusReactive());statusReactive=H(void 0);get valid(){return this.status===Ir}get invalid(){return this.status===wa}get pending(){return this.status===vi}get disabled(){return this.status===Tr}get enabled(){return this.status!==Tr}errors;get pristine(){return xe(this.pristineReactive)}set pristine(i){xe(()=>this.pristineReactive.set(i))}_pristine=$e(()=>this.pristineReactive());pristineReactive=H(!0);get dirty(){return!this.pristine}get touched(){return xe(this.touchedReactive)}set touched(i){xe(()=>this.touchedReactive.set(i))}_touched=$e(()=>this.touchedReactive());touchedReactive=H(!1);get untouched(){return!this.touched}_events=new y;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(Wh(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(Wh(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(qh(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(qh(i,this._rawAsyncValidators))}hasValidator(i){return Da(this._rawValidators,i)}hasAsyncValidator(i){return Da(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(q(f({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Fr(!0,t))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:t})}),i.onlySelf||this._parent?._updateTouched(i,t),e&&i.emitEvent!==!1&&this._events.next(new Fr(!1,t))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(q(f({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Or(!1,t))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,t),e&&i.emitEvent!==!1&&this._events.next(new Or(!0,t))}markAsPending(i={}){this.status=vi;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new _i(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(q(f({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Tr,this.errors=null,this._forEachChild(r=>{r.disable(q(f({},i),{onlySelf:!0}))}),this._updateValue();let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ea(this.value,t)),this._events.next(new _i(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(q(f({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Ir,this._forEachChild(t=>{t.enable(q(f({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(q(f({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ir||this.status===vi)&&this._runAsyncValidator(t,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ea(this.value,e)),this._events.next(new _i(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(q(f({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Tr:Ir}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=vi,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let t=tf(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,r)=>t&&t._find(r),this)}getError(i,e){let t=e?this.get(e):this;return t?.errors?t.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,t){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||t)&&this._events.next(new _i(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,t)}_initObservables(){this.valueChanges=new G,this.statusChanges=new G}_calculateStatus(){return this._allControlsDisabled()?Tr:this.errors?wa:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(vi)?vi:this._anyControlsHaveStatus(wa)?wa:Ir}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new Or(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new Fr(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Oa(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=j_(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=U_(this._rawAsyncValidators)}},Ia=class extends Ra{constructor(i,e,t){super(df(e),uf(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,t={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,t={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){H_(this,!0,i),Object.keys(i).forEach(t=>{z_(this,!0,t),this.controls[t].setValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(t=>{let r=this.controls[t];r&&r.patchValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((t,r)=>{t.reset(i?i[r]:null,q(f({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Aa(this))}getRawValue(){return this._reduceChildren({},(i,e,t)=>(i[t]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&i(t,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&i(t))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(i,e){let t=i;return this._forEachChild((r,o)=>{t=e(t,r,o)}),t}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var hf=new g("",{factory:()=>ff}),ff="always";function Ul(n,i,e=ff){Wl(n,i),i.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(n.disabled),G_(n,i),q_(n,i),W_(n,i),$_(n,i)}function Yh(n,i,e=!0){let t=()=>{};i?.valueAccessor?.registerOnChange(t),i?.valueAccessor?.registerOnTouched(t),ka(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Ta(n,i){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function $_(n,i){if(i.valueAccessor.setDisabledState){let e=t=>{i.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(e),i._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function Wl(n,i){let e=lf(n);i.validator!==null?n.setValidators(Gh(e,i.validator)):typeof e=="function"&&n.setValidators([e]);let t=cf(n);i.asyncValidator!==null?n.setAsyncValidators(Gh(t,i.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let r=()=>n.updateValueAndValidity();Ta(i._rawValidators,r),Ta(i._rawAsyncValidators,r)}function ka(n,i){let e=!1;if(n!==null){if(i.validator!==null){let r=lf(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.validator);o.length!==r.length&&(e=!0,n.setValidators(o))}}if(i.asyncValidator!==null){let r=cf(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.asyncValidator);o.length!==r.length&&(e=!0,n.setAsyncValidators(o))}}}let t=()=>{};return Ta(i._rawValidators,t),Ta(i._rawAsyncValidators,t),e}function G_(n,i){i.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&mf(n,i)})}function W_(n,i){i.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&mf(n,i),n.updateOn!=="submit"&&n.markAsTouched()})}function mf(n,i){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function q_(n,i){let e=(t,r)=>{i.valueAccessor.writeValue(t),r&&i.viewToModelUpdate(t)};n.registerOnChange(e),i._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function pf(n,i){n==null,Wl(n,i)}function Y_(n,i){return ka(n,i)}function gf(n,i){n._syncPendingControls(),i.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function K_(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}var X_={provide:bi,useExisting:Gr(()=>ql)},kr=Promise.resolve(),ql=(()=>{class n extends bi{callSetDisabledState;get submitted(){return xe(this.submittedReactive)}_submitted=$e(()=>this.submittedReactive());submittedReactive=H(!1);_directives=new Set;form;ngSubmit=new G;options;constructor(e,t,r){super(),this.callSetDisabledState=r,this.form=new Ia({},$l(e),Gl(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){kr.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),Ul(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){kr.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){kr.then(()=>{let t=this._findContainer(e.path),r=new Ia({});pf(r,e),t.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){kr.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){kr.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),gf(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Ma(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(Xe(Zh,10),Xe(Qh,10),Xe(hf,8))};static \u0275dir=N({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){t&1&&se("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[_e([X_]),ve]})}return n})();function Kh(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}function Xh(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Z_=class extends Ra{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,t){super(df(e),uf(t,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Oa(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Xh(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Aa(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){Kh(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){Kh(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){Xh(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var Q_=n=>n instanceof Z_;var J_=(()=>{class n extends bi{callSetDisabledState;get submitted(){return xe(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=$e(()=>this._submittedReactive());_submittedReactive=H(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(ka(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return Ul(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){Yh(e.control||null,e,!1),K_(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,gf(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Ma(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,r=this.form.get(e.path);t!==r&&(Yh(t||null,e),Q_(r)&&(Ul(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);pf(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&Y_(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Wl(this.form,this),this._oldForm&&ka(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||n)(Xe(Zh,10),Xe(Qh,10),Xe(hf,8))};static \u0275dir=N({type:n,features:[ve,Ye]})}return n})();var eb={provide:bi,useExisting:Gr(()=>Yl)},Yl=(()=>{class n extends J_{form=null;ngSubmit=new G;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(n)))(r||n)}})();static \u0275dir=N({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,r){t&1&&se("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[_e([eb]),ve]})}return n})();var Kl=class{_box;_destroyed=new y;_resizeSubject=new y;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new Ee(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(J(e=>e.some(t=>t.target===i)),Ai({bufferSize:1,refCount:!0}),Y(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},vf=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=l(O);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Kl(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var tb=["notch"],nb=["matFormFieldNotchedOutline",""],ib=["*"],_f=["iconPrefixContainer"],bf=["textPrefixContainer"],yf=["iconSuffixContainer"],wf=["textSuffixContainer"],rb=["textField"],ob=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],ab=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function sb(n,i){n&1&&le(0,"span",21)}function lb(n,i){if(n&1&&(p(0,"label",20),A(1,1),L(2,sb,1,0,"span",21),_()),n&2){let e=E(2);de("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),oe("for",e._control.disableAutomaticLabeling?null:e._control.id),h(2),B(!e.hideRequiredMarker&&e._control.required?2:-1)}}function cb(n,i){if(n&1&&L(0,lb,3,5,"label",20),n&2){let e=E();B(e._hasFloatingLabel()?0:-1)}}function db(n,i){n&1&&le(0,"div",7)}function ub(n,i){}function hb(n,i){if(n&1&&vt(0,ub,0,0,"ng-template",13),n&2){E(2);let e=xt(1);de("ngTemplateOutlet",e)}}function fb(n,i){if(n&1&&(p(0,"div",9),L(1,hb,1,1,null,13),_()),n&2){let e=E();de("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),h(),B(e._forceDisplayInfixLabel()?-1:1)}}function mb(n,i){n&1&&(p(0,"div",10,2),A(2,2),_())}function pb(n,i){n&1&&(p(0,"div",11,3),A(2,3),_())}function gb(n,i){}function vb(n,i){if(n&1&&vt(0,gb,0,0,"ng-template",13),n&2){E();let e=xt(1);de("ngTemplateOutlet",e)}}function _b(n,i){n&1&&(p(0,"div",14,4),A(2,4),_())}function bb(n,i){n&1&&(p(0,"div",15,5),A(2,5),_())}function yb(n,i){n&1&&le(0,"div",16)}function wb(n,i){n&1&&(p(0,"div",18),A(1,6),_())}function Cb(n,i){if(n&1&&(p(0,"mat-hint",22),C(1),_()),n&2){let e=E(2);de("id",e._hintLabelId),h(),ce(e.hintLabel)}}function Db(n,i){if(n&1&&(p(0,"div",19),L(1,Cb,2,2,"mat-hint",22),A(2,7),le(3,"div",23),A(4,8),_()),n&2){let e=E();h(),B(e.hintLabel?1:-1)}}var Pr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["mat-label"]]})}return n})(),xb=new g("MatError");var Xl=(()=>{class n{align="start";id=l(Le).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,r){t&2&&(Ut("id",r.id),oe("align",null),F("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),Sb=new g("MatPrefix");var Eb=new g("MatSuffix");var Af=new g("FloatingLabelParent"),Cf=(()=>{class n{_elementRef=l(P);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=l(vf);_ngZone=l(O);_parent=l(Af);_resizeSubscription=new ge;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Mb(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,r){t&2&&F("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function Mb(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Df="mdc-line-ripple--active",Fa="mdc-line-ripple--deactivating",xf=(()=>{class n{_elementRef=l(P);_cleanupTransitionEnd;constructor(){let e=l(O),t=l(Ae);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Fa),e.add(Df)}deactivate(){this._elementRef.nativeElement.classList.add(Fa)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(Fa);e.propertyName==="opacity"&&r&&t.remove(Df,Fa)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),Sf=(()=>{class n{_elementRef=l(P);_ngZone=l(O);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,r){if(t&1&&He(tb,5),t&2){let o;V(o=j())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,r){t&2&&F("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:nb,ngContentSelectors:ib,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,r){t&1&&(ee(),ct(0,"div",1),ze(1,"div",2,0),A(3),Ze(),ct(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),Zl=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n})}return n})();var Ql=new g("MatFormField"),Ab=new g("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Ef="fill",Rb="auto",Mf="fixed",Ib="translateY(-50%)",Pa=(()=>{class n{_elementRef=l(P);_changeDetectorRef=l(ue);_platform=l(ae);_idGenerator=l(Le);_ngZone=l(O);_defaults=l(Ab,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=ki("iconPrefixContainer");_textPrefixContainerSignal=ki("textPrefixContainer");_iconSuffixContainerSignal=ki("iconSuffixContainer");_textSuffixContainerSignal=ki("textSuffixContainer");_prefixSuffixContainers=$e(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Zc(Pr);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ft(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Rb}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Ef;this._appearanceSignal.set(t)}_appearanceSignal=H(Ef);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Mf}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Mf}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new y;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=be();constructor(){let e=this._defaults,t=l(Be);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Dt(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=$e(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Ce([void 0,void 0]),w(()=>[t.errorState,t.userAriaDescribedBy]),is(),J(([[o,a],[s,c]])=>o!==s||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(Y(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),st(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Jc({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=$e(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,r;if(t){let o=this._describedByIds||e;r=e.concat(t.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=t?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",m=`${a+s}px`,W=`calc(${u} * (${m} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,Z=`var(--mat-mdc-form-field-label-transform, ${Ib} translateX(${W}))`,Q=a+s+c+d;return[Z,Q]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,r,o){if(t&1&&(Gc(o,r._labelChild,Pr,5),Qe(o,Zl,5)(o,Sb,5)(o,Eb,5)(o,xb,5)(o,Xl,5)),t&2){cs();let a;V(a=j())&&(r._formFieldControl=a.first),V(a=j())&&(r._prefixChildren=a),V(a=j())&&(r._suffixChildren=a),V(a=j())&&(r._errorChildren=a),V(a=j())&&(r._hintChildren=a)}},viewQuery:function(t,r){if(t&1&&(Wc(r._iconPrefixContainerSignal,_f,5)(r._textPrefixContainerSignal,bf,5)(r._iconSuffixContainerSignal,yf,5)(r._textSuffixContainerSignal,wf,5),He(rb,5)(_f,5)(bf,5)(yf,5)(wf,5)(Cf,5)(Sf,5)(xf,5)),t&2){cs(4);let o;V(o=j())&&(r._textField=o.first),V(o=j())&&(r._iconPrefixContainer=o.first),V(o=j())&&(r._textPrefixContainer=o.first),V(o=j())&&(r._iconSuffixContainer=o.first),V(o=j())&&(r._textSuffixContainer=o.first),V(o=j())&&(r._floatingLabel=o.first),V(o=j())&&(r._notchedOutline=o.first),V(o=j())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,r){t&2&&F("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[_e([{provide:Ql,useExisting:n},{provide:Af,useExisting:n}])],ngContentSelectors:ab,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,r){if(t&1&&(ee(ob),vt(0,cb,1,1,"ng-template",null,0,Kc),p(2,"div",6,1),se("click",function(a){return r._control.onContainerClick(a)}),L(4,db,1,0,"div",7),p(5,"div",8),L(6,fb,2,2,"div",9),L(7,mb,3,0,"div",10),L(8,pb,3,0,"div",11),p(9,"div",12),L(10,vb,1,1,null,13),A(11),_(),L(12,_b,3,0,"div",14),L(13,bb,3,0,"div",15),_(),L(14,yb,1,0,"div",16),_(),p(15,"div",17),L(16,wb,2,0,"div",18)(17,Db,5,1,"div",19),_()),t&2){let o;h(2),F("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),h(2),B(!r._hasOutline()&&!r._control.disabled?4:-1),h(2),B(r._hasOutline()?6:-1),h(),B(r._hasIconPrefix?7:-1),h(),B(r._hasTextPrefix?8:-1),h(2),B(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),h(2),B(r._hasTextSuffix?12:-1),h(),B(r._hasIconSuffix?13:-1),h(),B(r._hasOutline()?-1:14),h(),F("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();h(),B((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[Cf,Sf,hs,xf,Xl],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return n})();var Rf=(()=>{class n{_animationsDisabled=be();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,r){t&2&&F("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return n})();var Tb=["text"],kb=[[["mat-icon"]],"*"],Ob=["mat-icon","*"];function Fb(n,i){if(n&1&&le(0,"mat-pseudo-checkbox",1),n&2){let e=E();de("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Pb(n,i){if(n&1&&le(0,"mat-pseudo-checkbox",3),n&2){let e=E();de("disabled",e.disabled)}}function Nb(n,i){if(n&1&&(p(0,"span",4),C(1),_()),n&2){let e=E();h(),K("(",e.group.label,")")}}var ec=new g("MAT_OPTION_PARENT_COMPONENT"),tc=new g("MatOptgroup");var Jl=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},Ci=(()=>{class n{_element=l(P);_changeDetectorRef=l(ue);_parent=l(ec,{optional:!0});group=l(tc,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=l(Le).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=H(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new G;_text;_stateChanges=new y;constructor(){let e=l(Je);e.load(li),e.load(Go),this._signalDisableRipple=!!this._parent&&on(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!et(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Jl(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-option"]],viewQuery:function(t,r){if(t&1&&He(Tb,7),t&2){let o;V(o=j())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,r){t&1&&se("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),t&2&&(Ut("id",r.id),oe("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),F("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",X]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Ob,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,r){t&1&&(ee(kb),L(0,Fb,1,2,"mat-pseudo-checkbox",1),A(1),p(2,"span",2,0),A(4,1),_(),L(5,Pb,1,1,"mat-pseudo-checkbox",3),L(6,Nb,2,1,"span",4),le(7,"div",5)),t&2&&(B(r.multiple?0:-1),h(5),B(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),h(),B(r.group&&r.group._inert?6:-1),h(),de("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[Rf,sa],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return n})();function If(n,i,e){if(e.length){let t=i.toArray(),r=e.toArray(),o=0;for(let a=0;a<n+1;a++)t[a].group&&t[a].group===r[o]&&o++;return o}return 0}function Tf(n,i,e,t){return n<e?n:n+i>e+t?Math.max(0,n-t+i):e}var kf=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Na=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,t,r,o){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=o}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=t?.isErrorState(r,e)??!1;o!==i&&(this.errorState=o,this._stateChanges.next())}};var La=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=T({imports:[Fu,Pa,te]})}return n})();var Of=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=T({imports:[te]})}return n})();var nc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=T({imports:[ci,Of,Ci,te]})}return n})();var Bb=["trigger"],Vb=["panel"],jb=[[["mat-select-trigger"]],"*"],Ub=["mat-select-trigger","*"];function zb(n,i){if(n&1&&(p(0,"span",4),C(1),_()),n&2){let e=E();h(),ce(e.placeholder)}}function Hb(n,i){n&1&&A(0)}function $b(n,i){if(n&1&&(p(0,"span",11),C(1),_()),n&2){let e=E(2);h(),ce(e.triggerValue)}}function Gb(n,i){if(n&1&&(p(0,"span",5),L(1,Hb,1,0)(2,$b,2,1,"span",11),_()),n&2){let e=E();h(),B(e.customTrigger?1:2)}}function Wb(n,i){if(n&1){let e=rt();p(0,"div",12,1),se("keydown",function(r){Te(e);let o=E();return ke(o._handleKeydown(r))}),A(2,1),_()}if(n&2){let e=E();dt(e.panelClass),F("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),oe("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var qb=new g("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(U);return()=>wn(n)}}),Yb=new g("MAT_SELECT_CONFIG"),Kb=new g("MatSelectTrigger"),ic=class{source;value;constructor(i,e){this.source=i,this.value=e}},Ff=(()=>{class n{_viewportRuler=l(wt);_changeDetectorRef=l(ue);_elementRef=l(P);_dir=l(Be,{optional:!0});_idGenerator=l(Le);_renderer=l(Ae);_parentFormField=l(Ql,{optional:!0});ngControl=l(Sa,{self:!0,optional:!0});_liveAnnouncer=l(ur);_defaultOptions=l(Yb,{optional:!0});_animationsDisabled=be();_popoverLocation;_initialized=new y;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,o=If(e,this.options,this.optionGroups),a=t._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=Tf(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new ic(this,e)}_scrollStrategyFactory=l(qb);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new y;_errorStateTracker;stateChanges=new y;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=H(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Ca.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Mn(()=>{let e=this.options;return e?e.changes.pipe(Ce(e),re(()=>st(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(re(()=>this.optionSelectionChanges))});openedChange=new G;_openedStream=this.openedChange.pipe(J(e=>e),w(()=>{}));_closedStream=this.openedChange.pipe(J(e=>!e),w(()=>{}));selectionChange=new G;valueChange=new G;constructor(){let e=l(kf),t=l(ql,{optional:!0}),r=l(Yl,{optional:!0}),o=l(new Ti("tabindex"),{optional:!0}),a=l(Cr,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Na(e,this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Rr(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Y(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Y(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Ce(null),Y(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(he(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&dl(this._trackedModal,"aria-owns",t),Uu(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;dl(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,r=t===40||t===38||t===37||t===39,o=t===13||t===32,a=this._keyManager;if(!a.isTyping()&&o&&!et(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let c=this.selected;c&&s!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,o=r===40||r===38,a=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&t.activeItem&&!et(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(s?c.select():c.deselect())})}else{let s=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==s&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!et(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof oi?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new gr(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=st(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Y(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),st(...this.options.map(t=>t._stateChanges)).pipe(Y(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Oe(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-select"]],contentQueries:function(t,r,o){if(t&1&&Qe(o,Kb,5)(o,Ci,5)(o,tc,5),t&2){let a;V(a=j())&&(r.customTrigger=a.first),V(a=j())&&(r.options=a),V(a=j())&&(r.optionGroups=a)}},viewQuery:function(t,r){if(t&1&&He(Bb,5)(Vb,5)(aa,5),t&2){let o;V(o=j())&&(r.trigger=o.first),V(o=j())&&(r.panel=o.first),V(o=j())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,r){t&1&&se("keydown",function(a){return r._handleKeydown(a)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),t&2&&(oe("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),F("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",X],disableRipple:[2,"disableRipple","disableRipple",X],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Oi(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",X],placeholder:"placeholder",required:[2,"required","required",X],multiple:[2,"multiple","multiple",X],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",X],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Oi],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",X]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[_e([{provide:Zl,useExisting:n},{provide:ec,useExisting:n}]),Ye],ngContentSelectors:Ub,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,r){if(t&1&&(ee(jb),p(0,"div",2,0),se("click",function(){return r.open()}),p(3,"div",3),L(4,zb,2,1,"span",4)(5,Gb,3,1,"span",5),_(),p(6,"div",6)(7,"div",7),Wr(),p(8,"svg",8),le(9,"path",9),_()()()(),vt(10,Wb,3,16,"ng-template",10),se("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(a){return r._handleOverlayKeydown(a)})),t&2){let o=xt(1);h(3),oe("id",r._valueId),h(),B(r.empty?4:5),h(6),de("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[oi,aa],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return n})();var Pf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=T({imports:[si,nc,te,kt,La,nc]})}return n})();var ja=["*"],Zb=["content"],Qb=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Jb=["mat-drawer","mat-drawer-content","*"];function ey(n,i){if(n&1){let e=rt();p(0,"div",1),se("click",function(){Te(e);let r=E();return ke(r._onBackdropClicked())}),_()}if(n&2){let e=E();F("mat-drawer-shown",e._isShowingBackdrop())}}function ty(n,i){n&1&&(p(0,"mat-drawer-content"),A(1,2),_())}var ny=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],iy=["mat-sidenav","mat-sidenav-content","*"];function ry(n,i){if(n&1){let e=rt();p(0,"div",1),se("click",function(){Te(e);let r=E();return ke(r._onBackdropClicked())}),_()}if(n&2){let e=E();F("mat-drawer-shown",e._isShowingBackdrop())}}function oy(n,i){n&1&&(p(0,"mat-sidenav-content"),A(1,2),_())}var ay=`.mat-drawer-container {
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
`;var sy=new g("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),ac=new g("MAT_DRAWER_CONTAINER"),Ba=(()=>{class n extends ni{_platform=l(ae);_changeDetectorRef=l(ue);_container=l(oc);constructor(){let e=l(P),t=l(bn),r=l(O);super(e,t,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,r){t&2&&(_t("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),F("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[_e([{provide:ni,useExisting:n}]),ve],ngContentSelectors:ja,decls:1,vars:0,template:function(t,r){t&1&&(ee(),A(0))},encapsulation:2,changeDetection:0})}return n})(),rc=(()=>{class n{_elementRef=l(P);_focusTrapFactory=l(ll);_focusMonitor=l(Xt);_platform=l(ae);_ngZone=l(O);_renderer=l(Ae);_interactivityChecker=l(Yo);_doc=l(R);_container=l(ac,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=ft(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=ft(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(ft(e))}_opened=H(!1);_openedVia=null;_animationStarted=new y;_animationEnd=new y;openedChange=new G(!0);_openedStream=this.openedChange.pipe(J(e=>e),w(()=>{}));openedStart=this._animationStarted.pipe(J(()=>this.opened),es(void 0));_closedStream=this.openedChange.pipe(J(e=>!e),w(()=>{}));closedStart=this._animationStarted.pipe(J(()=>!this.opened),es(void 0));_destroyed=new y;onPositionChanged=new G;_content;_modeChanged=new y;_injector=l(U);_changeDetectorRef=l(ue);constructor(){this.openedChange.pipe(Y(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!et(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(t)}_focusByCssSelector(e,t){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":De(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,t,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(he(1)).subscribe(a=>o(a?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,r=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,t)),r.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-drawer"]],viewQuery:function(t,r){if(t&1&&He(Zb,5),t&2){let o;V(o=j())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,r){t&2&&(oe("align",null)("tabIndex",r.mode!=="side"?"-1":null),_t("visibility",!r._container&&!r.opened?"hidden":null),F("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:ja,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,r){t&1&&(ee(),p(0,"div",1,0),A(2),_())},dependencies:[ni],encapsulation:2,changeDetection:0})}return n})(),oc=(()=>{class n{_dir=l(Be,{optional:!0});_element=l(P);_ngZone=l(O);_changeDetectorRef=l(ue);_animationDisabled=be();_transitionsEnabled=!1;_allDrawers;_drawers=new rn;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=ft(e)}_autosize=l(sy);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:ft(e)}_backdropOverride=null;backdropClick=new G;_start=null;_end=null;_left=null;_right=null;_destroyed=new y;_doCheckSubject=new y;_contentMargins={left:null,right:null};_contentMarginChanges=new y;get scrollable(){return this._userContent||this._content}_injector=l(U);constructor(){let e=l(ae),t=l(wt);this._dir?.change.pipe(Y(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(Y(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Ce(this._allDrawers),Y(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Ce(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Rn(10),Y(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,t-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();t+=r,e-=r}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(Y(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(Y(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(Y(this._drawers.changes)).subscribe(()=>{De({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(Y(st(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?t.add(r):t.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(t,r,o){if(t&1&&Qe(o,Ba,5)(o,rc,5),t&2){let a;V(a=j())&&(r._content=a.first),V(a=j())&&(r._allDrawers=a)}},viewQuery:function(t,r){if(t&1&&He(Ba,5),t&2){let o;V(o=j())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,r){t&2&&F("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[_e([{provide:ac,useExisting:n}])],ngContentSelectors:Jb,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,r){t&1&&(ee(Qb),L(0,ey,1,2,"div",0),A(1),A(2,1),L(3,ty,2,0,"mat-drawer-content")),t&2&&(B(r.hasBackdrop?0:-1),h(3),B(r._content?-1:3))},dependencies:[Ba],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return n})(),Va=(()=>{class n extends Ba{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(n)))(r||n)}})();static \u0275cmp=D({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[_e([{provide:ni,useExisting:n}]),ve],ngContentSelectors:ja,decls:1,vars:0,template:function(t,r){t&1&&(ee(),A(0))},encapsulation:2,changeDetection:0})}return n})(),sc=(()=>{class n extends rc{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=ft(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Tt(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Tt(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(n)))(r||n)}})();static \u0275cmp=D({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,r){t&2&&(oe("tabIndex",r.mode!=="side"?"-1":null)("align",null),_t("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),F("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[_e([{provide:rc,useExisting:n}]),ve],ngContentSelectors:ja,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,r){t&1&&(ee(),p(0,"div",1,0),A(2),_())},dependencies:[ni],encapsulation:2,changeDetection:0})}return n})(),Nf=(()=>{class n extends oc{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ke(n)))(r||n)}})();static \u0275cmp=D({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(t,r,o){if(t&1&&Qe(o,Va,5)(o,sc,5),t&2){let a;V(a=j())&&(r._content=a.first),V(a=j())&&(r._allDrawers=a)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,r){t&2&&F("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[_e([{provide:ac,useExisting:n},{provide:oc,useExisting:n}]),ve],ngContentSelectors:iy,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,r){t&1&&(ee(ny),L(0,ry,1,2,"div",0),A(1),A(2,1),L(3,oy,2,0,"mat-sidenav-content")),t&2&&(B(r.hasBackdrop?0:-1),h(3),B(r._content?-1:3))},dependencies:[Va],styles:[ay],encapsulation:2,changeDetection:0})}return n})(),Lf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=T({imports:[kt,te,kt]})}return n})();var cy=["*"];var dy=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],uy=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],hy=new g("MAT_CARD_CONFIG"),Bf=(()=>{class n{appearance;constructor(){let e=l(hy,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&F("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:cy,decls:1,vars:0,template:function(t,r){t&1&&(ee(),A(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return n})();var Vf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})();var jf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:uy,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(t,r){t&1&&(ee(dy),A(0),ze(1,"div",0),A(2,1),Ze(),A(3,2))},encapsulation:2,changeDetection:0})}return n})();var Uf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=T({imports:[te]})}return n})();var Ua=class{tracker;columnIndex=0;rowIndex=0;get rowCount(){return this.rowIndex+1}get rowspan(){let i=Math.max(...this.tracker);return i>1?this.rowCount+i-1:this.rowCount}positions;update(i,e){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(i),this.tracker.fill(0,0,this.tracker.length),this.positions=e.map(t=>this._trackTile(t))}_trackTile(i){let e=this._findMatchingGap(i.colspan);return this._markTilePosition(e,i),this.columnIndex=e+i.colspan,new lc(this.rowIndex,e)}_findMatchingGap(i){i>this.tracker.length;let e=-1,t=-1;do{if(this.columnIndex+i>this.tracker.length){this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),t=this._findGapEndIndex(e);continue}if(e=this.tracker.indexOf(0,this.columnIndex),e==-1){this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),t=this._findGapEndIndex(e);continue}t=this._findGapEndIndex(e),this.columnIndex=e+1}while(t-e<i||t==0);return Math.max(e,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let i=0;i<this.tracker.length;i++)this.tracker[i]=Math.max(0,this.tracker[i]-1)}_findGapEndIndex(i){for(let e=i+1;e<this.tracker.length;e++)if(this.tracker[e]!=0)return e;return this.tracker.length}_markTilePosition(i,e){for(let t=0;t<e.colspan;t++)this.tracker[i+t]=e.rowspan}},lc=class{row;col;constructor(i,e){this.row=i,this.col=e}};var zf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","mat-line",""],["","matLine",""]],hostAttrs:[1,"mat-line"]})}return n})();function Hf(n,i,e="mat"){n.changes.pipe(Ce(n)).subscribe(({length:t})=>{Nr(i,`${e}-2-line`,!1),Nr(i,`${e}-3-line`,!1),Nr(i,`${e}-multi-line`,!1),t===2||t===3?Nr(i,`${e}-${t}-line`,!0):t>3&&Nr(i,`${e}-multi-line`,!0)})}function Nr(n,i,e){n.nativeElement.classList.toggle(i,e)}var cc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=T({imports:[te]})}return n})();var $f=["*"],my=[[["","mat-grid-avatar",""],["","matGridAvatar",""]],[["","mat-line",""],["","matLine",""]],"*"],py=["[mat-grid-avatar], [matGridAvatar]","[mat-line], [matLine]","*"],gy=`.mat-grid-list {
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
`,Gf=new g("MAT_GRID_LIST"),fc=(()=>{class n{_element=l(P);_gridList=l(Gf,{optional:!0});_rowspan=1;_colspan=1;constructor(){}get rowspan(){return this._rowspan}set rowspan(e){this._rowspan=Math.round(Tt(e))}get colspan(){return this._colspan}set colspan(e){this._colspan=Math.round(Tt(e))}_setStyle(e,t){this._element.nativeElement.style[e]=t}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(t,r){t&2&&oe("rowspan",r.rowspan)("colspan",r.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:$f,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(t,r){t&1&&(ee(),ze(0,"div",0),A(1),Ze())},styles:[`.mat-grid-list {
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
`],encapsulation:2,changeDetection:0})}return n})(),Wf=(()=>{class n{_element=l(P);_lines;constructor(){}ngAfterContentInit(){Hf(this._lines,this._element)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-grid-tile-header"],["mat-grid-tile-footer"]],contentQueries:function(t,r,o){if(t&1&&Qe(o,zf,5),t&2){let a;V(a=j())&&(r._lines=a)}},ngContentSelectors:py,decls:4,vars:0,consts:[[1,"mat-grid-list-text"]],template:function(t,r){t&1&&(ee(my),A(0),ze(1,"div",0),A(2,1),Ze(),A(3,2))},encapsulation:2,changeDetection:0})}return n})();var qf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["mat-grid-tile-header"]],hostAttrs:[1,"mat-grid-tile-header"]})}return n})();var vy=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,Lr=class{_gutterSize;_rows=0;_rowspan=0;_cols;_direction;init(i,e,t,r){this._gutterSize=Yf(i),this._rows=e.rowCount,this._rowspan=e.rowspan,this._cols=t,this._direction=r}getBaseTileSize(i,e){return`(${i}% - (${this._gutterSize} * ${e}))`}getTilePosition(i,e){return e===0?"0":xn(`(${i} + ${this._gutterSize}) * ${e}`)}getTileSize(i,e){return`(${i} * ${e}) + (${e-1} * ${this._gutterSize})`}setStyle(i,e,t){let r=100/this._cols,o=(this._cols-1)/this._cols;this.setColStyles(i,t,r,o),this.setRowStyles(i,e,r,o)}setColStyles(i,e,t,r){let o=this.getBaseTileSize(t,r),a=this._direction==="rtl"?"right":"left";i._setStyle(a,this.getTilePosition(o,e)),i._setStyle("width",xn(this.getTileSize(o,i.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(i){return`${this._rowspan} * ${this.getTileSize(i,1)}`}getComputedHeight(){return null}},dc=class extends Lr{fixedRowHeight;constructor(i){super(),this.fixedRowHeight=i}init(i,e,t,r){super.init(i,e,t,r),this.fixedRowHeight=Yf(this.fixedRowHeight),vy.test(this.fixedRowHeight)}setRowStyles(i,e){i._setStyle("top",this.getTilePosition(this.fixedRowHeight,e)),i._setStyle("height",xn(this.getTileSize(this.fixedRowHeight,i.rowspan)))}getComputedHeight(){return["height",xn(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(i){i._setListStyle(["height",null]),i._tiles&&i._tiles.forEach(e=>{e._setStyle("top",null),e._setStyle("height",null)})}},uc=class extends Lr{rowHeightRatio;baseTileHeight;constructor(i){super(),this._parseRatio(i)}setRowStyles(i,e,t,r){let o=t/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(o,r),i._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,e)),i._setStyle("paddingTop",xn(this.getTileSize(this.baseTileHeight,i.rowspan)))}getComputedHeight(){return["paddingBottom",xn(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(i){i._setListStyle(["paddingBottom",null]),i._tiles.forEach(e=>{e._setStyle("marginTop",null),e._setStyle("paddingTop",null)})}_parseRatio(i){let e=i.split(":");e.length,this.rowHeightRatio=parseFloat(e[0])/parseFloat(e[1])}},hc=class extends Lr{setRowStyles(i,e){let t=100/this._rowspan,r=(this._rows-1)/this._rows,o=this.getBaseTileSize(t,r);i._setStyle("top",this.getTilePosition(o,e)),i._setStyle("height",xn(this.getTileSize(o,i.rowspan)))}reset(i){i._tiles&&i._tiles.forEach(e=>{e._setStyle("top",null),e._setStyle("height",null)})}};function xn(n){return`calc(${n})`}function Yf(n){return n.match(/([A-Za-z%]+)$/)?n:`${n}px`}var _y="fit",Kf=(()=>{class n{_element=l(P);_dir=l(Be,{optional:!0});_cols;_tileCoordinator;_rowHeight;_gutter="1px";_tileStyler;_tiles;constructor(){}get cols(){return this._cols}set cols(e){this._cols=Math.max(1,Math.round(Tt(e)))}get gutterSize(){return this._gutter}set gutterSize(e){this._gutter=`${e??""}`}get rowHeight(){return this._rowHeight}set rowHeight(e){let t=`${e??""}`;t!==this._rowHeight&&(this._rowHeight=t,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){this.cols}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(e){this._tileStyler&&this._tileStyler.reset(this),e===_y?this._tileStyler=new hc:e&&e.indexOf(":")>-1?this._tileStyler=new uc(e):this._tileStyler=new dc(e)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new Ua);let e=this._tileCoordinator,t=this._tiles.filter(o=>!o._gridList||o._gridList===this),r=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,t),this._tileStyler.init(this.gutterSize,e,this.cols,r),t.forEach((o,a)=>{let s=e.positions[a];this._tileStyler.setStyle(o,s.row,s.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(e){e&&(this._element.nativeElement.style[e[0]]=e[1])}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-grid-list"]],contentQueries:function(t,r,o){if(t&1&&Qe(o,fc,5),t&2){let a;V(a=j())&&(r._tiles=a)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(t,r){t&2&&oe("cols",r.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[_e([{provide:Gf,useExisting:n}])],ngContentSelectors:$f,decls:2,vars:0,template:function(t,r){t&1&&(ee(),ze(0,"div"),A(1),Ze())},styles:[gy],encapsulation:2,changeDetection:0})}return n})(),Xf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=T({imports:[cc,te,cc]})}return n})();var Zf=(()=>{class n{get vertical(){return this._vertical}set vertical(e){this._vertical=ft(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=ft(e)}_inset=!1;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,r){t&2&&(oe("aria-orientation",r.vertical?"vertical":"horizontal"),F("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return n})(),Qf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=T({imports:[te]})}return n})();var wy=["*",[["mat-toolbar-row"]]],Cy=["*","mat-toolbar-row"],Dy=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),za=(()=>{class n{_elementRef=l(P);_platform=l(ae);_document=l(R);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,r,o){if(t&1&&Qe(o,Dy,5),t&2){let a;V(a=j())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,r){t&2&&(dt(r.color?"mat-"+r.color:""),F("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Cy,decls:2,vars:0,template:function(t,r){t&1&&(ee(wy),A(0),A(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return n})();var Ha=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=T({imports:[te]})}return n})();function em(n){return Error(`Unable to find icon with the name "${n}"`)}function xy(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function tm(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function nm(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var Pt=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},rm=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new Pt(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,o){let a=this._sanitizer.sanitize(je.HTML,r);if(!a)throw nm(r);let s=pn(a);return this._addSvgIconConfig(e,t,new Pt("",s,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new Pt(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize(je.HTML,t);if(!o)throw nm(t);let a=pn(o);return this._addSvgIconSetConfig(e,new Pt("",a,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(je.RESOURCE_URL,e);if(!t)throw tm(e);let r=this._cachedIconsByUrl.get(t);return r?b($a(r)):this._loadSvgIconFromConfig(new Pt(e,null)).pipe(fe(o=>this._cachedIconsByUrl.set(t,o)),w(o=>$a(o)))}getNamedSvgIcon(e,t=""){let r=im(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):qe(em(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?b($a(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(w(t=>$a(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return b(r);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Ct(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(je.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),b(null)})));return Nt(o).pipe(w(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw em(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(fe(t=>e.svgText=t),w(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?b(null):this._fetchIcon(e).pipe(fe(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(pn("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(pn("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&t.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw xy();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(je.RESOURCE_URL,t);if(!a)throw tm(t);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(w(d=>pn(d)),en(()=>this._inProgressUrlFetches.delete(a)),Cc());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(im(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return Sy(o)?new Pt(o.url,null,o.options):new Pt(o,null)}}static \u0275fac=function(t){return new(t||n)(S(Vn,8),S(Hi),S(R,8),S(nn))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function $a(n){return n.cloneNode(!0)}function im(n,i){return n+":"+i}function Sy(n){return!!(n.url&&n.options)}var Ey=["*"],My=new g("MAT_ICON_DEFAULT_OPTIONS"),Ay=new g("mat-icon-location",{providedIn:"root",factory:()=>{let n=l(R),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),om=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Ry=om.map(n=>`[${n}]`).join(", "),Iy=/^url\(['"]?#(.*?)['"]?\)$/,Ga=(()=>{class n{_elementRef=l(P);_iconRegistry=l(rm);_location=l(Ay);_errorHandler=l(nn);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ge.EMPTY;constructor(){let e=l(new Ti("aria-hidden"),{optional:!0}),t=l(My,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Ry),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)om.forEach(a=>{let s=t[o],c=s.getAttribute(a),d=c?c.match(Iy):null;if(d){let u=r.get(s);u||(u=[],r.set(s,u)),u.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(he(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(oe("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),dt(r.color?"mat-"+r.color:""),F("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",X],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Ey,decls:1,vars:0,template:function(t,r){t&1&&(ee(),A(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return n})(),Wa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=T({imports:[te]})}return n})();var Ty=["mat-menu-item",""],ky=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Oy=["mat-icon, [matMenuItemIcon]","*"];function Fy(n,i){n&1&&(Wr(),p(0,"svg",2),le(1,"polygon",3),_())}var Py=["*"];function Ny(n,i){if(n&1){let e=rt();ze(0,"div",0),$c("click",function(){Te(e);let r=E();return ke(r.closed.emit("click"))})("animationstart",function(r){Te(e);let o=E();return ke(o._onAnimationStart(r.animationName))})("animationend",function(r){Te(e);let o=E();return ke(o._onAnimationDone(r.animationName))})("animationcancel",function(r){Te(e);let o=E();return ke(o._onAnimationDone(r.animationName))}),ze(1,"div",1),A(2),Ze()()}if(n&2){let e=E();dt(e._classList),F("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Ut("id",e.panelId),oe("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var pc=new g("MAT_MENU_PANEL"),Br=(()=>{class n{_elementRef=l(P);_document=l(R);_focusMonitor=l(Xt);_parentMenu=l(pc,{optional:!0});_changeDetectorRef=l(ue);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new y;_focused=new y;_highlighted=!1;_triggersSubmenu=!1;constructor(){l(Je).load(li),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<t.length;r++)t[r].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,r){t&1&&se("click",function(a){return r._checkDisabled(a)})("mouseenter",function(){return r._handleMouseEnter()}),t&2&&(oe("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),F("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",X],disableRipple:[2,"disableRipple","disableRipple",X]},exportAs:["matMenuItem"],attrs:Ty,ngContentSelectors:Oy,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,r){t&1&&(ee(ky),A(0),p(1,"span",0),A(2,1),_(),le(3,"div",1),L(4,Fy,2,0,":svg:svg",2)),t&2&&(h(3),de("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),h(),B(r._triggersSubmenu?4:-1))},dependencies:[sa],encapsulation:2,changeDetection:0})}return n})();var Ly=new g("MatMenuContent");var By=new g("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),mc="_mat-menu-enter",qa="_mat-menu-exit",xi=(()=>{class n{_elementRef=l(P);_changeDetectorRef=l(ue);_injector=l(U);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=be();_allItems;_directDescendantItems=new rn;_classList={};_panelAnimationState="void";_animationDone=new y;_isAnimating=H(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,r=f({},this._classList);t&&t.length&&t.split(" ").forEach(o=>{r[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{r[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=r}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new G;close=this.closed;panelId=l(Le).getId("mat-menu-panel-");constructor(){let e=l(By);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new vr(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Ce(this._directDescendantItems),re(e=>st(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let r=e.toArray(),o=Math.max(0,Math.min(r.length-1,t.activeItemIndex||0));r[o]&&!r[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Ce(this._directDescendantItems),re(t=>st(...t.map(r=>r._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,r=this._keyManager;switch(t){case 27:et(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=De(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(e).setFirstItemActive(),!r.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=q(f({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===qa;(t||e===mc)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===mc||e===qa)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(qa),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?mc:qa)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Ce(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=D({type:n,selectors:[["mat-menu"]],contentQueries:function(t,r,o){if(t&1&&Qe(o,Ly,5)(o,Br,5)(o,Br,4),t&2){let a;V(a=j())&&(r.lazyContent=a.first),V(a=j())&&(r._allItems=a),V(a=j())&&(r.items=a)}},viewQuery:function(t,r){if(t&1&&He(lt,5),t&2){let o;V(o=j())&&(r.templateRef=o.first)}},hostVars:3,hostBindings:function(t,r){t&2&&oe("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",X],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:X(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[_e([{provide:pc,useExisting:n}])],ngContentSelectors:Py,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,r){t&1&&(ee(),jc(0,Ny,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2,changeDetection:0})}return n})(),Vy=new g("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(U);return()=>wn(n)}});var Di=new WeakMap,jy=(()=>{class n{_canHaveBackdrop;_element=l(P);_viewContainerRef=l(nt);_menuItemInstance=l(Br,{optional:!0,self:!0});_dir=l(Be,{optional:!0});_focusMonitor=l(Xt);_ngZone=l(O);_injector=l(U);_scrollStrategy=l(Vy);_changeDetectorRef=l(ue);_animationsDisabled=be();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=ge.EMPTY;_menuCloseSubscription=ge.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=l(pc,{optional:!0});this._parentMaterialMenu=t instanceof xi?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Di.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let r=Di.get(t);Di.set(t,this),r&&r!==this&&r._closeMenu();let o=this._createOverlay(t),a=o.getConfig(),s=a.positionStrategy;this._setPosition(t,s),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof xi&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(Y(t.close)).subscribe(()=>{s.withLockedPosition(!1).reapplyLastPosition(),s.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,r=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof xi&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(he(1)).subscribe(()=>{t.detach(),Di.has(r)||r.lazyContent?.detach()}),r._setIsOpen(!1)):(t.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&Di.delete(r),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Cn(this._injector,t),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof xi&&this._menu._handleKeydown(r)})}return this._overlayRef}_getOverlayConfig(e){return new Ft({positionStrategy:wr(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let o=r.connectionPair.overlayX==="start"?"after":"before",a=r.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,a)})})}_setPosition(e,t){let[r,o]=e.xPosition==="before"?["end","start"]:["start","end"],[a,s]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[c,d]=[a,s],[u,m]=[r,o],x=0;if(this._triggersSubmenu()){if(m=r=e.xPosition==="before"?"start":"end",o=u=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let W=this._parentMaterialMenu.items.first;this._parentInnerPadding=W?W._getHostElement().offsetTop:0}x=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(c=a==="top"?"bottom":"top",d=s==="top"?"bottom":"top");t.withPositions([{originX:r,originY:c,overlayX:u,overlayY:a,offsetY:x},{originX:o,originY:c,overlayX:m,overlayY:a,offsetY:x},{originX:r,originY:d,overlayX:u,overlayY:s,offsetY:-x},{originX:o,originY:d,overlayX:m,overlayY:s,offsetY:-x}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:b(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(J(a=>this._menuOpen&&a!==this._menuItemInstance)):b();return st(e,r,o,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Ot(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return Di.get(e)===this}_triggerIsAriaDisabled(){return X(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Zr()};static \u0275dir=N({type:n})}return n})(),sm=(()=>{class n extends jy{_cleanupTouchstart;_hoverSubscription=ge.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new G;onMenuOpen=this.menuOpened;menuClosed=new G;onMenuClose=this.menuClosed;constructor(){super(!0);let e=l(Ae);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{mn(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){fn(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,r){t&1&&se("click",function(a){return r._handleClick(a)})("mousedown",function(a){return r._handleMousedown(a)})("keydown",function(a){return r._handleKeydown(a)}),t&2&&oe("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu==null?null:r.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[ve]})}return n})();var lm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=T({imports:[ci,si,te,kt]})}return n})();function zy(n,i){if(n&1){let e=rt();p(0,"button",3),se("click",function(){let r=Te(e).$implicit,o=E();return ke(o.changeLanguage(r))}),p(1,"mat-icon"),C(2," language "),_(),p(3,"span"),C(4),zt(5,"transloco"),_()()}if(n&2){let e=i.$implicit,t=E();F("active",t.activeLang()===e),h(),_t("color",t.activeLang()===e?"rgb(255 143 0)":null),h(2),_t("color",t.activeLang()===e?"rgb(255 143 0)":null),h(),K(" ",Ht(5,7,e+"-language-label")," ")}}var Ya=class n{translocoService=l(pi);activeLang=H("");availableLangs=H([]);constructor(){let i=Uh(),e=this.translocoService.getAvailableLangs();if(this.availableLangs.set(e),i&&this.translocoService.isLang(i))this.activeLang.set(i),this.translocoService.getActiveLang()!==i&&De(()=>{this.translocoService.setActiveLang(i)});else{let t=this.translocoService.getDefaultLang();this.activeLang.set(t)}}changeLanguage(i){typeof i=="string"&&(this.translocoService.setActiveLang(i),this.activeLang.set(this.translocoService.getActiveLang()))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-language-selector"]],decls:10,vars:4,consts:[["menu","matMenu"],["mat-icon-button","","aria-label","Language Selection",1,"example-icon","favorite-icon",3,"matMenuTriggerFor"],["mat-menu-item","",3,"active"],["mat-menu-item","",3,"click"]],template:function(e,t){if(e&1&&(p(0,"button",1)(1,"mat-icon"),C(2,"translate"),_()(),p(3,"span"),C(4),zt(5,"transloco"),_(),p(6,"mat-menu",null,0),Vt(8,zy,6,9,"button",2,Jr),_()),e&2){let r=xt(7);de("matMenuTriggerFor",r),h(4),ce(Ht(5,2,t.activeLang()+"-language-label")),h(4),jt(t.availableLangs())}},dependencies:[io,Dn,Sr,Wa,Ga,lm,xi,Br,sm,Vh,gi],encapsulation:2})};function Hy(n,i){n&1&&(p(0,"span"),C(1),zt(2,"transloco"),_()),n&2&&(h(),ce(Ht(2,1,"app-title")))}function $y(n,i){n&1&&(p(0,"span",4),C(1),zt(2,"transloco"),_()),n&2&&(h(),ce(Ht(2,1,"app-title-short")))}var Ka=class n{sidebarHandle=eo(void 0);responsive=l(vn);isXSmall=Mt(this.responsive.observe(ei.XSmall).pipe(w(i=>i.matches)),{initialValue:!1});static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-page-header"]],inputs:{sidebarHandle:[1,"sidebarHandle"]},decls:10,vars:4,consts:[[1,"page-header"],[1,"main-toolbar","toolbar"],["type","button","mat-icon-button","",3,"click","hidden"],[1,"app-name","text-xl"],[1,"text-xl"],[1,"spacer"]],template:function(e,t){e&1&&(p(0,"div",0)(1,"mat-toolbar",1)(2,"button",2),se("click",function(){let o;return(o=t.sidebarHandle())==null?null:o.toggle()}),p(3,"mat-icon"),C(4,"menu"),_()(),p(5,"span",3),L(6,Hy,3,3,"span")(7,$y,3,3,"span",4),_(),le(8,"span",5)(9,"app-language-selector"),_()()),e&2&&(h(),F("is-mobile",t.isXSmall()),h(),de("hidden",!t.isXSmall()),h(4),B(t.isXSmall()?7:6))},dependencies:[Ha,za,Dn,Sr,Wa,Ga,Ya,gi],styles:[".is-mobile[_ngcontent-%COMP%]{position:fixed;z-index:2}.app-name[_ngcontent-%COMP%]{margin:0 0 0 8px}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-toolbar[_ngcontent-%COMP%]{color:var(--mat-sys-primary);background:var(--bg-color)}"]})};var Xa=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-page-footer"]],decls:7,vars:3,consts:[[1,"page-footer","text-xs","flex","items-center","flex-row","flex-wrap"],["color","primary",1,"page-footer"],[1,"flex","flex-1","justify-end","text-xl"],["href","https://boardgamegeek.com/user/Vortilion","target","_blank",1,"text-blue-700"]],template:function(e,t){e&1&&(p(0,"div",0)(1,"mat-toolbar",1)(2,"div",2),C(3),zt(4,"transloco"),p(5,"a",3),C(6,"Vortilion"),_()()()()),e&2&&(h(3),K(" ",Ht(4,1,"creator-prefix"),"\xA0"))},dependencies:[Ha,za,gi],styles:[".page-footer[_ngcontent-%COMP%]{color:var(--mat-sys-primary);background:var(--bg-color)}"]})};var Gy=n=>({"w-full":n}),Wy=(n,i)=>i.value,gc=(n,i)=>i.title;function qy(n,i){if(n&1&&(p(0,"mat-option",10),C(1),p(2,"span"),C(3),_()()),n&2){let e=i.$implicit,t=E().$implicit;de("value",e.value),h(),K(" ",e.label," "),h(2),ce(t("players-label"))}}function Yy(n,i){if(n&1&&(p(0,"li",20)(1,"span"),C(2),_()()),n&2){let e=i.$implicit;h(2),ce(e.title)}}function Ky(n,i){if(n&1&&(p(0,"mat-grid-tile")(1,"mat-grid-tile-header")(2,"h3")(3,"span"),C(4),_(),C(5,": "),_()(),p(6,"ul",19),Vt(7,Yy,3,1,"li",20,gc),_()()),n&2){let e=E().$implicit,t=E();h(4),ce(e("neutral-buildings-label")),h(3),jt(t.randomNeutralBuildings())}}function Xy(n,i){if(n&1&&(p(0,"div"),le(1,"img",21),_()),n&2){let e=i.$implicit;h(),de("src",e.sides[0].image,Lc)}}function Zy(n,i){if(n&1&&(p(0,"mat-grid-tile")(1,"mat-grid-tile-header")(2,"h3")(3,"span"),C(4),_(),C(5,": "),_()(),p(6,"div",19),Vt(7,Xy,2,1,"div",null,gc),_()()),n&2){let e=E().$implicit,t=E();h(4),ce(e("harbor-masters-label")),h(3),jt(t.randomHarborMasters())}}function Qy(n,i){if(n&1&&(p(0,"li",20)(1,"span"),C(2),_()()),n&2){let e=i.$implicit;h(2),ce(e)}}function Jy(n,i){if(n&1&&(p(0,"mat-grid-tile")(1,"mat-grid-tile-header")(2,"h3")(3,"span"),C(4),_(),C(5,": "),_()(),p(6,"ul",19),Vt(7,Qy,3,1,"li",20,Jr),_()()),n&2){let e=E().$implicit,t=E();h(4),ce(e("deckbuilding-modules-label")),h(3),jt(t.randomDeckbuildingModules())}}function e0(n,i){if(n&1&&(p(0,"span",17)(1,"span",22),C(2),_()()),n&2){let e=i.$implicit;h(2),qc("",e.title,"",e.sides[0].title," ")}}function t0(n,i){if(n&1&&(p(0,"li"),C(1),_()),n&2){let e=E().$implicit;h(),K(" ",e("further-steps-step21")," ")}}function n0(n,i){if(n&1&&(p(0,"li"),C(1),_()),n&2){let e=E().$implicit;h(),K(" ",e("further-steps-step22")," ")}}function i0(n,i){if(n&1&&(p(0,"li"),C(1),_()),n&2){let e=E().$implicit;h(),K(" ",e("further-steps-step23")," ")}}function r0(n,i){if(n&1&&(p(0,"li"),C(1),_()),n&2){let e=E().$implicit;h(),K(" ",e("further-steps-step51")," ")}}function o0(n,i){if(n&1&&(p(0,"li"),C(1),_()),n&2){let e=E().$implicit;h(),K(" ",e("further-steps-step52")," ")}}function a0(n,i){if(n&1&&(p(0,"li"),C(1),_()),n&2){let e=E().$implicit;h(),K(" ",e("further-steps-step53")," ")}}function s0(n,i){if(n&1&&(p(0,"li"),C(1),_()),n&2){let e=E().$implicit;h(),K(" ",e("further-steps-step81")," ")}}function l0(n,i){if(n&1&&(p(0,"li"),C(1),_()),n&2){let e=E().$implicit;h(),K(" ",e("further-steps-step82")," ")}}function c0(n,i){if(n&1&&(p(0,"li"),C(1),_()),n&2){let e=E().$implicit;h(),K(" ",e("further-steps-step83")," ")}}function d0(n,i){if(n&1&&(p(0,"li"),C(1),_()),n&2){let e=E().$implicit;h(),K(" ",e("further-steps-step113")," ")}}function u0(n,i){if(n&1&&(p(0,"li"),C(1),_()),n&2){let e=E().$implicit;h(),K(" ",e("further-steps-step114")," ")}}function h0(n,i){if(n&1){let e=rt();zc(0),p(1,"div",2),le(2,"app-page-header",3),p(3,"mat-sidenav-container",4)(4,"mat-sidenav",5,0)(6,"div",6)(7,"h2"),C(8),_(),le(9,"mat-divider",7),p(10,"h3"),C(11),_(),p(12,"mat-form-field",8)(13,"mat-label"),C(14),_(),p(15,"mat-select",9),se("selectionChange",function(r){Te(e);let o=E();return ke(o.onPlayerCountChange(r))}),Vt(16,qy,4,3,"mat-option",10,Wy),_()()()(),p(18,"mat-sidenav-content")(19,"div",11)(20,"div",12)(21,"div",13)(22,"button",14),se("click",function(){Te(e);let r=E();return ke(r.randomizeSetup())}),p(23,"span"),C(24),_()()(),p(25,"mat-grid-list",15),L(26,Ky,9,1,"mat-grid-tile"),L(27,Zy,9,1,"mat-grid-tile"),L(28,Jy,9,1,"mat-grid-tile"),p(29,"mat-grid-tile")(30,"mat-grid-tile-header")(31,"h3")(32,"span"),C(33),_(),C(34,": "),_()(),p(35,"div",16),Vt(36,e0,3,2,"span",17,gc),_()()(),p(38,"mat-card")(39,"mat-card-header")(40,"h3")(41,"span"),C(42),_()()(),p(43,"mat-card-content")(44,"ol")(45,"li"),C(46),_(),p(47,"li"),C(48),p(49,"ul",18),L(50,t0,2,1,"li"),L(51,n0,2,1,"li"),L(52,i0,2,1,"li"),_()(),p(53,"li"),C(54),_(),p(55,"li"),C(56),_(),p(57,"li"),C(58),p(59,"ul",18),L(60,r0,2,1,"li"),L(61,o0,2,1,"li"),L(62,a0,2,1,"li"),_()(),p(63,"li"),C(64),_(),p(65,"li"),C(66),_(),p(67,"li"),C(68),p(69,"ul",18),L(70,s0,2,1,"li"),L(71,l0,2,1,"li"),L(72,c0,2,1,"li"),_()(),p(73,"li"),C(74),p(75,"ul",18)(76,"li"),C(77),_(),p(78,"li"),C(79),_(),p(80,"li"),C(81),_(),p(82,"li"),C(83),_()()(),p(84,"li"),C(85),_(),p(86,"li"),C(87),p(88,"ul",18)(89,"li"),C(90),_(),p(91,"li"),C(92),_(),L(93,d0,2,1,"li"),L(94,u0,2,1,"li"),_()()()()()()()()(),le(95,"app-page-footer"),_(),Hc()}if(n&2){let e=i.$implicit,t=xt(5),r=E();h(),F("is-mobile",r.isXSmall()),h(),de("sidebarHandle",t),h(),_t("padding-top",r.isXSmall()?56:0,"px"),h(),de("mode",r.isXSmall()?"over":"side")("fixedInViewport",r.isXSmall())("opened",!r.isXSmall()),h(4),K("",e("options-label"),":"),h(3),K("",e("player-count-label"),":"),h(3),ce(e("player-count-select-label")),h(),de("value",r.playerCount()),h(),jt(r.playerCountList()),h(6),dt(Yc(49,Gy,r.isXSmall())),h(2),ce(e("btn-setup-label")),h(),de("cols",r.isMax1280()?1:2),h(),B(r.randomNeutralBuildings().length>0?26:-1),h(),B(r.randomHarborMasters().length>0?27:-1),h(),B(r.randomDeckbuildingModules().length>0?28:-1),h(5),ce(e("player-buildings-label")),h(3),jt(r.randomPlayerBuildings()),h(6),ce(e("further-setup-steps-label")),h(4),K("1. ",e("further-steps-step1")),h(2),K(" 2. ",e("further-steps-step2")," "),h(2),B(r.playerCount()===2?50:-1),h(),B(r.playerCount()===3?51:-1),h(),B(r.playerCount()===4?52:-1),h(2),K("3. ",e("further-steps-step3")),h(2),K("4. ",e("further-steps-step4")),h(2),K(" 5. ",e("further-steps-step5")," "),h(2),B(r.playerCount()===2?60:-1),h(),B(r.playerCount()===3?61:-1),h(),B(r.playerCount()===4?62:-1),h(2),K("6. ",e("further-steps-step6")),h(2),K("7. ",e("further-steps-step7")),h(2),K(" 8. ",e("further-steps-step8")," "),h(2),B(r.playerCount()===2?70:-1),h(),B(r.playerCount()===3?71:-1),h(),B(r.playerCount()===4?72:-1),h(2),K(" 9. ",e("further-steps-step9")," "),h(3),ce(e("further-steps-step91")),h(2),ce(e("further-steps-step92")),h(2),ce(e("further-steps-step93")),h(2),ce(e("further-steps-step94")),h(2),K("10. ",e("further-steps-step10")),h(2),K(" 11. ",e("further-steps-step11")," "),h(3),ce(e("further-steps-step111")),h(2),ce(e("further-steps-step112")),h(),B(r.playerCount()>=3?93:-1),h(),B(r.playerCount()>3?94:-1)}}var Za=class n{_randomNeutralBuildings=H([]);randomNeutralBuildings=this._randomNeutralBuildings.asReadonly();_randomPlayerBuildings=H([]);randomPlayerBuildings=this._randomPlayerBuildings.asReadonly();_randomHarborMasters=H([]);randomHarborMasters=this._randomHarborMasters.asReadonly();_randomDeckbuildingModules=H([]);randomDeckbuildingModules=this._randomDeckbuildingModules.asReadonly();playerCountList=H([{label:"2",value:2},{label:"3",value:3},{label:"4",value:4}]);gwtNzConfigService=l(ga);responsive=l(vn);storage=l($h);playerCount=this.gwtNzConfigService.playerCount;isXSmall=Mt(this.responsive.observe(ei.XSmall).pipe(w(i=>i.matches)),{initialValue:!1});isMax1280=Mt(this.responsive.observe("(max-width: 1280px)").pipe(w(i=>i.matches)),{initialValue:!1});constructor(){this.initializePlayerCount(),this.randomizeSetup()}async initializePlayerCount(){let i=await Sn(this.storage.get("rar-playerCount"));if(typeof i=="number"){this.gwtNzConfigService.setPlayerCount(i);return}this.gwtNzConfigService.setPlayerCount(2),await Sn(this.storage.set("rar-playerCount",2))}async onPlayerCountChange(i){let e=Number(i.value);this.gwtNzConfigService.setPlayerCount(e),await Sn(this.storage.set("rar-playerCount",e))}randomizeSetup(){this._randomNeutralBuildings.set(this.gwtNzConfigService.getRandomNeutralBuildingOrder()),this._randomHarborMasters.set(this.gwtNzConfigService.getRandomHarborMasters()),this._randomDeckbuildingModules.set(this.gwtNzConfigService.getRandomDeckbuildingModules()),this._randomPlayerBuildings.set(this.gwtNzConfigService.getRandomPlayerBuildings())}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=D({type:n,selectors:[["app-home"]],decls:1,vars:0,consts:[["sidenav",""],[4,"transloco"],[1,"home-component","flex","flex-col"],[3,"sidebarHandle"],[1,"sidenav-container","flex-1"],["fixedTopGap","56",1,"sidenav",3,"mode","fixedInViewport","opened"],[1,"sidenav__inner","p-4"],[1,"divider","mb-4"],["appearance","fill"],[3,"selectionChange","value"],[3,"value"],[1,"sidenav-content","flex","flex-col","min-h-full"],[1,"flex-1","px-2","xSmall:px-10","py-5"],[1,"mb-4"],["mat-flat-button","","color","primary",3,"click"],["rowHeight","180px","gutterSize","5px",3,"cols"],[1,"flex","flex-wrap"],[1,"px-2","text-2xl","xSmall:text-xl","flex-1"],[1,"list-disc","pl-8","text-gray-400"],[1,"flex"],[1,"px-2","text-2xl","xSmall:text-xl"],["alt","Harbor Master",1,"px-1","xSmall:px-2","md:px-4",3,"src"],[1,"whitespace-nowrap"]],template:function(e,t){e&1&&vt(0,h0,96,51,"ng-container",1)},dependencies:[Lf,sc,Nf,Va,La,Pa,Pr,Pf,Ff,Ci,Dn,ca,Uf,Bf,Vf,jf,Xf,Kf,fc,Wf,qf,Qf,Zf,Bh,Ka,Xa],styles:[`.is-mobile[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]{flex-shrink:0;flex-grow:1;flex-basis:auto}.divider[_ngcontent-%COMP%]{margin-bottom:16px!important}
`]})};var cm=[{path:"home",component:Za},{path:"**",redirectTo:"home",pathMatch:"full"}];var dm={providers:[il(cm),zh(),As(Rs()),wh("ngsw-worker.js",{enabled:!ds(),registrationStrategy:"registerWhenStable:30000"}),jh({config:{availableLangs:["de","en","ru","pl"],defaultLang:"en",fallbackLang:"en",missingHandler:{useFallbackTranslation:!0},reRenderOnLangChange:!0,prodMode:!ds()},loader:pa})]};ys(fa,dm).catch(n=>console.error(n));
