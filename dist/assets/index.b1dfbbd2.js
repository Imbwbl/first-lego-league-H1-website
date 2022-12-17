(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function a(){}function E(e){return e()}function L(){return Object.create(null)}function m(e){e.forEach(E)}function j(e){return typeof e=="function"}function N(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function H(e){return Object.keys(e).length===0}function P(e,t,n){e.insertBefore(t,n||null)}function I(e){e.parentNode&&e.parentNode.removeChild(e)}function T(e){return document.createElement(e)}function A(e){return Array.from(e.childNodes)}let _;function d(e){_=e}const c=[],k=[],h=[],w=[],M=Promise.resolve();let y=!1;function S(){y||(y=!0,M.then(O))}function v(e){h.push(e)}const g=new Set;let p=0;function O(){const e=_;do{for(;p<c.length;){const t=c[p];p++,d(t),z(t.$$)}for(d(null),c.length=0,p=0;k.length;)k.pop()();for(let t=0;t<h.length;t+=1){const n=h[t];g.has(n)||(g.add(n),n())}h.length=0}while(c.length);for(;w.length;)w.pop()();y=!1,g.clear(),d(e)}function z(e){if(e.fragment!==null){e.update(),m(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(v)}}const B=new Set;function F(e,t){e&&e.i&&(B.delete(e),e.i(t))}function D(e,t,n,i){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),i||v(()=>{const l=e.$$.on_mount.map(E).filter(j);e.$$.on_destroy?e.$$.on_destroy.push(...l):m(l),e.$$.on_mount=[]}),o.forEach(v)}function K(e,t){const n=e.$$;n.fragment!==null&&(m(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(e,t){e.$$.dirty[0]===-1&&(c.push(e),S(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function U(e,t,n,i,r,o,l,C=[-1]){const f=_;d(e);const s=e.$$={fragment:null,ctx:[],props:o,update:a,not_equal:r,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:L(),dirty:C,skip_bound:!1,root:t.target||f.$$.root};l&&l(s.root);let b=!1;if(s.ctx=n?n(e,t.props||{},(u,$,...x)=>{const q=x.length?x[0]:$;return s.ctx&&r(s.ctx[u],s.ctx[u]=q)&&(!s.skip_bound&&s.bound[u]&&s.bound[u](q),b&&Q(e,u)),$}):[],s.update(),b=!0,m(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){const u=A(t.target);s.fragment&&s.fragment.l(u),u.forEach(I)}else s.fragment&&s.fragment.c();t.intro&&F(e.$$.fragment),D(e,t.target,t.anchor,t.customElement),O()}d(f)}class G{$destroy(){K(this,1),this.$destroy=a}$on(t,n){if(!j(n))return a;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!H(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function J(e){let t;return{c(){t=T("main"),t.innerHTML=`<div class="headerTitle svelte-1nnahqd"><span><h1 class="title"><img src="./logo.png" class="topLogo" alt="FLL Hydrog\xE8ne"/>Hydrog\xE8ne</h1></span></div> 
  <hr class="hr1"/> 
  <div><h2 class="subtitle">Qu&#39;est-ce que l\u2019hydrog\xE8ne</h2> 
    <p class="subtitle">L&#39;hydrog\xE8ne est la plus petite mol\xE9cule qui existe dans la nature. Elle se compose de deux atomes identiques combinant simplement un proton et un \xE9lectron. L&#39;atome d&#39;hydrog\xE8ne est si petit qu&#39;il se faufile partout. La combustion d&#39;hydrog\xE8ne produit 3 fois plus d&#39;\xE9nergie que l&#39;essence. Il est pr\xE9sent dans l&#39;eau et dans beaucoup de gaz.</p> 
    <hr class="hr2"/> 
    <h2 class="subtitle">Comment produire de l\u2019hydrog\xE8ne</h2> 
    <p class="subtitle">Pour produire de l&#39;hydrog\xE8ne, on utilise principalement le gaz naturel CH<sub>4</sub>. \xC0 la fin de ce processus, on obtient du CO<sub>2</sub> qui contribue \xE0 l&#39;effet de serre. Une autre solution est d&#39;utiliser une \xE9lectrolyse de l&#39;eau. Le principe est que, \xE0 l&#39;aide de deux \xE9lectrodes, l&#39;anode et la cathode, on fait passer du courant \xE9lectrique dans l&#39;eau, s\xE9parant ainsi l&#39;hydrog\xE8ne de l&#39;oxyg\xE8ne.</p></div> 
  <hr class="hr1"/> 
  <h2 class="subtitle">Mais encore...</h2> 
  <div class="grid"><div class="card"><img src="./Toyota.jpg" alt="Image 1"/> 
      <div class="card-overlay"><h3>Premi\xE8rement</h3> 
        <p>Les moteurs \xE0 hydrog\xE8ne peuvent \xEAtre une solution int\xE9ressante pour de
          nombreuses raisons. Tout d&#39;abord, l&#39;hydrog\xE8ne est une source d&#39;\xE9nergie
          propre et renouvelable qui ne produit pas de gaz \xE0 effet de serre
          lorsqu&#39;elle est utilis\xE9e dans un moteur. Cela peut contribuer \xE0
          r\xE9duire l&#39;impact de l&#39;utilisation de v\xE9hicules sur l&#39;environnement et
          \xE0 lutter contre le changement climatique.</p></div></div> 
    <hr class="separationhr"/> 
    <div class="card"><img src="./Hydrogene-vert.jpg" alt="Image 2"/> 
      <div class="card-overlay"><h3>Deuxi\xE8mement</h3> 
        <p>L&#39;hydrog\xE8ne peut \xEAtre produit \xE0 partir de diff\xE9rentes
          sources d&#39;\xE9nergie renouvelables, telles que l&#39;\xE9nergie solaire ou
          \xE9olienne. Cela signifie que les moteurs \xE0 hydrog\xE8ne peuvent
          fonctionner sans d\xE9pendre des combustibles fossiles, qui sont limit\xE9s
          et non durables.</p></div></div> 
    <hr class="separationhr"/> 
    <div class="card"><img src="./wasserstoff.jpg" alt="Image 3"/> 
      <div class="card-overlay"><h3>Troisi\xE8mement</h3> 
        <p>Les moteurs \xE0 hydrog\xE8ne peuvent \xEAtre plus efficaces et plus
          performants que les moteurs \xE0 essence ou diesel. Ils peuvent offrir
          des performances sup\xE9rieures en termes de puissance, de vitesse et
          d&#39;autonomie, ce qui peut \xEAtre attrayant pour les conducteurs.</p></div></div> 
    <hr class="separationhr"/> 
    <div class="card"><img src="./hydrogene.jpg" alt="Image 4"/> 
      <div class="card-overlay"><h3>En resum\xE9</h3> 
        <p>Les moteurs \xE0 hydrog\xE8ne sont une solution int\xE9ressante car
          ils peuvent contribuer \xE0 la protection de l&#39;environnement, \xEAtre
          aliment\xE9s par des sources d&#39;\xE9nergie renouvelables et offrir des
          performances sup\xE9rieures \xE0 celles des moteurs \xE0 essence ou diesel.</p></div></div></div>`},m(n,i){P(n,t,i)},p:a,i:a,o:a,d(n){n&&I(t)}}}class R extends G{constructor(t){super(),U(this,t,null,J,N,{})}}new R({target:document.getElementById("app")});
